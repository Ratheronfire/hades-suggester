import { Component, OnInit } from '@angular/core';
import { Asset } from '../../asset';
import { FormGroup, FormArray } from '@angular/forms';

enum InfernalArm {
  Stygius = 'Stygius',
  Varatha = 'Varatha',
  Aegis = 'Aegis',
  Coronacht = 'Coronacht',
  Malphon = 'Malphon',
  Exagryph = 'Exagryph'
}

class PactCondition extends Asset<string> {
  rankCosts: number[];
  rankSelected: number;

  constructor(name: string, rankCosts: number[]) {
    super(name);
    this.rankCosts = rankCosts;

    this.rankSelected = 0;
  }
}

type EnumDictionary<T extends string | symbol | number, U> = {
  [K in T]: U;
};

@Component({
  selector: 'app-hades-suggester',
  templateUrl: './hades-suggester.component.html',
  styleUrls: ['./hades-suggester.component.css']
})
export class HadesSuggesterComponent implements OnInit {
  infernalArms: Asset<InfernalArm>[] = [
    new Asset(InfernalArm.Stygius, 'assets/arms/Stygian_Blade.png', 'Unlocked By Default'),
    new Asset(InfernalArm.Varatha, 'assets/arms/Eternal_Spear.png', '4 Keys to Unlock'),
    new Asset(InfernalArm.Aegis, 'assets/arms/Shield_of_Chaos.png', '3 Keys to Unlock'),
    new Asset(InfernalArm.Coronacht, 'assets/arms/Heart-Seeker_Bow.png', '1 Key to Unlock'),
    new Asset(InfernalArm.Malphon, 'assets/arms/Twin_Fists.png', '8 Keys to Unlock'),
    new Asset(InfernalArm.Exagryph, 'assets/arms/Adamant_Rail.png', '8 Keys to Unlock')
  ];

  weaponAspects: EnumDictionary<InfernalArm, Asset<string>[]> = {
    [InfernalArm.Stygius]: [
      new Asset('Aspect of Zagreus', 'assets/aspects/Zagreus_Aspect_Sword.png', 'Unlocked By Default', 'Zagreus'),
      new Asset('Aspect of Nemesis', 'assets/aspects/Nemesis_Aspect.png', '1 Titan Blood to Unlock', 'Nemesis'),
      new Asset('Aspect of Poseidon', 'assets/aspects/Poseidon_Aspect.png', '2 Titan Blood to Unlock', 'Poseidon'),
      new Asset('Aspect of Arthur', 'assets/aspects/Arthur_Aspect.png', '3 Titan Blood to Unlock', 'Arthur')
    ],
    [InfernalArm.Varatha]: [
      new Asset('Aspect of Zagreus', 'assets/aspects/Zagreus_Aspect_Spear.png', 'Unlocked By Default', 'Zagreus'),
      new Asset('Aspect of Achilles', 'assets/aspects/Achilles_Aspect.png', '1 Titan Blood to Unlock', 'Achilles'),
      new Asset('Aspect of Hades', 'assets/aspects/Hades_Aspect.png', '2 Titan Blood to Unlock', 'Hades'),
      new Asset('Aspect of Guan Yu', 'assets/aspects/Guan_Yu_Aspect.png', '3 Titan Blood to Unlock', 'Guan Yu')
    ],
    [InfernalArm.Aegis]: [
      new Asset('Aspect of Zagreus', 'assets/aspects/Zagreus_Aspect_Shield.png', 'Unlocked By Default', 'Zagreus'),
      new Asset('Aspect of Chaos', 'assets/aspects/Chaos_Aspect.png', '1 Titan Blood to Unlock', 'Chaos'),
      new Asset('Aspect of Zeus', 'assets/aspects/Zeus_Aspect.png', '2 Titan Blood to Unlock', 'Zeus'),
      new Asset('Aspect of Beowulf', 'assets/aspects/Shield_aspect_beuwulf.png', '3 Titan Blood to Unlock', 'Beowulf')
    ],
    [InfernalArm.Coronacht]: [
      new Asset('Aspect of Zagreus', 'assets/aspects/Zagreus_Aspect_Bow.png', 'Unlocked By Default', 'Zagreus'),
      new Asset('Aspect of Chiron', 'assets/aspects/Chiron_Aspect.png', '1 Titan Blood to Unlock', 'Chiron'),
      new Asset('Aspect of Hera', 'assets/aspects/Hera_Aspect.png', '2 Titan Blood to Unlock', 'Hera'),
      new Asset('Aspect of Rama', 'assets/aspects/Rama_aspect.png', '3 Titan Blood to Unlock', 'Rama')
    ],
    [InfernalArm.Malphon]: [
      new Asset('Aspect of Zagreus', 'assets/aspects/Zagreus_Aspect_Bow.png', 'Unlocked By Default', 'Zagreus'),
      new Asset('Aspect of Talos', 'assets/aspects/Talos_Aspect.png', '1 Titan Blood to Unlock', 'Talos'),
      new Asset('Aspect of Demeter', 'assets/aspects/Demeter_Aspect.png', '2 Titan Blood to Unlock', 'Demeter'),
      new Asset('Aspect of Gilgamesh', 'assets/aspects/Gilgamesh_Aspect.png', '3 Titan Blood to Unlock', 'Gilgamesh')
    ],
    [InfernalArm.Exagryph]: [
      new Asset('Aspect of Zagreus', 'assets/aspects/Zagreus_Rail_Image.png', 'Unlocked By Default', 'Zagreus'),
      new Asset('Aspect of Eris', 'assets/aspects/Eris_Aspect.png', '1 Titan Blood to Unlock', 'Eris'),
      new Asset('Aspect of Hestia', 'assets/aspects/Hestia_Aspect_Image.png', '2 Titan Blood to Unlock', 'Hestia'),
      new Asset('Aspect of Lucifer', 'assets/aspects/Lycifer_aspect.png', '3 Titan Blood to Unlock', 'Lucifer')
    ]
  };

  keepsakes = [
    new Asset('Old Spiked Collar', 'assets/keepsakes/Old_Spiked_Collar.png', 'Given by Cerberus'),
    new Asset('Myrmidon Bracer', 'assets/keepsakes/Myrmidon_Bracer.png', 'Given by Achilles'),
    new Asset('Black Shawl', 'assets/keepsakes/Black_Shawl.png', 'Given by Nyx'),
    new Asset('Pierced Butterfly', 'assets/keepsakes/Pierced_Butterfly.png', 'Given by Thanatos'),
    new Asset('Bone Hourglass', 'assets/keepsakes/Bone_Hourglass.png', 'Given by Charon'),
    new Asset('Chthonic Coin Purse', 'assets/keepsakes/Chthonic_Coin_Purse.png', 'Given by Hypnos'),
    new Asset('Skull Earring', 'assets/keepsakes/Skull_Earring.png', 'Given by Megaera'),
    new Asset('Distant Memory', 'assets/keepsakes/Distant_Memory.png', 'Given by Orpheus'),
    new Asset('Harpy Feather Duster', 'assets/keepsakes/Harpy_Feather_Duster.png', 'Given by Dusa'),
    new Asset('Lucky Tooth', 'assets/keepsakes/Lucky_Tooth.png', 'Given by Skelly'),
    new Asset('Thunder Signet', 'assets/keepsakes/Thunder_Signet.png', 'Given by Zeus'),
    new Asset('Conch Shell', 'assets/keepsakes/Conch_Shell.png', 'Given by Poseidon'),
    new Asset('Owl Pendant', 'assets/keepsakes/Owl_Pendant.png', 'Given by Athena'),
    new Asset('Eternal Rose', 'assets/keepsakes/Eternal_Rose.png', 'Given by Aphrodite'),
    new Asset('Blood-Filled Vial', 'assets/keepsakes/Blood-Filled_Vial.png', 'Given by Ares'),
    new Asset('Adamant Arrowhead', 'assets/keepsakes/Adamant_Arrowhead.png', 'Given by Artemis'),
    new Asset('Overflowing Cup', 'assets/keepsakes/Overflowing_Cup.png', 'Given by Dionysus'),
    new Asset('Lambent Plume', 'assets/keepsakes/Lambent_Plume.png', 'Given by Hermes'),
    new Asset('Frostbitten Horn', 'assets/keepsakes/Frostbitten_Horn.png', 'Given by Demeter'),
    new Asset('Cosmic Egg', 'assets/keepsakes/Cosmic_Egg.png', 'Given by Chaos'),
    new Asset('Shattered Shackle', 'assets/keepsakes/Shattered_Shackle.png', 'Given by Sisyphus'),
    new Asset('Evergreen Acorn', 'assets/keepsakes/Evergreen_Acorn.png', 'Given by Eurydice'),
    new Asset('Broken Spearpoint', 'assets/keepsakes/Broken_Spearpoint.png', 'Given by Patroclus'),
    new Asset('Pom Blossom', 'assets/keepsakes/Pom_Blossom.png', 'Given by Persephone'),
    new Asset('Sigil of the Dead', 'assets/keepsakes/Sigil_of_the_Dead.png', 'Given by Hades')
  ];

  companions = [
    new Asset('Battie', 'assets/companions/Battie.png', 'Given by Megaera'),
    new Asset('Mort', 'assets/companions/Mort.png', 'Given by Thanatos'),
    new Asset('Rib', 'assets/companions/Rib.png', 'Given by Skelly'),
    new Asset('Shady', 'assets/companions/Shady.png', 'Given by Sisyphus'),
    new Asset('Fidi', 'assets/companions/Fidi.png', 'Given by Dusa'),
    new Asset('Antos', 'assets/companions/Antos.png', 'Given by Achilles')
  ]

  pactConditions: PactCondition[] = [
    new PactCondition('Hard Labor', [0, 1, 1, 1, 1, 1]),
    new PactCondition('Lasting Consequences', [0, 1, 1, 1, 1]),
    new PactCondition('Convenience Fee', [0, 1, 1]),
    new PactCondition('Jury Summons', [0, 1, 1, 1]),
    new PactCondition('Extreme Measures', [0, 1, 2, 3, 4]),
    new PactCondition('Calisthenics Program', [0, 1, 1]),
    new PactCondition('Benefits Package', [0, 2, 3]),
    new PactCondition('Middle Management', [0, 2]),
    new PactCondition('Underworld Customs', [0, 2]),
    new PactCondition('Forced Overtime', [0, 3, 3]),
    new PactCondition('Heightened Security', [0, 1]),
    new PactCondition('Routine Inspection', [0, 2, 2, 2, 2]),
    new PactCondition('Damage Control', [0, 1, 1]),
    new PactCondition('Approval Process', [0, 2, 3]),
    new PactCondition('Tight Deadline', [0, 1, 2, 3])
  ];

  selectedWeapon: Asset<InfernalArm> = this.infernalArms[0];
  selectedAspect: Asset<string> = this.weaponAspects[InfernalArm.Stygius][0];

  selectedKeepsake = this.keepsakes[0];
  selectedCompanion = this.companions[0];

  desiredHeat = 0;
  cumulativeHeat = 0;

  loadoutMade = false;

  settingsForm = new FormGroup({});
  armFormGroup = new FormGroup({});
  aspectGroups = new FormArray([]);
  keepsakeFormGroup = new FormGroup({});
  companionFormGroup = new FormGroup({});
  pactFormGroup = new FormGroup({});

  constructor() {
    for (let i = 0; i < this.infernalArms.length; i++) {
      this.aspectGroups.push(new FormGroup({}));
    }

    this.settingsForm = new FormGroup({
      armFormGroup: this.armFormGroup,
      aspectGroups: this.aspectGroups,
      keepsakeFormGroup: this.keepsakeFormGroup,
      companionFormGroup: this.companionFormGroup,
      pactFormGroup: this.pactFormGroup
    });
  }

  ngOnInit(): void {
  }

  createLoadout() {
    this.selectedWeapon = this.randomAsset(this.infernalArms);
    this.selectedAspect = this.randomAsset(this.weaponAspects[this.selectedWeapon.key]);

    this.selectedKeepsake = this.randomAsset(this.keepsakes);
    this.selectedCompanion = this.randomAsset(this.companions);

    for (let condition of this.pactConditions) {
      condition.rankSelected = 0;
    }

    this.cumulativeHeat = 0;
    while (this.cumulativeHeat < this.desiredHeat) {
      const selectableConditions = this.pactConditions.filter(condition => {
        if (condition.rankSelected == condition.rankCosts.length - 1 || !condition.enabledForSuggesting) {
          return false;
        }
        
        const remainingHeat = this.desiredHeat - this.cumulativeHeat;
        return condition.rankCosts[condition.rankSelected + 1] <= remainingHeat;
      });

      if (selectableConditions.length == 0) {
        break;
      }

      let randomConditon: PactCondition = this.randomAsset(selectableConditions) as PactCondition;

      randomConditon.rankSelected++;
      this.cumulativeHeat += randomConditon.rankCosts[randomConditon.rankSelected];
    }

    this.loadoutMade = true;
  }

  onArmUpdate(checkboxObject: Asset<InfernalArm>) {
    const checked = checkboxObject.enabledForSuggesting;
    const index = this.infernalArms.indexOf(checkboxObject);

    const aspectGroup = this.aspectGroups.controls[index] as FormGroup;
    
    for (let control of Object.values(aspectGroup.controls)) {
      if (checked) {
        control.enable();
      } else {
        control.disable();
      }
    }
  }

  randomAsset<T>(objects: Array<Asset<T>>): Asset<T> {
    const validAssets = objects.filter(object => object.enabledForSuggesting);
    return this.randomElement(validAssets);
  }

  randomElement<T>(objects: Array<T>): T {
    const index = Math.floor(Math.random() * objects.length);
    return objects[index];
  }

  get selectedConditions(): PactCondition[] {
    return this.pactConditions.filter(condition => condition.rankSelected > 0);
  }

  getAspectGroup(index: number): FormGroup {
    return this.aspectGroups.controls[index] as FormGroup;
  }
}
