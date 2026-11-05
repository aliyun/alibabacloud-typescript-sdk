"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribePolarClawSkillDetailResponseBody = exports.DescribePolarClawSkillDetailResponseBodySkill = exports.DescribePolarClawSkillDetailResponseBodySkillStats = exports.DescribePolarClawSkillDetailResponseBodyOwner = exports.DescribePolarClawSkillDetailResponseBodyLatestVersion = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribePolarClawSkillDetailResponseBodyLatestVersion extends $dara.Model {
    static names() {
        return {
            changelog: 'Changelog',
            createdAt: 'CreatedAt',
            version: 'Version',
        };
    }
    static types() {
        return {
            changelog: 'string',
            createdAt: 'number',
            version: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawSkillDetailResponseBodyLatestVersion = DescribePolarClawSkillDetailResponseBodyLatestVersion;
class DescribePolarClawSkillDetailResponseBodyOwner extends $dara.Model {
    static names() {
        return {
            displayName: 'DisplayName',
            handle: 'Handle',
            image: 'Image',
            userId: 'UserId',
        };
    }
    static types() {
        return {
            displayName: 'string',
            handle: 'string',
            image: 'string',
            userId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawSkillDetailResponseBodyOwner = DescribePolarClawSkillDetailResponseBodyOwner;
class DescribePolarClawSkillDetailResponseBodySkillStats extends $dara.Model {
    static names() {
        return {
            comments: 'Comments',
            downloads: 'Downloads',
            installsAllTime: 'InstallsAllTime',
            installsCurrent: 'InstallsCurrent',
            stars: 'Stars',
            versions: 'Versions',
        };
    }
    static types() {
        return {
            comments: 'number',
            downloads: 'number',
            installsAllTime: 'number',
            installsCurrent: 'number',
            stars: 'number',
            versions: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawSkillDetailResponseBodySkillStats = DescribePolarClawSkillDetailResponseBodySkillStats;
class DescribePolarClawSkillDetailResponseBodySkill extends $dara.Model {
    static names() {
        return {
            createdAt: 'CreatedAt',
            displayName: 'DisplayName',
            slug: 'Slug',
            stats: 'Stats',
            summary: 'Summary',
            tags: 'Tags',
            updatedAt: 'UpdatedAt',
        };
    }
    static types() {
        return {
            createdAt: 'number',
            displayName: 'string',
            slug: 'string',
            stats: DescribePolarClawSkillDetailResponseBodySkillStats,
            summary: 'string',
            tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            updatedAt: 'number',
        };
    }
    validate() {
        if (this.stats && typeof this.stats.validate === 'function') {
            this.stats.validate();
        }
        if (this.tags) {
            $dara.Model.validateMap(this.tags);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawSkillDetailResponseBodySkill = DescribePolarClawSkillDetailResponseBodySkill;
class DescribePolarClawSkillDetailResponseBody extends $dara.Model {
    static names() {
        return {
            applicationId: 'ApplicationId',
            code: 'Code',
            latestVersion: 'LatestVersion',
            message: 'Message',
            owner: 'Owner',
            requestId: 'RequestId',
            skill: 'Skill',
        };
    }
    static types() {
        return {
            applicationId: 'string',
            code: 'number',
            latestVersion: DescribePolarClawSkillDetailResponseBodyLatestVersion,
            message: 'string',
            owner: DescribePolarClawSkillDetailResponseBodyOwner,
            requestId: 'string',
            skill: DescribePolarClawSkillDetailResponseBodySkill,
        };
    }
    validate() {
        if (this.latestVersion && typeof this.latestVersion.validate === 'function') {
            this.latestVersion.validate();
        }
        if (this.owner && typeof this.owner.validate === 'function') {
            this.owner.validate();
        }
        if (this.skill && typeof this.skill.validate === 'function') {
            this.skill.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawSkillDetailResponseBody = DescribePolarClawSkillDetailResponseBody;
//# sourceMappingURL=DescribePolarClawSkillDetailResponseBody.js.map