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
exports.ListImageCachesRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListImageCachesRequest extends $dara.Model {
    static names() {
        return {
            acrInstanceId: 'acrInstanceId',
            digest: 'digest',
            imageRefContains: 'imageRefContains',
            maxResults: 'maxResults',
            namespace: 'namespace',
            nextToken: 'nextToken',
            regionId: 'regionId',
            registry: 'registry',
            repository: 'repository',
            status: 'status',
            tag: 'tag',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            acrInstanceId: 'string',
            digest: 'string',
            imageRefContains: 'string',
            maxResults: 'number',
            namespace: 'string',
            nextToken: 'string',
            regionId: 'string',
            registry: 'string',
            repository: 'string',
            status: 'string',
            tag: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListImageCachesRequest = ListImageCachesRequest;
//# sourceMappingURL=ListImageCachesRequest.js.map