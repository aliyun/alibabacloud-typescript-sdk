// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DetectIPCPedestrianOptimizedRequest extends $tea.Model {
  imageData?: Buffer;
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      imageData: 'imageData',
      width: 'width',
      height: 'height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'Buffer',
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCPedestrianOptimizedResponseBody extends $tea.Model {
  data?: DetectIPCPedestrianOptimizedResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectIPCPedestrianOptimizedResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCPedestrianOptimizedResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectIPCPedestrianOptimizedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectIPCPedestrianOptimizedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteServerSideVerificationRequest extends $tea.Model {
  certificateName?: string;
  certificateNumber?: string;
  facialPictureData?: Buffer;
  facialPictureUrl?: string;
  sceneType?: string;
  static names(): { [key: string]: string } {
    return {
      certificateName: 'certificateName',
      certificateNumber: 'certificateNumber',
      facialPictureData: 'facialPictureData',
      facialPictureUrl: 'facialPictureUrl',
      sceneType: 'sceneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateName: 'string',
      certificateNumber: 'string',
      facialPictureData: 'Buffer',
      facialPictureUrl: 'string',
      sceneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteServerSideVerificationResponseBody extends $tea.Model {
  requestId?: string;
  data?: ExecuteServerSideVerificationResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ExecuteServerSideVerificationResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteServerSideVerificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteServerSideVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteServerSideVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCPedestrianOptimizedResponseBodyDataImageInfoListElements extends $tea.Model {
  boxes?: number[];
  score?: number;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': 'number' },
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCPedestrianOptimizedResponseBodyDataImageInfoList extends $tea.Model {
  elements?: DetectIPCPedestrianOptimizedResponseBodyDataImageInfoListElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectIPCPedestrianOptimizedResponseBodyDataImageInfoListElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCPedestrianOptimizedResponseBodyData extends $tea.Model {
  imageInfoList?: DetectIPCPedestrianOptimizedResponseBodyDataImageInfoList[];
  static names(): { [key: string]: string } {
    return {
      imageInfoList: 'ImageInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageInfoList: { 'type': 'array', 'itemType': DetectIPCPedestrianOptimizedResponseBodyDataImageInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteServerSideVerificationResponseBodyData extends $tea.Model {
  pass?: boolean;
  verificationToken?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      pass: 'Pass',
      verificationToken: 'VerificationToken',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pass: 'boolean',
      verificationToken: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("facebody", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
   * 行人检测快速版
   */
  async detectIPCPedestrianOptimized(request: DetectIPCPedestrianOptimizedRequest): Promise<DetectIPCPedestrianOptimizedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.detectIPCPedestrianOptimizedWithOptions(request, headers, runtime);
  }

  async detectIPCPedestrianOptimizedWithOptions(request: DetectIPCPedestrianOptimizedRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DetectIPCPedestrianOptimizedResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageData)) {
      body["imageData"] = request.imageData;
    }

    if (!Util.isUnset(request.width)) {
      body["width"] = request.width;
    }

    if (!Util.isUnset(request.height)) {
      body["height"] = request.height;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetectIPCPedestrianOptimized",
      version: "2020-09-10",
      protocol: "HTTPS",
      pathname: `/viapi/k8s/facebody/detect-ipc-pedestrian-optimized`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectIPCPedestrianOptimizedResponse>(await this.callApi(params, req, runtime), new DetectIPCPedestrianOptimizedResponse({}));
  }

  async executeServerSideVerification(request: ExecuteServerSideVerificationRequest): Promise<ExecuteServerSideVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeServerSideVerificationWithOptions(request, headers, runtime);
  }

  async executeServerSideVerificationWithOptions(request: ExecuteServerSideVerificationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ExecuteServerSideVerificationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.certificateName)) {
      body["certificateName"] = request.certificateName;
    }

    if (!Util.isUnset(request.certificateNumber)) {
      body["certificateNumber"] = request.certificateNumber;
    }

    if (!Util.isUnset(request.facialPictureData)) {
      body["facialPictureData"] = request.facialPictureData;
    }

    if (!Util.isUnset(request.facialPictureUrl)) {
      body["facialPictureUrl"] = request.facialPictureUrl;
    }

    if (!Util.isUnset(request.sceneType)) {
      body["sceneType"] = request.sceneType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteServerSideVerification",
      version: "2020-09-10",
      protocol: "HTTPS",
      pathname: `/viapi/thirdparty/realperson/execServerSideVerification`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteServerSideVerificationResponse>(await this.callApi(params, req, runtime), new ExecuteServerSideVerificationResponse({}));
  }

}
