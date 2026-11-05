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
exports.DescribePolarClawAgentsResponseBody = exports.DescribePolarClawAgentsResponseBodyAgents = exports.DescribePolarClawAgentsResponseBodyAgentsModel = exports.DescribePolarClawAgentsResponseBodyAgentsIdentity = exports.DescribePolarClawAgentsResponseBodyAgentsFiles = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribePolarClawAgentsResponseBodyAgentsFiles extends $dara.Model {
    static names() {
        return {
            missing: 'Missing',
            name: 'Name',
            path: 'Path',
            size: 'Size',
            updatedAtMs: 'UpdatedAtMs',
        };
    }
    static types() {
        return {
            missing: 'boolean',
            name: 'string',
            path: 'string',
            size: 'number',
            updatedAtMs: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawAgentsResponseBodyAgentsFiles = DescribePolarClawAgentsResponseBodyAgentsFiles;
class DescribePolarClawAgentsResponseBodyAgentsIdentity extends $dara.Model {
    static names() {
        return {
            avatar: 'Avatar',
            avatarUrl: 'AvatarUrl',
            emoji: 'Emoji',
            name: 'Name',
            theme: 'Theme',
        };
    }
    static types() {
        return {
            avatar: 'string',
            avatarUrl: 'string',
            emoji: 'string',
            name: 'string',
            theme: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawAgentsResponseBodyAgentsIdentity = DescribePolarClawAgentsResponseBodyAgentsIdentity;
class DescribePolarClawAgentsResponseBodyAgentsModel extends $dara.Model {
    static names() {
        return {
            fallbacks: 'Fallbacks',
            primary: 'Primary',
        };
    }
    static types() {
        return {
            fallbacks: { 'type': 'array', 'itemType': 'string' },
            primary: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.fallbacks)) {
            $dara.Model.validateArray(this.fallbacks);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawAgentsResponseBodyAgentsModel = DescribePolarClawAgentsResponseBodyAgentsModel;
class DescribePolarClawAgentsResponseBodyAgents extends $dara.Model {
    static names() {
        return {
            default: 'Default',
            files: 'Files',
            id: 'Id',
            identity: 'Identity',
            model: 'Model',
            name: 'Name',
            skills: 'Skills',
            workspace: 'Workspace',
        };
    }
    static types() {
        return {
            default: 'boolean',
            files: { 'type': 'array', 'itemType': DescribePolarClawAgentsResponseBodyAgentsFiles },
            id: 'string',
            identity: DescribePolarClawAgentsResponseBodyAgentsIdentity,
            model: DescribePolarClawAgentsResponseBodyAgentsModel,
            name: 'string',
            skills: { 'type': 'array', 'itemType': 'string' },
            workspace: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.files)) {
            $dara.Model.validateArray(this.files);
        }
        if (this.identity && typeof this.identity.validate === 'function') {
            this.identity.validate();
        }
        if (this.model && typeof this.model.validate === 'function') {
            this.model.validate();
        }
        if (Array.isArray(this.skills)) {
            $dara.Model.validateArray(this.skills);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawAgentsResponseBodyAgents = DescribePolarClawAgentsResponseBodyAgents;
class DescribePolarClawAgentsResponseBody extends $dara.Model {
    static names() {
        return {
            agents: 'Agents',
            applicationId: 'ApplicationId',
            code: 'Code',
            defaultId: 'DefaultId',
            mainKey: 'MainKey',
            message: 'Message',
            requestId: 'RequestId',
            scope: 'Scope',
        };
    }
    static types() {
        return {
            agents: { 'type': 'array', 'itemType': DescribePolarClawAgentsResponseBodyAgents },
            applicationId: 'string',
            code: 'number',
            defaultId: 'string',
            mainKey: 'string',
            message: 'string',
            requestId: 'string',
            scope: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.agents)) {
            $dara.Model.validateArray(this.agents);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawAgentsResponseBody = DescribePolarClawAgentsResponseBody;
//# sourceMappingURL=DescribePolarClawAgentsResponseBody.js.map