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
exports.DescribeColdStorageInstanceRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeColdStorageInstanceRequest extends $dara.Model {
    static names() {
        return {
            DBClusterId: 'DBClusterId',
            DBName: 'DBName',
            engineType: 'EngineType',
            expireTime: 'ExpireTime',
            maxResults: 'MaxResults',
            nextToken: 'NextToken',
            objectType: 'ObjectType',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            regionId: 'RegionId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            tableName: 'TableName',
        };
    }
    static types() {
        return {
            DBClusterId: 'string',
            DBName: 'string',
            engineType: 'string',
            expireTime: 'number',
            maxResults: 'number',
            nextToken: 'string',
            objectType: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            pageNumber: 'string',
            pageSize: 'string',
            regionId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            tableName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeColdStorageInstanceRequest = DescribeColdStorageInstanceRequest;
//# sourceMappingURL=DescribeColdStorageInstanceRequest.js.map