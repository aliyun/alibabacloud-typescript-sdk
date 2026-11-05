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
exports.DescribeUserResourcesRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeUserResourcesRequest extends $dara.Model {
    static names() {
        return {
            accessType: 'AccessType',
            autoRefresh: 'AutoRefresh',
            categoryId: 'CategoryId',
            categoryType: 'CategoryType',
            clientId: 'ClientId',
            clientType: 'ClientType',
            clientVersion: 'ClientVersion',
            dualCenterForward: 'DualCenterForward',
            language: 'Language',
            loginRegionId: 'LoginRegionId',
            loginToken: 'LoginToken',
            maxResults: 'MaxResults',
            nextToken: 'NextToken',
            officeSiteIds: 'OfficeSiteIds',
            orderBy: 'OrderBy',
            productTypes: 'ProductTypes',
            protocolType: 'ProtocolType',
            queryDesktopDurationList: 'QueryDesktopDurationList',
            queryDesktopTimers: 'QueryDesktopTimers',
            queryFotaUpdate: 'QueryFotaUpdate',
            refreshFotaUpdate: 'RefreshFotaUpdate',
            resourceIds: 'ResourceIds',
            resourceName: 'ResourceName',
            resourceTypes: 'ResourceTypes',
            scene: 'Scene',
            searchRegionId: 'SearchRegionId',
            sessionId: 'SessionId',
            sortType: 'SortType',
            uuid: 'Uuid',
        };
    }
    static types() {
        return {
            accessType: 'string',
            autoRefresh: 'boolean',
            categoryId: 'number',
            categoryType: 'number',
            clientId: 'string',
            clientType: 'string',
            clientVersion: 'string',
            dualCenterForward: 'boolean',
            language: 'string',
            loginRegionId: 'string',
            loginToken: 'string',
            maxResults: 'number',
            nextToken: 'string',
            officeSiteIds: { 'type': 'array', 'itemType': 'string' },
            orderBy: 'string',
            productTypes: { 'type': 'array', 'itemType': 'string' },
            protocolType: 'string',
            queryDesktopDurationList: 'boolean',
            queryDesktopTimers: 'boolean',
            queryFotaUpdate: 'boolean',
            refreshFotaUpdate: 'boolean',
            resourceIds: { 'type': 'array', 'itemType': 'string' },
            resourceName: 'string',
            resourceTypes: { 'type': 'array', 'itemType': 'string' },
            scene: 'string',
            searchRegionId: 'string',
            sessionId: 'string',
            sortType: 'string',
            uuid: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.officeSiteIds)) {
            $dara.Model.validateArray(this.officeSiteIds);
        }
        if (Array.isArray(this.productTypes)) {
            $dara.Model.validateArray(this.productTypes);
        }
        if (Array.isArray(this.resourceIds)) {
            $dara.Model.validateArray(this.resourceIds);
        }
        if (Array.isArray(this.resourceTypes)) {
            $dara.Model.validateArray(this.resourceTypes);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeUserResourcesRequest = DescribeUserResourcesRequest;
//# sourceMappingURL=DescribeUserResourcesRequest.js.map