import { Component, OnInit } from '@angular/core';
import { Asset, PactCondition, MirrorPerk } from '../../asset';
import { FormGroup, FormArray } from '@angular/forms';

enum InfernalArm {
  Stygius = 'Stygius',
  Varatha = 'Varatha',
  Aegis = 'Aegis',
  Coronacht = 'Coronacht',
  Malphon = 'Malphon',
  Exagryph = 'Exagryph'
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
    new Asset(InfernalArm.Stygius, 'assets/arms/Stygian_Blade.png', 'The Stygian Blade\nUnlocked By Default'),
    new Asset(InfernalArm.Varatha, 'assets/arms/Eternal_Spear.png', 'The Eternal Spear\n4 Keys to Unlock'),
    new Asset(InfernalArm.Aegis, 'assets/arms/Shield_of_Chaos.png', 'The Shield of Chaos\n3 Keys to Unlock'),
    new Asset(InfernalArm.Coronacht, 'assets/arms/Heart-Seeker_Bow.png', 'The Heart-Seeking Bow\n1 Key to Unlock'),
    new Asset(InfernalArm.Malphon, 'assets/arms/Twin_Fists.png', 'The Twin Fists of Malphon\n8 Keys to Unlock'),
    new Asset(InfernalArm.Exagryph, 'assets/arms/Adamant_Rail.png', 'The Adamant Rail\n8 Keys to Unlock')
  ];

  weaponAspects: EnumDictionary<InfernalArm, Asset<string>[]> = {
    [InfernalArm.Stygius]: [
      new Asset('Aspect of Zagreus', 'assets/aspects/Zagreus_Aspect_Sword.png', 'The form in which the blade of the underworld first revealed itself.\nUnlocked By Default', 'Zagreus'),
      new Asset('Aspect of Nemesis', 'assets/aspects/Nemesis_Aspect.png', 'For 3 Sec. after you Special, your Attack may deal Critical damage.\n1 Titan Blood to Unlock', 'Nemesis'),
      new Asset('Aspect of Poseidon', 'assets/aspects/Poseidon_Aspect.png', 'Your Special dislodges Bloodstones from foes.\n2 Titan Blood to Unlock', 'Poseidon'),
      new Asset('Aspect of Arthur', 'assets/aspects/Arthur_Aspect.png', 'You have Holy Excalibur*, and +50 Health to your Life Total.\n3 Titan Blood to Unlock', 'Arthur')
    ],
    [InfernalArm.Varatha]: [
      new Asset('Aspect of Zagreus', 'assets/aspects/Zagreus_Aspect_Spear.png', 'The form in which the eternal spear first revealed itself.\nUnlocked By Default', 'Zagreus'),
      new Asset('Aspect of Achilles', 'assets/aspects/Achilles_Aspect.png', 'After your Special, you can retrieve your Spear with Raging Rush.\n1 Titan Blood to Unlock', 'Achilles'),
      new Asset('Aspect of Hades', 'assets/aspects/Hades_Aspect.png', 'Your Spin Attack becomes Punishing Sweep.\n2 Titan Blood to Unlock', 'Hades'),
      new Asset('Aspect of Guan Yu', 'assets/aspects/Guan_Yu_Aspect.png', 'You have the Frost Fair Blade*, but your life and healing are reduced.\n3 Titan Blood to Unlock', 'Guan Yu')
    ],
    [InfernalArm.Aegis]: [
      new Asset('Aspect of Zagreus', 'assets/aspects/Zagreus_Aspect_Shield.png', 'The form in which the shield of chaos first revealed itself.\nUnlocked By Default', 'Zagreus'),
      new Asset('Aspect of Chaos', 'assets/aspects/Chaos_Aspect.png', 'After you Bull Rush, your next Special throws multiple shields.\n1 Titan Blood to Unlock', 'Chaos'),
      new Asset('Aspect of Zeus', 'assets/aspects/Zeus_Aspect.png', '\Your Special is replaced with the Blitz Disc.\n2 Titan Blood to Unlock', 'Zeus'),
      new Asset('Aspect of Beowulf', 'assets/aspects/Shield_aspect_beuwulf.png', 'You have Naegling\'s Board but take +10% damage.\n3 Titan Blood to Unlock', 'Beowulf')
    ],
    [InfernalArm.Coronacht]: [
      new Asset('Aspect of Zagreus', 'assets/aspects/Zagreus_Aspect_Bow.png', 'The form in which the heart-seeking bow first revealed itself.\nUnlocked By Default', 'Zagreus'),
      new Asset('Aspect of Chiron', 'assets/aspects/Chiron_Aspect.png', 'Your Special automatically seeks the foe last struck by your Attack.\n1 Titan Blood to Unlock', 'Chiron'),
      new Asset('Aspect of Hera', 'assets/aspects/Hera_Aspect.png', 'Your Cast loads into your next Attack, firing on impact.\n2 Titan Blood to Unlock', 'Hera'),
      new Asset('Aspect of Rama', 'assets/aspects/Rama_aspect.png', 'You have Celestial Sharanga, which can cause Shared Suffering.\n3 Titan Blood to Unlock', 'Rama')
    ],
    [InfernalArm.Malphon]: [
      new Asset('Aspect of Zagreus', 'assets/aspects/Zagreus_Aspect_Bow.png', 'The form in which the Twin Fists first revealed themselves.\nUnlocked By Default', 'Zagreus'),
      new Asset('Aspect of Talos', 'assets/aspects/Talos_Aspect.png', 'Your Special becomes Magnetic Cutter; its pull deals 20 damage.\n1 Titan Blood to Unlock', 'Talos'),
      new Asset('Aspect of Demeter', 'assets/aspects/Demeter_Aspect.png', 'After landing 12 strikes, your next Special hits more times.\n2 Titan Blood to Unlock', 'Demeter'),
      new Asset('Aspect of Gilgamesh', 'assets/aspects/Gilgamesh_Aspect.png', 'You have the Claws of Enkidu, whose Dash-Upper can Maim foes.\n3 Titan Blood to Unlock', 'Gilgamesh')
    ],
    [InfernalArm.Exagryph]: [
      new Asset('Aspect of Zagreus', 'assets/aspects/Zagreus_Rail_Image.png', 'The form in which the Adamant Rail first revealed itself.\nUnlocked By Default', 'Zagreus'),
      new Asset('Aspect of Eris', 'assets/aspects/Eris_Aspect.png', 'For 4 seconds after absorbing your Special\'s blast, deal more damage.\n1 Titan Blood to Unlock', 'Eris'),
      new Asset('Aspect of Hestia', 'assets/aspects/Hestia_Aspect_Image.png', 'After you manually Reload, your next shot is empowered.\n2 Titan Blood to Unlock', 'Hestia'),
      new Asset('Aspect of Lucifer', 'assets/aspects/Lycifer_aspect.png', 'You have Igneus Eden, which launches volatile Hellfire.\n3 Titan Blood to Unlock', 'Lucifer')
    ]
  };

  keepsakes = [
    new Asset('Old Spiked Collar', 'assets/keepsakes/Old_Spiked_Collar.png', 'Gain +25/38/50 Health.\nGiven by Cerberus'),
    new Asset('Myrmidon Bracer', 'assets/keepsakes/Myrmidon_Bracer.png', 'Take 20/25/30% less damage from the front, but 10% more from the back.\nGiven by Achilles'),
    new Asset('Black Shawl', 'assets/keepsakes/Black_Shawl.png', 'Deal 10/15/20% damage striking undamaged foes; also striking foes from behind.\nGiven by Nyx'),
    new Asset('Pierced Butterfly', 'assets/keepsakes/Pierced_Butterfly.png', 'Gain +1/1.5/2% damage for each Encounter you clear without taking damage.\nGiven by Thanatos'),
    new Asset('Bone Hourglass', 'assets/keepsakes/Bone_Hourglass.png', 'Items from the Well of Charon have durations increased by +4/6/8 Encounters.\nGiven by Charon'),
    new Asset('Chthonic Coin Purse', 'assets/keepsakes/Chthonic_Coin_Purse.png', 'Receive 100/125/150 Obols to spend as you please (once per escape attempt).\nGiven by Hypnos'),
    new Asset('Skull Earring', 'assets/keepsakes/Skull_Earring.png', 'Deal 20/30/40% more damage while at 35% Health or less.\nGiven by Megaera'),
    new Asset('Distant Memory', 'assets/keepsakes/Distant_Memory.png', 'Deal 10/20/30% more damage to distant foes (at least 500 units away).\nGiven by Orpheus'),
    new Asset('Harpy Feather Duster', 'assets/keepsakes/Harpy_Feather_Duster.png', 'Broken urns have a 3/5/6% chance to contain healing items.\nGiven by Dusa'),
    new Asset('Lucky Tooth', 'assets/keepsakes/Lucky_Tooth.png', 'Automatically restore up to 50/75/100 Health when your Life Total is depleted (once per escape attempt).\nGiven by Skelly'),
    new Asset('Thunder Signet', 'assets/keepsakes/Thunder_Signet.png', 'The next Boon you find will be from Zeus. His blessings have +10/15/20% chance to be Rare or better.\nGiven by Zeus'),
    new Asset('Conch Shell', 'assets/keepsakes/Conch_Shell.png', 'The next Boon you find will be from Poseidon. His blessings have +10/15/20% chance to be Rare or better.\nGiven by Poseidon'),
    new Asset('Owl Pendant', 'assets/keepsakes/Owl_Pendant.png', 'The next Boon you find will be from Athena. Her blessings have +10/15/20% chance to be Rare or better.\nGiven by Athena'),
    new Asset('Eternal Rose', 'assets/keepsakes/Eternal_Rose.png', 'The next Boon you find will be from Aphrodite. Her blessings have +10/15/20% chance to be Rare or better.\nGiven by Aphrodite'),
    new Asset('Blood-Filled Vial', 'assets/keepsakes/Blood-Filled_Vial.png', 'The next Boon you find will be from Ares. His blessings have +10/15/20% chance to be Rare or better.\nGiven by Ares'),
    new Asset('Adamant Arrowhead', 'assets/keepsakes/Adamant_Arrowhead.png', 'The next Boon you find will be from Artemis. Her blessings have +10/15/20% chance to be Rare or better.\nGiven by Artemis'),
    new Asset('Overflowing Cup', 'assets/keepsakes/Overflowing_Cup.png', 'The next Boon you find will be from Dionysus. His blessings have +10/15/20% chance to be Rare or better.\nGiven by Dionysus'),
    new Asset('Lambent Plume', 'assets/keepsakes/Lambent_Plume.png', 'Gain +1.0/1.1/1.2% Dodge chance and move speed for each Encounter you clear quickly.\nGiven by Hermes'),
    new Asset('Frostbitten Horn', 'assets/keepsakes/Frostbitten_Horn.png', 'The next Boon you find will be from Demeter. Her blessings have +10/15/20% chance to be Rare or better.\nGiven by Demeter'),
    new Asset('Cosmic Egg', 'assets/keepsakes/Cosmic_Egg.png', 'Enter Chaos Gates without losing Health. Blessings from Chaos have +20/30/40% chance to be Rare or better.\nGiven by Chaos'),
    new Asset('Shattered Shackle', 'assets/keepsakes/Shattered_Shackle.png', 'Your Attack, Special, and Cast each deal +50/75/100% damage while not empowered by a Boon.\nGiven by Sisyphus'),
    new Asset('Evergreen Acorn', 'assets/keepsakes/Evergreen_Acorn.png', 'In the final encounter in each underworld region, take 0 damage the first 3/4/5 times foes hit you.\nGiven by Eurydice'),
    new Asset('Broken Spearpoint', 'assets/keepsakes/Broken_Spearpoint.png', 'After taking damage, become invulnerable for 1/1.25/1.5 sec. Refreshes after 7 Sec.\nGiven by Patroclus'),
    new Asset('Pom Blossom', 'assets/keepsakes/Pom_Blossom.png', 'After every 6/5/4 Encounters, gain +1 Lv.\nGiven by Persephone'),
    new Asset('Sigil of the Dead', 'assets/keepsakes/Sigil_of_the_Dead.png', 'Your Call becomes Hades\' Aid, which briefly makes you Invisible; your God Gauge starts 10/20/30% full.\nGiven by Hades')
  ];

  companions = [
    new Asset('Battie', 'assets/companions/Battie.png', 'Your Summon deals 2500 damage in an area near your closest foe, then continually down the line.\nGiven by Megaera'),
    new Asset('Mort', 'assets/companions/Mort.png', 'Your Summon deals 3500 damage in an area in front of you, after a brief delay.\nGiven by Thanatos'),
    new Asset('Rib', 'assets/companions/Rib.png', 'Your Summon creates a distraction with 250Health, provoking your foes to attack it until it dies.\nGiven by Skelly'),
    new Asset('Shady', 'assets/companions/Shady.png', 'Your Summon deals 1000 damage in an area and drops a smattering of Health, Darkness, and Obols.\nGiven by Sisyphus'),
    new Asset('Fidi', 'assets/companions/Fidi.png', 'Your Summon joins you for 30 sec, repeatedly firing shots that petrify foes and deal 70 damage.\nGiven by Dusa'),
    new Asset('Antos', 'assets/companions/Antos.png', 'Your Summon deals 1500 damage to 2 foes one after another.\nGiven by Achilles')
  ]

  mirrorPerks: MirrorPerk[] = [
    new MirrorPerk('Shadow Presence', 'Fiery Presence', 'Each rank gives you +10% damage when you strike foes from behind.', 'Each rank makes you deal 15% damage when you strike undamaged foes.'),
    new MirrorPerk('Chthonic Vitality', 'Dark Regeneration', 'Each rank restores 1 Health when you enter each chamber.', 'Each rank makes +30% of any Darkness you collect restore your Health by that much.'),
    new MirrorPerk('Death Defiance', 'Stubborn Defiance', 'Each rank restores you for 50% Health 1 time when your Life Total is depleted.', 'This restores you to 30% Health 1 time per chamber when your Life Total is depleted.'),
    new MirrorPerk('Greater Reflex', 'Ruthless Reflex', 'Each rank lets you chain +1 Dash before briefly recovering.', 'If you Dash just before getting hit, gain +50% damage and dodge chance for 2 Sec.'),
    new MirrorPerk('Boiling Blood', 'Abyssal Blood', 'Each rank gives you +10% Attack & Special damage to foes with Bloodstones in them.', 'Each rank reduces foes\' speed and damage by -6% while they have Bloodstones in them.'),
    new MirrorPerk('Infernal Soul', 'Stygian Soul', 'Each rank gives you +1 Bloodstone for your Cast.', 'Your Bloodstone regenerates, but no longer drops. Each rank makes this 1 Sec. faster.'),
    new MirrorPerk('Deep Pockets', 'Golden Touch', 'Each rank grants you 10 Obols at the start of each escape from the House of Hades.', 'Each rank grants you +5% Obols of your total each time you clear an Underworld region.'),
    new MirrorPerk('Thick Skin', 'High Confidence', 'Each rank adds +5 Health to your Life Total.', 'Each rank gives you +5% damage, while you have 80% Health or greater.'),
    new MirrorPerk('Privileged Status', 'Family Favorite', 'Each rank gives you +20% damage vs. foes afflicted by at least two Status Curse effects.', 'Each rank gives you +2.5% damage for each different Olympian whose Boons you have.'),
    new MirrorPerk('Olympian Favor', 'Dark Foresight', 'Each rank adds a 1% bonus chance for a Boon to be Rare.', 'Each rank gives you +2% greater chance for Gold Laurel rewards (Boons, Hammers, Obol and Poms).'),
    new MirrorPerk('Gods\' Pride', 'Gods\' Legacy ', 'Each rank adds a 1% bonus chance for a Boon to be Epic.', 'Each rank gives you +1% greater chance for a Boon to be Legendary or a Duo (if possible).'),
    new MirrorPerk('Fated Authority', 'Fated Persuasion', 'Each rank gives you 1 die, used to randomly alter the reward for the next chamber.', 'Each rank gives you 1 die, used to randomly alter Boon and Well of Charon choices.')
  ]

  enabledMirrorPerks: MirrorPerk[] = []

  pactConditions: PactCondition[] = [
    new PactCondition('Hard Labor', [0, 1, 1, 1, 1, 1], 'Each rank makes your foes deal +20% damage.'),
    new PactCondition('Lasting Consequences', [0, 1, 1, 1, 1], 'Each rank makes any sources of Health restoration less effective by -25%.'),
    new PactCondition('Convenience Fee', [0, 1, 1], 'Each rank raises Obols prices by +40%.'),
    new PactCondition('Jury Summons', [0, 1, 1, 1], 'Each rank makes you face +20% additional enemies in standard Encounters.'),
    new PactCondition('Extreme Measures', [0, 1, 2, 3, 4], 'Each rank arms 1 Underworld boss with new techniques (starting in Tartarus).'),
    new PactCondition('Calisthenics Program', [0, 1, 1], 'Each rank gives your foes +15% Health to their Life Total.'),
    new PactCondition('Benefits Package', [0, 2, 3], 'Each rank grants most Armored foes +1 Perk (dangerous traits that vary every Encounter).'),
    new PactCondition('Middle Management', [0, 2], 'Each rank forces you to deal with +1 Elite foe or other problem in mini-boss Encounters.'),
    new PactCondition('Underworld Customs', [0, 2], 'Each rank requires a sacrifice of 1 Boon on leaving each Underworld region.'),
    new PactCondition('Forced Overtime', [0, 3, 3], 'Each rank makes your foes move and attack +20% faster.'),
    new PactCondition('Heightened Security', [0, 1], 'Each rank makes Traps and Magma deal +400% damage.'),
    new PactCondition('Routine Inspection', [0, 2, 2, 2, 2], 'Each rank deactivates -3 Talents from the Mirror of Night, starting from the bottom.'),
    new PactCondition('Damage Control', [0, 1, 1], 'Each rank gives your foes 1 Shielded Health, which makes them ignore an instance of damage.'),
    new PactCondition('Approval Process', [0, 2, 3], 'Each rank reduces your choices by -1 whenever you receive Boons and upgrades.'),
    new PactCondition('Tight Deadline', [0, 1, 2, 3], 'Each rank reduces time to clear each Underworld region by -2:00, starting at 9:00.')
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
  mirrorFormGroup = new FormGroup({});
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
      mirrorFormGroup: this.mirrorFormGroup,
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

    for (let perk of this.mirrorPerks) {
      perk.pickRandomPerk();
    }

    this.enabledMirrorPerks = this.mirrorPerks.filter(perk => perk.enabledForSuggesting);

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
