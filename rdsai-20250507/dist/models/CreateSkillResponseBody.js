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
exports.CreateSkillResponseBody = exports.CreateSkillResponseBodyVersion = exports.CreateSkillResponseBodySkill = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateSkillResponseBodySkill extends $dara.Model {
    static names() {
        return {
            activeVersionId: 'ActiveVersionId',
            category: 'Category',
            createdAt: 'CreatedAt',
            description: 'Description',
            displayName: 'DisplayName',
            icon: 'Icon',
            id: 'Id',
            isDeleted: 'IsDeleted',
            scope: 'Scope',
            slug: 'Slug',
            updatedAt: 'UpdatedAt',
        };
    }
    static types() {
        return {
            activeVersionId: 'string',
            category: 'string',
            createdAt: 'string',
            description: 'string',
            displayName: 'string',
            icon: 'string',
            id: 'string',
            isDeleted: 'boolean',
            scope: 'string',
            slug: 'string',
            updatedAt: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateSkillResponseBodySkill = CreateSkillResponseBodySkill;
class CreateSkillResponseBodyVersion extends $dara.Model {
    static names() {
        return {
            activatedAt: 'ActivatedAt',
            createdAt: 'CreatedAt',
            credentialRequired: 'CredentialRequired',
            id: 'Id',
            packageSize: 'PackageSize',
            revokeReason: 'RevokeReason',
            revokedAt: 'RevokedAt',
            sha256: 'Sha256',
            skillId: 'SkillId',
            status: 'Status',
            version: 'Version',
        };
    }
    static types() {
        return {
            activatedAt: 'string',
            createdAt: 'string',
            credentialRequired: 'boolean',
            id: 'string',
            packageSize: 'number',
            revokeReason: 'string',
            revokedAt: 'string',
            sha256: 'string',
            skillId: 'string',
            status: 'string',
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
exports.CreateSkillResponseBodyVersion = CreateSkillResponseBodyVersion;
class CreateSkillResponseBody extends $dara.Model {
    static names() {
        return {
            action: 'Action',
            bundleHash: 'BundleHash',
            catalogRevision: 'CatalogRevision',
            content: 'Content',
            createdAt: 'CreatedAt',
            dbtypes: 'Dbtypes',
            description: 'Description',
            id: 'Id',
            name: 'Name',
            requestId: 'RequestId',
            skill: 'Skill',
            skillId: 'SkillId',
            skillType: 'SkillType',
            version: 'Version',
            versionId: 'VersionId',
        };
    }
    static types() {
        return {
            action: 'string',
            bundleHash: 'string',
            catalogRevision: 'number',
            content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            createdAt: 'string',
            dbtypes: { 'type': 'array', 'itemType': 'string' },
            description: 'string',
            id: 'string',
            name: 'string',
            requestId: 'string',
            skill: CreateSkillResponseBodySkill,
            skillId: 'string',
            skillType: 'string',
            version: CreateSkillResponseBodyVersion,
            versionId: 'string',
        };
    }
    validate() {
        if (this.content) {
            $dara.Model.validateMap(this.content);
        }
        if (Array.isArray(this.dbtypes)) {
            $dara.Model.validateArray(this.dbtypes);
        }
        if (this.skill && typeof this.skill.validate === 'function') {
            this.skill.validate();
        }
        if (this.version && typeof this.version.validate === 'function') {
            this.version.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateSkillResponseBody = CreateSkillResponseBody;
//# sourceMappingURL=CreateSkillResponseBody.js.map