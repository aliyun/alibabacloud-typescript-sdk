// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import ROA, * as $ROA from '@alicloud/roa-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class SearchItemQuery extends $tea.Model {
  instanceName: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'instanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchItemRequest extends $tea.Model {
  headers?: { [key: string]: string };
  query: SearchItemQuery;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      query: SearchItemQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchItemResponseBody extends $tea.Model {
  requestId: string;
  success: boolean;
  message: string;
  code: number;
  auctions: SearchItemResponseBodyAuctions;
  head: SearchItemResponseBodyHead;
  picInfo: SearchItemResponseBodyPicInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      message: 'Message',
      code: 'Code',
      auctions: 'Auctions',
      head: 'Head',
      picInfo: 'PicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      message: 'string',
      code: 'number',
      auctions: SearchItemResponseBodyAuctions,
      head: SearchItemResponseBodyHead,
      picInfo: SearchItemResponseBodyPicInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteItemQuery extends $tea.Model {
  instanceName: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'instanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteItemRequest extends $tea.Model {
  headers?: { [key: string]: string };
  query: DeleteItemQuery;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      query: DeleteItemQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteItemResponseBody extends $tea.Model {
  requestId: string;
  success: boolean;
  message: string;
  code: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      message: 'Message',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      message: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddItemQuery extends $tea.Model {
  instanceName: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'instanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddItemRequest extends $tea.Model {
  headers?: { [key: string]: string };
  query: AddItemQuery;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      query: AddItemQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddItemResponseBody extends $tea.Model {
  requestId: string;
  success: boolean;
  message: string;
  code: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      message: 'Message',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      message: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ItemAddQuery extends $tea.Model {
  instanceName: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'instanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ItemAddRequest extends $tea.Model {
  headers?: { [key: string]: string };
  query: ItemAddQuery;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      query: ItemAddQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ItemAddResponseBody extends $tea.Model {
  requestId: string;
  success: boolean;
  message: string;
  code: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      message: 'Message',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      message: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ItemAddResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ItemAddResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ItemAddResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPicQuery extends $tea.Model {
  name: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPicRequest extends $tea.Model {
  headers?: { [key: string]: string };
  query: UploadPicQuery;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      query: UploadPicQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPicResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchItemResponseBodyAuctionsAuction extends $tea.Model {
  custContent: string;
  productId: string;
  sortExprValues: string;
  catId: string;
  picName: string;
  static names(): { [key: string]: string } {
    return {
      custContent: 'CustContent',
      productId: 'ProductId',
      sortExprValues: 'SortExprValues',
      catId: 'CatId',
      picName: 'PicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custContent: 'string',
      productId: 'string',
      sortExprValues: 'string',
      catId: 'string',
      picName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchItemResponseBodyAuctions extends $tea.Model {
  auction: SearchItemResponseBodyAuctionsAuction[];
  static names(): { [key: string]: string } {
    return {
      auction: 'Auction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auction: { 'type': 'array', 'itemType': SearchItemResponseBodyAuctionsAuction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchItemResponseBodyHead extends $tea.Model {
  searchTime: number;
  docsFound: number;
  docsReturn: number;
  static names(): { [key: string]: string } {
    return {
      searchTime: 'SearchTime',
      docsFound: 'DocsFound',
      docsReturn: 'DocsReturn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchTime: 'number',
      docsFound: 'number',
      docsReturn: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchItemResponseBodyPicInfoAllCategoryCategory extends $tea.Model {
  name: string;
  id: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchItemResponseBodyPicInfoAllCategory extends $tea.Model {
  category: SearchItemResponseBodyPicInfoAllCategoryCategory[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: { 'type': 'array', 'itemType': SearchItemResponseBodyPicInfoAllCategoryCategory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchItemResponseBodyPicInfo extends $tea.Model {
  category: string;
  region: string;
  allCategory: SearchItemResponseBodyPicInfoAllCategory;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      region: 'Region',
      allCategory: 'AllCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      region: 'string',
      allCategory: SearchItemResponseBodyPicInfoAllCategory,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends ROA {

  constructor(config: $ROA.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpointHost = this.getEndpoint("imagesearch", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpointHost);
  }


  async searchItemWithOptions(request: SearchItemRequest, runtime: $Util.RuntimeOptions): Promise<SearchItemResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchItemResponse>(await this.doRequestWithAction("SearchItem", "2018-01-15", "HTTPS", "POST", "AK", `/item/search`, Util.stringifyMapValue($tea.toMap(request.query)), request.headers, null, runtime), new SearchItemResponse({}));
  }

  async searchItem(request: SearchItemRequest): Promise<SearchItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchItemWithOptions(request, runtime);
  }

  async deleteItemWithOptions(request: DeleteItemRequest, runtime: $Util.RuntimeOptions): Promise<DeleteItemResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteItemResponse>(await this.doRequestWithAction("DeleteItem", "2018-01-15", "HTTPS", "POST", "AK", `/item/delete`, Util.stringifyMapValue($tea.toMap(request.query)), request.headers, null, runtime), new DeleteItemResponse({}));
  }

  async deleteItem(request: DeleteItemRequest): Promise<DeleteItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteItemWithOptions(request, runtime);
  }

  async addItemWithOptions(request: AddItemRequest, runtime: $Util.RuntimeOptions): Promise<AddItemResponse> {
    Util.validateModel(request);
    return $tea.cast<AddItemResponse>(await this.doRequestWithAction("AddItem", "2018-01-15", "HTTPS", "POST", "AK", `/item/add`, Util.stringifyMapValue($tea.toMap(request.query)), request.headers, null, runtime), new AddItemResponse({}));
  }

  async addItem(request: AddItemRequest): Promise<AddItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addItemWithOptions(request, runtime);
  }

  async itemAddWithOptions(request: ItemAddRequest, runtime: $Util.RuntimeOptions): Promise<ItemAddResponse> {
    Util.validateModel(request);
    return $tea.cast<ItemAddResponse>(await this.doRequestWithAction("ItemAdd", "2018-01-15", "HTTPS", "POST", "AK", `/item/add`, Util.stringifyMapValue($tea.toMap(request.query)), request.headers, null, runtime), new ItemAddResponse({}));
  }

  async itemAdd(request: ItemAddRequest): Promise<ItemAddResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.itemAddWithOptions(request, runtime);
  }

  async uploadPicWithOptions(request: UploadPicRequest, runtime: $Util.RuntimeOptions): Promise<UploadPicResponse> {
    Util.validateModel(request);
    return $tea.cast<UploadPicResponse>(await this.doRequestWithAction("UploadPic", "2018-01-15", "HTTPS", "POST", "AK", `/test/test-body`, Util.stringifyMapValue($tea.toMap(request.query)), request.headers, null, runtime), new UploadPicResponse({}));
  }

  async uploadPic(request: UploadPicRequest): Promise<UploadPicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadPicWithOptions(request, runtime);
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

}
