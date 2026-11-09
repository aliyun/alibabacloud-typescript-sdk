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
exports.ListManagedAgentsResponseBody = exports.ListManagedAgentsResponseBodyItems = exports.ListManagedAgentsResponseBodyItemsHarness = exports.ListManagedAgentsResponseBodyItemsHarnessConfiguration = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListManagedAgentsResponseBodyItemsHarnessConfiguration extends $dara.Model {
    static names() {
        return {
            connectorServiceAccountKey: 'connectorServiceAccountKey',
            connectorServiceAccountName: 'connectorServiceAccountName',
        };
    }
    static types() {
        return {
            connectorServiceAccountKey: 'string',
            connectorServiceAccountName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListManagedAgentsResponseBodyItemsHarnessConfiguration = ListManagedAgentsResponseBodyItemsHarnessConfiguration;
class ListManagedAgentsResponseBodyItemsHarness extends $dara.Model {
    static names() {
        return {
            configuration: 'configuration',
            outdatedInstanceCount: 'outdatedInstanceCount',
            type: 'type',
            version: 'version',
        };
    }
    static types() {
        return {
            configuration: ListManagedAgentsResponseBodyItemsHarnessConfiguration,
            outdatedInstanceCount: 'number',
            type: 'string',
            version: 'string',
        };
    }
    validate() {
        if (this.configuration && typeof this.configuration.validate === 'function') {
            this.configuration.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListManagedAgentsResponseBodyItemsHarness = ListManagedAgentsResponseBodyItemsHarness;
class ListManagedAgentsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            accessMode: 'accessMode',
            accessScope: 'accessScope',
            agentId: 'agentId',
            createMode: 'createMode',
            createdAt: 'createdAt',
            deployType: 'deployType',
            description: 'description',
            harness: 'harness',
            latestSpecVersion: 'latestSpecVersion',
            name: 'name',
            runtime: 'runtime',
            status: 'status',
            updatedAt: 'updatedAt',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            accessMode: 'string',
            accessScope: 'string',
            agentId: 'string',
            createMode: 'string',
            createdAt: 'string',
            deployType: 'string',
            description: 'string',
            harness: ListManagedAgentsResponseBodyItemsHarness,
            latestSpecVersion: 'number',
            name: 'string',
            runtime: 'string',
            status: 'string',
            updatedAt: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        if (this.harness && typeof this.harness.validate === 'function') {
            this.harness.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListManagedAgentsResponseBodyItems = ListManagedAgentsResponseBodyItems;
class ListManagedAgentsResponseBody extends $dara.Model {
    static names() {
        return {
            code: 'code',
            httpStatusCode: 'httpStatusCode',
            items: 'items',
            maxResults: 'maxResults',
            message: 'message',
            nextToken: 'nextToken',
            requestId: 'requestId',
            success: 'success',
            totalCount: 'totalCount',
        };
    }
    static types() {
        return {
            code: 'string',
            httpStatusCode: 'number',
            items: { 'type': 'array', 'itemType': ListManagedAgentsResponseBodyItems },
            maxResults: 'number',
            message: 'string',
            nextToken: 'string',
            requestId: 'string',
            success: 'boolean',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.items)) {
            $dara.Model.validateArray(this.items);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListManagedAgentsResponseBody = ListManagedAgentsResponseBody;
//# sourceMappingURL=ListManagedAgentsResponseBody.js.map