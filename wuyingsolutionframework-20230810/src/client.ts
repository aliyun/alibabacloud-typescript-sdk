// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("wuyingsolutionframework", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 发送运维消息
   * 
   * @param request - SendOpsMessageToTerminalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendOpsMessageToTerminalResponse
   */
  async sendOpsMessageToTerminalWithOptions(request: $_model.SendOpsMessageToTerminalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendOpsMessageToTerminalResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.messageBody)) {
      query["MessageBody"] = request.messageBody;
    }

    if (!$dara.isNull(request.officeRegionId)) {
      query["OfficeRegionId"] = request.officeRegionId;
    }

    if (!$dara.isNull(request.opsAction)) {
      query["OpsAction"] = request.opsAction;
    }

    if (!$dara.isNull(request.serialNo)) {
      query["SerialNo"] = request.serialNo;
    }

    if (!$dara.isNull(request.waitForAck)) {
      query["WaitForAck"] = request.waitForAck;
    }

    if (!$dara.isNull(request.waitForMsg)) {
      query["WaitForMsg"] = request.waitForMsg;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendOpsMessageToTerminal",
      version: "2023-08-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendOpsMessageToTerminalResponse>(await this.callApi(params, req, runtime), new $_model.SendOpsMessageToTerminalResponse({}));
  }

  /**
   * 发送运维消息
   * 
   * @param request - SendOpsMessageToTerminalRequest
   * @returns SendOpsMessageToTerminalResponse
   */
  async sendOpsMessageToTerminal(request: $_model.SendOpsMessageToTerminalRequest): Promise<$_model.SendOpsMessageToTerminalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendOpsMessageToTerminalWithOptions(request, runtime);
  }

}
