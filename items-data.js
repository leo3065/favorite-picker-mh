'use strict';

var items_all = [{"id": "abyssal_lagiacrus", "name": "Abyssal Lagiacrus", "image": "Abyssal_Lagiacrus.png", "games": []}, {"id": "acidic_glavenus", "name": "Acidic Glavenus", "image": "Acidic_Glavenus.png", "games": ["world_iceborne"]}, {"id": "agnaktor", "name": "Agnaktor", "image": "Agnaktor.png", "games": []}, {"id": "ahtal-ka", "name": "Ahtal-Ka", "image": "Ahtal-Ka.png", "games": []}, {"id": "ahtal-neset", "name": "Ahtal-Neset", "image": "Ahtal-Neset.png", "games": []}, {"id": "akantor", "name": "Akantor", "image": "Akantor.png", "games": []}, {"id": "aknosom", "name": "Aknosom", "image": "Aknosom.png", "games": ["rise_sunbreak"]}, {"id": "alatreon", "name": "Alatreon", "image": "Alatreon.png", "games": ["world_iceborne"]}, {"id": "almudron", "name": "Almudron", "image": "Almudron.png", "games": ["rise_sunbreak"]}, {"id": "amatsu", "name": "Amatsu", "image": "Amatsu.png", "games": ["rise_sunbreak"]}, {"id": "anjanath", "name": "Anjanath", "image": "Anjanath.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "apex_arzuros", "name": "Apex Arzuros", "image": "Apex_Arzuros.png", "games": ["rise_sunbreak"]}, {"id": "apex_diablos", "name": "Apex Diablos", "image": "Apex_Diablos.png", "games": ["rise_sunbreak"]}, {"id": "apex_mizutsune", "name": "Apex Mizutsune", "image": "Apex_Mizutsune.png", "games": ["rise_sunbreak"]}, {"id": "apex_rathalos", "name": "Apex Rathalos", "image": "Apex_Rathalos.png", "games": ["rise_sunbreak"]}, {"id": "apex_rathian", "name": "Apex Rathian", "image": "Apex_Rathian.png", "games": ["rise_sunbreak"]}, {"id": "apex_zinogre", "name": "Apex Zinogre", "image": "Apex_Zinogre.png", "games": ["rise_sunbreak"]}, {"id": "arzuros", "name": "Arzuros", "image": "Arzuros.png", "games": ["rise_sunbreak"]}, {"id": "ashen_lao-shan_lung", "name": "Ashen Lao-Shan Lung", "image": "Ashen_Lao-Shan_Lung.png", "games": []}, {"id": "ash_kecha_wacha", "name": "Ash Kecha Wacha", "image": "Ash_Kecha_Wacha.png", "games": []}, {"id": "astalos", "name": "Astalos", "image": "Astalos.png", "games": ["rise_sunbreak"]}, {"id": "aurora_somnacanth", "name": "Aurora Somnacanth", "image": "Aurora_Somnacanth.png", "games": ["rise_sunbreak"]}, {"id": "azure_rathalos", "name": "Azure Rathalos", "image": "Azure_Rathalos.png", "games": ["world_iceborne"]}, {"id": "baleful_gigginox", "name": "Baleful Gigginox", "image": "Baleful_Gigginox.png", "games": []}, {"id": "banbaro", "name": "Banbaro", "image": "Banbaro.png", "games": ["world_iceborne"]}, {"id": "barioth", "name": "Barioth", "image": "Barioth.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "barroth", "name": "Barroth", "image": "Barroth.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "basarios", "name": "Basarios", "image": "Basarios.png", "games": ["rise_sunbreak"]}, {"id": "bazelgeuse", "name": "Bazelgeuse", "image": "Bazelgeuse.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "beotodus", "name": "Beotodus", "image": "Beotodus.png", "games": ["world_iceborne"]}, {"id": "berserk_tetsucabra", "name": "Berserk Tetsucabra", "image": "Berserk_Tetsucabra.png", "games": []}, {"id": "bishaten", "name": "Bishaten", "image": "Bishaten.png", "games": ["rise_sunbreak"]}, {"id": "blackveil_vaal_hazak", "name": "Blackveil Vaal Hazak", "image": "Blackveil_Vaal_Hazak.png", "games": ["world_iceborne"]}, {"id": "black_diablos", "name": "Black Diablos", "image": "Black_Diablos.png", "games": ["world_iceborne"]}, {"id": "black_gravios", "name": "Black Gravios", "image": "Black_Gravios.png", "games": []}, {"id": "blangonga", "name": "Blangonga", "image": "Blangonga.png", "games": []}, {"id": "bloodbath_diablos", "name": "Bloodbath Diablos", "image": "Bloodbath_Diablos.png", "games": []}, {"id": "blood_orange_bishaten", "name": "Blood Orange Bishaten", "image": "Blood_Orange_Bishaten.png", "games": ["rise_sunbreak"]}, {"id": "blue_yian_kut-ku", "name": "Blue Yian Kut-Ku", "image": "Blue_Yian_Kut-Ku.png", "games": []}, {"id": "boltreaver_astalos", "name": "Boltreaver Astalos", "image": "Boltreaver_Astalos.png", "games": []}, {"id": "brachydios", "name": "Brachydios", "image": "Brachydios.png", "games": ["world_iceborne"]}, {"id": "brute_tigrex", "name": "Brute Tigrex", "image": "Brute_Tigrex.png", "games": ["world_iceborne"]}, {"id": "bulldrome", "name": "Bulldrome", "image": "Bulldrome.png", "games": []}, {"id": "ceadeus", "name": "Ceadeus", "image": "Ceadeus.png", "games": []}, {"id": "cephadrome", "name": "Cephadrome", "image": "Cephadrome.png", "games": []}, {"id": "chameleos", "name": "Chameleos", "image": "Chameleos.png", "games": ["rise_sunbreak"]}, {"id": "chaotic_gore_magala", "name": "Chaotic Gore Magala", "image": "Chaotic_Gore_Magala.png", "games": ["rise_sunbreak"]}, {"id": "congalala", "name": "Congalala", "image": "Congalala.png", "games": []}, {"id": "copper_blangonga", "name": "Copper Blangonga", "image": "Copper_Blangonga.png", "games": []}, {"id": "coral_pukei-pukei", "name": "Coral Pukei-Pukei", "image": "Coral_Pukei-Pukei.png", "games": ["world_iceborne"]}, {"id": "crimson_fatalis", "name": "Crimson Fatalis", "image": "Crimson_Fatalis.png", "games": []}, {"id": "crimson_glow_valstrax", "name": "Crimson Glow Valstrax", "image": "Crimson_Glow_Valstrax.png", "games": ["rise_sunbreak"]}, {"id": "crimson_qurupeco", "name": "Crimson Qurupeco", "image": "Crimson_Qurupeco.png", "games": []}, {"id": "crystalbeard_uragaan", "name": "Crystalbeard Uragaan", "image": "Crystalbeard_Uragaan.png", "games": []}, {"id": "dah-ren_mohran", "name": "Dah'ren Mohran", "image": "Dah'ren_Mohran.png", "games": []}, {"id": "daimyo_hermitaur", "name": "Daimyo Hermitaur", "image": "Daimyo_Hermitaur.png", "games": ["rise_sunbreak"]}, {"id": "dalamadur", "name": "Dalamadur", "image": "Dalamadur.png", "games": []}, {"id": "deadeye_yian_garuga", "name": "Deadeye Yian Garuga", "image": "Deadeye_Yian_Garuga.png", "games": []}, {"id": "desert_seltas", "name": "Desert Seltas", "image": "Desert_Seltas.png", "games": []}, {"id": "desert_seltas_queen", "name": "Desert Seltas Queen", "image": "Desert_Seltas_Queen.png", "games": []}, {"id": "deviljho", "name": "Deviljho", "image": "Deviljho.png", "games": ["world_iceborne"]}, {"id": "diablos", "name": "Diablos", "image": "Diablos.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "dire_miralis", "name": "Dire Miralis", "image": "Dire_Miralis.png", "games": []}, {"id": "dodogama", "name": "Dodogama", "image": "Dodogama.png", "games": ["world_iceborne"]}, {"id": "dreadking_rathalos", "name": "Dreadking Rathalos", "image": "Dreadking_Rathalos.png", "games": []}, {"id": "dreadqueen_rathian", "name": "Dreadqueen Rathian", "image": "Dreadqueen_Rathian.png", "games": []}, {"id": "drilltusk_tetsucabra", "name": "Drilltusk Tetsucabra", "image": "Drilltusk_Tetsucabra.png", "games": []}, {"id": "duramboros", "name": "Duramboros", "image": "Duramboros.png", "games": []}, {"id": "ebony_odogaron", "name": "Ebony Odogaron", "image": "Ebony_Odogaron.png", "games": ["world_iceborne"]}, {"id": "elderfrost_gammoth", "name": "Elderfrost Gammoth", "image": "Elderfrost_Gammoth.png", "games": []}, {"id": "emerald_congalala", "name": "Emerald Congalala", "image": "Emerald_Congalala.png", "games": []}, {"id": "espinas", "name": "Espinas", "image": "Espinas.png", "games": ["rise_sunbreak"]}, {"id": "fatalis", "name": "Fatalis", "image": "Fatalis.png", "games": ["world_iceborne"]}, {"id": "flaming_espinas", "name": "Flaming Espinas", "image": "Flaming_Espinas.png", "games": ["rise_sunbreak"]}, {"id": "frostfang_barioth", "name": "Frostfang Barioth", "image": "Frostfang_Barioth.png", "games": ["world_iceborne"]}, {"id": "fulgur_anjanath", "name": "Fulgur Anjanath", "image": "Fulgur_Anjanath.png", "games": ["world_iceborne"]}, {"id": "furious_rajang", "name": "Furious Rajang", "image": "Furious_Rajang.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "gaismagorm", "name": "Gaismagorm", "image": "Gaismagorm.png", "games": ["rise_sunbreak"]}, {"id": "gammoth", "name": "Gammoth", "image": "Gammoth.png", "games": []}, {"id": "garangolm", "name": "Garangolm", "image": "Garangolm.png", "games": ["rise_sunbreak"]}, {"id": "gendrome", "name": "Gendrome", "image": "Gendrome.png", "games": []}, {"id": "giadrome", "name": "Giadrome", "image": "Giadrome.png", "games": []}, {"id": "gigginox", "name": "Gigginox", "image": "Gigginox.png", "games": []}, {"id": "glacial_agnaktor", "name": "Glacial Agnaktor", "image": "Glacial_Agnaktor.png", "games": []}, {"id": "glavenus", "name": "Glavenus", "image": "Glavenus.png", "games": ["world_iceborne"]}, {"id": "gobul", "name": "Gobul", "image": "Gobul.png", "games": []}, {"id": "gogmazios", "name": "Gogmazios", "image": "Gogmazios.png", "games": []}, {"id": "goldbeard_ceadeus", "name": "Goldbeard Ceadeus", "image": "Goldbeard_Ceadeus.png", "games": []}, {"id": "gold_rathian", "name": "Gold Rathian", "image": "Gold_Rathian.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "gore_magala", "name": "Gore Magala", "image": "Gore_Magala.png", "games": ["rise_sunbreak"]}, {"id": "goss_harag", "name": "Goss Harag", "image": "Goss_Harag.png", "games": ["rise_sunbreak"]}, {"id": "gravios", "name": "Gravios", "image": "Gravios.png", "games": []}, {"id": "great_baggi", "name": "Great Baggi", "image": "Great_Baggi.png", "games": ["rise_sunbreak"]}, {"id": "great_girros", "name": "Great Girros", "image": "Great_Girros.png", "games": ["world_iceborne"]}, {"id": "great_izuchi", "name": "Great Izuchi", "image": "Great_Izuchi.png", "games": ["rise_sunbreak"]}, {"id": "great_jaggi", "name": "Great Jaggi", "image": "Great_Jaggi.png", "games": []}, {"id": "great_jagras", "name": "Great Jagras", "image": "Great_Jagras.png", "games": ["world_iceborne"]}, {"id": "great_maccao", "name": "Great Maccao", "image": "Great_Maccao.png", "games": []}, {"id": "great_wroggi", "name": "Great Wroggi", "image": "Great_Wroggi.png", "games": ["rise_sunbreak"]}, {"id": "green_nargacuga", "name": "Green Nargacuga", "image": "Green_Nargacuga.png", "games": []}, {"id": "green_plesioth", "name": "Green Plesioth", "image": "Green_Plesioth.png", "games": []}, {"id": "grimclaw_tigrex", "name": "Grimclaw Tigrex", "image": "Grimclaw_Tigrex.png", "games": []}, {"id": "gypceros", "name": "Gypceros", "image": "Gypceros.png", "games": []}, {"id": "hallowed_jhen_mohran", "name": "Hallowed Jhen Mohran", "image": "Hallowed_Jhen_Mohran.png", "games": []}, {"id": "hellblade_glavenus", "name": "Hellblade Glavenus", "image": "Hellblade_Glavenus.png", "games": []}, {"id": "hypnocatrice", "name": "Hypnocatrice", "image": "Hypnocatrice.png", "games": []}, {"id": "iodrome", "name": "Iodrome", "image": "Iodrome.png", "games": []}, {"id": "ivory_lagiacrus", "name": "Ivory Lagiacrus", "image": "Ivory_Lagiacrus.png", "games": []}, {"id": "jade_barroth", "name": "Jade Barroth", "image": "Jade_Barroth.png", "games": []}, {"id": "jhen_mohran", "name": "Jhen Mohran", "image": "Jhen_Mohran.png", "games": []}, {"id": "jyuratodus", "name": "Jyuratodus", "image": "Jyuratodus.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "kecha_wacha", "name": "Kecha Wacha", "image": "Kecha_Wacha.png", "games": []}, {"id": "khezu", "name": "Khezu", "image": "Khezu.png", "games": ["rise_sunbreak"]}, {"id": "king_shakalaka", "name": "King Shakalaka", "image": "King_Shakalaka.png", "games": []}, {"id": "kirin", "name": "Kirin", "image": "Kirin.png", "games": ["world_iceborne"]}, {"id": "kulu-ya-ku", "name": "Kulu-Ya-Ku", "image": "Kulu-Ya-Ku.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "kulve_taroth", "name": "Kulve Taroth", "image": "Kulve_Taroth.png", "games": ["world_iceborne"]}, {"id": "kushala_daora", "name": "Kushala Daora", "image": "Kushala_Daora.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "lagiacrus", "name": "Lagiacrus", "image": "Lagiacrus.png", "games": []}, {"id": "lagombi", "name": "Lagombi", "image": "Lagombi.png", "games": ["rise_sunbreak"]}, {"id": "lao-shan_lung", "name": "Lao-Shan Lung", "image": "Lao-Shan_Lung.png", "games": []}, {"id": "lavasioth", "name": "Lavasioth", "image": "Lavasioth.png", "games": ["world_iceborne"]}, {"id": "legiana", "name": "Legiana", "image": "Legiana.png", "games": ["world_iceborne"]}, {"id": "lucent_nargacuga", "name": "Lucent Nargacuga", "image": "Lucent_Nargacuga.png", "games": ["rise_sunbreak"]}, {"id": "lunagaron", "name": "Lunagaron", "image": "Lunagaron.png", "games": ["rise_sunbreak"]}, {"id": "lunastra", "name": "Lunastra", "image": "Lunastra.png", "games": ["world_iceborne"]}, {"id": "magma_almudron", "name": "Magma Almudron", "image": "Magma_Almudron.png", "games": ["rise_sunbreak"]}, {"id": "magnamalo", "name": "Magnamalo", "image": "Magnamalo.png", "games": ["rise_sunbreak"]}, {"id": "malfestio", "name": "Malfestio", "image": "Malfestio.png", "games": []}, {"id": "malzeno", "name": "Malzeno", "image": "Malzeno.png", "games": ["rise_sunbreak"]}, {"id": "mizutsune", "name": "Mizutsune", "image": "Mizutsune.png", "games": ["rise_sunbreak"]}, {"id": "molten_tigrex", "name": "Molten Tigrex", "image": "Molten_Tigrex.png", "games": []}, {"id": "monoblos", "name": "Monoblos", "image": "Monoblos.png", "games": []}, {"id": "najarala", "name": "Najarala", "image": "Najarala.png", "games": []}, {"id": "nakarkos", "name": "Nakarkos", "image": "Nakarkos.png", "games": []}, {"id": "namielle", "name": "Namielle", "image": "Namielle.png", "games": ["world_iceborne"]}, {"id": "nargacuga", "name": "Nargacuga", "image": "Nargacuga.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "narwa_the_allmother", "name": "Narwa the Allmother", "image": "Narwa_the_Allmother.png", "games": ["rise_sunbreak"]}, {"id": "nergigante", "name": "Nergigante", "image": "Nergigante.png", "games": ["world_iceborne"]}, {"id": "nerscylla", "name": "Nerscylla", "image": "Nerscylla.png", "games": []}, {"id": "nibelsnarf", "name": "Nibelsnarf", "image": "Nibelsnarf.png", "games": []}, {"id": "nightcloak_malfestio", "name": "Nightcloak Malfestio", "image": "Nightcloak_Malfestio.png", "games": []}, {"id": "nightshade_paolumu", "name": "Nightshade Paolumu", "image": "Nightshade_Paolumu.png", "games": ["world_iceborne"]}, {"id": "odogaron", "name": "Odogaron", "image": "Odogaron.png", "games": ["world_iceborne"]}, {"id": "old_fatalis", "name": "Old Fatalis", "image": "Old_Fatalis.png", "games": []}, {"id": "oroshi_kirin", "name": "Oroshi Kirin", "image": "Oroshi_Kirin.png", "games": []}, {"id": "paolumu", "name": "Paolumu", "image": "Paolumu.png", "games": ["world_iceborne"]}, {"id": "pink_rathian", "name": "Pink Rathian", "image": "Pink_Rathian.png", "games": ["world_iceborne"]}, {"id": "plesioth", "name": "Plesioth", "image": "Plesioth.png", "games": []}, {"id": "plum_daimyo_hermitaur", "name": "Plum Daimyo Hermitaur", "image": "Plum_Daimyo_Hermitaur.png", "games": []}, {"id": "primordial_malzeno", "name": "Primordial Malzeno", "image": "Primordial_Malzeno.png", "games": ["rise_sunbreak"]}, {"id": "pukei-pukei", "name": "Pukei-Pukei", "image": "Pukei-Pukei.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "purple_gypceros", "name": "Purple Gypceros", "image": "Purple_Gypceros.png", "games": []}, {"id": "purple_ludroth", "name": "Purple Ludroth", "image": "Purple_Ludroth.png", "games": []}, {"id": "pyre_rakna-kadaki", "name": "Pyre Rakna-Kadaki", "image": "Pyre_Rakna-Kadaki.png", "games": ["rise_sunbreak"]}, {"id": "qurupeco", "name": "Qurupeco", "image": "Qurupeco.png", "games": []}, {"id": "radobaan", "name": "Radobaan", "image": "Radobaan.png", "games": ["world_iceborne"]}, {"id": "raging_brachydios", "name": "Raging Brachydios", "image": "Raging_Brachydios.png", "games": ["world_iceborne"]}, {"id": "rajang", "name": "Rajang", "image": "Rajang.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "rakna-kadaki", "name": "Rakna-Kadaki", "image": "Rakna-Kadaki.png", "games": ["rise_sunbreak"]}, {"id": "rathalos", "name": "Rathalos", "image": "Rathalos.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "rathian", "name": "Rathian", "image": "Rathian.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "redhelm_arzuros", "name": "Redhelm Arzuros", "image": "Redhelm_Arzuros.png", "games": []}, {"id": "red_khezu", "name": "Red Khezu", "image": "Red_Khezu.png", "games": []}, {"id": "risen_chameleos", "name": "Risen Chameleos", "image": "Risen_Chameleos.png", "games": ["rise_sunbreak"]}, {"id": "risen_crimson_glow_valstrax", "name": "Risen Crimson Glow Valstrax", "image": "Risen_Crimson_Glow_Valstrax.png", "games": ["rise_sunbreak"]}, {"id": "risen_kushala_daora", "name": "Risen Kushala Daora", "image": "Risen_Kushala_Daora.png", "games": ["rise_sunbreak"]}, {"id": "risen_shagaru_magala", "name": "Risen Shagaru Magala", "image": "Risen_Shagaru_Magala.png", "games": ["rise_sunbreak"]}, {"id": "risen_teostra", "name": "Risen Teostra", "image": "Risen_Teostra.png", "games": ["rise_sunbreak"]}, {"id": "royal_ludroth", "name": "Royal Ludroth", "image": "Royal_Ludroth.png", "games": ["rise_sunbreak"]}, {"id": "ruby_basarios", "name": "Ruby Basarios", "image": "Ruby_Basarios.png", "games": []}, {"id": "ruiner_nergigante", "name": "Ruiner Nergigante", "image": "Ruiner_Nergigante.png", "games": ["world_iceborne"]}, {"id": "rusted_kushala_daora", "name": "Rusted Kushala Daora", "image": "Rusted_Kushala_Daora.png", "games": []}, {"id": "rustrazor_ceanataur", "name": "Rustrazor Ceanataur", "image": "Rustrazor_Ceanataur.png", "games": []}, {"id": "rust_duramboros", "name": "Rust Duramboros", "image": "Rust_Duramboros.png", "games": []}, {"id": "safi-jiiva", "name": "Safi'jiiva", "image": "Safi'jiiva.png", "games": ["world_iceborne"]}, {"id": "sand_barioth", "name": "Sand Barioth", "image": "Sand_Barioth.png", "games": []}, {"id": "savage_deviljho", "name": "Savage Deviljho", "image": "Savage_Deviljho.png", "games": ["world_iceborne"]}, {"id": "scarred_yian_garuga", "name": "Scarred Yian Garuga", "image": "Scarred_Yian_Garuga.png", "games": ["world_iceborne"]}, {"id": "scorned_magnamalo", "name": "Scorned Magnamalo", "image": "Scorned_Magnamalo.png", "games": ["rise_sunbreak"]}, {"id": "seething_bazelgeuse", "name": "Seething Bazelgeuse", "image": "Seething_Bazelgeuse.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "seltas", "name": "Seltas", "image": "Seltas.png", "games": []}, {"id": "seltas_queen", "name": "Seltas Queen", "image": "Seltas_Queen.png", "games": []}, {"id": "seregios", "name": "Seregios", "image": "Seregios.png", "games": ["rise_sunbreak"]}, {"id": "shagaru_magala", "name": "Shagaru Magala", "image": "Shagaru_Magala.png", "games": ["rise_sunbreak"]}, {"id": "shah_dalamadur", "name": "Shah Dalamadur", "image": "Shah_Dalamadur.png", "games": []}, {"id": "shara_ishvalda", "name": "Shara Ishvalda", "image": "Shara_Ishvalda.png", "games": ["world_iceborne"]}, {"id": "shen_gaoren", "name": "Shen Gaoren", "image": "Shen_Gaoren.png", "games": []}, {"id": "shogun_ceanataur", "name": "Shogun Ceanataur", "image": "Shogun_Ceanataur.png", "games": ["rise_sunbreak"]}, {"id": "shrieking_legiana", "name": "Shrieking Legiana", "image": "Shrieking_Legiana.png", "games": ["world_iceborne"]}, {"id": "shrouded_nerscylla", "name": "Shrouded Nerscylla", "image": "Shrouded_Nerscylla.png", "games": []}, {"id": "silverwind_nargacuga", "name": "Silverwind Nargacuga", "image": "Silverwind_Nargacuga.png", "games": []}, {"id": "silver_rathalos", "name": "Silver Rathalos", "image": "Silver_Rathalos.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "snowbaron_lagombi", "name": "Snowbaron Lagombi", "image": "Snowbaron_Lagombi.png", "games": []}, {"id": "somnacanth", "name": "Somnacanth", "image": "Somnacanth.png", "games": ["rise_sunbreak"]}, {"id": "soulseer_mizutsune", "name": "Soulseer Mizutsune", "image": "Soulseer_Mizutsune.png", "games": []}, {"id": "steel_uragaan", "name": "Steel Uragaan", "image": "Steel_Uragaan.png", "games": []}, {"id": "stonefist_hermitaur", "name": "Stonefist Hermitaur", "image": "Stonefist_Hermitaur.png", "games": []}, {"id": "stygian_zinogre", "name": "Stygian Zinogre", "image": "Stygian_Zinogre.png", "games": ["world_iceborne"]}, {"id": "teostra", "name": "Teostra", "image": "Teostra.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "terra_shogun_ceanataur", "name": "Terra Shogun Ceanataur", "image": "Terra_Shogun_Ceanataur.png", "games": []}, {"id": "tetranadon", "name": "Tetranadon", "image": "Tetranadon.png", "games": ["rise_sunbreak"]}, {"id": "tetsucabra", "name": "Tetsucabra", "image": "Tetsucabra.png", "games": []}, {"id": "thunderlord_zinogre", "name": "Thunderlord Zinogre", "image": "Thunderlord_Zinogre.png", "games": []}, {"id": "thunder_serpent_narwa", "name": "Thunder Serpent Narwa", "image": "Thunder_Serpent_Narwa.png", "games": ["rise_sunbreak"]}, {"id": "tidal_najarala", "name": "Tidal Najarala", "image": "Tidal_Najarala.png", "games": []}, {"id": "tigerstripe_zamtrios", "name": "Tigerstripe Zamtrios", "image": "Tigerstripe_Zamtrios.png", "games": []}, {"id": "tigrex", "name": "Tigrex", "image": "Tigrex.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "tobi-kadachi", "name": "Tobi-Kadachi", "image": "Tobi-Kadachi.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "tzitzi-ya-ku", "name": "Tzitzi-Ya-Ku", "image": "Tzitzi-Ya-Ku.png", "games": ["world_iceborne"]}, {"id": "ukanlos", "name": "Ukanlos", "image": "Ukanlos.png", "games": []}, {"id": "uragaan", "name": "Uragaan", "image": "Uragaan.png", "games": ["world_iceborne"]}, {"id": "vaal_hazak", "name": "Vaal Hazak", "image": "Vaal_Hazak.png", "games": ["world_iceborne"]}, {"id": "valstrax", "name": "Valstrax", "image": "Valstrax.png", "games": []}, {"id": "velkhana", "name": "Velkhana", "image": "Velkhana.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "velocidrome", "name": "Velocidrome", "image": "Velocidrome.png", "games": []}, {"id": "vespoid_queen", "name": "Vespoid Queen", "image": "Vespoid_Queen.png", "games": []}, {"id": "violet_mizutsune", "name": "Violet Mizutsune", "image": "Violet_Mizutsune.png", "games": ["rise_sunbreak"]}, {"id": "viper_tobi-kadachi", "name": "Viper Tobi-Kadachi", "image": "Viper_Tobi-Kadachi.png", "games": ["world_iceborne"]}, {"id": "volvidon", "name": "Volvidon", "image": "Volvidon.png", "games": ["rise_sunbreak"]}, {"id": "white_monoblos", "name": "White Monoblos", "image": "White_Monoblos.png", "games": []}, {"id": "wind_serpent_ibushi", "name": "Wind Serpent Ibushi", "image": "Wind_Serpent_Ibushi.png", "games": ["rise_sunbreak"]}, {"id": "xeno-jiiva", "name": "Xeno'jiiva", "image": "Xeno'jiiva.png", "games": ["world_iceborne"]}, {"id": "yama_tsukami", "name": "Yama Tsukami", "image": "Yama_Tsukami.png", "games": []}, {"id": "yian_garuga", "name": "Yian Garuga", "image": "Yian_Garuga.png", "games": ["world_iceborne"]}, {"id": "yian_kut-ku", "name": "Yian Kut-Ku", "image": "Yian_Kut-Ku.png", "games": []}, {"id": "zamtrios", "name": "Zamtrios", "image": "Zamtrios.png", "games": []}, {"id": "zinogre", "name": "Zinogre", "image": "Zinogre.png", "games": ["rise_sunbreak", "world_iceborne"]}, {"id": "zorah_magdaros", "name": "Zorah Magdaros", "image": "Zorah_Magdaros.png", "games": ["world_iceborne"]}];
