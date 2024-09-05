'use strict';

var items_all = [{id: 'abyssal_lagiacrus', name: 'abyssal_lagiacrus', image: 'image/offical_thumbnail/Abyssal_Lagiacrus.png'},
    {id: 'acidic_glavenus', name: 'acidic_glavenus', image: 'image/offical_thumbnail/Acidic_Glavenus.png'},
    {id: 'agnaktor', name: 'agnaktor', image: 'image/offical_thumbnail/Agnaktor.png'},
    {id: 'ahtal-ka', name: 'ahtal-ka', image: 'image/offical_thumbnail/Ahtal-Ka.png'},
    {id: 'ahtal-neset', name: 'ahtal-neset', image: 'image/offical_thumbnail/Ahtal-Neset.png'},
    {id: 'akantor', name: 'akantor', image: 'image/offical_thumbnail/Akantor.png'},
    {id: 'aknosom', name: 'aknosom', image: 'image/offical_thumbnail/Aknosom.png'},
    {id: 'alatreon', name: 'alatreon', image: 'image/offical_thumbnail/Alatreon.png'},
    {id: 'almudron', name: 'almudron', image: 'image/offical_thumbnail/Almudron.png'},
    {id: 'amatsu', name: 'amatsu', image: 'image/offical_thumbnail/Amatsu.png'},
    {id: 'anjanath', name: 'anjanath', image: 'image/offical_thumbnail/Anjanath.png'},
    {id: 'apex_arzuros', name: 'apex_arzuros', image: 'image/offical_thumbnail/Apex_Arzuros.png'},
    {id: 'apex_diablos', name: 'apex_diablos', image: 'image/offical_thumbnail/Apex_Diablos.png'},
    {id: 'apex_mizutsune', name: 'apex_mizutsune', image: 'image/offical_thumbnail/Apex_Mizutsune.png'},
    {id: 'apex_rathalos', name: 'apex_rathalos', image: 'image/offical_thumbnail/Apex_Rathalos.png'},
    {id: 'apex_rathian', name: 'apex_rathian', image: 'image/offical_thumbnail/Apex_Rathian.png'},
    {id: 'apex_zinogre', name: 'apex_zinogre', image: 'image/offical_thumbnail/Apex_Zinogre.png'},
    {id: 'arzuros', name: 'arzuros', image: 'image/offical_thumbnail/Arzuros.png'},
    {id: 'ashen_lao-shan_lung', name: 'ashen_lao-shan_lung', image: 'image/offical_thumbnail/Ashen_Lao-Shan_Lung.png'},
    {id: 'ash_kecha_wacha', name: 'ash_kecha_wacha', image: 'image/offical_thumbnail/Ash_Kecha_Wacha.png'},
    {id: 'astalos', name: 'astalos', image: 'image/offical_thumbnail/Astalos.png'},
    {id: 'aurora_somnacanth', name: 'aurora_somnacanth', image: 'image/offical_thumbnail/Aurora_Somnacanth.png'},
    {id: 'azure_rathalos', name: 'azure_rathalos', image: 'image/offical_thumbnail/Azure_Rathalos.png'},
    {id: 'baleful_gigginox', name: 'baleful_gigginox', image: 'image/offical_thumbnail/Baleful_Gigginox.png'},
    {id: 'banbaro', name: 'banbaro', image: 'image/offical_thumbnail/Banbaro.png'},
    {id: 'barioth', name: 'barioth', image: 'image/offical_thumbnail/Barioth.png'},
    {id: 'barroth', name: 'barroth', image: 'image/offical_thumbnail/Barroth.png'},
    {id: 'basarios', name: 'basarios', image: 'image/offical_thumbnail/Basarios.png'},
    {id: 'bazelgeuse', name: 'bazelgeuse', image: 'image/offical_thumbnail/Bazelgeuse.png'},
    {id: 'beotodus', name: 'beotodus', image: 'image/offical_thumbnail/Beotodus.png'},
    {id: 'berserk_tetsucabra', name: 'berserk_tetsucabra', image: 'image/offical_thumbnail/Berserk_Tetsucabra.png'},
    {id: 'bishaten', name: 'bishaten', image: 'image/offical_thumbnail/Bishaten.png'},
    {id: 'blackveil_vaal_hazak', name: 'blackveil_vaal_hazak', image: 'image/offical_thumbnail/Blackveil_Vaal_Hazak.png'},
    {id: 'black_diablos', name: 'black_diablos', image: 'image/offical_thumbnail/Black_Diablos.png'},
    {id: 'black_gravios', name: 'black_gravios', image: 'image/offical_thumbnail/Black_Gravios.png'},
    {id: 'blangonga', name: 'blangonga', image: 'image/offical_thumbnail/Blangonga.png'},
    {id: 'bloodbath_diablos', name: 'bloodbath_diablos', image: 'image/offical_thumbnail/Bloodbath_Diablos.png'},
    {id: 'blood_orange_bishaten', name: 'blood_orange_bishaten', image: 'image/offical_thumbnail/Blood_Orange_Bishaten.png'},
    {id: 'blue_yian_kut-ku', name: 'blue_yian_kut-ku', image: 'image/offical_thumbnail/Blue_Yian_Kut-Ku.png'},
    {id: 'boltreaver_astalos', name: 'boltreaver_astalos', image: 'image/offical_thumbnail/Boltreaver_Astalos.png'},
    {id: 'brachydios', name: 'brachydios', image: 'image/offical_thumbnail/Brachydios.png'},
    {id: 'brute_tigrex', name: 'brute_tigrex', image: 'image/offical_thumbnail/Brute_Tigrex.png'},
    {id: 'bulldrome', name: 'bulldrome', image: 'image/offical_thumbnail/Bulldrome.png'},
    {id: 'ceadeus', name: 'ceadeus', image: 'image/offical_thumbnail/Ceadeus.png'},
    {id: 'cephadrome', name: 'cephadrome', image: 'image/offical_thumbnail/Cephadrome.png'},
    {id: 'chameleos', name: 'chameleos', image: 'image/offical_thumbnail/Chameleos.png'},
    {id: 'chaotic_gore_magala', name: 'chaotic_gore_magala', image: 'image/offical_thumbnail/Chaotic_Gore_Magala.png'},
    {id: 'congalala', name: 'congalala', image: 'image/offical_thumbnail/Congalala.png'},
    {id: 'copper_blangonga', name: 'copper_blangonga', image: 'image/offical_thumbnail/Copper_Blangonga.png'},
    {id: 'coral_pukei-pukei', name: 'coral_pukei-pukei', image: 'image/offical_thumbnail/Coral_Pukei-Pukei.png'},
    {id: 'crimson_fatalis', name: 'crimson_fatalis', image: 'image/offical_thumbnail/Crimson_Fatalis.png'},
    {id: 'crimson_glow_valstrax', name: 'crimson_glow_valstrax', image: 'image/offical_thumbnail/Crimson_Glow_Valstrax.png'},
    {id: 'crimson_qurupeco', name: 'crimson_qurupeco', image: 'image/offical_thumbnail/Crimson_Qurupeco.png'},
    {id: 'crystalbeard_uragaan', name: 'crystalbeard_uragaan', image: 'image/offical_thumbnail/Crystalbeard_Uragaan.png'},
    {id: 'dah-ren_mohran', name: 'dah-ren_mohran', image: 'image/offical_thumbnail/Dah\'ren_Mohran.png'},
    {id: 'daimyo_hermitaur', name: 'daimyo_hermitaur', image: 'image/offical_thumbnail/Daimyo_Hermitaur.png'},
    {id: 'dalamadur', name: 'dalamadur', image: 'image/offical_thumbnail/Dalamadur.png'},
    {id: 'deadeye_yian_garuga', name: 'deadeye_yian_garuga', image: 'image/offical_thumbnail/Deadeye_Yian_Garuga.png'},
    {id: 'desert_seltas', name: 'desert_seltas', image: 'image/offical_thumbnail/Desert_Seltas.png'},
    {id: 'desert_seltas_queen', name: 'desert_seltas_queen', image: 'image/offical_thumbnail/Desert_Seltas_Queen.png'},
    {id: 'deviljho', name: 'deviljho', image: 'image/offical_thumbnail/Deviljho.png'},
    {id: 'diablos', name: 'diablos', image: 'image/offical_thumbnail/Diablos.png'},
    {id: 'dire_miralis', name: 'dire_miralis', image: 'image/offical_thumbnail/Dire_Miralis.png'},
    {id: 'dodogama', name: 'dodogama', image: 'image/offical_thumbnail/Dodogama.png'},
    {id: 'dreadking_rathalos', name: 'dreadking_rathalos', image: 'image/offical_thumbnail/Dreadking_Rathalos.png'},
    {id: 'dreadqueen_rathian', name: 'dreadqueen_rathian', image: 'image/offical_thumbnail/Dreadqueen_Rathian.png'},
    {id: 'drilltusk_tetsucabra', name: 'drilltusk_tetsucabra', image: 'image/offical_thumbnail/Drilltusk_Tetsucabra.png'},
    {id: 'duramboros', name: 'duramboros', image: 'image/offical_thumbnail/Duramboros.png'},
    {id: 'ebony_odogaron', name: 'ebony_odogaron', image: 'image/offical_thumbnail/Ebony_Odogaron.png'},
    {id: 'elderfrost_gammoth', name: 'elderfrost_gammoth', image: 'image/offical_thumbnail/Elderfrost_Gammoth.png'},
    {id: 'emerald_congalala', name: 'emerald_congalala', image: 'image/offical_thumbnail/Emerald_Congalala.png'},
    {id: 'espinas', name: 'espinas', image: 'image/offical_thumbnail/Espinas.png'},
    {id: 'fatalis', name: 'fatalis', image: 'image/offical_thumbnail/Fatalis.png'},
    {id: 'flaming_espinas', name: 'flaming_espinas', image: 'image/offical_thumbnail/Flaming_Espinas.png'},
    {id: 'frostfang_barioth', name: 'frostfang_barioth', image: 'image/offical_thumbnail/Frostfang_Barioth.png'},
    {id: 'fulgur_anjanath', name: 'fulgur_anjanath', image: 'image/offical_thumbnail/Fulgur_Anjanath.png'},
    {id: 'furious_rajang', name: 'furious_rajang', image: 'image/offical_thumbnail/Furious_Rajang.png'},
    {id: 'gaismagorm', name: 'gaismagorm', image: 'image/offical_thumbnail/Gaismagorm.png'},
    {id: 'gammoth', name: 'gammoth', image: 'image/offical_thumbnail/Gammoth.png'},
    {id: 'garangolm', name: 'garangolm', image: 'image/offical_thumbnail/Garangolm.png'},
    {id: 'gendrome', name: 'gendrome', image: 'image/offical_thumbnail/Gendrome.png'},
    {id: 'giadrome', name: 'giadrome', image: 'image/offical_thumbnail/Giadrome.png'},
    {id: 'gigginox', name: 'gigginox', image: 'image/offical_thumbnail/Gigginox.png'},
    {id: 'glacial_agnaktor', name: 'glacial_agnaktor', image: 'image/offical_thumbnail/Glacial_Agnaktor.png'},
    {id: 'glavenus', name: 'glavenus', image: 'image/offical_thumbnail/Glavenus.png'},
    {id: 'gobul', name: 'gobul', image: 'image/offical_thumbnail/Gobul.png'},
    {id: 'gogmazios', name: 'gogmazios', image: 'image/offical_thumbnail/Gogmazios.png'},
    {id: 'goldbeard_ceadeus', name: 'goldbeard_ceadeus', image: 'image/offical_thumbnail/Goldbeard_Ceadeus.png'},
    {id: 'gold_rathian', name: 'gold_rathian', image: 'image/offical_thumbnail/Gold_Rathian.png'},
    {id: 'gore_magala', name: 'gore_magala', image: 'image/offical_thumbnail/Gore_Magala.png'},
    {id: 'goss_harag', name: 'goss_harag', image: 'image/offical_thumbnail/Goss_Harag.png'},
    {id: 'gravios', name: 'gravios', image: 'image/offical_thumbnail/Gravios.png'},
    {id: 'great_baggi', name: 'great_baggi', image: 'image/offical_thumbnail/Great_Baggi.png'},
    {id: 'great_girros', name: 'great_girros', image: 'image/offical_thumbnail/Great_Girros.png'},
    {id: 'great_izuchi', name: 'great_izuchi', image: 'image/offical_thumbnail/Great_Izuchi.png'},
    {id: 'great_jaggi', name: 'great_jaggi', image: 'image/offical_thumbnail/Great_Jaggi.png'},
    {id: 'great_jagras', name: 'great_jagras', image: 'image/offical_thumbnail/Great_Jagras.png'},
    {id: 'great_maccao', name: 'great_maccao', image: 'image/offical_thumbnail/Great_Maccao.png'},
    {id: 'great_wroggi', name: 'great_wroggi', image: 'image/offical_thumbnail/Great_Wroggi.png'},
    {id: 'green_nargacuga', name: 'green_nargacuga', image: 'image/offical_thumbnail/Green_Nargacuga.png'},
    {id: 'green_plesioth', name: 'green_plesioth', image: 'image/offical_thumbnail/Green_Plesioth.png'},
    {id: 'grimclaw_tigrex', name: 'grimclaw_tigrex', image: 'image/offical_thumbnail/Grimclaw_Tigrex.png'},
    {id: 'gypceros', name: 'gypceros', image: 'image/offical_thumbnail/Gypceros.png'},
    {id: 'hallowed_jhen_mohran', name: 'hallowed_jhen_mohran', image: 'image/offical_thumbnail/Hallowed_Jhen_Mohran.png'},
    {id: 'hellblade_glavenus', name: 'hellblade_glavenus', image: 'image/offical_thumbnail/Hellblade_Glavenus.png'},
    {id: 'hypnocatrice', name: 'hypnocatrice', image: 'image/offical_thumbnail/Hypnocatrice.png'},
    {id: 'iodrome', name: 'iodrome', image: 'image/offical_thumbnail/Iodrome.png'},
    {id: 'ivory_lagiacrus', name: 'ivory_lagiacrus', image: 'image/offical_thumbnail/Ivory_Lagiacrus.png'},
    {id: 'jade_barroth', name: 'jade_barroth', image: 'image/offical_thumbnail/Jade_Barroth.png'},
    {id: 'jhen_mohran', name: 'jhen_mohran', image: 'image/offical_thumbnail/Jhen_Mohran.png'},
    {id: 'jyuratodus', name: 'jyuratodus', image: 'image/offical_thumbnail/Jyuratodus.png'},
    {id: 'kecha_wacha', name: 'kecha_wacha', image: 'image/offical_thumbnail/Kecha_Wacha.png'},
    {id: 'khezu', name: 'khezu', image: 'image/offical_thumbnail/Khezu.png'},
    {id: 'king_shakalaka', name: 'king_shakalaka', image: 'image/offical_thumbnail/King_Shakalaka.png'},
    {id: 'kirin', name: 'kirin', image: 'image/offical_thumbnail/Kirin.png'},
    {id: 'kulu-ya-ku', name: 'kulu-ya-ku', image: 'image/offical_thumbnail/Kulu-Ya-Ku.png'},
    {id: 'kulve_taroth', name: 'kulve_taroth', image: 'image/offical_thumbnail/Kulve_Taroth.png'},
    {id: 'kushala_daora', name: 'kushala_daora', image: 'image/offical_thumbnail/Kushala_Daora.png'},
    {id: 'lagiacrus', name: 'lagiacrus', image: 'image/offical_thumbnail/Lagiacrus.png'},
    {id: 'lagombi', name: 'lagombi', image: 'image/offical_thumbnail/Lagombi.png'},
    {id: 'lao-shan_lung', name: 'lao-shan_lung', image: 'image/offical_thumbnail/Lao-Shan_Lung.png'},
    {id: 'lavasioth', name: 'lavasioth', image: 'image/offical_thumbnail/Lavasioth.png'},
    {id: 'legiana', name: 'legiana', image: 'image/offical_thumbnail/Legiana.png'},
    {id: 'lucent_nargacuga', name: 'lucent_nargacuga', image: 'image/offical_thumbnail/Lucent_Nargacuga.png'},
    {id: 'lunagaron', name: 'lunagaron', image: 'image/offical_thumbnail/Lunagaron.png'},
    {id: 'lunastra', name: 'lunastra', image: 'image/offical_thumbnail/Lunastra.png'},
    {id: 'magma_almudron', name: 'magma_almudron', image: 'image/offical_thumbnail/Magma_Almudron.png'},
    {id: 'magnamalo', name: 'magnamalo', image: 'image/offical_thumbnail/Magnamalo.png'},
    {id: 'malfestio', name: 'malfestio', image: 'image/offical_thumbnail/Malfestio.png'},
    {id: 'malzeno', name: 'malzeno', image: 'image/offical_thumbnail/Malzeno.png'},
    {id: 'mizutsune', name: 'mizutsune', image: 'image/offical_thumbnail/Mizutsune.png'},
    {id: 'molten_tigrex', name: 'molten_tigrex', image: 'image/offical_thumbnail/Molten_Tigrex.png'},
    {id: 'monoblos', name: 'monoblos', image: 'image/offical_thumbnail/Monoblos.png'},
    {id: 'najarala', name: 'najarala', image: 'image/offical_thumbnail/Najarala.png'},
    {id: 'nakarkos', name: 'nakarkos', image: 'image/offical_thumbnail/Nakarkos.png'},
    {id: 'namielle', name: 'namielle', image: 'image/offical_thumbnail/Namielle.png'},
    {id: 'nargacuga', name: 'nargacuga', image: 'image/offical_thumbnail/Nargacuga.png'},
    {id: 'narwa_the_allmother', name: 'narwa_the_allmother', image: 'image/offical_thumbnail/Narwa_the_Allmother.png'},
    {id: 'nergigante', name: 'nergigante', image: 'image/offical_thumbnail/Nergigante.png'},
    {id: 'nerscylla', name: 'nerscylla', image: 'image/offical_thumbnail/Nerscylla.png'},
    {id: 'nibelsnarf', name: 'nibelsnarf', image: 'image/offical_thumbnail/Nibelsnarf.png'},
    {id: 'nightcloak_malfestio', name: 'nightcloak_malfestio', image: 'image/offical_thumbnail/Nightcloak_Malfestio.png'},
    {id: 'nightshade_paolumu', name: 'nightshade_paolumu', image: 'image/offical_thumbnail/Nightshade_Paolumu.png'},
    {id: 'odogaron', name: 'odogaron', image: 'image/offical_thumbnail/Odogaron.png'},
    {id: 'old_fatalis', name: 'old_fatalis', image: 'image/offical_thumbnail/Old_Fatalis.png'},
    {id: 'oroshi_kirin', name: 'oroshi_kirin', image: 'image/offical_thumbnail/Oroshi_Kirin.png'},
    {id: 'paolumu', name: 'paolumu', image: 'image/offical_thumbnail/Paolumu.png'},
    {id: 'pink_rathian', name: 'pink_rathian', image: 'image/offical_thumbnail/Pink_Rathian.png'},
    {id: 'plesioth', name: 'plesioth', image: 'image/offical_thumbnail/Plesioth.png'},
    {id: 'plum_daimyo_hermitaur', name: 'plum_daimyo_hermitaur', image: 'image/offical_thumbnail/Plum_Daimyo_Hermitaur.png'},
    {id: 'primordial_malzeno', name: 'primordial_malzeno', image: 'image/offical_thumbnail/Primordial_Malzeno.png'},
    {id: 'pukei-pukei', name: 'pukei-pukei', image: 'image/offical_thumbnail/Pukei-Pukei.png'},
    {id: 'purple_gypceros', name: 'purple_gypceros', image: 'image/offical_thumbnail/Purple_Gypceros.png'},
    {id: 'purple_ludroth', name: 'purple_ludroth', image: 'image/offical_thumbnail/Purple_Ludroth.png'},
    {id: 'pyre_rakna-kadaki', name: 'pyre_rakna-kadaki', image: 'image/offical_thumbnail/Pyre_Rakna-Kadaki.png'},
    {id: 'qurupeco', name: 'qurupeco', image: 'image/offical_thumbnail/Qurupeco.png'},
    {id: 'radobaan', name: 'radobaan', image: 'image/offical_thumbnail/Radobaan.png'},
    {id: 'raging_brachydios', name: 'raging_brachydios', image: 'image/offical_thumbnail/Raging_Brachydios.png'},
    {id: 'rajang', name: 'rajang', image: 'image/offical_thumbnail/Rajang.png'},
    {id: 'rakna-kadaki', name: 'rakna-kadaki', image: 'image/offical_thumbnail/Rakna-Kadaki.png'},
    {id: 'rathalos', name: 'rathalos', image: 'image/offical_thumbnail/Rathalos.png'},
    {id: 'rathian', name: 'rathian', image: 'image/offical_thumbnail/Rathian.png'},
    {id: 'redhelm_arzuros', name: 'redhelm_arzuros', image: 'image/offical_thumbnail/Redhelm_Arzuros.png'},
    {id: 'red_khezu', name: 'red_khezu', image: 'image/offical_thumbnail/Red_Khezu.png'},
    {id: 'risen_chameleos', name: 'risen_chameleos', image: 'image/offical_thumbnail/Risen_Chameleos.png'},
    {id: 'risen_crimson_glow_valstrax', name: 'risen_crimson_glow_valstrax', image: 'image/offical_thumbnail/Risen_Crimson_Glow_Valstrax.png'},
    {id: 'risen_kushala_daora', name: 'risen_kushala_daora', image: 'image/offical_thumbnail/Risen_Kushala_Daora.png'},
    {id: 'risen_shagaru_magala', name: 'risen_shagaru_magala', image: 'image/offical_thumbnail/Risen_Shagaru_Magala.png'},
    {id: 'risen_teostra', name: 'risen_teostra', image: 'image/offical_thumbnail/Risen_Teostra.png'},
    {id: 'royal_ludroth', name: 'royal_ludroth', image: 'image/offical_thumbnail/Royal_Ludroth.png'},
    {id: 'ruby_basarios', name: 'ruby_basarios', image: 'image/offical_thumbnail/Ruby_Basarios.png'},
    {id: 'ruiner_nergigante', name: 'ruiner_nergigante', image: 'image/offical_thumbnail/Ruiner_Nergigante.png'},
    {id: 'rusted_kushala_daora', name: 'rusted_kushala_daora', image: 'image/offical_thumbnail/Rusted_Kushala_Daora.png'},
    {id: 'rustrazor_ceanataur', name: 'rustrazor_ceanataur', image: 'image/offical_thumbnail/Rustrazor_Ceanataur.png'},
    {id: 'rust_duramboros', name: 'rust_duramboros', image: 'image/offical_thumbnail/Rust_Duramboros.png'},
    {id: 'safi-jiiva', name: 'safi-jiiva', image: 'image/offical_thumbnail/Safi\'jiiva.png'},
    {id: 'sand_barioth', name: 'sand_barioth', image: 'image/offical_thumbnail/Sand_Barioth.png'},
    {id: 'savage_deviljho', name: 'savage_deviljho', image: 'image/offical_thumbnail/Savage_Deviljho.png'},
    {id: 'scarred_yian_garuga', name: 'scarred_yian_garuga', image: 'image/offical_thumbnail/Scarred_Yian_Garuga.png'},
    {id: 'scorned_magnamalo', name: 'scorned_magnamalo', image: 'image/offical_thumbnail/Scorned_Magnamalo.png'},
    {id: 'seething_bazelgeuse', name: 'seething_bazelgeuse', image: 'image/offical_thumbnail/Seething_Bazelgeuse.png'},
    {id: 'seltas', name: 'seltas', image: 'image/offical_thumbnail/Seltas.png'},
    {id: 'seltas_queen', name: 'seltas_queen', image: 'image/offical_thumbnail/Seltas_Queen.png'},
    {id: 'seregios', name: 'seregios', image: 'image/offical_thumbnail/Seregios.png'},
    {id: 'shagaru_magala', name: 'shagaru_magala', image: 'image/offical_thumbnail/Shagaru_Magala.png'},
    {id: 'shah_dalamadur', name: 'shah_dalamadur', image: 'image/offical_thumbnail/Shah_Dalamadur.png'},
    {id: 'shara_ishvalda', name: 'shara_ishvalda', image: 'image/offical_thumbnail/Shara_Ishvalda.png'},
    {id: 'shen_gaoren', name: 'shen_gaoren', image: 'image/offical_thumbnail/Shen_Gaoren.png'},
    {id: 'shogun_ceanataur', name: 'shogun_ceanataur', image: 'image/offical_thumbnail/Shogun_Ceanataur.png'},
    {id: 'shrieking_legiana', name: 'shrieking_legiana', image: 'image/offical_thumbnail/Shrieking_Legiana.png'},
    {id: 'shrouded_nerscylla', name: 'shrouded_nerscylla', image: 'image/offical_thumbnail/Shrouded_Nerscylla.png'},
    {id: 'silverwind_nargacuga', name: 'silverwind_nargacuga', image: 'image/offical_thumbnail/Silverwind_Nargacuga.png'},
    {id: 'silver_rathalos', name: 'silver_rathalos', image: 'image/offical_thumbnail/Silver_Rathalos.png'},
    {id: 'snowbaron_lagombi', name: 'snowbaron_lagombi', image: 'image/offical_thumbnail/Snowbaron_Lagombi.png'},
    {id: 'somnacanth', name: 'somnacanth', image: 'image/offical_thumbnail/Somnacanth.png'},
    {id: 'soulseer_mizutsune', name: 'soulseer_mizutsune', image: 'image/offical_thumbnail/Soulseer_Mizutsune.png'},
    {id: 'steel_uragaan', name: 'steel_uragaan', image: 'image/offical_thumbnail/Steel_Uragaan.png'},
    {id: 'stonefist_hermitaur', name: 'stonefist_hermitaur', image: 'image/offical_thumbnail/Stonefist_Hermitaur.png'},
    {id: 'stygian_zinogre', name: 'stygian_zinogre', image: 'image/offical_thumbnail/Stygian_Zinogre.png'},
    {id: 'teostra', name: 'teostra', image: 'image/offical_thumbnail/Teostra.png'},
    {id: 'terra_shogun_ceanataur', name: 'terra_shogun_ceanataur', image: 'image/offical_thumbnail/Terra_Shogun_Ceanataur.png'},
    {id: 'tetranadon', name: 'tetranadon', image: 'image/offical_thumbnail/Tetranadon.png'},
    {id: 'tetsucabra', name: 'tetsucabra', image: 'image/offical_thumbnail/Tetsucabra.png'},
    {id: 'thunderlord_zinogre', name: 'thunderlord_zinogre', image: 'image/offical_thumbnail/Thunderlord_Zinogre.png'},
    {id: 'thunder_serpent_narwa', name: 'thunder_serpent_narwa', image: 'image/offical_thumbnail/Thunder_Serpent_Narwa.png'},
    {id: 'tidal_najarala', name: 'tidal_najarala', image: 'image/offical_thumbnail/Tidal_Najarala.png'},
    {id: 'tigerstripe_zamtrios', name: 'tigerstripe_zamtrios', image: 'image/offical_thumbnail/Tigerstripe_Zamtrios.png'},
    {id: 'tigrex', name: 'tigrex', image: 'image/offical_thumbnail/Tigrex.png'},
    {id: 'tobi-kadachi', name: 'tobi-kadachi', image: 'image/offical_thumbnail/Tobi-Kadachi.png'},
    {id: 'tzitzi-ya-ku', name: 'tzitzi-ya-ku', image: 'image/offical_thumbnail/Tzitzi-Ya-Ku.png'},
    {id: 'ukanlos', name: 'ukanlos', image: 'image/offical_thumbnail/Ukanlos.png'},
    {id: 'uragaan', name: 'uragaan', image: 'image/offical_thumbnail/Uragaan.png'},
    {id: 'vaal_hazak', name: 'vaal_hazak', image: 'image/offical_thumbnail/Vaal_Hazak.png'},
    {id: 'valstrax', name: 'valstrax', image: 'image/offical_thumbnail/Valstrax.png'},
    {id: 'velkhana', name: 'velkhana', image: 'image/offical_thumbnail/Velkhana.png'},
    {id: 'velocidrome', name: 'velocidrome', image: 'image/offical_thumbnail/Velocidrome.png'},
    {id: 'vespoid_queen', name: 'vespoid_queen', image: 'image/offical_thumbnail/Vespoid_Queen.png'},
    {id: 'violet_mizutsune', name: 'violet_mizutsune', image: 'image/offical_thumbnail/Violet_Mizutsune.png'},
    {id: 'viper_tobi-kadachi', name: 'viper_tobi-kadachi', image: 'image/offical_thumbnail/Viper_Tobi-Kadachi.png'},
    {id: 'volvidon', name: 'volvidon', image: 'image/offical_thumbnail/Volvidon.png'},
    {id: 'white_monoblos', name: 'white_monoblos', image: 'image/offical_thumbnail/White_Monoblos.png'},
    {id: 'wind_serpent_ibushi', name: 'wind_serpent_ibushi', image: 'image/offical_thumbnail/Wind_Serpent_Ibushi.png'},
    {id: 'xeno-jiiva', name: 'xeno-jiiva', image: 'image/offical_thumbnail/Xeno\'jiiva.png'},
    {id: 'yama_tsukami', name: 'yama_tsukami', image: 'image/offical_thumbnail/Yama_Tsukami.png'},
    {id: 'yian_garuga', name: 'yian_garuga', image: 'image/offical_thumbnail/Yian_Garuga.png'},
    {id: 'yian_kut-ku', name: 'yian_kut-ku', image: 'image/offical_thumbnail/Yian_Kut-Ku.png'},
    {id: 'zamtrios', name: 'zamtrios', image: 'image/offical_thumbnail/Zamtrios.png'},
    {id: 'zinogre', name: 'zinogre', image: 'image/offical_thumbnail/Zinogre.png'},
    {id: 'zorah_magdaros', name: 'zorah_magdaros', image: 'image/offical_thumbnail/Zorah_Magdaros.png'}
];