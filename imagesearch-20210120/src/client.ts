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

export class CommodityTitleRequest extends $tea.Model {
  instanceName?: string;
  picContent?: string;
  titleIndex?: number;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      picContent: 'PicContent',
      titleIndex: 'TitleIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      picContent: 'string',
      titleIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommodityTitleAdvanceRequest extends $tea.Model {
  picContentObject: Readable;
  instanceName?: string;
  titleIndex?: number;
  static names(): { [key: string]: string } {
    return {
      picContentObject: 'PicContentObject',
      instanceName: 'InstanceName',
      titleIndex: 'TitleIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picContentObject: 'Readable',
      instanceName: 'string',
      titleIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommodityTitleResponseBody extends $tea.Model {
  code?: number;
  data?: CommodityTitleResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CommodityTitleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommodityTitleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CommodityTitleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CommodityTitleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneralRecognitionRequest extends $tea.Model {
  instanceName?: string;
  picContent?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      picContent: 'PicContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      picContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneralRecognitionAdvanceRequest extends $tea.Model {
  picContentObject: Readable;
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      picContentObject: 'PicContentObject',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picContentObject: 'Readable',
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneralRecognitionResponseBody extends $tea.Model {
  code?: number;
  data?: GeneralRecognitionResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GeneralRecognitionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneralRecognitionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GeneralRecognitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GeneralRecognitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageAmazonRequest extends $tea.Model {
  gif?: boolean;
  imgUrlList?: string;
  instanceName?: string;
  templateMode?: string;
  textList?: string[];
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      imgUrlList: 'ImgUrlList',
      instanceName: 'InstanceName',
      templateMode: 'TemplateMode',
      textList: 'TextList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: 'boolean',
      imgUrlList: 'string',
      instanceName: 'string',
      templateMode: 'string',
      textList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageAmazonResponseBody extends $tea.Model {
  code?: number;
  data?: ImageAmazonResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ImageAmazonResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageAmazonResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImageAmazonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImageAmazonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageCategoryRequest extends $tea.Model {
  instanceName?: string;
  picUrl?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      picUrl: 'PicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      picUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageCategoryResponseBody extends $tea.Model {
  code?: number;
  data?: ImageCategoryResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ImageCategoryResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImageCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImageCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageDuplicationRequest extends $tea.Model {
  imageHeight?: number;
  imageWidth?: number;
  instanceName?: string;
  outputImageNum?: number;
  picNumList?: string;
  picUrlList?: string;
  static names(): { [key: string]: string } {
    return {
      imageHeight: 'ImageHeight',
      imageWidth: 'ImageWidth',
      instanceName: 'InstanceName',
      outputImageNum: 'OutputImageNum',
      picNumList: 'PicNumList',
      picUrlList: 'PicUrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageHeight: 'number',
      imageWidth: 'number',
      instanceName: 'string',
      outputImageNum: 'number',
      picNumList: 'string',
      picUrlList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageDuplicationResponseBody extends $tea.Model {
  code?: number;
  data?: string[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageDuplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImageDuplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImageDuplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImagePropertyRequest extends $tea.Model {
  instanceName?: string;
  picUrl?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      picUrl: 'PicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      picUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImagePropertyResponseBody extends $tea.Model {
  code?: number;
  data?: ImagePropertyResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ImagePropertyResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImagePropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImagePropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImagePropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageSegmentationRequest extends $tea.Model {
  instanceName?: string;
  picContent?: string;
  returnPicFormat?: string;
  returnPicType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      picContent: 'PicContent',
      returnPicFormat: 'ReturnPicFormat',
      returnPicType: 'ReturnPicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      picContent: 'string',
      returnPicFormat: 'string',
      returnPicType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageSegmentationAdvanceRequest extends $tea.Model {
  picContentObject: Readable;
  instanceName?: string;
  returnPicFormat?: string;
  returnPicType?: string;
  static names(): { [key: string]: string } {
    return {
      picContentObject: 'PicContentObject',
      instanceName: 'InstanceName',
      returnPicFormat: 'ReturnPicFormat',
      returnPicType: 'ReturnPicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picContentObject: 'Readable',
      instanceName: 'string',
      returnPicFormat: 'string',
      returnPicType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageSegmentationResponseBody extends $tea.Model {
  code?: number;
  data?: ImageSegmentationResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ImageSegmentationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageSegmentationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImageSegmentationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImageSegmentationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommodityTitleResponseBodyData extends $tea.Model {
  title?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneralRecognitionResponseBodyDataResult extends $tea.Model {
  score?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneralRecognitionResponseBodyData extends $tea.Model {
  regions?: string[];
  result?: GeneralRecognitionResponseBodyDataResult[];
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': 'string' },
      result: { 'type': 'array', 'itemType': GeneralRecognitionResponseBodyDataResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageAmazonResponseBodyData extends $tea.Model {
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageCategoryResponseBodyDataCateResult extends $tea.Model {
  id?: number;
  name?: string;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageCategoryResponseBodyData extends $tea.Model {
  cateResult?: ImageCategoryResponseBodyDataCateResult[];
  static names(): { [key: string]: string } {
    return {
      cateResult: 'CateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateResult: { 'type': 'array', 'itemType': ImageCategoryResponseBodyDataCateResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImagePropertyResponseBodyDataPropertyResultsValues extends $tea.Model {
  probability?: number;
  valueId?: string;
  valueName?: string;
  static names(): { [key: string]: string } {
    return {
      probability: 'Probability',
      valueId: 'ValueId',
      valueName: 'ValueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      probability: 'number',
      valueId: 'string',
      valueName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImagePropertyResponseBodyDataPropertyResults extends $tea.Model {
  propertyId?: string;
  propertyName?: string;
  values?: ImagePropertyResponseBodyDataPropertyResultsValues[];
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyName: 'PropertyName',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'string',
      propertyName: 'string',
      values: { 'type': 'array', 'itemType': ImagePropertyResponseBodyDataPropertyResultsValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImagePropertyResponseBodyData extends $tea.Model {
  propertyResults?: ImagePropertyResponseBodyDataPropertyResults[];
  static names(): { [key: string]: string } {
    return {
      propertyResults: 'PropertyResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyResults: { 'type': 'array', 'itemType': ImagePropertyResponseBodyDataPropertyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageSegmentationResponseBodyData extends $tea.Model {
  picUrl?: string;
  static names(): { [key: string]: string } {
    return {
      picUrl: 'PicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrl: 'string',
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
    this._endpoint = this.getEndpoint("imagesearch", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async commodityTitleWithOptions(request: CommodityTitleRequest, runtime: $Util.RuntimeOptions): Promise<CommodityTitleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CommodityTitleResponse>(await this.doRPCRequest("CommodityTitle", "2021-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CommodityTitleResponse({}));
  }

  async commodityTitle(request: CommodityTitleRequest): Promise<CommodityTitleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.commodityTitleWithOptions(request, runtime);
  }

  async commodityTitleAdvance(request: CommodityTitleAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<CommodityTitleResponse> {
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

    let authConfig = new $RPC.Config({
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
      product: "ImageSearch",
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
    let commodityTitleReq = new CommodityTitleRequest({ });
    OpenApiUtil.convert(request, commodityTitleReq);
    if (!Util.isUnset(request.picContentObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.picContentObject,
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
      commodityTitleReq.picContent = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let commodityTitleResp = await this.commodityTitleWithOptions(commodityTitleReq, runtime);
    return commodityTitleResp;
  }

  async generalRecognitionWithOptions(request: GeneralRecognitionRequest, runtime: $Util.RuntimeOptions): Promise<GeneralRecognitionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GeneralRecognitionResponse>(await this.doRPCRequest("GeneralRecognition", "2021-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GeneralRecognitionResponse({}));
  }

  async generalRecognition(request: GeneralRecognitionRequest): Promise<GeneralRecognitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generalRecognitionWithOptions(request, runtime);
  }

  async generalRecognitionAdvance(request: GeneralRecognitionAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<GeneralRecognitionResponse> {
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

    let authConfig = new $RPC.Config({
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
      product: "ImageSearch",
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
    let generalRecognitionReq = new GeneralRecognitionRequest({ });
    OpenApiUtil.convert(request, generalRecognitionReq);
    if (!Util.isUnset(request.picContentObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.picContentObject,
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
      generalRecognitionReq.picContent = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let generalRecognitionResp = await this.generalRecognitionWithOptions(generalRecognitionReq, runtime);
    return generalRecognitionResp;
  }

  async imageAmazonWithOptions(request: ImageAmazonRequest, runtime: $Util.RuntimeOptions): Promise<ImageAmazonResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImageAmazonResponse>(await this.doRPCRequest("ImageAmazon", "2021-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ImageAmazonResponse({}));
  }

  async imageAmazon(request: ImageAmazonRequest): Promise<ImageAmazonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.imageAmazonWithOptions(request, runtime);
  }

  async imageCategoryWithOptions(request: ImageCategoryRequest, runtime: $Util.RuntimeOptions): Promise<ImageCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImageCategoryResponse>(await this.doRPCRequest("ImageCategory", "2021-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ImageCategoryResponse({}));
  }

  async imageCategory(request: ImageCategoryRequest): Promise<ImageCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.imageCategoryWithOptions(request, runtime);
  }

  async imageDuplicationWithOptions(request: ImageDuplicationRequest, runtime: $Util.RuntimeOptions): Promise<ImageDuplicationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImageDuplicationResponse>(await this.doRPCRequest("ImageDuplication", "2021-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ImageDuplicationResponse({}));
  }

  async imageDuplication(request: ImageDuplicationRequest): Promise<ImageDuplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.imageDuplicationWithOptions(request, runtime);
  }

  async imagePropertyWithOptions(request: ImagePropertyRequest, runtime: $Util.RuntimeOptions): Promise<ImagePropertyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImagePropertyResponse>(await this.doRPCRequest("ImageProperty", "2021-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ImagePropertyResponse({}));
  }

  async imageProperty(request: ImagePropertyRequest): Promise<ImagePropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.imagePropertyWithOptions(request, runtime);
  }

  async imageSegmentationWithOptions(request: ImageSegmentationRequest, runtime: $Util.RuntimeOptions): Promise<ImageSegmentationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImageSegmentationResponse>(await this.doRPCRequest("ImageSegmentation", "2021-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ImageSegmentationResponse({}));
  }

  async imageSegmentation(request: ImageSegmentationRequest): Promise<ImageSegmentationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.imageSegmentationWithOptions(request, runtime);
  }

  async imageSegmentationAdvance(request: ImageSegmentationAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ImageSegmentationResponse> {
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

    let authConfig = new $RPC.Config({
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
      product: "ImageSearch",
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
    let imageSegmentationReq = new ImageSegmentationRequest({ });
    OpenApiUtil.convert(request, imageSegmentationReq);
    if (!Util.isUnset(request.picContentObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.picContentObject,
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
      imageSegmentationReq.picContent = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let imageSegmentationResp = await this.imageSegmentationWithOptions(imageSegmentationReq, runtime);
    return imageSegmentationResp;
  }

}
