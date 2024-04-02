// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AuditItemSubmitRequest extends $tea.Model {
  data?: AuditItemSubmitRequestData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': AuditItemSubmitRequestData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditItemSubmitResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditItemSubmitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuditItemSubmitResponseBody;
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
      body: AuditItemSubmitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatCustomOcrTemplateRequest extends $tea.Model {
  imgUrl?: string;
  name?: string;
  recognizeArea?: string;
  referArea?: string;
  static names(): { [key: string]: string } {
    return {
      imgUrl: 'ImgUrl',
      name: 'Name',
      recognizeArea: 'RecognizeArea',
      referArea: 'ReferArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imgUrl: 'string',
      name: 'string',
      recognizeArea: 'string',
      referArea: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatCustomOcrTemplateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatCustomOcrTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatCustomOcrTemplateResponseBody;
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
      body: CreatCustomOcrTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuditCallbackRequest extends $tea.Model {
  callbackSuggestions?: string;
  callbackTypes?: string;
  cryptType?: string;
  name?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      callbackSuggestions: 'CallbackSuggestions',
      callbackTypes: 'CallbackTypes',
      cryptType: 'CryptType',
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackSuggestions: 'string',
      callbackTypes: 'string',
      cryptType: 'string',
      name: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuditCallbackResponseBody extends $tea.Model {
  callbackSuggestions?: string[];
  callbackTypes?: string[];
  createTime?: string;
  cryptType?: string;
  id?: number;
  modifiedTime?: string;
  name?: string;
  requestId?: string;
  seed?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      callbackSuggestions: 'CallbackSuggestions',
      callbackTypes: 'CallbackTypes',
      createTime: 'CreateTime',
      cryptType: 'CryptType',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      requestId: 'RequestId',
      seed: 'Seed',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackSuggestions: { 'type': 'array', 'itemType': 'string' },
      callbackTypes: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      cryptType: 'string',
      id: 'number',
      modifiedTime: 'string',
      name: 'string',
      requestId: 'string',
      seed: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuditCallbackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAuditCallbackResponseBody;
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
      body: CreateAuditCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizTypeRequest extends $tea.Model {
  bizTypeImport?: string;
  bizTypeName?: string;
  citeTemplate?: boolean;
  description?: string;
  industryInfo?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypeImport: 'BizTypeImport',
      bizTypeName: 'BizTypeName',
      citeTemplate: 'CiteTemplate',
      description: 'Description',
      industryInfo: 'IndustryInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeImport: 'string',
      bizTypeName: 'string',
      citeTemplate: 'boolean',
      description: 'string',
      industryInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizTypeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBizTypeResponseBody;
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
      body: CreateBizTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdiBagRequest extends $tea.Model {
  clientToken?: string;
  commodityCode?: string;
  flowOutSpec?: number;
  orderNum?: number;
  orderType?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodityCode: 'CommodityCode',
      flowOutSpec: 'FlowOutSpec',
      orderNum: 'OrderNum',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodityCode: 'string',
      flowOutSpec: 'number',
      orderNum: 'number',
      orderType: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdiBagResponseBody extends $tea.Model {
  code?: string;
  instanceIds?: CreateCdiBagResponseBodyInstanceIds;
  message?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceIds: 'InstanceIds',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceIds: CreateCdiBagResponseBodyInstanceIds,
      message: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdiBagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCdiBagResponseBody;
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
      body: CreateCdiBagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdiBaseBagRequest extends $tea.Model {
  clientToken?: string;
  commodityCode?: string;
  duration?: number;
  flowOutSpec?: number;
  orderType?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodityCode: 'CommodityCode',
      duration: 'Duration',
      flowOutSpec: 'FlowOutSpec',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodityCode: 'string',
      duration: 'number',
      flowOutSpec: 'number',
      orderType: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdiBaseBagResponseBody extends $tea.Model {
  code?: string;
  instanceId?: string;
  message?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdiBaseBagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCdiBaseBagResponseBody;
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
      body: CreateCdiBaseBagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageLibRequest extends $tea.Model {
  bizTypes?: string;
  category?: string;
  enable?: boolean;
  name?: string;
  scene?: string;
  serviceModule?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypes: 'BizTypes',
      category: 'Category',
      enable: 'Enable',
      name: 'Name',
      scene: 'Scene',
      serviceModule: 'ServiceModule',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypes: 'string',
      category: 'string',
      enable: 'boolean',
      name: 'string',
      scene: 'string',
      serviceModule: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageLibResponseBody extends $tea.Model {
  id?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateImageLibResponseBody;
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
      body: CreateImageLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeywordRequest extends $tea.Model {
  keywordLibId?: number;
  keywords?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      keywordLibId: 'KeywordLibId',
      keywords: 'Keywords',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordLibId: 'number',
      keywords: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeywordResponseBody extends $tea.Model {
  invalidKeywordList?: string[];
  requestId?: string;
  successCount?: number;
  validKeywordList?: CreateKeywordResponseBodyValidKeywordList[];
  static names(): { [key: string]: string } {
    return {
      invalidKeywordList: 'InvalidKeywordList',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
      validKeywordList: 'validKeywordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidKeywordList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      successCount: 'number',
      validKeywordList: { 'type': 'array', 'itemType': CreateKeywordResponseBodyValidKeywordList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeywordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateKeywordResponseBody;
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
      body: CreateKeywordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeywordLibRequest extends $tea.Model {
  bizTypes?: string;
  category?: string;
  enable?: boolean;
  lang?: string;
  language?: string;
  libType?: string;
  matchMode?: string;
  name?: string;
  resourceType?: string;
  serviceModule?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypes: 'BizTypes',
      category: 'Category',
      enable: 'Enable',
      lang: 'Lang',
      language: 'Language',
      libType: 'LibType',
      matchMode: 'MatchMode',
      name: 'Name',
      resourceType: 'ResourceType',
      serviceModule: 'ServiceModule',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypes: 'string',
      category: 'string',
      enable: 'boolean',
      lang: 'string',
      language: 'string',
      libType: 'string',
      matchMode: 'string',
      name: 'string',
      resourceType: 'string',
      serviceModule: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeywordLibResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeywordLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateKeywordLibResponseBody;
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
      body: CreateKeywordLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebSiteInstanceRequest extends $tea.Model {
  clientToken?: string;
  duration?: number;
  orderNum?: number;
  orderType?: string;
  ownerId?: number;
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      duration: 'Duration',
      orderNum: 'OrderNum',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
      pricingCycle: 'PricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      duration: 'number',
      orderNum: 'number',
      orderType: 'string',
      ownerId: 'number',
      pricingCycle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebSiteInstanceResponseBody extends $tea.Model {
  code?: string;
  instanceIds?: CreateWebSiteInstanceResponseBodyInstanceIds;
  message?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceIds: 'InstanceIds',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceIds: CreateWebSiteInstanceResponseBodyInstanceIds,
      message: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebSiteInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWebSiteInstanceResponseBody;
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
      body: CreateWebSiteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebsiteIndexPageBaselineRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebsiteIndexPageBaselineResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebsiteIndexPageBaselineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWebsiteIndexPageBaselineResponseBody;
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
      body: CreateWebsiteIndexPageBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBizTypeRequest extends $tea.Model {
  bizTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypeName: 'BizTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBizTypeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBizTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBizTypeResponseBody;
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
      body: DeleteBizTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomOcrTemplateRequest extends $tea.Model {
  ids?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomOcrTemplateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomOcrTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomOcrTemplateResponseBody;
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
      body: DeleteCustomOcrTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageFromLibRequest extends $tea.Model {
  ids?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageFromLibResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageFromLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteImageFromLibResponseBody;
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
      body: DeleteImageFromLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageLibRequest extends $tea.Model {
  id?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageLibResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteImageLibResponseBody;
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
      body: DeleteImageLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeywordRequest extends $tea.Model {
  ids?: string;
  keywordLibId?: string;
  keywords?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      keywordLibId: 'KeywordLibId',
      keywords: 'Keywords',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      keywordLibId: 'string',
      keywords: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeywordResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeywordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteKeywordResponseBody;
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
      body: DeleteKeywordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeywordLibRequest extends $tea.Model {
  id?: number;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeywordLibResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeywordLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteKeywordLibResponseBody;
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
      body: DeleteKeywordLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNotificationContactsRequest extends $tea.Model {
  contactTypes?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      contactTypes: 'ContactTypes',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactTypes: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNotificationContactsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNotificationContactsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNotificationContactsResponseBody;
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
      body: DeleteNotificationContactsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInfoRequest extends $tea.Model {
  currentPage?: number;
  lang?: string;
  pageSize?: number;
  platform?: string;
  sourceIp?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      platform: 'Platform',
      sourceIp: 'SourceIp',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      platform: 'string',
      sourceIp: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInfoResponseBody extends $tea.Model {
  appInfoList?: DescribeAppInfoResponseBodyAppInfoList[];
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appInfoList: 'AppInfoList',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfoList: { 'type': 'array', 'itemType': DescribeAppInfoResponseBodyAppInfoList },
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppInfoResponseBody;
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
      body: DescribeAppInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditCallbackResponseBody extends $tea.Model {
  callback?: string;
  cryptType?: number;
  requestId?: string;
  seed?: string;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      cryptType: 'CryptType',
      requestId: 'RequestId',
      seed: 'Seed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callback: 'string',
      cryptType: 'number',
      requestId: 'string',
      seed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditCallbackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAuditCallbackResponseBody;
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
      body: DescribeAuditCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditCallbackListResponseBody extends $tea.Model {
  callbackList?: DescribeAuditCallbackListResponseBodyCallbackList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      callbackList: 'CallbackList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackList: { 'type': 'array', 'itemType': DescribeAuditCallbackListResponseBodyCallbackList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditCallbackListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAuditCallbackListResponseBody;
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
      body: DescribeAuditCallbackListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditContentRequest extends $tea.Model {
  auditResult?: string;
  bizType?: string;
  currentPage?: number;
  dataId?: string;
  endDate?: string;
  imageId?: string;
  keywordId?: string;
  label?: string;
  lang?: string;
  libType?: string;
  pageSize?: number;
  resourceType?: string;
  scene?: string;
  sourceIp?: string;
  startDate?: string;
  suggestion?: string;
  taskId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      auditResult: 'AuditResult',
      bizType: 'BizType',
      currentPage: 'CurrentPage',
      dataId: 'DataId',
      endDate: 'EndDate',
      imageId: 'ImageId',
      keywordId: 'KeywordId',
      label: 'Label',
      lang: 'Lang',
      libType: 'LibType',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      scene: 'Scene',
      sourceIp: 'SourceIp',
      startDate: 'StartDate',
      suggestion: 'Suggestion',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditResult: 'string',
      bizType: 'string',
      currentPage: 'number',
      dataId: 'string',
      endDate: 'string',
      imageId: 'string',
      keywordId: 'string',
      label: 'string',
      lang: 'string',
      libType: 'string',
      pageSize: 'number',
      resourceType: 'string',
      scene: 'string',
      sourceIp: 'string',
      startDate: 'string',
      suggestion: 'string',
      taskId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditContentResponseBody extends $tea.Model {
  auditContentList?: DescribeAuditContentResponseBodyAuditContentList[];
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      auditContentList: 'AuditContentList',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditContentList: { 'type': 'array', 'itemType': DescribeAuditContentResponseBodyAuditContentList },
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAuditContentResponseBody;
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
      body: DescribeAuditContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditContentItemRequest extends $tea.Model {
  currentPage?: number;
  lang?: string;
  pageSize?: number;
  resourceType?: string;
  sourceIp?: string;
  taskId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      resourceType: 'string',
      sourceIp: 'string',
      taskId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditContentItemResponseBody extends $tea.Model {
  auditContentItemList?: DescribeAuditContentItemResponseBodyAuditContentItemList[];
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      auditContentItemList: 'AuditContentItemList',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditContentItemList: { 'type': 'array', 'itemType': DescribeAuditContentItemResponseBodyAuditContentItemList },
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditContentItemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAuditContentItemResponseBody;
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
      body: DescribeAuditContentItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditRangeResponseBody extends $tea.Model {
  auditRange?: DescribeAuditRangeResponseBodyAuditRange;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      auditRange: 'AuditRange',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRange: DescribeAuditRangeResponseBodyAuditRange,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditRangeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAuditRangeResponseBody;
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
      body: DescribeAuditRangeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditSettingRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditSettingResponseBody extends $tea.Model {
  auditRange?: DescribeAuditSettingResponseBodyAuditRange;
  callback?: string;
  requestId?: string;
  seed?: string;
  static names(): { [key: string]: string } {
    return {
      auditRange: 'AuditRange',
      callback: 'Callback',
      requestId: 'RequestId',
      seed: 'Seed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRange: DescribeAuditSettingResponseBodyAuditRange,
      callback: 'string',
      requestId: 'string',
      seed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAuditSettingResponseBody;
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
      body: DescribeAuditSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeImageLibRequest extends $tea.Model {
  bizTypeName?: string;
  resourceType?: string;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypeName: 'BizTypeName',
      resourceType: 'ResourceType',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeName: 'string',
      resourceType: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeImageLibResponseBody extends $tea.Model {
  black?: DescribeBizTypeImageLibResponseBodyBlack;
  requestId?: string;
  review?: DescribeBizTypeImageLibResponseBodyReview;
  white?: DescribeBizTypeImageLibResponseBodyWhite;
  static names(): { [key: string]: string } {
    return {
      black: 'Black',
      requestId: 'RequestId',
      review: 'Review',
      white: 'White',
    };
  }

  static types(): { [key: string]: any } {
    return {
      black: DescribeBizTypeImageLibResponseBodyBlack,
      requestId: 'string',
      review: DescribeBizTypeImageLibResponseBodyReview,
      white: DescribeBizTypeImageLibResponseBodyWhite,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeImageLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBizTypeImageLibResponseBody;
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
      body: DescribeBizTypeImageLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeSettingRequest extends $tea.Model {
  bizTypeName?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypeName: 'BizTypeName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeSettingResponseBody extends $tea.Model {
  ad?: DescribeBizTypeSettingResponseBodyAd;
  antispam?: DescribeBizTypeSettingResponseBodyAntispam;
  live?: DescribeBizTypeSettingResponseBodyLive;
  porn?: DescribeBizTypeSettingResponseBodyPorn;
  requestId?: string;
  terrorism?: DescribeBizTypeSettingResponseBodyTerrorism;
  static names(): { [key: string]: string } {
    return {
      ad: 'Ad',
      antispam: 'Antispam',
      live: 'Live',
      porn: 'Porn',
      requestId: 'RequestId',
      terrorism: 'Terrorism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ad: DescribeBizTypeSettingResponseBodyAd,
      antispam: DescribeBizTypeSettingResponseBodyAntispam,
      live: DescribeBizTypeSettingResponseBodyLive,
      porn: DescribeBizTypeSettingResponseBodyPorn,
      requestId: 'string',
      terrorism: DescribeBizTypeSettingResponseBodyTerrorism,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBizTypeSettingResponseBody;
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
      body: DescribeBizTypeSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeTextLibRequest extends $tea.Model {
  bizTypeName?: string;
  resourceType?: string;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypeName: 'BizTypeName',
      resourceType: 'ResourceType',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeName: 'string',
      resourceType: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeTextLibResponseBody extends $tea.Model {
  black?: DescribeBizTypeTextLibResponseBodyBlack;
  ignore?: DescribeBizTypeTextLibResponseBodyIgnore;
  requestId?: string;
  review?: DescribeBizTypeTextLibResponseBodyReview;
  white?: DescribeBizTypeTextLibResponseBodyWhite;
  static names(): { [key: string]: string } {
    return {
      black: 'Black',
      ignore: 'Ignore',
      requestId: 'RequestId',
      review: 'Review',
      white: 'White',
    };
  }

  static types(): { [key: string]: any } {
    return {
      black: DescribeBizTypeTextLibResponseBodyBlack,
      ignore: DescribeBizTypeTextLibResponseBodyIgnore,
      requestId: 'string',
      review: DescribeBizTypeTextLibResponseBodyReview,
      white: DescribeBizTypeTextLibResponseBodyWhite,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeTextLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBizTypeTextLibResponseBody;
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
      body: DescribeBizTypeTextLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypesRequest extends $tea.Model {
  importFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      importFlag: 'ImportFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importFlag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypesResponseBody extends $tea.Model {
  bizTypeList?: string[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bizTypeList: 'BizTypeList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBizTypesResponseBody;
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
      body: DescribeBizTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudMonitorServicesRequest extends $tea.Model {
  page?: string;
  pageSize?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'string',
      pageSize: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudMonitorServicesResponseBody extends $tea.Model {
  items?: string[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudMonitorServicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCloudMonitorServicesResponseBody;
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
      body: DescribeCloudMonitorServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomOcrTemplateRequest extends $tea.Model {
  ids?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomOcrTemplateResponseBody extends $tea.Model {
  ocrTemplateList?: DescribeCustomOcrTemplateResponseBodyOcrTemplateList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ocrTemplateList: 'OcrTemplateList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ocrTemplateList: { 'type': 'array', 'itemType': DescribeCustomOcrTemplateResponseBodyOcrTemplateList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomOcrTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCustomOcrTemplateResponseBody;
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
      body: DescribeCustomOcrTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageFromLibRequest extends $tea.Model {
  currentPage?: number;
  endDate?: string;
  id?: number;
  imageLibId?: number;
  modelId?: number;
  pageSize?: number;
  sourceIp?: string;
  startDate?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      id: 'Id',
      imageLibId: 'ImageLibId',
      modelId: 'ModelId',
      pageSize: 'PageSize',
      sourceIp: 'SourceIp',
      startDate: 'StartDate',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      id: 'number',
      imageLibId: 'number',
      modelId: 'number',
      pageSize: 'number',
      sourceIp: 'string',
      startDate: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageFromLibResponseBody extends $tea.Model {
  currentPage?: number;
  imageFromLibList?: DescribeImageFromLibResponseBodyImageFromLibList[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      imageFromLibList: 'ImageFromLibList',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      imageFromLibList: { 'type': 'array', 'itemType': DescribeImageFromLibResponseBodyImageFromLibList },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageFromLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeImageFromLibResponseBody;
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
      body: DescribeImageFromLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageLibRequest extends $tea.Model {
  serviceModule?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      serviceModule: 'ServiceModule',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceModule: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageLibResponseBody extends $tea.Model {
  imageLibList?: DescribeImageLibResponseBodyImageLibList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageLibList: 'ImageLibList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageLibList: { 'type': 'array', 'itemType': DescribeImageLibResponseBodyImageLibList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeImageLibResponseBody;
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
      body: DescribeImageLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageUploadInfoRequest extends $tea.Model {
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageUploadInfoResponseBody extends $tea.Model {
  accessid?: string;
  expire?: number;
  folder?: string;
  host?: string;
  policy?: string;
  requestId?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessid: 'Accessid',
      expire: 'Expire',
      folder: 'Folder',
      host: 'Host',
      policy: 'Policy',
      requestId: 'RequestId',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessid: 'string',
      expire: 'number',
      folder: 'string',
      host: 'string',
      policy: 'string',
      requestId: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageUploadInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeImageUploadInfoResponseBody;
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
      body: DescribeImageUploadInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeywordRequest extends $tea.Model {
  currentPage?: number;
  keyword?: string;
  keywordLibId?: number;
  lang?: string;
  pageSize?: number;
  sourceIp?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      keyword: 'Keyword',
      keywordLibId: 'KeywordLibId',
      lang: 'Lang',
      pageSize: 'PageSize',
      sourceIp: 'SourceIp',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      keyword: 'string',
      keywordLibId: 'number',
      lang: 'string',
      pageSize: 'number',
      sourceIp: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeywordResponseBody extends $tea.Model {
  currentPage?: number;
  keywordList?: DescribeKeywordResponseBodyKeywordList[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      keywordList: 'KeywordList',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      keywordList: { 'type': 'array', 'itemType': DescribeKeywordResponseBodyKeywordList },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeywordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeKeywordResponseBody;
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
      body: DescribeKeywordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeywordLibRequest extends $tea.Model {
  lang?: string;
  serviceModule?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      serviceModule: 'ServiceModule',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      serviceModule: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeywordLibResponseBody extends $tea.Model {
  keywordLibList?: DescribeKeywordLibResponseBodyKeywordLibList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      keywordLibList: 'KeywordLibList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordLibList: { 'type': 'array', 'itemType': DescribeKeywordLibResponseBodyKeywordLibList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeywordLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeKeywordLibResponseBody;
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
      body: DescribeKeywordLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotificationSettingRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotificationSettingResponseBody extends $tea.Model {
  email?: string;
  phone?: string;
  realtimeMessageList?: string[];
  reminderModeList?: string[];
  requestId?: string;
  scheduleMessageTime?: number;
  scheduleMessageTimeZone?: number;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      phone: 'Phone',
      realtimeMessageList: 'RealtimeMessageList',
      reminderModeList: 'ReminderModeList',
      requestId: 'RequestId',
      scheduleMessageTime: 'ScheduleMessageTime',
      scheduleMessageTimeZone: 'ScheduleMessageTimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      phone: 'string',
      realtimeMessageList: { 'type': 'array', 'itemType': 'string' },
      reminderModeList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      scheduleMessageTime: 'number',
      scheduleMessageTimeZone: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotificationSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNotificationSettingResponseBody;
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
      body: DescribeNotificationSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenApiRcpStatsRequest extends $tea.Model {
  bizType?: string;
  endDate?: string;
  resourceType?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      endDate: 'EndDate',
      resourceType: 'ResourceType',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      endDate: 'string',
      resourceType: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenApiRcpStatsResponseBody extends $tea.Model {
  requestId?: string;
  statList?: DescribeOpenApiRcpStatsResponseBodyStatList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statList: 'StatList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statList: { 'type': 'array', 'itemType': DescribeOpenApiRcpStatsResponseBodyStatList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenApiRcpStatsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOpenApiRcpStatsResponseBody;
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
      body: DescribeOpenApiRcpStatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenApiUsageRequest extends $tea.Model {
  endDate?: string;
  resourceType?: string;
  sourceIp?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      resourceType: 'ResourceType',
      sourceIp: 'SourceIp',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      resourceType: 'string',
      sourceIp: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenApiUsageResponseBody extends $tea.Model {
  openApiUsageList?: DescribeOpenApiUsageResponseBodyOpenApiUsageList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      openApiUsageList: 'OpenApiUsageList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openApiUsageList: { 'type': 'array', 'itemType': DescribeOpenApiUsageResponseBodyOpenApiUsageList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenApiUsageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOpenApiUsageResponseBody;
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
      body: DescribeOpenApiUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssCallbackSettingResponseBody extends $tea.Model {
  auditCallback?: boolean;
  callbackSeed?: string;
  callbackUrl?: string;
  requestId?: string;
  scanCallback?: boolean;
  scanCallbackSuggestions?: string[];
  serviceModules?: string[];
  static names(): { [key: string]: string } {
    return {
      auditCallback: 'AuditCallback',
      callbackSeed: 'CallbackSeed',
      callbackUrl: 'CallbackUrl',
      requestId: 'RequestId',
      scanCallback: 'ScanCallback',
      scanCallbackSuggestions: 'ScanCallbackSuggestions',
      serviceModules: 'ServiceModules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditCallback: 'boolean',
      callbackSeed: 'string',
      callbackUrl: 'string',
      requestId: 'string',
      scanCallback: 'boolean',
      scanCallbackSuggestions: { 'type': 'array', 'itemType': 'string' },
      serviceModules: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssCallbackSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOssCallbackSettingResponseBody;
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
      body: DescribeOssCallbackSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBody extends $tea.Model {
  audioAntispamFreezeConfig?: DescribeOssIncrementCheckSettingResponseBodyAudioAntispamFreezeConfig;
  audioAutoFreezeOpened?: boolean;
  audioMaxSize?: number;
  audioScanLimit?: number;
  audioSceneList?: string[];
  autoFreezeType?: string;
  bizType?: string;
  bizTypeTemplate?: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplate;
  bucketConfigList?: DescribeOssIncrementCheckSettingResponseBodyBucketConfigList[];
  callbackId?: string;
  callbackName?: string;
  endTime?: string;
  imageAdFreezeConfig?: DescribeOssIncrementCheckSettingResponseBodyImageAdFreezeConfig;
  imageAutoFreeze?: DescribeOssIncrementCheckSettingResponseBodyImageAutoFreeze;
  imageAutoFreezeOpened?: boolean;
  imageEnableLimit?: boolean;
  imageLiveFreezeConfig?: DescribeOssIncrementCheckSettingResponseBodyImageLiveFreezeConfig;
  imagePornFreezeConfig?: DescribeOssIncrementCheckSettingResponseBodyImagePornFreezeConfig;
  imageScanLimit?: number;
  imageSceneList?: string[];
  imageTerrorismFreezeConfig?: DescribeOssIncrementCheckSettingResponseBodyImageTerrorismFreezeConfig;
  requestId?: string;
  scanImageNoFileType?: boolean;
  startTime?: string;
  videoAdFreezeConfig?: DescribeOssIncrementCheckSettingResponseBodyVideoAdFreezeConfig;
  videoAutoFreezeOpened?: boolean;
  videoAutoFreezeSceneList?: string[];
  videoFrameInterval?: number;
  videoLiveFreezeConfig?: DescribeOssIncrementCheckSettingResponseBodyVideoLiveFreezeConfig;
  videoMaxFrames?: number;
  videoMaxSize?: number;
  videoPornFreezeConfig?: DescribeOssIncrementCheckSettingResponseBodyVideoPornFreezeConfig;
  videoScanLimit?: number;
  videoSceneList?: string[];
  videoTerrorismFreezeConfig?: DescribeOssIncrementCheckSettingResponseBodyVideoTerrorismFreezeConfig;
  videoVoiceAntispamFreezeConfig?: DescribeOssIncrementCheckSettingResponseBodyVideoVoiceAntispamFreezeConfig;
  static names(): { [key: string]: string } {
    return {
      audioAntispamFreezeConfig: 'AudioAntispamFreezeConfig',
      audioAutoFreezeOpened: 'AudioAutoFreezeOpened',
      audioMaxSize: 'AudioMaxSize',
      audioScanLimit: 'AudioScanLimit',
      audioSceneList: 'AudioSceneList',
      autoFreezeType: 'AutoFreezeType',
      bizType: 'BizType',
      bizTypeTemplate: 'BizTypeTemplate',
      bucketConfigList: 'BucketConfigList',
      callbackId: 'CallbackId',
      callbackName: 'CallbackName',
      endTime: 'EndTime',
      imageAdFreezeConfig: 'ImageAdFreezeConfig',
      imageAutoFreeze: 'ImageAutoFreeze',
      imageAutoFreezeOpened: 'ImageAutoFreezeOpened',
      imageEnableLimit: 'ImageEnableLimit',
      imageLiveFreezeConfig: 'ImageLiveFreezeConfig',
      imagePornFreezeConfig: 'ImagePornFreezeConfig',
      imageScanLimit: 'ImageScanLimit',
      imageSceneList: 'ImageSceneList',
      imageTerrorismFreezeConfig: 'ImageTerrorismFreezeConfig',
      requestId: 'RequestId',
      scanImageNoFileType: 'ScanImageNoFileType',
      startTime: 'StartTime',
      videoAdFreezeConfig: 'VideoAdFreezeConfig',
      videoAutoFreezeOpened: 'VideoAutoFreezeOpened',
      videoAutoFreezeSceneList: 'VideoAutoFreezeSceneList',
      videoFrameInterval: 'VideoFrameInterval',
      videoLiveFreezeConfig: 'VideoLiveFreezeConfig',
      videoMaxFrames: 'VideoMaxFrames',
      videoMaxSize: 'VideoMaxSize',
      videoPornFreezeConfig: 'VideoPornFreezeConfig',
      videoScanLimit: 'VideoScanLimit',
      videoSceneList: 'VideoSceneList',
      videoTerrorismFreezeConfig: 'VideoTerrorismFreezeConfig',
      videoVoiceAntispamFreezeConfig: 'VideoVoiceAntispamFreezeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioAntispamFreezeConfig: DescribeOssIncrementCheckSettingResponseBodyAudioAntispamFreezeConfig,
      audioAutoFreezeOpened: 'boolean',
      audioMaxSize: 'number',
      audioScanLimit: 'number',
      audioSceneList: { 'type': 'array', 'itemType': 'string' },
      autoFreezeType: 'string',
      bizType: 'string',
      bizTypeTemplate: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplate,
      bucketConfigList: { 'type': 'array', 'itemType': DescribeOssIncrementCheckSettingResponseBodyBucketConfigList },
      callbackId: 'string',
      callbackName: 'string',
      endTime: 'string',
      imageAdFreezeConfig: DescribeOssIncrementCheckSettingResponseBodyImageAdFreezeConfig,
      imageAutoFreeze: DescribeOssIncrementCheckSettingResponseBodyImageAutoFreeze,
      imageAutoFreezeOpened: 'boolean',
      imageEnableLimit: 'boolean',
      imageLiveFreezeConfig: DescribeOssIncrementCheckSettingResponseBodyImageLiveFreezeConfig,
      imagePornFreezeConfig: DescribeOssIncrementCheckSettingResponseBodyImagePornFreezeConfig,
      imageScanLimit: 'number',
      imageSceneList: { 'type': 'array', 'itemType': 'string' },
      imageTerrorismFreezeConfig: DescribeOssIncrementCheckSettingResponseBodyImageTerrorismFreezeConfig,
      requestId: 'string',
      scanImageNoFileType: 'boolean',
      startTime: 'string',
      videoAdFreezeConfig: DescribeOssIncrementCheckSettingResponseBodyVideoAdFreezeConfig,
      videoAutoFreezeOpened: 'boolean',
      videoAutoFreezeSceneList: { 'type': 'array', 'itemType': 'string' },
      videoFrameInterval: 'number',
      videoLiveFreezeConfig: DescribeOssIncrementCheckSettingResponseBodyVideoLiveFreezeConfig,
      videoMaxFrames: 'number',
      videoMaxSize: 'number',
      videoPornFreezeConfig: DescribeOssIncrementCheckSettingResponseBodyVideoPornFreezeConfig,
      videoScanLimit: 'number',
      videoSceneList: { 'type': 'array', 'itemType': 'string' },
      videoTerrorismFreezeConfig: DescribeOssIncrementCheckSettingResponseBodyVideoTerrorismFreezeConfig,
      videoVoiceAntispamFreezeConfig: DescribeOssIncrementCheckSettingResponseBodyVideoVoiceAntispamFreezeConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOssIncrementCheckSettingResponseBody;
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
      body: DescribeOssIncrementCheckSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementOverviewRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementOverviewResponseBody extends $tea.Model {
  adUnhandleCount?: number;
  audioCount?: number;
  imageCount?: number;
  liveUnhandleCount?: number;
  pornUnhandleCount?: number;
  requestId?: string;
  terrorismUnhandleCount?: number;
  videoCount?: number;
  videoFrameCount?: number;
  voiceAntispamUnhandleCount?: number;
  static names(): { [key: string]: string } {
    return {
      adUnhandleCount: 'AdUnhandleCount',
      audioCount: 'AudioCount',
      imageCount: 'ImageCount',
      liveUnhandleCount: 'LiveUnhandleCount',
      pornUnhandleCount: 'PornUnhandleCount',
      requestId: 'RequestId',
      terrorismUnhandleCount: 'TerrorismUnhandleCount',
      videoCount: 'VideoCount',
      videoFrameCount: 'VideoFrameCount',
      voiceAntispamUnhandleCount: 'VoiceAntispamUnhandleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adUnhandleCount: 'number',
      audioCount: 'number',
      imageCount: 'number',
      liveUnhandleCount: 'number',
      pornUnhandleCount: 'number',
      requestId: 'string',
      terrorismUnhandleCount: 'number',
      videoCount: 'number',
      videoFrameCount: 'number',
      voiceAntispamUnhandleCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementOverviewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOssIncrementOverviewResponseBody;
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
      body: DescribeOssIncrementOverviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementStatsRequest extends $tea.Model {
  endDate?: string;
  lang?: string;
  resourceType?: string;
  scene?: string;
  sourceIp?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      lang: 'Lang',
      resourceType: 'ResourceType',
      scene: 'Scene',
      sourceIp: 'SourceIp',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      lang: 'string',
      resourceType: 'string',
      scene: 'string',
      sourceIp: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementStatsResponseBody extends $tea.Model {
  requestId?: string;
  statList?: DescribeOssIncrementStatsResponseBodyStatList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statList: 'StatList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statList: { 'type': 'array', 'itemType': DescribeOssIncrementStatsResponseBodyStatList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementStatsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOssIncrementStatsResponseBody;
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
      body: DescribeOssIncrementStatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssResultItemsRequest extends $tea.Model {
  bucket?: string;
  currentPage?: number;
  endDate?: string;
  lang?: string;
  maxScore?: number;
  minScore?: number;
  object?: string;
  pageSize?: number;
  queryId?: string;
  resourceType?: string;
  scene?: string;
  sourceIp?: string;
  startDate?: string;
  stock?: boolean;
  stockTaskId?: number;
  suggestion?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      lang: 'Lang',
      maxScore: 'MaxScore',
      minScore: 'MinScore',
      object: 'Object',
      pageSize: 'PageSize',
      queryId: 'QueryId',
      resourceType: 'ResourceType',
      scene: 'Scene',
      sourceIp: 'SourceIp',
      startDate: 'StartDate',
      stock: 'Stock',
      stockTaskId: 'StockTaskId',
      suggestion: 'Suggestion',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      currentPage: 'number',
      endDate: 'string',
      lang: 'string',
      maxScore: 'number',
      minScore: 'number',
      object: 'string',
      pageSize: 'number',
      queryId: 'string',
      resourceType: 'string',
      scene: 'string',
      sourceIp: 'string',
      startDate: 'string',
      stock: 'boolean',
      stockTaskId: 'number',
      suggestion: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssResultItemsResponseBody extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  queryId?: string;
  requestId?: string;
  scanResultList?: DescribeOssResultItemsResponseBodyScanResultList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      queryId: 'QueryId',
      requestId: 'RequestId',
      scanResultList: 'ScanResultList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      queryId: 'string',
      requestId: 'string',
      scanResultList: { 'type': 'array', 'itemType': DescribeOssResultItemsResponseBodyScanResultList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssResultItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOssResultItemsResponseBody;
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
      body: DescribeOssResultItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssStockStatusRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  stockTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      stockTaskId: 'StockTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      stockTaskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssStockStatusResponseBody extends $tea.Model {
  audioAntispamCount?: number;
  audioTotalCount?: number;
  bucketList?: DescribeOssStockStatusResponseBodyBucketList[];
  finishedTime?: string;
  imageAdCount?: number;
  imageLiveCount?: number;
  imagePornCount?: number;
  imageTerrorismCount?: number;
  imageTotalCount?: number;
  requestId?: string;
  resouceTypeList?: string[];
  sceneList?: string[];
  stockStatus?: number;
  videoAdCount?: number;
  videoLiveCount?: number;
  videoPornCount?: number;
  videoTerrorismCount?: number;
  videoTotalCount?: number;
  videoVoiceAntispamCount?: number;
  static names(): { [key: string]: string } {
    return {
      audioAntispamCount: 'AudioAntispamCount',
      audioTotalCount: 'AudioTotalCount',
      bucketList: 'BucketList',
      finishedTime: 'FinishedTime',
      imageAdCount: 'ImageAdCount',
      imageLiveCount: 'ImageLiveCount',
      imagePornCount: 'ImagePornCount',
      imageTerrorismCount: 'ImageTerrorismCount',
      imageTotalCount: 'ImageTotalCount',
      requestId: 'RequestId',
      resouceTypeList: 'ResouceTypeList',
      sceneList: 'SceneList',
      stockStatus: 'StockStatus',
      videoAdCount: 'VideoAdCount',
      videoLiveCount: 'VideoLiveCount',
      videoPornCount: 'VideoPornCount',
      videoTerrorismCount: 'VideoTerrorismCount',
      videoTotalCount: 'VideoTotalCount',
      videoVoiceAntispamCount: 'VideoVoiceAntispamCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioAntispamCount: 'number',
      audioTotalCount: 'number',
      bucketList: { 'type': 'array', 'itemType': DescribeOssStockStatusResponseBodyBucketList },
      finishedTime: 'string',
      imageAdCount: 'number',
      imageLiveCount: 'number',
      imagePornCount: 'number',
      imageTerrorismCount: 'number',
      imageTotalCount: 'number',
      requestId: 'string',
      resouceTypeList: { 'type': 'array', 'itemType': 'string' },
      sceneList: { 'type': 'array', 'itemType': 'string' },
      stockStatus: 'number',
      videoAdCount: 'number',
      videoLiveCount: 'number',
      videoPornCount: 'number',
      videoTerrorismCount: 'number',
      videoTotalCount: 'number',
      videoVoiceAntispamCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssStockStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOssStockStatusResponseBody;
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
      body: DescribeOssStockStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSdkUrlRequest extends $tea.Model {
  debug?: boolean;
  id?: number;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      debug: 'Debug',
      id: 'Id',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debug: 'boolean',
      id: 'number',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSdkUrlResponseBody extends $tea.Model {
  requestId?: string;
  sdkUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sdkUrl: 'SdkUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sdkUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSdkUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSdkUrlResponseBody;
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
      body: DescribeSdkUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdatePackageResultRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdatePackageResultResponseBody extends $tea.Model {
  appInfo?: DescribeUpdatePackageResultResponseBodyAppInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appInfo: 'AppInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfo: DescribeUpdatePackageResultResponseBodyAppInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdatePackageResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUpdatePackageResultResponseBody;
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
      body: DescribeUpdatePackageResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUploadInfoRequest extends $tea.Model {
  biz?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUploadInfoResponseBody extends $tea.Model {
  accessid?: string;
  expire?: number;
  folder?: string;
  host?: string;
  policy?: string;
  requestId?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessid: 'Accessid',
      expire: 'Expire',
      folder: 'Folder',
      host: 'Host',
      policy: 'Policy',
      requestId: 'RequestId',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessid: 'string',
      expire: 'number',
      folder: 'string',
      host: 'string',
      policy: 'string',
      requestId: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUploadInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUploadInfoResponseBody;
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
      body: DescribeUploadInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageBillRequest extends $tea.Model {
  currentPage?: number;
  day?: string;
  pageSize?: number;
  totalCount?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      day: 'Day',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      day: 'string',
      pageSize: 'number',
      totalCount: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageBillResponseBody extends $tea.Model {
  billList?: DescribeUsageBillResponseBodyBillList[];
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      billList: 'BillList',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billList: { 'type': 'array', 'itemType': DescribeUsageBillResponseBodyBillList },
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageBillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUsageBillResponseBody;
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
      body: DescribeUsageBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBizTypesRequest extends $tea.Model {
  customized?: boolean;
  static names(): { [key: string]: string } {
    return {
      customized: 'Customized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customized: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBizTypesResponseBody extends $tea.Model {
  bizTypeList?: DescribeUserBizTypesResponseBodyBizTypeList[];
  bizTypeListImport?: DescribeUserBizTypesResponseBodyBizTypeListImport[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypeList: 'BizTypeList',
      bizTypeListImport: 'BizTypeListImport',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeList: { 'type': 'array', 'itemType': DescribeUserBizTypesResponseBodyBizTypeList },
      bizTypeListImport: { 'type': 'array', 'itemType': DescribeUserBizTypesResponseBodyBizTypeListImport },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBizTypesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserBizTypesResponseBody;
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
      body: DescribeUserBizTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserStatusRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserStatusResponseBody extends $tea.Model {
  agreeChannel?: number;
  buyed?: boolean;
  inDept?: boolean;
  openApiBeginTime?: string;
  openApiUsed?: boolean;
  ossCheckStatus?: string;
  ossVideoSizeLimit?: number;
  requestId?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      agreeChannel: 'AgreeChannel',
      buyed: 'Buyed',
      inDept: 'InDept',
      openApiBeginTime: 'OpenApiBeginTime',
      openApiUsed: 'OpenApiUsed',
      ossCheckStatus: 'OssCheckStatus',
      ossVideoSizeLimit: 'OssVideoSizeLimit',
      requestId: 'RequestId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreeChannel: 'number',
      buyed: 'boolean',
      inDept: 'boolean',
      openApiBeginTime: 'string',
      openApiUsed: 'boolean',
      ossCheckStatus: 'string',
      ossVideoSizeLimit: 'number',
      requestId: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserStatusResponseBody;
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
      body: DescribeUserStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeViewContentRequest extends $tea.Model {
  auditResult?: string;
  bizType?: string;
  currentPage?: number;
  dataId?: string;
  endDate?: string;
  imageId?: string;
  keyword?: string;
  keywordId?: string;
  label?: string;
  libType?: string;
  pageSize?: number;
  resourceType?: string;
  scene?: string;
  startDate?: string;
  suggestion?: string;
  taskId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      auditResult: 'AuditResult',
      bizType: 'BizType',
      currentPage: 'CurrentPage',
      dataId: 'DataId',
      endDate: 'EndDate',
      imageId: 'ImageId',
      keyword: 'Keyword',
      keywordId: 'KeywordId',
      label: 'Label',
      libType: 'LibType',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      scene: 'Scene',
      startDate: 'StartDate',
      suggestion: 'Suggestion',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditResult: 'string',
      bizType: 'string',
      currentPage: 'number',
      dataId: 'string',
      endDate: 'string',
      imageId: 'string',
      keyword: 'string',
      keywordId: 'string',
      label: 'string',
      libType: 'string',
      pageSize: 'number',
      resourceType: 'string',
      scene: 'string',
      startDate: 'string',
      suggestion: 'string',
      taskId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeViewContentResponseBody extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  viewContentList?: DescribeViewContentResponseBodyViewContentList[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      viewContentList: 'ViewContentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      viewContentList: { 'type': 'array', 'itemType': DescribeViewContentResponseBodyViewContentList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeViewContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeViewContentResponseBody;
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
      body: DescribeViewContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteIndexPageBaselineRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteIndexPageBaselineResponseBody extends $tea.Model {
  baseLineStatus?: string;
  createTime?: string;
  requestId?: string;
  snapshot?: string;
  static names(): { [key: string]: string } {
    return {
      baseLineStatus: 'BaseLineStatus',
      createTime: 'CreateTime',
      requestId: 'RequestId',
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseLineStatus: 'string',
      createTime: 'string',
      requestId: 'string',
      snapshot: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteIndexPageBaselineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebsiteIndexPageBaselineResponseBody;
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
      body: DescribeWebsiteIndexPageBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteInstanceRequest extends $tea.Model {
  currentPage?: number;
  instanceId?: string;
  lang?: string;
  pageSize?: number;
  sourceIp?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      lang: 'Lang',
      pageSize: 'PageSize',
      sourceIp: 'SourceIp',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceId: 'string',
      lang: 'string',
      pageSize: 'number',
      sourceIp: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteInstanceResponseBody extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  websiteInstanceList?: DescribeWebsiteInstanceResponseBodyWebsiteInstanceList[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      websiteInstanceList: 'WebsiteInstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      websiteInstanceList: { 'type': 'array', 'itemType': DescribeWebsiteInstanceResponseBodyWebsiteInstanceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebsiteInstanceResponseBody;
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
      body: DescribeWebsiteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteInstanceIdRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteInstanceIdResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  websiteInstanceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      websiteInstanceIdList: 'WebsiteInstanceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      websiteInstanceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteInstanceIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebsiteInstanceIdResponseBody;
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
      body: DescribeWebsiteInstanceIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteInstanceKeyUrlRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteInstanceKeyUrlResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  websiteInstanceKeyUrlList?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      websiteInstanceKeyUrlList: 'WebsiteInstanceKeyUrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      websiteInstanceKeyUrlList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteInstanceKeyUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebsiteInstanceKeyUrlResponseBody;
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
      body: DescribeWebsiteInstanceKeyUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteScanResultRequest extends $tea.Model {
  currentPage?: number;
  domain?: string;
  handleStatus?: string;
  label?: string;
  lang?: string;
  pageSize?: number;
  siteUrl?: string;
  sourceIp?: string;
  subServiceModule?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      domain: 'Domain',
      handleStatus: 'HandleStatus',
      label: 'Label',
      lang: 'Lang',
      pageSize: 'PageSize',
      siteUrl: 'SiteUrl',
      sourceIp: 'SourceIp',
      subServiceModule: 'SubServiceModule',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      domain: 'string',
      handleStatus: 'string',
      label: 'string',
      lang: 'string',
      pageSize: 'number',
      siteUrl: 'string',
      sourceIp: 'string',
      subServiceModule: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteScanResultResponseBody extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  websiteScanResultList?: DescribeWebsiteScanResultResponseBodyWebsiteScanResultList[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      websiteScanResultList: 'WebsiteScanResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      websiteScanResultList: { 'type': 'array', 'itemType': DescribeWebsiteScanResultResponseBodyWebsiteScanResultList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteScanResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebsiteScanResultResponseBody;
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
      body: DescribeWebsiteScanResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteScanResultDetailRequest extends $tea.Model {
  id?: number;
  lang?: string;
  resourceType?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lang: 'Lang',
      resourceType: 'ResourceType',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      lang: 'string',
      resourceType: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteScanResultDetailResponseBody extends $tea.Model {
  baseline?: string;
  content?: string;
  hitKeywords?: string[];
  imageScanResults?: DescribeWebsiteScanResultDetailResponseBodyImageScanResults[];
  requestId?: string;
  resourceType?: string;
  tamperedSource?: string;
  static names(): { [key: string]: string } {
    return {
      baseline: 'Baseline',
      content: 'Content',
      hitKeywords: 'HitKeywords',
      imageScanResults: 'ImageScanResults',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
      tamperedSource: 'TamperedSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseline: 'string',
      content: 'string',
      hitKeywords: { 'type': 'array', 'itemType': 'string' },
      imageScanResults: { 'type': 'array', 'itemType': DescribeWebsiteScanResultDetailResponseBodyImageScanResults },
      requestId: 'string',
      resourceType: 'string',
      tamperedSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteScanResultDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebsiteScanResultDetailResponseBody;
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
      body: DescribeWebsiteScanResultDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteStatRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteStatResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  websiteStatList?: DescribeWebsiteStatResponseBodyWebsiteStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      websiteStatList: 'WebsiteStatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      websiteStatList: { 'type': 'array', 'itemType': DescribeWebsiteStatResponseBodyWebsiteStatList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteStatResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebsiteStatResponseBody;
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
      body: DescribeWebsiteStatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteVerifyInfoRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteVerifyInfoResponseBody extends $tea.Model {
  cname?: string;
  domain?: string;
  hostFile?: string;
  indexPage?: string;
  protocol?: string;
  requestId?: string;
  verifyMethod?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
      hostFile: 'HostFile',
      indexPage: 'IndexPage',
      protocol: 'Protocol',
      requestId: 'RequestId',
      verifyMethod: 'VerifyMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
      hostFile: 'string',
      indexPage: 'string',
      protocol: 'string',
      requestId: 'string',
      verifyMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteVerifyInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebsiteVerifyInfoResponseBody;
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
      body: DescribeWebsiteVerifyInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportKeywordsRequest extends $tea.Model {
  keywordLibId?: number;
  static names(): { [key: string]: string } {
    return {
      keywordLibId: 'KeywordLibId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordLibId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportKeywordsResponseBody extends $tea.Model {
  downloadUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportKeywordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportKeywordsResponseBody;
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
      body: ExportKeywordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportOpenApiRcpStatsRequest extends $tea.Model {
  bizType?: string;
  endDate?: string;
  resourceType?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      endDate: 'EndDate',
      resourceType: 'ResourceType',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      endDate: 'string',
      resourceType: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportOpenApiRcpStatsResponseBody extends $tea.Model {
  downloadUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportOpenApiRcpStatsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportOpenApiRcpStatsResponseBody;
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
      body: ExportOpenApiRcpStatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportOssResultRequest extends $tea.Model {
  bucket?: string;
  currentPage?: number;
  endDate?: string;
  lang?: string;
  maxScore?: number;
  minScore?: number;
  pageSize?: number;
  resourceType?: string;
  scene?: string;
  sourceIp?: string;
  startDate?: string;
  stock?: boolean;
  stockTaskId?: number;
  suggestion?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      lang: 'Lang',
      maxScore: 'MaxScore',
      minScore: 'MinScore',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      scene: 'Scene',
      sourceIp: 'SourceIp',
      startDate: 'StartDate',
      stock: 'Stock',
      stockTaskId: 'StockTaskId',
      suggestion: 'Suggestion',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      currentPage: 'number',
      endDate: 'string',
      lang: 'string',
      maxScore: 'number',
      minScore: 'number',
      pageSize: 'number',
      resourceType: 'string',
      scene: 'string',
      sourceIp: 'string',
      startDate: 'string',
      stock: 'boolean',
      stockTaskId: 'number',
      suggestion: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportOssResultResponseBody extends $tea.Model {
  fileUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportOssResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportOssResultResponseBody;
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
      body: ExportOssResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditItemDetailRequest extends $tea.Model {
  taskId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditItemDetailResponseBody extends $tea.Model {
  apiResult?: string;
  apiRiskType?: string;
  apiTs?: string;
  newUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiResult: 'ApiResult',
      apiRiskType: 'ApiRiskType',
      apiTs: 'ApiTs',
      newUrl: 'NewUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiResult: 'string',
      apiRiskType: 'string',
      apiTs: 'string',
      newUrl: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditItemDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAuditItemDetailResponseBody;
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
      body: GetAuditItemDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditItemListRequest extends $tea.Model {
  bizType?: string;
  currentPage?: number;
  customResult?: string;
  customRiskType?: string;
  dataId?: string;
  endDate?: string;
  pageSize?: number;
  rcpResult?: string;
  rcpRiskType?: string;
  startDate?: string;
  taskId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      currentPage: 'CurrentPage',
      customResult: 'CustomResult',
      customRiskType: 'CustomRiskType',
      dataId: 'DataId',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      rcpResult: 'RcpResult',
      rcpRiskType: 'RcpRiskType',
      startDate: 'StartDate',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      currentPage: 'number',
      customResult: 'string',
      customRiskType: 'string',
      dataId: 'string',
      endDate: 'string',
      pageSize: 'number',
      rcpResult: 'string',
      rcpRiskType: 'string',
      startDate: 'string',
      taskId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditItemListResponseBody extends $tea.Model {
  currentPage?: number;
  items?: GetAuditItemListResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': GetAuditItemListResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditItemListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAuditItemListResponseBody;
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
      body: GetAuditItemListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditUserConfResponseBody extends $tea.Model {
  customAudit?: boolean;
  rcpLabels?: { [key: string]: string[] };
  requestId?: string;
  userLabels?: { [key: string]: string[] };
  static names(): { [key: string]: string } {
    return {
      customAudit: 'CustomAudit',
      rcpLabels: 'RcpLabels',
      requestId: 'RequestId',
      userLabels: 'UserLabels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAudit: 'boolean',
      rcpLabels: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      requestId: 'string',
      userLabels: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditUserConfResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAuditUserConfResponseBody;
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
      body: GetAuditUserConfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeywordsRequest extends $tea.Model {
  keywordLibId?: number;
  keywordsObject?: string;
  static names(): { [key: string]: string } {
    return {
      keywordLibId: 'KeywordLibId',
      keywordsObject: 'KeywordsObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordLibId: 'number',
      keywordsObject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeywordsResponseBody extends $tea.Model {
  invalidKeywordList?: string[];
  requestId?: string;
  successCount?: number;
  validKeywordList?: string[];
  static names(): { [key: string]: string } {
    return {
      invalidKeywordList: 'InvalidKeywordList',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
      validKeywordList: 'validKeywordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidKeywordList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      successCount: 'number',
      validKeywordList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeywordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportKeywordsResponseBody;
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
      body: ImportKeywordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MarkAuditContentRequest extends $tea.Model {
  auditIllegalReasons?: string;
  auditResult?: string;
  bizTypes?: string;
  ids?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      auditIllegalReasons: 'AuditIllegalReasons',
      auditResult: 'AuditResult',
      bizTypes: 'BizTypes',
      ids: 'Ids',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditIllegalReasons: 'string',
      auditResult: 'string',
      bizTypes: 'string',
      ids: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MarkAuditContentResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MarkAuditContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MarkAuditContentResponseBody;
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
      body: MarkAuditContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MarkAuditContentItemRequest extends $tea.Model {
  auditIllegalReasons?: string;
  auditResult?: string;
  bizTypes?: string;
  ids?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      auditIllegalReasons: 'AuditIllegalReasons',
      auditResult: 'AuditResult',
      bizTypes: 'BizTypes',
      ids: 'Ids',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditIllegalReasons: 'string',
      auditResult: 'string',
      bizTypes: 'string',
      ids: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MarkAuditContentItemResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MarkAuditContentItemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MarkAuditContentItemResponseBody;
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
      body: MarkAuditContentItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MarkOssResultRequest extends $tea.Model {
  ids?: string;
  lang?: string;
  operation?: string;
  resourceType?: string;
  scene?: string;
  sourceIp?: string;
  stock?: boolean;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      lang: 'Lang',
      operation: 'Operation',
      resourceType: 'ResourceType',
      scene: 'Scene',
      sourceIp: 'SourceIp',
      stock: 'Stock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      lang: 'string',
      operation: 'string',
      resourceType: 'string',
      scene: 'string',
      sourceIp: 'string',
      stock: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MarkOssResultResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MarkOssResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MarkOssResultResponseBody;
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
      body: MarkOssResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MarkWebsiteScanResultRequest extends $tea.Model {
  ids?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MarkWebsiteScanResultResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MarkWebsiteScanResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MarkWebsiteScanResultResponseBody;
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
      body: MarkWebsiteScanResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundCdiBagRequest extends $tea.Model {
  instanceId?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundCdiBagResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundCdiBagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefundCdiBagResponseBody;
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
      body: RefundCdiBagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundCdiBaseBagRequest extends $tea.Model {
  instanceId?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundCdiBaseBagResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundCdiBaseBagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefundCdiBaseBagResponseBody;
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
      body: RefundCdiBaseBagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundWebSiteInstanceRequest extends $tea.Model {
  instanceId?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundWebSiteInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundWebSiteInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefundWebSiteInstanceResponseBody;
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
      body: RefundWebSiteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewWebSiteInstanceRequest extends $tea.Model {
  clientToken?: string;
  commodityCode?: string;
  duration?: number;
  instanceId?: string;
  orderNum?: number;
  orderType?: string;
  ownerId?: number;
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodityCode: 'CommodityCode',
      duration: 'Duration',
      instanceId: 'InstanceId',
      orderNum: 'OrderNum',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
      pricingCycle: 'PricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodityCode: 'string',
      duration: 'number',
      instanceId: 'string',
      orderNum: 'number',
      orderType: 'string',
      ownerId: 'number',
      pricingCycle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewWebSiteInstanceResponseBody extends $tea.Model {
  code?: string;
  instanceId?: string;
  instanceIds?: RenewWebSiteInstanceResponseBodyInstanceIds;
  message?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      instanceIds: 'InstanceIds',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      instanceIds: RenewWebSiteInstanceResponseBodyInstanceIds,
      message: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewWebSiteInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewWebSiteInstanceResponseBody;
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
      body: RenewWebSiteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerifyCodeToEmailRequest extends $tea.Model {
  email?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerifyCodeToEmailResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerifyCodeToEmailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendVerifyCodeToEmailResponseBody;
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
      body: SendVerifyCodeToEmailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerifyCodeToPhoneRequest extends $tea.Model {
  lang?: string;
  phone?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      phone: 'Phone',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      phone: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerifyCodeToPhoneResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerifyCodeToPhoneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendVerifyCodeToPhoneResponseBody;
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
      body: SendVerifyCodeToPhoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendWebsiteFeedbackRequest extends $tea.Model {
  feedback?: string;
  lang?: string;
  sourceIp?: string;
  urls?: string;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      urls: 'Urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: 'string',
      lang: 'string',
      sourceIp: 'string',
      urls: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendWebsiteFeedbackResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendWebsiteFeedbackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendWebsiteFeedbackResponseBody;
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
      body: SendWebsiteFeedbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppPackageRequest extends $tea.Model {
  debug?: boolean;
  id?: number;
  lang?: string;
  packageUrl?: string;
  platform?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      debug: 'Debug',
      id: 'Id',
      lang: 'Lang',
      packageUrl: 'PackageUrl',
      platform: 'Platform',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debug: 'boolean',
      id: 'number',
      lang: 'string',
      packageUrl: 'string',
      platform: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppPackageResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppPackageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAppPackageResponseBody;
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
      body: UpdateAppPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuditCallbackRequest extends $tea.Model {
  callback?: string;
  cryptType?: number;
  seed?: string;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      cryptType: 'CryptType',
      seed: 'Seed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callback: 'string',
      cryptType: 'number',
      seed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuditCallbackResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuditCallbackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAuditCallbackResponseBody;
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
      body: UpdateAuditCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuditRangeRequest extends $tea.Model {
  auditRange?: string;
  static names(): { [key: string]: string } {
    return {
      auditRange: 'AuditRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuditRangeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuditRangeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAuditRangeResponseBody;
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
      body: UpdateAuditRangeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuditSettingRequest extends $tea.Model {
  auditRange?: string;
  callback?: string;
  seed?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      auditRange: 'AuditRange',
      callback: 'Callback',
      seed: 'Seed',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRange: 'string',
      callback: 'string',
      seed: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuditSettingResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuditSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAuditSettingResponseBody;
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
      body: UpdateAuditSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizTypeRequest extends $tea.Model {
  bizTypeName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypeName: 'BizTypeName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizTypeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBizTypeResponseBody;
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
      body: UpdateBizTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizTypeImageLibRequest extends $tea.Model {
  bizTypeName?: string;
  black?: string;
  resourceType?: string;
  review?: string;
  scene?: string;
  white?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypeName: 'BizTypeName',
      black: 'Black',
      resourceType: 'ResourceType',
      review: 'Review',
      scene: 'Scene',
      white: 'White',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeName: 'string',
      black: 'string',
      resourceType: 'string',
      review: 'string',
      scene: 'string',
      white: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizTypeImageLibResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizTypeImageLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBizTypeImageLibResponseBody;
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
      body: UpdateBizTypeImageLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizTypeSettingRequest extends $tea.Model {
  ad?: string;
  antispam?: string;
  bizTypeName?: string;
  live?: string;
  porn?: string;
  resourceType?: string;
  terrorism?: string;
  static names(): { [key: string]: string } {
    return {
      ad: 'Ad',
      antispam: 'Antispam',
      bizTypeName: 'BizTypeName',
      live: 'Live',
      porn: 'Porn',
      resourceType: 'ResourceType',
      terrorism: 'Terrorism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ad: 'string',
      antispam: 'string',
      bizTypeName: 'string',
      live: 'string',
      porn: 'string',
      resourceType: 'string',
      terrorism: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizTypeSettingResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizTypeSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBizTypeSettingResponseBody;
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
      body: UpdateBizTypeSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizTypeTextLibRequest extends $tea.Model {
  bizTypeName?: string;
  black?: string;
  ignore?: string;
  resourceType?: string;
  review?: string;
  scene?: string;
  white?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypeName: 'BizTypeName',
      black: 'Black',
      ignore: 'Ignore',
      resourceType: 'ResourceType',
      review: 'Review',
      scene: 'Scene',
      white: 'White',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypeName: 'string',
      black: 'string',
      ignore: 'string',
      resourceType: 'string',
      review: 'string',
      scene: 'string',
      white: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizTypeTextLibResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizTypeTextLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBizTypeTextLibResponseBody;
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
      body: UpdateBizTypeTextLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomOcrTemplateRequest extends $tea.Model {
  id?: number;
  name?: string;
  recognizeArea?: string;
  referArea?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      recognizeArea: 'RecognizeArea',
      referArea: 'ReferArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      recognizeArea: 'string',
      referArea: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomOcrTemplateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomOcrTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCustomOcrTemplateResponseBody;
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
      body: UpdateCustomOcrTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKeywordLibRequest extends $tea.Model {
  bizTypes?: string;
  enable?: boolean;
  id?: number;
  lang?: string;
  matchMode?: string;
  name?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypes: 'BizTypes',
      enable: 'Enable',
      id: 'Id',
      lang: 'Lang',
      matchMode: 'MatchMode',
      name: 'Name',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypes: 'string',
      enable: 'boolean',
      id: 'number',
      lang: 'string',
      matchMode: 'string',
      name: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKeywordLibResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKeywordLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateKeywordLibResponseBody;
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
      body: UpdateKeywordLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNotificationSettingRequest extends $tea.Model {
  lang?: string;
  realtimeMessageList?: string;
  reminderModeList?: string;
  scheduleMessageTime?: number;
  scheduleMessageTimeZone?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      realtimeMessageList: 'RealtimeMessageList',
      reminderModeList: 'ReminderModeList',
      scheduleMessageTime: 'ScheduleMessageTime',
      scheduleMessageTimeZone: 'ScheduleMessageTimeZone',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      realtimeMessageList: 'string',
      reminderModeList: 'string',
      scheduleMessageTime: 'number',
      scheduleMessageTimeZone: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNotificationSettingResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNotificationSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateNotificationSettingResponseBody;
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
      body: UpdateNotificationSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOssCallbackSettingRequest extends $tea.Model {
  auditCallback?: boolean;
  callbackSeed?: string;
  callbackUrl?: string;
  scanCallback?: boolean;
  scanCallbackSuggestions?: string;
  serviceModules?: string;
  static names(): { [key: string]: string } {
    return {
      auditCallback: 'AuditCallback',
      callbackSeed: 'CallbackSeed',
      callbackUrl: 'CallbackUrl',
      scanCallback: 'ScanCallback',
      scanCallbackSuggestions: 'ScanCallbackSuggestions',
      serviceModules: 'ServiceModules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditCallback: 'boolean',
      callbackSeed: 'string',
      callbackUrl: 'string',
      scanCallback: 'boolean',
      scanCallbackSuggestions: 'string',
      serviceModules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOssCallbackSettingResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOssCallbackSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateOssCallbackSettingResponseBody;
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
      body: UpdateOssCallbackSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOssIncrementCheckSettingRequest extends $tea.Model {
  audioAntispamFreezeConfig?: string;
  audioAutoFreezeOpened?: boolean;
  audioMaxSize?: number;
  audioScanLimit?: number;
  audioSceneList?: string;
  autoFreezeType?: string;
  bizType?: string;
  bucketConfigList?: string;
  callbackId?: string;
  imageAdFreezeConfig?: string;
  imageAutoFreeze?: string;
  imageAutoFreezeOpened?: boolean;
  imageLiveFreezeConfig?: string;
  imagePornFreezeConfig?: string;
  imageScanLimit?: string;
  imageSceneList?: string;
  imageTerrorismFreezeConfig?: string;
  lang?: string;
  scanImageNoFileType?: boolean;
  sourceIp?: string;
  videoAdFreezeConfig?: string;
  videoAutoFreezeOpened?: boolean;
  videoAutoFreezeSceneList?: string;
  videoFrameInterval?: number;
  videoLiveFreezeConfig?: string;
  videoMaxFrames?: number;
  videoMaxSize?: number;
  videoPornFreezeConfig?: string;
  videoScanLimit?: number;
  videoSceneList?: string;
  videoTerrorismFreezeConfig?: string;
  videoVoiceAntispamFreezeConfig?: string;
  static names(): { [key: string]: string } {
    return {
      audioAntispamFreezeConfig: 'AudioAntispamFreezeConfig',
      audioAutoFreezeOpened: 'AudioAutoFreezeOpened',
      audioMaxSize: 'AudioMaxSize',
      audioScanLimit: 'AudioScanLimit',
      audioSceneList: 'AudioSceneList',
      autoFreezeType: 'AutoFreezeType',
      bizType: 'BizType',
      bucketConfigList: 'BucketConfigList',
      callbackId: 'CallbackId',
      imageAdFreezeConfig: 'ImageAdFreezeConfig',
      imageAutoFreeze: 'ImageAutoFreeze',
      imageAutoFreezeOpened: 'ImageAutoFreezeOpened',
      imageLiveFreezeConfig: 'ImageLiveFreezeConfig',
      imagePornFreezeConfig: 'ImagePornFreezeConfig',
      imageScanLimit: 'ImageScanLimit',
      imageSceneList: 'ImageSceneList',
      imageTerrorismFreezeConfig: 'ImageTerrorismFreezeConfig',
      lang: 'Lang',
      scanImageNoFileType: 'ScanImageNoFileType',
      sourceIp: 'SourceIp',
      videoAdFreezeConfig: 'VideoAdFreezeConfig',
      videoAutoFreezeOpened: 'VideoAutoFreezeOpened',
      videoAutoFreezeSceneList: 'VideoAutoFreezeSceneList',
      videoFrameInterval: 'VideoFrameInterval',
      videoLiveFreezeConfig: 'VideoLiveFreezeConfig',
      videoMaxFrames: 'VideoMaxFrames',
      videoMaxSize: 'VideoMaxSize',
      videoPornFreezeConfig: 'VideoPornFreezeConfig',
      videoScanLimit: 'VideoScanLimit',
      videoSceneList: 'VideoSceneList',
      videoTerrorismFreezeConfig: 'VideoTerrorismFreezeConfig',
      videoVoiceAntispamFreezeConfig: 'VideoVoiceAntispamFreezeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioAntispamFreezeConfig: 'string',
      audioAutoFreezeOpened: 'boolean',
      audioMaxSize: 'number',
      audioScanLimit: 'number',
      audioSceneList: 'string',
      autoFreezeType: 'string',
      bizType: 'string',
      bucketConfigList: 'string',
      callbackId: 'string',
      imageAdFreezeConfig: 'string',
      imageAutoFreeze: 'string',
      imageAutoFreezeOpened: 'boolean',
      imageLiveFreezeConfig: 'string',
      imagePornFreezeConfig: 'string',
      imageScanLimit: 'string',
      imageSceneList: 'string',
      imageTerrorismFreezeConfig: 'string',
      lang: 'string',
      scanImageNoFileType: 'boolean',
      sourceIp: 'string',
      videoAdFreezeConfig: 'string',
      videoAutoFreezeOpened: 'boolean',
      videoAutoFreezeSceneList: 'string',
      videoFrameInterval: 'number',
      videoLiveFreezeConfig: 'string',
      videoMaxFrames: 'number',
      videoMaxSize: 'number',
      videoPornFreezeConfig: 'string',
      videoScanLimit: 'number',
      videoSceneList: 'string',
      videoTerrorismFreezeConfig: 'string',
      videoVoiceAntispamFreezeConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOssIncrementCheckSettingResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOssIncrementCheckSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateOssIncrementCheckSettingResponseBody;
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
      body: UpdateOssIncrementCheckSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOssStockStatusRequest extends $tea.Model {
  audioAutoFreezeSceneList?: string;
  audioMaxSize?: number;
  autoFreezeType?: string;
  bucketConfigList?: string;
  endDate?: string;
  imageAutoFreeze?: string;
  lang?: string;
  operation?: string;
  resourceTypeList?: string;
  sceneList?: string;
  sourceIp?: string;
  startDate?: string;
  videoAutoFreezeSceneList?: string;
  videoFrameInterval?: number;
  videoMaxFrames?: number;
  videoMaxSize?: number;
  static names(): { [key: string]: string } {
    return {
      audioAutoFreezeSceneList: 'AudioAutoFreezeSceneList',
      audioMaxSize: 'AudioMaxSize',
      autoFreezeType: 'AutoFreezeType',
      bucketConfigList: 'BucketConfigList',
      endDate: 'EndDate',
      imageAutoFreeze: 'ImageAutoFreeze',
      lang: 'Lang',
      operation: 'Operation',
      resourceTypeList: 'ResourceTypeList',
      sceneList: 'SceneList',
      sourceIp: 'SourceIp',
      startDate: 'StartDate',
      videoAutoFreezeSceneList: 'VideoAutoFreezeSceneList',
      videoFrameInterval: 'VideoFrameInterval',
      videoMaxFrames: 'VideoMaxFrames',
      videoMaxSize: 'VideoMaxSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioAutoFreezeSceneList: 'string',
      audioMaxSize: 'number',
      autoFreezeType: 'string',
      bucketConfigList: 'string',
      endDate: 'string',
      imageAutoFreeze: 'string',
      lang: 'string',
      operation: 'string',
      resourceTypeList: 'string',
      sceneList: 'string',
      sourceIp: 'string',
      startDate: 'string',
      videoAutoFreezeSceneList: 'string',
      videoFrameInterval: 'number',
      videoMaxFrames: 'number',
      videoMaxSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOssStockStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOssStockStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateOssStockStatusResponseBody;
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
      body: UpdateOssStockStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebsiteInstanceRequest extends $tea.Model {
  domain?: string;
  indexPage?: string;
  indexPageScanInterval?: number;
  instanceId?: string;
  lang?: string;
  siteProtocol?: string;
  sourceIp?: string;
  websiteScanInterval?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      indexPage: 'IndexPage',
      indexPageScanInterval: 'IndexPageScanInterval',
      instanceId: 'InstanceId',
      lang: 'Lang',
      siteProtocol: 'SiteProtocol',
      sourceIp: 'SourceIp',
      websiteScanInterval: 'WebsiteScanInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      indexPage: 'string',
      indexPageScanInterval: 'number',
      instanceId: 'string',
      lang: 'string',
      siteProtocol: 'string',
      sourceIp: 'string',
      websiteScanInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebsiteInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebsiteInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWebsiteInstanceResponseBody;
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
      body: UpdateWebsiteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebsiteInstanceKeyUrlRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  sourceIp?: string;
  urls?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      urls: 'Urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      sourceIp: 'string',
      urls: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebsiteInstanceKeyUrlResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebsiteInstanceKeyUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWebsiteInstanceKeyUrlResponseBody;
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
      body: UpdateWebsiteInstanceKeyUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebsiteInstanceStatusRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  sourceIp?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      sourceIp: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebsiteInstanceStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebsiteInstanceStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWebsiteInstanceStatusResponseBody;
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
      body: UpdateWebsiteInstanceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeCdiBaseBagRequest extends $tea.Model {
  clientToken?: string;
  commodityCode?: string;
  flowOutSpec?: number;
  instanceId?: string;
  orderType?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodityCode: 'CommodityCode',
      flowOutSpec: 'FlowOutSpec',
      instanceId: 'InstanceId',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodityCode: 'string',
      flowOutSpec: 'number',
      instanceId: 'string',
      orderType: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeCdiBaseBagResponseBody extends $tea.Model {
  code?: string;
  instanceId?: string;
  message?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeCdiBaseBagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeCdiBaseBagResponseBody;
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
      body: UpgradeCdiBaseBagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadImageToLibRequest extends $tea.Model {
  imageLibId?: number;
  images?: string;
  sourceIp?: string;
  urls?: string;
  static names(): { [key: string]: string } {
    return {
      imageLibId: 'ImageLibId',
      images: 'Images',
      sourceIp: 'SourceIp',
      urls: 'Urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageLibId: 'number',
      images: 'string',
      sourceIp: 'string',
      urls: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadImageToLibResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadImageToLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadImageToLibResponseBody;
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
      body: UploadImageToLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCustomOcrTemplateRequest extends $tea.Model {
  id?: number;
  testImgUrl?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      testImgUrl: 'TestImgUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      testImgUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCustomOcrTemplateResponseBody extends $tea.Model {
  imageUrl?: string;
  recognizeInfo?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      recognizeInfo: 'RecognizeInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      recognizeInfo: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCustomOcrTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyCustomOcrTemplateResponseBody;
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
      body: VerifyCustomOcrTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyEmailRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      verifyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyEmailResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyEmailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyEmailResponseBody;
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
      body: VerifyEmailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPhoneRequest extends $tea.Model {
  lang?: string;
  phone?: string;
  sourceIp?: string;
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      phone: 'Phone',
      sourceIp: 'SourceIp',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      phone: 'string',
      sourceIp: 'string',
      verifyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPhoneResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPhoneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyPhoneResponseBody;
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
      body: VerifyPhoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyWebsiteInstanceRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  sourceIp?: string;
  verifyMethod?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      verifyMethod: 'VerifyMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      sourceIp: 'string',
      verifyMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyWebsiteInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyWebsiteInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyWebsiteInstanceResponseBody;
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
      body: VerifyWebsiteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditItemSubmitRequestData extends $tea.Model {
  customResult?: string;
  customRiskType?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      customResult: 'CustomResult',
      customRiskType: 'CustomRiskType',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customResult: 'string',
      customRiskType: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdiBagResponseBodyInstanceIds extends $tea.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeywordResponseBodyValidKeywordList extends $tea.Model {
  id?: number;
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      keyword: 'keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      keyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebSiteInstanceResponseBodyInstanceIds extends $tea.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInfoResponseBodyAppInfoListDebugPackageInfo extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInfoResponseBodyAppInfoListPackageInfo extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInfoResponseBodyAppInfoList extends $tea.Model {
  debugPackageInfo?: DescribeAppInfoResponseBodyAppInfoListDebugPackageInfo;
  endDate?: string;
  icon?: string;
  id?: number;
  name?: string;
  packageInfo?: DescribeAppInfoResponseBodyAppInfoListPackageInfo;
  packageName?: string;
  startDate?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      debugPackageInfo: 'DebugPackageInfo',
      endDate: 'EndDate',
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      packageInfo: 'PackageInfo',
      packageName: 'PackageName',
      startDate: 'StartDate',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugPackageInfo: DescribeAppInfoResponseBodyAppInfoListDebugPackageInfo,
      endDate: 'string',
      icon: 'string',
      id: 'number',
      name: 'string',
      packageInfo: DescribeAppInfoResponseBodyAppInfoListPackageInfo,
      packageName: 'string',
      startDate: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditCallbackListResponseBodyCallbackList extends $tea.Model {
  callbackSuggestions?: string[];
  callbackTypes?: string[];
  createTime?: string;
  cryptType?: string;
  id?: number;
  modifiedTime?: string;
  name?: string;
  seed?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      callbackSuggestions: 'CallbackSuggestions',
      callbackTypes: 'CallbackTypes',
      createTime: 'CreateTime',
      cryptType: 'CryptType',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      seed: 'Seed',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackSuggestions: { 'type': 'array', 'itemType': 'string' },
      callbackTypes: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      cryptType: 'string',
      id: 'number',
      modifiedTime: 'string',
      name: 'string',
      seed: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditContentResponseBodyAuditContentListFrameResults extends $tea.Model {
  label?: string;
  offset?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      offset: 'Offset',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      offset: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditContentResponseBodyAuditContentListResults extends $tea.Model {
  label?: string;
  scene?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditContentResponseBodyAuditContentList extends $tea.Model {
  audit?: number;
  auditIllegalReasons?: string[];
  auditResult?: string;
  bizType?: string;
  content?: string;
  dataId?: string;
  frameResults?: DescribeAuditContentResponseBodyAuditContentListFrameResults[];
  id?: number;
  newUrl?: string;
  requestTime?: string;
  results?: DescribeAuditContentResponseBodyAuditContentListResults[];
  scanFinishedTime?: string;
  suggestion?: string;
  taskId?: string;
  thumbnail?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      audit: 'Audit',
      auditIllegalReasons: 'AuditIllegalReasons',
      auditResult: 'AuditResult',
      bizType: 'BizType',
      content: 'Content',
      dataId: 'DataId',
      frameResults: 'FrameResults',
      id: 'Id',
      newUrl: 'NewUrl',
      requestTime: 'RequestTime',
      results: 'Results',
      scanFinishedTime: 'ScanFinishedTime',
      suggestion: 'Suggestion',
      taskId: 'TaskId',
      thumbnail: 'Thumbnail',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audit: 'number',
      auditIllegalReasons: { 'type': 'array', 'itemType': 'string' },
      auditResult: 'string',
      bizType: 'string',
      content: 'string',
      dataId: 'string',
      frameResults: { 'type': 'array', 'itemType': DescribeAuditContentResponseBodyAuditContentListFrameResults },
      id: 'number',
      newUrl: 'string',
      requestTime: 'string',
      results: { 'type': 'array', 'itemType': DescribeAuditContentResponseBodyAuditContentListResults },
      scanFinishedTime: 'string',
      suggestion: 'string',
      taskId: 'string',
      thumbnail: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditContentItemResponseBodyAuditContentItemList extends $tea.Model {
  audit?: number;
  auditIllegalReasons?: string[];
  auditResult?: string;
  content?: string;
  endTime?: string;
  id?: number;
  parentTaskId?: string;
  sn?: number;
  startTime?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      audit: 'Audit',
      auditIllegalReasons: 'AuditIllegalReasons',
      auditResult: 'AuditResult',
      content: 'Content',
      endTime: 'EndTime',
      id: 'Id',
      parentTaskId: 'ParentTaskId',
      sn: 'Sn',
      startTime: 'StartTime',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audit: 'number',
      auditIllegalReasons: { 'type': 'array', 'itemType': 'string' },
      auditResult: 'string',
      content: 'string',
      endTime: 'string',
      id: 'number',
      parentTaskId: 'string',
      sn: 'number',
      startTime: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditRangeResponseBodyAuditRange extends $tea.Model {
  block?: boolean;
  pass?: boolean;
  review?: boolean;
  static names(): { [key: string]: string } {
    return {
      block: 'block',
      pass: 'pass',
      review: 'review',
    };
  }

  static types(): { [key: string]: any } {
    return {
      block: 'boolean',
      pass: 'boolean',
      review: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditSettingResponseBodyAuditRange extends $tea.Model {
  block?: boolean;
  pass?: boolean;
  review?: boolean;
  static names(): { [key: string]: string } {
    return {
      block: 'block',
      pass: 'pass',
      review: 'review',
    };
  }

  static types(): { [key: string]: any } {
    return {
      block: 'boolean',
      pass: 'boolean',
      review: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeImageLibResponseBodyBlackAll extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeImageLibResponseBodyBlackSelected extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeImageLibResponseBodyBlack extends $tea.Model {
  all?: DescribeBizTypeImageLibResponseBodyBlackAll[];
  selected?: DescribeBizTypeImageLibResponseBodyBlackSelected[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: { 'type': 'array', 'itemType': DescribeBizTypeImageLibResponseBodyBlackAll },
      selected: { 'type': 'array', 'itemType': DescribeBizTypeImageLibResponseBodyBlackSelected },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeImageLibResponseBodyReviewAll extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeImageLibResponseBodyReviewSelected extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeImageLibResponseBodyReview extends $tea.Model {
  all?: DescribeBizTypeImageLibResponseBodyReviewAll[];
  selected?: DescribeBizTypeImageLibResponseBodyReviewSelected[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: { 'type': 'array', 'itemType': DescribeBizTypeImageLibResponseBodyReviewAll },
      selected: { 'type': 'array', 'itemType': DescribeBizTypeImageLibResponseBodyReviewSelected },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeImageLibResponseBodyWhiteAll extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeImageLibResponseBodyWhiteSelected extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeImageLibResponseBodyWhite extends $tea.Model {
  all?: DescribeBizTypeImageLibResponseBodyWhiteAll[];
  selected?: DescribeBizTypeImageLibResponseBodyWhiteSelected[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: { 'type': 'array', 'itemType': DescribeBizTypeImageLibResponseBodyWhiteAll },
      selected: { 'type': 'array', 'itemType': DescribeBizTypeImageLibResponseBodyWhiteSelected },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeSettingResponseBodyAd extends $tea.Model {
  categories?: string[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeSettingResponseBodyAntispam extends $tea.Model {
  categories?: string[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeSettingResponseBodyLive extends $tea.Model {
  categories?: string[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeSettingResponseBodyPorn extends $tea.Model {
  categories?: string[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeSettingResponseBodyTerrorism extends $tea.Model {
  categories?: string[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeTextLibResponseBodyBlackAll extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeTextLibResponseBodyBlackSelected extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeTextLibResponseBodyBlack extends $tea.Model {
  all?: DescribeBizTypeTextLibResponseBodyBlackAll[];
  selected?: DescribeBizTypeTextLibResponseBodyBlackSelected[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: { 'type': 'array', 'itemType': DescribeBizTypeTextLibResponseBodyBlackAll },
      selected: { 'type': 'array', 'itemType': DescribeBizTypeTextLibResponseBodyBlackSelected },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeTextLibResponseBodyIgnoreAll extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeTextLibResponseBodyIgnoreSelected extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeTextLibResponseBodyIgnore extends $tea.Model {
  all?: DescribeBizTypeTextLibResponseBodyIgnoreAll[];
  selected?: DescribeBizTypeTextLibResponseBodyIgnoreSelected[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: { 'type': 'array', 'itemType': DescribeBizTypeTextLibResponseBodyIgnoreAll },
      selected: { 'type': 'array', 'itemType': DescribeBizTypeTextLibResponseBodyIgnoreSelected },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeTextLibResponseBodyReviewAll extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeTextLibResponseBodyReviewSelected extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeTextLibResponseBodyReview extends $tea.Model {
  all?: DescribeBizTypeTextLibResponseBodyReviewAll[];
  selected?: DescribeBizTypeTextLibResponseBodyReviewSelected[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: { 'type': 'array', 'itemType': DescribeBizTypeTextLibResponseBodyReviewAll },
      selected: { 'type': 'array', 'itemType': DescribeBizTypeTextLibResponseBodyReviewSelected },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeTextLibResponseBodyWhiteAll extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeTextLibResponseBodyWhiteSelected extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizTypeTextLibResponseBodyWhite extends $tea.Model {
  all?: DescribeBizTypeTextLibResponseBodyWhiteAll[];
  selected?: DescribeBizTypeTextLibResponseBodyWhiteSelected[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: { 'type': 'array', 'itemType': DescribeBizTypeTextLibResponseBodyWhiteAll },
      selected: { 'type': 'array', 'itemType': DescribeBizTypeTextLibResponseBodyWhiteSelected },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomOcrTemplateResponseBodyOcrTemplateListRecognizeArea extends $tea.Model {
  height?: number;
  name?: string;
  width?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      name: 'Name',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      name: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomOcrTemplateResponseBodyOcrTemplateListReferArea extends $tea.Model {
  height?: number;
  name?: string;
  width?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      name: 'Name',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      name: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomOcrTemplateResponseBodyOcrTemplateList extends $tea.Model {
  id?: number;
  imgUrl?: string;
  name?: string;
  recognizeArea?: DescribeCustomOcrTemplateResponseBodyOcrTemplateListRecognizeArea[];
  referArea?: DescribeCustomOcrTemplateResponseBodyOcrTemplateListReferArea[];
  status?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      imgUrl: 'ImgUrl',
      name: 'Name',
      recognizeArea: 'RecognizeArea',
      referArea: 'ReferArea',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      imgUrl: 'string',
      name: 'string',
      recognizeArea: { 'type': 'array', 'itemType': DescribeCustomOcrTemplateResponseBodyOcrTemplateListRecognizeArea },
      referArea: { 'type': 'array', 'itemType': DescribeCustomOcrTemplateResponseBodyOcrTemplateListReferArea },
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageFromLibResponseBodyImageFromLibList extends $tea.Model {
  createTime?: string;
  id?: number;
  image?: string;
  imageHitCount?: number;
  thumbnail?: string;
  videoHitCount?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      image: 'Image',
      imageHitCount: 'ImageHitCount',
      thumbnail: 'Thumbnail',
      videoHitCount: 'VideoHitCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'number',
      image: 'string',
      imageHitCount: 'number',
      thumbnail: 'string',
      videoHitCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageLibResponseBodyImageLibList extends $tea.Model {
  bizTypes?: string[];
  category?: string;
  code?: string;
  enable?: string;
  id?: number;
  imageCount?: number;
  modifiedTime?: string;
  name?: string;
  scene?: string;
  serviceModule?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypes: 'BizTypes',
      category: 'Category',
      code: 'Code',
      enable: 'Enable',
      id: 'Id',
      imageCount: 'ImageCount',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      scene: 'Scene',
      serviceModule: 'ServiceModule',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypes: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      code: 'string',
      enable: 'string',
      id: 'number',
      imageCount: 'number',
      modifiedTime: 'string',
      name: 'string',
      scene: 'string',
      serviceModule: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeywordResponseBodyKeywordList extends $tea.Model {
  createTime?: string;
  hitCount?: number;
  id?: number;
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      hitCount: 'HitCount',
      id: 'Id',
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      hitCount: 'number',
      id: 'number',
      keyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeywordLibResponseBodyKeywordLibList extends $tea.Model {
  bizTypes?: string[];
  category?: string;
  code?: string;
  count?: number;
  enable?: boolean;
  id?: number;
  language?: string;
  libType?: string;
  matchMode?: string;
  modifiedTime?: string;
  name?: string;
  resourceType?: string;
  serviceModule?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      bizTypes: 'BizTypes',
      category: 'Category',
      code: 'Code',
      count: 'Count',
      enable: 'Enable',
      id: 'Id',
      language: 'Language',
      libType: 'LibType',
      matchMode: 'MatchMode',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      resourceType: 'ResourceType',
      serviceModule: 'ServiceModule',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypes: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      code: 'string',
      count: 'number',
      enable: 'boolean',
      id: 'number',
      language: 'string',
      libType: 'string',
      matchMode: 'string',
      modifiedTime: 'string',
      name: 'string',
      resourceType: 'string',
      serviceModule: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenApiRcpStatsResponseBodyStatList extends $tea.Model {
  blockCount?: number;
  date?: string;
  passCount?: number;
  resourceType?: string;
  reviewCount?: number;
  totalCount?: number;
  totalDuration?: number;
  static names(): { [key: string]: string } {
    return {
      blockCount: 'BlockCount',
      date: 'Date',
      passCount: 'PassCount',
      resourceType: 'ResourceType',
      reviewCount: 'ReviewCount',
      totalCount: 'TotalCount',
      totalDuration: 'TotalDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockCount: 'number',
      date: 'string',
      passCount: 'number',
      resourceType: 'string',
      reviewCount: 'number',
      totalCount: 'number',
      totalDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenApiUsageResponseBodyOpenApiUsageList extends $tea.Model {
  blockCount?: number;
  blockDuration?: number;
  date?: string;
  innerTotalCount?: number;
  outerTotalCount?: number;
  passCount?: number;
  passDuration?: number;
  resourceType?: string;
  reviewCount?: number;
  reviewDuration?: number;
  scene?: string;
  totalCount?: number;
  totalDuration?: number;
  static names(): { [key: string]: string } {
    return {
      blockCount: 'BlockCount',
      blockDuration: 'BlockDuration',
      date: 'Date',
      innerTotalCount: 'InnerTotalCount',
      outerTotalCount: 'OuterTotalCount',
      passCount: 'PassCount',
      passDuration: 'PassDuration',
      resourceType: 'ResourceType',
      reviewCount: 'ReviewCount',
      reviewDuration: 'ReviewDuration',
      scene: 'Scene',
      totalCount: 'TotalCount',
      totalDuration: 'TotalDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockCount: 'number',
      blockDuration: 'number',
      date: 'string',
      innerTotalCount: 'number',
      outerTotalCount: 'number',
      passCount: 'number',
      passDuration: 'number',
      resourceType: 'string',
      reviewCount: 'number',
      reviewDuration: 'number',
      scene: 'string',
      totalCount: 'number',
      totalDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyAudioAntispamFreezeConfig extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateImageConfigAd extends $tea.Model {
  categories?: string[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateImageConfigLive extends $tea.Model {
  categories?: string[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateImageConfigPorn extends $tea.Model {
  categories?: string[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateImageConfigTerrorism extends $tea.Model {
  categories?: string[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateImageConfig extends $tea.Model {
  ad?: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateImageConfigAd;
  live?: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateImageConfigLive;
  porn?: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateImageConfigPorn;
  terrorism?: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateImageConfigTerrorism;
  static names(): { [key: string]: string } {
    return {
      ad: 'Ad',
      live: 'Live',
      porn: 'Porn',
      terrorism: 'Terrorism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ad: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateImageConfigAd,
      live: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateImageConfigLive,
      porn: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateImageConfigPorn,
      terrorism: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateImageConfigTerrorism,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVideoConfigAd extends $tea.Model {
  categories?: string[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVideoConfigLive extends $tea.Model {
  categories?: string[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVideoConfigPorn extends $tea.Model {
  categories?: string[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVideoConfigTerrorism extends $tea.Model {
  categories?: string[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVideoConfig extends $tea.Model {
  ad?: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVideoConfigAd;
  live?: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVideoConfigLive;
  porn?: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVideoConfigPorn;
  terrorism?: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVideoConfigTerrorism;
  static names(): { [key: string]: string } {
    return {
      ad: 'Ad',
      live: 'Live',
      porn: 'Porn',
      terrorism: 'Terrorism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ad: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVideoConfigAd,
      live: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVideoConfigLive,
      porn: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVideoConfigPorn,
      terrorism: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVideoConfigTerrorism,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVoiceConfigAntispam extends $tea.Model {
  categories?: string[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVoiceConfig extends $tea.Model {
  antispam?: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVoiceConfigAntispam;
  static names(): { [key: string]: string } {
    return {
      antispam: 'Antispam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antispam: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVoiceConfigAntispam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplate extends $tea.Model {
  bizType?: string;
  description?: string;
  imageConfig?: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateImageConfig;
  includeChannel?: number;
  name?: string;
  videoConfig?: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVideoConfig;
  voiceConfig?: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVoiceConfig;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      description: 'Description',
      imageConfig: 'ImageConfig',
      includeChannel: 'IncludeChannel',
      name: 'Name',
      videoConfig: 'VideoConfig',
      voiceConfig: 'VoiceConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      description: 'string',
      imageConfig: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateImageConfig,
      includeChannel: 'number',
      name: 'string',
      videoConfig: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVideoConfig,
      voiceConfig: DescribeOssIncrementCheckSettingResponseBodyBizTypeTemplateVoiceConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyBucketConfigList extends $tea.Model {
  bucket?: string;
  prefixes?: string[];
  selected?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      prefixes: 'Prefixes',
      selected: 'Selected',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      prefixes: { 'type': 'array', 'itemType': 'string' },
      selected: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyImageAdFreezeConfig extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyImageAutoFreeze extends $tea.Model {
  ad?: string;
  enabled?: boolean;
  live?: string;
  porn?: string;
  terrorism?: string;
  static names(): { [key: string]: string } {
    return {
      ad: 'Ad',
      enabled: 'Enabled',
      live: 'Live',
      porn: 'Porn',
      terrorism: 'Terrorism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ad: 'string',
      enabled: 'boolean',
      live: 'string',
      porn: 'string',
      terrorism: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyImageLiveFreezeConfig extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyImagePornFreezeConfig extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyImageTerrorismFreezeConfig extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyVideoAdFreezeConfig extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyVideoLiveFreezeConfig extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyVideoPornFreezeConfig extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyVideoTerrorismFreezeConfig extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementCheckSettingResponseBodyVideoVoiceAntispamFreezeConfig extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssIncrementStatsResponseBodyStatList extends $tea.Model {
  blockCount?: number;
  date?: string;
  passCount?: number;
  resourceType?: string;
  reviewCount?: number;
  scene?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      blockCount: 'BlockCount',
      date: 'Date',
      passCount: 'PassCount',
      resourceType: 'ResourceType',
      reviewCount: 'ReviewCount',
      scene: 'Scene',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockCount: 'number',
      date: 'string',
      passCount: 'number',
      resourceType: 'string',
      reviewCount: 'number',
      scene: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssResultItemsResponseBodyScanResultListFrameResults extends $tea.Model {
  offset?: number;
  thumbnail?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      thumbnail: 'Thumbnail',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      thumbnail: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssResultItemsResponseBodyScanResultListVoiceSegmentAntispamResults extends $tea.Model {
  endTime?: number;
  label?: string;
  startTime?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      label: 'Label',
      startTime: 'StartTime',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      label: 'string',
      startTime: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssResultItemsResponseBodyScanResultList extends $tea.Model {
  bucket?: string;
  content?: string;
  createTime?: string;
  dataId?: string;
  frameResults?: DescribeOssResultItemsResponseBodyScanResultListFrameResults[];
  handleStatus?: number;
  id?: number;
  newUrl?: string;
  object?: string;
  requestTime?: string;
  resourceStatus?: number;
  scanFinishedTime?: string;
  score?: string;
  suggestion?: string;
  taskId?: string;
  thumbnail?: string;
  voiceSegmentAntispamResults?: DescribeOssResultItemsResponseBodyScanResultListVoiceSegmentAntispamResults[];
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      content: 'Content',
      createTime: 'CreateTime',
      dataId: 'DataId',
      frameResults: 'FrameResults',
      handleStatus: 'HandleStatus',
      id: 'Id',
      newUrl: 'NewUrl',
      object: 'Object',
      requestTime: 'RequestTime',
      resourceStatus: 'ResourceStatus',
      scanFinishedTime: 'ScanFinishedTime',
      score: 'Score',
      suggestion: 'Suggestion',
      taskId: 'TaskId',
      thumbnail: 'Thumbnail',
      voiceSegmentAntispamResults: 'VoiceSegmentAntispamResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      content: 'string',
      createTime: 'string',
      dataId: 'string',
      frameResults: { 'type': 'array', 'itemType': DescribeOssResultItemsResponseBodyScanResultListFrameResults },
      handleStatus: 'number',
      id: 'number',
      newUrl: 'string',
      object: 'string',
      requestTime: 'string',
      resourceStatus: 'number',
      scanFinishedTime: 'string',
      score: 'string',
      suggestion: 'string',
      taskId: 'string',
      thumbnail: 'string',
      voiceSegmentAntispamResults: { 'type': 'array', 'itemType': DescribeOssResultItemsResponseBodyScanResultListVoiceSegmentAntispamResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssStockStatusResponseBodyBucketList extends $tea.Model {
  bucket?: string;
  prefixes?: string[];
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      prefixes: 'Prefixes',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      prefixes: { 'type': 'array', 'itemType': 'string' },
      selected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdatePackageResultResponseBodyAppInfoDebugPackageInfo extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdatePackageResultResponseBodyAppInfoPackageInfo extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdatePackageResultResponseBodyAppInfo extends $tea.Model {
  debugPackageInfo?: DescribeUpdatePackageResultResponseBodyAppInfoDebugPackageInfo;
  endDate?: string;
  icon?: string;
  id?: number;
  name?: string;
  packageInfo?: DescribeUpdatePackageResultResponseBodyAppInfoPackageInfo;
  packageName?: string;
  startDate?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      debugPackageInfo: 'DebugPackageInfo',
      endDate: 'EndDate',
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      packageInfo: 'PackageInfo',
      packageName: 'PackageName',
      startDate: 'StartDate',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugPackageInfo: DescribeUpdatePackageResultResponseBodyAppInfoDebugPackageInfo,
      endDate: 'string',
      icon: 'string',
      id: 'number',
      name: 'string',
      packageInfo: DescribeUpdatePackageResultResponseBodyAppInfoPackageInfo,
      packageName: 'string',
      startDate: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageBillResponseBodyBillList extends $tea.Model {
  bizType?: string;
  confirmCount?: number;
  day?: string;
  freeCount?: number;
  region?: string;
  reviewCount?: number;
  scene?: string;
  subUid?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      confirmCount: 'ConfirmCount',
      day: 'Day',
      freeCount: 'FreeCount',
      region: 'Region',
      reviewCount: 'ReviewCount',
      scene: 'Scene',
      subUid: 'SubUid',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      confirmCount: 'number',
      day: 'string',
      freeCount: 'number',
      region: 'string',
      reviewCount: 'number',
      scene: 'string',
      subUid: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBizTypesResponseBodyBizTypeList extends $tea.Model {
  bizType?: string;
  citeTemplate?: boolean;
  description?: string;
  gray?: boolean;
  industryInfo?: string;
  source?: string;
  sourceBizType?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      citeTemplate: 'CiteTemplate',
      description: 'Description',
      gray: 'Gray',
      industryInfo: 'IndustryInfo',
      source: 'Source',
      sourceBizType: 'SourceBizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      citeTemplate: 'boolean',
      description: 'string',
      gray: 'boolean',
      industryInfo: 'string',
      source: 'string',
      sourceBizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBizTypesResponseBodyBizTypeListImport extends $tea.Model {
  bizType?: string;
  citeTemplate?: boolean;
  description?: string;
  gray?: boolean;
  industryInfo?: string;
  source?: string;
  sourceBizType?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      citeTemplate: 'CiteTemplate',
      description: 'Description',
      gray: 'Gray',
      industryInfo: 'IndustryInfo',
      source: 'Source',
      sourceBizType: 'SourceBizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      citeTemplate: 'boolean',
      description: 'string',
      gray: 'boolean',
      industryInfo: 'string',
      source: 'string',
      sourceBizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeViewContentResponseBodyViewContentListFaceResultsAge extends $tea.Model {
  rate?: number;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      rate: 'Rate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rate: 'number',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeViewContentResponseBodyViewContentListFaceResultsBang extends $tea.Model {
  rate?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      rate: 'Rate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rate: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeViewContentResponseBodyViewContentListFaceResultsGender extends $tea.Model {
  rate?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      rate: 'Rate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rate: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeViewContentResponseBodyViewContentListFaceResultsGlasses extends $tea.Model {
  rate?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      rate: 'Rate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rate: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeViewContentResponseBodyViewContentListFaceResultsHairstyle extends $tea.Model {
  rate?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      rate: 'Rate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rate: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeViewContentResponseBodyViewContentListFaceResultsHat extends $tea.Model {
  rate?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      rate: 'Rate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rate: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeViewContentResponseBodyViewContentListFaceResultsImage extends $tea.Model {
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeViewContentResponseBodyViewContentListFaceResultsLocation extends $tea.Model {
  h?: number;
  w?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeViewContentResponseBodyViewContentListFaceResultsMustache extends $tea.Model {
  rate?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      rate: 'Rate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rate: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeViewContentResponseBodyViewContentListFaceResultsQuality extends $tea.Model {
  blur?: number;
  pitch?: number;
  roll?: number;
  yaw?: number;
  static names(): { [key: string]: string } {
    return {
      blur: 'Blur',
      pitch: 'Pitch',
      roll: 'Roll',
      yaw: 'Yaw',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blur: 'number',
      pitch: 'number',
      roll: 'number',
      yaw: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeViewContentResponseBodyViewContentListFaceResultsRespirator extends $tea.Model {
  rate?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      rate: 'Rate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rate: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeViewContentResponseBodyViewContentListFaceResultsSmile extends $tea.Model {
  rate?: number;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      rate: 'Rate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rate: 'number',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeViewContentResponseBodyViewContentListFaceResults extends $tea.Model {
  age?: DescribeViewContentResponseBodyViewContentListFaceResultsAge;
  bang?: DescribeViewContentResponseBodyViewContentListFaceResultsBang;
  bualified?: boolean;
  gender?: DescribeViewContentResponseBodyViewContentListFaceResultsGender;
  glasses?: DescribeViewContentResponseBodyViewContentListFaceResultsGlasses;
  hairstyle?: DescribeViewContentResponseBodyViewContentListFaceResultsHairstyle;
  hat?: DescribeViewContentResponseBodyViewContentListFaceResultsHat;
  image?: DescribeViewContentResponseBodyViewContentListFaceResultsImage;
  location?: DescribeViewContentResponseBodyViewContentListFaceResultsLocation;
  mustache?: DescribeViewContentResponseBodyViewContentListFaceResultsMustache;
  quality?: DescribeViewContentResponseBodyViewContentListFaceResultsQuality;
  respirator?: DescribeViewContentResponseBodyViewContentListFaceResultsRespirator;
  smile?: DescribeViewContentResponseBodyViewContentListFaceResultsSmile;
  static names(): { [key: string]: string } {
    return {
      age: 'Age',
      bang: 'Bang',
      bualified: 'Bualified',
      gender: 'Gender',
      glasses: 'Glasses',
      hairstyle: 'Hairstyle',
      hat: 'Hat',
      image: 'Image',
      location: 'Location',
      mustache: 'Mustache',
      quality: 'Quality',
      respirator: 'Respirator',
      smile: 'Smile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: DescribeViewContentResponseBodyViewContentListFaceResultsAge,
      bang: DescribeViewContentResponseBodyViewContentListFaceResultsBang,
      bualified: 'boolean',
      gender: DescribeViewContentResponseBodyViewContentListFaceResultsGender,
      glasses: DescribeViewContentResponseBodyViewContentListFaceResultsGlasses,
      hairstyle: DescribeViewContentResponseBodyViewContentListFaceResultsHairstyle,
      hat: DescribeViewContentResponseBodyViewContentListFaceResultsHat,
      image: DescribeViewContentResponseBodyViewContentListFaceResultsImage,
      location: DescribeViewContentResponseBodyViewContentListFaceResultsLocation,
      mustache: DescribeViewContentResponseBodyViewContentListFaceResultsMustache,
      quality: DescribeViewContentResponseBodyViewContentListFaceResultsQuality,
      respirator: DescribeViewContentResponseBodyViewContentListFaceResultsRespirator,
      smile: DescribeViewContentResponseBodyViewContentListFaceResultsSmile,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeViewContentResponseBodyViewContentListFrameResults extends $tea.Model {
  label?: string;
  offset?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      offset: 'Offset',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      offset: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeViewContentResponseBodyViewContentListResults extends $tea.Model {
  label?: string;
  scene?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeViewContentResponseBodyViewContentList extends $tea.Model {
  bizType?: string;
  content?: string;
  dataId?: string;
  faceResults?: DescribeViewContentResponseBodyViewContentListFaceResults[];
  frameResults?: DescribeViewContentResponseBodyViewContentListFrameResults[];
  id?: number;
  newUrl?: string;
  requestTime?: string;
  results?: DescribeViewContentResponseBodyViewContentListResults[];
  scanFinishedTime?: string;
  scanResult?: string;
  suggestion?: string;
  taskId?: string;
  thumbnail?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      content: 'Content',
      dataId: 'DataId',
      faceResults: 'FaceResults',
      frameResults: 'FrameResults',
      id: 'Id',
      newUrl: 'NewUrl',
      requestTime: 'RequestTime',
      results: 'Results',
      scanFinishedTime: 'ScanFinishedTime',
      scanResult: 'ScanResult',
      suggestion: 'Suggestion',
      taskId: 'TaskId',
      thumbnail: 'Thumbnail',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      content: 'string',
      dataId: 'string',
      faceResults: { 'type': 'array', 'itemType': DescribeViewContentResponseBodyViewContentListFaceResults },
      frameResults: { 'type': 'array', 'itemType': DescribeViewContentResponseBodyViewContentListFrameResults },
      id: 'number',
      newUrl: 'string',
      requestTime: 'string',
      results: { 'type': 'array', 'itemType': DescribeViewContentResponseBodyViewContentListResults },
      scanFinishedTime: 'string',
      scanResult: 'string',
      suggestion: 'string',
      taskId: 'string',
      thumbnail: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteInstanceResponseBodyWebsiteInstanceList extends $tea.Model {
  buyTime?: string;
  domain?: string;
  expiredTime?: string;
  indexPage?: string;
  indexPageScanInterval?: number;
  instanceId?: string;
  protocol?: string;
  status?: string;
  websiteScanInterval?: number;
  static names(): { [key: string]: string } {
    return {
      buyTime: 'BuyTime',
      domain: 'Domain',
      expiredTime: 'ExpiredTime',
      indexPage: 'IndexPage',
      indexPageScanInterval: 'IndexPageScanInterval',
      instanceId: 'InstanceId',
      protocol: 'Protocol',
      status: 'Status',
      websiteScanInterval: 'WebsiteScanInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyTime: 'string',
      domain: 'string',
      expiredTime: 'string',
      indexPage: 'string',
      indexPageScanInterval: 'number',
      instanceId: 'string',
      protocol: 'string',
      status: 'string',
      websiteScanInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteScanResultResponseBodyWebsiteScanResultList extends $tea.Model {
  domain?: string;
  handleStatus?: number;
  id?: number;
  imageRiskCount?: number;
  instanceId?: string;
  labels?: string[];
  scanTime?: string;
  sourceRiskCount?: number;
  taskId?: string;
  textRiskCount?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      handleStatus: 'HandleStatus',
      id: 'Id',
      imageRiskCount: 'ImageRiskCount',
      instanceId: 'InstanceId',
      labels: 'Labels',
      scanTime: 'ScanTime',
      sourceRiskCount: 'SourceRiskCount',
      taskId: 'TaskId',
      textRiskCount: 'TextRiskCount',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      handleStatus: 'number',
      id: 'number',
      imageRiskCount: 'number',
      instanceId: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
      scanTime: 'string',
      sourceRiskCount: 'number',
      taskId: 'string',
      textRiskCount: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteScanResultDetailResponseBodyImageScanResults extends $tea.Model {
  labels?: string[];
  url?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': 'string' },
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebsiteStatResponseBodyWebsiteStatList extends $tea.Model {
  instanceCount?: number;
  riskCount?: number;
  scanCount?: number;
  subServiceModule?: string;
  static names(): { [key: string]: string } {
    return {
      instanceCount: 'InstanceCount',
      riskCount: 'RiskCount',
      scanCount: 'ScanCount',
      subServiceModule: 'SubServiceModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCount: 'number',
      riskCount: 'number',
      scanCount: 'number',
      subServiceModule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditItemListResponseBodyItems extends $tea.Model {
  bizType?: string;
  content?: string;
  create?: string;
  customResult?: string;
  customRiskType?: string;
  customTs?: string;
  dataId?: string;
  id?: number;
  operator?: string;
  rcpResult?: string;
  rcpRiskType?: string;
  rcpTs?: string;
  subUid?: string;
  taskId?: string;
  thumbnail?: string;
  type?: string;
  uid?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      content: 'Content',
      create: 'Create',
      customResult: 'CustomResult',
      customRiskType: 'CustomRiskType',
      customTs: 'CustomTs',
      dataId: 'DataId',
      id: 'Id',
      operator: 'Operator',
      rcpResult: 'RcpResult',
      rcpRiskType: 'RcpRiskType',
      rcpTs: 'RcpTs',
      subUid: 'SubUid',
      taskId: 'TaskId',
      thumbnail: 'Thumbnail',
      type: 'Type',
      uid: 'Uid',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      content: 'string',
      create: 'string',
      customResult: 'string',
      customRiskType: 'string',
      customTs: 'string',
      dataId: 'string',
      id: 'number',
      operator: 'string',
      rcpResult: 'string',
      rcpRiskType: 'string',
      rcpTs: 'string',
      subUid: 'string',
      taskId: 'string',
      thumbnail: 'string',
      type: 'string',
      uid: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewWebSiteInstanceResponseBodyInstanceIds extends $tea.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
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
    this._endpointMap = {
      'ap-northeast-1': "green.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "green.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "green.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "green.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "green.ap-southeast-1.aliyuncs.com",
      'cn-chengdu': "green.aliyuncs.com",
      'cn-hongkong': "green.aliyuncs.com",
      'cn-huhehaote': "green.aliyuncs.com",
      'cn-qingdao': "green.aliyuncs.com",
      'cn-zhangjiakou': "green.aliyuncs.com",
      'eu-central-1': "green.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "green.ap-southeast-1.aliyuncs.com",
      'me-east-1': "green.ap-southeast-1.aliyuncs.com",
      'us-east-1': "green.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou-finance': "green.aliyuncs.com",
      'cn-shenzhen-finance-1': "green.aliyuncs.com",
      'cn-shanghai-finance-1': "green.aliyuncs.com",
      'cn-north-2-gov-1': "green.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("green", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async auditItemSubmitWithOptions(request: AuditItemSubmitRequest, runtime: $Util.RuntimeOptions): Promise<AuditItemSubmitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.data)) {
      query["Data"] = request.data;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AuditItemSubmit",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AuditItemSubmitResponse>(await this.callApi(params, req, runtime), new AuditItemSubmitResponse({}));
  }

  async auditItemSubmit(request: AuditItemSubmitRequest): Promise<AuditItemSubmitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.auditItemSubmitWithOptions(request, runtime);
  }

  async creatCustomOcrTemplateWithOptions(request: CreatCustomOcrTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreatCustomOcrTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imgUrl)) {
      query["ImgUrl"] = request.imgUrl;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.recognizeArea)) {
      query["RecognizeArea"] = request.recognizeArea;
    }

    if (!Util.isUnset(request.referArea)) {
      query["ReferArea"] = request.referArea;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatCustomOcrTemplate",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatCustomOcrTemplateResponse>(await this.callApi(params, req, runtime), new CreatCustomOcrTemplateResponse({}));
  }

  async creatCustomOcrTemplate(request: CreatCustomOcrTemplateRequest): Promise<CreatCustomOcrTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.creatCustomOcrTemplateWithOptions(request, runtime);
  }

  async createAuditCallbackWithOptions(request: CreateAuditCallbackRequest, runtime: $Util.RuntimeOptions): Promise<CreateAuditCallbackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callbackSuggestions)) {
      query["CallbackSuggestions"] = request.callbackSuggestions;
    }

    if (!Util.isUnset(request.callbackTypes)) {
      query["CallbackTypes"] = request.callbackTypes;
    }

    if (!Util.isUnset(request.cryptType)) {
      query["CryptType"] = request.cryptType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAuditCallback",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAuditCallbackResponse>(await this.callApi(params, req, runtime), new CreateAuditCallbackResponse({}));
  }

  async createAuditCallback(request: CreateAuditCallbackRequest): Promise<CreateAuditCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAuditCallbackWithOptions(request, runtime);
  }

  async createBizTypeWithOptions(request: CreateBizTypeRequest, runtime: $Util.RuntimeOptions): Promise<CreateBizTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizTypeImport)) {
      query["BizTypeImport"] = request.bizTypeImport;
    }

    if (!Util.isUnset(request.bizTypeName)) {
      query["BizTypeName"] = request.bizTypeName;
    }

    if (!Util.isUnset(request.citeTemplate)) {
      query["CiteTemplate"] = request.citeTemplate;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.industryInfo)) {
      query["IndustryInfo"] = request.industryInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBizType",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBizTypeResponse>(await this.callApi(params, req, runtime), new CreateBizTypeResponse({}));
  }

  async createBizType(request: CreateBizTypeRequest): Promise<CreateBizTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBizTypeWithOptions(request, runtime);
  }

  async createCdiBagWithOptions(request: CreateCdiBagRequest, runtime: $Util.RuntimeOptions): Promise<CreateCdiBagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.flowOutSpec)) {
      query["FlowOutSpec"] = request.flowOutSpec;
    }

    if (!Util.isUnset(request.orderNum)) {
      query["OrderNum"] = request.orderNum;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCdiBag",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCdiBagResponse>(await this.callApi(params, req, runtime), new CreateCdiBagResponse({}));
  }

  async createCdiBag(request: CreateCdiBagRequest): Promise<CreateCdiBagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCdiBagWithOptions(request, runtime);
  }

  async createCdiBaseBagWithOptions(request: CreateCdiBaseBagRequest, runtime: $Util.RuntimeOptions): Promise<CreateCdiBaseBagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.flowOutSpec)) {
      query["FlowOutSpec"] = request.flowOutSpec;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCdiBaseBag",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCdiBaseBagResponse>(await this.callApi(params, req, runtime), new CreateCdiBaseBagResponse({}));
  }

  async createCdiBaseBag(request: CreateCdiBaseBagRequest): Promise<CreateCdiBaseBagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCdiBaseBagWithOptions(request, runtime);
  }

  async createImageLibWithOptions(request: CreateImageLibRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizTypes)) {
      query["BizTypes"] = request.bizTypes;
    }

    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.serviceModule)) {
      query["ServiceModule"] = request.serviceModule;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateImageLib",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateImageLibResponse>(await this.callApi(params, req, runtime), new CreateImageLibResponse({}));
  }

  async createImageLib(request: CreateImageLibRequest): Promise<CreateImageLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageLibWithOptions(request, runtime);
  }

  async createKeywordWithOptions(request: CreateKeywordRequest, runtime: $Util.RuntimeOptions): Promise<CreateKeywordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keywordLibId)) {
      query["KeywordLibId"] = request.keywordLibId;
    }

    if (!Util.isUnset(request.keywords)) {
      query["Keywords"] = request.keywords;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateKeyword",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateKeywordResponse>(await this.callApi(params, req, runtime), new CreateKeywordResponse({}));
  }

  async createKeyword(request: CreateKeywordRequest): Promise<CreateKeywordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createKeywordWithOptions(request, runtime);
  }

  async createKeywordLibWithOptions(request: CreateKeywordLibRequest, runtime: $Util.RuntimeOptions): Promise<CreateKeywordLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizTypes)) {
      query["BizTypes"] = request.bizTypes;
    }

    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.libType)) {
      query["LibType"] = request.libType;
    }

    if (!Util.isUnset(request.matchMode)) {
      query["MatchMode"] = request.matchMode;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.serviceModule)) {
      query["ServiceModule"] = request.serviceModule;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateKeywordLib",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateKeywordLibResponse>(await this.callApi(params, req, runtime), new CreateKeywordLibResponse({}));
  }

  async createKeywordLib(request: CreateKeywordLibRequest): Promise<CreateKeywordLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createKeywordLibWithOptions(request, runtime);
  }

  async createWebSiteInstanceWithOptions(request: CreateWebSiteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateWebSiteInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.orderNum)) {
      query["OrderNum"] = request.orderNum;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateWebSiteInstance",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWebSiteInstanceResponse>(await this.callApi(params, req, runtime), new CreateWebSiteInstanceResponse({}));
  }

  async createWebSiteInstance(request: CreateWebSiteInstanceRequest): Promise<CreateWebSiteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWebSiteInstanceWithOptions(request, runtime);
  }

  async createWebsiteIndexPageBaselineWithOptions(request: CreateWebsiteIndexPageBaselineRequest, runtime: $Util.RuntimeOptions): Promise<CreateWebsiteIndexPageBaselineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateWebsiteIndexPageBaseline",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWebsiteIndexPageBaselineResponse>(await this.callApi(params, req, runtime), new CreateWebsiteIndexPageBaselineResponse({}));
  }

  async createWebsiteIndexPageBaseline(request: CreateWebsiteIndexPageBaselineRequest): Promise<CreateWebsiteIndexPageBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWebsiteIndexPageBaselineWithOptions(request, runtime);
  }

  async deleteBizTypeWithOptions(request: DeleteBizTypeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBizTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizTypeName)) {
      query["BizTypeName"] = request.bizTypeName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBizType",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBizTypeResponse>(await this.callApi(params, req, runtime), new DeleteBizTypeResponse({}));
  }

  async deleteBizType(request: DeleteBizTypeRequest): Promise<DeleteBizTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBizTypeWithOptions(request, runtime);
  }

  async deleteCustomOcrTemplateWithOptions(request: DeleteCustomOcrTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomOcrTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomOcrTemplate",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomOcrTemplateResponse>(await this.callApi(params, req, runtime), new DeleteCustomOcrTemplateResponse({}));
  }

  async deleteCustomOcrTemplate(request: DeleteCustomOcrTemplateRequest): Promise<DeleteCustomOcrTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomOcrTemplateWithOptions(request, runtime);
  }

  async deleteImageFromLibWithOptions(request: DeleteImageFromLibRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImageFromLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteImageFromLib",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteImageFromLibResponse>(await this.callApi(params, req, runtime), new DeleteImageFromLibResponse({}));
  }

  async deleteImageFromLib(request: DeleteImageFromLibRequest): Promise<DeleteImageFromLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImageFromLibWithOptions(request, runtime);
  }

  async deleteImageLibWithOptions(request: DeleteImageLibRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImageLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteImageLib",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteImageLibResponse>(await this.callApi(params, req, runtime), new DeleteImageLibResponse({}));
  }

  async deleteImageLib(request: DeleteImageLibRequest): Promise<DeleteImageLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImageLibWithOptions(request, runtime);
  }

  async deleteKeywordWithOptions(request: DeleteKeywordRequest, runtime: $Util.RuntimeOptions): Promise<DeleteKeywordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.keywordLibId)) {
      query["KeywordLibId"] = request.keywordLibId;
    }

    if (!Util.isUnset(request.keywords)) {
      query["Keywords"] = request.keywords;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteKeyword",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteKeywordResponse>(await this.callApi(params, req, runtime), new DeleteKeywordResponse({}));
  }

  async deleteKeyword(request: DeleteKeywordRequest): Promise<DeleteKeywordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteKeywordWithOptions(request, runtime);
  }

  async deleteKeywordLibWithOptions(request: DeleteKeywordLibRequest, runtime: $Util.RuntimeOptions): Promise<DeleteKeywordLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteKeywordLib",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteKeywordLibResponse>(await this.callApi(params, req, runtime), new DeleteKeywordLibResponse({}));
  }

  async deleteKeywordLib(request: DeleteKeywordLibRequest): Promise<DeleteKeywordLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteKeywordLibWithOptions(request, runtime);
  }

  async deleteNotificationContactsWithOptions(request: DeleteNotificationContactsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNotificationContactsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactTypes)) {
      query["ContactTypes"] = request.contactTypes;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNotificationContacts",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNotificationContactsResponse>(await this.callApi(params, req, runtime), new DeleteNotificationContactsResponse({}));
  }

  async deleteNotificationContacts(request: DeleteNotificationContactsRequest): Promise<DeleteNotificationContactsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNotificationContactsWithOptions(request, runtime);
  }

  async describeAppInfoWithOptions(request: DescribeAppInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.totalCount)) {
      query["TotalCount"] = request.totalCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppInfo",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppInfoResponse>(await this.callApi(params, req, runtime), new DescribeAppInfoResponse({}));
  }

  async describeAppInfo(request: DescribeAppInfoRequest): Promise<DescribeAppInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppInfoWithOptions(request, runtime);
  }

  async describeAuditCallbackWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeAuditCallbackResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeAuditCallback",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAuditCallbackResponse>(await this.callApi(params, req, runtime), new DescribeAuditCallbackResponse({}));
  }

  async describeAuditCallback(): Promise<DescribeAuditCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditCallbackWithOptions(runtime);
  }

  async describeAuditCallbackListWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeAuditCallbackListResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeAuditCallbackList",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAuditCallbackListResponse>(await this.callApi(params, req, runtime), new DescribeAuditCallbackListResponse({}));
  }

  async describeAuditCallbackList(): Promise<DescribeAuditCallbackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditCallbackListWithOptions(runtime);
  }

  async describeAuditContentWithOptions(request: DescribeAuditContentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuditContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditResult)) {
      query["AuditResult"] = request.auditResult;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.keywordId)) {
      query["KeywordId"] = request.keywordId;
    }

    if (!Util.isUnset(request.label)) {
      query["Label"] = request.label;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.libType)) {
      query["LibType"] = request.libType;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.suggestion)) {
      query["Suggestion"] = request.suggestion;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.totalCount)) {
      query["TotalCount"] = request.totalCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAuditContent",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAuditContentResponse>(await this.callApi(params, req, runtime), new DescribeAuditContentResponse({}));
  }

  async describeAuditContent(request: DescribeAuditContentRequest): Promise<DescribeAuditContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditContentWithOptions(request, runtime);
  }

  async describeAuditContentItemWithOptions(request: DescribeAuditContentItemRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuditContentItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.totalCount)) {
      query["TotalCount"] = request.totalCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAuditContentItem",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAuditContentItemResponse>(await this.callApi(params, req, runtime), new DescribeAuditContentItemResponse({}));
  }

  async describeAuditContentItem(request: DescribeAuditContentItemRequest): Promise<DescribeAuditContentItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditContentItemWithOptions(request, runtime);
  }

  async describeAuditRangeWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeAuditRangeResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeAuditRange",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAuditRangeResponse>(await this.callApi(params, req, runtime), new DescribeAuditRangeResponse({}));
  }

  async describeAuditRange(): Promise<DescribeAuditRangeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditRangeWithOptions(runtime);
  }

  async describeAuditSettingWithOptions(request: DescribeAuditSettingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuditSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAuditSetting",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAuditSettingResponse>(await this.callApi(params, req, runtime), new DescribeAuditSettingResponse({}));
  }

  async describeAuditSetting(request: DescribeAuditSettingRequest): Promise<DescribeAuditSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditSettingWithOptions(request, runtime);
  }

  async describeBizTypeImageLibWithOptions(request: DescribeBizTypeImageLibRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBizTypeImageLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizTypeName)) {
      query["BizTypeName"] = request.bizTypeName;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.scene)) {
      query["Scene"] = request.scene;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBizTypeImageLib",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBizTypeImageLibResponse>(await this.callApi(params, req, runtime), new DescribeBizTypeImageLibResponse({}));
  }

  async describeBizTypeImageLib(request: DescribeBizTypeImageLibRequest): Promise<DescribeBizTypeImageLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBizTypeImageLibWithOptions(request, runtime);
  }

  async describeBizTypeSettingWithOptions(request: DescribeBizTypeSettingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBizTypeSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizTypeName)) {
      query["BizTypeName"] = request.bizTypeName;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBizTypeSetting",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBizTypeSettingResponse>(await this.callApi(params, req, runtime), new DescribeBizTypeSettingResponse({}));
  }

  async describeBizTypeSetting(request: DescribeBizTypeSettingRequest): Promise<DescribeBizTypeSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBizTypeSettingWithOptions(request, runtime);
  }

  async describeBizTypeTextLibWithOptions(request: DescribeBizTypeTextLibRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBizTypeTextLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizTypeName)) {
      query["BizTypeName"] = request.bizTypeName;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.scene)) {
      query["Scene"] = request.scene;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBizTypeTextLib",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBizTypeTextLibResponse>(await this.callApi(params, req, runtime), new DescribeBizTypeTextLibResponse({}));
  }

  async describeBizTypeTextLib(request: DescribeBizTypeTextLibRequest): Promise<DescribeBizTypeTextLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBizTypeTextLibWithOptions(request, runtime);
  }

  async describeBizTypesWithOptions(request: DescribeBizTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBizTypesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.importFlag)) {
      query["ImportFlag"] = request.importFlag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBizTypes",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBizTypesResponse>(await this.callApi(params, req, runtime), new DescribeBizTypesResponse({}));
  }

  async describeBizTypes(request: DescribeBizTypesRequest): Promise<DescribeBizTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBizTypesWithOptions(request, runtime);
  }

  async describeCloudMonitorServicesWithOptions(request: DescribeCloudMonitorServicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudMonitorServicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCloudMonitorServices",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCloudMonitorServicesResponse>(await this.callApi(params, req, runtime), new DescribeCloudMonitorServicesResponse({}));
  }

  async describeCloudMonitorServices(request: DescribeCloudMonitorServicesRequest): Promise<DescribeCloudMonitorServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudMonitorServicesWithOptions(request, runtime);
  }

  async describeCustomOcrTemplateWithOptions(request: DescribeCustomOcrTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomOcrTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomOcrTemplate",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomOcrTemplateResponse>(await this.callApi(params, req, runtime), new DescribeCustomOcrTemplateResponse({}));
  }

  async describeCustomOcrTemplate(request: DescribeCustomOcrTemplateRequest): Promise<DescribeCustomOcrTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomOcrTemplateWithOptions(request, runtime);
  }

  async describeImageFromLibWithOptions(request: DescribeImageFromLibRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageFromLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.imageLibId)) {
      query["ImageLibId"] = request.imageLibId;
    }

    if (!Util.isUnset(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.totalCount)) {
      query["TotalCount"] = request.totalCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImageFromLib",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageFromLibResponse>(await this.callApi(params, req, runtime), new DescribeImageFromLibResponse({}));
  }

  async describeImageFromLib(request: DescribeImageFromLibRequest): Promise<DescribeImageFromLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageFromLibWithOptions(request, runtime);
  }

  async describeImageLibWithOptions(request: DescribeImageLibRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serviceModule)) {
      query["ServiceModule"] = request.serviceModule;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImageLib",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageLibResponse>(await this.callApi(params, req, runtime), new DescribeImageLibResponse({}));
  }

  async describeImageLib(request: DescribeImageLibRequest): Promise<DescribeImageLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageLibWithOptions(request, runtime);
  }

  async describeImageUploadInfoWithOptions(request: DescribeImageUploadInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageUploadInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImageUploadInfo",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageUploadInfoResponse>(await this.callApi(params, req, runtime), new DescribeImageUploadInfoResponse({}));
  }

  async describeImageUploadInfo(request: DescribeImageUploadInfoRequest): Promise<DescribeImageUploadInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageUploadInfoWithOptions(request, runtime);
  }

  async describeKeywordWithOptions(request: DescribeKeywordRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKeywordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.keywordLibId)) {
      query["KeywordLibId"] = request.keywordLibId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.totalCount)) {
      query["TotalCount"] = request.totalCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeKeyword",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeKeywordResponse>(await this.callApi(params, req, runtime), new DescribeKeywordResponse({}));
  }

  async describeKeyword(request: DescribeKeywordRequest): Promise<DescribeKeywordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKeywordWithOptions(request, runtime);
  }

  async describeKeywordLibWithOptions(request: DescribeKeywordLibRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKeywordLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.serviceModule)) {
      query["ServiceModule"] = request.serviceModule;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeKeywordLib",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeKeywordLibResponse>(await this.callApi(params, req, runtime), new DescribeKeywordLibResponse({}));
  }

  async describeKeywordLib(request: DescribeKeywordLibRequest): Promise<DescribeKeywordLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKeywordLibWithOptions(request, runtime);
  }

  async describeNotificationSettingWithOptions(request: DescribeNotificationSettingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNotificationSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNotificationSetting",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNotificationSettingResponse>(await this.callApi(params, req, runtime), new DescribeNotificationSettingResponse({}));
  }

  async describeNotificationSetting(request: DescribeNotificationSettingRequest): Promise<DescribeNotificationSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNotificationSettingWithOptions(request, runtime);
  }

  async describeOpenApiRcpStatsWithOptions(request: DescribeOpenApiRcpStatsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOpenApiRcpStatsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOpenApiRcpStats",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOpenApiRcpStatsResponse>(await this.callApi(params, req, runtime), new DescribeOpenApiRcpStatsResponse({}));
  }

  async describeOpenApiRcpStats(request: DescribeOpenApiRcpStatsRequest): Promise<DescribeOpenApiRcpStatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOpenApiRcpStatsWithOptions(request, runtime);
  }

  async describeOpenApiUsageWithOptions(request: DescribeOpenApiUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOpenApiUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOpenApiUsage",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOpenApiUsageResponse>(await this.callApi(params, req, runtime), new DescribeOpenApiUsageResponse({}));
  }

  async describeOpenApiUsage(request: DescribeOpenApiUsageRequest): Promise<DescribeOpenApiUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOpenApiUsageWithOptions(request, runtime);
  }

  async describeOssCallbackSettingWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeOssCallbackSettingResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeOssCallbackSetting",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOssCallbackSettingResponse>(await this.callApi(params, req, runtime), new DescribeOssCallbackSettingResponse({}));
  }

  async describeOssCallbackSetting(): Promise<DescribeOssCallbackSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssCallbackSettingWithOptions(runtime);
  }

  async describeOssIncrementCheckSettingWithOptions(request: DescribeOssIncrementCheckSettingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOssIncrementCheckSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOssIncrementCheckSetting",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOssIncrementCheckSettingResponse>(await this.callApi(params, req, runtime), new DescribeOssIncrementCheckSettingResponse({}));
  }

  async describeOssIncrementCheckSetting(request: DescribeOssIncrementCheckSettingRequest): Promise<DescribeOssIncrementCheckSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssIncrementCheckSettingWithOptions(request, runtime);
  }

  async describeOssIncrementOverviewWithOptions(request: DescribeOssIncrementOverviewRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOssIncrementOverviewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOssIncrementOverview",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOssIncrementOverviewResponse>(await this.callApi(params, req, runtime), new DescribeOssIncrementOverviewResponse({}));
  }

  async describeOssIncrementOverview(request: DescribeOssIncrementOverviewRequest): Promise<DescribeOssIncrementOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssIncrementOverviewWithOptions(request, runtime);
  }

  async describeOssIncrementStatsWithOptions(request: DescribeOssIncrementStatsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOssIncrementStatsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOssIncrementStats",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOssIncrementStatsResponse>(await this.callApi(params, req, runtime), new DescribeOssIncrementStatsResponse({}));
  }

  async describeOssIncrementStats(request: DescribeOssIncrementStatsRequest): Promise<DescribeOssIncrementStatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssIncrementStatsWithOptions(request, runtime);
  }

  async describeOssResultItemsWithOptions(request: DescribeOssResultItemsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOssResultItemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.maxScore)) {
      query["MaxScore"] = request.maxScore;
    }

    if (!Util.isUnset(request.minScore)) {
      query["MinScore"] = request.minScore;
    }

    if (!Util.isUnset(request.object)) {
      query["Object"] = request.object;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryId)) {
      query["QueryId"] = request.queryId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.stock)) {
      query["Stock"] = request.stock;
    }

    if (!Util.isUnset(request.stockTaskId)) {
      query["StockTaskId"] = request.stockTaskId;
    }

    if (!Util.isUnset(request.suggestion)) {
      query["Suggestion"] = request.suggestion;
    }

    if (!Util.isUnset(request.totalCount)) {
      query["TotalCount"] = request.totalCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOssResultItems",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOssResultItemsResponse>(await this.callApi(params, req, runtime), new DescribeOssResultItemsResponse({}));
  }

  async describeOssResultItems(request: DescribeOssResultItemsRequest): Promise<DescribeOssResultItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssResultItemsWithOptions(request, runtime);
  }

  async describeOssStockStatusWithOptions(request: DescribeOssStockStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOssStockStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.stockTaskId)) {
      query["StockTaskId"] = request.stockTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOssStockStatus",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOssStockStatusResponse>(await this.callApi(params, req, runtime), new DescribeOssStockStatusResponse({}));
  }

  async describeOssStockStatus(request: DescribeOssStockStatusRequest): Promise<DescribeOssStockStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssStockStatusWithOptions(request, runtime);
  }

  async describeSdkUrlWithOptions(request: DescribeSdkUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSdkUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.debug)) {
      query["Debug"] = request.debug;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSdkUrl",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSdkUrlResponse>(await this.callApi(params, req, runtime), new DescribeSdkUrlResponse({}));
  }

  async describeSdkUrl(request: DescribeSdkUrlRequest): Promise<DescribeSdkUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSdkUrlWithOptions(request, runtime);
  }

  async describeUpdatePackageResultWithOptions(request: DescribeUpdatePackageResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUpdatePackageResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUpdatePackageResult",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUpdatePackageResultResponse>(await this.callApi(params, req, runtime), new DescribeUpdatePackageResultResponse({}));
  }

  async describeUpdatePackageResult(request: DescribeUpdatePackageResultRequest): Promise<DescribeUpdatePackageResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUpdatePackageResultWithOptions(request, runtime);
  }

  async describeUploadInfoWithOptions(request: DescribeUploadInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUploadInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.biz)) {
      query["Biz"] = request.biz;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUploadInfo",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUploadInfoResponse>(await this.callApi(params, req, runtime), new DescribeUploadInfoResponse({}));
  }

  async describeUploadInfo(request: DescribeUploadInfoRequest): Promise<DescribeUploadInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUploadInfoWithOptions(request, runtime);
  }

  async describeUsageBillWithOptions(request: DescribeUsageBillRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUsageBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.day)) {
      query["Day"] = request.day;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.totalCount)) {
      query["TotalCount"] = request.totalCount;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUsageBill",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUsageBillResponse>(await this.callApi(params, req, runtime), new DescribeUsageBillResponse({}));
  }

  async describeUsageBill(request: DescribeUsageBillRequest): Promise<DescribeUsageBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUsageBillWithOptions(request, runtime);
  }

  async describeUserBizTypesWithOptions(request: DescribeUserBizTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserBizTypesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customized)) {
      query["Customized"] = request.customized;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserBizTypes",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserBizTypesResponse>(await this.callApi(params, req, runtime), new DescribeUserBizTypesResponse({}));
  }

  async describeUserBizTypes(request: DescribeUserBizTypesRequest): Promise<DescribeUserBizTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserBizTypesWithOptions(request, runtime);
  }

  async describeUserStatusWithOptions(request: DescribeUserStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserStatus",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserStatusResponse>(await this.callApi(params, req, runtime), new DescribeUserStatusResponse({}));
  }

  async describeUserStatus(request: DescribeUserStatusRequest): Promise<DescribeUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserStatusWithOptions(request, runtime);
  }

  async describeViewContentWithOptions(request: DescribeViewContentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeViewContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditResult)) {
      query["AuditResult"] = request.auditResult;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.keywordId)) {
      query["KeywordId"] = request.keywordId;
    }

    if (!Util.isUnset(request.label)) {
      query["Label"] = request.label;
    }

    if (!Util.isUnset(request.libType)) {
      query["LibType"] = request.libType;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.suggestion)) {
      query["Suggestion"] = request.suggestion;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.totalCount)) {
      query["TotalCount"] = request.totalCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeViewContent",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeViewContentResponse>(await this.callApi(params, req, runtime), new DescribeViewContentResponse({}));
  }

  async describeViewContent(request: DescribeViewContentRequest): Promise<DescribeViewContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeViewContentWithOptions(request, runtime);
  }

  async describeWebsiteIndexPageBaselineWithOptions(request: DescribeWebsiteIndexPageBaselineRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebsiteIndexPageBaselineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebsiteIndexPageBaseline",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebsiteIndexPageBaselineResponse>(await this.callApi(params, req, runtime), new DescribeWebsiteIndexPageBaselineResponse({}));
  }

  async describeWebsiteIndexPageBaseline(request: DescribeWebsiteIndexPageBaselineRequest): Promise<DescribeWebsiteIndexPageBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebsiteIndexPageBaselineWithOptions(request, runtime);
  }

  async describeWebsiteInstanceWithOptions(request: DescribeWebsiteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebsiteInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.totalCount)) {
      query["TotalCount"] = request.totalCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebsiteInstance",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebsiteInstanceResponse>(await this.callApi(params, req, runtime), new DescribeWebsiteInstanceResponse({}));
  }

  async describeWebsiteInstance(request: DescribeWebsiteInstanceRequest): Promise<DescribeWebsiteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebsiteInstanceWithOptions(request, runtime);
  }

  async describeWebsiteInstanceIdWithOptions(request: DescribeWebsiteInstanceIdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebsiteInstanceIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebsiteInstanceId",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebsiteInstanceIdResponse>(await this.callApi(params, req, runtime), new DescribeWebsiteInstanceIdResponse({}));
  }

  async describeWebsiteInstanceId(request: DescribeWebsiteInstanceIdRequest): Promise<DescribeWebsiteInstanceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebsiteInstanceIdWithOptions(request, runtime);
  }

  async describeWebsiteInstanceKeyUrlWithOptions(request: DescribeWebsiteInstanceKeyUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebsiteInstanceKeyUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebsiteInstanceKeyUrl",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebsiteInstanceKeyUrlResponse>(await this.callApi(params, req, runtime), new DescribeWebsiteInstanceKeyUrlResponse({}));
  }

  async describeWebsiteInstanceKeyUrl(request: DescribeWebsiteInstanceKeyUrlRequest): Promise<DescribeWebsiteInstanceKeyUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebsiteInstanceKeyUrlWithOptions(request, runtime);
  }

  async describeWebsiteScanResultWithOptions(request: DescribeWebsiteScanResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebsiteScanResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.handleStatus)) {
      query["HandleStatus"] = request.handleStatus;
    }

    if (!Util.isUnset(request.label)) {
      query["Label"] = request.label;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.siteUrl)) {
      query["SiteUrl"] = request.siteUrl;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.subServiceModule)) {
      query["SubServiceModule"] = request.subServiceModule;
    }

    if (!Util.isUnset(request.totalCount)) {
      query["TotalCount"] = request.totalCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebsiteScanResult",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebsiteScanResultResponse>(await this.callApi(params, req, runtime), new DescribeWebsiteScanResultResponse({}));
  }

  async describeWebsiteScanResult(request: DescribeWebsiteScanResultRequest): Promise<DescribeWebsiteScanResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebsiteScanResultWithOptions(request, runtime);
  }

  async describeWebsiteScanResultDetailWithOptions(request: DescribeWebsiteScanResultDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebsiteScanResultDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebsiteScanResultDetail",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebsiteScanResultDetailResponse>(await this.callApi(params, req, runtime), new DescribeWebsiteScanResultDetailResponse({}));
  }

  async describeWebsiteScanResultDetail(request: DescribeWebsiteScanResultDetailRequest): Promise<DescribeWebsiteScanResultDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebsiteScanResultDetailWithOptions(request, runtime);
  }

  async describeWebsiteStatWithOptions(request: DescribeWebsiteStatRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebsiteStatResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebsiteStat",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebsiteStatResponse>(await this.callApi(params, req, runtime), new DescribeWebsiteStatResponse({}));
  }

  async describeWebsiteStat(request: DescribeWebsiteStatRequest): Promise<DescribeWebsiteStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebsiteStatWithOptions(request, runtime);
  }

  async describeWebsiteVerifyInfoWithOptions(request: DescribeWebsiteVerifyInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebsiteVerifyInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebsiteVerifyInfo",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebsiteVerifyInfoResponse>(await this.callApi(params, req, runtime), new DescribeWebsiteVerifyInfoResponse({}));
  }

  async describeWebsiteVerifyInfo(request: DescribeWebsiteVerifyInfoRequest): Promise<DescribeWebsiteVerifyInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebsiteVerifyInfoWithOptions(request, runtime);
  }

  async exportKeywordsWithOptions(request: ExportKeywordsRequest, runtime: $Util.RuntimeOptions): Promise<ExportKeywordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keywordLibId)) {
      query["KeywordLibId"] = request.keywordLibId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportKeywords",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportKeywordsResponse>(await this.callApi(params, req, runtime), new ExportKeywordsResponse({}));
  }

  async exportKeywords(request: ExportKeywordsRequest): Promise<ExportKeywordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportKeywordsWithOptions(request, runtime);
  }

  async exportOpenApiRcpStatsWithOptions(request: ExportOpenApiRcpStatsRequest, runtime: $Util.RuntimeOptions): Promise<ExportOpenApiRcpStatsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportOpenApiRcpStats",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportOpenApiRcpStatsResponse>(await this.callApi(params, req, runtime), new ExportOpenApiRcpStatsResponse({}));
  }

  async exportOpenApiRcpStats(request: ExportOpenApiRcpStatsRequest): Promise<ExportOpenApiRcpStatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportOpenApiRcpStatsWithOptions(request, runtime);
  }

  async exportOssResultWithOptions(request: ExportOssResultRequest, runtime: $Util.RuntimeOptions): Promise<ExportOssResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.maxScore)) {
      query["MaxScore"] = request.maxScore;
    }

    if (!Util.isUnset(request.minScore)) {
      query["MinScore"] = request.minScore;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.stock)) {
      query["Stock"] = request.stock;
    }

    if (!Util.isUnset(request.stockTaskId)) {
      query["StockTaskId"] = request.stockTaskId;
    }

    if (!Util.isUnset(request.suggestion)) {
      query["Suggestion"] = request.suggestion;
    }

    if (!Util.isUnset(request.totalCount)) {
      query["TotalCount"] = request.totalCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportOssResult",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportOssResultResponse>(await this.callApi(params, req, runtime), new ExportOssResultResponse({}));
  }

  async exportOssResult(request: ExportOssResultRequest): Promise<ExportOssResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportOssResultWithOptions(request, runtime);
  }

  async getAuditItemDetailWithOptions(request: GetAuditItemDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetAuditItemDetailResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAuditItemDetail",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAuditItemDetailResponse>(await this.callApi(params, req, runtime), new GetAuditItemDetailResponse({}));
  }

  async getAuditItemDetail(request: GetAuditItemDetailRequest): Promise<GetAuditItemDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuditItemDetailWithOptions(request, runtime);
  }

  async getAuditItemListWithOptions(request: GetAuditItemListRequest, runtime: $Util.RuntimeOptions): Promise<GetAuditItemListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAuditItemList",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAuditItemListResponse>(await this.callApi(params, req, runtime), new GetAuditItemListResponse({}));
  }

  async getAuditItemList(request: GetAuditItemListRequest): Promise<GetAuditItemListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuditItemListWithOptions(request, runtime);
  }

  async getAuditUserConfWithOptions(runtime: $Util.RuntimeOptions): Promise<GetAuditUserConfResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetAuditUserConf",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAuditUserConfResponse>(await this.callApi(params, req, runtime), new GetAuditUserConfResponse({}));
  }

  async getAuditUserConf(): Promise<GetAuditUserConfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuditUserConfWithOptions(runtime);
  }

  async importKeywordsWithOptions(request: ImportKeywordsRequest, runtime: $Util.RuntimeOptions): Promise<ImportKeywordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keywordLibId)) {
      query["KeywordLibId"] = request.keywordLibId;
    }

    if (!Util.isUnset(request.keywordsObject)) {
      query["KeywordsObject"] = request.keywordsObject;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportKeywords",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportKeywordsResponse>(await this.callApi(params, req, runtime), new ImportKeywordsResponse({}));
  }

  async importKeywords(request: ImportKeywordsRequest): Promise<ImportKeywordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importKeywordsWithOptions(request, runtime);
  }

  async markAuditContentWithOptions(request: MarkAuditContentRequest, runtime: $Util.RuntimeOptions): Promise<MarkAuditContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditIllegalReasons)) {
      query["AuditIllegalReasons"] = request.auditIllegalReasons;
    }

    if (!Util.isUnset(request.auditResult)) {
      query["AuditResult"] = request.auditResult;
    }

    if (!Util.isUnset(request.bizTypes)) {
      query["BizTypes"] = request.bizTypes;
    }

    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MarkAuditContent",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MarkAuditContentResponse>(await this.callApi(params, req, runtime), new MarkAuditContentResponse({}));
  }

  async markAuditContent(request: MarkAuditContentRequest): Promise<MarkAuditContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.markAuditContentWithOptions(request, runtime);
  }

  async markAuditContentItemWithOptions(request: MarkAuditContentItemRequest, runtime: $Util.RuntimeOptions): Promise<MarkAuditContentItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditIllegalReasons)) {
      query["AuditIllegalReasons"] = request.auditIllegalReasons;
    }

    if (!Util.isUnset(request.auditResult)) {
      query["AuditResult"] = request.auditResult;
    }

    if (!Util.isUnset(request.bizTypes)) {
      query["BizTypes"] = request.bizTypes;
    }

    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MarkAuditContentItem",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MarkAuditContentItemResponse>(await this.callApi(params, req, runtime), new MarkAuditContentItemResponse({}));
  }

  async markAuditContentItem(request: MarkAuditContentItemRequest): Promise<MarkAuditContentItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.markAuditContentItemWithOptions(request, runtime);
  }

  async markOssResultWithOptions(request: MarkOssResultRequest, runtime: $Util.RuntimeOptions): Promise<MarkOssResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.stock)) {
      query["Stock"] = request.stock;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MarkOssResult",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MarkOssResultResponse>(await this.callApi(params, req, runtime), new MarkOssResultResponse({}));
  }

  async markOssResult(request: MarkOssResultRequest): Promise<MarkOssResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.markOssResultWithOptions(request, runtime);
  }

  async markWebsiteScanResultWithOptions(request: MarkWebsiteScanResultRequest, runtime: $Util.RuntimeOptions): Promise<MarkWebsiteScanResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MarkWebsiteScanResult",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MarkWebsiteScanResultResponse>(await this.callApi(params, req, runtime), new MarkWebsiteScanResultResponse({}));
  }

  async markWebsiteScanResult(request: MarkWebsiteScanResultRequest): Promise<MarkWebsiteScanResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.markWebsiteScanResultWithOptions(request, runtime);
  }

  async refundCdiBagWithOptions(request: RefundCdiBagRequest, runtime: $Util.RuntimeOptions): Promise<RefundCdiBagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefundCdiBag",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefundCdiBagResponse>(await this.callApi(params, req, runtime), new RefundCdiBagResponse({}));
  }

  async refundCdiBag(request: RefundCdiBagRequest): Promise<RefundCdiBagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refundCdiBagWithOptions(request, runtime);
  }

  async refundCdiBaseBagWithOptions(request: RefundCdiBaseBagRequest, runtime: $Util.RuntimeOptions): Promise<RefundCdiBaseBagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefundCdiBaseBag",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefundCdiBaseBagResponse>(await this.callApi(params, req, runtime), new RefundCdiBaseBagResponse({}));
  }

  async refundCdiBaseBag(request: RefundCdiBaseBagRequest): Promise<RefundCdiBaseBagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refundCdiBaseBagWithOptions(request, runtime);
  }

  async refundWebSiteInstanceWithOptions(request: RefundWebSiteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RefundWebSiteInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefundWebSiteInstance",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefundWebSiteInstanceResponse>(await this.callApi(params, req, runtime), new RefundWebSiteInstanceResponse({}));
  }

  async refundWebSiteInstance(request: RefundWebSiteInstanceRequest): Promise<RefundWebSiteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refundWebSiteInstanceWithOptions(request, runtime);
  }

  async renewWebSiteInstanceWithOptions(request: RenewWebSiteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewWebSiteInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderNum)) {
      query["OrderNum"] = request.orderNum;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewWebSiteInstance",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewWebSiteInstanceResponse>(await this.callApi(params, req, runtime), new RenewWebSiteInstanceResponse({}));
  }

  async renewWebSiteInstance(request: RenewWebSiteInstanceRequest): Promise<RenewWebSiteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewWebSiteInstanceWithOptions(request, runtime);
  }

  async sendVerifyCodeToEmailWithOptions(request: SendVerifyCodeToEmailRequest, runtime: $Util.RuntimeOptions): Promise<SendVerifyCodeToEmailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendVerifyCodeToEmail",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendVerifyCodeToEmailResponse>(await this.callApi(params, req, runtime), new SendVerifyCodeToEmailResponse({}));
  }

  async sendVerifyCodeToEmail(request: SendVerifyCodeToEmailRequest): Promise<SendVerifyCodeToEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendVerifyCodeToEmailWithOptions(request, runtime);
  }

  async sendVerifyCodeToPhoneWithOptions(request: SendVerifyCodeToPhoneRequest, runtime: $Util.RuntimeOptions): Promise<SendVerifyCodeToPhoneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendVerifyCodeToPhone",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendVerifyCodeToPhoneResponse>(await this.callApi(params, req, runtime), new SendVerifyCodeToPhoneResponse({}));
  }

  async sendVerifyCodeToPhone(request: SendVerifyCodeToPhoneRequest): Promise<SendVerifyCodeToPhoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendVerifyCodeToPhoneWithOptions(request, runtime);
  }

  async sendWebsiteFeedbackWithOptions(request: SendWebsiteFeedbackRequest, runtime: $Util.RuntimeOptions): Promise<SendWebsiteFeedbackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.feedback)) {
      query["Feedback"] = request.feedback;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.urls)) {
      query["Urls"] = request.urls;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendWebsiteFeedback",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendWebsiteFeedbackResponse>(await this.callApi(params, req, runtime), new SendWebsiteFeedbackResponse({}));
  }

  async sendWebsiteFeedback(request: SendWebsiteFeedbackRequest): Promise<SendWebsiteFeedbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendWebsiteFeedbackWithOptions(request, runtime);
  }

  async updateAppPackageWithOptions(request: UpdateAppPackageRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.debug)) {
      query["Debug"] = request.debug;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.packageUrl)) {
      query["PackageUrl"] = request.packageUrl;
    }

    if (!Util.isUnset(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppPackage",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppPackageResponse>(await this.callApi(params, req, runtime), new UpdateAppPackageResponse({}));
  }

  async updateAppPackage(request: UpdateAppPackageRequest): Promise<UpdateAppPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppPackageWithOptions(request, runtime);
  }

  async updateAuditCallbackWithOptions(request: UpdateAuditCallbackRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAuditCallbackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!Util.isUnset(request.cryptType)) {
      query["CryptType"] = request.cryptType;
    }

    if (!Util.isUnset(request.seed)) {
      query["Seed"] = request.seed;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAuditCallback",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAuditCallbackResponse>(await this.callApi(params, req, runtime), new UpdateAuditCallbackResponse({}));
  }

  async updateAuditCallback(request: UpdateAuditCallbackRequest): Promise<UpdateAuditCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAuditCallbackWithOptions(request, runtime);
  }

  async updateAuditRangeWithOptions(request: UpdateAuditRangeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAuditRangeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditRange)) {
      query["AuditRange"] = request.auditRange;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAuditRange",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAuditRangeResponse>(await this.callApi(params, req, runtime), new UpdateAuditRangeResponse({}));
  }

  async updateAuditRange(request: UpdateAuditRangeRequest): Promise<UpdateAuditRangeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAuditRangeWithOptions(request, runtime);
  }

  async updateAuditSettingWithOptions(request: UpdateAuditSettingRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAuditSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditRange)) {
      query["AuditRange"] = request.auditRange;
    }

    if (!Util.isUnset(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!Util.isUnset(request.seed)) {
      query["Seed"] = request.seed;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAuditSetting",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAuditSettingResponse>(await this.callApi(params, req, runtime), new UpdateAuditSettingResponse({}));
  }

  async updateAuditSetting(request: UpdateAuditSettingRequest): Promise<UpdateAuditSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAuditSettingWithOptions(request, runtime);
  }

  async updateBizTypeWithOptions(request: UpdateBizTypeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBizTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizTypeName)) {
      query["BizTypeName"] = request.bizTypeName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBizType",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBizTypeResponse>(await this.callApi(params, req, runtime), new UpdateBizTypeResponse({}));
  }

  async updateBizType(request: UpdateBizTypeRequest): Promise<UpdateBizTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBizTypeWithOptions(request, runtime);
  }

  async updateBizTypeImageLibWithOptions(request: UpdateBizTypeImageLibRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBizTypeImageLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizTypeName)) {
      query["BizTypeName"] = request.bizTypeName;
    }

    if (!Util.isUnset(request.black)) {
      query["Black"] = request.black;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.review)) {
      query["Review"] = request.review;
    }

    if (!Util.isUnset(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.white)) {
      query["White"] = request.white;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBizTypeImageLib",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBizTypeImageLibResponse>(await this.callApi(params, req, runtime), new UpdateBizTypeImageLibResponse({}));
  }

  async updateBizTypeImageLib(request: UpdateBizTypeImageLibRequest): Promise<UpdateBizTypeImageLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBizTypeImageLibWithOptions(request, runtime);
  }

  async updateBizTypeSettingWithOptions(request: UpdateBizTypeSettingRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBizTypeSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ad)) {
      query["Ad"] = request.ad;
    }

    if (!Util.isUnset(request.antispam)) {
      query["Antispam"] = request.antispam;
    }

    if (!Util.isUnset(request.bizTypeName)) {
      query["BizTypeName"] = request.bizTypeName;
    }

    if (!Util.isUnset(request.live)) {
      query["Live"] = request.live;
    }

    if (!Util.isUnset(request.porn)) {
      query["Porn"] = request.porn;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.terrorism)) {
      query["Terrorism"] = request.terrorism;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBizTypeSetting",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBizTypeSettingResponse>(await this.callApi(params, req, runtime), new UpdateBizTypeSettingResponse({}));
  }

  async updateBizTypeSetting(request: UpdateBizTypeSettingRequest): Promise<UpdateBizTypeSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBizTypeSettingWithOptions(request, runtime);
  }

  async updateBizTypeTextLibWithOptions(request: UpdateBizTypeTextLibRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBizTypeTextLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizTypeName)) {
      query["BizTypeName"] = request.bizTypeName;
    }

    if (!Util.isUnset(request.black)) {
      query["Black"] = request.black;
    }

    if (!Util.isUnset(request.ignore)) {
      query["Ignore"] = request.ignore;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.review)) {
      query["Review"] = request.review;
    }

    if (!Util.isUnset(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.white)) {
      query["White"] = request.white;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBizTypeTextLib",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBizTypeTextLibResponse>(await this.callApi(params, req, runtime), new UpdateBizTypeTextLibResponse({}));
  }

  async updateBizTypeTextLib(request: UpdateBizTypeTextLibRequest): Promise<UpdateBizTypeTextLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBizTypeTextLibWithOptions(request, runtime);
  }

  async updateCustomOcrTemplateWithOptions(request: UpdateCustomOcrTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCustomOcrTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.recognizeArea)) {
      query["RecognizeArea"] = request.recognizeArea;
    }

    if (!Util.isUnset(request.referArea)) {
      query["ReferArea"] = request.referArea;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCustomOcrTemplate",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCustomOcrTemplateResponse>(await this.callApi(params, req, runtime), new UpdateCustomOcrTemplateResponse({}));
  }

  async updateCustomOcrTemplate(request: UpdateCustomOcrTemplateRequest): Promise<UpdateCustomOcrTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCustomOcrTemplateWithOptions(request, runtime);
  }

  async updateKeywordLibWithOptions(request: UpdateKeywordLibRequest, runtime: $Util.RuntimeOptions): Promise<UpdateKeywordLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizTypes)) {
      query["BizTypes"] = request.bizTypes;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.matchMode)) {
      query["MatchMode"] = request.matchMode;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateKeywordLib",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateKeywordLibResponse>(await this.callApi(params, req, runtime), new UpdateKeywordLibResponse({}));
  }

  async updateKeywordLib(request: UpdateKeywordLibRequest): Promise<UpdateKeywordLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateKeywordLibWithOptions(request, runtime);
  }

  async updateNotificationSettingWithOptions(request: UpdateNotificationSettingRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNotificationSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.realtimeMessageList)) {
      query["RealtimeMessageList"] = request.realtimeMessageList;
    }

    if (!Util.isUnset(request.reminderModeList)) {
      query["ReminderModeList"] = request.reminderModeList;
    }

    if (!Util.isUnset(request.scheduleMessageTime)) {
      query["ScheduleMessageTime"] = request.scheduleMessageTime;
    }

    if (!Util.isUnset(request.scheduleMessageTimeZone)) {
      query["ScheduleMessageTimeZone"] = request.scheduleMessageTimeZone;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNotificationSetting",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateNotificationSettingResponse>(await this.callApi(params, req, runtime), new UpdateNotificationSettingResponse({}));
  }

  async updateNotificationSetting(request: UpdateNotificationSettingRequest): Promise<UpdateNotificationSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNotificationSettingWithOptions(request, runtime);
  }

  async updateOssCallbackSettingWithOptions(request: UpdateOssCallbackSettingRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOssCallbackSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditCallback)) {
      query["AuditCallback"] = request.auditCallback;
    }

    if (!Util.isUnset(request.callbackSeed)) {
      query["CallbackSeed"] = request.callbackSeed;
    }

    if (!Util.isUnset(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!Util.isUnset(request.scanCallback)) {
      query["ScanCallback"] = request.scanCallback;
    }

    if (!Util.isUnset(request.scanCallbackSuggestions)) {
      query["ScanCallbackSuggestions"] = request.scanCallbackSuggestions;
    }

    if (!Util.isUnset(request.serviceModules)) {
      query["ServiceModules"] = request.serviceModules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateOssCallbackSetting",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateOssCallbackSettingResponse>(await this.callApi(params, req, runtime), new UpdateOssCallbackSettingResponse({}));
  }

  async updateOssCallbackSetting(request: UpdateOssCallbackSettingRequest): Promise<UpdateOssCallbackSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOssCallbackSettingWithOptions(request, runtime);
  }

  async updateOssIncrementCheckSettingWithOptions(request: UpdateOssIncrementCheckSettingRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOssIncrementCheckSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.audioAntispamFreezeConfig)) {
      query["AudioAntispamFreezeConfig"] = request.audioAntispamFreezeConfig;
    }

    if (!Util.isUnset(request.audioAutoFreezeOpened)) {
      query["AudioAutoFreezeOpened"] = request.audioAutoFreezeOpened;
    }

    if (!Util.isUnset(request.audioMaxSize)) {
      query["AudioMaxSize"] = request.audioMaxSize;
    }

    if (!Util.isUnset(request.audioScanLimit)) {
      query["AudioScanLimit"] = request.audioScanLimit;
    }

    if (!Util.isUnset(request.audioSceneList)) {
      query["AudioSceneList"] = request.audioSceneList;
    }

    if (!Util.isUnset(request.autoFreezeType)) {
      query["AutoFreezeType"] = request.autoFreezeType;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.bucketConfigList)) {
      query["BucketConfigList"] = request.bucketConfigList;
    }

    if (!Util.isUnset(request.callbackId)) {
      query["CallbackId"] = request.callbackId;
    }

    if (!Util.isUnset(request.imageAdFreezeConfig)) {
      query["ImageAdFreezeConfig"] = request.imageAdFreezeConfig;
    }

    if (!Util.isUnset(request.imageAutoFreeze)) {
      query["ImageAutoFreeze"] = request.imageAutoFreeze;
    }

    if (!Util.isUnset(request.imageAutoFreezeOpened)) {
      query["ImageAutoFreezeOpened"] = request.imageAutoFreezeOpened;
    }

    if (!Util.isUnset(request.imageLiveFreezeConfig)) {
      query["ImageLiveFreezeConfig"] = request.imageLiveFreezeConfig;
    }

    if (!Util.isUnset(request.imagePornFreezeConfig)) {
      query["ImagePornFreezeConfig"] = request.imagePornFreezeConfig;
    }

    if (!Util.isUnset(request.imageScanLimit)) {
      query["ImageScanLimit"] = request.imageScanLimit;
    }

    if (!Util.isUnset(request.imageSceneList)) {
      query["ImageSceneList"] = request.imageSceneList;
    }

    if (!Util.isUnset(request.imageTerrorismFreezeConfig)) {
      query["ImageTerrorismFreezeConfig"] = request.imageTerrorismFreezeConfig;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.scanImageNoFileType)) {
      query["ScanImageNoFileType"] = request.scanImageNoFileType;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.videoAdFreezeConfig)) {
      query["VideoAdFreezeConfig"] = request.videoAdFreezeConfig;
    }

    if (!Util.isUnset(request.videoAutoFreezeOpened)) {
      query["VideoAutoFreezeOpened"] = request.videoAutoFreezeOpened;
    }

    if (!Util.isUnset(request.videoAutoFreezeSceneList)) {
      query["VideoAutoFreezeSceneList"] = request.videoAutoFreezeSceneList;
    }

    if (!Util.isUnset(request.videoFrameInterval)) {
      query["VideoFrameInterval"] = request.videoFrameInterval;
    }

    if (!Util.isUnset(request.videoLiveFreezeConfig)) {
      query["VideoLiveFreezeConfig"] = request.videoLiveFreezeConfig;
    }

    if (!Util.isUnset(request.videoMaxFrames)) {
      query["VideoMaxFrames"] = request.videoMaxFrames;
    }

    if (!Util.isUnset(request.videoMaxSize)) {
      query["VideoMaxSize"] = request.videoMaxSize;
    }

    if (!Util.isUnset(request.videoPornFreezeConfig)) {
      query["VideoPornFreezeConfig"] = request.videoPornFreezeConfig;
    }

    if (!Util.isUnset(request.videoScanLimit)) {
      query["VideoScanLimit"] = request.videoScanLimit;
    }

    if (!Util.isUnset(request.videoSceneList)) {
      query["VideoSceneList"] = request.videoSceneList;
    }

    if (!Util.isUnset(request.videoTerrorismFreezeConfig)) {
      query["VideoTerrorismFreezeConfig"] = request.videoTerrorismFreezeConfig;
    }

    if (!Util.isUnset(request.videoVoiceAntispamFreezeConfig)) {
      query["VideoVoiceAntispamFreezeConfig"] = request.videoVoiceAntispamFreezeConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateOssIncrementCheckSetting",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateOssIncrementCheckSettingResponse>(await this.callApi(params, req, runtime), new UpdateOssIncrementCheckSettingResponse({}));
  }

  async updateOssIncrementCheckSetting(request: UpdateOssIncrementCheckSettingRequest): Promise<UpdateOssIncrementCheckSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOssIncrementCheckSettingWithOptions(request, runtime);
  }

  async updateOssStockStatusWithOptions(request: UpdateOssStockStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOssStockStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.audioAutoFreezeSceneList)) {
      query["AudioAutoFreezeSceneList"] = request.audioAutoFreezeSceneList;
    }

    if (!Util.isUnset(request.audioMaxSize)) {
      query["AudioMaxSize"] = request.audioMaxSize;
    }

    if (!Util.isUnset(request.autoFreezeType)) {
      query["AutoFreezeType"] = request.autoFreezeType;
    }

    if (!Util.isUnset(request.bucketConfigList)) {
      query["BucketConfigList"] = request.bucketConfigList;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.imageAutoFreeze)) {
      query["ImageAutoFreeze"] = request.imageAutoFreeze;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!Util.isUnset(request.resourceTypeList)) {
      query["ResourceTypeList"] = request.resourceTypeList;
    }

    if (!Util.isUnset(request.sceneList)) {
      query["SceneList"] = request.sceneList;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.videoAutoFreezeSceneList)) {
      query["VideoAutoFreezeSceneList"] = request.videoAutoFreezeSceneList;
    }

    if (!Util.isUnset(request.videoFrameInterval)) {
      query["VideoFrameInterval"] = request.videoFrameInterval;
    }

    if (!Util.isUnset(request.videoMaxFrames)) {
      query["VideoMaxFrames"] = request.videoMaxFrames;
    }

    if (!Util.isUnset(request.videoMaxSize)) {
      query["VideoMaxSize"] = request.videoMaxSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateOssStockStatus",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateOssStockStatusResponse>(await this.callApi(params, req, runtime), new UpdateOssStockStatusResponse({}));
  }

  async updateOssStockStatus(request: UpdateOssStockStatusRequest): Promise<UpdateOssStockStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOssStockStatusWithOptions(request, runtime);
  }

  async updateWebsiteInstanceWithOptions(request: UpdateWebsiteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWebsiteInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.indexPage)) {
      query["IndexPage"] = request.indexPage;
    }

    if (!Util.isUnset(request.indexPageScanInterval)) {
      query["IndexPageScanInterval"] = request.indexPageScanInterval;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.siteProtocol)) {
      query["SiteProtocol"] = request.siteProtocol;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.websiteScanInterval)) {
      query["WebsiteScanInterval"] = request.websiteScanInterval;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWebsiteInstance",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWebsiteInstanceResponse>(await this.callApi(params, req, runtime), new UpdateWebsiteInstanceResponse({}));
  }

  async updateWebsiteInstance(request: UpdateWebsiteInstanceRequest): Promise<UpdateWebsiteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWebsiteInstanceWithOptions(request, runtime);
  }

  async updateWebsiteInstanceKeyUrlWithOptions(request: UpdateWebsiteInstanceKeyUrlRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWebsiteInstanceKeyUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.urls)) {
      query["Urls"] = request.urls;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWebsiteInstanceKeyUrl",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWebsiteInstanceKeyUrlResponse>(await this.callApi(params, req, runtime), new UpdateWebsiteInstanceKeyUrlResponse({}));
  }

  async updateWebsiteInstanceKeyUrl(request: UpdateWebsiteInstanceKeyUrlRequest): Promise<UpdateWebsiteInstanceKeyUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWebsiteInstanceKeyUrlWithOptions(request, runtime);
  }

  async updateWebsiteInstanceStatusWithOptions(request: UpdateWebsiteInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWebsiteInstanceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWebsiteInstanceStatus",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWebsiteInstanceStatusResponse>(await this.callApi(params, req, runtime), new UpdateWebsiteInstanceStatusResponse({}));
  }

  async updateWebsiteInstanceStatus(request: UpdateWebsiteInstanceStatusRequest): Promise<UpdateWebsiteInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWebsiteInstanceStatusWithOptions(request, runtime);
  }

  async upgradeCdiBaseBagWithOptions(request: UpgradeCdiBaseBagRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeCdiBaseBagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.flowOutSpec)) {
      query["FlowOutSpec"] = request.flowOutSpec;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeCdiBaseBag",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeCdiBaseBagResponse>(await this.callApi(params, req, runtime), new UpgradeCdiBaseBagResponse({}));
  }

  async upgradeCdiBaseBag(request: UpgradeCdiBaseBagRequest): Promise<UpgradeCdiBaseBagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeCdiBaseBagWithOptions(request, runtime);
  }

  async uploadImageToLibWithOptions(request: UploadImageToLibRequest, runtime: $Util.RuntimeOptions): Promise<UploadImageToLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageLibId)) {
      query["ImageLibId"] = request.imageLibId;
    }

    if (!Util.isUnset(request.images)) {
      query["Images"] = request.images;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.urls)) {
      query["Urls"] = request.urls;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadImageToLib",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadImageToLibResponse>(await this.callApi(params, req, runtime), new UploadImageToLibResponse({}));
  }

  async uploadImageToLib(request: UploadImageToLibRequest): Promise<UploadImageToLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadImageToLibWithOptions(request, runtime);
  }

  async verifyCustomOcrTemplateWithOptions(request: VerifyCustomOcrTemplateRequest, runtime: $Util.RuntimeOptions): Promise<VerifyCustomOcrTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.testImgUrl)) {
      query["TestImgUrl"] = request.testImgUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyCustomOcrTemplate",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyCustomOcrTemplateResponse>(await this.callApi(params, req, runtime), new VerifyCustomOcrTemplateResponse({}));
  }

  async verifyCustomOcrTemplate(request: VerifyCustomOcrTemplateRequest): Promise<VerifyCustomOcrTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyCustomOcrTemplateWithOptions(request, runtime);
  }

  async verifyEmailWithOptions(request: VerifyEmailRequest, runtime: $Util.RuntimeOptions): Promise<VerifyEmailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyEmail",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyEmailResponse>(await this.callApi(params, req, runtime), new VerifyEmailResponse({}));
  }

  async verifyEmail(request: VerifyEmailRequest): Promise<VerifyEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyEmailWithOptions(request, runtime);
  }

  async verifyPhoneWithOptions(request: VerifyPhoneRequest, runtime: $Util.RuntimeOptions): Promise<VerifyPhoneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyPhone",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyPhoneResponse>(await this.callApi(params, req, runtime), new VerifyPhoneResponse({}));
  }

  async verifyPhone(request: VerifyPhoneRequest): Promise<VerifyPhoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyPhoneWithOptions(request, runtime);
  }

  async verifyWebsiteInstanceWithOptions(request: VerifyWebsiteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<VerifyWebsiteInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.verifyMethod)) {
      query["VerifyMethod"] = request.verifyMethod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyWebsiteInstance",
      version: "2017-08-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyWebsiteInstanceResponse>(await this.callApi(params, req, runtime), new VerifyWebsiteInstanceResponse({}));
  }

  async verifyWebsiteInstance(request: VerifyWebsiteInstanceRequest): Promise<VerifyWebsiteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyWebsiteInstanceWithOptions(request, runtime);
  }

}
