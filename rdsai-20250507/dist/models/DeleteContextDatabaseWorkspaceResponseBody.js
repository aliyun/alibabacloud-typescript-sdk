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
exports.DeleteContextDatabaseWorkspaceResponseBody = exports.DeleteContextDatabaseWorkspaceResponseBodyViewer = exports.DeleteContextDatabaseWorkspaceResponseBodyCapabilities = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DeleteContextDatabaseWorkspaceResponseBodyCapabilities extends $dara.Model {
    static names() {
        return {
            executableActions: 'ExecutableActions',
        };
    }
    static types() {
        return {
            executableActions: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.executableActions)) {
            $dara.Model.validateArray(this.executableActions);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DeleteContextDatabaseWorkspaceResponseBodyCapabilities = DeleteContextDatabaseWorkspaceResponseBodyCapabilities;
class DeleteContextDatabaseWorkspaceResponseBodyViewer extends $dara.Model {
    static names() {
        return {
            boundMemberId: 'BoundMemberId',
            boundMemberRole: 'BoundMemberRole',
            boundMemberStatus: 'BoundMemberStatus',
            callerType: 'CallerType',
            identityMode: 'IdentityMode',
            selectedMemberId: 'SelectedMemberId',
        };
    }
    static types() {
        return {
            boundMemberId: 'string',
            boundMemberRole: 'string',
            boundMemberStatus: 'string',
            callerType: 'string',
            identityMode: 'string',
            selectedMemberId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DeleteContextDatabaseWorkspaceResponseBodyViewer = DeleteContextDatabaseWorkspaceResponseBodyViewer;
class DeleteContextDatabaseWorkspaceResponseBody extends $dara.Model {
    static names() {
        return {
            capabilities: 'Capabilities',
            clusterId: 'ClusterId',
            consolePermissionMode: 'ConsolePermissionMode',
            createdAt: 'CreatedAt',
            permissionMode: 'PermissionMode',
            requestId: 'RequestId',
            status: 'Status',
            type: 'Type',
            viewer: 'Viewer',
            workspaceId: 'WorkspaceId',
            workspaceName: 'WorkspaceName',
        };
    }
    static types() {
        return {
            capabilities: DeleteContextDatabaseWorkspaceResponseBodyCapabilities,
            clusterId: 'string',
            consolePermissionMode: 'string',
            createdAt: 'string',
            permissionMode: 'string',
            requestId: 'string',
            status: 'string',
            type: 'string',
            viewer: DeleteContextDatabaseWorkspaceResponseBodyViewer,
            workspaceId: 'string',
            workspaceName: 'string',
        };
    }
    validate() {
        if (this.capabilities && typeof this.capabilities.validate === 'function') {
            this.capabilities.validate();
        }
        if (this.viewer && typeof this.viewer.validate === 'function') {
            this.viewer.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DeleteContextDatabaseWorkspaceResponseBody = DeleteContextDatabaseWorkspaceResponseBody;
//# sourceMappingURL=DeleteContextDatabaseWorkspaceResponseBody.js.map