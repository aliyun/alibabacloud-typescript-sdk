// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddImageRequest extends $tea.Model {
  categoryId?: number;
  crop?: boolean;
  customContent?: string;
  instanceName?: string;
  intAttr?: number;
  picContent?: string;
  picName?: string;
  productId?: string;
  region?: string;
  strAttr?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      crop: 'Crop',
      customContent: 'CustomContent',
      instanceName: 'InstanceName',
      intAttr: 'IntAttr',
      picContent: 'PicContent',
      picName: 'PicName',
      productId: 'ProductId',
      region: 'Region',
      strAttr: 'StrAttr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      crop: 'boolean',
      customContent: 'string',
      instanceName: 'string',
      intAttr: 'number',
      picContent: 'string',
      picName: 'string',
      productId: 'string',
      region: 'string',
      strAttr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  picInfo?: AddImageResponseBodyPicInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      picInfo: 'PicInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      picInfo: AddImageResponseBodyPicInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddImageResponseBody;
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
      body: AddImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageRequest extends $tea.Model {
  instanceName?: string;
  picName?: string;
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      picName: 'PicName',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      picName: 'string',
      productId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteImageResponseBody;
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
      body: DeleteImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageRequest extends $tea.Model {
  categoryId?: number;
  crop?: boolean;
  filter?: string;
  instanceName?: string;
  num?: number;
  picContent?: string;
  picName?: string;
  productId?: string;
  region?: string;
  start?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      crop: 'Crop',
      filter: 'Filter',
      instanceName: 'InstanceName',
      num: 'Num',
      picContent: 'PicContent',
      picName: 'PicName',
      productId: 'ProductId',
      region: 'Region',
      start: 'Start',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      crop: 'boolean',
      filter: 'string',
      instanceName: 'string',
      num: 'number',
      picContent: 'string',
      picName: 'string',
      productId: 'string',
      region: 'string',
      start: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageResponseBody extends $tea.Model {
  auctions?: SearchImageResponseBodyAuctions[];
  code?: number;
  head?: SearchImageResponseBodyHead;
  msg?: string;
  picInfo?: SearchImageResponseBodyPicInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      auctions: 'Auctions',
      code: 'Code',
      head: 'Head',
      msg: 'Msg',
      picInfo: 'PicInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctions: { 'type': 'array', 'itemType': SearchImageResponseBodyAuctions },
      code: 'number',
      head: SearchImageResponseBodyHead,
      msg: 'string',
      picInfo: SearchImageResponseBodyPicInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchImageResponseBody;
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
      body: SearchImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponseBodyPicInfo extends $tea.Model {
  categoryId?: number;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageResponseBodyAuctions extends $tea.Model {
  categoryId?: number;
  customContent?: string;
  intAttr?: number;
  picName?: string;
  productId?: string;
  score?: number;
  sortExprValues?: string;
  strAttr?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      customContent: 'CustomContent',
      intAttr: 'IntAttr',
      picName: 'PicName',
      productId: 'ProductId',
      score: 'Score',
      sortExprValues: 'SortExprValues',
      strAttr: 'StrAttr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      customContent: 'string',
      intAttr: 'number',
      picName: 'string',
      productId: 'string',
      score: 'number',
      sortExprValues: 'string',
      strAttr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageResponseBodyHead extends $tea.Model {
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

export class SearchImageResponseBodyPicInfoAllCategories extends $tea.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageResponseBodyPicInfoMultiRegion extends $tea.Model {
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

export class SearchImageResponseBodyPicInfo extends $tea.Model {
  allCategories?: SearchImageResponseBodyPicInfoAllCategories[];
  categoryId?: number;
  multiRegion?: SearchImageResponseBodyPicInfoMultiRegion[];
  region?: string;
  static names(): { [key: string]: string } {
    return {
      allCategories: 'AllCategories',
      categoryId: 'CategoryId',
      multiRegion: 'MultiRegion',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allCategories: { 'type': 'array', 'itemType': SearchImageResponseBodyPicInfoAllCategories },
      categoryId: 'number',
      multiRegion: { 'type': 'array', 'itemType': SearchImageResponseBodyPicInfoMultiRegion },
      region: 'string',
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

  async addImageWithOptions(request: AddImageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!Util.isUnset(request.customContent)) {
      body["CustomContent"] = request.customContent;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.intAttr)) {
      body["IntAttr"] = request.intAttr;
    }

    if (!Util.isUnset(request.picContent)) {
      body["PicContent"] = request.picContent;
    }

    if (!Util.isUnset(request.picName)) {
      body["PicName"] = request.picName;
    }

    if (!Util.isUnset(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.strAttr)) {
      body["StrAttr"] = request.strAttr;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddImage",
      version: "2019-03-25",
      protocol: "HTTPS",
      pathname: `/v2/image/add`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddImageResponse>(await this.callApi(params, req, runtime), new AddImageResponse({}));
  }

  async addImage(request: AddImageRequest): Promise<AddImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addImageWithOptions(request, headers, runtime);
  }

  async deleteImageWithOptions(request: DeleteImageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.picName)) {
      body["PicName"] = request.picName;
    }

    if (!Util.isUnset(request.productId)) {
      body["ProductId"] = request.productId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteImage",
      version: "2019-03-25",
      protocol: "HTTPS",
      pathname: `/v2/image/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteImageResponse>(await this.callApi(params, req, runtime), new DeleteImageResponse({}));
  }

  async deleteImage(request: DeleteImageRequest): Promise<DeleteImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteImageWithOptions(request, headers, runtime);
  }

  async searchImageWithOptions(request: SearchImageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!Util.isUnset(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.num)) {
      body["Num"] = request.num;
    }

    if (!Util.isUnset(request.picContent)) {
      body["PicContent"] = request.picContent;
    }

    if (!Util.isUnset(request.picName)) {
      body["PicName"] = request.picName;
    }

    if (!Util.isUnset(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.start)) {
      body["Start"] = request.start;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchImage",
      version: "2019-03-25",
      protocol: "HTTPS",
      pathname: `/v2/image/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchImageResponse>(await this.callApi(params, req, runtime), new SearchImageResponse({}));
  }

  async searchImage(request: SearchImageRequest): Promise<SearchImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchImageWithOptions(request, headers, runtime);
  }

}
