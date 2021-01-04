// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class RetrieveFaceRequest extends $tea.Model {
  projectId?: string;
  face64String?: string;
  faceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      face64String: 'Face64String',
      faceUrl: 'FaceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      face64String: 'string',
      faceUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveFaceResponseBody extends $tea.Model {
  requestId?: string;
  data?: RetrieveFaceResponseBodyData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RetrieveFaceResponseBodyData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RetrieveFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RetrieveFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadIdentifyRecordRequest extends $tea.Model {
  userId?: string;
  userName?: string;
  projectId?: string;
  iotId?: string;
  identifyingImageBase64?: string;
  identifyingTime?: number;
  identifyingImageUrl?: string;
  deviceName?: string;
  productKey?: string;
  deviceSecret?: string;
  ext?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userName: 'UserName',
      projectId: 'ProjectId',
      iotId: 'IotId',
      identifyingImageBase64: 'IdentifyingImageBase64',
      identifyingTime: 'IdentifyingTime',
      identifyingImageUrl: 'IdentifyingImageUrl',
      deviceName: 'DeviceName',
      productKey: 'ProductKey',
      deviceSecret: 'DeviceSecret',
      ext: 'Ext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
      projectId: 'string',
      iotId: 'string',
      identifyingImageBase64: 'string',
      identifyingTime: 'number',
      identifyingImageUrl: 'string',
      deviceName: 'string',
      productKey: 'string',
      deviceSecret: 'string',
      ext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadIdentifyRecordResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadIdentifyRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadIdentifyRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadIdentifyRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveFaceResponseBodyDataData extends $tea.Model {
  userId?: number;
  userName?: string;
  rate?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userName: 'UserName',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      userName: 'string',
      rate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveFaceResponseBodyData extends $tea.Model {
  data?: RetrieveFaceResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': RetrieveFaceResponseBodyDataData },
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
    this._endpoint = this.getEndpoint("cloudauth-console", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async retrieveFaceWithOptions(request: RetrieveFaceRequest, runtime: $Util.RuntimeOptions): Promise<RetrieveFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RetrieveFaceResponse>(await this.doRPCRequest("RetrieveFace", "2019-04-03", "HTTPS", "POST", "AK", "json", req, runtime), new RetrieveFaceResponse({}));
  }

  async retrieveFace(request: RetrieveFaceRequest): Promise<RetrieveFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retrieveFaceWithOptions(request, runtime);
  }

  async uploadIdentifyRecordWithOptions(request: UploadIdentifyRecordRequest, runtime: $Util.RuntimeOptions): Promise<UploadIdentifyRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadIdentifyRecordResponse>(await this.doRPCRequest("UploadIdentifyRecord", "2019-04-03", "HTTPS", "POST", "AK", "json", req, runtime), new UploadIdentifyRecordResponse({}));
  }

  async uploadIdentifyRecord(request: UploadIdentifyRecordRequest): Promise<UploadIdentifyRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadIdentifyRecordWithOptions(request, runtime);
  }

}
