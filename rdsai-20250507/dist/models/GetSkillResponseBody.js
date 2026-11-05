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
exports.GetSkillResponseBody = exports.GetSkillResponseBodyVersions = exports.GetSkillResponseBodyCapabilities = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetSkillResponseBodyCapabilities extends $dara.Model {
    static names() {
        return {
            delete: 'Delete',
            download: 'Download',
            edit: 'Edit',
            rollback: 'Rollback',
            share: 'Share',
            upload: 'Upload',
        };
    }
    static types() {
        return {
            delete: 'boolean',
            download: 'boolean',
            edit: 'boolean',
            rollback: 'boolean',
            share: 'boolean',
            upload: 'boolean',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetSkillResponseBodyCapabilities = GetSkillResponseBodyCapabilities;
class GetSkillResponseBodyVersions extends $dara.Model {
    static names() {
        return {
            activatedAt: 'ActivatedAt',
            createdAt: 'CreatedAt',
            credentialRequired: 'CredentialRequired',
            fileCount: 'FileCount',
            id: 'Id',
            packageSize: 'PackageSize',
            revokeReason: 'RevokeReason',
            revokedAt: 'RevokedAt',
            sha256: 'Sha256',
            skillId: 'SkillId',
            skillMarkdown: 'SkillMarkdown',
            source: 'Source',
            status: 'Status',
            updateNote: 'UpdateNote',
            version: 'Version',
        };
    }
    static types() {
        return {
            activatedAt: 'string',
            createdAt: 'string',
            credentialRequired: 'boolean',
            fileCount: 'number',
            id: 'string',
            packageSize: 'number',
            revokeReason: 'string',
            revokedAt: 'string',
            sha256: 'string',
            skillId: 'string',
            skillMarkdown: 'string',
            source: 'string',
            status: 'string',
            updateNote: 'string',
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
exports.GetSkillResponseBodyVersions = GetSkillResponseBodyVersions;
class GetSkillResponseBody extends $dara.Model {
    static names() {
        return {
            activeVersionId: 'ActiveVersionId',
            bundleHash: 'BundleHash',
            bundleSizeBytes: 'BundleSizeBytes',
            capabilities: 'Capabilities',
            category: 'Category',
            content: 'Content',
            createdAt: 'CreatedAt',
            dbtypes: 'Dbtypes',
            description: 'Description',
            displayName: 'DisplayName',
            downloadUrl: 'DownloadUrl',
            expiresAt: 'ExpiresAt',
            file: 'File',
            files: 'Files',
            frontmatter: 'Frontmatter',
            icon: 'Icon',
            id: 'Id',
            isDeleted: 'IsDeleted',
            name: 'Name',
            requestId: 'RequestId',
            scope: 'Scope',
            skillId: 'SkillId',
            skillMarkdown: 'SkillMarkdown',
            skillType: 'SkillType',
            slug: 'Slug',
            updatedAt: 'UpdatedAt',
            version: 'Version',
            versionId: 'VersionId',
            versions: 'Versions',
            visibility: 'Visibility',
        };
    }
    static types() {
        return {
            activeVersionId: 'string',
            bundleHash: 'string',
            bundleSizeBytes: 'number',
            capabilities: GetSkillResponseBodyCapabilities,
            category: 'string',
            content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            createdAt: 'string',
            dbtypes: { 'type': 'array', 'itemType': 'string' },
            description: 'string',
            displayName: 'string',
            downloadUrl: 'string',
            expiresAt: 'string',
            file: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            files: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
            frontmatter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            icon: 'string',
            id: 'string',
            isDeleted: 'boolean',
            name: 'string',
            requestId: 'string',
            scope: 'string',
            skillId: 'string',
            skillMarkdown: 'string',
            skillType: 'string',
            slug: 'string',
            updatedAt: 'string',
            version: 'string',
            versionId: 'string',
            versions: { 'type': 'array', 'itemType': GetSkillResponseBodyVersions },
            visibility: 'string',
        };
    }
    validate() {
        if (this.capabilities && typeof this.capabilities.validate === 'function') {
            this.capabilities.validate();
        }
        if (this.content) {
            $dara.Model.validateMap(this.content);
        }
        if (Array.isArray(this.dbtypes)) {
            $dara.Model.validateArray(this.dbtypes);
        }
        if (this.file) {
            $dara.Model.validateMap(this.file);
        }
        if (Array.isArray(this.files)) {
            $dara.Model.validateArray(this.files);
        }
        if (this.frontmatter) {
            $dara.Model.validateMap(this.frontmatter);
        }
        if (Array.isArray(this.versions)) {
            $dara.Model.validateArray(this.versions);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetSkillResponseBody = GetSkillResponseBody;
//# sourceMappingURL=GetSkillResponseBody.js.map