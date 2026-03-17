const fs = require('fs');
const file = 'c:/Users/kckwok/Desktop/GCL & OPL Website/opl-company-website-html/business.html';
let content = fs.readFileSync(file, 'utf8');

const regex = /<div class="project-grid carousel-track">[\s\S]*?<\/div>\r?\n\s*<button class="carousel-btn next"/m;

const replacement = \<div class="project-grid carousel-track">
                <!-- 1. Yuen Long Concrete MiC Units Mockup - 2025 -->
                <div class="project-card">
                    <div class="card-image">
                        <img src="img/opl-website-img/工程項目 下高埔村全混凝土MiC示範單位.jpg" alt="元朗 下高埔村全混凝土MiC示範單位">
                    </div>
                    <div class="card-content">
                        <h3 data-i18n="proj_yuenlong">元朗</h3>
                        <p data-i18n="proj_name_hkpt_conc_mic">下高埔村全混凝土MiC示範單位</p>
                        <span class="project-year" data-i18n="proj_year_2025">2025年建成</span>
                    </div>
                </div>
                <!-- 2. Sai Sha Go Aqua - 2024 -->
                <div class="project-card">
                    <div class="card-image">
                        <img src="img/opl-website-img/工程項目 Go Aqua.jpg" alt="西沙 Go Aqua">
                    </div>
                    <div class="card-content">
                        <h3 data-i18n="proj_saisha">西沙</h3>
                        <p data-i18n="proj_go_aqua">Go Aqua</p>
                        <span class="project-year" data-i18n="proj_year_2024">2024年建成</span>
                    </div>
                </div>
                <!-- 3. Yuen Long Hybrid MiC Site Office - 2024 -->
                <div class="project-card">
                    <div class="card-image">
                        <img src="img/opl-website-img/工程項目 下高埔鋼結構MiC寫字樓.jpg" alt="元朗 下高埔鋼結構MiC寫字樓">
                    </div>
                    <div class="card-content">
                        <h3 data-i18n="proj_yuenlong">元朗</h3>
                        <p data-i18n="proj_name_hkpt_hybrid_mic">下高埔鋼結構MiC寫字樓</p>
                        <span class="project-year" data-i18n="proj_year_2024">2024年建成</span>
                    </div>
                </div>
                <!-- 4. Kai Tak Cullinan Harbour - 2024 -->
                <div class="project-card">
                    <div class="card-image">
                        <img src="img/opl-website-img/工程項目 啟德 天璽海.png" alt="啟德 天璽  海">
                    </div>
                    <div class="card-content">
                        <h3 data-i18n="proj_keitak">啟德</h3>
                        <p data-i18n="proj_cullinan_harbour">天璽  海</p>
                        <span class="project-year" data-i18n="proj_year_2024">2024年建成</span>
                    </div>
                </div>
                <!-- 5. Sai Sha Sierra Sea - 2024 -->
                <div class="project-card">
                    <div class="card-image">
                        <img src="img/opl-website-img/工程項目 Sierra Sea.png" alt="西沙 Sierra Sea">
                    </div>
                    <div class="card-content">
                        <h3 data-i18n="proj_saisha">西沙</h3>
                        <p data-i18n="proj_sierra_sea">Sierra Sea</p>
                        <span class="project-year" data-i18n="proj_year_2024">2024年建成</span>
                    </div>
                </div>
                <!-- 6. Kai Tak Cullinan Sky - 2023 -->
                <div class="project-card">
                    <div class="card-image">
                        <img src="img/opl-website-img/工程項目 啟德 天璽天.png" alt="啟德 天璽  天">
                    </div>
                    <div class="card-content">
                        <h3 data-i18n="proj_keitak">啟德</h3>
                        <p data-i18n="proj_cullinan_sky">天璽  天</p>
                        <span class="project-year" data-i18n="proj_year_2023">2023年建成</span>
                    </div>
                </div>
                <!-- 7. Tuen Mun NOVOLAND - 2023 -->
                <div class="project-card">
                    <div class="card-image">
                        <img src="img/opl-website-img/工程項目 NOVOLAND.png" alt="屯門 NOVOLAND">
                    </div>
                    <div class="card-content">
                        <h3 data-i18n="proj_tuenmun">屯門</h3>
                        <p data-i18n="proj_novoland">NOVOLAND</p>
                        <span class="project-year" data-i18n="proj_year_2023">2023年建成</span>
                    </div>
                </div>
                <!-- 8. Yuen Long The YOHO Hub Phase 2 - 2022 -->
                <div class="project-card">
                    <div class="card-image">
                        <img src="img/opl-website-img/工程項目 The yoho hub 2期.png" alt="元朗 The YOHO Hub 2期">
                    </div>
                    <div class="card-content">
                        <h3 data-i18n="proj_yuenlong">元朗</h3>
                        <p data-i18n="proj_yoho_hub_2">The YOHO Hub 2期</p>
                        <span class="project-year" data-i18n="proj_year_2022">2022年建成</span>
                    </div>
                </div>
                <!-- 9. Pak Shek Kok University Hill - 2022 -->
                <div class="project-card">
                    <div class="card-image">
                        <img src="img/opl-website-img/工程項目 University Hill.png" alt="白石角 University Hill">
                    </div>
                    <div class="card-content">
                        <h3 data-i18n="proj_pakshekkok">白石角</h3>
                        <p data-i18n="proj_university_hill">University Hill</p>
                        <span class="project-year" data-i18n="proj_year_2022">2022年建成</span>
                    </div>
                </div>
            </div>
            <button class="carousel-btn next"\;

if (content.match(regex)) {
    content = content.replace(regex, replacement);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully replaced grid in business.html');
} else {
    console.log('Regex did not match.');
}
