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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
const openapi_core_1 = __importDefault(require("@alicloud/openapi-core"));
const openapi_core_2 = require("@alicloud/openapi-core");
const $_model = __importStar(require("./models/model"));
__exportStar(require("./models/model"), exports);
class Client extends openapi_core_1.default {
    constructor(config) {
        super(config);
        this._endpointRule = "regional";
        this.checkConfig(config);
        this._endpoint = this.getEndpoint("ecd", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
    }
    getEndpoint(productId, regionId, endpointRule, network, suffix, endpointMap, endpoint) {
        if (!$dara.isNull(endpoint)) {
            return endpoint;
        }
        if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
            return endpointMap[regionId];
        }
        return openapi_core_2.OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
    }
    /**
     * Allows over-the-air updates for cloud computers.
     *
     * @param request - ApproveFotaUpdateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ApproveFotaUpdateResponse
     */
    async approveFotaUpdateWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.appVersion)) {
            query["AppVersion"] = request.appVersion;
        }
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.desktopId)) {
            query["DesktopId"] = request.desktopId;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        if (!$dara.isNull(request.targetStatus)) {
            query["TargetStatus"] = request.targetStatus;
        }
        if (!$dara.isNull(request.uuid)) {
            query["Uuid"] = request.uuid;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ApproveFotaUpdate",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.ApproveFotaUpdateResponse({}));
    }
    /**
     * Allows over-the-air updates for cloud computers.
     *
     * @param request - ApproveFotaUpdateRequest
     * @returns ApproveFotaUpdateResponse
     */
    async approveFotaUpdate(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.approveFotaUpdateWithOptions(request, runtime);
    }
    /**
     * Modifies the password of a user.
     *
     * @param request - ChangePasswordRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ChangePasswordResponse
     */
    async changePasswordWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.endUserId)) {
            query["EndUserId"] = request.endUserId;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.newPassword)) {
            query["NewPassword"] = request.newPassword;
        }
        if (!$dara.isNull(request.officeSiteId)) {
            query["OfficeSiteId"] = request.officeSiteId;
        }
        if (!$dara.isNull(request.oldPassword)) {
            query["OldPassword"] = request.oldPassword;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ChangePassword",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.ChangePasswordResponse({}));
    }
    /**
     * Modifies the password of a user.
     *
     * @param request - ChangePasswordRequest
     * @returns ChangePasswordResponse
     */
    async changePassword(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.changePasswordWithOptions(request, runtime);
    }
    /**
     * Deletes a specified fingerprint template.
     *
     * @param request - DeleteFingerPrintTemplateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteFingerPrintTemplateResponse
     */
    async deleteFingerPrintTemplateWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.index)) {
            query["Index"] = request.index;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteFingerPrintTemplate",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DeleteFingerPrintTemplateResponse({}));
    }
    /**
     * Deletes a specified fingerprint template.
     *
     * @param request - DeleteFingerPrintTemplateRequest
     * @returns DeleteFingerPrintTemplateResponse
     */
    async deleteFingerPrintTemplate(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteFingerPrintTemplateWithOptions(request, runtime);
    }
    /**
     * Queries directory details.
     *
     * @param request - DescribeDirectoriesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDirectoriesResponse
     */
    async describeDirectoriesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.directoryId)) {
            query["DirectoryId"] = request.directoryId;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeDirectories",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DescribeDirectoriesResponse({}));
    }
    /**
     * Queries directory details.
     *
     * @param request - DescribeDirectoriesRequest
     * @returns DescribeDirectoriesResponse
     */
    async describeDirectories(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeDirectoriesWithOptions(request, runtime);
    }
    /**
     * Queries fingerprint templates.
     *
     * @param request - DescribeFingerPrintTemplatesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeFingerPrintTemplatesResponse
     */
    async describeFingerPrintTemplatesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeFingerPrintTemplates",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DescribeFingerPrintTemplatesResponse({}));
    }
    /**
     * Queries fingerprint templates.
     *
     * @param request - DescribeFingerPrintTemplatesRequest
     * @returns DescribeFingerPrintTemplatesResponse
     */
    async describeFingerPrintTemplates(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeFingerPrintTemplatesWithOptions(request, runtime);
    }
    /**
     * Queries the details of cloud computers in multiple regions. Currently, only regions in the Chinese mainland are supported.
     *
     * @remarks
     * - This API operation uses a centralized domain name. The endpoint is in Shanghai, and calls from other regions are not supported.
     * - The cloud computer status information in this API operation has a delay of 1 to 3 seconds compared to the actual value.
     *
     * @param request - DescribeGlobalDesktopsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeGlobalDesktopsResponse
     */
    async describeGlobalDesktopsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.desktopAccessType)) {
            query["DesktopAccessType"] = request.desktopAccessType;
        }
        if (!$dara.isNull(request.desktopId)) {
            query["DesktopId"] = request.desktopId;
        }
        if (!$dara.isNull(request.desktopName)) {
            query["DesktopName"] = request.desktopName;
        }
        if (!$dara.isNull(request.desktopStatus)) {
            query["DesktopStatus"] = request.desktopStatus;
        }
        if (!$dara.isNull(request.directoryId)) {
            query["DirectoryId"] = request.directoryId;
        }
        if (!$dara.isNull(request.keyword)) {
            query["Keyword"] = request.keyword;
        }
        if (!$dara.isNull(request.language)) {
            query["Language"] = request.language;
        }
        if (!$dara.isNull(request.loginRegionId)) {
            query["LoginRegionId"] = request.loginRegionId;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.officeSiteId)) {
            query["OfficeSiteId"] = request.officeSiteId;
        }
        if (!$dara.isNull(request.orderBy)) {
            query["OrderBy"] = request.orderBy;
        }
        if (!$dara.isNull(request.queryFotaUpdate)) {
            query["QueryFotaUpdate"] = request.queryFotaUpdate;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.searchRegionId)) {
            query["SearchRegionId"] = request.searchRegionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        if (!$dara.isNull(request.sortType)) {
            query["SortType"] = request.sortType;
        }
        if (!$dara.isNull(request.withoutLatency)) {
            query["WithoutLatency"] = request.withoutLatency;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeGlobalDesktops",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DescribeGlobalDesktopsResponse({}));
    }
    /**
     * Queries the details of cloud computers in multiple regions. Currently, only regions in the Chinese mainland are supported.
     *
     * @remarks
     * - This API operation uses a centralized domain name. The endpoint is in Shanghai, and calls from other regions are not supported.
     * - The cloud computer status information in this API operation has a delay of 1 to 3 seconds compared to the actual value.
     *
     * @param request - DescribeGlobalDesktopsRequest
     * @returns DescribeGlobalDesktopsResponse
     */
    async describeGlobalDesktops(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeGlobalDesktopsWithOptions(request, runtime);
    }
    /**
     * Query the details of an office network.
     *
     * @param request - DescribeOfficeSitesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeOfficeSitesResponse
     */
    async describeOfficeSitesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.officeSiteId)) {
            query["OfficeSiteId"] = request.officeSiteId;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.uuid)) {
            query["Uuid"] = request.uuid;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeOfficeSites",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DescribeOfficeSitesResponse({}));
    }
    /**
     * Query the details of an office network.
     *
     * @param request - DescribeOfficeSitesRequest
     * @returns DescribeOfficeSitesResponse
     */
    async describeOfficeSites(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeOfficeSitesWithOptions(request, runtime);
    }
    /**
     * Queries the Alibaba Cloud region information supported by WUYING Workspace by calling DescribeRegions.
     *
     * @param request - DescribeRegionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRegionsResponse
     */
    async describeRegionsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeRegions",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DescribeRegionsResponse({}));
    }
    /**
     * Queries the Alibaba Cloud region information supported by WUYING Workspace by calling DescribeRegions.
     *
     * @param request - DescribeRegionsRequest
     * @returns DescribeRegionsResponse
     */
    async describeRegions(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeRegionsWithOptions(request, runtime);
    }
    /**
     * Queries the list and details of snapshots for a cloud desktop.
     *
     * @param request - DescribeSnapshotsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSnapshotsResponse
     */
    async describeSnapshotsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.desktopId)) {
            query["DesktopId"] = request.desktopId;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        if (!$dara.isNull(request.snapshotId)) {
            query["SnapshotId"] = request.snapshotId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeSnapshots",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DescribeSnapshotsResponse({}));
    }
    /**
     * Queries the list and details of snapshots for a cloud desktop.
     *
     * @param request - DescribeSnapshotsRequest
     * @returns DescribeSnapshotsResponse
     */
    async describeSnapshots(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeSnapshotsWithOptions(request, runtime);
    }
    /**
     * Queries the list of user resources.
     *
     * @remarks
     * Before you call this operation, make sure that you fully understand the resource types and product types of WUYING Workspace.
     *
     * @param request - DescribeUserResourcesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeUserResourcesResponse
     */
    async describeUserResourcesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.accessType)) {
            query["AccessType"] = request.accessType;
        }
        if (!$dara.isNull(request.autoRefresh)) {
            query["AutoRefresh"] = request.autoRefresh;
        }
        if (!$dara.isNull(request.categoryId)) {
            query["CategoryId"] = request.categoryId;
        }
        if (!$dara.isNull(request.categoryType)) {
            query["CategoryType"] = request.categoryType;
        }
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.clientType)) {
            query["ClientType"] = request.clientType;
        }
        if (!$dara.isNull(request.clientVersion)) {
            query["ClientVersion"] = request.clientVersion;
        }
        if (!$dara.isNull(request.dualCenterForward)) {
            query["DualCenterForward"] = request.dualCenterForward;
        }
        if (!$dara.isNull(request.language)) {
            query["Language"] = request.language;
        }
        if (!$dara.isNull(request.loginRegionId)) {
            query["LoginRegionId"] = request.loginRegionId;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.officeSiteIds)) {
            query["OfficeSiteIds"] = request.officeSiteIds;
        }
        if (!$dara.isNull(request.orderBy)) {
            query["OrderBy"] = request.orderBy;
        }
        if (!$dara.isNull(request.productTypes)) {
            query["ProductTypes"] = request.productTypes;
        }
        if (!$dara.isNull(request.protocolType)) {
            query["ProtocolType"] = request.protocolType;
        }
        if (!$dara.isNull(request.queryDesktopDurationList)) {
            query["QueryDesktopDurationList"] = request.queryDesktopDurationList;
        }
        if (!$dara.isNull(request.queryDesktopTimers)) {
            query["QueryDesktopTimers"] = request.queryDesktopTimers;
        }
        if (!$dara.isNull(request.queryFotaUpdate)) {
            query["QueryFotaUpdate"] = request.queryFotaUpdate;
        }
        if (!$dara.isNull(request.refreshFotaUpdate)) {
            query["RefreshFotaUpdate"] = request.refreshFotaUpdate;
        }
        if (!$dara.isNull(request.resourceIds)) {
            query["ResourceIds"] = request.resourceIds;
        }
        if (!$dara.isNull(request.resourceName)) {
            query["ResourceName"] = request.resourceName;
        }
        if (!$dara.isNull(request.resourceTypes)) {
            query["ResourceTypes"] = request.resourceTypes;
        }
        if (!$dara.isNull(request.scene)) {
            query["Scene"] = request.scene;
        }
        if (!$dara.isNull(request.searchRegionId)) {
            query["SearchRegionId"] = request.searchRegionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        if (!$dara.isNull(request.sortType)) {
            query["SortType"] = request.sortType;
        }
        if (!$dara.isNull(request.uuid)) {
            query["Uuid"] = request.uuid;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeUserResources",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DescribeUserResourcesResponse({}));
    }
    /**
     * Queries the list of user resources.
     *
     * @remarks
     * Before you call this operation, make sure that you fully understand the resource types and product types of WUYING Workspace.
     *
     * @param request - DescribeUserResourcesRequest
     * @returns DescribeUserResourcesResponse
     */
    async describeUserResources(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeUserResourcesWithOptions(request, runtime);
    }
    /**
     * Encrypts a user password.
     *
     * @param request - EncryptPasswordRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EncryptPasswordResponse
     */
    async encryptPasswordWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.directoryId)) {
            query["DirectoryId"] = request.directoryId;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.officeSiteId)) {
            query["OfficeSiteId"] = request.officeSiteId;
        }
        if (!$dara.isNull(request.password)) {
            query["Password"] = request.password;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "EncryptPassword",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.EncryptPasswordResponse({}));
    }
    /**
     * Encrypts a user password.
     *
     * @param request - EncryptPasswordRequest
     * @returns EncryptPasswordResponse
     */
    async encryptPassword(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.encryptPasswordWithOptions(request, runtime);
    }
    /**
     * Obtain the logon credential for Enterprise File Gateway.
     *
     * @param request - GetCloudDriveServiceMountTokenRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetCloudDriveServiceMountTokenResponse
     */
    async getCloudDriveServiceMountTokenWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.officeSiteId)) {
            query["OfficeSiteId"] = request.officeSiteId;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetCloudDriveServiceMountToken",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.GetCloudDriveServiceMountTokenResponse({}));
    }
    /**
     * Obtain the logon credential for Enterprise File Gateway.
     *
     * @param request - GetCloudDriveServiceMountTokenRequest
     * @returns GetCloudDriveServiceMountTokenResponse
     */
    async getCloudDriveServiceMountToken(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getCloudDriveServiceMountTokenWithOptions(request, runtime);
    }
    /**
     * Retrieves the connection credentials for a cloud desktop.
     *
     * @remarks
     * When you call this operation for the first time, the system returns a `TaskId`. Use this `TaskId` to continue calling this operation until the value of `TaskStatus` changes to `FINISHED` or `FAILED`. When `TaskStatus` is `FINISHED`, the value of `Ticket` is the ticket that the client uses to connect to the cloud desktop.
     *
     * @param request - GetConnectionTicketRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetConnectionTicketResponse
     */
    async getConnectionTicketWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.accessType)) {
            query["AccessType"] = request.accessType;
        }
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.clientOS)) {
            query["ClientOS"] = request.clientOS;
        }
        if (!$dara.isNull(request.clientType)) {
            query["ClientType"] = request.clientType;
        }
        if (!$dara.isNull(request.clientVersion)) {
            query["ClientVersion"] = request.clientVersion;
        }
        if (!$dara.isNull(request.commandContent)) {
            query["CommandContent"] = request.commandContent;
        }
        if (!$dara.isNull(request.desktopId)) {
            query["DesktopId"] = request.desktopId;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.ownerId)) {
            query["OwnerId"] = request.ownerId;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.resourceOwnerAccount)) {
            query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
        }
        if (!$dara.isNull(request.resourceOwnerId)) {
            query["ResourceOwnerId"] = request.resourceOwnerId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        if (!$dara.isNull(request.tag)) {
            query["Tag"] = request.tag;
        }
        if (!$dara.isNull(request.taskId)) {
            query["TaskId"] = request.taskId;
        }
        if (!$dara.isNull(request.ticketBlackList)) {
            query["TicketBlackList"] = request.ticketBlackList;
        }
        if (!$dara.isNull(request.uuid)) {
            query["Uuid"] = request.uuid;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetConnectionTicket",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.GetConnectionTicketResponse({}));
    }
    /**
     * Retrieves the connection credentials for a cloud desktop.
     *
     * @remarks
     * When you call this operation for the first time, the system returns a `TaskId`. Use this `TaskId` to continue calling this operation until the value of `TaskStatus` changes to `FINISHED` or `FAILED`. When `TaskStatus` is `FINISHED`, the value of `Ticket` is the ticket that the client uses to connect to the cloud desktop.
     *
     * @param request - GetConnectionTicketRequest
     * @returns GetConnectionTicketResponse
     */
    async getConnectionTicket(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getConnectionTicketWithOptions(request, runtime);
    }
    /**
     * Retrieves logon credentials.
     *
     * @param tmpReq - GetLoginTokenRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetLoginTokenResponse
     */
    async getLoginTokenWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.GetLoginTokenShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.availableFeatures)) {
            request.availableFeaturesShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.availableFeatures, "AvailableFeatures", "json");
        }
        let query = {};
        if (!$dara.isNull(request.authenticationCode)) {
            query["AuthenticationCode"] = request.authenticationCode;
        }
        if (!$dara.isNull(request.availableFeaturesShrink)) {
            query["AvailableFeatures"] = request.availableFeaturesShrink;
        }
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.clientName)) {
            query["ClientName"] = request.clientName;
        }
        if (!$dara.isNull(request.clientOS)) {
            query["ClientOS"] = request.clientOS;
        }
        if (!$dara.isNull(request.clientType)) {
            query["ClientType"] = request.clientType;
        }
        if (!$dara.isNull(request.clientVersion)) {
            query["ClientVersion"] = request.clientVersion;
        }
        if (!$dara.isNull(request.currentStage)) {
            query["CurrentStage"] = request.currentStage;
        }
        if (!$dara.isNull(request.directoryId)) {
            query["DirectoryId"] = request.directoryId;
        }
        if (!$dara.isNull(request.endUserId)) {
            query["EndUserId"] = request.endUserId;
        }
        if (!$dara.isNull(request.keepAlive)) {
            query["KeepAlive"] = request.keepAlive;
        }
        if (!$dara.isNull(request.keepAliveToken)) {
            query["KeepAliveToken"] = request.keepAliveToken;
        }
        if (!$dara.isNull(request.newPassword)) {
            query["NewPassword"] = request.newPassword;
        }
        if (!$dara.isNull(request.officeSiteId)) {
            query["OfficeSiteId"] = request.officeSiteId;
        }
        if (!$dara.isNull(request.oldPassword)) {
            query["OldPassword"] = request.oldPassword;
        }
        if (!$dara.isNull(request.password)) {
            query["Password"] = request.password;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        if (!$dara.isNull(request.tokenCode)) {
            query["TokenCode"] = request.tokenCode;
        }
        if (!$dara.isNull(request.uuid)) {
            query["Uuid"] = request.uuid;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetLoginToken",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.GetLoginTokenResponse({}));
    }
    /**
     * Retrieves logon credentials.
     *
     * @param request - GetLoginTokenRequest
     * @returns GetLoginTokenResponse
     */
    async getLoginToken(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getLoginTokenWithOptions(request, runtime);
    }
    /**
     * 查询Agent需要上报的配置信息
     *
     * @param request - QueryEdsAgentReportConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryEdsAgentReportConfigResponse
     */
    async queryEdsAgentReportConfigWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.aliUid)) {
            query["AliUid"] = request.aliUid;
        }
        if (!$dara.isNull(request.desktopId)) {
            query["DesktopId"] = request.desktopId;
        }
        if (!$dara.isNull(request.ecsInstanceId)) {
            query["EcsInstanceId"] = request.ecsInstanceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "QueryEdsAgentReportConfig",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.QueryEdsAgentReportConfigResponse({}));
    }
    /**
     * 查询Agent需要上报的配置信息
     *
     * @param request - QueryEdsAgentReportConfigRequest
     * @returns QueryEdsAgentReportConfigResponse
     */
    async queryEdsAgentReportConfig(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.queryEdsAgentReportConfigWithOptions(request, runtime);
    }
    /**
     * You can restart one or more cloud desktops.
     *
     * @param request - RebootDesktopsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RebootDesktopsResponse
     */
    async rebootDesktopsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.clientOS)) {
            query["ClientOS"] = request.clientOS;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.clientVersion)) {
            query["ClientVersion"] = request.clientVersion;
        }
        if (!$dara.isNull(request.desktopId)) {
            query["DesktopId"] = request.desktopId;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.osUpdate)) {
            query["OsUpdate"] = request.osUpdate;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        if (!$dara.isNull(request.sessionToken)) {
            query["SessionToken"] = request.sessionToken;
        }
        if (!$dara.isNull(request.uuid)) {
            query["Uuid"] = request.uuid;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RebootDesktops",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.RebootDesktopsResponse({}));
    }
    /**
     * You can restart one or more cloud desktops.
     *
     * @param request - RebootDesktopsRequest
     * @returns RebootDesktopsResponse
     */
    async rebootDesktops(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.rebootDesktopsWithOptions(request, runtime);
    }
    /**
     * Refreshes the logon credential.
     *
     * @remarks
     * A logon credential (LoginToken) is valid for 8 hours. If the end user does not log off from the client within 8 hours, the client must refresh the logon credential.
     *
     * @param request - RefreshLoginTokenRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RefreshLoginTokenResponse
     */
    async refreshLoginTokenWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.directoryId)) {
            query["DirectoryId"] = request.directoryId;
        }
        if (!$dara.isNull(request.endUserId)) {
            query["EndUserId"] = request.endUserId;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.officeSiteId)) {
            query["OfficeSiteId"] = request.officeSiteId;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RefreshLoginToken",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.RefreshLoginTokenResponse({}));
    }
    /**
     * Refreshes the logon credential.
     *
     * @remarks
     * A logon credential (LoginToken) is valid for 8 hours. If the end user does not log off from the client within 8 hours, the client must refresh the logon credential.
     *
     * @param request - RefreshLoginTokenRequest
     * @returns RefreshLoginTokenResponse
     */
    async refreshLoginToken(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.refreshLoginTokenWithOptions(request, runtime);
    }
    /**
     * 上报edsAgent的信息
     *
     * @param request - ReportEdsAgentInfoRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ReportEdsAgentInfoResponse
     */
    async reportEdsAgentInfoWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.aliUid)) {
            query["AliUid"] = request.aliUid;
        }
        if (!$dara.isNull(request.desktopId)) {
            query["DesktopId"] = request.desktopId;
        }
        if (!$dara.isNull(request.ecsInstanceId)) {
            query["EcsInstanceId"] = request.ecsInstanceId;
        }
        if (!$dara.isNull(request.edsAgentInfo)) {
            query["EdsAgentInfo"] = request.edsAgentInfo;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ReportEdsAgentInfo",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.ReportEdsAgentInfoResponse({}));
    }
    /**
     * 上报edsAgent的信息
     *
     * @param request - ReportEdsAgentInfoRequest
     * @returns ReportEdsAgentInfoResponse
     */
    async reportEdsAgentInfo(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.reportEdsAgentInfoWithOptions(request, runtime);
    }
    /**
     * Reports the session status.
     *
     * @param request - ReportSessionStatusRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ReportSessionStatusResponse
     */
    async reportSessionStatusWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.endUserId)) {
            query["EndUserId"] = request.endUserId;
        }
        if (!$dara.isNull(request.instanceId)) {
            query["InstanceId"] = request.instanceId;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.sessionChangeTime)) {
            query["SessionChangeTime"] = request.sessionChangeTime;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        if (!$dara.isNull(request.sessionStatus)) {
            query["SessionStatus"] = request.sessionStatus;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ReportSessionStatus",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.ReportSessionStatusResponse({}));
    }
    /**
     * Reports the session status.
     *
     * @param request - ReportSessionStatusRequest
     * @returns ReportSessionStatusResponse
     */
    async reportSessionStatus(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.reportSessionStatusWithOptions(request, runtime);
    }
    /**
     * Resets a user password.
     *
     * @param request - ResetPasswordRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ResetPasswordResponse
     */
    async resetPasswordWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.email)) {
            query["Email"] = request.email;
        }
        if (!$dara.isNull(request.endUserId)) {
            query["EndUserId"] = request.endUserId;
        }
        if (!$dara.isNull(request.officeSiteId)) {
            query["OfficeSiteId"] = request.officeSiteId;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.phone)) {
            query["phone"] = request.phone;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ResetPassword",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.ResetPasswordResponse({}));
    }
    /**
     * Resets a user password.
     *
     * @param request - ResetPasswordRequest
     * @returns ResetPasswordResponse
     */
    async resetPassword(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.resetPasswordWithOptions(request, runtime);
    }
    /**
     * Restores the disk data corresponding to a snapshot.
     *
     * @param request - ResetSnapshotRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ResetSnapshotResponse
     */
    async resetSnapshotWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.desktopId)) {
            query["DesktopId"] = request.desktopId;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        if (!$dara.isNull(request.snapshotId)) {
            query["SnapshotId"] = request.snapshotId;
        }
        if (!$dara.isNull(request.stopDesktop)) {
            query["StopDesktop"] = request.stopDesktop;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ResetSnapshot",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.ResetSnapshotResponse({}));
    }
    /**
     * Restores the disk data corresponding to a snapshot.
     *
     * @param request - ResetSnapshotRequest
     * @returns ResetSnapshotResponse
     */
    async resetSnapshot(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.resetSnapshotWithOptions(request, runtime);
    }
    /**
     * Sends a logon verification code.
     *
     * @param request - SendTokenCodeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SendTokenCodeResponse
     */
    async sendTokenCodeWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.clientOS)) {
            query["ClientOS"] = request.clientOS;
        }
        if (!$dara.isNull(request.clientVersion)) {
            query["ClientVersion"] = request.clientVersion;
        }
        if (!$dara.isNull(request.endUserId)) {
            query["EndUserId"] = request.endUserId;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.officeSiteId)) {
            query["OfficeSiteId"] = request.officeSiteId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        if (!$dara.isNull(request.tokenCode)) {
            query["TokenCode"] = request.tokenCode;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SendTokenCode",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.SendTokenCodeResponse({}));
    }
    /**
     * Sends a logon verification code.
     *
     * @param request - SendTokenCodeRequest
     * @returns SendTokenCodeResponse
     */
    async sendTokenCode(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.sendTokenCodeWithOptions(request, runtime);
    }
    /**
     * Sets a fingerprint template.
     *
     * @param request - SetFingerPrintTemplateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetFingerPrintTemplateResponse
     */
    async setFingerPrintTemplateWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.description)) {
            query["Description"] = request.description;
        }
        if (!$dara.isNull(request.encryptedFingerPrintTemplate)) {
            query["EncryptedFingerPrintTemplate"] = request.encryptedFingerPrintTemplate;
        }
        if (!$dara.isNull(request.encryptedKey)) {
            query["EncryptedKey"] = request.encryptedKey;
        }
        if (!$dara.isNull(request.fingerPrintTemplate)) {
            query["FingerPrintTemplate"] = request.fingerPrintTemplate;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.password)) {
            query["Password"] = request.password;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SetFingerPrintTemplate",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.SetFingerPrintTemplateResponse({}));
    }
    /**
     * Sets a fingerprint template.
     *
     * @param request - SetFingerPrintTemplateRequest
     * @returns SetFingerPrintTemplateResponse
     */
    async setFingerPrintTemplate(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.setFingerPrintTemplateWithOptions(request, runtime);
    }
    /**
     * Sets the description of a fingerprint template.
     *
     * @param request - SetFingerPrintTemplateDescriptionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetFingerPrintTemplateDescriptionResponse
     */
    async setFingerPrintTemplateDescriptionWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.description)) {
            query["Description"] = request.description;
        }
        if (!$dara.isNull(request.index)) {
            query["Index"] = request.index;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SetFingerPrintTemplateDescription",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.SetFingerPrintTemplateDescriptionResponse({}));
    }
    /**
     * Sets the description of a fingerprint template.
     *
     * @param request - SetFingerPrintTemplateDescriptionRequest
     * @returns SetFingerPrintTemplateDescriptionResponse
     */
    async setFingerPrintTemplateDescription(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.setFingerPrintTemplateDescriptionWithOptions(request, runtime);
    }
    /**
     * Start cloud computers.
     *
     * @remarks
     * The cloud computers that you want to start must be in the Stopped state. After you call this operation, the cloud computers enter the Running state.
     *
     * @param request - StartDesktopsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns StartDesktopsResponse
     */
    async startDesktopsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.clientOS)) {
            query["ClientOS"] = request.clientOS;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.clientVersion)) {
            query["ClientVersion"] = request.clientVersion;
        }
        if (!$dara.isNull(request.desktopId)) {
            query["DesktopId"] = request.desktopId;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        if (!$dara.isNull(request.uuid)) {
            query["Uuid"] = request.uuid;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "StartDesktops",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.StartDesktopsResponse({}));
    }
    /**
     * Start cloud computers.
     *
     * @remarks
     * The cloud computers that you want to start must be in the Stopped state. After you call this operation, the cloud computers enter the Running state.
     *
     * @param request - StartDesktopsRequest
     * @returns StartDesktopsResponse
     */
    async startDesktops(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.startDesktopsWithOptions(request, runtime);
    }
    /**
     * @param request - StartRecordContentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns StartRecordContentResponse
     */
    async startRecordContentWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.clientOS)) {
            query["ClientOS"] = request.clientOS;
        }
        if (!$dara.isNull(request.clientVersion)) {
            query["ClientVersion"] = request.clientVersion;
        }
        if (!$dara.isNull(request.desktopId)) {
            query["DesktopId"] = request.desktopId;
        }
        if (!$dara.isNull(request.filePath)) {
            query["FilePath"] = request.filePath;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "StartRecordContent",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.StartRecordContentResponse({}));
    }
    /**
     * @param request - StartRecordContentRequest
     * @returns StartRecordContentResponse
     */
    async startRecordContent(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.startRecordContentWithOptions(request, runtime);
    }
    /**
     * Stops one or more cloud desktops.
     *
     * @remarks
     * The cloud desktop must be in the Running state. After the API operation is called, the state of the cloud desktop changes to Stopped.
     *
     * @param request - StopDesktopsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns StopDesktopsResponse
     */
    async stopDesktopsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.clientOS)) {
            query["ClientOS"] = request.clientOS;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.clientVersion)) {
            query["ClientVersion"] = request.clientVersion;
        }
        if (!$dara.isNull(request.desktopId)) {
            query["DesktopId"] = request.desktopId;
        }
        if (!$dara.isNull(request.forceStop)) {
            query["ForceStop"] = request.forceStop;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.osUpdate)) {
            query["OsUpdate"] = request.osUpdate;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        if (!$dara.isNull(request.sessionToken)) {
            query["SessionToken"] = request.sessionToken;
        }
        if (!$dara.isNull(request.uuid)) {
            query["Uuid"] = request.uuid;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "StopDesktops",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.StopDesktopsResponse({}));
    }
    /**
     * Stops one or more cloud desktops.
     *
     * @remarks
     * The cloud desktop must be in the Running state. After the API operation is called, the state of the cloud desktop changes to Stopped.
     *
     * @param request - StopDesktopsRequest
     * @returns StopDesktopsResponse
     */
    async stopDesktops(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.stopDesktopsWithOptions(request, runtime);
    }
    /**
     * @param request - StopRecordContentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns StopRecordContentResponse
     */
    async stopRecordContentWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.clientOS)) {
            query["ClientOS"] = request.clientOS;
        }
        if (!$dara.isNull(request.clientVersion)) {
            query["ClientVersion"] = request.clientVersion;
        }
        if (!$dara.isNull(request.desktopId)) {
            query["DesktopId"] = request.desktopId;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "StopRecordContent",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.StopRecordContentResponse({}));
    }
    /**
     * @param request - StopRecordContentRequest
     * @returns StopRecordContentResponse
     */
    async stopRecordContent(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.stopRecordContentWithOptions(request, runtime);
    }
    /**
     * Disassociates a user from a cloud desktop.
     *
     * @param request - UnbindUserDesktopRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UnbindUserDesktopResponse
     */
    async unbindUserDesktopWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.clientType)) {
            query["ClientType"] = request.clientType;
        }
        if (!$dara.isNull(request.force)) {
            query["Force"] = request.force;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        if (!$dara.isNull(request.userDesktopId)) {
            query["UserDesktopId"] = request.userDesktopId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UnbindUserDesktop",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.UnbindUserDesktopResponse({}));
    }
    /**
     * Disassociates a user from a cloud desktop.
     *
     * @param request - UnbindUserDesktopRequest
     * @returns UnbindUserDesktopResponse
     */
    async unbindUserDesktop(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.unbindUserDesktopWithOptions(request, runtime);
    }
    /**
     * Verifies the credential used to unlock a local session on the client.
     *
     * @param request - VerifyCredentialRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns VerifyCredentialResponse
     */
    async verifyCredentialWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.credential)) {
            query["Credential"] = request.credential;
        }
        if (!$dara.isNull(request.credentialType)) {
            query["CredentialType"] = request.credentialType;
        }
        if (!$dara.isNull(request.encryptedKey)) {
            query["EncryptedKey"] = request.encryptedKey;
        }
        if (!$dara.isNull(request.loginToken)) {
            query["LoginToken"] = request.loginToken;
        }
        if (!$dara.isNull(request.officeSiteId)) {
            query["OfficeSiteId"] = request.officeSiteId;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["SessionId"] = request.sessionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "VerifyCredential",
            version: "2020-10-02",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "Anonymous",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.VerifyCredentialResponse({}));
    }
    /**
     * Verifies the credential used to unlock a local session on the client.
     *
     * @param request - VerifyCredentialRequest
     * @returns VerifyCredentialResponse
     */
    async verifyCredential(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.verifyCredentialWithOptions(request, runtime);
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map