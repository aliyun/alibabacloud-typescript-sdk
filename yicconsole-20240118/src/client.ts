// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class LxPopCmd extends $tea.Model {
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BillingProcessMessageRequest extends $tea.Model {
  body?: LxPopCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: LxPopCmd,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BillingProcessMessageResponseBody extends $tea.Model {
  message?: string;
  synchro?: boolean;
  code?: string;
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      synchro: 'Synchro',
      code: 'code',
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      synchro: 'boolean',
      code: 'string',
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BillingProcessMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BillingProcessMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BillingProcessMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckPayOrderRequest extends $tea.Model {
  body?: LxPopCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: LxPopCmd,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckPayOrderResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  synchro?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      synchro: 'synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      synchro: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckPayOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckPayOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckPayOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRefundRequest extends $tea.Model {
  body?: LxPopCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: LxPopCmd,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRefundResponseBody extends $tea.Model {
  message?: string;
  synchro?: boolean;
  code?: string;
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      synchro: 'Synchro',
      code: 'code',
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      synchro: 'boolean',
      code: 'string',
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRefundResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckRefundResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckRefundResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PayOrderRequest extends $tea.Model {
  body?: LxPopCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: LxPopCmd,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PayOrderResponseBody extends $tea.Model {
  message?: string;
  synchro?: boolean;
  code?: string;
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      synchro: 'Synchro',
      code: 'code',
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      synchro: 'boolean',
      code: 'string',
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PayOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PayOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PayOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrepaidCeaseRequest extends $tea.Model {
  body?: LxPopCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: LxPopCmd,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrepaidCeaseResponseBody extends $tea.Model {
  message?: string;
  synchro?: boolean;
  code?: string;
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      synchro: 'Synchro',
      code: 'code',
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      synchro: 'boolean',
      code: 'string',
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrepaidCeaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PrepaidCeaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PrepaidCeaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundRequest extends $tea.Model {
  body?: LxPopCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: LxPopCmd,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundResponseBody extends $tea.Model {
  message?: string;
  synchro?: boolean;
  code?: string;
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      synchro: 'Synchro',
      code: 'code',
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      synchro: 'boolean',
      code: 'string',
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefundResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefundResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("yicconsole", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async billingProcessMessageWithOptions(request: BillingProcessMessageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BillingProcessMessageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "BillingProcessMessage",
      version: "2024-01-18",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/v1/billing/commands/lifecycle`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BillingProcessMessageResponse>(await this.callApi(params, req, runtime), new BillingProcessMessageResponse({}));
  }

  async billingProcessMessage(request: BillingProcessMessageRequest): Promise<BillingProcessMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.billingProcessMessageWithOptions(request, headers, runtime);
  }

  async checkPayOrderWithOptions(request: CheckPayOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CheckPayOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CheckPayOrder",
      version: "2024-01-18",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/v1/billing/commands/verify`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CheckPayOrderResponse>(await this.callApi(params, req, runtime), new CheckPayOrderResponse({}));
  }

  async checkPayOrder(request: CheckPayOrderRequest): Promise<CheckPayOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkPayOrderWithOptions(request, headers, runtime);
  }

  async checkRefundWithOptions(request: CheckRefundRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CheckRefundResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CheckRefund",
      version: "2024-01-18",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/v1/billing/commands/check-refund`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CheckRefundResponse>(await this.callApi(params, req, runtime), new CheckRefundResponse({}));
  }

  async checkRefund(request: CheckRefundRequest): Promise<CheckRefundResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkRefundWithOptions(request, headers, runtime);
  }

  async payOrderWithOptions(request: PayOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PayOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "PayOrder",
      version: "2024-01-18",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/v1/billing/commands/pay`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PayOrderResponse>(await this.callApi(params, req, runtime), new PayOrderResponse({}));
  }

  async payOrder(request: PayOrderRequest): Promise<PayOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.payOrderWithOptions(request, headers, runtime);
  }

  async prepaidCeaseWithOptions(request: PrepaidCeaseRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PrepaidCeaseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "PrepaidCease",
      version: "2024-01-18",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/v1/billing/commands/prepaid-cease`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PrepaidCeaseResponse>(await this.callApi(params, req, runtime), new PrepaidCeaseResponse({}));
  }

  async prepaidCease(request: PrepaidCeaseRequest): Promise<PrepaidCeaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.prepaidCeaseWithOptions(request, headers, runtime);
  }

  async refundWithOptions(request: RefundRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RefundResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "Refund",
      version: "2024-01-18",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/v1/billing/commands/refund`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RefundResponse>(await this.callApi(params, req, runtime), new RefundResponse({}));
  }

  async refund(request: RefundRequest): Promise<RefundResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.refundWithOptions(request, headers, runtime);
  }

}
