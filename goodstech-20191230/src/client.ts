// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import RPC, * as $RPC from '@alicloud/rpc-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class ClassifyCommodityRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyCommodityAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyCommodityResponseBody extends $tea.Model {
  requestId?: string;
  data?: ClassifyCommodityResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ClassifyCommodityResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyCommodityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ClassifyCommodityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ClassifyCommodityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFurnitureAttributeRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFurnitureAttributeAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFurnitureAttributeResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeFurnitureAttributeResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeFurnitureAttributeResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFurnitureAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeFurnitureAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeFurnitureAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFurnitureSpuRequest extends $tea.Model {
  imageURL?: string;
  XLength?: number;
  YLength?: number;
  ZLength?: number;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      XLength: 'XLength',
      YLength: 'YLength',
      ZLength: 'ZLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      XLength: 'number',
      YLength: 'number',
      ZLength: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFurnitureSpuAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  XLength?: number;
  YLength?: number;
  ZLength?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      XLength: 'XLength',
      YLength: 'YLength',
      ZLength: 'ZLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      XLength: 'number',
      YLength: 'number',
      ZLength: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFurnitureSpuResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeFurnitureSpuResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeFurnitureSpuResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFurnitureSpuResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeFurnitureSpuResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeFurnitureSpuResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyCommodityResponseBodyDataCategories extends $tea.Model {
  score?: number;
  categoryId?: string;
  categoryName?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      categoryId: 'string',
      categoryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyCommodityResponseBodyData extends $tea.Model {
  categories?: ClassifyCommodityResponseBodyDataCategories[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': ClassifyCommodityResponseBodyDataCategories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFurnitureAttributeResponseBodyData extends $tea.Model {
  predStyle?: string;
  predProbability?: number;
  predStyleId?: string;
  static names(): { [key: string]: string } {
    return {
      predStyle: 'PredStyle',
      predProbability: 'PredProbability',
      predStyleId: 'PredStyleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predStyle: 'string',
      predProbability: 'number',
      predStyleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFurnitureSpuResponseBodyData extends $tea.Model {
  predCateId?: string;
  predCate?: string;
  predProbability?: number;
  static names(): { [key: string]: string } {
    return {
      predCateId: 'PredCateId',
      predCate: 'PredCate',
      predProbability: 'PredProbability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predCateId: 'string',
      predCate: 'string',
      predProbability: 'number',
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
    this._endpoint = this.getEndpoint("goodstech", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async classifyCommodityWithOptions(request: ClassifyCommodityRequest, runtime: $Util.RuntimeOptions): Promise<ClassifyCommodityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ClassifyCommodityResponse>(await this.doRPCRequest("ClassifyCommodity", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new ClassifyCommodityResponse({}));
  }

  async classifyCommodity(request: ClassifyCommodityRequest): Promise<ClassifyCommodityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.classifyCommodityWithOptions(request, runtime);
  }

  async classifyCommodityAdvance(request: ClassifyCommodityAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ClassifyCommodityResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "goodstech",
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
    let classifyCommodityReq = new ClassifyCommodityRequest({ });
    OpenApiUtil.convert(request, classifyCommodityReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    classifyCommodityReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let classifyCommodityResp = await this.classifyCommodityWithOptions(classifyCommodityReq, runtime);
    return classifyCommodityResp;
  }

  async recognizeFurnitureAttributeWithOptions(request: RecognizeFurnitureAttributeRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFurnitureAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeFurnitureAttributeResponse>(await this.doRPCRequest("RecognizeFurnitureAttribute", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeFurnitureAttributeResponse({}));
  }

  async recognizeFurnitureAttribute(request: RecognizeFurnitureAttributeRequest): Promise<RecognizeFurnitureAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeFurnitureAttributeWithOptions(request, runtime);
  }

  async recognizeFurnitureAttributeAdvance(request: RecognizeFurnitureAttributeAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFurnitureAttributeResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "goodstech",
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
    let recognizeFurnitureAttributeReq = new RecognizeFurnitureAttributeRequest({ });
    OpenApiUtil.convert(request, recognizeFurnitureAttributeReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    recognizeFurnitureAttributeReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let recognizeFurnitureAttributeResp = await this.recognizeFurnitureAttributeWithOptions(recognizeFurnitureAttributeReq, runtime);
    return recognizeFurnitureAttributeResp;
  }

  async recognizeFurnitureSpuWithOptions(request: RecognizeFurnitureSpuRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFurnitureSpuResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeFurnitureSpuResponse>(await this.doRPCRequest("RecognizeFurnitureSpu", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeFurnitureSpuResponse({}));
  }

  async recognizeFurnitureSpu(request: RecognizeFurnitureSpuRequest): Promise<RecognizeFurnitureSpuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeFurnitureSpuWithOptions(request, runtime);
  }

  async recognizeFurnitureSpuAdvance(request: RecognizeFurnitureSpuAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFurnitureSpuResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "goodstech",
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
    let recognizeFurnitureSpuReq = new RecognizeFurnitureSpuRequest({ });
    OpenApiUtil.convert(request, recognizeFurnitureSpuReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    recognizeFurnitureSpuReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let recognizeFurnitureSpuResp = await this.recognizeFurnitureSpuWithOptions(recognizeFurnitureSpuReq, runtime);
    return recognizeFurnitureSpuResp;
  }

}
