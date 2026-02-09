import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { $OpenApiUtil } from '@alicloud/openapi-core';
import * as $_model from './models/model';
export * from './models/model';
export default class Client extends OpenApi {
    constructor(config: $OpenApiUtil.Config);
    getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {
        [key: string]: string;
    }, endpoint: string): string;
    /**
     * @param request - GetTicketTemplateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetTicketTemplateResponse
     */
    getTicketTemplateWithOptions(request: $_model.GetTicketTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTicketTemplateResponse>;
    /**
     * @param request - GetTicketTemplateRequest
     * @returns GetTicketTemplateResponse
     */
    getTicketTemplate(request: $_model.GetTicketTemplateRequest): Promise<$_model.GetTicketTemplateResponse>;
    /**
     * 是否首次访问BBS工单
     *
     * @param request - IsFirstBbsTicketRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns IsFirstBbsTicketResponse
     */
    isFirstBbsTicketWithOptions(request: $_model.IsFirstBbsTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.IsFirstBbsTicketResponse>;
    /**
     * 是否首次访问BBS工单
     *
     * @param request - IsFirstBbsTicketRequest
     * @returns IsFirstBbsTicketResponse
     */
    isFirstBbsTicket(request: $_model.IsFirstBbsTicketRequest): Promise<$_model.IsFirstBbsTicketResponse>;
    /**
     * @param request - SuggestCategoryRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SuggestCategoryResponse
     */
    suggestCategoryWithOptions(request: $_model.SuggestCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuggestCategoryResponse>;
    /**
     * @param request - SuggestCategoryRequest
     * @returns SuggestCategoryResponse
     */
    suggestCategory(request: $_model.SuggestCategoryRequest): Promise<$_model.SuggestCategoryResponse>;
}
