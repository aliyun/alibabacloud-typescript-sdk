// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import Array from '@alicloud/darabonba-array';
import Number from '@darabonba/number';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class ScanImageRequest extends $tea.Model {
  scene?: string[];
  task?: ScanImageRequestTask[];
  static names(): { [key: string]: string } {
    return {
      scene: 'Scene',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: { 'type': 'array', 'itemType': 'string' },
      task: { 'type': 'array', 'itemType': ScanImageRequestTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageAdvanceRequest extends $tea.Model {
  scene?: string[];
  task?: ScanImageAdvanceRequestTask[];
  static names(): { [key: string]: string } {
    return {
      scene: 'Scene',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: { 'type': 'array', 'itemType': 'string' },
      task: { 'type': 'array', 'itemType': ScanImageAdvanceRequestTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBody extends $tea.Model {
  data?: ScanImageResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ScanImageResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ScanImageResponseBody;
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
      body: ScanImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextRequest extends $tea.Model {
  labels?: ScanTextRequestLabels[];
  tasks?: ScanTextRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': ScanTextRequestLabels },
      tasks: { 'type': 'array', 'itemType': ScanTextRequestTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponseBody extends $tea.Model {
  data?: ScanTextResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ScanTextResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ScanTextResponseBody;
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
      body: ScanTextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageRequestTask extends $tea.Model {
  dataId?: string;
  imageTimeMillisecond?: number;
  imageURL?: string;
  interval?: number;
  maxFrames?: number;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      imageTimeMillisecond: 'ImageTimeMillisecond',
      imageURL: 'ImageURL',
      interval: 'Interval',
      maxFrames: 'MaxFrames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      imageTimeMillisecond: 'number',
      imageURL: 'string',
      interval: 'number',
      maxFrames: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageAdvanceRequestTask extends $tea.Model {
  dataId?: string;
  imageTimeMillisecond?: number;
  imageURLObject?: Readable;
  interval?: number;
  maxFrames?: number;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      imageTimeMillisecond: 'ImageTimeMillisecond',
      imageURLObject: 'ImageURL',
      interval: 'Interval',
      maxFrames: 'MaxFrames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      imageTimeMillisecond: 'number',
      imageURLObject: 'Readable',
      interval: 'number',
      maxFrames: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyDataResultsSubResultsFrames extends $tea.Model {
  rate?: number;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      rate: 'Rate',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rate: 'number',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyDataResultsSubResultsHintWordsInfoList extends $tea.Model {
  context?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyDataResultsSubResultsLogoDataList extends $tea.Model {
  height?: number;
  name?: string;
  type?: string;
  width?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      name: 'Name',
      type: 'Type',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      name: 'string',
      type: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyDataResultsSubResultsProgramCodeDataList extends $tea.Model {
  height?: number;
  width?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyDataResultsSubResultsSfaceDataListFaces extends $tea.Model {
  id?: string;
  name?: string;
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      rate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyDataResultsSubResultsSfaceDataList extends $tea.Model {
  faces?: ScanImageResponseBodyDataResultsSubResultsSfaceDataListFaces[];
  height?: number;
  width?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      faces: 'Faces',
      height: 'Height',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faces: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResultsSfaceDataListFaces },
      height: 'number',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyDataResultsSubResults extends $tea.Model {
  frames?: ScanImageResponseBodyDataResultsSubResultsFrames[];
  hintWordsInfoList?: ScanImageResponseBodyDataResultsSubResultsHintWordsInfoList[];
  label?: string;
  logoDataList?: ScanImageResponseBodyDataResultsSubResultsLogoDataList[];
  OCRDataList?: string[];
  programCodeDataList?: ScanImageResponseBodyDataResultsSubResultsProgramCodeDataList[];
  rate?: number;
  scene?: string;
  sfaceDataList?: ScanImageResponseBodyDataResultsSubResultsSfaceDataList[];
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      frames: 'Frames',
      hintWordsInfoList: 'HintWordsInfoList',
      label: 'Label',
      logoDataList: 'LogoDataList',
      OCRDataList: 'OCRDataList',
      programCodeDataList: 'ProgramCodeDataList',
      rate: 'Rate',
      scene: 'Scene',
      sfaceDataList: 'SfaceDataList',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frames: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResultsFrames },
      hintWordsInfoList: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResultsHintWordsInfoList },
      label: 'string',
      logoDataList: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResultsLogoDataList },
      OCRDataList: { 'type': 'array', 'itemType': 'string' },
      programCodeDataList: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResultsProgramCodeDataList },
      rate: 'number',
      scene: 'string',
      sfaceDataList: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResultsSfaceDataList },
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyDataResults extends $tea.Model {
  dataId?: string;
  imageURL?: string;
  subResults?: ScanImageResponseBodyDataResultsSubResults[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      imageURL: 'ImageURL',
      subResults: 'SubResults',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      imageURL: 'string',
      subResults: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResults },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyData extends $tea.Model {
  results?: ScanImageResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextRequestLabels extends $tea.Model {
  label?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextRequestTasks extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponseBodyDataElementsResultsDetailsContexts extends $tea.Model {
  context?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponseBodyDataElementsResultsDetails extends $tea.Model {
  contexts?: ScanTextResponseBodyDataElementsResultsDetailsContexts[];
  label?: string;
  static names(): { [key: string]: string } {
    return {
      contexts: 'Contexts',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contexts: { 'type': 'array', 'itemType': ScanTextResponseBodyDataElementsResultsDetailsContexts },
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponseBodyDataElementsResults extends $tea.Model {
  details?: ScanTextResponseBodyDataElementsResultsDetails[];
  label?: string;
  rate?: number;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      label: 'Label',
      rate: 'Rate',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': ScanTextResponseBodyDataElementsResultsDetails },
      label: 'string',
      rate: 'number',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponseBodyDataElements extends $tea.Model {
  results?: ScanTextResponseBodyDataElementsResults[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      results: 'Results',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': ScanTextResponseBodyDataElementsResults },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponseBodyData extends $tea.Model {
  elements?: ScanTextResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': ScanTextResponseBodyDataElements },
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
    this._endpoint = this.getEndpoint("imageaudit", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async scanImageWithOptions(request: ScanImageRequest, runtime: $Util.RuntimeOptions): Promise<ScanImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.task)) {
      body["Task"] = request.task;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ScanImage",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ScanImageResponse>(await this.callApi(params, req, runtime), new ScanImageResponse({}));
  }

  async scanImage(request: ScanImageRequest): Promise<ScanImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scanImageWithOptions(request, runtime);
  }

  async scanImageAdvance(request: ScanImageAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ScanImageResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageaudit",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let scanImageReq = new ScanImageRequest({ });
    OpenApiUtil.convert(request, scanImageReq);
    if (!Util.isUnset(request.task)) {
      let i : number = 0;

      for (let item0 of request.task) {
        if (!Util.isUnset(item0.imageURLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.imageURLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : ScanImageRequestTask = scanImageReq.task[i];
          tmp.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i = Number.ltoi(Number.add(Number.itol(i), Number.itol(1)));
        }

      }
    }

    let scanImageResp = await this.scanImageWithOptions(scanImageReq, runtime);
    return scanImageResp;
  }

  async scanTextWithOptions(request: ScanTextRequest, runtime: $Util.RuntimeOptions): Promise<ScanTextResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.tasks)) {
      body["Tasks"] = request.tasks;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ScanText",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ScanTextResponse>(await this.callApi(params, req, runtime), new ScanTextResponse({}));
  }

  async scanText(request: ScanTextRequest): Promise<ScanTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scanTextWithOptions(request, runtime);
  }

}
