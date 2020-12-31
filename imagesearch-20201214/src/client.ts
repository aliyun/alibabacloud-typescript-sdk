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

export class DeleteImageRequest extends $tea.Model {
  instanceName?: string;
  productId?: string;
  picName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      productId: 'ProductId',
      picName: 'PicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      productId: 'string',
      picName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageRequest extends $tea.Model {
  instanceName?: string;
  categoryId?: number;
  productId?: string;
  picName?: string;
  picContent?: string;
  crop?: boolean;
  region?: string;
  customContent?: string;
  intAttr?: number;
  strAttr?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      categoryId: 'CategoryId',
      productId: 'ProductId',
      picName: 'PicName',
      picContent: 'PicContent',
      crop: 'Crop',
      region: 'Region',
      customContent: 'CustomContent',
      intAttr: 'IntAttr',
      strAttr: 'StrAttr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      categoryId: 'number',
      productId: 'string',
      picName: 'string',
      picContent: 'string',
      crop: 'boolean',
      region: 'string',
      customContent: 'string',
      intAttr: 'number',
      strAttr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageAdvanceRequest extends $tea.Model {
  picContentObject: Readable;
  instanceName?: string;
  categoryId?: number;
  productId?: string;
  picName?: string;
  crop?: boolean;
  region?: string;
  customContent?: string;
  intAttr?: number;
  strAttr?: string;
  static names(): { [key: string]: string } {
    return {
      picContentObject: 'PicContentObject',
      instanceName: 'InstanceName',
      categoryId: 'CategoryId',
      productId: 'ProductId',
      picName: 'PicName',
      crop: 'Crop',
      region: 'Region',
      customContent: 'CustomContent',
      intAttr: 'IntAttr',
      strAttr: 'StrAttr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picContentObject: 'Readable',
      instanceName: 'string',
      categoryId: 'number',
      productId: 'string',
      picName: 'string',
      crop: 'boolean',
      region: 'string',
      customContent: 'string',
      intAttr: 'number',
      strAttr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  picInfo?: AddImageResponseBodyPicInfo;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      picInfo: 'PicInfo',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      picInfo: AddImageResponseBodyPicInfo,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicRequest extends $tea.Model {
  categoryId?: number;
  instanceName?: string;
  picContent?: string;
  crop?: boolean;
  region?: string;
  num?: number;
  start?: number;
  type?: string;
  filter?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      instanceName: 'InstanceName',
      picContent: 'PicContent',
      crop: 'Crop',
      region: 'Region',
      num: 'Num',
      start: 'Start',
      type: 'Type',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      instanceName: 'string',
      picContent: 'string',
      crop: 'boolean',
      region: 'string',
      num: 'number',
      start: 'number',
      type: 'string',
      filter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicAdvanceRequest extends $tea.Model {
  picContentObject: Readable;
  categoryId?: number;
  instanceName?: string;
  crop?: boolean;
  region?: string;
  num?: number;
  start?: number;
  type?: string;
  filter?: string;
  static names(): { [key: string]: string } {
    return {
      picContentObject: 'PicContentObject',
      categoryId: 'CategoryId',
      instanceName: 'InstanceName',
      crop: 'Crop',
      region: 'Region',
      num: 'Num',
      start: 'Start',
      type: 'Type',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picContentObject: 'Readable',
      categoryId: 'number',
      instanceName: 'string',
      crop: 'boolean',
      region: 'string',
      num: 'number',
      start: 'number',
      type: 'string',
      filter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBody extends $tea.Model {
  msg?: string;
  head?: SearchImageByPicResponseBodyHead;
  requestId?: string;
  auctions?: SearchImageByPicResponseBodyAuctions[];
  code?: number;
  picInfo?: SearchImageByPicResponseBodyPicInfo;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      head: 'Head',
      requestId: 'RequestId',
      auctions: 'Auctions',
      code: 'Code',
      picInfo: 'PicInfo',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      head: SearchImageByPicResponseBodyHead,
      requestId: 'string',
      auctions: { 'type': 'array', 'itemType': SearchImageByPicResponseBodyAuctions },
      code: 'number',
      picInfo: SearchImageByPicResponseBodyPicInfo,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchImageByPicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchImageByPicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameRequest extends $tea.Model {
  categoryId?: number;
  instanceName?: string;
  productId?: string;
  picName?: string;
  num?: number;
  start?: number;
  type?: string;
  filter?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      instanceName: 'InstanceName',
      productId: 'ProductId',
      picName: 'PicName',
      num: 'Num',
      start: 'Start',
      type: 'Type',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      instanceName: 'string',
      productId: 'string',
      picName: 'string',
      num: 'number',
      start: 'number',
      type: 'string',
      filter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBody extends $tea.Model {
  msg?: string;
  head?: SearchImageByNameResponseBodyHead;
  requestId?: string;
  auctions?: SearchImageByNameResponseBodyAuctions[];
  code?: number;
  picInfo?: SearchImageByNameResponseBodyPicInfo;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      head: 'Head',
      requestId: 'RequestId',
      auctions: 'Auctions',
      code: 'Code',
      picInfo: 'PicInfo',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      head: SearchImageByNameResponseBodyHead,
      requestId: 'string',
      auctions: { 'type': 'array', 'itemType': SearchImageByNameResponseBodyAuctions },
      code: 'number',
      picInfo: SearchImageByNameResponseBodyPicInfo,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchImageByNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchImageByNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponseBodyPicInfo extends $tea.Model {
  region?: string;
  categoryId?: number;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBodyHead extends $tea.Model {
  docsFound?: number;
  docsReturn?: number;
  searchTime?: number;
  static names(): { [key: string]: string } {
    return {
      docsFound: 'DocsFound',
      docsReturn: 'DocsReturn',
      searchTime: 'SearchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docsFound: 'number',
      docsReturn: 'number',
      searchTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBodyAuctions extends $tea.Model {
  picName?: string;
  intAttr?: number;
  categoryId?: number;
  productId?: string;
  strAttr?: string;
  sortExprValues?: string;
  customContent?: string;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      picName: 'PicName',
      intAttr: 'IntAttr',
      categoryId: 'CategoryId',
      productId: 'ProductId',
      strAttr: 'StrAttr',
      sortExprValues: 'SortExprValues',
      customContent: 'CustomContent',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picName: 'string',
      intAttr: 'number',
      categoryId: 'number',
      productId: 'string',
      strAttr: 'string',
      sortExprValues: 'string',
      customContent: 'string',
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBodyPicInfoMultiRegion extends $tea.Model {
  region?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBodyPicInfoAllCategories extends $tea.Model {
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByPicResponseBodyPicInfo extends $tea.Model {
  region?: string;
  categoryId?: number;
  multiRegion?: SearchImageByPicResponseBodyPicInfoMultiRegion[];
  allCategories?: SearchImageByPicResponseBodyPicInfoAllCategories[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      categoryId: 'CategoryId',
      multiRegion: 'MultiRegion',
      allCategories: 'AllCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      categoryId: 'number',
      multiRegion: { 'type': 'array', 'itemType': SearchImageByPicResponseBodyPicInfoMultiRegion },
      allCategories: { 'type': 'array', 'itemType': SearchImageByPicResponseBodyPicInfoAllCategories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyHead extends $tea.Model {
  docsFound?: number;
  docsReturn?: number;
  searchTime?: number;
  static names(): { [key: string]: string } {
    return {
      docsFound: 'DocsFound',
      docsReturn: 'DocsReturn',
      searchTime: 'SearchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docsFound: 'number',
      docsReturn: 'number',
      searchTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyAuctions extends $tea.Model {
  picName?: string;
  intAttr?: number;
  categoryId?: number;
  productId?: string;
  strAttr?: string;
  sortExprValues?: string;
  customContent?: string;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      picName: 'PicName',
      intAttr: 'IntAttr',
      categoryId: 'CategoryId',
      productId: 'ProductId',
      strAttr: 'StrAttr',
      sortExprValues: 'SortExprValues',
      customContent: 'CustomContent',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picName: 'string',
      intAttr: 'number',
      categoryId: 'number',
      productId: 'string',
      strAttr: 'string',
      sortExprValues: 'string',
      customContent: 'string',
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyPicInfoMultiRegion extends $tea.Model {
  region?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyPicInfoAllCategories extends $tea.Model {
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyPicInfo extends $tea.Model {
  region?: string;
  categoryId?: number;
  multiRegion?: SearchImageByNameResponseBodyPicInfoMultiRegion[];
  allCategories?: SearchImageByNameResponseBodyPicInfoAllCategories[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      categoryId: 'CategoryId',
      multiRegion: 'MultiRegion',
      allCategories: 'AllCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      categoryId: 'number',
      multiRegion: { 'type': 'array', 'itemType': SearchImageByNameResponseBodyPicInfoMultiRegion },
      allCategories: { 'type': 'array', 'itemType': SearchImageByNameResponseBodyPicInfoAllCategories },
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

  async deleteImageWithOptions(request: DeleteImageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteImageResponse>(await this.doRPCRequest("DeleteImage", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteImageResponse({}));
  }

  async deleteImage(request: DeleteImageRequest): Promise<DeleteImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImageWithOptions(request, runtime);
  }

  async addImageWithOptions(request: AddImageRequest, runtime: $Util.RuntimeOptions): Promise<AddImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddImageResponse>(await this.doRPCRequest("AddImage", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new AddImageResponse({}));
  }

  async addImage(request: AddImageRequest): Promise<AddImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addImageWithOptions(request, runtime);
  }

  async addImageAdvance(request: AddImageAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AddImageResponse> {
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
    let addImageReq = new AddImageRequest({ });
    OpenApiUtil.convert(request, addImageReq);
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
    addImageReq.picContent = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let addImageResp = await this.addImageWithOptions(addImageReq, runtime);
    return addImageResp;
  }

  async searchImageByPicWithOptions(request: SearchImageByPicRequest, runtime: $Util.RuntimeOptions): Promise<SearchImageByPicResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchImageByPicResponse>(await this.doRPCRequest("SearchImageByPic", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SearchImageByPicResponse({}));
  }

  async searchImageByPic(request: SearchImageByPicRequest): Promise<SearchImageByPicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchImageByPicWithOptions(request, runtime);
  }

  async searchImageByPicAdvance(request: SearchImageByPicAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SearchImageByPicResponse> {
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
    let searchImageByPicReq = new SearchImageByPicRequest({ });
    OpenApiUtil.convert(request, searchImageByPicReq);
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
    searchImageByPicReq.picContent = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let searchImageByPicResp = await this.searchImageByPicWithOptions(searchImageByPicReq, runtime);
    return searchImageByPicResp;
  }

  async searchImageByNameWithOptions(request: SearchImageByNameRequest, runtime: $Util.RuntimeOptions): Promise<SearchImageByNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchImageByNameResponse>(await this.doRPCRequest("SearchImageByName", "2020-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SearchImageByNameResponse({}));
  }

  async searchImageByName(request: SearchImageByNameRequest): Promise<SearchImageByNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchImageByNameWithOptions(request, runtime);
  }

}
