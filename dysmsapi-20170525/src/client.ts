// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddShortUrlRequest extends $tea.Model {
  effectiveDays?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  shortUrlName?: string;
  sourceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveDays: 'EffectiveDays',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      shortUrlName: 'ShortUrlName',
      sourceUrl: 'SourceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveDays: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      shortUrlName: 'string',
      sourceUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddShortUrlResponseBody extends $tea.Model {
  code?: string;
  data?: AddShortUrlResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddShortUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddShortUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddShortUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddShortUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsSignRequest extends $tea.Model {
  ownerId?: number;
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  signFileList?: AddSmsSignRequestSignFileList[];
  signName?: string;
  signSource?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signFileList: 'SignFileList',
      signName: 'SignName',
      signSource: 'SignSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signFileList: { 'type': 'array', 'itemType': AddSmsSignRequestSignFileList },
      signName: 'string',
      signSource: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsSignResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      signName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddSmsSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddSmsSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsTemplateRequest extends $tea.Model {
  ownerId?: number;
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateContent?: string;
  templateName?: string;
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateContent: 'string',
      templateName: 'string',
      templateType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsTemplateResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddSmsTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddSmsTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCardSmsTemplateRequest extends $tea.Model {
  memo?: string;
  template?: { [key: string]: any };
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      memo: 'Memo',
      template: 'Template',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memo: 'string',
      template: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCardSmsTemplateShrinkRequest extends $tea.Model {
  memo?: string;
  templateShrink?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      memo: 'Memo',
      templateShrink: 'Template',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memo: 'string',
      templateShrink: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCardSmsTemplateResponseBody extends $tea.Model {
  code?: string;
  data?: CreateCardSmsTemplateResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateCardSmsTemplateResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCardSmsTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCardSmsTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCardSmsTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteShortUrlRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sourceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceUrl: 'SourceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteShortUrlResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteShortUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteShortUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteShortUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsSignRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsSignResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      signName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSmsSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSmsSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsTemplateRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsTemplateResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSmsTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSmsTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaResourceIdRequest extends $tea.Model {
  extendInfo?: string;
  fileSize?: number;
  memo?: string;
  ossKey?: string;
  resourceType?: number;
  static names(): { [key: string]: string } {
    return {
      extendInfo: 'ExtendInfo',
      fileSize: 'FileSize',
      memo: 'Memo',
      ossKey: 'OssKey',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendInfo: 'string',
      fileSize: 'number',
      memo: 'string',
      ossKey: 'string',
      resourceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaResourceIdResponseBody extends $tea.Model {
  code?: string;
  data?: GetMediaResourceIdResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetMediaResourceIdResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaResourceIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMediaResourceIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMediaResourceIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOSSInfoForCardTemplateResponseBody extends $tea.Model {
  code?: string;
  data?: GetOSSInfoForCardTemplateResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetOSSInfoForCardTemplateResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOSSInfoForCardTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOSSInfoForCardTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOSSInfoForCardTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  ownerId?: number;
  pageSize?: number;
  prodCode?: string;
  regionId?: string;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      ownerId: 'number',
      pageSize: 'number',
      prodCode: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  code?: string;
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsSignRequest extends $tea.Model {
  ownerId?: number;
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  signFileList?: ModifySmsSignRequestSignFileList[];
  signName?: string;
  signSource?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signFileList: 'SignFileList',
      signName: 'SignName',
      signSource: 'SignSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signFileList: { 'type': 'array', 'itemType': ModifySmsSignRequestSignFileList },
      signName: 'string',
      signSource: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsSignResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      signName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySmsSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySmsSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsTemplateRequest extends $tea.Model {
  ownerId?: number;
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateCode?: string;
  templateContent?: string;
  templateName?: string;
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateCode: 'TemplateCode',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateCode: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsTemplateResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySmsTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySmsTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardSmsTemplateRequest extends $tea.Model {
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardSmsTemplateResponseBody extends $tea.Model {
  code?: string;
  data?: QueryCardSmsTemplateResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryCardSmsTemplateResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardSmsTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCardSmsTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCardSmsTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsRequest extends $tea.Model {
  bizId?: string;
  currentPage?: number;
  ownerId?: number;
  pageSize?: number;
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sendDate?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      currentPage: 'CurrentPage',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendDate: 'SendDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      currentPage: 'number',
      ownerId: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  smsSendDetailDTOs?: QuerySendDetailsResponseBodySmsSendDetailDTOs;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      smsSendDetailDTOs: 'SmsSendDetailDTOs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      smsSendDetailDTOs: QuerySendDetailsResponseBodySmsSendDetailDTOs,
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySendDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySendDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShortUrlRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  shortUrl?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      shortUrl: 'ShortUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      shortUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShortUrlResponseBody extends $tea.Model {
  code?: string;
  data?: QueryShortUrlResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryShortUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShortUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryShortUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryShortUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsSignRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsSignResponseBody extends $tea.Model {
  code?: string;
  createDate?: string;
  message?: string;
  reason?: string;
  requestId?: string;
  signName?: string;
  signStatus?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createDate: 'CreateDate',
      message: 'Message',
      reason: 'Reason',
      requestId: 'RequestId',
      signName: 'SignName',
      signStatus: 'SignStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createDate: 'string',
      message: 'string',
      reason: 'string',
      requestId: 'string',
      signName: 'string',
      signStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySmsSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySmsSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsTemplateRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsTemplateResponseBody extends $tea.Model {
  code?: string;
  createDate?: string;
  message?: string;
  reason?: string;
  requestId?: string;
  templateCode?: string;
  templateContent?: string;
  templateName?: string;
  templateStatus?: number;
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createDate: 'CreateDate',
      message: 'Message',
      reason: 'Reason',
      requestId: 'RequestId',
      templateCode: 'TemplateCode',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateStatus: 'TemplateStatus',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createDate: 'string',
      message: 'string',
      reason: 'string',
      requestId: 'string',
      templateCode: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateStatus: 'number',
      templateType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySmsTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySmsTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendBatchSmsRequest extends $tea.Model {
  ownerId?: number;
  phoneNumberJson?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  signNameJson?: string;
  smsUpExtendCodeJson?: string;
  templateCode?: string;
  templateParamJson?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneNumberJson: 'PhoneNumberJson',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signNameJson: 'SignNameJson',
      smsUpExtendCodeJson: 'SmsUpExtendCodeJson',
      templateCode: 'TemplateCode',
      templateParamJson: 'TemplateParamJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneNumberJson: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signNameJson: 'string',
      smsUpExtendCodeJson: 'string',
      templateCode: 'string',
      templateParamJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendBatchSmsResponseBody extends $tea.Model {
  bizId?: string;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendBatchSmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendBatchSmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendBatchSmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCardSmsRequest extends $tea.Model {
  cardObjects?: SendCardSmsRequestCardObjects[];
  cardTemplateCode?: string;
  digitalTemplateCode?: string;
  digitalTemplateParam?: string;
  fallbackType?: string;
  outId?: string;
  signName?: string;
  smsTemplateCode?: string;
  smsTemplateParam?: string;
  smsUpExtendCode?: string;
  static names(): { [key: string]: string } {
    return {
      cardObjects: 'CardObjects',
      cardTemplateCode: 'CardTemplateCode',
      digitalTemplateCode: 'DigitalTemplateCode',
      digitalTemplateParam: 'DigitalTemplateParam',
      fallbackType: 'FallbackType',
      outId: 'OutId',
      signName: 'SignName',
      smsTemplateCode: 'SmsTemplateCode',
      smsTemplateParam: 'SmsTemplateParam',
      smsUpExtendCode: 'SmsUpExtendCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardObjects: { 'type': 'array', 'itemType': SendCardSmsRequestCardObjects },
      cardTemplateCode: 'string',
      digitalTemplateCode: 'string',
      digitalTemplateParam: 'string',
      fallbackType: 'string',
      outId: 'string',
      signName: 'string',
      smsTemplateCode: 'string',
      smsTemplateParam: 'string',
      smsUpExtendCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCardSmsResponseBody extends $tea.Model {
  code?: string;
  data?: SendCardSmsResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SendCardSmsResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCardSmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendCardSmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendCardSmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsRequest extends $tea.Model {
  outId?: string;
  ownerId?: number;
  phoneNumbers?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  signName?: string;
  smsUpExtendCode?: string;
  templateCode?: string;
  templateParam?: string;
  static names(): { [key: string]: string } {
    return {
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNumbers: 'PhoneNumbers',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      smsUpExtendCode: 'SmsUpExtendCode',
      templateCode: 'TemplateCode',
      templateParam: 'TemplateParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outId: 'string',
      ownerId: 'number',
      phoneNumbers: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      smsUpExtendCode: 'string',
      templateCode: 'string',
      templateParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsResponseBody extends $tea.Model {
  bizId?: string;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendSmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendSmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  ownerId?: number;
  prodCode?: string;
  regionId?: string;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  ownerId?: number;
  prodCode?: string;
  regionId?: string;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      ownerId: 'number',
      prodCode: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddShortUrlResponseBodyData extends $tea.Model {
  expireDate?: string;
  shortUrl?: string;
  sourceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      expireDate: 'ExpireDate',
      shortUrl: 'ShortUrl',
      sourceUrl: 'SourceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireDate: 'string',
      shortUrl: 'string',
      sourceUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsSignRequestSignFileList extends $tea.Model {
  fileContents?: string;
  fileSuffix?: string;
  static names(): { [key: string]: string } {
    return {
      fileContents: 'FileContents',
      fileSuffix: 'FileSuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileContents: 'string',
      fileSuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCardSmsTemplateResponseBodyData extends $tea.Model {
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaResourceIdResponseBodyData extends $tea.Model {
  resourceId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOSSInfoForCardTemplateResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  aliUid?: string;
  expireTime?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      aliUid: 'AliUid',
      expireTime: 'ExpireTime',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      aliUid: 'string',
      expireTime: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsSignRequestSignFileList extends $tea.Model {
  fileContents?: string;
  fileSuffix?: string;
  static names(): { [key: string]: string } {
    return {
      fileContents: 'FileContents',
      fileSuffix: 'FileSuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileContents: 'string',
      fileSuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardSmsTemplateResponseBodyData extends $tea.Model {
  templates?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templates: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsResponseBodySmsSendDetailDTOsSmsSendDetailDTO extends $tea.Model {
  content?: string;
  errCode?: string;
  outId?: string;
  phoneNum?: string;
  receiveDate?: string;
  sendDate?: string;
  sendStatus?: number;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errCode: 'ErrCode',
      outId: 'OutId',
      phoneNum: 'PhoneNum',
      receiveDate: 'ReceiveDate',
      sendDate: 'SendDate',
      sendStatus: 'SendStatus',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      errCode: 'string',
      outId: 'string',
      phoneNum: 'string',
      receiveDate: 'string',
      sendDate: 'string',
      sendStatus: 'number',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsResponseBodySmsSendDetailDTOs extends $tea.Model {
  smsSendDetailDTO?: QuerySendDetailsResponseBodySmsSendDetailDTOsSmsSendDetailDTO[];
  static names(): { [key: string]: string } {
    return {
      smsSendDetailDTO: 'SmsSendDetailDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smsSendDetailDTO: { 'type': 'array', 'itemType': QuerySendDetailsResponseBodySmsSendDetailDTOsSmsSendDetailDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShortUrlResponseBodyData extends $tea.Model {
  createDate?: string;
  expireDate?: string;
  pageViewCount?: string;
  shortUrl?: string;
  shortUrlName?: string;
  shortUrlStatus?: string;
  sourceUrl?: string;
  uniqueVisitorCount?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      expireDate: 'ExpireDate',
      pageViewCount: 'PageViewCount',
      shortUrl: 'ShortUrl',
      shortUrlName: 'ShortUrlName',
      shortUrlStatus: 'ShortUrlStatus',
      sourceUrl: 'SourceUrl',
      uniqueVisitorCount: 'UniqueVisitorCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      expireDate: 'string',
      pageViewCount: 'string',
      shortUrl: 'string',
      shortUrlName: 'string',
      shortUrlStatus: 'string',
      sourceUrl: 'string',
      uniqueVisitorCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCardSmsRequestCardObjects extends $tea.Model {
  customUrl?: string;
  dyncParams?: string;
  mobile?: string;
  static names(): { [key: string]: string } {
    return {
      customUrl: 'customUrl',
      dyncParams: 'dyncParams',
      mobile: 'mobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customUrl: 'string',
      dyncParams: 'string',
      mobile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCardSmsResponseBodyData extends $tea.Model {
  bizCardId?: string;
  bizDigitalId?: string;
  bizSmsId?: string;
  cardTmpState?: number;
  mediaMobiles?: string;
  notMediaMobiles?: string;
  static names(): { [key: string]: string } {
    return {
      bizCardId: 'BizCardId',
      bizDigitalId: 'BizDigitalId',
      bizSmsId: 'BizSmsId',
      cardTmpState: 'CardTmpState',
      mediaMobiles: 'MediaMobiles',
      notMediaMobiles: 'NotMediaMobiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCardId: 'string',
      bizDigitalId: 'string',
      bizSmsId: 'string',
      cardTmpState: 'number',
      mediaMobiles: 'string',
      notMediaMobiles: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'ap-southeast-1': "dysmsapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "dysmsapi-xman.ap-southeast-5.aliyuncs.com",
      'cn-beijing': "dysmsapi-proxy.cn-beijing.aliyuncs.com",
      'cn-hongkong': "dysmsapi-xman.cn-hongkong.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dysmsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addShortUrlWithOptions(request: AddShortUrlRequest, runtime: $Util.RuntimeOptions): Promise<AddShortUrlResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "AddShortUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddShortUrlResponse>(await this.callApi(params, req, runtime), new AddShortUrlResponse({}));
  }

  async addShortUrl(request: AddShortUrlRequest): Promise<AddShortUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addShortUrlWithOptions(request, runtime);
  }

  async addSmsSignWithOptions(request: AddSmsSignRequest, runtime: $Util.RuntimeOptions): Promise<AddSmsSignResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["Remark"] = request.remark;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["SignName"] = request.signName;
    query["SignSource"] = request.signSource;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "AddSmsSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddSmsSignResponse>(await this.callApi(params, req, runtime), new AddSmsSignResponse({}));
  }

  async addSmsSign(request: AddSmsSignRequest): Promise<AddSmsSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSmsSignWithOptions(request, runtime);
  }

  async addSmsTemplateWithOptions(request: AddSmsTemplateRequest, runtime: $Util.RuntimeOptions): Promise<AddSmsTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["Remark"] = request.remark;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["TemplateContent"] = request.templateContent;
    query["TemplateName"] = request.templateName;
    query["TemplateType"] = request.templateType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "AddSmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddSmsTemplateResponse>(await this.callApi(params, req, runtime), new AddSmsTemplateResponse({}));
  }

  async addSmsTemplate(request: AddSmsTemplateRequest): Promise<AddSmsTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSmsTemplateWithOptions(request, runtime);
  }

  async createCardSmsTemplateWithOptions(tmpReq: CreateCardSmsTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateCardSmsTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateCardSmsTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.template)) {
      request.templateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.template, "Template", "json");
    }

    let query = { };
    query["Memo"] = request.memo;
    query["Template"] = request.templateShrink;
    query["TemplateName"] = request.templateName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateCardSmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateCardSmsTemplateResponse>(await this.callApi(params, req, runtime), new CreateCardSmsTemplateResponse({}));
  }

  async createCardSmsTemplate(request: CreateCardSmsTemplateRequest): Promise<CreateCardSmsTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCardSmsTemplateWithOptions(request, runtime);
  }

  async deleteShortUrlWithOptions(request: DeleteShortUrlRequest, runtime: $Util.RuntimeOptions): Promise<DeleteShortUrlResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteShortUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteShortUrlResponse>(await this.callApi(params, req, runtime), new DeleteShortUrlResponse({}));
  }

  async deleteShortUrl(request: DeleteShortUrlRequest): Promise<DeleteShortUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteShortUrlWithOptions(request, runtime);
  }

  async deleteSmsSignWithOptions(request: DeleteSmsSignRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSmsSignResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["SignName"] = request.signName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSmsSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSmsSignResponse>(await this.callApi(params, req, runtime), new DeleteSmsSignResponse({}));
  }

  async deleteSmsSign(request: DeleteSmsSignRequest): Promise<DeleteSmsSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSmsSignWithOptions(request, runtime);
  }

  async deleteSmsTemplateWithOptions(request: DeleteSmsTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSmsTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["TemplateCode"] = request.templateCode;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSmsTemplateResponse>(await this.callApi(params, req, runtime), new DeleteSmsTemplateResponse({}));
  }

  async deleteSmsTemplate(request: DeleteSmsTemplateRequest): Promise<DeleteSmsTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSmsTemplateWithOptions(request, runtime);
  }

  async getMediaResourceIdWithOptions(request: GetMediaResourceIdRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaResourceIdResponse> {
    Util.validateModel(request);
    let query = { };
    query["ExtendInfo"] = request.extendInfo;
    query["FileSize"] = request.fileSize;
    query["Memo"] = request.memo;
    query["OssKey"] = request.ossKey;
    query["ResourceType"] = request.resourceType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetMediaResourceId",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMediaResourceIdResponse>(await this.callApi(params, req, runtime), new GetMediaResourceIdResponse({}));
  }

  async getMediaResourceId(request: GetMediaResourceIdRequest): Promise<GetMediaResourceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaResourceIdWithOptions(request, runtime);
  }

  async getOSSInfoForCardTemplateWithOptions(runtime: $Util.RuntimeOptions): Promise<GetOSSInfoForCardTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetOSSInfoForCardTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetOSSInfoForCardTemplateResponse>(await this.callApi(params, req, runtime), new GetOSSInfoForCardTemplateResponse({}));
  }

  async getOSSInfoForCardTemplate(): Promise<GetOSSInfoForCardTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOSSInfoForCardTemplateWithOptions(runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    query["NextToken"] = request.nextToken;
    query["OwnerId"] = request.ownerId;
    query["PageSize"] = request.pageSize;
    query["ProdCode"] = request.prodCode;
    query["RegionId"] = request.regionId;
    query["ResourceId"] = request.resourceId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["ResourceType"] = request.resourceType;
    query["Tag"] = request.tag;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async modifySmsSignWithOptions(request: ModifySmsSignRequest, runtime: $Util.RuntimeOptions): Promise<ModifySmsSignResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["Remark"] = request.remark;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["SignName"] = request.signName;
    query["SignSource"] = request.signSource;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ModifySmsSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySmsSignResponse>(await this.callApi(params, req, runtime), new ModifySmsSignResponse({}));
  }

  async modifySmsSign(request: ModifySmsSignRequest): Promise<ModifySmsSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySmsSignWithOptions(request, runtime);
  }

  async modifySmsTemplateWithOptions(request: ModifySmsTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ModifySmsTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["Remark"] = request.remark;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["TemplateCode"] = request.templateCode;
    query["TemplateContent"] = request.templateContent;
    query["TemplateName"] = request.templateName;
    query["TemplateType"] = request.templateType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ModifySmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifySmsTemplateResponse>(await this.callApi(params, req, runtime), new ModifySmsTemplateResponse({}));
  }

  async modifySmsTemplate(request: ModifySmsTemplateRequest): Promise<ModifySmsTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySmsTemplateWithOptions(request, runtime);
  }

  async queryCardSmsTemplateWithOptions(request: QueryCardSmsTemplateRequest, runtime: $Util.RuntimeOptions): Promise<QueryCardSmsTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    query["TemplateCode"] = request.templateCode;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "QueryCardSmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryCardSmsTemplateResponse>(await this.callApi(params, req, runtime), new QueryCardSmsTemplateResponse({}));
  }

  async queryCardSmsTemplate(request: QueryCardSmsTemplateRequest): Promise<QueryCardSmsTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCardSmsTemplateWithOptions(request, runtime);
  }

  async querySendDetailsWithOptions(request: QuerySendDetailsRequest, runtime: $Util.RuntimeOptions): Promise<QuerySendDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    query["BizId"] = request.bizId;
    query["CurrentPage"] = request.currentPage;
    query["OwnerId"] = request.ownerId;
    query["PageSize"] = request.pageSize;
    query["PhoneNumber"] = request.phoneNumber;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["SendDate"] = request.sendDate;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "QuerySendDetails",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QuerySendDetailsResponse>(await this.callApi(params, req, runtime), new QuerySendDetailsResponse({}));
  }

  async querySendDetails(request: QuerySendDetailsRequest): Promise<QuerySendDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySendDetailsWithOptions(request, runtime);
  }

  async queryShortUrlWithOptions(request: QueryShortUrlRequest, runtime: $Util.RuntimeOptions): Promise<QueryShortUrlResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "QueryShortUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryShortUrlResponse>(await this.callApi(params, req, runtime), new QueryShortUrlResponse({}));
  }

  async queryShortUrl(request: QueryShortUrlRequest): Promise<QueryShortUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryShortUrlWithOptions(request, runtime);
  }

  async querySmsSignWithOptions(request: QuerySmsSignRequest, runtime: $Util.RuntimeOptions): Promise<QuerySmsSignResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["SignName"] = request.signName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "QuerySmsSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QuerySmsSignResponse>(await this.callApi(params, req, runtime), new QuerySmsSignResponse({}));
  }

  async querySmsSign(request: QuerySmsSignRequest): Promise<QuerySmsSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySmsSignWithOptions(request, runtime);
  }

  async querySmsTemplateWithOptions(request: QuerySmsTemplateRequest, runtime: $Util.RuntimeOptions): Promise<QuerySmsTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["TemplateCode"] = request.templateCode;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "QuerySmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QuerySmsTemplateResponse>(await this.callApi(params, req, runtime), new QuerySmsTemplateResponse({}));
  }

  async querySmsTemplate(request: QuerySmsTemplateRequest): Promise<QuerySmsTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySmsTemplateWithOptions(request, runtime);
  }

  async sendBatchSmsWithOptions(request: SendBatchSmsRequest, runtime: $Util.RuntimeOptions): Promise<SendBatchSmsResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["PhoneNumberJson"] = request.phoneNumberJson;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["SignNameJson"] = request.signNameJson;
    query["SmsUpExtendCodeJson"] = request.smsUpExtendCodeJson;
    query["TemplateCode"] = request.templateCode;
    query["TemplateParamJson"] = request.templateParamJson;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "SendBatchSms",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SendBatchSmsResponse>(await this.callApi(params, req, runtime), new SendBatchSmsResponse({}));
  }

  async sendBatchSms(request: SendBatchSmsRequest): Promise<SendBatchSmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendBatchSmsWithOptions(request, runtime);
  }

  async sendCardSmsWithOptions(request: SendCardSmsRequest, runtime: $Util.RuntimeOptions): Promise<SendCardSmsResponse> {
    Util.validateModel(request);
    let query = { };
    query["CardObjects"] = request.cardObjects;
    query["CardTemplateCode"] = request.cardTemplateCode;
    query["DigitalTemplateCode"] = request.digitalTemplateCode;
    query["DigitalTemplateParam"] = request.digitalTemplateParam;
    query["FallbackType"] = request.fallbackType;
    query["OutId"] = request.outId;
    query["SignName"] = request.signName;
    query["SmsTemplateCode"] = request.smsTemplateCode;
    query["SmsTemplateParam"] = request.smsTemplateParam;
    query["SmsUpExtendCode"] = request.smsUpExtendCode;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "SendCardSms",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SendCardSmsResponse>(await this.callApi(params, req, runtime), new SendCardSmsResponse({}));
  }

  async sendCardSms(request: SendCardSmsRequest): Promise<SendCardSmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendCardSmsWithOptions(request, runtime);
  }

  async sendSmsWithOptions(request: SendSmsRequest, runtime: $Util.RuntimeOptions): Promise<SendSmsResponse> {
    Util.validateModel(request);
    let query = { };
    query["OutId"] = request.outId;
    query["OwnerId"] = request.ownerId;
    query["PhoneNumbers"] = request.phoneNumbers;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["SignName"] = request.signName;
    query["SmsUpExtendCode"] = request.smsUpExtendCode;
    query["TemplateCode"] = request.templateCode;
    query["TemplateParam"] = request.templateParam;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "SendSms",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SendSmsResponse>(await this.callApi(params, req, runtime), new SendSmsResponse({}));
  }

  async sendSms(request: SendSmsRequest): Promise<SendSmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendSmsWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    query["OwnerId"] = request.ownerId;
    query["ProdCode"] = request.prodCode;
    query["RegionId"] = request.regionId;
    query["ResourceId"] = request.resourceId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["ResourceType"] = request.resourceType;
    query["Tag"] = request.tag;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    query["All"] = request.all;
    query["OwnerId"] = request.ownerId;
    query["ProdCode"] = request.prodCode;
    query["RegionId"] = request.regionId;
    query["ResourceId"] = request.resourceId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["ResourceType"] = request.resourceType;
    query["TagKey"] = request.tagKey;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
