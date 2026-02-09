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
        this._endpointRule = "central";
        this._endpointMap = {
            'ap-northeast-1': "workorder.ap-northeast-1.aliyuncs.com",
            'ap-southeast-1': "workorder.ap-southeast-1.aliyuncs.com",
        };
        this.checkConfig(config);
        this._endpoint = this.getEndpoint("workorder", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
     * @param request - GetTicketTemplateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetTicketTemplateResponse
     */
    async getTicketTemplateWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.categoryId)) {
            query["CategoryId"] = request.categoryId;
        }
        if (!$dara.isNull(request.cna)) {
            query["Cna"] = request.cna;
        }
        if (!$dara.isNull(request.distributionChannel)) {
            query["DistributionChannel"] = request.distributionChannel;
        }
        if (!$dara.isNull(request.referrer)) {
            query["Referrer"] = request.referrer;
        }
        if (!$dara.isNull(request.subDistributionChannel)) {
            query["SubDistributionChannel"] = request.subDistributionChannel;
        }
        if (!$dara.isNull(request.XGatewayExtendInfo)) {
            query["XGatewayExtendInfo"] = request.XGatewayExtendInfo;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetTicketTemplate",
            version: "2020-12-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetTicketTemplateResponse({}));
    }
    /**
     * @param request - GetTicketTemplateRequest
     * @returns GetTicketTemplateResponse
     */
    async getTicketTemplate(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getTicketTemplateWithOptions(request, runtime);
    }
    /**
     * 是否首次访问BBS工单
     *
     * @param request - IsFirstBbsTicketRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns IsFirstBbsTicketResponse
     */
    async isFirstBbsTicketWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.cna)) {
            query["Cna"] = request.cna;
        }
        if (!$dara.isNull(request.distributionChannel)) {
            query["DistributionChannel"] = request.distributionChannel;
        }
        if (!$dara.isNull(request.referrer)) {
            query["Referrer"] = request.referrer;
        }
        if (!$dara.isNull(request.subDistributionChannel)) {
            query["SubDistributionChannel"] = request.subDistributionChannel;
        }
        if (!$dara.isNull(request.XGatewayExtendInfo)) {
            query["XGatewayExtendInfo"] = request.XGatewayExtendInfo;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "IsFirstBbsTicket",
            version: "2020-12-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.IsFirstBbsTicketResponse({}));
    }
    /**
     * 是否首次访问BBS工单
     *
     * @param request - IsFirstBbsTicketRequest
     * @returns IsFirstBbsTicketResponse
     */
    async isFirstBbsTicket(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.isFirstBbsTicketWithOptions(request, runtime);
    }
    /**
     * @param request - SuggestCategoryRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SuggestCategoryResponse
     */
    async suggestCategoryWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.cna)) {
            query["Cna"] = request.cna;
        }
        if (!$dara.isNull(request.content)) {
            query["Content"] = request.content;
        }
        if (!$dara.isNull(request.distributionChannel)) {
            query["DistributionChannel"] = request.distributionChannel;
        }
        if (!$dara.isNull(request.referrer)) {
            query["Referrer"] = request.referrer;
        }
        if (!$dara.isNull(request.subDistributionChannel)) {
            query["SubDistributionChannel"] = request.subDistributionChannel;
        }
        if (!$dara.isNull(request.ticketId)) {
            query["TicketId"] = request.ticketId;
        }
        if (!$dara.isNull(request.topN)) {
            query["TopN"] = request.topN;
        }
        if (!$dara.isNull(request.useHotSuggestCatchAll)) {
            query["UseHotSuggestCatchAll"] = request.useHotSuggestCatchAll;
        }
        if (!$dara.isNull(request.XGatewayExtendInfo)) {
            query["XGatewayExtendInfo"] = request.XGatewayExtendInfo;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SuggestCategory",
            version: "2020-12-10",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SuggestCategoryResponse({}));
    }
    /**
     * @param request - SuggestCategoryRequest
     * @returns SuggestCategoryResponse
     */
    async suggestCategory(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.suggestCategoryWithOptions(request, runtime);
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map