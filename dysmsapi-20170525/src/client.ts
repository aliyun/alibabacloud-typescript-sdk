// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AddShortUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the short URL expires.
   * 
   * > The value of **ExpireDate** is on the hour.
   * 
   * @example
   * 2021-09-19 00:00:00
   */
  expireDate?: string;
  /**
   * @remarks
   * The short URL.
   * 
   * @example
   * http://****.cn/6y8uy7
   */
  shortUrl?: string;
  /**
   * @remarks
   * The source URL.
   * 
   * @example
   * https://www.****.com/product/sms
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsSignRequestSignFileList extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded string of the qualification document. An image cannot exceed 2 MB in size. In some scenarios, you must upload supporting documents to apply for signatures. For more information, see [SMS signature specifications](https://help.aliyun.com/document_detail/108076.html).
   * 
   * This parameter is required.
   * 
   * @example
   * R0lGODlhHAAmAKIHAKqqqsvLy0hISObm5vf394uL****
   */
  fileContents?: string;
  /**
   * @remarks
   * The format of the qualification document. You can upload multiple images. Images in JPG, PNG, GIF, or JPEG format are supported.
   * 
   * In some scenarios, you must upload supporting documents to apply for signatures. For more information, see [SMS signature specifications](https://help.aliyun.com/document_detail/108076.html).
   * 
   * > If you apply for a signature for other users or if the signature source is the name of an enterprise or public institution, you must upload a certificate and a letter of authorization. For more information, see [Certificate](https://help.aliyun.com/document_detail/108076.html) and [Letter of authorization](https://help.aliyun.com/document_detail/56741.html).
   * 
   * This parameter is required.
   * 
   * @example
   * jpg
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeSignatureQualificationResponseBodyData extends $dara.Model {
  data?: { [key: string]: any };
  /**
   * @example
   * 示例值
   */
  errCode?: string;
  /**
   * @example
   * 示例值示例值
   */
  errMessage?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errCode: 'string',
      errMessage: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMobilesCardSupportResponseBodyDataQueryResult extends $dara.Model {
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 1390000****
   */
  mobile?: string;
  /**
   * @remarks
   * Indicates whether the mobile phone number supports card messages.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  support?: boolean;
  static names(): { [key: string]: string } {
    return {
      mobile: 'mobile',
      support: 'support',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
      support: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMobilesCardSupportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of returned results.
   */
  queryResult?: CheckMobilesCardSupportResponseBodyDataQueryResult[];
  static names(): { [key: string]: string } {
    return {
      queryResult: 'queryResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResult: { 'type': 'array', 'itemType': CheckMobilesCardSupportResponseBodyDataQueryResult },
    };
  }

  validate() {
    if(Array.isArray(this.queryResult)) {
      $dara.Model.validateArray(this.queryResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCardSmsTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The code of the message template.
   * 
   * You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm?spm=5176.12818093.categories-n-products.ddysms.3b2816d0xml2NA#/overview).
   * 
   * > Make sure that the message template has been approved.
   * 
   * @example
   * CARD_SMS_60000****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartShortUrlResponseBodyModel extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  domain?: string;
  /**
   * @example
   * 11
   */
  expiration?: number;
  /**
   * @example
   * 示例值
   */
  phoneNumber?: string;
  /**
   * @example
   * 示例值
   */
  shortName?: string;
  /**
   * @example
   * 示例值示例值
   */
  shortUrl?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      expiration: 'Expiration',
      phoneNumber: 'PhoneNumber',
      shortName: 'ShortName',
      shortUrl: 'ShortUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      expiration: 'number',
      phoneNumber: 'string',
      shortName: 'string',
      shortUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardSmsDetailsResponseBodyCardSendDetailDTORecords extends $dara.Model {
  /**
   * @remarks
   * Error code for sending
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * Customer-transmitted outId
   * 
   * @example
   * 12345678
   */
  outId?: string;
  /**
   * @remarks
   * Phone number that received the SMS
   * 
   * @example
   * 156****9080
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Receive date
   * 
   * @example
   * 2024-09-27 11:26:35
   */
  receiveDate?: string;
  /**
   * @remarks
   * Receive SMS type
   * 
   * @example
   * CARD_SMS
   */
  receiveType?: string;
  /**
   * @remarks
   * Render date
   * 
   * @example
   * 2024-09-27 12:13:39
   */
  renderDate?: string;
  /**
   * @remarks
   * Render status. 0: Not rendered; 1: Rendered successfully; 3: Not rendered
   * 
   * @example
   * 1
   */
  renderStatus?: number;
  /**
   * @remarks
   * Time when the SMS was sent
   * 
   * @example
   * 2024-09-27 11:26:32
   */
  sendDate?: string;
  /**
   * @remarks
   * Sending status. 1: Sending; 2: Send failed; 3: Sent successfully; 4: Addressing failed
   * 
   * @example
   * 3
   */
  sendStatus?: number;
  /**
   * @remarks
   * SMS content. Only applicable for text messages.
   * 
   * @example
   * 您收到一条短信消息
   */
  smsContent?: string;
  /**
   * @remarks
   * Template code
   * 
   * @example
   * CARD_SMS_6***
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      outId: 'OutId',
      phoneNumber: 'PhoneNumber',
      receiveDate: 'ReceiveDate',
      receiveType: 'ReceiveType',
      renderDate: 'RenderDate',
      renderStatus: 'RenderStatus',
      sendDate: 'SendDate',
      sendStatus: 'SendStatus',
      smsContent: 'SmsContent',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      outId: 'string',
      phoneNumber: 'string',
      receiveDate: 'string',
      receiveType: 'string',
      renderDate: 'string',
      renderStatus: 'number',
      sendDate: 'string',
      sendStatus: 'number',
      smsContent: 'string',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardSmsDetailsResponseBodyCardSendDetailDTO extends $dara.Model {
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * List of card SMS sending records
   */
  records?: GetCardSmsDetailsResponseBodyCardSendDetailDTORecords[];
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      records: 'Records',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetCardSmsDetailsResponseBodyCardSendDetailDTORecords },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardSmsLinkResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The mobile phone numbers that support card messages.
   * 
   * @example
   * [\\"1390000****\\",\\"1370000****\\"]
   */
  cardPhoneNumbers?: string;
  /**
   * @remarks
   * The signatures must correspond to the mobile numbers and short URLs in sequence.
   * 
   * @example
   * ["aliyun","aliyun2"]
   */
  cardSignNames?: string;
  /**
   * @remarks
   * The short URLs.
   * 
   * @example
   * [\\"mw2m.cn/LAaGGa\\",\\"mw2m.cn/LAAaes\\"]
   */
  cardSmsLinks?: string;
  /**
   * @remarks
   * The review status of the card message template.
   * 
   * *   **0**: pending approval
   * *   **1**: approved
   * *   **2**: rejected
   * 
   * > Unapproved card messages are rolled back.
   * 
   * @example
   * 0
   */
  cardTmpState?: number;
  /**
   * @remarks
   * The mobile phone numbers that do not support card messages.
   * 
   * @example
   * 1390000****
   */
  notMediaMobiles?: string;
  static names(): { [key: string]: string } {
    return {
      cardPhoneNumbers: 'CardPhoneNumbers',
      cardSignNames: 'CardSignNames',
      cardSmsLinks: 'CardSmsLinks',
      cardTmpState: 'CardTmpState',
      notMediaMobiles: 'NotMediaMobiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardPhoneNumbers: 'string',
      cardSignNames: 'string',
      cardSmsLinks: 'string',
      cardTmpState: 'number',
      notMediaMobiles: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaResourceIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The download URL of the resource.
   * 
   * @example
   * http://test-example.com/download.jpg
   */
  resUrlDownload?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * SMS_14571****
   */
  resourceId?: number;
  static names(): { [key: string]: string } {
    return {
      resUrlDownload: 'ResUrlDownload',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resUrlDownload: 'string',
      resourceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOSSInfoForCardTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * LTAIxetqt1Dg****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 599333677478****
   */
  aliUid?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * alicom-cardsms-resources
   */
  bucket?: string;
  /**
   * @remarks
   * The timeout period.
   * 
   * @example
   * 1634209418
   */
  expireTime?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * https://alicom-cardsms-resources.oss-cn-zhangjiakou.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * The signature policy.
   * 
   * @example
   * eyJxxx0=
   */
  policy?: string;
  /**
   * @remarks
   * The signature.
   * 
   * @example
   * Aliyun
   */
  signature?: string;
  /**
   * @remarks
   * The path of the policy.
   * 
   * @example
   * 1631792777
   */
  startPath?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      aliUid: 'AliUid',
      bucket: 'Bucket',
      expireTime: 'ExpireTime',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
      startPath: 'StartPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      aliUid: 'string',
      bucket: 'string',
      expireTime: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
      startPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOSSInfoForUploadFileResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * AccessKey ID used for signing.
   * 
   * @example
   * LTAIxetqt1Dg****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * Expiration time.
   * 
   * @example
   * 1719297445
   */
  expireTime?: string;
  /**
   * @remarks
   * Host address.
   * 
   * @example
   * https://alicom-fc-media.oss-cn-zhangjiakou.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * Signature policy.
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyN***Ni0yNVQwNjozNzoyNS45NzBaI**iY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF0sWyJzdGFydHMtd2l0***sIiRrZXkiLCIiXV19
   */
  policy?: string;
  /**
   * @remarks
   * Signature information calculated based on **AccessKey Secret** and **Policy**. When calling the OSS API, OSS verifies this signature information to confirm the legitimacy of the Post request.
   * 
   * @example
   * BXnwCWPrhVb*****aoZHZfli5KE=
   */
  signature?: string;
  /**
   * @remarks
   * Policy path.
   * 
   * @example
   * 123456
   */
  startPath?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      expireTime: 'ExpireTime',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
      startPath: 'StartPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      expireTime: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
      startPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualificationOssInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * ak
   * 
   * @example
   * bypFNbG******
   */
  accessKeyId?: string;
  /**
   * @remarks
   * 过期时间
   * 
   * @example
   * 1741521339
   */
  expire?: number;
  /**
   * @remarks
   * 域名
   * 
   * @example
   * http://***.oss-cn-zhangjiakou.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * 策略
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNS0wMy0wOVQxMTo1NTozOS4wMDFaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF0seyJidWNrZXQiOiJhbGljb20tZmMtbWVkaWEifSxbImVxIiwiJGtleSIsIjEwMDAwMDM1ODA4MjA2M1wv********
   */
  policy?: string;
  /**
   * @remarks
   * 签名
   * 
   * @example
   * QvNTGC9DSLTeByP+ZWW******
   */
  signature?: string;
  /**
   * @remarks
   * 前缀
   * 
   * @example
   * 1000********001
   */
  startPath?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
      startPath: 'StartPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      expire: 'number',
      host: 'string',
      policy: 'string',
      signature: 'string',
      startPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsSignResponseBodyAuditInfo extends $dara.Model {
  /**
   * @remarks
   * Audit date and time.
   * 
   * @example
   * 2024-06-03 12:02:34
   */
  auditDate?: string;
  /**
   * @remarks
   * Reasons for not passing the review.
   * 
   * @example
   * reason for rejection.
   */
  rejectInfo?: string;
  static names(): { [key: string]: string } {
    return {
      auditDate: 'AuditDate',
      rejectInfo: 'RejectInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditDate: 'string',
      rejectInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsTemplateResponseBodyAuditInfo extends $dara.Model {
  /**
   * @remarks
   * Audit date and time.
   * 
   * @example
   * 2024-06-03 11:20:34
   */
  auditDate?: string;
  /**
   * @remarks
   * Reasons for failed audit.
   * 
   * @example
   * 模板内容中包含错别字。
   */
  rejectInfo?: string;
  static names(): { [key: string]: string } {
    return {
      auditDate: 'AuditDate',
      rejectInfo: 'RejectInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditDate: 'string',
      rejectInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsTemplateResponseBodyFileUrlList extends $dara.Model {
  fileUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.fileUrl)) {
      $dara.Model.validateArray(this.fileUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsTemplateResponseBodyMoreDataFileUrlList extends $dara.Model {
  moreDataFileUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      moreDataFileUrl: 'MoreDataFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moreDataFileUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.moreDataFileUrl)) {
      $dara.Model.validateArray(this.moreDataFileUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * TestValue
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
  /**
   * @remarks
   * The code of the message template.
   * 
   * @example
   * SMS_23423****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of resource.
   * 
   * @example
   * ALIYUN::DYSMS::TEMPLATE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.tagResource)) {
      $dara.Model.validateArray(this.tagResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsSignRequestSignFileList extends $dara.Model {
  /**
   * @remarks
   * The base64-encoded string of the signed files. The size of the image cannot exceed 2 MB.
   * 
   * In some scenarios, documents are required to prove your identity. For more information, see [Signature specifications](https://help.aliyun.com/document_detail/108076.html).
   * 
   * This parameter is required.
   * 
   * @example
   * R0lGODlhHAAmAKIHAKqqqsvLy0hISObm5vf394uLiwAA
   */
  fileContents?: string;
  /**
   * @remarks
   * The format of the documents. You can upload multiple images. JPG, PNG, GIF, and JPEG are supported.
   * 
   * In some scenarios, documents are required to prove your identity. For more information, see [Signature specifications](https://help.aliyun.com/document_detail/108076.html).
   * 
   * > If the signature is used for other purposes or the signature source is an enterprise or public institution, you must upload some documents and an authorization letter. For more information, see [Documents](https://help.aliyun.com/document_detail/108076.html) and [Letter of authorization](https://help.aliyun.com/document_detail/56741.html).
   * 
   * This parameter is required.
   * 
   * @example
   * jpg
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardSmsTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The array of objects.
   */
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

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardSmsTemplateReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the data returned.
   */
  model?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      model: 'model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.model)) {
      $dara.Model.validateArray(this.model);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExtCodeSignResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 是否可回收
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * 扩展码A3
   * 
   * @example
   * 01
   */
  extCode?: string;
  /**
   * @remarks
   * 近1个月发送成功条数（只读）
   * 
   * @example
   * 69
   */
  sendCount?: number;
  /**
   * @remarks
   * 签名
   * 
   * @example
   * 示例值示例值
   */
  signName?: string;
  /**
   * @remarks
   * 来源
   * 
   * @example
   * 示例值示例值示例值
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      extCode: 'ExtCode',
      sendCount: 'SendCount',
      signName: 'SignName',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      extCode: 'string',
      sendCount: 'number',
      signName: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExtCodeSignResponseBodyData extends $dara.Model {
  list?: QueryExtCodeSignResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryExtCodeSignResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMobilesCardSupportResponseBodyDataQueryResult extends $dara.Model {
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 1380000****
   */
  mobile?: string;
  /**
   * @remarks
   * Indicates whether the mobile phone number supports card messages. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  support?: boolean;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
      support: 'Support',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
      support: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMobilesCardSupportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of returned results.
   */
  queryResult?: QueryMobilesCardSupportResponseBodyDataQueryResult[];
  static names(): { [key: string]: string } {
    return {
      queryResult: 'QueryResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResult: { 'type': 'array', 'itemType': QueryMobilesCardSupportResponseBodyDataQueryResult },
    };
  }

  validate() {
    if(Array.isArray(this.queryResult)) {
      $dara.Model.validateArray(this.queryResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPageSmartShortUrlLogResponseBodyModelList extends $dara.Model {
  /**
   * @example
   * 87
   */
  clickState?: number;
  /**
   * @example
   * 51
   */
  clickTime?: number;
  /**
   * @example
   * 64
   */
  createTime?: number;
  /**
   * @example
   * 示例值示例值
   */
  phoneNumber?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  shortName?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  shortUrl?: string;
  static names(): { [key: string]: string } {
    return {
      clickState: 'ClickState',
      clickTime: 'ClickTime',
      createTime: 'CreateTime',
      phoneNumber: 'PhoneNumber',
      shortName: 'ShortName',
      shortUrl: 'ShortUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clickState: 'number',
      clickTime: 'number',
      createTime: 'number',
      phoneNumber: 'string',
      shortName: 'string',
      shortUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPageSmartShortUrlLogResponseBodyModel extends $dara.Model {
  list?: QueryPageSmartShortUrlLogResponseBodyModelList[];
  /**
   * @example
   * 74
   */
  pageNo?: number;
  /**
   * @example
   * 15
   */
  pageSize?: number;
  /**
   * @example
   * 66
   */
  totalCount?: number;
  /**
   * @example
   * 86
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryPageSmartShortUrlLogResponseBodyModelList },
      pageNo: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsResponseBodySmsSendDetailDTOsSmsSendDetailDTO extends $dara.Model {
  /**
   * @remarks
   * The content of the message.
   * 
   * @example
   * 【Aliyun】This is a test message.
   */
  content?: string;
  /**
   * @remarks
   * The status code returned by the carrier.
   * 
   * *   If the message is delivered, "DELIVERED" is returned.
   * *   For information about the error codes that may be returned if the message is not delivered, see [error codes](https://help.aliyun.com/document_detail/101347.html).
   * 
   * @example
   * DELIVERED
   */
  errCode?: string;
  /**
   * @remarks
   * The extended field.
   * 
   * @example
   * 123
   */
  outId?: string;
  /**
   * @remarks
   * The mobile numbers of the recipients.
   * 
   * @example
   * 1390000****
   */
  phoneNum?: string;
  /**
   * @remarks
   * The date and time when the message was received.
   * 
   * @example
   * 2019-01-08 16:44:13
   */
  receiveDate?: string;
  /**
   * @remarks
   * The date and time when the message was sent.
   * 
   * @example
   * 2019-01-08 16:44:10
   */
  sendDate?: string;
  /**
   * @remarks
   * The delivery status of the message. Valid values:
   * 
   * *   **1**: The message has not received a delivery receipt yet.
   * *   **2**: The message failed to be delivered.
   * *   **3**: The message was delivered.
   * 
   * @example
   * 3
   */
  sendStatus?: number;
  /**
   * @remarks
   * The ID of the message template.
   * 
   * @example
   * SMS_12231****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsResponseBodySmsSendDetailDTOs extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.smsSendDetailDTO)) {
      $dara.Model.validateArray(this.smsSendDetailDTO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendStatisticsResponseBodyDataTargetList extends $dara.Model {
  /**
   * @remarks
   * The number of messages without a delivery receipt.
   * 
   * @example
   * 1
   */
  noRespondedCount?: number;
  /**
   * @remarks
   * The number of messages with a delivery receipt that indicates a failure.
   * 
   * @example
   * 2
   */
  respondedFailCount?: number;
  /**
   * @remarks
   * The number of messages with a delivery receipt that indicates a success.
   * 
   * @example
   * 17
   */
  respondedSuccessCount?: number;
  /**
   * @remarks
   * The date when the message is sent. Format: yyyyMMdd. Example: 20181225.
   * 
   * @example
   * 20201010
   */
  sendDate?: string;
  /**
   * @remarks
   * The number of delivered messages.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      noRespondedCount: 'NoRespondedCount',
      respondedFailCount: 'RespondedFailCount',
      respondedSuccessCount: 'RespondedSuccessCount',
      sendDate: 'SendDate',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noRespondedCount: 'number',
      respondedFailCount: 'number',
      respondedSuccessCount: 'number',
      sendDate: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendStatisticsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the data returned.
   */
  targetList?: QuerySendStatisticsResponseBodyDataTargetList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      targetList: 'TargetList',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetList: { 'type': 'array', 'itemType': QuerySendStatisticsResponseBodyDataTargetList },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.targetList)) {
      $dara.Model.validateArray(this.targetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShortUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the short URL was created.
   * 
   * @example
   * 2019-01-08 16:44:13
   */
  createDate?: string;
  /**
   * @remarks
   * The time when the short URL expires.
   * 
   * @example
   * 2019-01-22 11:21:11
   */
  expireDate?: string;
  /**
   * @remarks
   * The PV.
   * 
   * @example
   * 300
   */
  pageViewCount?: string;
  /**
   * @remarks
   * The short URL.
   * 
   * @example
   * http://****.cn/6y8uy7
   */
  shortUrl?: string;
  /**
   * @remarks
   * The service name of the short URL.
   * 
   * @example
   * The Alibaba Cloud Short Link service.
   */
  shortUrlName?: string;
  /**
   * @remarks
   * The status of the short URL. Valid values:
   * 
   * *   **expired**
   * *   **effective**
   * *   **audit**
   * *   **reject**
   * 
   * @example
   * expired
   */
  shortUrlStatus?: string;
  /**
   * @remarks
   * The source address.
   * 
   * @example
   * https://www.****.com/product/sms
   */
  sourceUrl?: string;
  /**
   * @remarks
   * The UV.
   * 
   * @example
   * 23
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleSmsQualificationResponseBodyDataBusinessLicensePics extends $dara.Model {
  /**
   * @example
   * 123456/111.png
   */
  licensePic?: string;
  /**
   * @remarks
   * 文件的完整路径
   * 
   * @example
   * https://******.aliyuncs.com/******
   */
  picUrl?: string;
  /**
   * @example
   * businessLicense
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      licensePic: 'LicensePic',
      picUrl: 'PicUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licensePic: 'string',
      picUrl: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleSmsQualificationResponseBodyDataOtherFiles extends $dara.Model {
  /**
   * @example
   * 123456/111.png
   */
  licensePic?: string;
  /**
   * @remarks
   * 文件的完整路径
   * 
   * @example
   * https://******.aliyuncs.com/******
   */
  picUrl?: string;
  static names(): { [key: string]: string } {
    return {
      licensePic: 'LicensePic',
      picUrl: 'PicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licensePic: 'string',
      picUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleSmsQualificationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 经办人身份证有效期
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  adminIDCardExpDate?: string;
  /**
   * @remarks
   * 经办人身份证国徽面，产品需求，要求身份证可以分正反面上传
   * 
   * @example
   * https://******.aliyuncs.com/******
   */
  adminIDCardFrontFace?: string;
  /**
   * @remarks
   * 经办人身份证号码
   * 
   * @example
   * 511391********5123
   */
  adminIDCardNo?: string;
  /**
   * @remarks
   * 经办人身份证图片地址，正反面合一
   * 
   * @example
   * https://******.aliyuncs.com/******
   */
  adminIDCardPic?: string;
  /**
   * @remarks
   * 管理员身份证类型
   * 
   * @example
   * identityCard
   */
  adminIDCardType?: string;
  /**
   * @remarks
   * 经办人姓名
   * 
   * @example
   * 示例值示例值
   */
  adminName?: string;
  /**
   * @remarks
   * 经办人手机号码
   * 
   * @example
   * 137*******
   */
  adminPhoneNo?: string;
  /**
   * @remarks
   * 证件信息
   */
  businessLicensePics?: QuerySingleSmsQualificationResponseBodyDataBusinessLicensePics[];
  /**
   * @remarks
   * 行业类型，在当前模式下是可以用产品线code来区分
   * 
   * @example
   * dysms
   */
  businessType?: string;
  /**
   * @remarks
   * 公司名称
   * 
   * @example
   * 示例值示例值
   */
  companyName?: string;
  /**
   * @remarks
   * 企业类型, COMPANY:公司，政府或者事业单位:NON_PROFIT_ORGANIZATION
   * 
   * @example
   * COMPANY
   */
  companyType?: string;
  /**
   * @example
   * 2023-01-01~2033-01-01
   */
  effTimeStr?: string;
  /**
   * @remarks
   * 法人身份证号码
   * 
   * @example
   * 511391********5123
   */
  legalPersonIDCardNo?: string;
  /**
   * @remarks
   * 法人身份证类型
   * 
   * @example
   * identityCard
   */
  legalPersonIDCardType?: string;
  /**
   * @remarks
   * 法人身份证有效期
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  legalPersonIdCardEffTime?: string;
  /**
   * @remarks
   * 法人姓名
   * 
   * @example
   * 示例值
   */
  legalPersonName?: string;
  /**
   * @remarks
   * 社会统一信用代码
   * 
   * @example
   * 910X********0012
   */
  organizationCode?: string;
  /**
   * @remarks
   * 更多资料
   */
  otherFiles?: QuerySingleSmsQualificationResponseBodyDataOtherFiles[];
  /**
   * @example
   * 10000****
   */
  qualificationGroupId?: number;
  /**
   * @remarks
   * 资质名称
   * 
   * @example
   * 示例值示例值
   */
  qualificationName?: string;
  /**
   * @remarks
   * 备注
   * 
   * @example
   * 示例值示例值
   */
  remark?: string;
  /**
   * @remarks
   * 当前审核状态
   * 
   * @example
   * PASSED
   */
  state?: string;
  /**
   * @remarks
   * 是否自用
   * 
   * @example
   * false
   */
  useBySelf?: boolean;
  /**
   * @example
   * false
   */
  whetherShare?: boolean;
  /**
   * @remarks
   * 乾坤袋工单ID
   * 
   * @example
   * 2001****
   */
  workOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      adminIDCardExpDate: 'AdminIDCardExpDate',
      adminIDCardFrontFace: 'AdminIDCardFrontFace',
      adminIDCardNo: 'AdminIDCardNo',
      adminIDCardPic: 'AdminIDCardPic',
      adminIDCardType: 'AdminIDCardType',
      adminName: 'AdminName',
      adminPhoneNo: 'AdminPhoneNo',
      businessLicensePics: 'BusinessLicensePics',
      businessType: 'BusinessType',
      companyName: 'CompanyName',
      companyType: 'CompanyType',
      effTimeStr: 'EffTimeStr',
      legalPersonIDCardNo: 'LegalPersonIDCardNo',
      legalPersonIDCardType: 'LegalPersonIDCardType',
      legalPersonIdCardEffTime: 'LegalPersonIdCardEffTime',
      legalPersonName: 'LegalPersonName',
      organizationCode: 'OrganizationCode',
      otherFiles: 'OtherFiles',
      qualificationGroupId: 'QualificationGroupId',
      qualificationName: 'QualificationName',
      remark: 'Remark',
      state: 'State',
      useBySelf: 'UseBySelf',
      whetherShare: 'WhetherShare',
      workOrderId: 'WorkOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminIDCardExpDate: 'string',
      adminIDCardFrontFace: 'string',
      adminIDCardNo: 'string',
      adminIDCardPic: 'string',
      adminIDCardType: 'string',
      adminName: 'string',
      adminPhoneNo: 'string',
      businessLicensePics: { 'type': 'array', 'itemType': QuerySingleSmsQualificationResponseBodyDataBusinessLicensePics },
      businessType: 'string',
      companyName: 'string',
      companyType: 'string',
      effTimeStr: 'string',
      legalPersonIDCardNo: 'string',
      legalPersonIDCardType: 'string',
      legalPersonIdCardEffTime: 'string',
      legalPersonName: 'string',
      organizationCode: 'string',
      otherFiles: { 'type': 'array', 'itemType': QuerySingleSmsQualificationResponseBodyDataOtherFiles },
      qualificationGroupId: 'number',
      qualificationName: 'string',
      remark: 'string',
      state: 'string',
      useBySelf: 'boolean',
      whetherShare: 'boolean',
      workOrderId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.businessLicensePics)) {
      $dara.Model.validateArray(this.businessLicensePics);
    }
    if(Array.isArray(this.otherFiles)) {
      $dara.Model.validateArray(this.otherFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsAuthorizationLetterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 委托授权方
   * 
   * @example
   * 示例值示例值
   */
  authorization?: string;
  /**
   * @remarks
   * 委托授权书有效期
   * 
   * @example
   * 2023-01-01~2026-01-01
   */
  authorizationLetterExpDate?: string;
  /**
   * @remarks
   * 委托授权书id
   * 
   * @example
   * 10000******
   */
  authorizationLetterId?: number;
  /**
   * @remarks
   * 委托授权书命名
   * 
   * @example
   * 示例值示例值
   */
  authorizationLetterName?: string;
  /**
   * @remarks
   * 委托授权书图片地址
   */
  authorizationLetterPic?: string;
  /**
   * @remarks
   * 授权方统一社会信用代码
   * 
   * @example
   * 9****************A
   */
  organizationCode?: string;
  /**
   * @remarks
   * 被委托授权方
   * 
   * @example
   * 示例值示例值示例值
   */
  proxyAuthorization?: string;
  /**
   * @remarks
   * 委托授权签名范围
   * 
   * @example
   * 示例值
   */
  signScope?: string;
  /**
   * @remarks
   * 委托授权书审核状态（初始化INT/审核通过PASSED）
   * 
   * @example
   * PASSED
   */
  state?: string;
  /**
   * @remarks
   * 委托授权书可用状态（可用VALID/不可用INVALID）
   * 
   * @example
   * VALID
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      authorization: 'Authorization',
      authorizationLetterExpDate: 'AuthorizationLetterExpDate',
      authorizationLetterId: 'AuthorizationLetterId',
      authorizationLetterName: 'AuthorizationLetterName',
      authorizationLetterPic: 'AuthorizationLetterPic',
      organizationCode: 'OrganizationCode',
      proxyAuthorization: 'ProxyAuthorization',
      signScope: 'SignScope',
      state: 'State',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorization: 'string',
      authorizationLetterExpDate: 'string',
      authorizationLetterId: 'number',
      authorizationLetterName: 'string',
      authorizationLetterPic: 'string',
      organizationCode: 'string',
      proxyAuthorization: 'string',
      signScope: 'string',
      state: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsQualificationRecordResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 审核备注
   * 
   * @example
   * 示例值示例值
   */
  auditRemark?: string;
  /**
   * @remarks
   * 审核时间
   * 
   * @example
   * 2024-12-26 17:29:04
   */
  auditTime?: string;
  /**
   * @remarks
   * 公司名称或实人认证姓名
   * 
   * @example
   * 示例值示例值示例值
   */
  companyName?: string;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 2025-02-20 11:59:30
   */
  createDate?: string;
  /**
   * @remarks
   * 资质组ID
   * 
   * @example
   * 10000****
   */
  groupId?: number;
  /**
   * @remarks
   * 法人名称
   * 
   * @example
   * 示例值示例值
   */
  legalPersonName?: string;
  /**
   * @remarks
   * 资质组名称
   * 
   * @example
   * 示例值示例值示例值
   */
  qualificationGroupName?: string;
  /**
   * @remarks
   * 审核状态名
   * 
   * @example
   * INT
   */
  stateName?: string;
  /**
   * @remarks
   * 是否自用
   * 
   * @example
   * true
   */
  useBySelf?: string;
  /**
   * @remarks
   * 工单ID
   * 
   * @example
   * 2001****
   */
  workOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      auditRemark: 'AuditRemark',
      auditTime: 'AuditTime',
      companyName: 'CompanyName',
      createDate: 'CreateDate',
      groupId: 'GroupId',
      legalPersonName: 'LegalPersonName',
      qualificationGroupName: 'QualificationGroupName',
      stateName: 'StateName',
      useBySelf: 'UseBySelf',
      workOrderId: 'WorkOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRemark: 'string',
      auditTime: 'string',
      companyName: 'string',
      createDate: 'string',
      groupId: 'number',
      legalPersonName: 'string',
      qualificationGroupName: 'string',
      stateName: 'string',
      useBySelf: 'string',
      workOrderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsQualificationRecordResponseBodyData extends $dara.Model {
  list?: QuerySmsQualificationRecordResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 25
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QuerySmsQualificationRecordResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsSignListResponseBodySmsSignListReason extends $dara.Model {
  /**
   * @remarks
   * The time when the signature was rejected. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-01-08 19:02:13
   */
  rejectDate?: string;
  /**
   * @remarks
   * The reason why the signature was rejected.
   * 
   * @example
   * The document cannot verify the authenticity of the information. Please upload it again.
   */
  rejectInfo?: string;
  /**
   * @remarks
   * The remarks about the rejection.
   * 
   * @example
   * The document cannot verify the authenticity of the information. Please upload it again.
   */
  rejectSubInfo?: string;
  static names(): { [key: string]: string } {
    return {
      rejectDate: 'RejectDate',
      rejectInfo: 'RejectInfo',
      rejectSubInfo: 'RejectSubInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rejectDate: 'string',
      rejectInfo: 'string',
      rejectSubInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsSignListResponseBodySmsSignList extends $dara.Model {
  /**
   * @remarks
   * The approval status of the signature. Valid values:
   * 
   * *   **AUDIT_STATE_INIT**: The signature is pending approval.
   * *   **AUDIT_STATE_PASS**: The signature is approved.
   * *   **AUDIT_STATE_NOT_PASS**: The signature is rejected. You can view the reason in the Reason response parameter.
   * *   **AUDIT_STATE_CANCEL**: The approval is canceled.
   * 
   * @example
   * AUDIT_STATE_NOT_PASS
   */
  auditStatus?: string;
  authorizationLetterId?: number;
  /**
   * @remarks
   * The type of the signature scenario. The return value ends with "type". Valid values:
   * 
   * *   Verification code type
   * *   General-purpose type
   * 
   * @example
   * Verification code type
   */
  businessType?: string;
  /**
   * @remarks
   * The time when the signature was created. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-01-08 16:44:13
   */
  createDate?: string;
  /**
   * @remarks
   * The ticket ID.
   * 
   * @example
   * 236****5
   */
  orderId?: string;
  /**
   * @remarks
   * The approval remarks.
   * 
   * *   If the value of AuditStatus is **AUDIT_STATE_PASS** or **AUDIT_STATE_INIT**, the value of Reason is No Approval Remarks.
   * *   If the value of AuditStatus is **AUDIT_STATE_NOT_PASS**, the reason why the signature is rejected is returned.
   */
  reason?: QuerySmsSignListResponseBodySmsSignListReason;
  /**
   * @remarks
   * The name of the signature.
   * 
   * @example
   * Aliyun
   */
  signName?: string;
  authorizationLetterAuditPass?: boolean;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      authorizationLetterId: 'AuthorizationLetterId',
      businessType: 'BusinessType',
      createDate: 'CreateDate',
      orderId: 'OrderId',
      reason: 'Reason',
      signName: 'SignName',
      authorizationLetterAuditPass: 'authorizationLetterAuditPass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      authorizationLetterId: 'number',
      businessType: 'string',
      createDate: 'string',
      orderId: 'string',
      reason: QuerySmsSignListResponseBodySmsSignListReason,
      signName: 'string',
      authorizationLetterAuditPass: 'boolean',
    };
  }

  validate() {
    if(this.reason && typeof (this.reason as any).validate === 'function') {
      (this.reason as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsTemplateListResponseBodySmsTemplateListReason extends $dara.Model {
  /**
   * @remarks
   * The time when the message template was rejected. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-06-04 16:01:17
   */
  rejectDate?: string;
  /**
   * @remarks
   * The reason why the message template was rejected.
   * 
   * @example
   * The document cannot verify the authenticity of the information. Please upload it again.
   */
  rejectInfo?: string;
  /**
   * @remarks
   * The remarks about the rejection.
   * 
   * @example
   * The document cannot verify the authenticity of the information. Please upload it again.
   */
  rejectSubInfo?: string;
  static names(): { [key: string]: string } {
    return {
      rejectDate: 'RejectDate',
      rejectInfo: 'RejectInfo',
      rejectSubInfo: 'RejectSubInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rejectDate: 'string',
      rejectInfo: 'string',
      rejectSubInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsTemplateListResponseBodySmsTemplateList extends $dara.Model {
  /**
   * @remarks
   * The approval status of the message template. Valid values:
   * 
   * *   **AUDIT_STATE_INIT**: The message template is pending approval.
   * *   **AUDIT_STATE_PASS**: The message template is approved.
   * *   **AUDIT_STATE_NOT_PASS**: The message template is rejected. You can view the reason in the Reason response parameter.
   * *   **AUDIT_STATE_CANCEL** or **AUDIT_SATE_CANCEL**: The approval is canceled.
   * 
   * @example
   * AUDIT_STATE_PASS
   */
  auditStatus?: string;
  /**
   * @remarks
   * The time when the message template was created. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2020-06-04 11:42:17
   */
  createDate?: string;
  /**
   * @remarks
   * The ticket ID.
   * 
   * @example
   * 2361****
   */
  orderId?: string;
  /**
   * @remarks
   * The type of the message template. We recommend that you specify this parameter. Valid values:
   * 
   * *   **0**: verification code
   * *   **1**: notification message
   * *   **2**: promotional message
   * *   **3**: message sent to countries or regions outside the Chinese mainland
   * *   **7**: digital message
   * 
   * > The template type is the same as the value of the TemplateType parameter in the AddSmsTemplate and ModifySmsTemplate operations.
   * 
   * @example
   * 0
   */
  outerTemplateType?: number;
  /**
   * @remarks
   * The approval remarks.
   * 
   * *   If the value of AuditStatus is **AUDIT_STATE_PASS** or **AUDIT_STATE_INIT**, the value of Reason is No Approval Remarks.
   * *   If the value of AuditStatus is **AUDIT_STATE_NOT_PASS**, the reason why the message template is rejected is returned.
   */
  reason?: QuerySmsTemplateListResponseBodySmsTemplateListReason;
  /**
   * @remarks
   * The code of the message template.
   * 
   * You can log on to the [Short Message Service (SMS) console](https://dysms.console.aliyun.com/dysms.htm), click **Go China** or **Go Globe** in the left-side navigation pane, and then view the template code on the **Templates** tab. You can also call the [AddSmsTemplate](https://help.aliyun.com/document_detail/121208.html) operation to obtain the template code.
   * 
   * @example
   * SMS_1525***
   */
  templateCode?: string;
  /**
   * @remarks
   * The content of the message template.
   * 
   * @example
   * 123456789
   */
  templateContent?: string;
  /**
   * @remarks
   * The name of the message template.
   * 
   * @example
   * aliyun verification code
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the message template. Valid values:
   * 
   * *   **0**: notification message
   * *   **1**: promotional message
   * *   **2**: verification code
   * *   **6**: message sent to countries or regions outside the Chinese mainland
   * *   **7**: digital message
   * 
   * @example
   * 7
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      createDate: 'CreateDate',
      orderId: 'OrderId',
      outerTemplateType: 'OuterTemplateType',
      reason: 'Reason',
      templateCode: 'TemplateCode',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      createDate: 'string',
      orderId: 'string',
      outerTemplateType: 'number',
      reason: QuerySmsTemplateListResponseBodySmsTemplateListReason,
      templateCode: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateType: 'number',
    };
  }

  validate() {
    if(this.reason && typeof (this.reason as any).validate === 'function') {
      (this.reason as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendBatchCardSmsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the card message.
   * 
   * @example
   * 123
   */
  bizCardId?: string;
  /**
   * @remarks
   * The ID of the digital message.
   * 
   * @example
   * 3214
   */
  bizDigitalId?: string;
  /**
   * @remarks
   * The ID of the text message.
   * 
   * @example
   * 3256
   */
  bizSmsId?: string;
  /**
   * @remarks
   * The review status of the card message template.
   * 
   * *   **0**: pending approval
   * *   **1**: approved
   * *   **2**: rejected
   * 
   * > Unapproved card messages are rolled back.
   * 
   * @example
   * 0
   */
  cardTmpState?: number;
  /**
   * @remarks
   * The mobile phone number from which the card message is sent.
   * 
   * @example
   * 1390000****
   */
  mediaMobiles?: string;
  /**
   * @remarks
   * The mobile phone number whose card message is rolled back.
   * 
   * @example
   * 1390000****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCardSmsRequestCardObjects extends $dara.Model {
  /**
   * @remarks
   * The URL to which the message is redirected if the message fails to be rendered.
   * 
   * @example
   * https://alibaba.com
   */
  customUrl?: string;
  /**
   * @remarks
   * The variables. Special characters, such as $ and {}, do not need to be entered.
   * 
   * @example
   * {\\"param3\\":\\"three\\",\\"param1\\":\\"one\\",\\"param2\\":\\"two\\"}
   */
  dyncParams?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 1390000****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCardSmsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the card message.
   * 
   * @example
   * 123
   */
  bizCardId?: string;
  /**
   * @remarks
   * The ID of the digital message.
   * 
   * @example
   * 232
   */
  bizDigitalId?: string;
  /**
   * @remarks
   * The ID of the text message.
   * 
   * @example
   * 524
   */
  bizSmsId?: string;
  /**
   * @remarks
   * The review status of the card message template.
   * 
   * *   **0**: pending approval
   * *   **1**: approved
   * *   **2**: rejected
   * 
   * > Unapproved card messages are rolled back.
   * 
   * @example
   * 0
   */
  cardTmpState?: number;
  /**
   * @remarks
   * The mobile phone number from which the card message is sent.
   * 
   * @example
   * 1390000****
   */
  mediaMobiles?: string;
  /**
   * @remarks
   * The mobile phone number whose card message is rolled back.
   * 
   * @example
   * 1390000****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmsQualificationRequestBusinessLicensePics extends $dara.Model {
  /**
   * @remarks
   * 营业证件图片标识的osskey
   * 
   * @example
   * 123456/111.png
   */
  licensePic?: string;
  /**
   * @remarks
   * 营业证件类型，businessLicense:营业执照;organizationCodeLicense:组织机构代码证;taxRegistrationLicense:税务登记证;socialCreditLicense:社会信用代码证书;newStyleBusinessLicense:三证合一;signLegalLicense:签名归属方的事业单位法人证书;otherLicense:其他类型执照证书
   * 
   * @example
   * businessLicense
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      licensePic: 'LicensePic',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licensePic: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmsQualificationRequestOtherFiles extends $dara.Model {
  /**
   * @example
   * 123456/111.png
   */
  licensePic?: string;
  static names(): { [key: string]: string } {
    return {
      licensePic: 'LicensePic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licensePic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The array of tag keys. Valid values of N: 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The array of tag values. Valid values of N: 1 to 20.
   * 
   * @example
   * TestValue
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmsQualificationRequestBusinessLicensePics extends $dara.Model {
  /**
   * @remarks
   * 证件图片标识的osskey
   * 
   * @example
   * 123456/111.png
   */
  licensePic?: string;
  /**
   * @remarks
   * 企业证件类型，businessLicense:营业执照;organizationCodeLicense:组织机构代码证;taxRegistrationLicense:税务登记证;socialCreditLicense:社会信用代码证书;newStyleBusinessLicense:三证合一;signLegalLicense:签名归属方的事业单位法人证书;otherLicense:其他类型执照证书
   * 
   * @example
   * businessLicense
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      licensePic: 'LicensePic',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licensePic: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmsQualificationRequestOtherFiles extends $dara.Model {
  /**
   * @example
   * 123456/111.png
   */
  licensePic?: string;
  static names(): { [key: string]: string } {
    return {
      licensePic: 'LicensePic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licensePic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddExtCodeSignRequest extends $dara.Model {
  /**
   * @remarks
   * 扩展码A3
   * 
   * This parameter is required.
   * 
   * @example
   * 01
   */
  extCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 签名
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      extCode: 'ExtCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extCode: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddExtCodeSignResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddExtCodeSignResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddExtCodeSignResponseBody;
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
      body: AddExtCodeSignResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddShortUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the short URL. Unit: days. The maximum validity period is 90 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  effectiveDays?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The service name of the short URL. The name cannot exceed 13 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * The Alibaba Cloud Short Link service.
   */
  shortUrlName?: string;
  /**
   * @remarks
   * The source URL. The URL cannot exceed 1,000 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * https://www.****.com/product/sms
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddShortUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The details of the short URL.
   */
  data?: AddShortUrlResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 819BE656-D2E0-4858-8B21-B2E477085AAF
   */
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddShortUrlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddShortUrlResponseBody;
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
      body: AddShortUrlResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsSignRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The description of the signature application. The description cannot exceed 200 characters in length. The description is one of the reference information for signature review. We recommend that you describe the use scenarios of your services in detail, and provide information that can verify the services, such as a website URL, a domain name with an ICP filing, an app download URL, an official account name, or a mini program name. For sign-in scenarios, you must also provide an account and password for tests. A detailed description can improve the review efficiency of signatures and templates.
   * 
   * This parameter is required.
   * 
   * @example
   * This is the abbreviation of our company.
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The signature files.
   * 
   * This parameter is required.
   */
  signFileList?: AddSmsSignRequestSignFileList[];
  /**
   * @remarks
   * The name of the signature.
   * 
   * > 
   * 
   * *   The signature name is not case-sensitive. For example, [Alibaba Cloud Communication] and [alibaba cloud communication] are considered as the same name.
   * 
   * *   If your verification code signature and general-purpose signature have the same name, the system uses the general-purpose signature to send messages by default.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  signName?: string;
  /**
   * @remarks
   * The source of the signature. Valid values:
   * 
   * *   **0**: the full name or abbreviation of an enterprise or institution
   * *   **1**: the full name or abbreviation of a website that has obtained an ICP filing from the Ministry of Industry and Information Technology (MIIT) of China
   * *   **2**: the full name or abbreviation of an app
   * *   **3**: the full name or abbreviation of an official account or mini-program
   * *   **4**: the full name or abbreviation of an e-commerce store
   * *   **5**: the full name or abbreviation of a trademark
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  signSource?: number;
  /**
   * @remarks
   * The type of the signature. Valid values:
   * 
   * *   **0**: verification code
   * *   **1**: general-purpose
   * 
   * @example
   * 1
   */
  signType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signFileList: 'SignFileList',
      signName: 'SignName',
      signSource: 'SignSource',
      signType: 'SignType',
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
      signType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.signFileList)) {
      $dara.Model.validateArray(this.signFileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsSignResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the signature.
   * 
   * @example
   * Aliyun
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsSignResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddSmsSignResponseBody;
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
      body: AddSmsSignResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsTemplateRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The description of the message template. It is one of the reference information for template review. The description cannot exceed 100 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Apply for a template to send verification codes.
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The content of the template. The content can be up to 500 characters in length. For more information, see [Message template specifications](https://help.aliyun.com/document_detail/108253.html).
   * 
   * This parameter is required.
   * 
   * @example
   * You are applying for mobile registration. The verification code is: ${code}, valid for 5 minutes!
   */
  templateContent?: string;
  /**
   * @remarks
   * The name of the template. The name can be up to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun Test
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the message. Valid values:
   * 
   * *   **0**: verification code
   * *   **1**: notification
   * *   **2**: promotional message
   * *   **3**: message sent to countries or regions outside the Chinese mainland
   * 
   * > Only enterprise users can send promotional messages, or send messages to countries or regions outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  /**
   * @remarks
   * The code of the message template.
   * 
   * @example
   * SMS_15255****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddSmsTemplateResponseBody;
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
      body: AddSmsTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeSignatureQualificationRequest extends $dara.Model {
  /**
   * @remarks
   * 授权委托书id
   * 
   * @example
   * 1000********1234
   */
  authorizationLetterId?: number;
  ownerId?: number;
  /**
   * @remarks
   * 资质id
   * 
   * This parameter is required.
   * 
   * @example
   * 1*****2
   */
  qualificationId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 签名
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  signatureName?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationLetterId: 'AuthorizationLetterId',
      ownerId: 'OwnerId',
      qualificationId: 'QualificationId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signatureName: 'SignatureName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationLetterId: 'number',
      ownerId: 'number',
      qualificationId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signatureName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeSignatureQualificationResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ChangeSignatureQualificationResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 0A974B78-02BF-4C79-ADF3-90CFBA1B55B1
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: ChangeSignatureQualificationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeSignatureQualificationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeSignatureQualificationResponseBody;
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
      body: ChangeSignatureQualificationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMobilesCardSupportRequest extends $dara.Model {
  /**
   * @remarks
   * The list of mobile phone numbers that receive messages.
   * 
   * This parameter is required.
   */
  mobiles?: { [key: string]: any }[];
  /**
   * @remarks
   * The code of the message template. You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > Make sure that the message template has been approved.
   * 
   * This parameter is required.
   * 
   * @example
   * CARD_SMS_****
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      mobiles: 'Mobiles',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobiles: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      templateCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mobiles)) {
      $dara.Model.validateArray(this.mobiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMobilesCardSupportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: CheckMobilesCardSupportResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 819BE656-D2E0-4858-8B21-B2E477085AAF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
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
      data: CheckMobilesCardSupportResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMobilesCardSupportResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckMobilesCardSupportResponseBody;
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
      body: CheckMobilesCardSupportResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConversionDataIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The conversion rate.
   * 
   * > The value of this parameter is a double, and ranges from 0 to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.53
   */
  conversionRate?: string;
  ownerId?: number;
  /**
   * @remarks
   * The time point at which the conversion rate is monitored. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * > If you do not specify this parameter, the current timestamp is used by default.
   * 
   * @example
   * 1349055900000
   */
  reportTime?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      conversionRate: 'ConversionRate',
      ownerId: 'OwnerId',
      reportTime: 'ReportTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversionRate: 'string',
      ownerId: 'number',
      reportTime: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConversionDataIntlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. If OK is returned, the request is successful. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html?spm=a2c4g.101345.0.0.74326ff2J5EZyt).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8D****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConversionDataIntlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConversionDataIntlResponseBody;
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
      body: ConversionDataIntlResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCardSmsTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The mobile phone manufacturer. Valid values:
   * 
   * *   **HuaWei**: HUAWEI
   * *   **XiaoMi**: Xiaomi
   * *   **OPPO**: OPPO
   * *   **VIVO**: vivo
   * *   **MEIZU**: MEIZU
   * 
   * > If this parameter is not specified, the system automatically specifies a supported mobile phone manufacturer.
   * 
   * @example
   * XiaoMi
   */
  factorys?: string;
  /**
   * @remarks
   * The description of the message template.
   * 
   * @example
   * Image and Text Template
   */
  memo?: string;
  /**
   * @remarks
   * The content of the card message template.
   * 
   * > 
   * 
   * *   For information about fields such as Template, ExtendInfo, TemplateContent, TmpCard, and Action, see [Parameters of card message templates](https://help.aliyun.com/document_detail/434929.html).
   * 
   * *   Message template content varies based on the template type. For more information, see [Sample message templates](https://help.aliyun.com/document_detail/435361.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *        "extendInfo":{
   *               "scene":"HMOVM",
   *               "purpose":"2",
   *               "userExt":{
   *                      "outId":"1234554321"
   *               }
   *        },
   *        "templateContent":{
   *               "pages":[
   *                      {
   * "tmpCards":[
   *                                    {
   *                                           "type":"IMAGE",
   *                                           "srcType":1,
   *                                           "src":"28755",
   *                                           "actionType":"OPEN_APP",
   *                                           "action":{
   *                                                  "target":"https://s.tb.cn/c.KxzZ",
   *                                                  "merchantName":"test-template",
   *                                                  "packageName":[
   *                                                         "com.taobao.taobao"],
   *                                                  "floorUrl":"https://s.tb.cn/c.KxzZ"
   *                                           },
   *                                           "positionNumber":1
   *                                    },
   *                                    {
   *                                           "type":"TEXT",
   *                                           "content":"this is a test msg.",
   *                                           "isTextTitle":true,
   *                                           "positionNumber":2
   *                                    },
   *                                    {
   *                                           "type":"TEXT",
   *                                           "content":"Promotional information",
   *                                           "isTextTitle":false,
   *                                           "positionNumber":3
   *                                    },
   *                                    {
   *                                           "type":"BUTTON",
   *                                           "content":"Promotional information,",
   *                                           "actionType":"OPEN_BROWSER",
   *                                           "action":{
   *                                                  "target":"https://www.aliyun.com",
   *                                                  "merchantName":"Currently on the Alibaba Cloud official website."
   * },
   *                                           "positionNumber":4
   *                                    }]
   *                      }]
   *        },
   *        "cardSignName":"aliyun",
   *        "cardType":5
   * }
   */
  template?: { [key: string]: any };
  /**
   * @remarks
   * The name of the card message template.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun Image and Text Template
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      factorys: 'Factorys',
      memo: 'Memo',
      template: 'Template',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factorys: 'string',
      memo: 'string',
      template: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateName: 'string',
    };
  }

  validate() {
    if(this.template) {
      $dara.Model.validateMap(this.template);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCardSmsTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The mobile phone manufacturer. Valid values:
   * 
   * *   **HuaWei**: HUAWEI
   * *   **XiaoMi**: Xiaomi
   * *   **OPPO**: OPPO
   * *   **VIVO**: vivo
   * *   **MEIZU**: MEIZU
   * 
   * > If this parameter is not specified, the system automatically specifies a supported mobile phone manufacturer.
   * 
   * @example
   * XiaoMi
   */
  factorys?: string;
  /**
   * @remarks
   * The description of the message template.
   * 
   * @example
   * Image and Text Template
   */
  memo?: string;
  /**
   * @remarks
   * The content of the card message template.
   * 
   * > 
   * 
   * *   For information about fields such as Template, ExtendInfo, TemplateContent, TmpCard, and Action, see [Parameters of card message templates](https://help.aliyun.com/document_detail/434929.html).
   * 
   * *   Message template content varies based on the template type. For more information, see [Sample message templates](https://help.aliyun.com/document_detail/435361.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *        "extendInfo":{
   *               "scene":"HMOVM",
   *               "purpose":"2",
   *               "userExt":{
   *                      "outId":"1234554321"
   *               }
   *        },
   *        "templateContent":{
   *               "pages":[
   *                      {
   * "tmpCards":[
   *                                    {
   *                                           "type":"IMAGE",
   *                                           "srcType":1,
   *                                           "src":"28755",
   *                                           "actionType":"OPEN_APP",
   *                                           "action":{
   *                                                  "target":"https://s.tb.cn/c.KxzZ",
   *                                                  "merchantName":"test-template",
   *                                                  "packageName":[
   *                                                         "com.taobao.taobao"],
   *                                                  "floorUrl":"https://s.tb.cn/c.KxzZ"
   *                                           },
   *                                           "positionNumber":1
   *                                    },
   *                                    {
   *                                           "type":"TEXT",
   *                                           "content":"this is a test msg.",
   *                                           "isTextTitle":true,
   *                                           "positionNumber":2
   *                                    },
   *                                    {
   *                                           "type":"TEXT",
   *                                           "content":"Promotional information",
   *                                           "isTextTitle":false,
   *                                           "positionNumber":3
   *                                    },
   *                                    {
   *                                           "type":"BUTTON",
   *                                           "content":"Promotional information,",
   *                                           "actionType":"OPEN_BROWSER",
   *                                           "action":{
   *                                                  "target":"https://www.aliyun.com",
   *                                                  "merchantName":"Currently on the Alibaba Cloud official website."
   * },
   *                                           "positionNumber":4
   *                                    }]
   *                      }]
   *        },
   *        "cardSignName":"aliyun",
   *        "cardType":5
   * }
   */
  templateShrink?: string;
  /**
   * @remarks
   * The name of the card message template.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun Image and Text Template
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      factorys: 'Factorys',
      memo: 'Memo',
      templateShrink: 'Template',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factorys: 'string',
      memo: 'string',
      templateShrink: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCardSmsTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   Other values indicate that the request fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: CreateCardSmsTemplateResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCardSmsTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCardSmsTemplateResponseBody;
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
      body: CreateCardSmsTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartShortUrlRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 15900195***
   */
  phoneNumbers?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  sourceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNumbers: 'PhoneNumbers',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceUrl: 'SourceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outId: 'string',
      ownerId: 'number',
      phoneNumbers: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartShortUrlResponseBody extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  code?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  model?: CreateSmartShortUrlResponseBodyModel[];
  /**
   * @example
   * 示例值示例值
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: { 'type': 'array', 'itemType': CreateSmartShortUrlResponseBodyModel },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.model)) {
      $dara.Model.validateArray(this.model);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartShortUrlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSmartShortUrlResponseBody;
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
      body: CreateSmartShortUrlResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsAuthorizationLetterRequest extends $dara.Model {
  /**
   * @remarks
   * 授权方，授权方命名长度不超过1000个字符，暂不支持包含除中点（·）、空格、中文括号【】、英文括号()外的任何符号或纯数字输入
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里云有限公司
   */
  authorization?: string;
  /**
   * @remarks
   * 委托授权书有效期
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01~2026-01-01
   */
  authorizationLetterExpDate?: string;
  /**
   * @remarks
   * 委托授权书命名非空，不超过100个字符，支持中文、英文或与数字组合进行命名，暂不支持任何符号或纯数字输入
   * 
   * This parameter is required.
   * 
   * @example
   * xxx公司授权书
   */
  authorizationLetterName?: string;
  /**
   * @remarks
   * 上传oss的委托授权书图片标识
   * 
   * This parameter is required.
   */
  authorizationLetterPic?: string;
  /**
   * @remarks
   * 授权方社会统一信用代码，长度不超过150个字符
   * 
   * This parameter is required.
   * 
   * @example
   * 9****************A
   */
  organizationCode?: string;
  ownerId?: number;
  /**
   * @remarks
   * 被授权方，被授权方命名长度不超过1000个字符，暂不支持包含除中点（·）、空格、中文括号【】、英文括号()外的任何符号或纯数字输入
   * 
   * This parameter is required.
   * 
   * @example
   * xxx公司
   */
  proxyAuthorization?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 委托授权签名列表，签名数量限制100个以内
   * 
   * This parameter is required.
   */
  signList?: string[];
  static names(): { [key: string]: string } {
    return {
      authorization: 'Authorization',
      authorizationLetterExpDate: 'AuthorizationLetterExpDate',
      authorizationLetterName: 'AuthorizationLetterName',
      authorizationLetterPic: 'AuthorizationLetterPic',
      organizationCode: 'OrganizationCode',
      ownerId: 'OwnerId',
      proxyAuthorization: 'ProxyAuthorization',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signList: 'SignList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorization: 'string',
      authorizationLetterExpDate: 'string',
      authorizationLetterName: 'string',
      authorizationLetterPic: 'string',
      organizationCode: 'string',
      ownerId: 'number',
      proxyAuthorization: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.signList)) {
      $dara.Model.validateArray(this.signList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsAuthorizationLetterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 授权方，授权方命名长度不超过1000个字符，暂不支持包含除中点（·）、空格、中文括号【】、英文括号()外的任何符号或纯数字输入
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里云有限公司
   */
  authorization?: string;
  /**
   * @remarks
   * 委托授权书有效期
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01~2026-01-01
   */
  authorizationLetterExpDate?: string;
  /**
   * @remarks
   * 委托授权书命名非空，不超过100个字符，支持中文、英文或与数字组合进行命名，暂不支持任何符号或纯数字输入
   * 
   * This parameter is required.
   * 
   * @example
   * xxx公司授权书
   */
  authorizationLetterName?: string;
  /**
   * @remarks
   * 上传oss的委托授权书图片标识
   * 
   * This parameter is required.
   */
  authorizationLetterPic?: string;
  /**
   * @remarks
   * 授权方社会统一信用代码，长度不超过150个字符
   * 
   * This parameter is required.
   * 
   * @example
   * 9****************A
   */
  organizationCode?: string;
  ownerId?: number;
  /**
   * @remarks
   * 被授权方，被授权方命名长度不超过1000个字符，暂不支持包含除中点（·）、空格、中文括号【】、英文括号()外的任何符号或纯数字输入
   * 
   * This parameter is required.
   * 
   * @example
   * xxx公司
   */
  proxyAuthorization?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 委托授权签名列表，签名数量限制100个以内
   * 
   * This parameter is required.
   */
  signListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      authorization: 'Authorization',
      authorizationLetterExpDate: 'AuthorizationLetterExpDate',
      authorizationLetterName: 'AuthorizationLetterName',
      authorizationLetterPic: 'AuthorizationLetterPic',
      organizationCode: 'OrganizationCode',
      ownerId: 'OwnerId',
      proxyAuthorization: 'ProxyAuthorization',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signListShrink: 'SignList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorization: 'string',
      authorizationLetterExpDate: 'string',
      authorizationLetterName: 'string',
      authorizationLetterPic: 'string',
      organizationCode: 'string',
      ownerId: 'number',
      proxyAuthorization: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsAuthorizationLetterResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 10000****
   */
  data?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsAuthorizationLetterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSmsAuthorizationLetterResponseBody;
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
      body: CreateSmsAuthorizationLetterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsSignRequest extends $dara.Model {
  /**
   * @remarks
   * Application scenarios, instructions as follows:
   * - For registered websites, enter the domain name with HTTP or HTTPS that has been registered with the MIIT.
   * 
   * - For launched apps, provide a display link from the app store with HTTP or HTTPS, ensuring the app is online.
   * 
   * - For public accounts or mini-programs, input the full name, ensuring they are online.
   * 
   * - For e-commerce platform store names, applicable only to enterprise users, provide a display link with HTTP or HTTPS for the store.
   * 
   * @example
   * http://www.aliyun.com/
   */
  applySceneContent?: string;
  authorizationLetterId?: number;
  /**
   * @remarks
   * Additional information to supplement uploaded business proof documents or screenshots, which helps reviewers understand your business details.
   * 
   * This parameter is optional; please fill it out based on your actual needs.
   */
  moreData?: string[];
  ownerId?: number;
  /**
   * @remarks
   * Approved or under-review qualification ID.
   * 
   * > - Before applying for an SMS signature, please first [Apply for Qualification](https://help.aliyun.com/zh/sms/user-guide/new-qualification?spm=a2c4g.11186623.0.0.718d187bbkpMRK).
   * > - You can view the qualification ID on the [Qualification Management](https://dysms.console.aliyun.com/domestic/text/qualification) page.
   * 
   * This parameter is required.
   * 
   * @example
   * 8563**
   */
  qualificationId?: number;
  /**
   * @remarks
   * Explanation of the SMS signature scenario, with a maximum length of 200 characters.
   * 
   * > The scenario explanation is one of the reference materials for signature review. Please provide a detailed description of the usage scenarios for your live services, along with links to verify these services such as website URLs with MIIT备案, app store display links, full names of public accounts or mini-programs, etc. For login scenarios, test account credentials are also required. A comprehensive application explanation enhances the efficiency of signature and template reviews. Refer to the **Application Scenario** column in the [Signature Source](https://help.aliyun.com/zh/sms/user-guide/signature-specifications-1?spm=a2c4g.11186623.0.i2#section-xup-k46-yi4) table for filling in SMS scenarios.
   * 
   * @example
   * SMS signature for the login scenario using verification code.
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Signature name. Please adhere to the [Signature Specifications](https://help.aliyun.com/zh/sms/user-guide/signature-specifications-1?spm=a2c4g.11186623.0.0.4f9710fder2gR7#section-0p8-qn8-mmy).
   * 
   * > - Signature names are case-insensitive; e.g., 【Aliyun Communication】 and 【aliyun communication】 are considered identical.
   * > - If your verification code signature and general signature names are the same, the system defaults to using the general signature for sending SMS messages.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  signName?: string;
  /**
   * @remarks
   * Signature source. Values:
   * 
   * - **0**: Full name or abbreviation of an enterprise or institution.
   * - **1**: Full name or abbreviation of a MIIT-registered website.
   * - **2**: Full name or abbreviation of an App.
   * - **3**: Full name or abbreviation of an official account or mini-program.
   * - **4**: Full name or abbreviation of an e-commerce platform store.
   * - **5**: Full name or abbreviation of a trademark.
   * 
   * For detailed information on signature sources, refer to [Signature Source](https://help.aliyun.com/zh/sms/user-guide/signature-specifications-1?spm=a2c4g.11186623.0.0.4f9710fder2gR7#section-xup-k46-yi4).
   * 
   * > This interface does not support applying for signatures with sources as **Test or Learning** and **Trial Use**. If you need to apply for signatures with these sources, please go to the [SMS Service Console](https://dysms.console.aliyun.com/domestic/text/sign/add/qualification).
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  signSource?: number;
  /**
   * @remarks
   * Signature type. Values:
   * 
   * - **0**: Verification Code
   * 
   * - **1**: General (Default)
   * 
   * > It is recommended to use the default value: **General**.
   * 
   * @example
   * 1
   */
  signType?: number;
  /**
   * @remarks
   * Choose whether the applied signature is for self-use or third-party use.
   * 
   * - false: Self-use (default)
   * 
   * - true: Third-party use
   * >Notice: Please select self-use qualification ID when the signature is for self-use; choose third-party use qualification ID when it\\"s for third-party use.
   * 
   * @example
   * false
   */
  thirdParty?: boolean;
  static names(): { [key: string]: string } {
    return {
      applySceneContent: 'ApplySceneContent',
      authorizationLetterId: 'AuthorizationLetterId',
      moreData: 'MoreData',
      ownerId: 'OwnerId',
      qualificationId: 'QualificationId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      signSource: 'SignSource',
      signType: 'SignType',
      thirdParty: 'ThirdParty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applySceneContent: 'string',
      authorizationLetterId: 'number',
      moreData: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      qualificationId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      signSource: 'number',
      signType: 'number',
      thirdParty: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.moreData)) {
      $dara.Model.validateArray(this.moreData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsSignShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Application scenarios, instructions as follows:
   * - For registered websites, enter the domain name with HTTP or HTTPS that has been registered with the MIIT.
   * 
   * - For launched apps, provide a display link from the app store with HTTP or HTTPS, ensuring the app is online.
   * 
   * - For public accounts or mini-programs, input the full name, ensuring they are online.
   * 
   * - For e-commerce platform store names, applicable only to enterprise users, provide a display link with HTTP or HTTPS for the store.
   * 
   * @example
   * http://www.aliyun.com/
   */
  applySceneContent?: string;
  authorizationLetterId?: number;
  /**
   * @remarks
   * Additional information to supplement uploaded business proof documents or screenshots, which helps reviewers understand your business details.
   * 
   * This parameter is optional; please fill it out based on your actual needs.
   */
  moreDataShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * Approved or under-review qualification ID.
   * 
   * > - Before applying for an SMS signature, please first [Apply for Qualification](https://help.aliyun.com/zh/sms/user-guide/new-qualification?spm=a2c4g.11186623.0.0.718d187bbkpMRK).
   * > - You can view the qualification ID on the [Qualification Management](https://dysms.console.aliyun.com/domestic/text/qualification) page.
   * 
   * This parameter is required.
   * 
   * @example
   * 8563**
   */
  qualificationId?: number;
  /**
   * @remarks
   * Explanation of the SMS signature scenario, with a maximum length of 200 characters.
   * 
   * > The scenario explanation is one of the reference materials for signature review. Please provide a detailed description of the usage scenarios for your live services, along with links to verify these services such as website URLs with MIIT备案, app store display links, full names of public accounts or mini-programs, etc. For login scenarios, test account credentials are also required. A comprehensive application explanation enhances the efficiency of signature and template reviews. Refer to the **Application Scenario** column in the [Signature Source](https://help.aliyun.com/zh/sms/user-guide/signature-specifications-1?spm=a2c4g.11186623.0.i2#section-xup-k46-yi4) table for filling in SMS scenarios.
   * 
   * @example
   * SMS signature for the login scenario using verification code.
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Signature name. Please adhere to the [Signature Specifications](https://help.aliyun.com/zh/sms/user-guide/signature-specifications-1?spm=a2c4g.11186623.0.0.4f9710fder2gR7#section-0p8-qn8-mmy).
   * 
   * > - Signature names are case-insensitive; e.g., 【Aliyun Communication】 and 【aliyun communication】 are considered identical.
   * > - If your verification code signature and general signature names are the same, the system defaults to using the general signature for sending SMS messages.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  signName?: string;
  /**
   * @remarks
   * Signature source. Values:
   * 
   * - **0**: Full name or abbreviation of an enterprise or institution.
   * - **1**: Full name or abbreviation of a MIIT-registered website.
   * - **2**: Full name or abbreviation of an App.
   * - **3**: Full name or abbreviation of an official account or mini-program.
   * - **4**: Full name or abbreviation of an e-commerce platform store.
   * - **5**: Full name or abbreviation of a trademark.
   * 
   * For detailed information on signature sources, refer to [Signature Source](https://help.aliyun.com/zh/sms/user-guide/signature-specifications-1?spm=a2c4g.11186623.0.0.4f9710fder2gR7#section-xup-k46-yi4).
   * 
   * > This interface does not support applying for signatures with sources as **Test or Learning** and **Trial Use**. If you need to apply for signatures with these sources, please go to the [SMS Service Console](https://dysms.console.aliyun.com/domestic/text/sign/add/qualification).
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  signSource?: number;
  /**
   * @remarks
   * Signature type. Values:
   * 
   * - **0**: Verification Code
   * 
   * - **1**: General (Default)
   * 
   * > It is recommended to use the default value: **General**.
   * 
   * @example
   * 1
   */
  signType?: number;
  /**
   * @remarks
   * Choose whether the applied signature is for self-use or third-party use.
   * 
   * - false: Self-use (default)
   * 
   * - true: Third-party use
   * >Notice: Please select self-use qualification ID when the signature is for self-use; choose third-party use qualification ID when it\\"s for third-party use.
   * 
   * @example
   * false
   */
  thirdParty?: boolean;
  static names(): { [key: string]: string } {
    return {
      applySceneContent: 'ApplySceneContent',
      authorizationLetterId: 'AuthorizationLetterId',
      moreDataShrink: 'MoreData',
      ownerId: 'OwnerId',
      qualificationId: 'QualificationId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      signSource: 'SignSource',
      signType: 'SignType',
      thirdParty: 'ThirdParty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applySceneContent: 'string',
      authorizationLetterId: 'number',
      moreDataShrink: 'string',
      ownerId: 'number',
      qualificationId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      signSource: 'number',
      signType: 'number',
      thirdParty: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsSignResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request status code.
   * 
   * - OK indicates a successful request.
   * - For other error codes, refer to the [Error Code List](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Work order number.
   * 
   * This parameter is used by auditors when querying the audit. You will need to provide this work order number if you require expedited review.
   * 
   * @example
   * 2004415****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of this call request, which is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting and issue localization.
   * 
   * @example
   * CCA2BCFF-2BA7-427C-90EE-AC6994748607
   */
  requestId?: string;
  /**
   * @remarks
   * Signature name.
   * 
   * @example
   * Aliyun
   */
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      orderId: 'string',
      requestId: 'string',
      signName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsSignResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSmsSignResponseBody;
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
      body: CreateSmsSignResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * If there is an applicable scenario, you can fill it in.
   * 
   * @example
   * http://www.aliyun.com/
   */
  applySceneContent?: string;
  /**
   * @remarks
   * International/Hong Kong, Macao, and Taiwan template type. When the **TemplateType** parameter is **3**, this parameter is required for international/Hong Kong, Macao, and Taiwan templates, with values:
   * - **0**: Verification code.
   * - **1**: SMS notification.
   * - **2**: Promotional message.
   * 
   * @example
   * 0
   */
  intlType?: number;
  /**
   * @remarks
   * Additional materials you can upload, such as business proof documents or screenshots, to help reviewers understand your business details.
   * 
   * This parameter is optional; please fill it in according to actual needs.
   */
  moreData?: string[];
  ownerId?: number;
  /**
   * @remarks
   * The signature name that the template needs to be associated with. The associated SMS signature must have passed the review.
   * 
   * This parameter is mandatory when the TemplateType parameter is **0**, **1**, or **2**.
   * 
   * <notice>Associating a signature can expedite the review process. Note that this associated signature is unrelated to the signature selected when sending SMS messages.</notice>
   * 
   * @example
   * Aliyun
   */
  relatedSignName?: string;
  /**
   * @remarks
   * Please describe the business scenario where you use SMS or provide an online link to the scenario, along with a complete example of the SMS (with variable contents filled), as complete information helps increase the template approval rate. Failure to follow guidelines or leaving this field blank may affect the approval of your template.
   * 
   * @example
   * Request verification code SMS.
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Template content, up to 500 characters in length.
   * 
   * Both the template content and variable content must comply with SMS specifications; otherwise, the template will fail the review. You can also view common template examples on the template application page. Using sample templates can enhance review efficiency and success rates. For variable specifications, see [TemplateContent Variable Parameter Filling Specifications](https://help.aliyun.com/zh/sms/templaterule-template-variable-parameter-filling-example).
   * 
   * This parameter is required.
   * 
   * @example
   * You are applying for mobile registration. The verification code is: ${code}. It is valid for 5 minutes!
   */
  templateContent?: string;
  /**
   * @remarks
   * Template name, up to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyunCode
   */
  templateName?: string;
  /**
   * @remarks
   * Template variable rules.
   * 
   * For filling in variable rules, refer to the [Sample Documentation](https://help.aliyun.com/zh/sms/templaterule-template-variable-parameter-filling-example).
   * 
   * @example
   * {"code":"characterWithNumber"}
   */
  templateRule?: string;
  /**
   * @remarks
   * SMS type. Values:
   * 
   * - **0**: Verification code.
   * - **1**: SMS notification.
   * - **2**: Promotional message.
   * - **3**: International/Hong Kong, Macao, and Taiwan messages.
   * 
   * > Only enterprise-verified users can apply for promotional messages and international/Hong Kong, Macao, and Taiwan messages. For details on the differences between personal and enterprise user rights, please refer to [Usage Instructions](https://help.aliyun.com/zh/sms/user-guide/usage-notes?spm=a2c4g.11186623.0.0.67447f576NJnE8).
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      applySceneContent: 'ApplySceneContent',
      intlType: 'IntlType',
      moreData: 'MoreData',
      ownerId: 'OwnerId',
      relatedSignName: 'RelatedSignName',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateRule: 'TemplateRule',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applySceneContent: 'string',
      intlType: 'number',
      moreData: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      relatedSignName: 'string',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateContent: 'string',
      templateName: 'string',
      templateRule: 'string',
      templateType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.moreData)) {
      $dara.Model.validateArray(this.moreData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * If there is an applicable scenario, you can fill it in.
   * 
   * @example
   * http://www.aliyun.com/
   */
  applySceneContent?: string;
  /**
   * @remarks
   * International/Hong Kong, Macao, and Taiwan template type. When the **TemplateType** parameter is **3**, this parameter is required for international/Hong Kong, Macao, and Taiwan templates, with values:
   * - **0**: Verification code.
   * - **1**: SMS notification.
   * - **2**: Promotional message.
   * 
   * @example
   * 0
   */
  intlType?: number;
  /**
   * @remarks
   * Additional materials you can upload, such as business proof documents or screenshots, to help reviewers understand your business details.
   * 
   * This parameter is optional; please fill it in according to actual needs.
   */
  moreDataShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * The signature name that the template needs to be associated with. The associated SMS signature must have passed the review.
   * 
   * This parameter is mandatory when the TemplateType parameter is **0**, **1**, or **2**.
   * 
   * <notice>Associating a signature can expedite the review process. Note that this associated signature is unrelated to the signature selected when sending SMS messages.</notice>
   * 
   * @example
   * Aliyun
   */
  relatedSignName?: string;
  /**
   * @remarks
   * Please describe the business scenario where you use SMS or provide an online link to the scenario, along with a complete example of the SMS (with variable contents filled), as complete information helps increase the template approval rate. Failure to follow guidelines or leaving this field blank may affect the approval of your template.
   * 
   * @example
   * Request verification code SMS.
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Template content, up to 500 characters in length.
   * 
   * Both the template content and variable content must comply with SMS specifications; otherwise, the template will fail the review. You can also view common template examples on the template application page. Using sample templates can enhance review efficiency and success rates. For variable specifications, see [TemplateContent Variable Parameter Filling Specifications](https://help.aliyun.com/zh/sms/templaterule-template-variable-parameter-filling-example).
   * 
   * This parameter is required.
   * 
   * @example
   * You are applying for mobile registration. The verification code is: ${code}. It is valid for 5 minutes!
   */
  templateContent?: string;
  /**
   * @remarks
   * Template name, up to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyunCode
   */
  templateName?: string;
  /**
   * @remarks
   * Template variable rules.
   * 
   * For filling in variable rules, refer to the [Sample Documentation](https://help.aliyun.com/zh/sms/templaterule-template-variable-parameter-filling-example).
   * 
   * @example
   * {"code":"characterWithNumber"}
   */
  templateRule?: string;
  /**
   * @remarks
   * SMS type. Values:
   * 
   * - **0**: Verification code.
   * - **1**: SMS notification.
   * - **2**: Promotional message.
   * - **3**: International/Hong Kong, Macao, and Taiwan messages.
   * 
   * > Only enterprise-verified users can apply for promotional messages and international/Hong Kong, Macao, and Taiwan messages. For details on the differences between personal and enterprise user rights, please refer to [Usage Instructions](https://help.aliyun.com/zh/sms/user-guide/usage-notes?spm=a2c4g.11186623.0.0.67447f576NJnE8).
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      applySceneContent: 'ApplySceneContent',
      intlType: 'IntlType',
      moreDataShrink: 'MoreData',
      ownerId: 'OwnerId',
      relatedSignName: 'RelatedSignName',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateRule: 'TemplateRule',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applySceneContent: 'string',
      intlType: 'number',
      moreDataShrink: 'string',
      ownerId: 'number',
      relatedSignName: 'string',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateContent: 'string',
      templateName: 'string',
      templateRule: 'string',
      templateType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request status code.
   * 
   * * OK indicates a successful request.
   * * For other error codes, refer to the **Error Codes** section of this chapter or the product\\"s [API Error Codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Work order ID.
   * 
   * This parameter is used by auditors when querying audits. If you need expedited review, you must provide this work order number.
   * 
   * @example
   * 2005020****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID generated by Alibaba Cloud for this request, which is a unique identifier that can be used for troubleshooting and issue定位.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  /**
   * @remarks
   * SMS template code.
   * 
   * After submitting the template application, you can use the SMS template code to query the template audit details via the [GetSmsTemplate](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-getsmstemplate?) API. You can also [configure delivery receipts](https://help.aliyun.com/zh/sms/developer-reference/configure-delivery-receipts-1?spm), and obtain the template audit status messages through TemplateSmsReport.
   * 
   * @example
   * SMS_10000****
   */
  templateCode?: string;
  /**
   * @remarks
   * SMS template name.
   * 
   * @example
   * aliyunCode
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      orderId: 'string',
      requestId: 'string',
      templateCode: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSmsTemplateResponseBody;
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
      body: CreateSmsTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExtCodeSignRequest extends $dara.Model {
  /**
   * @remarks
   * 扩展码A3
   * 
   * This parameter is required.
   * 
   * @example
   * 01
   */
  extCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 签名
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      extCode: 'ExtCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extCode: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExtCodeSignResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * false
   */
  data?: boolean;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExtCodeSignResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteExtCodeSignResponseBody;
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
      body: DeleteExtCodeSignResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteShortUrlRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source address. The address can be up to 1,000 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * https://www.****.com/product/sms
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteShortUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   Other values indicate that the request fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 819BE656-D2E0-4858-8B21-B2E477085AAF
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteShortUrlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteShortUrlResponseBody;
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
      body: DeleteShortUrlResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsQualificationRequest extends $dara.Model {
  /**
   * @remarks
   * 工单ID
   * 
   * This parameter is required.
   * 
   * @example
   * 2001****
   */
  orderId?: number;
  ownerId?: number;
  /**
   * @remarks
   * 资质组ID
   * 
   * This parameter is required.
   * 
   * @example
   * 10000****
   */
  qualificationGroupId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      qualificationGroupId: 'QualificationGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      ownerId: 'number',
      qualificationGroupId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsQualificationResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 25D5AFDE-8EBC-132E-8909-1FDC071DA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsQualificationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSmsQualificationResponseBody;
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
      body: DeleteSmsQualificationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsSignRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The signature.
   * 
   * > The signature must be submitted by the current Alibaba Cloud account, and has been approved.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsSignResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   Other values indicate that the request fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8D****
   */
  requestId?: string;
  /**
   * @remarks
   * The signature.
   * 
   * @example
   * Aliyun
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsSignResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSmsSignResponseBody;
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
      body: DeleteSmsSignResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsTemplateRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The code of the message template.
   * 
   * You can log on to the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm) and obtain the message template code on the **Message Templates** tab. You can also obtain the message template code by calling the [AddSmsTemplate](https://help.aliyun.com/document_detail/121208.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_152550****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CCA2BCFF-2BA7-427C-90EE-AC6994748607
   */
  requestId?: string;
  /**
   * @remarks
   * The code of the message template.
   * 
   * @example
   * SMS_20375****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSmsTemplateResponseBody;
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
      body: DeleteSmsTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardSmsDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * Card SMS sending ID, which is the BizCardId field in the response when calling SendCardSms or SendBatchCardSms.
   * 
   * @example
   * 123456^0
   */
  bizCardId?: string;
  /**
   * @remarks
   * Digital SMS sending ID, which is the BizDigitalId field in the response when calling SendCardSms or SendBatchCardSms.
   * 
   * @example
   * 12346^0
   */
  bizDigitId?: string;
  /**
   * @remarks
   * Text SMS sending ID, which is the BizSmsId field in the response when calling SendCardSms or SendBatchCardSms.
   * 
   * @example
   * 1234576^0
   */
  bizSmsId?: string;
  /**
   * @remarks
   * For paginated viewing of sending records, specify the current page number of the sending records.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  ownerId?: number;
  /**
   * @remarks
   * For paginated viewing of sending records, specify the number of card SMS records to display per page.
   * 
   * The value range is 1~50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Domestic phone number that received the SMS. Format: 11-digit phone number, for example, 1390000****.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Card SMS sending date, supports querying records from the last 30 days.
   * 
   * Format: yyyyMMdd, for example, 20240112.
   * 
   * This parameter is required.
   * 
   * @example
   * 20240112
   */
  sendDate?: string;
  static names(): { [key: string]: string } {
    return {
      bizCardId: 'BizCardId',
      bizDigitId: 'BizDigitId',
      bizSmsId: 'BizSmsId',
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
      bizCardId: 'string',
      bizDigitId: 'string',
      bizSmsId: 'string',
      currentPage: 'number',
      ownerId: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardSmsDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access denied detail; this field is returned only if the RAM check fails.
   * 
   * @example
   * 无
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Card SMS sending result
   */
  cardSendDetailDTO?: GetCardSmsDetailsResponseBodyCardSendDetailDTO;
  /**
   * @remarks
   * Request status code.
   * * OK indicates a successful request.
   * * For other error codes, see [API Error Codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Values:
   * - **true** - **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      cardSendDetailDTO: 'CardSendDetailDTO',
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      cardSendDetailDTO: GetCardSmsDetailsResponseBodyCardSendDetailDTO,
      code: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.cardSendDetailDTO && typeof (this.cardSendDetailDTO as any).validate === 'function') {
      (this.cardSendDetailDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardSmsDetailsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCardSmsDetailsResponseBody;
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
      body: GetCardSmsDetailsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardSmsLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The code type of the URLs.
   * 
   * *   **1**: group texting
   * *   **2**: personalization
   * 
   * @example
   * 2
   */
  cardCodeType?: number;
  /**
   * @remarks
   * The type of the short URLs.
   * 
   * *   1: standard short code.
   * *   2: custom short code.
   * 
   * > If the **CardLinkType** is not specified, standard short codes are generated. If you need to generate custom short codes, contact Alibaba Cloud SMS technical support.
   * 
   * @example
   * 1
   */
  cardLinkType?: number;
  /**
   * @remarks
   * The code of the message template. You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > Make sure that the message template has been approved.
   * 
   * This parameter is required.
   * 
   * @example
   * CARD_SMS_****
   */
  cardTemplateCode?: string;
  /**
   * @remarks
   * The variables of the message template.
   * 
   * @example
   * [{},{}]
   */
  cardTemplateParamJson?: string;
  /**
   * @remarks
   * The custom short code. It can contain 4 to 8 digits or letters.
   * 
   * > If the CardLinkType parameter is set to 2, the CustomShortCodeJson parameter is required.
   * 
   * @example
   * abCde
   */
  customShortCodeJson?: string;
  /**
   * @remarks
   * The original domain name. You must submit domain names for approval in advance.
   * 
   * > 
   * 
   * *   If the **CardLinkType** parameter is set to **2**, the **Domain** parameter is required.
   * 
   * *   The **Domain** parameter cannot exceed 100 characters in length. If the parameter is not specified, a default domain name is used.
   * 
   * @example
   * xxx.com
   */
  domain?: string;
  /**
   * @remarks
   * The extension field.
   * 
   * @example
   * BC20220608102511660860762****
   */
  outId?: string;
  /**
   * @remarks
   * The mobile phone numbers of recipients, custom identifiers, or system identifiers.
   * 
   * > 
   * 
   * *   A maximum of 10,000 mobile phone numbers are supported.
   * 
   * *   You can enter custom identifier. Each identifier can be a maximum of 60 characters in length.
   * 
   * *   You can apply for a maximum of 10 OPPO templates at a time.
   * 
   * @example
   * [\\"1390000****
   * \\",\\"1370000****
   * \\"]
   */
  phoneNumberJson?: string;
  /**
   * @remarks
   * The signature. You can view the template code in the **Signature** column on the **Signaturess** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > The signatures must be approved and correspond to the mobile numbers in sequence.
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"aliyun\\", \\"aliyun2\\"]
   */
  signNameJson?: string;
  static names(): { [key: string]: string } {
    return {
      cardCodeType: 'CardCodeType',
      cardLinkType: 'CardLinkType',
      cardTemplateCode: 'CardTemplateCode',
      cardTemplateParamJson: 'CardTemplateParamJson',
      customShortCodeJson: 'CustomShortCodeJson',
      domain: 'Domain',
      outId: 'OutId',
      phoneNumberJson: 'PhoneNumberJson',
      signNameJson: 'SignNameJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardCodeType: 'number',
      cardLinkType: 'number',
      cardTemplateCode: 'string',
      cardTemplateParamJson: 'string',
      customShortCodeJson: 'string',
      domain: 'string',
      outId: 'string',
      phoneNumberJson: 'string',
      signNameJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardSmsLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetCardSmsLinkResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CC89A90C-978F-46AC-B80D-54738371E7CA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
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
      data: GetCardSmsLinkResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardSmsLinkResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCardSmsLinkResponseBody;
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
      body: GetCardSmsLinkResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaResourceIdRequest extends $dara.Model {
  /**
   * @remarks
   * The extended fields.
   * 
   * > If you set the ResourceType parameter to **2**, this parameter is required.
   * 
   * @example
   * {\\"img_rate\\":\\"oneToOne\\"}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The size of the resource. Unit: bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  fileSize?: number;
  /**
   * @remarks
   * The description of the resource.
   * 
   * @example
   * remark
   */
  memo?: string;
  /**
   * @remarks
   * The address of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://alicom-fc-media/1947741454322274/alicom-fc-media/pic/202205191526575398603697152.png
   */
  ossKey?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * *   **1**: text.
   * *   **2**: image. A small image cannot exceed 100 KB in size, and a large image cannot exceed 2 MB in size. The image must be clear. Supported format: JPG, JPEG, and PNG.
   * *   **3**: audio.
   * *   **4**: video. Supported format: MP4.
   * 
   * > 
   * 
   * *   If you set the ResourceType parameter to 2, the **img_rate** required is required. Valid values:
   * 
   * *   1:1
   * 
   * *   16:9
   * 
   * *   3:1
   * 
   * *   48:65
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaResourceIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   Other values indicate that the request fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetMediaResourceIdResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F07CF237-F6E3-5F77-B91B-F9B7C5DE84AB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaResourceIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMediaResourceIdResponseBody;
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
      body: GetMediaResourceIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOSSInfoForCardTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetOSSInfoForCardTemplateResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOSSInfoForCardTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOSSInfoForCardTemplateResponseBody;
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
      body: GetOSSInfoForCardTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOSSInfoForUploadFileRequest extends $dara.Model {
  /**
   * @remarks
   * Business type, default value is **fcMediaSms**.
   * 
   * When creating signatures and templates, and uploading **additional materials**, this value is **fcMediaSms**.
   * 
   * @example
   * fcMediaSms
   */
  bizType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOSSInfoForUploadFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request status code.
   * 
   * - OK return represents a successful request.
   * - For other error codes, please refer to the [Error Code List](https://help.aliyun.com/document_detail/101346.htm).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Return result.
   */
  model?: GetOSSInfoForUploadFileResponseBodyModel;
  /**
   * @remarks
   * The ID of this call request, which is a unique identifier generated by Alibaba Cloud for the request, can be used for troubleshooting and issue定位.
   * 
   * @example
   * A90E4451-FED7-49D2-87C8-00700EDCFD0D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates success. Values:
   * 
   * - **true**
   * - **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: GetOSSInfoForUploadFileResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOSSInfoForUploadFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOSSInfoForUploadFileResponseBody;
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
      body: GetOSSInfoForUploadFileResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualificationOssInfoRequest extends $dara.Model {
  /**
   * @remarks
   * 业务，非空
   * 
   * This parameter is required.
   * 
   * @example
   * dysms
   */
  bizType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualificationOssInfoResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetQualificationOssInfoResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 25D5AFDE-8EBC-132E-8909-1FDC071DA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetQualificationOssInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualificationOssInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQualificationOssInfoResponseBody;
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
      body: GetQualificationOssInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsSignRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Signature name. Must be an SMS signature already applied for by this account.
   * 
   * - Obtain from the return parameters after calling the [CreateSmsSign](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-createsmssign?spm) API.
   * - View the signature on the [Signature Management](https://dysms.console.aliyun.com/domestic/text/sign) page.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsSignResponseBody extends $dara.Model {
  /**
   * @remarks
   * Content of application scenarios.
   * 
   * @example
   * http://www.aliyun.com/
   */
  applyScene?: string;
  /**
   * @remarks
   * Audit information.
   */
  auditInfo?: GetSmsSignResponseBodyAuditInfo;
  authorizationLetterAuditPass?: boolean;
  authorizationLetterId?: number;
  /**
   * @remarks
   * Request status code.
   * 
   * - OK indicates a successful request.
   * - For other error codes, see [API Error Codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Creation date and time of the SMS signature.
   * 
   * @example
   * 2024-06-03 10:02:34
   */
  createDate?: string;
  /**
   * @remarks
   * 更多资料信息，补充上传业务证明文件或业务截图文件列表。
   */
  fileUrlList?: string[];
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Work order number.
   * 
   * Used by reviewers when querying the review. You need to provide this work order number if you require expedited review.
   * 
   * @example
   * 20044156924
   */
  orderId?: string;
  /**
   * @remarks
   * Credential ID, the credential ID associated when applying for the signature.
   * 
   * @example
   * 2004393****
   */
  qualificationId?: number;
  registerResult?: number;
  /**
   * @remarks
   * Explanation of the SMS signature scenario, with a maximum length of 200 characters.
   * 
   * @example
   * Send verification code text message during login.
   */
  remark?: string;
  /**
   * @remarks
   * The ID of this call request, which is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting and issue localization.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  /**
   * @remarks
   * SMS signature code.
   * 
   * @example
   * SIGN_100000077042023_17174665*****_ZM2kG
   */
  signCode?: string;
  /**
   * @remarks
   * SMS signature name.
   * 
   * @example
   * Aliyun
   */
  signName?: string;
  /**
   * @remarks
   * Signature review status. Values:
   * 
   * - **0**: Under review.
   * - **1**: Approved.
   * - **2**: Review failed, please check the Reason parameter for the failure cause.
   * - **10**: Review canceled.
   * 
   * @example
   * 2
   */
  signStatus?: number;
  /**
   * @remarks
   * Signature tag indicating whether the signature is user-defined, system-provided, test, or trial. Values:
   * 
   * - 2: User-defined signature
   * - 3: System-provided signature
   * - 4: Test signature
   * - 5: Trial signature
   * 
   * @example
   * 2
   */
  signTag?: string;
  /**
   * @remarks
   * scenarios for using signatures.
   * 
   * @example
   * App.
   */
  signUsage?: string;
  /**
   * @remarks
   * Signature usage indication—self-use or third-party use.
   * 
   * - false: Self-use (default)
   * 
   * - true: Third-party use
   * 
   * @example
   * false
   */
  thirdParty?: boolean;
  static names(): { [key: string]: string } {
    return {
      applyScene: 'ApplyScene',
      auditInfo: 'AuditInfo',
      authorizationLetterAuditPass: 'AuthorizationLetterAuditPass',
      authorizationLetterId: 'AuthorizationLetterId',
      code: 'Code',
      createDate: 'CreateDate',
      fileUrlList: 'FileUrlList',
      message: 'Message',
      orderId: 'OrderId',
      qualificationId: 'QualificationId',
      registerResult: 'RegisterResult',
      remark: 'Remark',
      requestId: 'RequestId',
      signCode: 'SignCode',
      signName: 'SignName',
      signStatus: 'SignStatus',
      signTag: 'SignTag',
      signUsage: 'SignUsage',
      thirdParty: 'ThirdParty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyScene: 'string',
      auditInfo: GetSmsSignResponseBodyAuditInfo,
      authorizationLetterAuditPass: 'boolean',
      authorizationLetterId: 'number',
      code: 'string',
      createDate: 'string',
      fileUrlList: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      orderId: 'string',
      qualificationId: 'number',
      registerResult: 'number',
      remark: 'string',
      requestId: 'string',
      signCode: 'string',
      signName: 'string',
      signStatus: 'number',
      signTag: 'string',
      signUsage: 'string',
      thirdParty: 'boolean',
    };
  }

  validate() {
    if(this.auditInfo && typeof (this.auditInfo as any).validate === 'function') {
      (this.auditInfo as any).validate();
    }
    if(Array.isArray(this.fileUrlList)) {
      $dara.Model.validateArray(this.fileUrlList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsSignResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSmsSignResponseBody;
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
      body: GetSmsSignResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsTemplateRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * SMS template code.
   * 
   * - Obtain the SMS template code from the return parameters of the [CreateSmsTemplate](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-createsmstemplate?spm) API.
   * - View the SMS template code on the [Template Management](https://dysms.console.aliyun.com/domestic/text/template) page.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_20375****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Application scenario content.
   * 
   * @example
   * http://www.aliyun.com/
   */
  applyScene?: string;
  /**
   * @remarks
   * Audit information.
   */
  auditInfo?: GetSmsTemplateResponseBodyAuditInfo;
  /**
   * @remarks
   * Request status code.
   * 
   * * OK indicates a successful request.
   * * For other error codes, please refer to [API Error Codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The time when the SMS template was created.
   * 
   * @example
   * 2024-06-03 10:02:34
   */
  createDate?: string;
  /**
   * @remarks
   * File information, compatible with signatures created by the [AddSmsSign](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-addsmstemplate?spm) API.
   */
  fileUrlList?: GetSmsTemplateResponseBodyFileUrlList;
  /**
   * @remarks
   * International/Hong Kong, Macao, and Taiwan template type. When the **TemplateType** parameter is **3**, this parameter is required for international/Hong Kong, Macao, and Taiwan templates, with values:
   * - **0**: Verification code.
   * - **1**: SMS notification.
   * - **2**: Promotional SMS.
   * 
   * @example
   * 0
   */
  intlType?: number;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Additional documentation information, supplementing uploaded business proof files or operational screenshots file list.
   */
  moreDataFileUrlList?: GetSmsTemplateResponseBodyMoreDataFileUrlList;
  /**
   * @remarks
   * Work order number.
   * 
   * This parameter is used by auditors when querying the audit. You need to provide this work order number when requesting expedited review.
   * 
   * @example
   * 2003019****
   */
  orderId?: string;
  /**
   * @remarks
   * The SMS signature associated with the template when applied.
   * 
   * @example
   * 阿里云
   */
  relatedSignName?: string;
  /**
   * @remarks
   * Explanation for the SMS template application, which is one of the reference information for template review.
   * 
   * @example
   * 申请验证码模板
   */
  remark?: string;
  /**
   * @remarks
   * The ID of this call request, which is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting and issue定位.
   * 
   * @example
   * 819BE656-D2E0-4858-8B21-B2E47708****
   */
  requestId?: string;
  /**
   * @remarks
   * SMS template code.
   * 
   * @example
   * SMS_20375****
   */
  templateCode?: string;
  /**
   * @remarks
   * Content of the SMS template.
   * 
   * @example
   * 您正在申请手机注册，验证码为：${code}，5分钟内有效！
   */
  templateContent?: string;
  /**
   * @remarks
   * Name of the SMS template.
   * 
   * @example
   * 验证码
   */
  templateName?: string;
  /**
   * @remarks
   * Template review status. Return values:
   * 
   * - **0**: Under review.
   * - **1**: Approved.
   * - **2**: Not approved, with reasons for failure returned. Please refer to [Handling Suggestions for Failed SMS Reviews](https://help.aliyun.com/zh/sms/user-guide/causes-of-application-failures-and-suggestions?spm=a2c4g.11186623.0.0.41fd339f3bPSCQ), invoke the [UpdateSmsTemplate](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-updatesmstemplate?spm) API or modify the SMS template on the [Template Management](https://dysms.console.aliyun.com/domestic/text/template) page.
   * - **10**: Review canceled.
   * 
   * @example
   * 2
   */
  templateStatus?: string;
  /**
   * @remarks
   * Template identifier, indicating whether the template is user-defined or system-provided. Values:
   * 
   * - **2**: User-defined template.
   * 
   * - **3**: System-provided template.
   * 
   * @example
   * 2
   */
  templateTag?: number;
  /**
   * @remarks
   * SMS type. Values:
   * 
   * - **0**: Verification code.
   * - **1**: SMS notification.
   * - **2**: Promotional SMS.
   * - **3**: International/Hong Kong, Macao, and Taiwan messages.
   * 
   * > Only enterprise-certified users can apply for promotional SMS and international/Hong Kong, Macao, and Taiwan messages. For details on the differences between personal and enterprise user rights, please refer to [Usage Notes](https://help.aliyun.com/zh/sms/user-guide/usage-notes?spm=a2c4g.11186623.0.0.67447f576NJnE8).
   * 
   * @example
   * 0
   */
  templateType?: string;
  /**
   * @remarks
   * Template variable rules.
   * 
   * For detailed rules of template variables, refer to the [Example Document](https://help.aliyun.com/zh/sms/templaterule-template-variable-parameter-filling-example).
   * 
   * @example
   * {"code":"characterWithNumber"}
   */
  variableAttribute?: string;
  vendorAuditStatus?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      applyScene: 'ApplyScene',
      auditInfo: 'AuditInfo',
      code: 'Code',
      createDate: 'CreateDate',
      fileUrlList: 'FileUrlList',
      intlType: 'IntlType',
      message: 'Message',
      moreDataFileUrlList: 'MoreDataFileUrlList',
      orderId: 'OrderId',
      relatedSignName: 'RelatedSignName',
      remark: 'Remark',
      requestId: 'RequestId',
      templateCode: 'TemplateCode',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateStatus: 'TemplateStatus',
      templateTag: 'TemplateTag',
      templateType: 'TemplateType',
      variableAttribute: 'VariableAttribute',
      vendorAuditStatus: 'VendorAuditStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyScene: 'string',
      auditInfo: GetSmsTemplateResponseBodyAuditInfo,
      code: 'string',
      createDate: 'string',
      fileUrlList: GetSmsTemplateResponseBodyFileUrlList,
      intlType: 'number',
      message: 'string',
      moreDataFileUrlList: GetSmsTemplateResponseBodyMoreDataFileUrlList,
      orderId: 'string',
      relatedSignName: 'string',
      remark: 'string',
      requestId: 'string',
      templateCode: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateStatus: 'string',
      templateTag: 'number',
      templateType: 'string',
      variableAttribute: 'string',
      vendorAuditStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.auditInfo && typeof (this.auditInfo as any).validate === 'function') {
      (this.auditInfo as any).validate();
    }
    if(this.fileUrlList && typeof (this.fileUrlList as any).validate === 'function') {
      (this.fileUrlList as any).validate();
    }
    if(this.moreDataFileUrlList && typeof (this.moreDataFileUrlList as any).validate === 'function') {
      (this.moreDataFileUrlList as any).validate();
    }
    if(this.vendorAuditStatus) {
      $dara.Model.validateMap(this.vendorAuditStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSmsTemplateResponseBody;
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
      body: GetSmsTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The token used to query the next page.
   * 
   * @example
   * 23432453245
   */
  nextToken?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the cloud service. Set the value to **dysms**.
   * 
   * @example
   * dysms
   */
  prodCode?: string;
  /**
   * @remarks
   * The region ID. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The code of the message template. Specify either the Tag or the ResourceId parameter.
   * 
   * @example
   * SMS_23423423
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource. Set the value to TEMPLATE.
   * 
   * This parameter is required.
   * 
   * @example
   * TEMPLATE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag list. Specify either the Tag or the ResourceId parameter. You can specify a maximum of 20 tags.
   */
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

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   Other values indicate that the request fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The token used to query the next page.
   * 
   * @example
   * "23432453245"
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
   */
  requestId?: string;
  /**
   * @remarks
   * The list of tags.
   */
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

  validate() {
    if(this.tagResources && typeof (this.tagResources as any).validate === 'function') {
      (this.tagResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
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
      body: ListTagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsSignRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The scenario description of your released services. Provide the information of your services, such as a website URL, a domain name with an ICP filing, an app download URL, or the name of your WeChat official account or mini program. For sign-in scenarios, you must also provide an account and password for tests. A detailed description can improve the review efficiency of signatures and templates.
   * 
   * > The description can be up to 200 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * This is the abbreviation of our company.
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of signature files.
   * 
   * This parameter is required.
   */
  signFileList?: ModifySmsSignRequestSignFileList[];
  /**
   * @remarks
   * The signature.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  signName?: string;
  /**
   * @remarks
   * The source of the signature. Valid values:
   * 
   * *   **0**: full name or abbreviation of an enterprise or institution.
   * *   **1**: full name or abbreviation of a website with Ministry of Industry and Information Technology (MIIT) filing.
   * *   **2**: full name or abbreviation of an app.
   * *   **3**: full name or abbreviation of a WeChat official account or applet.
   * *   **4**: full name or abbreviation of an e-commerce store.
   * *   **5**: full name or abbreviation of a trademark.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  signSource?: number;
  /**
   * @remarks
   * The type of the signature. Valid values:
   * 
   * *   **0**: verification-code signature
   * *   **1**: general-purpose signature
   * 
   * @example
   * 1
   */
  signType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signFileList: 'SignFileList',
      signName: 'SignName',
      signSource: 'SignSource',
      signType: 'SignType',
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
      signType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.signFileList)) {
      $dara.Model.validateArray(this.signFileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsSignResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  /**
   * @remarks
   * The signature.
   * 
   * @example
   * Aliyun
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsSignResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySmsSignResponseBody;
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
      body: ModifySmsSignResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsTemplateRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The description of the message template. It is one of the reference information for template review. The description cannot exceed 100 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Modify the parameters of the template.
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The code of the message template.
   * 
   * You can log on to the [Short Message Service (SMS) console](https://dysms.console.aliyun.com/dysms.htm), click **Go China** or **Go Globe** in the left-side navigation pane, and then view the template code on the **Templates** tab. You can also call the [AddSmsTemplate](https://help.aliyun.com/document_detail/121208.html) operation to obtain the template code.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_15255****
   */
  templateCode?: string;
  /**
   * @remarks
   * The content of the template. The content must be 1 to 500 characters in length.
   * 
   * > When you modify a template, design the template content based on the review comments.
   * 
   * This parameter is required.
   * 
   * @example
   * You are applying for mobile registration. The verification code is: ${code}, valid for 5 minutes!
   */
  templateContent?: string;
  /**
   * @remarks
   * The name of the template. The name must be 1 to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun verification code
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the message. Valid values:
   * 
   * *   **0**: verification code
   * *   **1**: text message
   * *   **2**: promotional message
   * *   **3**: message sent to countries or regions outside the Chinese mainland
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  /**
   * @remarks
   * The code of the message template.
   * 
   * @example
   * SMS_15255****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmsTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySmsTemplateResponseBody;
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
      body: ModifySmsTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardSmsTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the message template.
   * 
   * You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > Make sure that the message template has been approved.
   * 
   * This parameter is required.
   * 
   * @example
   * CARD_SMS_4139
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardSmsTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryCardSmsTemplateResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardSmsTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCardSmsTemplateResponseBody;
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
      body: QueryCardSmsTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardSmsTemplateReportRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2020-10-11 00:00:01
   */
  endDate?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2020-10-10 00:00:01
   */
  startDate?: string;
  /**
   * @remarks
   * The array of message templates.
   * 
   * This parameter is required.
   */
  templateCodes?: string[];
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      startDate: 'StartDate',
      templateCodes: 'TemplateCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      startDate: 'string',
      templateCodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.templateCodes)) {
      $dara.Model.validateArray(this.templateCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardSmsTemplateReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryCardSmsTemplateReportResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CC89A90C-978F-46AC-B80D-54738371E7CA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
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
      data: QueryCardSmsTemplateReportResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardSmsTemplateReportResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCardSmsTemplateReportResponseBody;
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
      body: QueryCardSmsTemplateReportResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExtCodeSignRequest extends $dara.Model {
  /**
   * @remarks
   * 扩展码A3
   * 
   * @example
   * 01
   */
  extCode?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 签名
   * 
   * @example
   * 示例值示例值
   */
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      extCode: 'ExtCode',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extCode: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExtCodeSignResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: QueryExtCodeSignResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QueryExtCodeSignResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExtCodeSignResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryExtCodeSignResponseBody;
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
      body: QueryExtCodeSignResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMobilesCardSupportRequest extends $dara.Model {
  /**
   * @remarks
   * The list of mobile phone numbers.
   * 
   * This parameter is required.
   */
  mobiles?: { [key: string]: any }[];
  /**
   * @remarks
   * The code of the message template. You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > Make sure that the message template has been approved.
   * 
   * This parameter is required.
   * 
   * @example
   * CARD_SMS_0000
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      mobiles: 'Mobiles',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobiles: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      templateCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mobiles)) {
      $dara.Model.validateArray(this.mobiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMobilesCardSupportShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of mobile phone numbers.
   * 
   * This parameter is required.
   */
  mobilesShrink?: string;
  /**
   * @remarks
   * The code of the message template. You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > Make sure that the message template has been approved.
   * 
   * This parameter is required.
   * 
   * @example
   * CARD_SMS_0000
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      mobilesShrink: 'Mobiles',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobilesShrink: 'string',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMobilesCardSupportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryMobilesCardSupportResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 08C17DFE-2E10-54F4-BAFB-7180039CC217
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
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
      data: QueryMobilesCardSupportResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMobilesCardSupportResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMobilesCardSupportResponseBody;
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
      body: QueryMobilesCardSupportResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPageSmartShortUrlLogRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20181225
   */
  createDateEnd?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20181225
   */
  createDateStart?: number;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1390000****
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * http://ays.cn/****
   */
  shortUrl?: string;
  static names(): { [key: string]: string } {
    return {
      createDateEnd: 'CreateDateEnd',
      createDateStart: 'CreateDateStart',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      shortUrl: 'ShortUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDateEnd: 'number',
      createDateStart: 'number',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      shortUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPageSmartShortUrlLogResponseBody extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  code?: string;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  model?: QueryPageSmartShortUrlLogResponseBodyModel;
  /**
   * @example
   * 示例值示例值
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: QueryPageSmartShortUrlLogResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPageSmartShortUrlLogResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPageSmartShortUrlLogResponseBody;
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
      body: QueryPageSmartShortUrlLogResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery receipt. The delivery receipt ID is the value of the BizId parameter that is returned when you call the SendSms or SendBatchSms operation.
   * 
   * @example
   * 134523^435****
   */
  bizId?: string;
  /**
   * @remarks
   * The page number of the first page.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  ownerId?: number;
  /**
   * @remarks
   * The number of items displayed per page.
   * 
   * Valid values: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The mobile numbers of the recipients. Format:
   * 
   * *   If you send messages in the Chinese mainland, specify an 11-digit mobile number, for example, 1390000\\*\\*\\*\\*.
   * *   If you send messages to countries or regions outside the Chinese mainland, specify this parameter in the \\<Area code>\\<Mobile number> format. Example: 8520000\\*\\*\\*\\*.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The date when the message was sent. You can query messages that were sent within the last 30 days.
   * 
   * Format: yyyyMMdd. Example: 20181225.
   * 
   * This parameter is required.
   * 
   * @example
   * 20181228
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 819BE656-D2E0-4858-8B21-B2E477085AAF
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the message.
   */
  smsSendDetailDTOs?: QuerySendDetailsResponseBodySmsSendDetailDTOs;
  /**
   * @remarks
   * The number of sent messages.
   * 
   * @example
   * 1
   */
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

  validate() {
    if(this.smsSendDetailDTOs && typeof (this.smsSendDetailDTOs as any).validate === 'function') {
      (this.smsSendDetailDTOs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySendDetailsResponseBody;
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
      body: QuerySendDetailsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Format: yyyyMMdd. Example: 20181225.
   * 
   * This parameter is required.
   * 
   * @example
   * 20201003
   */
  endDate?: string;
  /**
   * @remarks
   * The site from where the message is sent. Valid values:
   * 
   * *   **1**: China site
   * *   **2**: international site
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  isGlobe?: number;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1 to 50**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The signature.
   * 
   * @example
   * Aliyun
   */
  signName?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Format: yyyyMMdd. Example: 20181225.
   * 
   * This parameter is required.
   * 
   * @example
   * 20201002
   */
  startDate?: string;
  /**
   * @remarks
   * The type of the message template. Valid values: Valid values:
   * 
   * *   **0**: verification code
   * *   **1**: notification
   * *   **2**: promotional message (Enterprise users only)
   * *   **3**: international purpose (Enterprise users only)
   * *   **7**: digital message
   * 
   * @example
   * 0
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      isGlobe: 'IsGlobe',
      ownerId: 'OwnerId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      startDate: 'StartDate',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      isGlobe: 'number',
      ownerId: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      startDate: 'string',
      templateType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   Other values indicate that the request fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QuerySendStatisticsResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 819BE656-D2E0-4858-8B21-B2E47708****
   */
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
      data: QuerySendStatisticsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendStatisticsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySendStatisticsResponseBody;
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
      body: QuerySendStatisticsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShortUrlRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The short URL. You can query the short URL by calling the [AddShortUrl](https://help.aliyun.com/document_detail/186774.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * http://****.cn/6y8uy7
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShortUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   Other values indicate that the request fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The details of the short URL.
   */
  data?: QueryShortUrlResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 819BE656-D2E0-4858-8B21-B2E477085AAF
   */
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShortUrlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryShortUrlResponseBody;
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
      body: QueryShortUrlResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleSmsQualificationRequest extends $dara.Model {
  /**
   * @remarks
   * 工单id
   * 
   * @example
   * 2001****
   */
  orderId?: number;
  ownerId?: number;
  /**
   * @remarks
   * 资质id
   * 
   * This parameter is required.
   * 
   * @example
   * 10000****
   */
  qualificationGroupId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      qualificationGroupId: 'QualificationGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      ownerId: 'number',
      qualificationGroupId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleSmsQualificationResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: QuerySingleSmsQualificationResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 25D5AFDE-8EBC-132E-8909-1FDC071DA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QuerySingleSmsQualificationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleSmsQualificationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySingleSmsQualificationResponseBody;
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
      body: QuerySingleSmsQualificationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsAuthorizationLetterRequest extends $dara.Model {
  /**
   * @remarks
   * 委托授权书id列表
   */
  authorizationLetterIdList?: number[];
  /**
   * @remarks
   * 授权方社会统一信用代码
   * 
   * @example
   * 9****************A
   */
  organizationCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 签名名称（支持命中签名范围查询）
   * 
   * @example
   * 示例值示例值
   */
  signName?: string;
  /**
   * @remarks
   * 授权书审核状态，INT:审核中，PASSED:审核通过
   * 
   * @example
   * PASSED
   */
  state?: string;
  /**
   * @remarks
   * 授权书可用状态，VALID可用，INVALID不可用
   * 
   * @example
   * VALID
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationLetterIdList: 'AuthorizationLetterIdList',
      organizationCode: 'OrganizationCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      state: 'State',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationLetterIdList: { 'type': 'array', 'itemType': 'number' },
      organizationCode: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      state: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorizationLetterIdList)) {
      $dara.Model.validateArray(this.authorizationLetterIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsAuthorizationLetterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 委托授权书id列表
   */
  authorizationLetterIdListShrink?: string;
  /**
   * @remarks
   * 授权方社会统一信用代码
   * 
   * @example
   * 9****************A
   */
  organizationCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 签名名称（支持命中签名范围查询）
   * 
   * @example
   * 示例值示例值
   */
  signName?: string;
  /**
   * @remarks
   * 授权书审核状态，INT:审核中，PASSED:审核通过
   * 
   * @example
   * PASSED
   */
  state?: string;
  /**
   * @remarks
   * 授权书可用状态，VALID可用，INVALID不可用
   * 
   * @example
   * VALID
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationLetterIdListShrink: 'AuthorizationLetterIdList',
      organizationCode: 'OrganizationCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      state: 'State',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationLetterIdListShrink: 'string',
      organizationCode: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      state: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsAuthorizationLetterResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: QuerySmsAuthorizationLetterResponseBodyData[];
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 25D5AFDE-8EBC-132E-8909-1FDC071D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': QuerySmsAuthorizationLetterResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsAuthorizationLetterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySmsAuthorizationLetterResponseBody;
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
      body: QuerySmsAuthorizationLetterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsQualificationRecordRequest extends $dara.Model {
  /**
   * @remarks
   * 公司名
   * 
   * @example
   * 示例值
   */
  companyName?: string;
  /**
   * @remarks
   * 法人姓名
   * 
   * @example
   * 示例值示例值
   */
  legalPersonName?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 资质组名称
   * 
   * @example
   * 示例值示例值
   */
  qualificationGroupName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 审核状态。INT:审核中FAILED:审核失败,PASSED:审核通过,NOT_FINISH:资料待补充,CANCELED:已撤回
   * 
   * @example
   * PASSED
   */
  state?: string;
  /**
   * @remarks
   * 是否自用
   * 
   * @example
   * true
   */
  useBySelf?: boolean;
  /**
   * @remarks
   * 工单ID
   * 
   * @example
   * 2001****
   */
  workOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      companyName: 'CompanyName',
      legalPersonName: 'LegalPersonName',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qualificationGroupName: 'QualificationGroupName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      state: 'State',
      useBySelf: 'UseBySelf',
      workOrderId: 'WorkOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyName: 'string',
      legalPersonName: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      qualificationGroupName: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      state: 'string',
      useBySelf: 'boolean',
      workOrderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsQualificationRecordResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: QuerySmsQualificationRecordResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 25D5AFDE-8EBC-132E-8909-1FDC071DA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QuerySmsQualificationRecordResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsQualificationRecordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySmsQualificationRecordResponseBody;
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
      body: QuerySmsQualificationRecordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsSignRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The signature.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsSignResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   Other values indicate that the request fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The date and time when the signature was created.
   * 
   * @example
   * 2019-01-08 16:44:13
   */
  createDate?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The remarks of the review. Valid values:
   * 
   * *   If the signature is in the **Approved** or **Pending Approval** state, No Remarks is returned.
   * *   If the signature is in the **Not Approved** state, the reason why the signature is rejected is returned.
   * 
   * @example
   * The document cannot verify the authenticity of the information. Please upload it again.
   */
  reason?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CC89A90C-978F-46AC-B80D-54738371E7CA
   */
  requestId?: string;
  /**
   * @remarks
   * The signature.
   * 
   * @example
   * Aliyun
   */
  signName?: string;
  /**
   * @remarks
   * The status of the signature. Valid values:
   * 
   * *   **0**: The signature is pending approval.
   * *   **1**: The signature is approved.
   * *   **2**: The signature is rejected. The Reason parameter indicates the reason why the signature is rejected.
   * *   **10**: The signature is cancelled.
   * 
   * @example
   * 1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsSignResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySmsSignResponseBody;
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
      body: QuerySmsSignResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsSignListRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of signatures per page. Valid values: **1 to 50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsSignListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The number of signatures per page. Valid values: **1 to 50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 819BE656-D2E0-4858-8B21-B2E47708****
   */
  requestId?: string;
  /**
   * @remarks
   * The queried message signatures.
   */
  smsSignList?: QuerySmsSignListResponseBodySmsSignList[];
  /**
   * @remarks
   * The total number of signatures.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      smsSignList: 'SmsSignList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      smsSignList: { 'type': 'array', 'itemType': QuerySmsSignListResponseBodySmsSignList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.smsSignList)) {
      $dara.Model.validateArray(this.smsSignList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsSignListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySmsSignListResponseBody;
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
      body: QuerySmsSignListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsTemplateRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The code of the message template.
   * 
   * You can log on to the [Short Message Service (SMS) console](https://dysms.console.aliyun.com/dysms.htm), click **Go China** or **Go Globe** in the left-side navigation pane, and then view the template code on the **Templates** tab. You can also call the [AddSmsTemplate](https://help.aliyun.com/document_detail/121208.html) operation to obtain the template code.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_1525***
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The time when the message template was created.
   * 
   * @example
   * 2019-06-04 11:42:17
   */
  createDate?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The approval remarks.
   * 
   * *   If the value of AuditStatus is **AUDIT_STATE_PASS** or **AUDIT_STATE_INIT**, the value of Reason is No Approval Remarks.
   * *   If the value of AuditStatus is **AUDIT_STATE_NOT_PASS**, the reason why the message template is rejected is returned.
   * 
   * @example
   * The document cannot verify the authenticity of the information. Please upload it again.
   */
  reason?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A974B78-02BF-4C79-ADF3-90CFBA1B55B1
   */
  requestId?: string;
  /**
   * @remarks
   * The code of the message template.
   * 
   * @example
   * SMS_16703****
   */
  templateCode?: string;
  /**
   * @remarks
   * The content of the message template.
   * 
   * @example
   * You are applying for mobile registration. The verification code is: ${code}, valid for 5 minutes!
   */
  templateContent?: string;
  /**
   * @remarks
   * The name of the message template.
   * 
   * @example
   * aliyun verification code
   */
  templateName?: string;
  /**
   * @remarks
   * The approval status of the message template. Valid values:
   * 
   * *   **0**: The message template is pending approval.
   * *   **1**: The message template is approved.
   * *   **AUDIT_STATE_NOT_PASS**: The message template is rejected. You can view the reason in the Reason response parameter.
   * *   **10**: The approval is canceled.
   * 
   * @example
   * 1
   */
  templateStatus?: number;
  /**
   * @remarks
   * The type of the message. Valid values:
   * 
   * *   **0**: verification code
   * *   **1**: notification message
   * *   **2**: promotional message
   * *   **3**: message sent to countries or regions outside the Chinese mainland
   * 
   * @example
   * 1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySmsTemplateResponseBody;
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
      body: QuerySmsTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsTemplateListRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of templates per page. Valid values: **1 to 50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsTemplateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The number of templates per page. Valid values: **1 to 50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 819BE656-D2E0-4858-8B21-B2E47708****
   */
  requestId?: string;
  /**
   * @remarks
   * The queried message templates.
   */
  smsTemplateList?: QuerySmsTemplateListResponseBodySmsTemplateList[];
  /**
   * @remarks
   * The total number of templates.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      smsTemplateList: 'SmsTemplateList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      smsTemplateList: { 'type': 'array', 'itemType': QuerySmsTemplateListResponseBodySmsTemplateList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.smsTemplateList)) {
      $dara.Model.validateArray(this.smsTemplateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsTemplateListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySmsTemplateListResponseBody;
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
      body: QuerySmsTemplateListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequiredPhoneCodeRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 137****1234
   */
  phoneNo?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneNo: 'PhoneNo',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneNo: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequiredPhoneCodeResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * -
   */
  data?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequiredPhoneCodeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RequiredPhoneCodeResponseBody;
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
      body: RequiredPhoneCodeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendBatchCardSmsRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the message template. You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > Make sure that the message template has been approved.
   * 
   * This parameter is required.
   * 
   * @example
   * CARD_SMS_3245
   */
  cardTemplateCode?: string;
  /**
   * @remarks
   * The variables of the card message template.
   * 
   * @example
   * [{\\"customurl\\":\\"http://www.alibaba.com\\",\\"dyncParams\\":\\"{\\\\\\"a\\\\\\":\\\\\\"hello\\\\\\",\\\\\\"b\\\\\\":\\\\\\"world\\\\\\"}\\"}]
   */
  cardTemplateParamJson?: string;
  /**
   * @remarks
   * The code of the digital message template that applies when the card message is rolled back. You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > Make sure that the message template has been approved.
   * 
   * @example
   * DIGITAL_SMS_234080176
   */
  digitalTemplateCode?: string;
  /**
   * @remarks
   * The variables of the digital message template.
   * 
   * @example
   * [{"a":1,"b":2},{"a":9,"b":8}]
   */
  digitalTemplateParamJson?: string;
  /**
   * @remarks
   * The rollback type. Valid values:
   * 
   * *   **SMS**: text message
   * *   **DIGITALSMS**: digital message
   * *   **NONE**: none
   * 
   * This parameter is required.
   * 
   * @example
   * SMS
   */
  fallbackType?: string;
  /**
   * @remarks
   * The ID that is reserved for the caller of the operation.
   * 
   * @example
   * 16545681783595370
   */
  outId?: string;
  /**
   * @remarks
   * The mobile numbers of the recipients.
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"1390000****\\",\\"1370000****\\"]"
   */
  phoneNumberJson?: string;
  /**
   * @remarks
   * The signature. You can view the template code in the **Signature** column on the **Signaturess** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > The signatures must be approved and correspond to the mobile numbers in sequence.
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"aliyun\\",\\"aliyuncode\\"]
   */
  signNameJson?: string;
  /**
   * @remarks
   * The code of the text message template that applies when the card message is rolled back. You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > Make sure that the message template has been approved.
   * 
   * @example
   * SMS_234251075
   */
  smsTemplateCode?: string;
  /**
   * @remarks
   * The variables of the text message template.
   * 
   * @example
   * [{"a":1,"b":2},{"a":9,"b":8}]
   */
  smsTemplateParamJson?: string;
  /**
   * @remarks
   * The extension code of the upstream message.
   * 
   * @example
   * [\\"6\\",\\"6\\"]
   */
  smsUpExtendCodeJson?: string;
  /**
   * @remarks
   * The code of the message template.
   * 
   * You can log on to the [Alibaba Cloud console](https://dysms.console.aliyun.com/dysms.htm?spm=5176.12818093.categories-n-products.ddysms.3b2816d0xml2NA#/overview), click **Go China** or **Go Globe** in the left-side navigation pane, and then view the **template code** on the **Templates** tab.
   * 
   * > You must specify a message template that is created in the SMS console and approved by Alibaba Cloud. If you send messages to countries or regions outside the Chinese mainland, use the corresponding message templates.
   * 
   * @example
   * SMS_20375****
   */
  templateCode?: string;
  /**
   * @remarks
   * The value of the variable in the message template.
   * 
   * > If you need to add line breaks to the JSON template, make sure that the format is valid. In addition, the sequence of variable values must be the same as that of the mobile numbers and signatures.
   * 
   * @example
   * [{"name":"TemplateParamJson"},{"name":"TemplateParamJson"}]
   */
  templateParamJson?: string;
  static names(): { [key: string]: string } {
    return {
      cardTemplateCode: 'CardTemplateCode',
      cardTemplateParamJson: 'CardTemplateParamJson',
      digitalTemplateCode: 'DigitalTemplateCode',
      digitalTemplateParamJson: 'DigitalTemplateParamJson',
      fallbackType: 'FallbackType',
      outId: 'OutId',
      phoneNumberJson: 'PhoneNumberJson',
      signNameJson: 'SignNameJson',
      smsTemplateCode: 'SmsTemplateCode',
      smsTemplateParamJson: 'SmsTemplateParamJson',
      smsUpExtendCodeJson: 'SmsUpExtendCodeJson',
      templateCode: 'TemplateCode',
      templateParamJson: 'TemplateParamJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardTemplateCode: 'string',
      cardTemplateParamJson: 'string',
      digitalTemplateCode: 'string',
      digitalTemplateParamJson: 'string',
      fallbackType: 'string',
      outId: 'string',
      phoneNumberJson: 'string',
      signNameJson: 'string',
      smsTemplateCode: 'string',
      smsTemplateParamJson: 'string',
      smsUpExtendCodeJson: 'string',
      templateCode: 'string',
      templateParamJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendBatchCardSmsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: SendBatchCardSmsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
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
      data: SendBatchCardSmsResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendBatchCardSmsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendBatchCardSmsResponseBody;
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
      body: SendBatchCardSmsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendBatchSmsRequest extends $dara.Model {
  /**
   * @remarks
   * The extension field of the external record. The value is a string that contains no more than 256 characters.
   * 
   * > The parameter is optional.
   * 
   * @example
   * abcdefg
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The mobile number of the recipient. Format:
   * 
   * *   Message delivery to the Chinese mainland: +/+86/0086/86 or an 11-digit mobile number without a prefix. Example: 1590000\\*\\*\\*\\*.
   * *   Message delivery to countries or regions outside the Chinese mainland: Dialing code + Mobile number. Example: 852000012\\*\\*\\*\\*.
   * 
   * > We recommend that you call the SendSms operation to send verification codes.
   * 
   * This parameter is required.
   * 
   * @example
   * ["1590000****","1350000****"]
   */
  phoneNumberJson?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The signature.
   * 
   * Log on to the Alibaba Cloud SMS console. In the left-side navigation pane, click **Go Globe** or **Go China**. You can view the signature in the **Signature** column on the **Signatures** tab.
   * 
   * > The signatures must be approved and correspond to the mobile numbers in sequence.
   * 
   * This parameter is required.
   * 
   * @example
   * ["Aliyun","Alibaba"]
   */
  signNameJson?: string;
  /**
   * @remarks
   * The extension code of the MO message. Format: JSON array.
   * 
   * > The parameter is optional.
   * 
   * @example
   * ["90999","90998"]
   */
  smsUpExtendCodeJson?: string;
  /**
   * @remarks
   * The code of the message template.
   * 
   * Log on to the Alibaba Cloud SMS console. In the left-side navigation pane, click **Go Globe** or **Go China**. You can view the message template in the **Template Code** column on the **Message Templates** tab.
   * 
   * > The message templates must be created on the Go Globe page and approved.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_15255****
   */
  templateCode?: string;
  /**
   * @remarks
   * The value of the variable in the message template.
   * 
   * > If you need to add line breaks to the JSON template, make sure that the format is valid. In addition, the sequence of variable values must be the same as that of the mobile numbers and signatures.
   * 
   * @example
   * [{"name":"TemplateParamJson"},{"name":"TemplateParamJson"}]
   */
  templateParamJson?: string;
  static names(): { [key: string]: string } {
    return {
      outId: 'OutId',
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
      outId: 'string',
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendBatchSmsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery receipt. You can use one of the following methods to query the delivery status of a message based on the ID.
   * 
   * *   Call the [QuerySendDetails](https://help.aliyun.com/document_detail/102352.html) operation.
   * *   Log on to the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview). In the left-side navigation pane, choose **Analytics** > **Delivery Report**.
   * 
   * @example
   * 9006197469364984400
   */
  bizId?: string;
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   Other values indicate that the request fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8D230E
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendBatchSmsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendBatchSmsResponseBody;
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
      body: SendBatchSmsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCardSmsRequest extends $dara.Model {
  /**
   * @remarks
   * The objects of the message template.
   * 
   * This parameter is required.
   */
  cardObjects?: SendCardSmsRequestCardObjects[];
  /**
   * @remarks
   * The code of the message template. You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > Make sure that the message template has been approved.
   * 
   * This parameter is required.
   * 
   * @example
   * CARD_SMS_70
   */
  cardTemplateCode?: string;
  /**
   * @remarks
   * The code of the digital message template that applies when the card message is rolled back. You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > Make sure that the message template has been approved.
   * 
   * @example
   * SMS_003
   */
  digitalTemplateCode?: string;
  /**
   * @remarks
   * The variables of the digital message template.
   * 
   * > If you need to add line breaks to the JSON template, make sure that the format is valid.
   * 
   * @example
   * {\\"msg\\",\\"xxxd\\"}
   */
  digitalTemplateParam?: string;
  /**
   * @remarks
   * The rollback type. Valid values:
   * 
   * *   **SMS**: text message
   * *   **DIGITALSMS**: digital message
   * *   **NONE**: none
   * 
   * This parameter is required.
   * 
   * @example
   * SMS
   */
  fallbackType?: string;
  /**
   * @remarks
   * The ID that is reserved for the caller of the operation.
   * 
   * @example
   * 38d76c9b-4a9a-4c89-afae-61fd8e0e****
   */
  outId?: string;
  /**
   * @remarks
   * The signature. You can view the template code in the **Signature** column on the **Signaturess** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > The signature must be approved.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun
   */
  signName?: string;
  /**
   * @remarks
   * The code of the text message template that applies when the card message is rolled back. You can view the template code in the **Template Code** column on the **Templates** tab of the **Go China** page in the Alibaba Cloud SMS console.
   * 
   * > Make sure that the message template has been approved. If you set the **FallbackType** parameter to **SMS**, this parameter is required.
   * 
   * @example
   * SIER_TEST_01
   */
  smsTemplateCode?: string;
  /**
   * @remarks
   * The variables of the text message template.
   * 
   * > If you need to add line breaks to the JSON template, make sure that the format is valid.
   * 
   * @example
   * {\\"uri\\":\\"Zg11tZ\\"}
   */
  smsTemplateParam?: string;
  /**
   * @remarks
   * The extension code of the upstream message. Upstream messages are messages sent to the communication service provider. Upstream messages are used to customize a service, complete an inquiry, or send a request. You are charged for sending upstream messages based on the billing standards of the service provider.
   * 
   * > If you do not need upstream messages, ignore this parameter.
   * 
   * @example
   * 1
   */
  smsUpExtendCode?: string;
  /**
   * @remarks
   * The code of the text message template.
   * 
   * Log on to the Alibaba Cloud SMS console. In the left-side navigation pane, click **Go Globe** or **Go China**. You can view the message template in the **Template Code** column on the **Message Templates** tab.
   * 
   * > The message templates must be created on the Go Globe page and approved.
   * 
   * @example
   * SMS_2322****
   */
  templateCode?: string;
  /**
   * @remarks
   * The variables of the message template. Format: JSON.
   * 
   * > If you need to add line breaks to the JSON template, make sure that the format is valid.
   * 
   * @example
   * {
   *       \\"code\\": \\"1111\\"
   * }
   */
  templateParam?: string;
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
      templateCode: 'TemplateCode',
      templateParam: 'TemplateParam',
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
      templateCode: 'string',
      templateParam: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cardObjects)) {
      $dara.Model.validateArray(this.cardObjects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCardSmsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   Other values indicate that the request fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: SendCardSmsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8D28D0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCardSmsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendCardSmsResponseBody;
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
      body: SendCardSmsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsRequest extends $dara.Model {
  /**
   * @remarks
   * The extension field.
   * 
   * > You can ignore this parameter if you do not have special requirements.
   * 
   * @example
   * abcdefgh
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The mobile numbers of the recipients. Format:
   * 
   * *   If you send messages to the Chinese mainland, specify mobile numbers that are prefixed with +, +86, 0086, or 86, or 11-digit mobile numbers without prefixes. Example: 1390000\\*\\*\\*\\*.
   * *   If you send messages to countries or regions outside the Chinese mainland, specify this parameter in the \\<Area code>\\<Mobile number> format. Example: 852000012\\*\\*\\*\\*.
   * 
   * You can send messages to multiple mobile numbers, separate the mobile numbers with commas (,). You can specify up to 1,000 mobile numbers in each request. Compared with sending messages to a single mobile number, sending messages to multiple mobile numbers requires longer response time.
   * 
   * > We recommend that you send one verification code message to a mobile number in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  phoneNumbers?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The signature.
   * 
   * You can log on to the [Short Message Service (SMS) console](https://dysms.console.aliyun.com/dysms.htm?spm=5176.12818093.categories-n-products.ddysms.3b2816d0xml2NA#/overview), click **Go China** or **Go Globe** in the left-side navigation pane, and then view the signature on the **Signatures** tab.
   * 
   * > You must specify a signature that is created in the SMS console and approved by Alibaba Cloud. For more information about SMS signature specifications, see [SMS signature specifications](https://help.aliyun.com/document_detail/108076.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  signName?: string;
  /**
   * @remarks
   * The extension code of the upstream message. Upstream messages are messages sent to the communication service provider. Upstream messages are used to customize a service, complete an inquiry, or send a request. You are charged for sending upstream messages based on the billing standards of the service provider.
   * 
   * > The extension code is automatically generated by the system when the signature is generated. You do not need to specify the extension code. You can ignore this parameter if you do not have special requirements.
   * 
   * @example
   * 90999
   */
  smsUpExtendCode?: string;
  /**
   * @remarks
   * The code of the message template.
   * 
   * You can log on to the [Short Message Service (SMS) console](https://dysms.console.aliyun.com/dysms.htm?spm=5176.12818093.categories-n-products.ddysms.3b2816d0xml2NA#/overview), click **Go China** or **Go Globe** in the left-side navigation pane, and then view the **template code** on the **Templates** tab.
   * 
   * > You must specify a message template that is created in the SMS console and approved by Alibaba Cloud. If you send messages to countries or regions outside the Chinese mainland, use the corresponding message templates.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_15305****
   */
  templateCode?: string;
  /**
   * @remarks
   * The value of the variable in the message template. You can specify multiple parameter values. Example:{"name":"Sam","number":"1390000\\*\\*\\*\\*"}.
   * 
   * > 
   * 
   * *   If line breaks are required in JSON-formatted data, they must meet the relevant requirements that are specified in the standard JSON protocol.
   * 
   * *   For more information about template variables, see [SMS template specifications](https://help.aliyun.com/document_detail/108253.html).
   * 
   * @example
   * {"code":"1111"}
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery receipt.
   * 
   * You can call the [QuerySendDetails](~~QuerySendDetails~~) operation to query the delivery status based on the receipt ID.
   * 
   * @example
   * 9006197469364984****
   */
  bizId?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendSmsResponseBody;
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
      body: SendSmsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsConversionIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the OTP message was delivered. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * *   If you leave the parameter empty, the current timestamp is specified by default.
   * *   If you specify the parameter, the timestamp must be greater than the message sending time and less than the current timestamp.
   * 
   * @example
   * 1349055900000
   */
  conversionTime?: number;
  /**
   * @remarks
   * Specifies whether customers replied to the OTP message. Valid values: true and false.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  delivered?: boolean;
  /**
   * @remarks
   * The ID of the message.
   * 
   * This parameter is required.
   * 
   * @example
   * 1008030300****
   */
  messageId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      conversionTime: 'ConversionTime',
      delivered: 'Delivered',
      messageId: 'MessageId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversionTime: 'number',
      delivered: 'boolean',
      messageId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsConversionIntlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. If OK is returned, the request is successful. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html?spm=a2c4g.101345.0.0.74326ff2J5EZyt).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8D****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsConversionIntlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SmsConversionIntlResponseBody;
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
      body: SmsConversionIntlResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmsQualificationRequest extends $dara.Model {
  /**
   * @remarks
   * 经办人身份证有效期，格式示例2023-01-01~2033-01-01
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  adminIDCardExpDate?: string;
  /**
   * @remarks
   * 经办人身份证照片国徽面
   * 
   * This parameter is required.
   * 
   * @example
   * 123456/111.png
   */
  adminIDCardFrontFace?: string;
  /**
   * @remarks
   * 经办人身份证号码
   * 
   * This parameter is required.
   * 
   * @example
   * 511391********5123
   */
  adminIDCardNo?: string;
  /**
   * @remarks
   * 经办人身份证照片人像面
   * 
   * This parameter is required.
   * 
   * @example
   * 123456/111.png
   */
  adminIDCardPic?: string;
  /**
   * @remarks
   * 管理员身份证类型。identityCard:中国居民身份证;passport:护照;homeReturnPermit:港澳居民来往内地通行证;TaiwanCompatriotPermit:台湾居民来往大陆通行证;residencePermit:港澳台居民居住证";other:其他
   * 
   * This parameter is required.
   * 
   * @example
   * identityCard
   */
  adminIDCardType?: string;
  /**
   * @remarks
   * 经办人姓名
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  adminName?: string;
  /**
   * @remarks
   * 经办人手机号码
   * 
   * This parameter is required.
   * 
   * @example
   * 137****1234
   */
  adminPhoneNo?: string;
  /**
   * @remarks
   * 企业营业证件信息，非大客户必填
   */
  businessLicensePics?: SubmitSmsQualificationRequestBusinessLicensePics[];
  /**
   * @remarks
   * 企业营业时间开始和结束字符串，格式示例2023-01-01~2033-01-01
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  bussinessLicenseExpDate?: string;
  /**
   * @remarks
   * 手机号验证码
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  certifyCode?: string;
  /**
   * @remarks
   * 公司名称
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  companyName?: string;
  /**
   * @remarks
   * 企业类型, COMPANY:公司;NON_PROFIT_ORGANIZATION:政府或者事业单位
   * 
   * This parameter is required.
   * 
   * @example
   * COMPANY
   */
  companyType?: string;
  /**
   * @remarks
   * 法人身份证号码
   * 
   * This parameter is required.
   * 
   * @example
   * 511391********5123
   */
  legalPersonIDCardNo?: string;
  /**
   * @remarks
   * 法人身份证类型。identityCard:中国居民身份证;passport:护照;homeReturnPermit:港澳居民来往内地通行证;TaiwanCompatriotPermit:台湾居民来往大陆通行证;residencePermit:港澳台居民居住证";other:其他
   * 
   * This parameter is required.
   * 
   * @example
   * identityCard
   */
  legalPersonIDCardType?: string;
  /**
   * @remarks
   * 法人身份证照片人像面
   * 
   * @example
   * 123456/111.png
   */
  legalPersonIdCardBackSide?: string;
  /**
   * @remarks
   * 法人身份证有效期
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  legalPersonIdCardEffTime?: string;
  /**
   * @remarks
   * 法人身份证照片国徽面
   * 
   * @example
   * 123456/111.png
   */
  legalPersonIdCardFrontSide?: string;
  /**
   * @remarks
   * 法人姓名
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  legalPersonName?: string;
  /**
   * @remarks
   * 社会统一信用代码
   * 
   * This parameter is required.
   * 
   * @example
   * 910X********0012
   */
  organizationCode?: string;
  /**
   * @remarks
   * 更多资料
   */
  otherFiles?: SubmitSmsQualificationRequestOtherFiles[];
  ownerId?: number;
  /**
   * @remarks
   * 资质名称,名称不能重复
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  qualificationName?: string;
  /**
   * @remarks
   * 备注
   * 
   * @example
   * 示例值示例值
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 资质是自用还是他用，true：自用，false：他用
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  useBySelf?: boolean;
  /**
   * @remarks
   * 是否同意与其他业务线共享
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  whetherShare?: boolean;
  static names(): { [key: string]: string } {
    return {
      adminIDCardExpDate: 'AdminIDCardExpDate',
      adminIDCardFrontFace: 'AdminIDCardFrontFace',
      adminIDCardNo: 'AdminIDCardNo',
      adminIDCardPic: 'AdminIDCardPic',
      adminIDCardType: 'AdminIDCardType',
      adminName: 'AdminName',
      adminPhoneNo: 'AdminPhoneNo',
      businessLicensePics: 'BusinessLicensePics',
      bussinessLicenseExpDate: 'BussinessLicenseExpDate',
      certifyCode: 'CertifyCode',
      companyName: 'CompanyName',
      companyType: 'CompanyType',
      legalPersonIDCardNo: 'LegalPersonIDCardNo',
      legalPersonIDCardType: 'LegalPersonIDCardType',
      legalPersonIdCardBackSide: 'LegalPersonIdCardBackSide',
      legalPersonIdCardEffTime: 'LegalPersonIdCardEffTime',
      legalPersonIdCardFrontSide: 'LegalPersonIdCardFrontSide',
      legalPersonName: 'LegalPersonName',
      organizationCode: 'OrganizationCode',
      otherFiles: 'OtherFiles',
      ownerId: 'OwnerId',
      qualificationName: 'QualificationName',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      useBySelf: 'UseBySelf',
      whetherShare: 'WhetherShare',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminIDCardExpDate: 'string',
      adminIDCardFrontFace: 'string',
      adminIDCardNo: 'string',
      adminIDCardPic: 'string',
      adminIDCardType: 'string',
      adminName: 'string',
      adminPhoneNo: 'string',
      businessLicensePics: { 'type': 'array', 'itemType': SubmitSmsQualificationRequestBusinessLicensePics },
      bussinessLicenseExpDate: 'string',
      certifyCode: 'string',
      companyName: 'string',
      companyType: 'string',
      legalPersonIDCardNo: 'string',
      legalPersonIDCardType: 'string',
      legalPersonIdCardBackSide: 'string',
      legalPersonIdCardEffTime: 'string',
      legalPersonIdCardFrontSide: 'string',
      legalPersonName: 'string',
      organizationCode: 'string',
      otherFiles: { 'type': 'array', 'itemType': SubmitSmsQualificationRequestOtherFiles },
      ownerId: 'number',
      qualificationName: 'string',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      useBySelf: 'boolean',
      whetherShare: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.businessLicensePics)) {
      $dara.Model.validateArray(this.businessLicensePics);
    }
    if(Array.isArray(this.otherFiles)) {
      $dara.Model.validateArray(this.otherFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmsQualificationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 经办人身份证有效期，格式示例2023-01-01~2033-01-01
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  adminIDCardExpDate?: string;
  /**
   * @remarks
   * 经办人身份证照片国徽面
   * 
   * This parameter is required.
   * 
   * @example
   * 123456/111.png
   */
  adminIDCardFrontFace?: string;
  /**
   * @remarks
   * 经办人身份证号码
   * 
   * This parameter is required.
   * 
   * @example
   * 511391********5123
   */
  adminIDCardNo?: string;
  /**
   * @remarks
   * 经办人身份证照片人像面
   * 
   * This parameter is required.
   * 
   * @example
   * 123456/111.png
   */
  adminIDCardPic?: string;
  /**
   * @remarks
   * 管理员身份证类型。identityCard:中国居民身份证;passport:护照;homeReturnPermit:港澳居民来往内地通行证;TaiwanCompatriotPermit:台湾居民来往大陆通行证;residencePermit:港澳台居民居住证";other:其他
   * 
   * This parameter is required.
   * 
   * @example
   * identityCard
   */
  adminIDCardType?: string;
  /**
   * @remarks
   * 经办人姓名
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  adminName?: string;
  /**
   * @remarks
   * 经办人手机号码
   * 
   * This parameter is required.
   * 
   * @example
   * 137****1234
   */
  adminPhoneNo?: string;
  /**
   * @remarks
   * 企业营业证件信息，非大客户必填
   */
  businessLicensePicsShrink?: string;
  /**
   * @remarks
   * 企业营业时间开始和结束字符串，格式示例2023-01-01~2033-01-01
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  bussinessLicenseExpDate?: string;
  /**
   * @remarks
   * 手机号验证码
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  certifyCode?: string;
  /**
   * @remarks
   * 公司名称
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  companyName?: string;
  /**
   * @remarks
   * 企业类型, COMPANY:公司;NON_PROFIT_ORGANIZATION:政府或者事业单位
   * 
   * This parameter is required.
   * 
   * @example
   * COMPANY
   */
  companyType?: string;
  /**
   * @remarks
   * 法人身份证号码
   * 
   * This parameter is required.
   * 
   * @example
   * 511391********5123
   */
  legalPersonIDCardNo?: string;
  /**
   * @remarks
   * 法人身份证类型。identityCard:中国居民身份证;passport:护照;homeReturnPermit:港澳居民来往内地通行证;TaiwanCompatriotPermit:台湾居民来往大陆通行证;residencePermit:港澳台居民居住证";other:其他
   * 
   * This parameter is required.
   * 
   * @example
   * identityCard
   */
  legalPersonIDCardType?: string;
  /**
   * @remarks
   * 法人身份证照片人像面
   * 
   * @example
   * 123456/111.png
   */
  legalPersonIdCardBackSide?: string;
  /**
   * @remarks
   * 法人身份证有效期
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  legalPersonIdCardEffTime?: string;
  /**
   * @remarks
   * 法人身份证照片国徽面
   * 
   * @example
   * 123456/111.png
   */
  legalPersonIdCardFrontSide?: string;
  /**
   * @remarks
   * 法人姓名
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  legalPersonName?: string;
  /**
   * @remarks
   * 社会统一信用代码
   * 
   * This parameter is required.
   * 
   * @example
   * 910X********0012
   */
  organizationCode?: string;
  /**
   * @remarks
   * 更多资料
   */
  otherFilesShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * 资质名称,名称不能重复
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  qualificationName?: string;
  /**
   * @remarks
   * 备注
   * 
   * @example
   * 示例值示例值
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 资质是自用还是他用，true：自用，false：他用
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  useBySelf?: boolean;
  /**
   * @remarks
   * 是否同意与其他业务线共享
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  whetherShare?: boolean;
  static names(): { [key: string]: string } {
    return {
      adminIDCardExpDate: 'AdminIDCardExpDate',
      adminIDCardFrontFace: 'AdminIDCardFrontFace',
      adminIDCardNo: 'AdminIDCardNo',
      adminIDCardPic: 'AdminIDCardPic',
      adminIDCardType: 'AdminIDCardType',
      adminName: 'AdminName',
      adminPhoneNo: 'AdminPhoneNo',
      businessLicensePicsShrink: 'BusinessLicensePics',
      bussinessLicenseExpDate: 'BussinessLicenseExpDate',
      certifyCode: 'CertifyCode',
      companyName: 'CompanyName',
      companyType: 'CompanyType',
      legalPersonIDCardNo: 'LegalPersonIDCardNo',
      legalPersonIDCardType: 'LegalPersonIDCardType',
      legalPersonIdCardBackSide: 'LegalPersonIdCardBackSide',
      legalPersonIdCardEffTime: 'LegalPersonIdCardEffTime',
      legalPersonIdCardFrontSide: 'LegalPersonIdCardFrontSide',
      legalPersonName: 'LegalPersonName',
      organizationCode: 'OrganizationCode',
      otherFilesShrink: 'OtherFiles',
      ownerId: 'OwnerId',
      qualificationName: 'QualificationName',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      useBySelf: 'UseBySelf',
      whetherShare: 'WhetherShare',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminIDCardExpDate: 'string',
      adminIDCardFrontFace: 'string',
      adminIDCardNo: 'string',
      adminIDCardPic: 'string',
      adminIDCardType: 'string',
      adminName: 'string',
      adminPhoneNo: 'string',
      businessLicensePicsShrink: 'string',
      bussinessLicenseExpDate: 'string',
      certifyCode: 'string',
      companyName: 'string',
      companyType: 'string',
      legalPersonIDCardNo: 'string',
      legalPersonIDCardType: 'string',
      legalPersonIdCardBackSide: 'string',
      legalPersonIdCardEffTime: 'string',
      legalPersonIdCardFrontSide: 'string',
      legalPersonName: 'string',
      organizationCode: 'string',
      otherFilesShrink: 'string',
      ownerId: 'number',
      qualificationName: 'string',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      useBySelf: 'boolean',
      whetherShare: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmsQualificationResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 1000****
   */
  data?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 25D5AFDE-8EBC-132E-8909-1FDC071DA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmsQualificationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitSmsQualificationResponseBody;
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
      body: SubmitSmsQualificationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The name of the cloud service. Set the value to **dysms**.
   * 
   * @example
   * dysms
   */
  prodCode?: string;
  /**
   * @remarks
   * The region ID. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The code of the message template.
   * 
   * @example
   * SMS_23423423
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource. Set the value to **TEMPLATE**.
   * 
   * This parameter is required.
   * 
   * @example
   * TEMPLATE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag.
   * 
   * This parameter is required.
   */
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

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   Other values indicate that the request fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether tags were attached. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
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
      body: TagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all tags from the message template. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  all?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The name of the cloud service. Set the value to **dysms**.
   * 
   * @example
   * dysms
   */
  prodCode?: string;
  /**
   * @remarks
   * The region. Set the value to cn-hangzhou.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The array of message template codes. You can specify 1 to 20 message templates.
   * 
   * @example
   * SMS_23423423
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource. Set the value to TEMPLATE.
   * 
   * This parameter is required.
   * 
   * @example
   * TEMPLATE
   */
  resourceType?: string;
  /**
   * @remarks
   * The array of tag keys. You can specify 1 to 20 tag keys.
   * 
   * @example
   * TestKey
   */
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

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
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
      body: UntagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExtCodeSignRequest extends $dara.Model {
  /**
   * @remarks
   * 要修改的扩展码A3
   * 
   * This parameter is required.
   * 
   * @example
   * 01
   */
  existExtCode?: string;
  /**
   * @remarks
   * 修改后的扩展码A3
   * 
   * This parameter is required.
   * 
   * @example
   * 02
   */
  newExtCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 签名
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      existExtCode: 'ExistExtCode',
      newExtCode: 'NewExtCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existExtCode: 'string',
      newExtCode: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExtCodeSignResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * false
   */
  data?: boolean;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExtCodeSignResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateExtCodeSignResponseBody;
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
      body: UpdateExtCodeSignResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmsQualificationRequest extends $dara.Model {
  /**
   * @remarks
   * 经办人身份证有效期，格式示例2023-01-01~2033-01-01
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  adminIDCardExpDate?: string;
  /**
   * @remarks
   * 经办人身份证照片国徽面
   * 
   * @example
   * 123456/111.png
   */
  adminIDCardFrontFace?: string;
  /**
   * @remarks
   * 经办人身份证号码
   * 
   * @example
   * 511391********5123
   */
  adminIDCardNo?: string;
  /**
   * @remarks
   * 经办人身份证照片人像面
   * 
   * @example
   * 123456/111.png
   */
  adminIDCardPic?: string;
  /**
   * @remarks
   * 管理员身份证类型。identityCard:中国居民身份证;passport:护照;homeReturnPermit:港澳居民来往内地通行证;TaiwanCompatriotPermit:台湾居民来往大陆通行证;residencePermit:港澳台居民居住证";other:其他
   * 
   * @example
   * identityCard
   */
  adminIDCardType?: string;
  /**
   * @remarks
   * 经办人姓名
   * 
   * @example
   * 示例值
   */
  adminName?: string;
  /**
   * @remarks
   * 经办人手机号码
   * 
   * This parameter is required.
   * 
   * @example
   * 137********
   */
  adminPhoneNo?: string;
  /**
   * @remarks
   * 企业证件信息
   */
  businessLicensePics?: UpdateSmsQualificationRequestBusinessLicensePics[];
  /**
   * @remarks
   * 企业营业时间开始和结束字符串，格式示例2023-01-01~2033-01-01
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  bussinessLicenseExpDate?: string;
  /**
   * @remarks
   * 手机号验证码
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  certifyCode?: string;
  /**
   * @remarks
   * 公司名称
   * 
   * @example
   * 示例值示例值示例值
   */
  companyName?: string;
  /**
   * @remarks
   * 法人身份证号码
   * 
   * @example
   * 511391********5123
   */
  legalPersonIDCardNo?: string;
  /**
   * @remarks
   * 法人身份证类型。identityCard:中国居民身份证;passport:护照;homeReturnPermit:港澳居民来往内地通行证;TaiwanCompatriotPermit:台湾居民来往大陆通行证;residencePermit:港澳台居民居住证";other:其他
   * 
   * @example
   * identityCard
   */
  legalPersonIDCardType?: string;
  /**
   * @remarks
   * 法人身份证照片人像面
   * 
   * @example
   * 123456/111.png
   */
  legalPersonIdCardBackSide?: string;
  /**
   * @remarks
   * 法人身份证有效期，格式示例2023-01-01~2033-01-01
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  legalPersonIdCardEffTime?: string;
  /**
   * @remarks
   * 法人身份照片证国徽面
   * 
   * @example
   * 123456/111.png
   */
  legalPersonIdCardFrontSide?: string;
  /**
   * @remarks
   * 法人姓名
   * 
   * @example
   * 示例值示例值
   */
  legalPersonName?: string;
  /**
   * @remarks
   * 工单ID
   * 
   * This parameter is required.
   * 
   * @example
   * 2001*****
   */
  orderId?: number;
  /**
   * @remarks
   * 更多资料
   */
  otherFiles?: UpdateSmsQualificationRequestOtherFiles[];
  ownerId?: number;
  /**
   * @remarks
   * 资质组ID
   * 
   * This parameter is required.
   * 
   * @example
   * 10000****
   */
  qualificationGroupId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      adminIDCardExpDate: 'AdminIDCardExpDate',
      adminIDCardFrontFace: 'AdminIDCardFrontFace',
      adminIDCardNo: 'AdminIDCardNo',
      adminIDCardPic: 'AdminIDCardPic',
      adminIDCardType: 'AdminIDCardType',
      adminName: 'AdminName',
      adminPhoneNo: 'AdminPhoneNo',
      businessLicensePics: 'BusinessLicensePics',
      bussinessLicenseExpDate: 'BussinessLicenseExpDate',
      certifyCode: 'CertifyCode',
      companyName: 'CompanyName',
      legalPersonIDCardNo: 'LegalPersonIDCardNo',
      legalPersonIDCardType: 'LegalPersonIDCardType',
      legalPersonIdCardBackSide: 'LegalPersonIdCardBackSide',
      legalPersonIdCardEffTime: 'LegalPersonIdCardEffTime',
      legalPersonIdCardFrontSide: 'LegalPersonIdCardFrontSide',
      legalPersonName: 'LegalPersonName',
      orderId: 'OrderId',
      otherFiles: 'OtherFiles',
      ownerId: 'OwnerId',
      qualificationGroupId: 'QualificationGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminIDCardExpDate: 'string',
      adminIDCardFrontFace: 'string',
      adminIDCardNo: 'string',
      adminIDCardPic: 'string',
      adminIDCardType: 'string',
      adminName: 'string',
      adminPhoneNo: 'string',
      businessLicensePics: { 'type': 'array', 'itemType': UpdateSmsQualificationRequestBusinessLicensePics },
      bussinessLicenseExpDate: 'string',
      certifyCode: 'string',
      companyName: 'string',
      legalPersonIDCardNo: 'string',
      legalPersonIDCardType: 'string',
      legalPersonIdCardBackSide: 'string',
      legalPersonIdCardEffTime: 'string',
      legalPersonIdCardFrontSide: 'string',
      legalPersonName: 'string',
      orderId: 'number',
      otherFiles: { 'type': 'array', 'itemType': UpdateSmsQualificationRequestOtherFiles },
      ownerId: 'number',
      qualificationGroupId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.businessLicensePics)) {
      $dara.Model.validateArray(this.businessLicensePics);
    }
    if(Array.isArray(this.otherFiles)) {
      $dara.Model.validateArray(this.otherFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmsQualificationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 经办人身份证有效期，格式示例2023-01-01~2033-01-01
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  adminIDCardExpDate?: string;
  /**
   * @remarks
   * 经办人身份证照片国徽面
   * 
   * @example
   * 123456/111.png
   */
  adminIDCardFrontFace?: string;
  /**
   * @remarks
   * 经办人身份证号码
   * 
   * @example
   * 511391********5123
   */
  adminIDCardNo?: string;
  /**
   * @remarks
   * 经办人身份证照片人像面
   * 
   * @example
   * 123456/111.png
   */
  adminIDCardPic?: string;
  /**
   * @remarks
   * 管理员身份证类型。identityCard:中国居民身份证;passport:护照;homeReturnPermit:港澳居民来往内地通行证;TaiwanCompatriotPermit:台湾居民来往大陆通行证;residencePermit:港澳台居民居住证";other:其他
   * 
   * @example
   * identityCard
   */
  adminIDCardType?: string;
  /**
   * @remarks
   * 经办人姓名
   * 
   * @example
   * 示例值
   */
  adminName?: string;
  /**
   * @remarks
   * 经办人手机号码
   * 
   * This parameter is required.
   * 
   * @example
   * 137********
   */
  adminPhoneNo?: string;
  /**
   * @remarks
   * 企业证件信息
   */
  businessLicensePicsShrink?: string;
  /**
   * @remarks
   * 企业营业时间开始和结束字符串，格式示例2023-01-01~2033-01-01
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  bussinessLicenseExpDate?: string;
  /**
   * @remarks
   * 手机号验证码
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  certifyCode?: string;
  /**
   * @remarks
   * 公司名称
   * 
   * @example
   * 示例值示例值示例值
   */
  companyName?: string;
  /**
   * @remarks
   * 法人身份证号码
   * 
   * @example
   * 511391********5123
   */
  legalPersonIDCardNo?: string;
  /**
   * @remarks
   * 法人身份证类型。identityCard:中国居民身份证;passport:护照;homeReturnPermit:港澳居民来往内地通行证;TaiwanCompatriotPermit:台湾居民来往大陆通行证;residencePermit:港澳台居民居住证";other:其他
   * 
   * @example
   * identityCard
   */
  legalPersonIDCardType?: string;
  /**
   * @remarks
   * 法人身份证照片人像面
   * 
   * @example
   * 123456/111.png
   */
  legalPersonIdCardBackSide?: string;
  /**
   * @remarks
   * 法人身份证有效期，格式示例2023-01-01~2033-01-01
   * 
   * @example
   * 2023-01-01~2033-01-01
   */
  legalPersonIdCardEffTime?: string;
  /**
   * @remarks
   * 法人身份照片证国徽面
   * 
   * @example
   * 123456/111.png
   */
  legalPersonIdCardFrontSide?: string;
  /**
   * @remarks
   * 法人姓名
   * 
   * @example
   * 示例值示例值
   */
  legalPersonName?: string;
  /**
   * @remarks
   * 工单ID
   * 
   * This parameter is required.
   * 
   * @example
   * 2001*****
   */
  orderId?: number;
  /**
   * @remarks
   * 更多资料
   */
  otherFilesShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * 资质组ID
   * 
   * This parameter is required.
   * 
   * @example
   * 10000****
   */
  qualificationGroupId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      adminIDCardExpDate: 'AdminIDCardExpDate',
      adminIDCardFrontFace: 'AdminIDCardFrontFace',
      adminIDCardNo: 'AdminIDCardNo',
      adminIDCardPic: 'AdminIDCardPic',
      adminIDCardType: 'AdminIDCardType',
      adminName: 'AdminName',
      adminPhoneNo: 'AdminPhoneNo',
      businessLicensePicsShrink: 'BusinessLicensePics',
      bussinessLicenseExpDate: 'BussinessLicenseExpDate',
      certifyCode: 'CertifyCode',
      companyName: 'CompanyName',
      legalPersonIDCardNo: 'LegalPersonIDCardNo',
      legalPersonIDCardType: 'LegalPersonIDCardType',
      legalPersonIdCardBackSide: 'LegalPersonIdCardBackSide',
      legalPersonIdCardEffTime: 'LegalPersonIdCardEffTime',
      legalPersonIdCardFrontSide: 'LegalPersonIdCardFrontSide',
      legalPersonName: 'LegalPersonName',
      orderId: 'OrderId',
      otherFilesShrink: 'OtherFiles',
      ownerId: 'OwnerId',
      qualificationGroupId: 'QualificationGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminIDCardExpDate: 'string',
      adminIDCardFrontFace: 'string',
      adminIDCardNo: 'string',
      adminIDCardPic: 'string',
      adminIDCardType: 'string',
      adminName: 'string',
      adminPhoneNo: 'string',
      businessLicensePicsShrink: 'string',
      bussinessLicenseExpDate: 'string',
      certifyCode: 'string',
      companyName: 'string',
      legalPersonIDCardNo: 'string',
      legalPersonIDCardType: 'string',
      legalPersonIdCardBackSide: 'string',
      legalPersonIdCardEffTime: 'string',
      legalPersonIdCardFrontSide: 'string',
      legalPersonName: 'string',
      orderId: 'number',
      otherFilesShrink: 'string',
      ownerId: 'number',
      qualificationGroupId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmsQualificationResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 10000****
   */
  data?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 25D5AFDE-8EBC-132E-8909-1FDC071DA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmsQualificationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSmsQualificationResponseBody;
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
      body: UpdateSmsQualificationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmsSignRequest extends $dara.Model {
  /**
   * @remarks
   * Application scenarios, instructions as follows:
   * - For registered websites, please enter the domain name registered with MIIT, including HTTP or HTTPS.
   * - For launched apps, provide the display link from the app store with HTTP or HTTPS, ensuring the app is online.
   * - For public accounts or mini-programs, fill in the full name, ensuring they are online.
   * - For e-commerce platform store names (for enterprise users only), provide the display link with HTTP or HTTPS.
   * 
   * @example
   * http://www.aliyun.com/
   */
  applySceneContent?: string;
  authorizationLetterId?: number;
  /**
   * @remarks
   * Additional materials, such as uploading business proof documents or screenshots of business operations, to help reviewers understand your business details.
   */
  moreData?: string[];
  ownerId?: number;
  /**
   * @remarks
   * Approved or under-review qualification ID.
   * 
   * > - Before applying for an SMS signature, please first [apply for qualifications](https://help.aliyun.com/zh/sms/user-guide/new-qualification?spm=a2c4g.11186623.0.0.718d187bbkpMRK).
   * > - You can view the qualification ID on the [Qualification Management](https://dysms.console.aliyun.com/domestic/text/qualification) page.
   * 
   * This parameter is required.
   * 
   * @example
   * 8563**
   */
  qualificationId?: number;
  /**
   * @remarks
   * Explanation of the SMS signature scenario, with a maximum length of 200 characters.
   * 
   * > The scenario explanation is one of the reference information for signature review. Please provide a detailed description of the usage scenarios of the launched business, along with verifiable information such as website links, registered domain addresses, app store download links, full names of public accounts or mini-programs, etc. For login scenarios, test account credentials are also required. A well-informed application explanation will enhance the efficiency of signature and template reviews. Refer to the **Application Scenarios** column in the [Signature Source](https://help.aliyun.com/zh/sms/user-guide/signature-specifications-1?spm=a2c4g.11186623.0.i2#section-xup-k46-yi4) table for filling in SMS scenarios.
   * 
   * @example
   * 登录场景申请验证码
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Signature not yet approved.
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里云验证码
   */
  signName?: string;
  /**
   * @remarks
   * Source of the signature. Values:
   * 
   * - **0**: Full name or abbreviation of enterprises and institutions.
   * - **1**: Full name or abbreviation of MIIT-registered websites.
   * - **2**: Full name or abbreviation of app applications.
   * - **3**: Full name or abbreviation of public accounts or mini-programs.
   * - **4**: Full name or abbreviation of e-commerce platform store names.
   * - **5**: Full name or abbreviation of trademarks.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  signSource?: number;
  /**
   * @remarks
   * Signature type. It is recommended to use the default value.
   * 
   * - **0**: Verification code
   * - **1**: General (default)
   * 
   * @example
   * 1
   */
  signType?: number;
  /**
   * @remarks
   * Whether the signature is for self-use or others.
   * 
   * - false: Self-use
   * - true: Others
   * >Notice: When the signature is for self-use, select the self-use qualification ID; when it\\"s for others, choose the others\\" qualification ID.
   * 
   * @example
   * false
   */
  thirdParty?: boolean;
  static names(): { [key: string]: string } {
    return {
      applySceneContent: 'ApplySceneContent',
      authorizationLetterId: 'AuthorizationLetterId',
      moreData: 'MoreData',
      ownerId: 'OwnerId',
      qualificationId: 'QualificationId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      signSource: 'SignSource',
      signType: 'SignType',
      thirdParty: 'ThirdParty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applySceneContent: 'string',
      authorizationLetterId: 'number',
      moreData: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      qualificationId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      signSource: 'number',
      signType: 'number',
      thirdParty: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.moreData)) {
      $dara.Model.validateArray(this.moreData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmsSignShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Application scenarios, instructions as follows:
   * - For registered websites, please enter the domain name registered with MIIT, including HTTP or HTTPS.
   * - For launched apps, provide the display link from the app store with HTTP or HTTPS, ensuring the app is online.
   * - For public accounts or mini-programs, fill in the full name, ensuring they are online.
   * - For e-commerce platform store names (for enterprise users only), provide the display link with HTTP or HTTPS.
   * 
   * @example
   * http://www.aliyun.com/
   */
  applySceneContent?: string;
  authorizationLetterId?: number;
  /**
   * @remarks
   * Additional materials, such as uploading business proof documents or screenshots of business operations, to help reviewers understand your business details.
   */
  moreDataShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * Approved or under-review qualification ID.
   * 
   * > - Before applying for an SMS signature, please first [apply for qualifications](https://help.aliyun.com/zh/sms/user-guide/new-qualification?spm=a2c4g.11186623.0.0.718d187bbkpMRK).
   * > - You can view the qualification ID on the [Qualification Management](https://dysms.console.aliyun.com/domestic/text/qualification) page.
   * 
   * This parameter is required.
   * 
   * @example
   * 8563**
   */
  qualificationId?: number;
  /**
   * @remarks
   * Explanation of the SMS signature scenario, with a maximum length of 200 characters.
   * 
   * > The scenario explanation is one of the reference information for signature review. Please provide a detailed description of the usage scenarios of the launched business, along with verifiable information such as website links, registered domain addresses, app store download links, full names of public accounts or mini-programs, etc. For login scenarios, test account credentials are also required. A well-informed application explanation will enhance the efficiency of signature and template reviews. Refer to the **Application Scenarios** column in the [Signature Source](https://help.aliyun.com/zh/sms/user-guide/signature-specifications-1?spm=a2c4g.11186623.0.i2#section-xup-k46-yi4) table for filling in SMS scenarios.
   * 
   * @example
   * 登录场景申请验证码
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Signature not yet approved.
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里云验证码
   */
  signName?: string;
  /**
   * @remarks
   * Source of the signature. Values:
   * 
   * - **0**: Full name or abbreviation of enterprises and institutions.
   * - **1**: Full name or abbreviation of MIIT-registered websites.
   * - **2**: Full name or abbreviation of app applications.
   * - **3**: Full name or abbreviation of public accounts or mini-programs.
   * - **4**: Full name or abbreviation of e-commerce platform store names.
   * - **5**: Full name or abbreviation of trademarks.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  signSource?: number;
  /**
   * @remarks
   * Signature type. It is recommended to use the default value.
   * 
   * - **0**: Verification code
   * - **1**: General (default)
   * 
   * @example
   * 1
   */
  signType?: number;
  /**
   * @remarks
   * Whether the signature is for self-use or others.
   * 
   * - false: Self-use
   * - true: Others
   * >Notice: When the signature is for self-use, select the self-use qualification ID; when it\\"s for others, choose the others\\" qualification ID.
   * 
   * @example
   * false
   */
  thirdParty?: boolean;
  static names(): { [key: string]: string } {
    return {
      applySceneContent: 'ApplySceneContent',
      authorizationLetterId: 'AuthorizationLetterId',
      moreDataShrink: 'MoreData',
      ownerId: 'OwnerId',
      qualificationId: 'QualificationId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      signSource: 'SignSource',
      signType: 'SignType',
      thirdParty: 'ThirdParty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applySceneContent: 'string',
      authorizationLetterId: 'number',
      moreDataShrink: 'string',
      ownerId: 'number',
      qualificationId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      signSource: 'number',
      signType: 'number',
      thirdParty: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmsSignResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request status code.
   * 
   * * OK indicates a successful request.
   * * For other error codes, refer to [Error Code List](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Work order number.
   * 
   * This parameter is used by auditors when querying audits. You need to provide this work order number for expedited review.
   * 
   * @example
   * 2004417****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of this call request, uniquely generated by Alibaba Cloud, which can be used for troubleshooting and issue localization.
   * 
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
   */
  requestId?: string;
  /**
   * @remarks
   * The modified signature name.
   * 
   * @example
   * 登录验证
   */
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      orderId: 'string',
      requestId: 'string',
      signName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmsSignResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSmsSignResponseBody;
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
      body: UpdateSmsSignResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmsTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Application scenarios, instructions as follows:
   * - For registered websites, please enter the MIIT-registered domain with HTTP or HTTPS.
   * - For launched apps, provide the app store display link with HTTP or HTTPS, ensuring the app is online.
   * - For public accounts or mini-programs, enter the full name of the public account or mini-program, ensuring they are online.
   * - For e-commerce platform stores, applicable only to enterprise users, enter the display link of the e-commerce store with HTTP or HTTPS.
   * 
   * @example
   * http://www.aliyun.com/
   */
  applySceneContent?: string;
  /**
   * @remarks
   * International/Hong Kong, Macao, and Taiwan template type. When the **TemplateType** parameter is **3**, this parameter is required for international/Hong Kong, Macao, and Taiwan templates, with values:
   * - **0**: Verification code.
   * - **1**: SMS notification.
   * - **2**: Promotional SMS.
   * 
   * @example
   * 0
   */
  intlType?: number;
  /**
   * @remarks
   * Additional information, such as uploading business proof documents or screenshots, to help reviewers understand your business details. Optional and can be left unset.
   */
  moreData?: string[];
  ownerId?: number;
  /**
   * @remarks
   * SMS signature associated with the template during the application.
   * 
   * @example
   * 阿里云
   */
  relatedSignName?: string;
  /**
   * @remarks
   * Explanation for the SMS template application, which serves as a reference for template review.
   * 
   * @example
   * 登录场景使用验证码
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Template Code of an unapproved template.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_152550****
   */
  templateCode?: string;
  /**
   * @remarks
   * Template content, up to 500 characters in length.
   * 
   * Both the template content and variable content must comply with SMS regulations; otherwise, the template will fail the review. You can also view common template examples on the template application page. Using sample templates can enhance review efficiency and success rates. Variable specifications can be found in [TemplateContent Parameter Variable Specifications](https://help.aliyun.com/zh/sms/templaterule-template-variable-parameter-filling-example?spm).
   * 
   * This parameter is required.
   * 
   * @example
   * 您正在申请手机注册，验证码为：${code}，5分钟内有效！
   */
  templateContent?: string;
  /**
   * @remarks
   * Template name, up to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 验证码
   */
  templateName?: string;
  /**
   * @remarks
   * Template variable rules.
   * 
   * For guidance on filling variable rules, refer to the [Sample Documentation](https://help.aliyun.com/zh/sms/templaterule-template-variable-parameter-filling-example?spm).
   * 
   * @example
   * {"code":"characterWithNumber"}
   */
  templateRule?: string;
  /**
   * @remarks
   * SMS type. Values:
   * 
   * - **0**: Verification code.
   * - **1**: SMS notification.
   * - **2**: Promotional SMS.
   * - **3**: International/Hong Kong, Macao, and Taiwan messages.
   * 
   * > Only enterprise-certified users can apply for promotional SMS and international/Hong Kong, Macao, and Taiwan messages. Details on differences between personal and enterprise user rights are available in [Usage Guidelines](https://help.aliyun.com/zh/sms/user-guide/usage-notes?spm=a2c4g.11186623.0.0.67447f576NJnE8).
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      applySceneContent: 'ApplySceneContent',
      intlType: 'IntlType',
      moreData: 'MoreData',
      ownerId: 'OwnerId',
      relatedSignName: 'RelatedSignName',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateCode: 'TemplateCode',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateRule: 'TemplateRule',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applySceneContent: 'string',
      intlType: 'number',
      moreData: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      relatedSignName: 'string',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateCode: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateRule: 'string',
      templateType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.moreData)) {
      $dara.Model.validateArray(this.moreData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmsTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Application scenarios, instructions as follows:
   * - For registered websites, please enter the MIIT-registered domain with HTTP or HTTPS.
   * - For launched apps, provide the app store display link with HTTP or HTTPS, ensuring the app is online.
   * - For public accounts or mini-programs, enter the full name of the public account or mini-program, ensuring they are online.
   * - For e-commerce platform stores, applicable only to enterprise users, enter the display link of the e-commerce store with HTTP or HTTPS.
   * 
   * @example
   * http://www.aliyun.com/
   */
  applySceneContent?: string;
  /**
   * @remarks
   * International/Hong Kong, Macao, and Taiwan template type. When the **TemplateType** parameter is **3**, this parameter is required for international/Hong Kong, Macao, and Taiwan templates, with values:
   * - **0**: Verification code.
   * - **1**: SMS notification.
   * - **2**: Promotional SMS.
   * 
   * @example
   * 0
   */
  intlType?: number;
  /**
   * @remarks
   * Additional information, such as uploading business proof documents or screenshots, to help reviewers understand your business details. Optional and can be left unset.
   */
  moreDataShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * SMS signature associated with the template during the application.
   * 
   * @example
   * 阿里云
   */
  relatedSignName?: string;
  /**
   * @remarks
   * Explanation for the SMS template application, which serves as a reference for template review.
   * 
   * @example
   * 登录场景使用验证码
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Template Code of an unapproved template.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_152550****
   */
  templateCode?: string;
  /**
   * @remarks
   * Template content, up to 500 characters in length.
   * 
   * Both the template content and variable content must comply with SMS regulations; otherwise, the template will fail the review. You can also view common template examples on the template application page. Using sample templates can enhance review efficiency and success rates. Variable specifications can be found in [TemplateContent Parameter Variable Specifications](https://help.aliyun.com/zh/sms/templaterule-template-variable-parameter-filling-example?spm).
   * 
   * This parameter is required.
   * 
   * @example
   * 您正在申请手机注册，验证码为：${code}，5分钟内有效！
   */
  templateContent?: string;
  /**
   * @remarks
   * Template name, up to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 验证码
   */
  templateName?: string;
  /**
   * @remarks
   * Template variable rules.
   * 
   * For guidance on filling variable rules, refer to the [Sample Documentation](https://help.aliyun.com/zh/sms/templaterule-template-variable-parameter-filling-example?spm).
   * 
   * @example
   * {"code":"characterWithNumber"}
   */
  templateRule?: string;
  /**
   * @remarks
   * SMS type. Values:
   * 
   * - **0**: Verification code.
   * - **1**: SMS notification.
   * - **2**: Promotional SMS.
   * - **3**: International/Hong Kong, Macao, and Taiwan messages.
   * 
   * > Only enterprise-certified users can apply for promotional SMS and international/Hong Kong, Macao, and Taiwan messages. Details on differences between personal and enterprise user rights are available in [Usage Guidelines](https://help.aliyun.com/zh/sms/user-guide/usage-notes?spm=a2c4g.11186623.0.0.67447f576NJnE8).
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      applySceneContent: 'ApplySceneContent',
      intlType: 'IntlType',
      moreDataShrink: 'MoreData',
      ownerId: 'OwnerId',
      relatedSignName: 'RelatedSignName',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateCode: 'TemplateCode',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateRule: 'TemplateRule',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applySceneContent: 'string',
      intlType: 'number',
      moreDataShrink: 'string',
      ownerId: 'number',
      relatedSignName: 'string',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateCode: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateRule: 'string',
      templateType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmsTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request status code.
   * 
   * * OK indicates a successful request.
   * * For other error codes, refer to the **Error Codes** section of this chapter or the product\\"s [API Error Codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Work order number.
   * 
   * This parameter is used by auditors when querying audits. You need to provide this work order number when requesting expedited review.
   * 
   * @example
   * 20041271****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of this call request, which is a unique identifier generated by Alibaba Cloud for the request and can be used to troubleshoot and locate issues.
   * 
   * @example
   * 819BE656-D2E0-4858-8B21-B2E477085AAF
   */
  requestId?: string;
  /**
   * @remarks
   * Code of the SMS template.
   * 
   * @example
   * SMS_152550****
   */
  templateCode?: string;
  /**
   * @remarks
   * Name of the SMS template.
   * 
   * @example
   * 验证码
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      orderId: 'string',
      requestId: 'string',
      templateCode: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmsTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSmsTemplateResponseBody;
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
      body: UpdateSmsTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidPhoneCodeRequest extends $dara.Model {
  /**
   * @remarks
   * 验证码
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  certifyCode?: string;
  ownerId?: number;
  /**
   * @remarks
   * 手机号
   * 
   * This parameter is required.
   * 
   * @example
   * 137****1234
   */
  phoneNo?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      certifyCode: 'CertifyCode',
      ownerId: 'OwnerId',
      phoneNo: 'PhoneNo',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyCode: 'string',
      ownerId: 'number',
      phoneNo: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidPhoneCodeResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidPhoneCodeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ValidPhoneCodeResponseBody;
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
      body: ValidPhoneCodeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'ap-southeast-1': "dysmsapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "dysmsapi.ap-southeast-5.aliyuncs.com",
      'cn-beijing': "dysmsapi-proxy.cn-beijing.aliyuncs.com",
      'cn-hongkong': "dysmsapi-xman.cn-hongkong.aliyuncs.com",
      'eu-central-1': "dysmsapi.eu-central-1.aliyuncs.com",
      'us-east-1': "dysmsapi.us-east-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dysmsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 添加验证码签名信息
   * 
   * @param request - AddExtCodeSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddExtCodeSignResponse
   */
  async addExtCodeSignWithOptions(request: AddExtCodeSignRequest, runtime: $dara.RuntimeOptions): Promise<AddExtCodeSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extCode)) {
      query["ExtCode"] = request.extCode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddExtCodeSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AddExtCodeSignResponse>(await this.callApi(params, req, runtime), new AddExtCodeSignResponse({}));
  }

  /**
   * 添加验证码签名信息
   * 
   * @param request - AddExtCodeSignRequest
   * @returns AddExtCodeSignResponse
   */
  async addExtCodeSign(request: AddExtCodeSignRequest): Promise<AddExtCodeSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addExtCodeSignWithOptions(request, runtime);
  }

  /**
   * Creates a short URL.
   * 
   * @remarks
   *   Before you call this operation, you must register the primary domain name of the source URL in the Short Message Service (SMS) console. After the domain name is registered, you can call this operation to create a short URL. For more information, see [Domain name registration](https://help.aliyun.com/document_detail/302325.html#title-mau-zdh-hd0).
   * *   You can create up to 3,000 short URLs within a natural day.
   * *   After a short URL is generated, a security review is required. Generally, the review takes 10 minutes to 2 hours to complete. Before the security review is passed, the short URL cannot be directly accessed.
   * 
   * @param request - AddShortUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddShortUrlResponse
   */
  async addShortUrlWithOptions(request: AddShortUrlRequest, runtime: $dara.RuntimeOptions): Promise<AddShortUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.effectiveDays)) {
      body["EffectiveDays"] = request.effectiveDays;
    }

    if (!$dara.isNull(request.shortUrlName)) {
      body["ShortUrlName"] = request.shortUrlName;
    }

    if (!$dara.isNull(request.sourceUrl)) {
      body["SourceUrl"] = request.sourceUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<AddShortUrlResponse>(await this.callApi(params, req, runtime), new AddShortUrlResponse({}));
  }

  /**
   * Creates a short URL.
   * 
   * @remarks
   *   Before you call this operation, you must register the primary domain name of the source URL in the Short Message Service (SMS) console. After the domain name is registered, you can call this operation to create a short URL. For more information, see [Domain name registration](https://help.aliyun.com/document_detail/302325.html#title-mau-zdh-hd0).
   * *   You can create up to 3,000 short URLs within a natural day.
   * *   After a short URL is generated, a security review is required. Generally, the review takes 10 minutes to 2 hours to complete. Before the security review is passed, the short URL cannot be directly accessed.
   * 
   * @param request - AddShortUrlRequest
   * @returns AddShortUrlResponse
   */
  async addShortUrl(request: AddShortUrlRequest): Promise<AddShortUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addShortUrlWithOptions(request, runtime);
  }

  /**
   * Creates a signature.
   * 
   * @remarks
   * You can call the AddSmsSign operation or use the [Short Message Service (SMS) console](https://dysms.console.aliyun.com/dysms.htm#/overview) to create an SMS signature. The signature must comply with the [SMS signature specifications](https://help.aliyun.com/document_detail/108076.html). You can call the QuerySmsSign operation or use the SMS console to query the review status of the signature.
   * For more information, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * ### QPS limit
   * You can call this operation only once per second. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * > 
   * *   You cannot cancel the review of a signature.
   * *   Individual users can create only one verification code signature, and can create only one general-purpose signature within a natural day. If you need to apply for multiple signatures, we recommend that you upgrade your account to an enterprise user.
   * *   If you need to use the same signature for messages sent to recipients both in and outside the Chinese mainland, the signature must be a general-purpose signature.
   * *   If you apply for a signature or message template, you must specify the signature scenario or template type. You must also provide the information of your services, such as a website URL, a domain name with an ICP filing, an application download URL, or the name of your WeChat official account or mini program. For sign-in scenarios, you must also provide an account and password for tests. A detailed description can improve the review efficiency of signatures and templates.
   * *   An SMS signature must undergo a thorough review process before it can be approved for use.
   * 
   * @param request - AddSmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSmsSignResponse
   */
  async addSmsSignWithOptions(request: AddSmsSignRequest, runtime: $dara.RuntimeOptions): Promise<AddSmsSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.signSource)) {
      query["SignSource"] = request.signSource;
    }

    if (!$dara.isNull(request.signType)) {
      query["SignType"] = request.signType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.signFileList)) {
      body["SignFileList"] = request.signFileList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<AddSmsSignResponse>(await this.callApi(params, req, runtime), new AddSmsSignResponse({}));
  }

  /**
   * Creates a signature.
   * 
   * @remarks
   * You can call the AddSmsSign operation or use the [Short Message Service (SMS) console](https://dysms.console.aliyun.com/dysms.htm#/overview) to create an SMS signature. The signature must comply with the [SMS signature specifications](https://help.aliyun.com/document_detail/108076.html). You can call the QuerySmsSign operation or use the SMS console to query the review status of the signature.
   * For more information, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * ### QPS limit
   * You can call this operation only once per second. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * > 
   * *   You cannot cancel the review of a signature.
   * *   Individual users can create only one verification code signature, and can create only one general-purpose signature within a natural day. If you need to apply for multiple signatures, we recommend that you upgrade your account to an enterprise user.
   * *   If you need to use the same signature for messages sent to recipients both in and outside the Chinese mainland, the signature must be a general-purpose signature.
   * *   If you apply for a signature or message template, you must specify the signature scenario or template type. You must also provide the information of your services, such as a website URL, a domain name with an ICP filing, an application download URL, or the name of your WeChat official account or mini program. For sign-in scenarios, you must also provide an account and password for tests. A detailed description can improve the review efficiency of signatures and templates.
   * *   An SMS signature must undergo a thorough review process before it can be approved for use.
   * 
   * @param request - AddSmsSignRequest
   * @returns AddSmsSignResponse
   */
  async addSmsSign(request: AddSmsSignRequest): Promise<AddSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSmsSignWithOptions(request, runtime);
  }

  /**
   * Creates a message template.
   * 
   * @remarks
   * You can call the operation or use the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview) to apply for a message template. The template must comply with the [message template specifications](https://help.aliyun.com/document_detail/108253.html). You can call the [QuerySmsTemplate](https://help.aliyun.com/document_detail/419289.html) operation or use the Alibaba Cloud SMS console to check whether the message template is approved.
   * > 
   * *   Message templates pending approval can be withdrawn. You can withdraw a message template pending approval on the Message Templates tab in the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview).
   * *   Message templates that have been approved can be deleted, and cannot be modified. You can delete a message template pending approval on the Message Templates tab in the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview).
   * *   If you call the AddSmsTemplate operation, you can apply for a maximum of 100 message templates in a calendar day. After you apply for a message template, we recommend that you wait for at least 30 seconds before you apply for another one. If you use the Alibaba Cloud SMS console, you can apply for an unlimited number of message templates.
   * *   Messages sent to the Chinese mainland and messages sent to countries or regions outside the Chinese mainland use separate message templates. Create message templates based on your needs.
   * *   If you apply for a signature or message template, you must specify the signature scenario or template type. You must also provide the information of your services, such as a website URL, a domain name with an ICP filing, an application download URL, or the name of your WeChat official account or mini program. For sign-in scenarios, you must also provide an account and password for tests. A detailed description can improve the review efficiency of signatures and templates.
   * *   A signature must undergo a thorough review process before it can be approved for use. For more information, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @deprecated OpenAPI AddSmsTemplate is deprecated, please use Dysmsapi::2017-05-25::CreateSmsTemplate instead.
   * 
   * @param request - AddSmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSmsTemplateResponse
   */
  // Deprecated
  async addSmsTemplateWithOptions(request: AddSmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<AddSmsTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateContent)) {
      query["TemplateContent"] = request.templateContent;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AddSmsTemplateResponse>(await this.callApi(params, req, runtime), new AddSmsTemplateResponse({}));
  }

  /**
   * Creates a message template.
   * 
   * @remarks
   * You can call the operation or use the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview) to apply for a message template. The template must comply with the [message template specifications](https://help.aliyun.com/document_detail/108253.html). You can call the [QuerySmsTemplate](https://help.aliyun.com/document_detail/419289.html) operation or use the Alibaba Cloud SMS console to check whether the message template is approved.
   * > 
   * *   Message templates pending approval can be withdrawn. You can withdraw a message template pending approval on the Message Templates tab in the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview).
   * *   Message templates that have been approved can be deleted, and cannot be modified. You can delete a message template pending approval on the Message Templates tab in the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview).
   * *   If you call the AddSmsTemplate operation, you can apply for a maximum of 100 message templates in a calendar day. After you apply for a message template, we recommend that you wait for at least 30 seconds before you apply for another one. If you use the Alibaba Cloud SMS console, you can apply for an unlimited number of message templates.
   * *   Messages sent to the Chinese mainland and messages sent to countries or regions outside the Chinese mainland use separate message templates. Create message templates based on your needs.
   * *   If you apply for a signature or message template, you must specify the signature scenario or template type. You must also provide the information of your services, such as a website URL, a domain name with an ICP filing, an application download URL, or the name of your WeChat official account or mini program. For sign-in scenarios, you must also provide an account and password for tests. A detailed description can improve the review efficiency of signatures and templates.
   * *   A signature must undergo a thorough review process before it can be approved for use. For more information, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @deprecated OpenAPI AddSmsTemplate is deprecated, please use Dysmsapi::2017-05-25::CreateSmsTemplate instead.
   * 
   * @param request - AddSmsTemplateRequest
   * @returns AddSmsTemplateResponse
   */
  // Deprecated
  async addSmsTemplate(request: AddSmsTemplateRequest): Promise<AddSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSmsTemplateWithOptions(request, runtime);
  }

  /**
   * 更换签名的资质和授权书
   * 
   * @param request - ChangeSignatureQualificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeSignatureQualificationResponse
   */
  async changeSignatureQualificationWithOptions(request: ChangeSignatureQualificationRequest, runtime: $dara.RuntimeOptions): Promise<ChangeSignatureQualificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationLetterId)) {
      query["AuthorizationLetterId"] = request.authorizationLetterId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signatureName)) {
      query["SignatureName"] = request.signatureName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeSignatureQualification",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ChangeSignatureQualificationResponse>(await this.callApi(params, req, runtime), new ChangeSignatureQualificationResponse({}));
  }

  /**
   * 更换签名的资质和授权书
   * 
   * @param request - ChangeSignatureQualificationRequest
   * @returns ChangeSignatureQualificationResponse
   */
  async changeSignatureQualification(request: ChangeSignatureQualificationRequest): Promise<ChangeSignatureQualificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeSignatureQualificationWithOptions(request, runtime);
  }

  /**
   * Checks whether a mobile phone number can receive card messages.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 2,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CheckMobilesCardSupportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckMobilesCardSupportResponse
   */
  async checkMobilesCardSupportWithOptions(request: CheckMobilesCardSupportRequest, runtime: $dara.RuntimeOptions): Promise<CheckMobilesCardSupportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mobiles)) {
      query["Mobiles"] = request.mobiles;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckMobilesCardSupport",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CheckMobilesCardSupportResponse>(await this.callApi(params, req, runtime), new CheckMobilesCardSupportResponse({}));
  }

  /**
   * Checks whether a mobile phone number can receive card messages.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 2,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CheckMobilesCardSupportRequest
   * @returns CheckMobilesCardSupportResponse
   */
  async checkMobilesCardSupport(request: CheckMobilesCardSupportRequest): Promise<CheckMobilesCardSupportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkMobilesCardSupportWithOptions(request, runtime);
  }

  /**
   * Sends conversion rate information to Alibaba Cloud SMS.
   * 
   * @param request - ConversionDataIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConversionDataIntlResponse
   */
  async conversionDataIntlWithOptions(request: ConversionDataIntlRequest, runtime: $dara.RuntimeOptions): Promise<ConversionDataIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conversionRate)) {
      query["ConversionRate"] = request.conversionRate;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.reportTime)) {
      query["ReportTime"] = request.reportTime;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConversionDataIntl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ConversionDataIntlResponse>(await this.callApi(params, req, runtime), new ConversionDataIntlResponse({}));
  }

  /**
   * Sends conversion rate information to Alibaba Cloud SMS.
   * 
   * @param request - ConversionDataIntlRequest
   * @returns ConversionDataIntlResponse
   */
  async conversionDataIntl(request: ConversionDataIntlRequest): Promise<ConversionDataIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.conversionDataIntlWithOptions(request, runtime);
  }

  /**
   * Creates a card message template.
   * 
   * @remarks
   *   The CreateCardSmsTemplate operation saves the card message template information, submits it to the mobile phone manufacturer for approval, and returns the message template ID.
   * *   If the type of the message template is not supported or events that are not supported by the mobile phone manufacturer are specified, the template is not submitted. For more information, see [Supported message templates](https://help.aliyun.com/document_detail/434611.html).
   * *   For information about sample card message templates, see [Sample card message templates](https://help.aliyun.com/document_detail/435361.html).
   * ### QPS limit
   * You can call this operation up to 300 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - CreateCardSmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCardSmsTemplateResponse
   */
  async createCardSmsTemplateWithOptions(tmpReq: CreateCardSmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<CreateCardSmsTemplateResponse> {
    tmpReq.validate();
    let request = new CreateCardSmsTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.template)) {
      request.templateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.template, "Template", "json");
    }

    let query = { };
    if (!$dara.isNull(request.factorys)) {
      query["Factorys"] = request.factorys;
    }

    if (!$dara.isNull(request.memo)) {
      query["Memo"] = request.memo;
    }

    if (!$dara.isNull(request.templateShrink)) {
      query["Template"] = request.templateShrink;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCardSmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateCardSmsTemplateResponse>(await this.callApi(params, req, runtime), new CreateCardSmsTemplateResponse({}));
  }

  /**
   * Creates a card message template.
   * 
   * @remarks
   *   The CreateCardSmsTemplate operation saves the card message template information, submits it to the mobile phone manufacturer for approval, and returns the message template ID.
   * *   If the type of the message template is not supported or events that are not supported by the mobile phone manufacturer are specified, the template is not submitted. For more information, see [Supported message templates](https://help.aliyun.com/document_detail/434611.html).
   * *   For information about sample card message templates, see [Sample card message templates](https://help.aliyun.com/document_detail/435361.html).
   * ### QPS limit
   * You can call this operation up to 300 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateCardSmsTemplateRequest
   * @returns CreateCardSmsTemplateResponse
   */
  async createCardSmsTemplate(request: CreateCardSmsTemplateRequest): Promise<CreateCardSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCardSmsTemplateWithOptions(request, runtime);
  }

  /**
   * 创建短链
   * 
   * @param request - CreateSmartShortUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmartShortUrlResponse
   */
  async createSmartShortUrlWithOptions(request: CreateSmartShortUrlRequest, runtime: $dara.RuntimeOptions): Promise<CreateSmartShortUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumbers)) {
      query["PhoneNumbers"] = request.phoneNumbers;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sourceUrl)) {
      query["SourceUrl"] = request.sourceUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmartShortUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateSmartShortUrlResponse>(await this.callApi(params, req, runtime), new CreateSmartShortUrlResponse({}));
  }

  /**
   * 创建短链
   * 
   * @param request - CreateSmartShortUrlRequest
   * @returns CreateSmartShortUrlResponse
   */
  async createSmartShortUrl(request: CreateSmartShortUrlRequest): Promise<CreateSmartShortUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmartShortUrlWithOptions(request, runtime);
  }

  /**
   * 创建委托授权书
   * 
   * @param tmpReq - CreateSmsAuthorizationLetterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsAuthorizationLetterResponse
   */
  async createSmsAuthorizationLetterWithOptions(tmpReq: CreateSmsAuthorizationLetterRequest, runtime: $dara.RuntimeOptions): Promise<CreateSmsAuthorizationLetterResponse> {
    tmpReq.validate();
    let request = new CreateSmsAuthorizationLetterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.signList)) {
      request.signListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.signList, "SignList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.authorization)) {
      query["Authorization"] = request.authorization;
    }

    if (!$dara.isNull(request.authorizationLetterExpDate)) {
      query["AuthorizationLetterExpDate"] = request.authorizationLetterExpDate;
    }

    if (!$dara.isNull(request.authorizationLetterName)) {
      query["AuthorizationLetterName"] = request.authorizationLetterName;
    }

    if (!$dara.isNull(request.authorizationLetterPic)) {
      query["AuthorizationLetterPic"] = request.authorizationLetterPic;
    }

    if (!$dara.isNull(request.organizationCode)) {
      query["OrganizationCode"] = request.organizationCode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.proxyAuthorization)) {
      query["ProxyAuthorization"] = request.proxyAuthorization;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signListShrink)) {
      query["SignList"] = request.signListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmsAuthorizationLetter",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateSmsAuthorizationLetterResponse>(await this.callApi(params, req, runtime), new CreateSmsAuthorizationLetterResponse({}));
  }

  /**
   * 创建委托授权书
   * 
   * @param request - CreateSmsAuthorizationLetterRequest
   * @returns CreateSmsAuthorizationLetterResponse
   */
  async createSmsAuthorizationLetter(request: CreateSmsAuthorizationLetterRequest): Promise<CreateSmsAuthorizationLetterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsAuthorizationLetterWithOptions(request, runtime);
  }

  /**
   * Create SMS Signature
   * 
   * @remarks
   * - For details about the announcement of changes to the new and original interfaces, see [Announcement on Updates to SMS Service Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - Individual authenticated users can apply for one formal signature per natural day under the same Alibaba Cloud account, while enterprise authenticated users have no current restrictions. For details on the differences in rights between individual and enterprise users, please refer to [User Guide](https://help.aliyun.com/zh/sms/user-guide/usage-notes?spm).
   * - Signature information applied through the interface will be synchronized in the SMS service console. For operations related to signatures in the console, see [SMS Signatures](https://help.aliyun.com/zh/sms/user-guide/create-signatures?spm).
   * - After submitting the signature application, you can query the signature review status and details via the [GetSmsSign](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-getsmssign?spm) interface. You can also [Configure Receipt Messages](https://help.aliyun.com/zh/sms/developer-reference/configure-delivery-receipts-1?spm) and obtain signature review status messages through SignSmsReport.
   * 
   * @param tmpReq - CreateSmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsSignResponse
   */
  async createSmsSignWithOptions(tmpReq: CreateSmsSignRequest, runtime: $dara.RuntimeOptions): Promise<CreateSmsSignResponse> {
    tmpReq.validate();
    let request = new CreateSmsSignShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.moreData)) {
      request.moreDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.moreData, "MoreData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applySceneContent)) {
      query["ApplySceneContent"] = request.applySceneContent;
    }

    if (!$dara.isNull(request.authorizationLetterId)) {
      query["AuthorizationLetterId"] = request.authorizationLetterId;
    }

    if (!$dara.isNull(request.moreDataShrink)) {
      query["MoreData"] = request.moreDataShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.signSource)) {
      query["SignSource"] = request.signSource;
    }

    if (!$dara.isNull(request.signType)) {
      query["SignType"] = request.signType;
    }

    if (!$dara.isNull(request.thirdParty)) {
      query["ThirdParty"] = request.thirdParty;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmsSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateSmsSignResponse>(await this.callApi(params, req, runtime), new CreateSmsSignResponse({}));
  }

  /**
   * Create SMS Signature
   * 
   * @remarks
   * - For details about the announcement of changes to the new and original interfaces, see [Announcement on Updates to SMS Service Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - Individual authenticated users can apply for one formal signature per natural day under the same Alibaba Cloud account, while enterprise authenticated users have no current restrictions. For details on the differences in rights between individual and enterprise users, please refer to [User Guide](https://help.aliyun.com/zh/sms/user-guide/usage-notes?spm).
   * - Signature information applied through the interface will be synchronized in the SMS service console. For operations related to signatures in the console, see [SMS Signatures](https://help.aliyun.com/zh/sms/user-guide/create-signatures?spm).
   * - After submitting the signature application, you can query the signature review status and details via the [GetSmsSign](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-getsmssign?spm) interface. You can also [Configure Receipt Messages](https://help.aliyun.com/zh/sms/developer-reference/configure-delivery-receipts-1?spm) and obtain signature review status messages through SignSmsReport.
   * 
   * @param request - CreateSmsSignRequest
   * @returns CreateSmsSignResponse
   */
  async createSmsSign(request: CreateSmsSignRequest): Promise<CreateSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsSignWithOptions(request, runtime);
  }

  /**
   * Create SMS Template
   * 
   * @remarks
   * - For details about the changes of this new interface compared to the original one, please refer to [Announcement on the Update of SMS Service Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - It is recommended to apply for SMS templates via the API with at least a 30-second interval between each request.
   * - The template information applied through the API will be synchronized in the SMS service console. For operations related to templates in the console, please refer to SMS Templates.
   * - After submitting the template application, you can query the audit status and details using the GetSmsTemplate interface. You can also configure delivery receipts to obtain the audit status messages via TemplateSmsReport.
   * - Domestic SMS templates are not interchangeable with international/Hong Kong, Macao, and Taiwan SMS templates. Please apply for templates based on your business scenario.
   * - Only enterprise-verified users can apply for promotional messages and international/Hong Kong, Macao, and Taiwan messages. For differences in rights between personal and enterprise users, please refer to Usage Instructions.
   * 
   * @param tmpReq - CreateSmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsTemplateResponse
   */
  async createSmsTemplateWithOptions(tmpReq: CreateSmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<CreateSmsTemplateResponse> {
    tmpReq.validate();
    let request = new CreateSmsTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.moreData)) {
      request.moreDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.moreData, "MoreData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applySceneContent)) {
      query["ApplySceneContent"] = request.applySceneContent;
    }

    if (!$dara.isNull(request.intlType)) {
      query["IntlType"] = request.intlType;
    }

    if (!$dara.isNull(request.moreDataShrink)) {
      query["MoreData"] = request.moreDataShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.relatedSignName)) {
      query["RelatedSignName"] = request.relatedSignName;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateContent)) {
      query["TemplateContent"] = request.templateContent;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateRule)) {
      query["TemplateRule"] = request.templateRule;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateSmsTemplateResponse>(await this.callApi(params, req, runtime), new CreateSmsTemplateResponse({}));
  }

  /**
   * Create SMS Template
   * 
   * @remarks
   * - For details about the changes of this new interface compared to the original one, please refer to [Announcement on the Update of SMS Service Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - It is recommended to apply for SMS templates via the API with at least a 30-second interval between each request.
   * - The template information applied through the API will be synchronized in the SMS service console. For operations related to templates in the console, please refer to SMS Templates.
   * - After submitting the template application, you can query the audit status and details using the GetSmsTemplate interface. You can also configure delivery receipts to obtain the audit status messages via TemplateSmsReport.
   * - Domestic SMS templates are not interchangeable with international/Hong Kong, Macao, and Taiwan SMS templates. Please apply for templates based on your business scenario.
   * - Only enterprise-verified users can apply for promotional messages and international/Hong Kong, Macao, and Taiwan messages. For differences in rights between personal and enterprise users, please refer to Usage Instructions.
   * 
   * @param request - CreateSmsTemplateRequest
   * @returns CreateSmsTemplateResponse
   */
  async createSmsTemplate(request: CreateSmsTemplateRequest): Promise<CreateSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsTemplateWithOptions(request, runtime);
  }

  /**
   * 删除验证码签名
   * 
   * @param request - DeleteExtCodeSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExtCodeSignResponse
   */
  async deleteExtCodeSignWithOptions(request: DeleteExtCodeSignRequest, runtime: $dara.RuntimeOptions): Promise<DeleteExtCodeSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extCode)) {
      query["ExtCode"] = request.extCode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExtCodeSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteExtCodeSignResponse>(await this.callApi(params, req, runtime), new DeleteExtCodeSignResponse({}));
  }

  /**
   * 删除验证码签名
   * 
   * @param request - DeleteExtCodeSignRequest
   * @returns DeleteExtCodeSignResponse
   */
  async deleteExtCodeSign(request: DeleteExtCodeSignRequest): Promise<DeleteExtCodeSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteExtCodeSignWithOptions(request, runtime);
  }

  /**
   * Deletes a short URL. After you delete a short URL, it cannot be changed to its original state.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteShortUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteShortUrlResponse
   */
  async deleteShortUrlWithOptions(request: DeleteShortUrlRequest, runtime: $dara.RuntimeOptions): Promise<DeleteShortUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceUrl)) {
      body["SourceUrl"] = request.sourceUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<DeleteShortUrlResponse>(await this.callApi(params, req, runtime), new DeleteShortUrlResponse({}));
  }

  /**
   * Deletes a short URL. After you delete a short URL, it cannot be changed to its original state.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteShortUrlRequest
   * @returns DeleteShortUrlResponse
   */
  async deleteShortUrl(request: DeleteShortUrlRequest): Promise<DeleteShortUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteShortUrlWithOptions(request, runtime);
  }

  /**
   * 删除资质对客openAPI
   * 
   * @param request - DeleteSmsQualificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSmsQualificationResponse
   */
  async deleteSmsQualificationWithOptions(request: DeleteSmsQualificationRequest, runtime: $dara.RuntimeOptions): Promise<DeleteSmsQualificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qualificationGroupId)) {
      query["QualificationGroupId"] = request.qualificationGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSmsQualification",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteSmsQualificationResponse>(await this.callApi(params, req, runtime), new DeleteSmsQualificationResponse({}));
  }

  /**
   * 删除资质对客openAPI
   * 
   * @param request - DeleteSmsQualificationRequest
   * @returns DeleteSmsQualificationResponse
   */
  async deleteSmsQualification(request: DeleteSmsQualificationRequest): Promise<DeleteSmsQualificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSmsQualificationWithOptions(request, runtime);
  }

  /**
   * Deletes a signature.
   * 
   * @remarks
   *   You cannot delete a signature that has not been approved.
   * *   After you delete a signature, you cannot recover it. Proceed with caution.
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteSmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSmsSignResponse
   */
  async deleteSmsSignWithOptions(request: DeleteSmsSignRequest, runtime: $dara.RuntimeOptions): Promise<DeleteSmsSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSmsSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteSmsSignResponse>(await this.callApi(params, req, runtime), new DeleteSmsSignResponse({}));
  }

  /**
   * Deletes a signature.
   * 
   * @remarks
   *   You cannot delete a signature that has not been approved.
   * *   After you delete a signature, you cannot recover it. Proceed with caution.
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteSmsSignRequest
   * @returns DeleteSmsSignResponse
   */
  async deleteSmsSign(request: DeleteSmsSignRequest): Promise<DeleteSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSmsSignWithOptions(request, runtime);
  }

  /**
   * Deletes a message template.
   * 
   * @remarks
   *   Message templates pending approval can be withdrawn. You can delete a message template pending approval on the Message Templates tab in the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview).
   * *   Message templates that have been approved can be deleted, and cannot be modified. You can delete a message template pending approval on the Message Templates tab in the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview).
   * *   You cannot recover deleted message templates. Proceed with caution.
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteSmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSmsTemplateResponse
   */
  async deleteSmsTemplateWithOptions(request: DeleteSmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<DeleteSmsTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteSmsTemplateResponse>(await this.callApi(params, req, runtime), new DeleteSmsTemplateResponse({}));
  }

  /**
   * Deletes a message template.
   * 
   * @remarks
   *   Message templates pending approval can be withdrawn. You can delete a message template pending approval on the Message Templates tab in the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview).
   * *   Message templates that have been approved can be deleted, and cannot be modified. You can delete a message template pending approval on the Message Templates tab in the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview).
   * *   You cannot recover deleted message templates. Proceed with caution.
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteSmsTemplateRequest
   * @returns DeleteSmsTemplateResponse
   */
  async deleteSmsTemplate(request: DeleteSmsTemplateRequest): Promise<DeleteSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSmsTemplateWithOptions(request, runtime);
  }

  /**
   * Query card sending details
   * 
   * @param request - GetCardSmsDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCardSmsDetailsResponse
   */
  async getCardSmsDetailsWithOptions(request: GetCardSmsDetailsRequest, runtime: $dara.RuntimeOptions): Promise<GetCardSmsDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizCardId)) {
      query["BizCardId"] = request.bizCardId;
    }

    if (!$dara.isNull(request.bizDigitId)) {
      query["BizDigitId"] = request.bizDigitId;
    }

    if (!$dara.isNull(request.bizSmsId)) {
      query["BizSmsId"] = request.bizSmsId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sendDate)) {
      query["SendDate"] = request.sendDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCardSmsDetails",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetCardSmsDetailsResponse>(await this.callApi(params, req, runtime), new GetCardSmsDetailsResponse({}));
  }

  /**
   * Query card sending details
   * 
   * @param request - GetCardSmsDetailsRequest
   * @returns GetCardSmsDetailsResponse
   */
  async getCardSmsDetails(request: GetCardSmsDetailsRequest): Promise<GetCardSmsDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCardSmsDetailsWithOptions(request, runtime);
  }

  /**
   * Queries the short URLs of a card messages template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetCardSmsLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCardSmsLinkResponse
   */
  async getCardSmsLinkWithOptions(request: GetCardSmsLinkRequest, runtime: $dara.RuntimeOptions): Promise<GetCardSmsLinkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cardCodeType)) {
      query["CardCodeType"] = request.cardCodeType;
    }

    if (!$dara.isNull(request.cardLinkType)) {
      query["CardLinkType"] = request.cardLinkType;
    }

    if (!$dara.isNull(request.cardTemplateCode)) {
      query["CardTemplateCode"] = request.cardTemplateCode;
    }

    if (!$dara.isNull(request.cardTemplateParamJson)) {
      query["CardTemplateParamJson"] = request.cardTemplateParamJson;
    }

    if (!$dara.isNull(request.customShortCodeJson)) {
      query["CustomShortCodeJson"] = request.customShortCodeJson;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.phoneNumberJson)) {
      query["PhoneNumberJson"] = request.phoneNumberJson;
    }

    if (!$dara.isNull(request.signNameJson)) {
      query["SignNameJson"] = request.signNameJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCardSmsLink",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetCardSmsLinkResponse>(await this.callApi(params, req, runtime), new GetCardSmsLinkResponse({}));
  }

  /**
   * Queries the short URLs of a card messages template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetCardSmsLinkRequest
   * @returns GetCardSmsLinkResponse
   */
  async getCardSmsLink(request: GetCardSmsLinkRequest): Promise<GetCardSmsLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCardSmsLinkWithOptions(request, runtime);
  }

  /**
   * Converts a resource uploaded to the specified Object Storage Service (OSS) bucket for unified management. Then, a resource ID is returned. You can manage the resource based on the ID.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 300 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetMediaResourceIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaResourceIdResponse
   */
  async getMediaResourceIdWithOptions(request: GetMediaResourceIdRequest, runtime: $dara.RuntimeOptions): Promise<GetMediaResourceIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extendInfo)) {
      query["ExtendInfo"] = request.extendInfo;
    }

    if (!$dara.isNull(request.fileSize)) {
      query["FileSize"] = request.fileSize;
    }

    if (!$dara.isNull(request.memo)) {
      query["Memo"] = request.memo;
    }

    if (!$dara.isNull(request.ossKey)) {
      query["OssKey"] = request.ossKey;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaResourceId",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetMediaResourceIdResponse>(await this.callApi(params, req, runtime), new GetMediaResourceIdResponse({}));
  }

  /**
   * Converts a resource uploaded to the specified Object Storage Service (OSS) bucket for unified management. Then, a resource ID is returned. You can manage the resource based on the ID.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 300 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetMediaResourceIdRequest
   * @returns GetMediaResourceIdResponse
   */
  async getMediaResourceId(request: GetMediaResourceIdRequest): Promise<GetMediaResourceIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaResourceIdWithOptions(request, runtime);
  }

  /**
   * Queries the OSS configuration information about card messages.
   * 
   * @remarks
   * Resources such as images and videos used for card message templates can be uploaded to Object Storage Service (OSS) buckets for storage. For more information, see [Upload files to OSS](https://help.aliyun.com/document_detail/437303.html).
   * ### QPS limit
   * You can call this operation up to 300 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetOSSInfoForCardTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOSSInfoForCardTemplateResponse
   */
  async getOSSInfoForCardTemplateWithOptions(runtime: $dara.RuntimeOptions): Promise<GetOSSInfoForCardTemplateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetOSSInfoForCardTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetOSSInfoForCardTemplateResponse>(await this.callApi(params, req, runtime), new GetOSSInfoForCardTemplateResponse({}));
  }

  /**
   * Queries the OSS configuration information about card messages.
   * 
   * @remarks
   * Resources such as images and videos used for card message templates can be uploaded to Object Storage Service (OSS) buckets for storage. For more information, see [Upload files to OSS](https://help.aliyun.com/document_detail/437303.html).
   * ### QPS limit
   * You can call this operation up to 300 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * @returns GetOSSInfoForCardTemplateResponse
   */
  async getOSSInfoForCardTemplate(): Promise<GetOSSInfoForCardTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOSSInfoForCardTemplateWithOptions(runtime);
  }

  /**
   * SMS File Upload, Get Authorization Info
   * 
   * @remarks
   * - When creating signatures or templates, you can upload materials such as login pages with links, backend page screenshots, software copyrights, supplementary agreements, etc. This helps the review personnel understand your business details. If there are multiple materials, they can be combined into one file, supporting png, jpg, jpeg, doc, docx, pdf formats.
   * - For additional materials needed when creating signatures or templates, you can upload them to the OSS file system for storage. For file upload operations, refer to [OSS File Upload](https://help.aliyun.com/zh/sms/upload-files-through-oss).
   * 
   * @param request - GetOSSInfoForUploadFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOSSInfoForUploadFileResponse
   */
  async getOSSInfoForUploadFileWithOptions(request: GetOSSInfoForUploadFileRequest, runtime: $dara.RuntimeOptions): Promise<GetOSSInfoForUploadFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOSSInfoForUploadFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetOSSInfoForUploadFileResponse>(await this.callApi(params, req, runtime), new GetOSSInfoForUploadFileResponse({}));
  }

  /**
   * SMS File Upload, Get Authorization Info
   * 
   * @remarks
   * - When creating signatures or templates, you can upload materials such as login pages with links, backend page screenshots, software copyrights, supplementary agreements, etc. This helps the review personnel understand your business details. If there are multiple materials, they can be combined into one file, supporting png, jpg, jpeg, doc, docx, pdf formats.
   * - For additional materials needed when creating signatures or templates, you can upload them to the OSS file system for storage. For file upload operations, refer to [OSS File Upload](https://help.aliyun.com/zh/sms/upload-files-through-oss).
   * 
   * @param request - GetOSSInfoForUploadFileRequest
   * @returns GetOSSInfoForUploadFileResponse
   */
  async getOSSInfoForUploadFile(request: GetOSSInfoForUploadFileRequest): Promise<GetOSSInfoForUploadFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOSSInfoForUploadFileWithOptions(request, runtime);
  }

  /**
   * 上传文件获取oss配置
   * 
   * @param request - GetQualificationOssInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualificationOssInfoResponse
   */
  async getQualificationOssInfoWithOptions(request: GetQualificationOssInfoRequest, runtime: $dara.RuntimeOptions): Promise<GetQualificationOssInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualificationOssInfo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetQualificationOssInfoResponse>(await this.callApi(params, req, runtime), new GetQualificationOssInfoResponse({}));
  }

  /**
   * 上传文件获取oss配置
   * 
   * @param request - GetQualificationOssInfoRequest
   * @returns GetQualificationOssInfoResponse
   */
  async getQualificationOssInfo(request: GetQualificationOssInfoRequest): Promise<GetQualificationOssInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualificationOssInfoWithOptions(request, runtime);
  }

  /**
   * Query SMS Signature Details
   * 
   * @remarks
   * - For details about the changes of this new interface and the original one, please refer to [Announcement on the Update of SMS Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - Review Time: Generally, after submitting the signature, Alibaba Cloud expects to complete the review within 2 hours (Review Business Hours: Monday to Sunday 9:00~21:00, with legal holidays postponed). It is recommended to submit your application before 18:00.
   * - If the signature fails the review, the reason for the failure will be returned. Please refer to [Handling Suggestions for Failed SMS Reviews](https://help.aliyun.com/zh/sms/user-guide/causes-of-application-failures-and-suggestions?spm), invoke the [UpdateSmsSign](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-updatesmssign?spm) API, or modify the unapproved SMS signature on the [Signature Management](https://dysms.console.aliyun.com/domestic/text/sign) page.
   * 
   * @param request - GetSmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSmsSignResponse
   */
  async getSmsSignWithOptions(request: GetSmsSignRequest, runtime: $dara.RuntimeOptions): Promise<GetSmsSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSmsSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetSmsSignResponse>(await this.callApi(params, req, runtime), new GetSmsSignResponse({}));
  }

  /**
   * Query SMS Signature Details
   * 
   * @remarks
   * - For details about the changes of this new interface and the original one, please refer to [Announcement on the Update of SMS Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - Review Time: Generally, after submitting the signature, Alibaba Cloud expects to complete the review within 2 hours (Review Business Hours: Monday to Sunday 9:00~21:00, with legal holidays postponed). It is recommended to submit your application before 18:00.
   * - If the signature fails the review, the reason for the failure will be returned. Please refer to [Handling Suggestions for Failed SMS Reviews](https://help.aliyun.com/zh/sms/user-guide/causes-of-application-failures-and-suggestions?spm), invoke the [UpdateSmsSign](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-updatesmssign?spm) API, or modify the unapproved SMS signature on the [Signature Management](https://dysms.console.aliyun.com/domestic/text/sign) page.
   * 
   * @param request - GetSmsSignRequest
   * @returns GetSmsSignResponse
   */
  async getSmsSign(request: GetSmsSignRequest): Promise<GetSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSmsSignWithOptions(request, runtime);
  }

  /**
   * Query Text SMS Template Details
   * 
   * @remarks
   * - For details about the announcement of changes to the new and original interfaces, see [Announcement on Updates to SMS Service Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - Review Time: Under normal circumstances, Alibaba Cloud expects to complete the review within 2 hours after template submission (review working hours: Monday to Sunday 9:00~21:00, with statutory holidays postponed). It is recommended to submit your application before 18:00.
   * - If the template fails the review, the reason for the failure will be returned. Please refer to [Handling Suggestions for Failed SMS Reviews](https://help.aliyun.com/zh/sms/user-guide/causes-of-application-failures-and-suggestions?spm=a2c4g.11186623.0.0.41fd339f3bPSCQ), invoke the [ModifySmsTemplate](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-modifysmstemplate?spm=a2c4g.11186623.0.0.5b1f6e8bQloFit) API or modify the SMS template on the [Template Management](https://dysms.console.aliyun.com/domestic/text/template) page.
   * - The current QuerySmsTemplate interface queries the audit details of a single template by template code. The [QuerySmsTemplateList](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-querysmstemplatelist?spm=a2c4g.11186623.0.0.24086e8bO8cFn4) interface can query the template details of all templates under your current account.
   * 
   * @param request - GetSmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSmsTemplateResponse
   */
  async getSmsTemplateWithOptions(request: GetSmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<GetSmsTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetSmsTemplateResponse>(await this.callApi(params, req, runtime), new GetSmsTemplateResponse({}));
  }

  /**
   * Query Text SMS Template Details
   * 
   * @remarks
   * - For details about the announcement of changes to the new and original interfaces, see [Announcement on Updates to SMS Service Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - Review Time: Under normal circumstances, Alibaba Cloud expects to complete the review within 2 hours after template submission (review working hours: Monday to Sunday 9:00~21:00, with statutory holidays postponed). It is recommended to submit your application before 18:00.
   * - If the template fails the review, the reason for the failure will be returned. Please refer to [Handling Suggestions for Failed SMS Reviews](https://help.aliyun.com/zh/sms/user-guide/causes-of-application-failures-and-suggestions?spm=a2c4g.11186623.0.0.41fd339f3bPSCQ), invoke the [ModifySmsTemplate](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-modifysmstemplate?spm=a2c4g.11186623.0.0.5b1f6e8bQloFit) API or modify the SMS template on the [Template Management](https://dysms.console.aliyun.com/domestic/text/template) page.
   * - The current QuerySmsTemplate interface queries the audit details of a single template by template code. The [QuerySmsTemplateList](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-querysmstemplatelist?spm=a2c4g.11186623.0.0.24086e8bO8cFn4) interface can query the template details of all templates under your current account.
   * 
   * @param request - GetSmsTemplateRequest
   * @returns GetSmsTemplateResponse
   */
  async getSmsTemplate(request: GetSmsTemplateRequest): Promise<GetSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSmsTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the tags of a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags of a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies a rejected signature and submit it for approval. Signatures that are pending approval or have been approved cannot be modified.
   * 
   * @remarks
   * You can call the operation or use the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview) to modify an existing signature and submit the signature for approval. The signature must comply with the [signature specifications](https://help.aliyun.com/document_detail/108076.html).
   * For more information, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * > 
   * *   Signatures pending approval cannot be modified.
   * *   You cannot modify a signature after it is approved. If you no longer need the signature, you can delete it.
   * *   If you are an individual user, you cannot apply for a new signature on the same day that your signature is rejected or deleted. We recommend that you modify the rejected signature and submit it again.
   * 
   * @param request - ModifySmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySmsSignResponse
   */
  async modifySmsSignWithOptions(request: ModifySmsSignRequest, runtime: $dara.RuntimeOptions): Promise<ModifySmsSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.signSource)) {
      query["SignSource"] = request.signSource;
    }

    if (!$dara.isNull(request.signType)) {
      query["SignType"] = request.signType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.signFileList)) {
      body["SignFileList"] = request.signFileList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<ModifySmsSignResponse>(await this.callApi(params, req, runtime), new ModifySmsSignResponse({}));
  }

  /**
   * Modifies a rejected signature and submit it for approval. Signatures that are pending approval or have been approved cannot be modified.
   * 
   * @remarks
   * You can call the operation or use the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview) to modify an existing signature and submit the signature for approval. The signature must comply with the [signature specifications](https://help.aliyun.com/document_detail/108076.html).
   * For more information, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * > 
   * *   Signatures pending approval cannot be modified.
   * *   You cannot modify a signature after it is approved. If you no longer need the signature, you can delete it.
   * *   If you are an individual user, you cannot apply for a new signature on the same day that your signature is rejected or deleted. We recommend that you modify the rejected signature and submit it again.
   * 
   * @param request - ModifySmsSignRequest
   * @returns ModifySmsSignResponse
   */
  async modifySmsSign(request: ModifySmsSignRequest): Promise<ModifySmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySmsSignWithOptions(request, runtime);
  }

  /**
   * Modifies the information of an unapproved message template and submits it for review again.
   * 
   * @remarks
   * After you apply for a message template, if the template fails to pass the review, you can call this operation to modify the template and submit the template again. You can call this operation to modify only a template for a specific message type.
   * The template content must comply with the [SMS template specifications](https://help.aliyun.com/document_detail/108253.html).
   * For more information, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * ### QPS limit
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @deprecated OpenAPI ModifySmsTemplate is deprecated, please use Dysmsapi::2017-05-25::UpdateSmsTemplate instead.
   * 
   * @param request - ModifySmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySmsTemplateResponse
   */
  // Deprecated
  async modifySmsTemplateWithOptions(request: ModifySmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<ModifySmsTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateContent)) {
      query["TemplateContent"] = request.templateContent;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ModifySmsTemplateResponse>(await this.callApi(params, req, runtime), new ModifySmsTemplateResponse({}));
  }

  /**
   * Modifies the information of an unapproved message template and submits it for review again.
   * 
   * @remarks
   * After you apply for a message template, if the template fails to pass the review, you can call this operation to modify the template and submit the template again. You can call this operation to modify only a template for a specific message type.
   * The template content must comply with the [SMS template specifications](https://help.aliyun.com/document_detail/108253.html).
   * For more information, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * ### QPS limit
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @deprecated OpenAPI ModifySmsTemplate is deprecated, please use Dysmsapi::2017-05-25::UpdateSmsTemplate instead.
   * 
   * @param request - ModifySmsTemplateRequest
   * @returns ModifySmsTemplateResponse
   */
  // Deprecated
  async modifySmsTemplate(request: ModifySmsTemplateRequest): Promise<ModifySmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySmsTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the review status of a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 300 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryCardSmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCardSmsTemplateResponse
   */
  async queryCardSmsTemplateWithOptions(request: QueryCardSmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<QueryCardSmsTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCardSmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QueryCardSmsTemplateResponse>(await this.callApi(params, req, runtime), new QueryCardSmsTemplateResponse({}));
  }

  /**
   * Queries the review status of a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 300 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryCardSmsTemplateRequest
   * @returns QueryCardSmsTemplateResponse
   */
  async queryCardSmsTemplate(request: QueryCardSmsTemplateRequest): Promise<QueryCardSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCardSmsTemplateWithOptions(request, runtime);
  }

  /**
   * Queries sent card messages.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 300 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryCardSmsTemplateReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCardSmsTemplateReportResponse
   */
  async queryCardSmsTemplateReportWithOptions(request: QueryCardSmsTemplateReportRequest, runtime: $dara.RuntimeOptions): Promise<QueryCardSmsTemplateReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.templateCodes)) {
      query["TemplateCodes"] = request.templateCodes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCardSmsTemplateReport",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QueryCardSmsTemplateReportResponse>(await this.callApi(params, req, runtime), new QueryCardSmsTemplateReportResponse({}));
  }

  /**
   * Queries sent card messages.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 300 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryCardSmsTemplateReportRequest
   * @returns QueryCardSmsTemplateReportResponse
   */
  async queryCardSmsTemplateReport(request: QueryCardSmsTemplateReportRequest): Promise<QueryCardSmsTemplateReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCardSmsTemplateReportWithOptions(request, runtime);
  }

  /**
   * 查询验证码签名
   * 
   * @param request - QueryExtCodeSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryExtCodeSignResponse
   */
  async queryExtCodeSignWithOptions(request: QueryExtCodeSignRequest, runtime: $dara.RuntimeOptions): Promise<QueryExtCodeSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extCode)) {
      query["ExtCode"] = request.extCode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryExtCodeSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QueryExtCodeSignResponse>(await this.callApi(params, req, runtime), new QueryExtCodeSignResponse({}));
  }

  /**
   * 查询验证码签名
   * 
   * @param request - QueryExtCodeSignRequest
   * @returns QueryExtCodeSignResponse
   */
  async queryExtCodeSign(request: QueryExtCodeSignRequest): Promise<QueryExtCodeSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryExtCodeSignWithOptions(request, runtime);
  }

  /**
   * Checks whether a mobile phone number can receive card messages.
   * 
   * @param tmpReq - QueryMobilesCardSupportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMobilesCardSupportResponse
   */
  async queryMobilesCardSupportWithOptions(tmpReq: QueryMobilesCardSupportRequest, runtime: $dara.RuntimeOptions): Promise<QueryMobilesCardSupportResponse> {
    tmpReq.validate();
    let request = new QueryMobilesCardSupportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.mobiles)) {
      request.mobilesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.mobiles, "Mobiles", "json");
    }

    let query = { };
    if (!$dara.isNull(request.mobilesShrink)) {
      query["Mobiles"] = request.mobilesShrink;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMobilesCardSupport",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QueryMobilesCardSupportResponse>(await this.callApi(params, req, runtime), new QueryMobilesCardSupportResponse({}));
  }

  /**
   * Checks whether a mobile phone number can receive card messages.
   * 
   * @param request - QueryMobilesCardSupportRequest
   * @returns QueryMobilesCardSupportResponse
   */
  async queryMobilesCardSupport(request: QueryMobilesCardSupportRequest): Promise<QueryMobilesCardSupportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMobilesCardSupportWithOptions(request, runtime);
  }

  /**
   * 点击明细查询
   * 
   * @param request - QueryPageSmartShortUrlLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPageSmartShortUrlLogResponse
   */
  async queryPageSmartShortUrlLogWithOptions(request: QueryPageSmartShortUrlLogRequest, runtime: $dara.RuntimeOptions): Promise<QueryPageSmartShortUrlLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createDateEnd)) {
      query["CreateDateEnd"] = request.createDateEnd;
    }

    if (!$dara.isNull(request.createDateStart)) {
      query["CreateDateStart"] = request.createDateStart;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.shortUrl)) {
      query["ShortUrl"] = request.shortUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPageSmartShortUrlLog",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QueryPageSmartShortUrlLogResponse>(await this.callApi(params, req, runtime), new QueryPageSmartShortUrlLogResponse({}));
  }

  /**
   * 点击明细查询
   * 
   * @param request - QueryPageSmartShortUrlLogRequest
   * @returns QueryPageSmartShortUrlLogResponse
   */
  async queryPageSmartShortUrlLog(request: QueryPageSmartShortUrlLogRequest): Promise<QueryPageSmartShortUrlLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPageSmartShortUrlLogWithOptions(request, runtime);
  }

  /**
   * Queries the information about a message.
   * 
   * @param request - QuerySendDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySendDetailsResponse
   */
  async querySendDetailsWithOptions(request: QuerySendDetailsRequest, runtime: $dara.RuntimeOptions): Promise<QuerySendDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sendDate)) {
      query["SendDate"] = request.sendDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySendDetails",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QuerySendDetailsResponse>(await this.callApi(params, req, runtime), new QuerySendDetailsResponse({}));
  }

  /**
   * Queries the information about a message.
   * 
   * @param request - QuerySendDetailsRequest
   * @returns QuerySendDetailsResponse
   */
  async querySendDetails(request: QuerySendDetailsRequest): Promise<QuerySendDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySendDetailsWithOptions(request, runtime);
  }

  /**
   * Queries message delivery details.
   * 
   * @remarks
   * You can call the operation to query message delivery details, including the number of delivered messages, the number of messages with delivery receipts, and the time that a message is sent. If a large number of messages are sent on the specified date, you can specify the number of items displayed on each page and the number of pages to view the details by page.
   * ### QPS limits
   * You can call this operation up to 20 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QuerySendStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySendStatisticsResponse
   */
  async querySendStatisticsWithOptions(request: QuerySendStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<QuerySendStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.isGlobe)) {
      query["IsGlobe"] = request.isGlobe;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySendStatistics",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QuerySendStatisticsResponse>(await this.callApi(params, req, runtime), new QuerySendStatisticsResponse({}));
  }

  /**
   * Queries message delivery details.
   * 
   * @remarks
   * You can call the operation to query message delivery details, including the number of delivered messages, the number of messages with delivery receipts, and the time that a message is sent. If a large number of messages are sent on the specified date, you can specify the number of items displayed on each page and the number of pages to view the details by page.
   * ### QPS limits
   * You can call this operation up to 20 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QuerySendStatisticsRequest
   * @returns QuerySendStatisticsResponse
   */
  async querySendStatistics(request: QuerySendStatisticsRequest): Promise<QuerySendStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySendStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the status of a short URL.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 20 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryShortUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryShortUrlResponse
   */
  async queryShortUrlWithOptions(request: QueryShortUrlRequest, runtime: $dara.RuntimeOptions): Promise<QueryShortUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.shortUrl)) {
      body["ShortUrl"] = request.shortUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<QueryShortUrlResponse>(await this.callApi(params, req, runtime), new QueryShortUrlResponse({}));
  }

  /**
   * Queries the status of a short URL.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 20 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryShortUrlRequest
   * @returns QueryShortUrlResponse
   */
  async queryShortUrl(request: QueryShortUrlRequest): Promise<QueryShortUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryShortUrlWithOptions(request, runtime);
  }

  /**
   * 查询单个资质详情
   * 
   * @param request - QuerySingleSmsQualificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySingleSmsQualificationResponse
   */
  async querySingleSmsQualificationWithOptions(request: QuerySingleSmsQualificationRequest, runtime: $dara.RuntimeOptions): Promise<QuerySingleSmsQualificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qualificationGroupId)) {
      query["QualificationGroupId"] = request.qualificationGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySingleSmsQualification",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QuerySingleSmsQualificationResponse>(await this.callApi(params, req, runtime), new QuerySingleSmsQualificationResponse({}));
  }

  /**
   * 查询单个资质详情
   * 
   * @param request - QuerySingleSmsQualificationRequest
   * @returns QuerySingleSmsQualificationResponse
   */
  async querySingleSmsQualification(request: QuerySingleSmsQualificationRequest): Promise<QuerySingleSmsQualificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySingleSmsQualificationWithOptions(request, runtime);
  }

  /**
   * 查询委托授权书
   * 
   * @param tmpReq - QuerySmsAuthorizationLetterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsAuthorizationLetterResponse
   */
  async querySmsAuthorizationLetterWithOptions(tmpReq: QuerySmsAuthorizationLetterRequest, runtime: $dara.RuntimeOptions): Promise<QuerySmsAuthorizationLetterResponse> {
    tmpReq.validate();
    let request = new QuerySmsAuthorizationLetterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.authorizationLetterIdList)) {
      request.authorizationLetterIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.authorizationLetterIdList, "AuthorizationLetterIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.authorizationLetterIdListShrink)) {
      query["AuthorizationLetterIdList"] = request.authorizationLetterIdListShrink;
    }

    if (!$dara.isNull(request.organizationCode)) {
      query["OrganizationCode"] = request.organizationCode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsAuthorizationLetter",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QuerySmsAuthorizationLetterResponse>(await this.callApi(params, req, runtime), new QuerySmsAuthorizationLetterResponse({}));
  }

  /**
   * 查询委托授权书
   * 
   * @param request - QuerySmsAuthorizationLetterRequest
   * @returns QuerySmsAuthorizationLetterResponse
   */
  async querySmsAuthorizationLetter(request: QuerySmsAuthorizationLetterRequest): Promise<QuerySmsAuthorizationLetterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsAuthorizationLetterWithOptions(request, runtime);
  }

  /**
   * 查询资质审核列表页
   * 
   * @param request - QuerySmsQualificationRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsQualificationRecordResponse
   */
  async querySmsQualificationRecordWithOptions(request: QuerySmsQualificationRecordRequest, runtime: $dara.RuntimeOptions): Promise<QuerySmsQualificationRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.companyName)) {
      query["CompanyName"] = request.companyName;
    }

    if (!$dara.isNull(request.legalPersonName)) {
      query["LegalPersonName"] = request.legalPersonName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.qualificationGroupName)) {
      query["QualificationGroupName"] = request.qualificationGroupName;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.useBySelf)) {
      query["UseBySelf"] = request.useBySelf;
    }

    if (!$dara.isNull(request.workOrderId)) {
      query["WorkOrderId"] = request.workOrderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsQualificationRecord",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QuerySmsQualificationRecordResponse>(await this.callApi(params, req, runtime), new QuerySmsQualificationRecordResponse({}));
  }

  /**
   * 查询资质审核列表页
   * 
   * @param request - QuerySmsQualificationRecordRequest
   * @returns QuerySmsQualificationRecordResponse
   */
  async querySmsQualificationRecord(request: QuerySmsQualificationRecordRequest): Promise<QuerySmsQualificationRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsQualificationRecordWithOptions(request, runtime);
  }

  /**
   * Queries the status of a signature.
   * 
   * @remarks
   * After you apply for an SMS signature, you can query its status by using the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm) or calling the operation. If the signature is rejected, you can modify the signature based on the reason why it is rejected.
   * ### QPS limits
   * You can call this API operation up to 500 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QuerySmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsSignResponse
   */
  async querySmsSignWithOptions(request: QuerySmsSignRequest, runtime: $dara.RuntimeOptions): Promise<QuerySmsSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QuerySmsSignResponse>(await this.callApi(params, req, runtime), new QuerySmsSignResponse({}));
  }

  /**
   * Queries the status of a signature.
   * 
   * @remarks
   * After you apply for an SMS signature, you can query its status by using the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm) or calling the operation. If the signature is rejected, you can modify the signature based on the reason why it is rejected.
   * ### QPS limits
   * You can call this API operation up to 500 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QuerySmsSignRequest
   * @returns QuerySmsSignResponse
   */
  async querySmsSign(request: QuerySmsSignRequest): Promise<QuerySmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsSignWithOptions(request, runtime);
  }

  /**
   * Queries message signatures by page.
   * 
   * @remarks
   * You can call this operation to query the details of message signatures, including the name, creation time, and approval status of each signature. If a message template is rejected, the reason is returned. Modify the message signature based on the reason.
   * ### QPS limit
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QuerySmsSignListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsSignListResponse
   */
  async querySmsSignListWithOptions(request: QuerySmsSignListRequest, runtime: $dara.RuntimeOptions): Promise<QuerySmsSignListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsSignList",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QuerySmsSignListResponse>(await this.callApi(params, req, runtime), new QuerySmsSignListResponse({}));
  }

  /**
   * Queries message signatures by page.
   * 
   * @remarks
   * You can call this operation to query the details of message signatures, including the name, creation time, and approval status of each signature. If a message template is rejected, the reason is returned. Modify the message signature based on the reason.
   * ### QPS limit
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QuerySmsSignListRequest
   * @returns QuerySmsSignListResponse
   */
  async querySmsSignList(request: QuerySmsSignListRequest): Promise<QuerySmsSignListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsSignListWithOptions(request, runtime);
  }

  /**
   * Queries the approval status of a message template.
   * 
   * @remarks
   * After you create a message template, you can call this operation to query the approval status of the template. If a message template is rejected, the reason is returned. Modify the message template based on the reason.
   * ### QPS limit
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @deprecated OpenAPI QuerySmsTemplate is deprecated, please use Dysmsapi::2017-05-25::GetSmsTemplate instead.
   * 
   * @param request - QuerySmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsTemplateResponse
   */
  // Deprecated
  async querySmsTemplateWithOptions(request: QuerySmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<QuerySmsTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QuerySmsTemplateResponse>(await this.callApi(params, req, runtime), new QuerySmsTemplateResponse({}));
  }

  /**
   * Queries the approval status of a message template.
   * 
   * @remarks
   * After you create a message template, you can call this operation to query the approval status of the template. If a message template is rejected, the reason is returned. Modify the message template based on the reason.
   * ### QPS limit
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @deprecated OpenAPI QuerySmsTemplate is deprecated, please use Dysmsapi::2017-05-25::GetSmsTemplate instead.
   * 
   * @param request - QuerySmsTemplateRequest
   * @returns QuerySmsTemplateResponse
   */
  // Deprecated
  async querySmsTemplate(request: QuerySmsTemplateRequest): Promise<QuerySmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsTemplateWithOptions(request, runtime);
  }

  /**
   * Queries message templates.
   * 
   * @remarks
   * You can call this operation to query the details of message templates, including the name, creation time, and approval status of each template. If a message template is rejected, the reason is returned. Modify the message template based on the reason.
   * ### QPS limit
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QuerySmsTemplateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsTemplateListResponse
   */
  async querySmsTemplateListWithOptions(request: QuerySmsTemplateListRequest, runtime: $dara.RuntimeOptions): Promise<QuerySmsTemplateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsTemplateList",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QuerySmsTemplateListResponse>(await this.callApi(params, req, runtime), new QuerySmsTemplateListResponse({}));
  }

  /**
   * Queries message templates.
   * 
   * @remarks
   * You can call this operation to query the details of message templates, including the name, creation time, and approval status of each template. If a message template is rejected, the reason is returned. Modify the message template based on the reason.
   * ### QPS limit
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QuerySmsTemplateListRequest
   * @returns QuerySmsTemplateListResponse
   */
  async querySmsTemplateList(request: QuerySmsTemplateListRequest): Promise<QuerySmsTemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsTemplateListWithOptions(request, runtime);
  }

  /**
   * 验证手机验证码
   * 
   * @param request - RequiredPhoneCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RequiredPhoneCodeResponse
   */
  async requiredPhoneCodeWithOptions(request: RequiredPhoneCodeRequest, runtime: $dara.RuntimeOptions): Promise<RequiredPhoneCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNo)) {
      query["PhoneNo"] = request.phoneNo;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RequiredPhoneCode",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RequiredPhoneCodeResponse>(await this.callApi(params, req, runtime), new RequiredPhoneCodeResponse({}));
  }

  /**
   * 验证手机验证码
   * 
   * @param request - RequiredPhoneCodeRequest
   * @returns RequiredPhoneCodeResponse
   */
  async requiredPhoneCode(request: RequiredPhoneCodeRequest): Promise<RequiredPhoneCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.requiredPhoneCodeWithOptions(request, runtime);
  }

  /**
   * Sends multiple card messages at a time.
   * 
   * @remarks
   * You can call the operation to send multiple card messages to a maximum of mobile phone numbers at a time. Different signatures and rollback settings can be specified for the mobile phone numbers.
   * ### QPS limit
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - SendBatchCardSmsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendBatchCardSmsResponse
   */
  async sendBatchCardSmsWithOptions(request: SendBatchCardSmsRequest, runtime: $dara.RuntimeOptions): Promise<SendBatchCardSmsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cardTemplateCode)) {
      query["CardTemplateCode"] = request.cardTemplateCode;
    }

    if (!$dara.isNull(request.cardTemplateParamJson)) {
      query["CardTemplateParamJson"] = request.cardTemplateParamJson;
    }

    if (!$dara.isNull(request.digitalTemplateCode)) {
      query["DigitalTemplateCode"] = request.digitalTemplateCode;
    }

    if (!$dara.isNull(request.digitalTemplateParamJson)) {
      query["DigitalTemplateParamJson"] = request.digitalTemplateParamJson;
    }

    if (!$dara.isNull(request.fallbackType)) {
      query["FallbackType"] = request.fallbackType;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.phoneNumberJson)) {
      query["PhoneNumberJson"] = request.phoneNumberJson;
    }

    if (!$dara.isNull(request.signNameJson)) {
      query["SignNameJson"] = request.signNameJson;
    }

    if (!$dara.isNull(request.smsTemplateCode)) {
      query["SmsTemplateCode"] = request.smsTemplateCode;
    }

    if (!$dara.isNull(request.smsTemplateParamJson)) {
      query["SmsTemplateParamJson"] = request.smsTemplateParamJson;
    }

    if (!$dara.isNull(request.smsUpExtendCodeJson)) {
      query["SmsUpExtendCodeJson"] = request.smsUpExtendCodeJson;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateParamJson)) {
      query["TemplateParamJson"] = request.templateParamJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendBatchCardSms",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SendBatchCardSmsResponse>(await this.callApi(params, req, runtime), new SendBatchCardSmsResponse({}));
  }

  /**
   * Sends multiple card messages at a time.
   * 
   * @remarks
   * You can call the operation to send multiple card messages to a maximum of mobile phone numbers at a time. Different signatures and rollback settings can be specified for the mobile phone numbers.
   * ### QPS limit
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - SendBatchCardSmsRequest
   * @returns SendBatchCardSmsResponse
   */
  async sendBatchCardSms(request: SendBatchCardSmsRequest): Promise<SendBatchCardSmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendBatchCardSmsWithOptions(request, runtime);
  }

  /**
   * Uses a single message template and multiple signatures to send messages to multiple recipients.
   * 
   * @remarks
   * You can call the operation to send messages to a maximum of 100 recipients at a time.
   * 
   * @param request - SendBatchSmsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendBatchSmsResponse
   */
  async sendBatchSmsWithOptions(request: SendBatchSmsRequest, runtime: $dara.RuntimeOptions): Promise<SendBatchSmsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.phoneNumberJson)) {
      body["PhoneNumberJson"] = request.phoneNumberJson;
    }

    if (!$dara.isNull(request.signNameJson)) {
      body["SignNameJson"] = request.signNameJson;
    }

    if (!$dara.isNull(request.smsUpExtendCodeJson)) {
      body["SmsUpExtendCodeJson"] = request.smsUpExtendCodeJson;
    }

    if (!$dara.isNull(request.templateParamJson)) {
      body["TemplateParamJson"] = request.templateParamJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendBatchSms",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SendBatchSmsResponse>(await this.callApi(params, req, runtime), new SendBatchSmsResponse({}));
  }

  /**
   * Uses a single message template and multiple signatures to send messages to multiple recipients.
   * 
   * @remarks
   * You can call the operation to send messages to a maximum of 100 recipients at a time.
   * 
   * @param request - SendBatchSmsRequest
   * @returns SendBatchSmsResponse
   */
  async sendBatchSms(request: SendBatchSmsRequest): Promise<SendBatchSmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendBatchSmsWithOptions(request, runtime);
  }

  /**
   * Sends a card message.
   * 
   * @remarks
   *   Make sure that the message template that you want to use has been approved. If the mobile phone number of a recipient does not support card messages, the SendCardSms operation allows the rollback feature to ensure successful delivery.
   * *   When you call the SendCardSms operation to send card messages, the operation checks whether the mobile phone numbers of the recipients support card messages. If the mobile phone numbers do not support card messages, you can specify whether to enable rollback. Otherwise, the card message cannot be delivered.
   * ### QPS limit
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - SendCardSmsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendCardSmsResponse
   */
  async sendCardSmsWithOptions(request: SendCardSmsRequest, runtime: $dara.RuntimeOptions): Promise<SendCardSmsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cardObjects)) {
      query["CardObjects"] = request.cardObjects;
    }

    if (!$dara.isNull(request.cardTemplateCode)) {
      query["CardTemplateCode"] = request.cardTemplateCode;
    }

    if (!$dara.isNull(request.digitalTemplateCode)) {
      query["DigitalTemplateCode"] = request.digitalTemplateCode;
    }

    if (!$dara.isNull(request.digitalTemplateParam)) {
      query["DigitalTemplateParam"] = request.digitalTemplateParam;
    }

    if (!$dara.isNull(request.fallbackType)) {
      query["FallbackType"] = request.fallbackType;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.smsTemplateCode)) {
      query["SmsTemplateCode"] = request.smsTemplateCode;
    }

    if (!$dara.isNull(request.smsTemplateParam)) {
      query["SmsTemplateParam"] = request.smsTemplateParam;
    }

    if (!$dara.isNull(request.smsUpExtendCode)) {
      query["SmsUpExtendCode"] = request.smsUpExtendCode;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateParam)) {
      query["TemplateParam"] = request.templateParam;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendCardSms",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SendCardSmsResponse>(await this.callApi(params, req, runtime), new SendCardSmsResponse({}));
  }

  /**
   * Sends a card message.
   * 
   * @remarks
   *   Make sure that the message template that you want to use has been approved. If the mobile phone number of a recipient does not support card messages, the SendCardSms operation allows the rollback feature to ensure successful delivery.
   * *   When you call the SendCardSms operation to send card messages, the operation checks whether the mobile phone numbers of the recipients support card messages. If the mobile phone numbers do not support card messages, you can specify whether to enable rollback. Otherwise, the card message cannot be delivered.
   * ### QPS limit
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - SendCardSmsRequest
   * @returns SendCardSmsResponse
   */
  async sendCardSms(request: SendCardSmsRequest): Promise<SendCardSmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendCardSmsWithOptions(request, runtime);
  }

  /**
   * Sends a message. Before you call this operation, submit a message signature and message template, and make sure that the signature and template are approved.
   * 
   * @remarks
   *   This operation is mainly used to send a single message. In special scenarios, you can send multiple messages with the same content to a maximum of 1,000 mobile numbers. Note that group sending may be delayed.
   * *   To send messages with different signatures and template content to multiple mobile numbers in a single request, call the [SendBatchSms](https://help.aliyun.com/document_detail/102364.html) operation.
   * *   You are charged for using Alibaba Cloud Short Message Service (SMS) based on the amount of messages sent. For more information, see [Pricing](https://www.aliyun.com/price/product#/sms/detail).
   * *   If your verification code signature and general-purpose signature have the same name, the system uses the general-purpose signature to send messages by default.
   * 
   * @param request - SendSmsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendSmsResponse
   */
  async sendSmsWithOptions(request: SendSmsRequest, runtime: $dara.RuntimeOptions): Promise<SendSmsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumbers)) {
      query["PhoneNumbers"] = request.phoneNumbers;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.smsUpExtendCode)) {
      query["SmsUpExtendCode"] = request.smsUpExtendCode;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateParam)) {
      query["TemplateParam"] = request.templateParam;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendSms",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SendSmsResponse>(await this.callApi(params, req, runtime), new SendSmsResponse({}));
  }

  /**
   * Sends a message. Before you call this operation, submit a message signature and message template, and make sure that the signature and template are approved.
   * 
   * @remarks
   *   This operation is mainly used to send a single message. In special scenarios, you can send multiple messages with the same content to a maximum of 1,000 mobile numbers. Note that group sending may be delayed.
   * *   To send messages with different signatures and template content to multiple mobile numbers in a single request, call the [SendBatchSms](https://help.aliyun.com/document_detail/102364.html) operation.
   * *   You are charged for using Alibaba Cloud Short Message Service (SMS) based on the amount of messages sent. For more information, see [Pricing](https://www.aliyun.com/price/product#/sms/detail).
   * *   If your verification code signature and general-purpose signature have the same name, the system uses the general-purpose signature to send messages by default.
   * 
   * @param request - SendSmsRequest
   * @returns SendSmsResponse
   */
  async sendSms(request: SendSmsRequest): Promise<SendSmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendSmsWithOptions(request, runtime);
  }

  /**
   * Reports the status of an OTP message to Alibaba Cloud SMS.
   * 
   * @remarks
   * Metrics:
   * *   Requested OTP messages
   * *   Verified OTP messages
   * An OTP conversion rate is calculated based on the following formula: OTP conversion rate = Number of verified OTP messages/Number of requested OTP messages.
   * > If you call the SmsConversion operation to query OTP conversion rates, your business may be affected. We recommend that you perform the following operations: 1. Call the SmsConversion operation in an asynchronous manner by configuring queues or events. 2. Manually degrade your services or use a circuit breaker to automatically degrade services.
   * 
   * @param request - SmsConversionIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SmsConversionIntlResponse
   */
  async smsConversionIntlWithOptions(request: SmsConversionIntlRequest, runtime: $dara.RuntimeOptions): Promise<SmsConversionIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conversionTime)) {
      query["ConversionTime"] = request.conversionTime;
    }

    if (!$dara.isNull(request.delivered)) {
      query["Delivered"] = request.delivered;
    }

    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SmsConversionIntl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SmsConversionIntlResponse>(await this.callApi(params, req, runtime), new SmsConversionIntlResponse({}));
  }

  /**
   * Reports the status of an OTP message to Alibaba Cloud SMS.
   * 
   * @remarks
   * Metrics:
   * *   Requested OTP messages
   * *   Verified OTP messages
   * An OTP conversion rate is calculated based on the following formula: OTP conversion rate = Number of verified OTP messages/Number of requested OTP messages.
   * > If you call the SmsConversion operation to query OTP conversion rates, your business may be affected. We recommend that you perform the following operations: 1. Call the SmsConversion operation in an asynchronous manner by configuring queues or events. 2. Manually degrade your services or use a circuit breaker to automatically degrade services.
   * 
   * @param request - SmsConversionIntlRequest
   * @returns SmsConversionIntlResponse
   */
  async smsConversionIntl(request: SmsConversionIntlRequest): Promise<SmsConversionIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.smsConversionIntlWithOptions(request, runtime);
  }

  /**
   * 创建资质对客openAPI
   * 
   * @param tmpReq - SubmitSmsQualificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSmsQualificationResponse
   */
  async submitSmsQualificationWithOptions(tmpReq: SubmitSmsQualificationRequest, runtime: $dara.RuntimeOptions): Promise<SubmitSmsQualificationResponse> {
    tmpReq.validate();
    let request = new SubmitSmsQualificationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.businessLicensePics)) {
      request.businessLicensePicsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.businessLicensePics, "BusinessLicensePics", "json");
    }

    if (!$dara.isNull(tmpReq.otherFiles)) {
      request.otherFilesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.otherFiles, "OtherFiles", "json");
    }

    let query = { };
    if (!$dara.isNull(request.adminIDCardExpDate)) {
      query["AdminIDCardExpDate"] = request.adminIDCardExpDate;
    }

    if (!$dara.isNull(request.adminIDCardFrontFace)) {
      query["AdminIDCardFrontFace"] = request.adminIDCardFrontFace;
    }

    if (!$dara.isNull(request.adminIDCardNo)) {
      query["AdminIDCardNo"] = request.adminIDCardNo;
    }

    if (!$dara.isNull(request.adminIDCardPic)) {
      query["AdminIDCardPic"] = request.adminIDCardPic;
    }

    if (!$dara.isNull(request.adminIDCardType)) {
      query["AdminIDCardType"] = request.adminIDCardType;
    }

    if (!$dara.isNull(request.adminName)) {
      query["AdminName"] = request.adminName;
    }

    if (!$dara.isNull(request.adminPhoneNo)) {
      query["AdminPhoneNo"] = request.adminPhoneNo;
    }

    if (!$dara.isNull(request.businessLicensePicsShrink)) {
      query["BusinessLicensePics"] = request.businessLicensePicsShrink;
    }

    if (!$dara.isNull(request.bussinessLicenseExpDate)) {
      query["BussinessLicenseExpDate"] = request.bussinessLicenseExpDate;
    }

    if (!$dara.isNull(request.certifyCode)) {
      query["CertifyCode"] = request.certifyCode;
    }

    if (!$dara.isNull(request.companyName)) {
      query["CompanyName"] = request.companyName;
    }

    if (!$dara.isNull(request.companyType)) {
      query["CompanyType"] = request.companyType;
    }

    if (!$dara.isNull(request.legalPersonIDCardNo)) {
      query["LegalPersonIDCardNo"] = request.legalPersonIDCardNo;
    }

    if (!$dara.isNull(request.legalPersonIDCardType)) {
      query["LegalPersonIDCardType"] = request.legalPersonIDCardType;
    }

    if (!$dara.isNull(request.legalPersonIdCardBackSide)) {
      query["LegalPersonIdCardBackSide"] = request.legalPersonIdCardBackSide;
    }

    if (!$dara.isNull(request.legalPersonIdCardEffTime)) {
      query["LegalPersonIdCardEffTime"] = request.legalPersonIdCardEffTime;
    }

    if (!$dara.isNull(request.legalPersonIdCardFrontSide)) {
      query["LegalPersonIdCardFrontSide"] = request.legalPersonIdCardFrontSide;
    }

    if (!$dara.isNull(request.legalPersonName)) {
      query["LegalPersonName"] = request.legalPersonName;
    }

    if (!$dara.isNull(request.organizationCode)) {
      query["OrganizationCode"] = request.organizationCode;
    }

    if (!$dara.isNull(request.otherFilesShrink)) {
      query["OtherFiles"] = request.otherFilesShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qualificationName)) {
      query["QualificationName"] = request.qualificationName;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.useBySelf)) {
      query["UseBySelf"] = request.useBySelf;
    }

    if (!$dara.isNull(request.whetherShare)) {
      query["WhetherShare"] = request.whetherShare;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSmsQualification",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SubmitSmsQualificationResponse>(await this.callApi(params, req, runtime), new SubmitSmsQualificationResponse({}));
  }

  /**
   * 创建资质对客openAPI
   * 
   * @param request - SubmitSmsQualificationRequest
   * @returns SubmitSmsQualificationResponse
   */
  async submitSmsQualification(request: SubmitSmsQualificationRequest): Promise<SubmitSmsQualificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSmsQualificationWithOptions(request, runtime);
  }

  /**
   * Attaches tags to a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * Attaches tags to a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Deletes tags from a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * Deletes tags from a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * 修改验证码签名
   * 
   * @param request - UpdateExtCodeSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExtCodeSignResponse
   */
  async updateExtCodeSignWithOptions(request: UpdateExtCodeSignRequest, runtime: $dara.RuntimeOptions): Promise<UpdateExtCodeSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.existExtCode)) {
      query["ExistExtCode"] = request.existExtCode;
    }

    if (!$dara.isNull(request.newExtCode)) {
      query["NewExtCode"] = request.newExtCode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExtCodeSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateExtCodeSignResponse>(await this.callApi(params, req, runtime), new UpdateExtCodeSignResponse({}));
  }

  /**
   * 修改验证码签名
   * 
   * @param request - UpdateExtCodeSignRequest
   * @returns UpdateExtCodeSignResponse
   */
  async updateExtCodeSign(request: UpdateExtCodeSignRequest): Promise<UpdateExtCodeSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateExtCodeSignWithOptions(request, runtime);
  }

  /**
   * 修改资质对客openAPI
   * 
   * @param tmpReq - UpdateSmsQualificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmsQualificationResponse
   */
  async updateSmsQualificationWithOptions(tmpReq: UpdateSmsQualificationRequest, runtime: $dara.RuntimeOptions): Promise<UpdateSmsQualificationResponse> {
    tmpReq.validate();
    let request = new UpdateSmsQualificationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.businessLicensePics)) {
      request.businessLicensePicsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.businessLicensePics, "BusinessLicensePics", "json");
    }

    if (!$dara.isNull(tmpReq.otherFiles)) {
      request.otherFilesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.otherFiles, "OtherFiles", "json");
    }

    let query = { };
    if (!$dara.isNull(request.adminIDCardExpDate)) {
      query["AdminIDCardExpDate"] = request.adminIDCardExpDate;
    }

    if (!$dara.isNull(request.adminIDCardFrontFace)) {
      query["AdminIDCardFrontFace"] = request.adminIDCardFrontFace;
    }

    if (!$dara.isNull(request.adminIDCardNo)) {
      query["AdminIDCardNo"] = request.adminIDCardNo;
    }

    if (!$dara.isNull(request.adminIDCardPic)) {
      query["AdminIDCardPic"] = request.adminIDCardPic;
    }

    if (!$dara.isNull(request.adminIDCardType)) {
      query["AdminIDCardType"] = request.adminIDCardType;
    }

    if (!$dara.isNull(request.adminName)) {
      query["AdminName"] = request.adminName;
    }

    if (!$dara.isNull(request.adminPhoneNo)) {
      query["AdminPhoneNo"] = request.adminPhoneNo;
    }

    if (!$dara.isNull(request.businessLicensePicsShrink)) {
      query["BusinessLicensePics"] = request.businessLicensePicsShrink;
    }

    if (!$dara.isNull(request.bussinessLicenseExpDate)) {
      query["BussinessLicenseExpDate"] = request.bussinessLicenseExpDate;
    }

    if (!$dara.isNull(request.certifyCode)) {
      query["CertifyCode"] = request.certifyCode;
    }

    if (!$dara.isNull(request.companyName)) {
      query["CompanyName"] = request.companyName;
    }

    if (!$dara.isNull(request.legalPersonIDCardNo)) {
      query["LegalPersonIDCardNo"] = request.legalPersonIDCardNo;
    }

    if (!$dara.isNull(request.legalPersonIDCardType)) {
      query["LegalPersonIDCardType"] = request.legalPersonIDCardType;
    }

    if (!$dara.isNull(request.legalPersonIdCardBackSide)) {
      query["LegalPersonIdCardBackSide"] = request.legalPersonIdCardBackSide;
    }

    if (!$dara.isNull(request.legalPersonIdCardEffTime)) {
      query["LegalPersonIdCardEffTime"] = request.legalPersonIdCardEffTime;
    }

    if (!$dara.isNull(request.legalPersonIdCardFrontSide)) {
      query["LegalPersonIdCardFrontSide"] = request.legalPersonIdCardFrontSide;
    }

    if (!$dara.isNull(request.legalPersonName)) {
      query["LegalPersonName"] = request.legalPersonName;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.otherFilesShrink)) {
      query["OtherFiles"] = request.otherFilesShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qualificationGroupId)) {
      query["QualificationGroupId"] = request.qualificationGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSmsQualification",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateSmsQualificationResponse>(await this.callApi(params, req, runtime), new UpdateSmsQualificationResponse({}));
  }

  /**
   * 修改资质对客openAPI
   * 
   * @param request - UpdateSmsQualificationRequest
   * @returns UpdateSmsQualificationResponse
   */
  async updateSmsQualification(request: UpdateSmsQualificationRequest): Promise<UpdateSmsQualificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmsQualificationWithOptions(request, runtime);
  }

  /**
   * Update Text SMS Signature
   * 
   * @remarks
   * - For details about the changes of this new interface and the original one, please refer to [Announcement on the Update of SMS Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - Only signatures that have not passed the review can be modified. Please refer to [Handling Suggestions for Failed SMS Reviews](https://help.aliyun.com/zh/sms/user-guide/causes-of-application-failures-and-suggestions?spm) and call this interface to modify and resubmit for review after modification.
   * - Signature information applied through the interface will be synchronized in the SMS service console. For operations related to signatures in the console, please see [SMS Signatures](https://help.aliyun.com/zh/sms/user-guide/create-signatures?spm).
   * 
   * @param tmpReq - UpdateSmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmsSignResponse
   */
  async updateSmsSignWithOptions(tmpReq: UpdateSmsSignRequest, runtime: $dara.RuntimeOptions): Promise<UpdateSmsSignResponse> {
    tmpReq.validate();
    let request = new UpdateSmsSignShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.moreData)) {
      request.moreDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.moreData, "MoreData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applySceneContent)) {
      query["ApplySceneContent"] = request.applySceneContent;
    }

    if (!$dara.isNull(request.authorizationLetterId)) {
      query["AuthorizationLetterId"] = request.authorizationLetterId;
    }

    if (!$dara.isNull(request.moreDataShrink)) {
      query["MoreData"] = request.moreDataShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.signSource)) {
      query["SignSource"] = request.signSource;
    }

    if (!$dara.isNull(request.signType)) {
      query["SignType"] = request.signType;
    }

    if (!$dara.isNull(request.thirdParty)) {
      query["ThirdParty"] = request.thirdParty;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSmsSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateSmsSignResponse>(await this.callApi(params, req, runtime), new UpdateSmsSignResponse({}));
  }

  /**
   * Update Text SMS Signature
   * 
   * @remarks
   * - For details about the changes of this new interface and the original one, please refer to [Announcement on the Update of SMS Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - Only signatures that have not passed the review can be modified. Please refer to [Handling Suggestions for Failed SMS Reviews](https://help.aliyun.com/zh/sms/user-guide/causes-of-application-failures-and-suggestions?spm) and call this interface to modify and resubmit for review after modification.
   * - Signature information applied through the interface will be synchronized in the SMS service console. For operations related to signatures in the console, please see [SMS Signatures](https://help.aliyun.com/zh/sms/user-guide/create-signatures?spm).
   * 
   * @param request - UpdateSmsSignRequest
   * @returns UpdateSmsSignResponse
   */
  async updateSmsSign(request: UpdateSmsSignRequest): Promise<UpdateSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmsSignWithOptions(request, runtime);
  }

  /**
   * Update Text SMS Template
   * 
   * @remarks
   * - For details about the changes of this new interface compared to the original one, please refer to [Announcement on SMS Service Update: Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - Only templates that have not passed the review can be modified. Please refer to [Handling Suggestions for Failed SMS Template Reviews](https://help.aliyun.com/zh/sms/user-guide/causes-of-application-failures-and-suggestions?spm=a2c4g.11186623.0.0.4bf5561ajcFtMQ) and call this interface to modify and resubmit for review.
   * - Modifications made through the interface will be synchronized in the SMS service console. For related operations on templates in the console, see [SMS Templates](https://help.aliyun.com/zh/sms/user-guide/message-templates/?spm=a2c4g.11186623.0.0.35a947464Itaxp).
   * ### QPS Limit
   * The single-user QPS limit for this interface is 1000 times/second. Exceeding this limit will result in API throttling, which may impact your business. Please make calls reasonably.
   * 
   * @param tmpReq - UpdateSmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmsTemplateResponse
   */
  async updateSmsTemplateWithOptions(tmpReq: UpdateSmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<UpdateSmsTemplateResponse> {
    tmpReq.validate();
    let request = new UpdateSmsTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.moreData)) {
      request.moreDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.moreData, "MoreData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applySceneContent)) {
      query["ApplySceneContent"] = request.applySceneContent;
    }

    if (!$dara.isNull(request.intlType)) {
      query["IntlType"] = request.intlType;
    }

    if (!$dara.isNull(request.moreDataShrink)) {
      query["MoreData"] = request.moreDataShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.relatedSignName)) {
      query["RelatedSignName"] = request.relatedSignName;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateContent)) {
      query["TemplateContent"] = request.templateContent;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateRule)) {
      query["TemplateRule"] = request.templateRule;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateSmsTemplateResponse>(await this.callApi(params, req, runtime), new UpdateSmsTemplateResponse({}));
  }

  /**
   * Update Text SMS Template
   * 
   * @remarks
   * - For details about the changes of this new interface compared to the original one, please refer to [Announcement on SMS Service Update: Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - Only templates that have not passed the review can be modified. Please refer to [Handling Suggestions for Failed SMS Template Reviews](https://help.aliyun.com/zh/sms/user-guide/causes-of-application-failures-and-suggestions?spm=a2c4g.11186623.0.0.4bf5561ajcFtMQ) and call this interface to modify and resubmit for review.
   * - Modifications made through the interface will be synchronized in the SMS service console. For related operations on templates in the console, see [SMS Templates](https://help.aliyun.com/zh/sms/user-guide/message-templates/?spm=a2c4g.11186623.0.0.35a947464Itaxp).
   * ### QPS Limit
   * The single-user QPS limit for this interface is 1000 times/second. Exceeding this limit will result in API throttling, which may impact your business. Please make calls reasonably.
   * 
   * @param request - UpdateSmsTemplateRequest
   * @returns UpdateSmsTemplateResponse
   */
  async updateSmsTemplate(request: UpdateSmsTemplateRequest): Promise<UpdateSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmsTemplateWithOptions(request, runtime);
  }

  /**
   * 发送手机验证码
   * 
   * @param request - ValidPhoneCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidPhoneCodeResponse
   */
  async validPhoneCodeWithOptions(request: ValidPhoneCodeRequest, runtime: $dara.RuntimeOptions): Promise<ValidPhoneCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certifyCode)) {
      query["CertifyCode"] = request.certifyCode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNo)) {
      query["PhoneNo"] = request.phoneNo;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidPhoneCode",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ValidPhoneCodeResponse>(await this.callApi(params, req, runtime), new ValidPhoneCodeResponse({}));
  }

  /**
   * 发送手机验证码
   * 
   * @param request - ValidPhoneCodeRequest
   * @returns ValidPhoneCodeResponse
   */
  async validPhoneCode(request: ValidPhoneCodeRequest): Promise<ValidPhoneCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validPhoneCodeWithOptions(request, runtime);
  }

}
