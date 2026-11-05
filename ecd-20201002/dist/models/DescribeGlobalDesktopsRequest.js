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
exports.DescribeGlobalDesktopsRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeGlobalDesktopsRequest extends $dara.Model {
    static names() {
        return {
            clientId: 'ClientId',
            desktopAccessType: 'DesktopAccessType',
            desktopId: 'DesktopId',
            desktopName: 'DesktopName',
            desktopStatus: 'DesktopStatus',
            directoryId: 'DirectoryId',
            keyword: 'Keyword',
            language: 'Language',
            loginRegionId: 'LoginRegionId',
            loginToken: 'LoginToken',
            maxResults: 'MaxResults',
            nextToken: 'NextToken',
            officeSiteId: 'OfficeSiteId',
            orderBy: 'OrderBy',
            queryFotaUpdate: 'QueryFotaUpdate',
            regionId: 'RegionId',
            searchRegionId: 'SearchRegionId',
            sessionId: 'SessionId',
            sortType: 'SortType',
            withoutLatency: 'WithoutLatency',
        };
    }
    static types() {
        return {
            clientId: 'string',
            desktopAccessType: 'string',
            desktopId: { 'type': 'array', 'itemType': 'string' },
            desktopName: 'string',
            desktopStatus: 'string',
            directoryId: 'string',
            keyword: 'string',
            language: 'string',
            loginRegionId: 'string',
            loginToken: 'string',
            maxResults: 'number',
            nextToken: 'string',
            officeSiteId: 'string',
            orderBy: 'string',
            queryFotaUpdate: 'boolean',
            regionId: 'string',
            searchRegionId: 'string',
            sessionId: 'string',
            sortType: 'string',
            withoutLatency: 'boolean',
        };
    }
    validate() {
        if (Array.isArray(this.desktopId)) {
            $dara.Model.validateArray(this.desktopId);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDesktopsRequest = DescribeGlobalDesktopsRequest;
//# sourceMappingURL=DescribeGlobalDesktopsRequest.js.map