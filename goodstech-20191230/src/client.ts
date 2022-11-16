// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
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
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  data?: ClassifyCommodityResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ClassifyCommodityResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyCommodityResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ClassifyCommodityResponseBody;
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
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  data?: RecognizeFurnitureAttributeResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeFurnitureAttributeResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFurnitureAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeFurnitureAttributeResponseBody;
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
  imageURLObject?: Readable;
  XLength?: number;
  YLength?: number;
  ZLength?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  data?: RecognizeFurnitureSpuResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeFurnitureSpuResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFurnitureSpuResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeFurnitureSpuResponseBody;
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
      body: RecognizeFurnitureSpuResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyCommodityResponseBodyDataCategories extends $tea.Model {
  categoryId?: string;
  categoryName?: string;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      categoryName: 'string',
      score: 'number',
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
  predProbability?: number;
  predStyle?: string;
  predStyleId?: string;
  static names(): { [key: string]: string } {
    return {
      predProbability: 'PredProbability',
      predStyle: 'PredStyle',
      predStyleId: 'PredStyleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predProbability: 'number',
      predStyle: 'string',
      predStyleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFurnitureSpuResponseBodyData extends $tea.Model {
  predCate?: string;
  predCateId?: string;
  predProbability?: number;
  static names(): { [key: string]: string } {
    return {
      predCate: 'PredCate',
      predCateId: 'PredCateId',
      predProbability: 'PredProbability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predCate: 'string',
      predCateId: 'string',
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
    let query = { };
    if (!Util.isUnset(request.imageURL)) {
      query["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ClassifyCommodity",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ClassifyCommodityResponse>(await this.callApi(params, req, runtime), new ClassifyCommodityResponse({}));
  }

  async classifyCommodity(request: ClassifyCommodityRequest): Promise<ClassifyCommodityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.classifyCommodityWithOptions(request, runtime);
  }

  async classifyCommodityAdvance(request: ClassifyCommodityAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ClassifyCommodityResponse> {
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
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      classifyCommodityReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let classifyCommodityResp = await this.classifyCommodityWithOptions(classifyCommodityReq, runtime);
    return classifyCommodityResp;
  }

  async recognizeFurnitureAttributeWithOptions(request: RecognizeFurnitureAttributeRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFurnitureAttributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeFurnitureAttribute",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeFurnitureAttributeResponse>(await this.callApi(params, req, runtime), new RecognizeFurnitureAttributeResponse({}));
  }

  async recognizeFurnitureAttribute(request: RecognizeFurnitureAttributeRequest): Promise<RecognizeFurnitureAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeFurnitureAttributeWithOptions(request, runtime);
  }

  async recognizeFurnitureAttributeAdvance(request: RecognizeFurnitureAttributeAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFurnitureAttributeResponse> {
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
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      recognizeFurnitureAttributeReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeFurnitureAttributeResp = await this.recognizeFurnitureAttributeWithOptions(recognizeFurnitureAttributeReq, runtime);
    return recognizeFurnitureAttributeResp;
  }

  async recognizeFurnitureSpuWithOptions(request: RecognizeFurnitureSpuRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFurnitureSpuResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.XLength)) {
      body["XLength"] = request.XLength;
    }

    if (!Util.isUnset(request.YLength)) {
      body["YLength"] = request.YLength;
    }

    if (!Util.isUnset(request.ZLength)) {
      body["ZLength"] = request.ZLength;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeFurnitureSpu",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeFurnitureSpuResponse>(await this.callApi(params, req, runtime), new RecognizeFurnitureSpuResponse({}));
  }

  async recognizeFurnitureSpu(request: RecognizeFurnitureSpuRequest): Promise<RecognizeFurnitureSpuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeFurnitureSpuWithOptions(request, runtime);
  }

  async recognizeFurnitureSpuAdvance(request: RecognizeFurnitureSpuAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFurnitureSpuResponse> {
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
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      recognizeFurnitureSpuReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeFurnitureSpuResp = await this.recognizeFurnitureSpuWithOptions(recognizeFurnitureSpuReq, runtime);
    return recognizeFurnitureSpuResp;
  }

}
