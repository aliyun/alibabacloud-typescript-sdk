// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsTemplateByCodeNewResponseBodyApplicationScene } from "./QuerySmsTemplateByCodeNewResponseBodyApplicationScene";
import { QuerySmsTemplateByCodeNewResponseBodyFileIds } from "./QuerySmsTemplateByCodeNewResponseBodyFileIds";
import { QuerySmsTemplateByCodeNewResponseBodyFileUrlList } from "./QuerySmsTemplateByCodeNewResponseBodyFileUrlList";
import { QuerySmsTemplateByCodeNewResponseBodyMoreDataFileIds } from "./QuerySmsTemplateByCodeNewResponseBodyMoreDataFileIds";
import { QuerySmsTemplateByCodeNewResponseBodyMoreDataFileUrls } from "./QuerySmsTemplateByCodeNewResponseBodyMoreDataFileUrls";
import { QuerySmsTemplateByCodeNewResponseBodyMoreDataOssKeys } from "./QuerySmsTemplateByCodeNewResponseBodyMoreDataOssKeys";
import { QuerySmsTemplateByCodeNewResponseBodyOssKeys } from "./QuerySmsTemplateByCodeNewResponseBodyOssKeys";
import { QuerySmsTemplateByCodeNewResponseBodyTags } from "./QuerySmsTemplateByCodeNewResponseBodyTags";


export class QuerySmsTemplateByCodeNewResponseBody extends $dara.Model {
  accessToken?: string;
  applicationScene?: QuerySmsTemplateByCodeNewResponseBodyApplicationScene;
  auditInfo?: string;
  auditRemarkInfo?: string;
  bizType?: string;
  fileIds?: QuerySmsTemplateByCodeNewResponseBodyFileIds;
  fileUrlList?: QuerySmsTemplateByCodeNewResponseBodyFileUrlList;
  from?: string;
  gmtCreateStr?: string;
  intlType?: number;
  moreDataFileIds?: QuerySmsTemplateByCodeNewResponseBodyMoreDataFileIds;
  moreDataFileUrls?: QuerySmsTemplateByCodeNewResponseBodyMoreDataFileUrls;
  moreDataOssKeys?: QuerySmsTemplateByCodeNewResponseBodyMoreDataOssKeys;
  needAuthorized?: boolean;
  openTag?: boolean;
  orderId?: string;
  ossKeys?: QuerySmsTemplateByCodeNewResponseBodyOssKeys;
  productUrl?: string;
  relatedSignName?: string;
  remark?: string;
  requestId?: string;
  rmdTemplateId?: number;
  rmdTemplateVariableNum?: number;
  signName?: string;
  signType?: number;
  smsContent?: string;
  tags?: QuerySmsTemplateByCodeNewResponseBodyTags;
  templateCode?: string;
  templateName?: string;
  templateRule?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      applicationScene: 'ApplicationScene',
      auditInfo: 'AuditInfo',
      auditRemarkInfo: 'AuditRemarkInfo',
      bizType: 'BizType',
      fileIds: 'FileIds',
      fileUrlList: 'FileUrlList',
      from: 'From',
      gmtCreateStr: 'GmtCreateStr',
      intlType: 'IntlType',
      moreDataFileIds: 'MoreDataFileIds',
      moreDataFileUrls: 'MoreDataFileUrls',
      moreDataOssKeys: 'MoreDataOssKeys',
      needAuthorized: 'NeedAuthorized',
      openTag: 'OpenTag',
      orderId: 'OrderId',
      ossKeys: 'OssKeys',
      productUrl: 'ProductUrl',
      relatedSignName: 'RelatedSignName',
      remark: 'Remark',
      requestId: 'RequestId',
      rmdTemplateId: 'RmdTemplateId',
      rmdTemplateVariableNum: 'RmdTemplateVariableNum',
      signName: 'SignName',
      signType: 'SignType',
      smsContent: 'SmsContent',
      tags: 'Tags',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      templateRule: 'TemplateRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      applicationScene: QuerySmsTemplateByCodeNewResponseBodyApplicationScene,
      auditInfo: 'string',
      auditRemarkInfo: 'string',
      bizType: 'string',
      fileIds: QuerySmsTemplateByCodeNewResponseBodyFileIds,
      fileUrlList: QuerySmsTemplateByCodeNewResponseBodyFileUrlList,
      from: 'string',
      gmtCreateStr: 'string',
      intlType: 'number',
      moreDataFileIds: QuerySmsTemplateByCodeNewResponseBodyMoreDataFileIds,
      moreDataFileUrls: QuerySmsTemplateByCodeNewResponseBodyMoreDataFileUrls,
      moreDataOssKeys: QuerySmsTemplateByCodeNewResponseBodyMoreDataOssKeys,
      needAuthorized: 'boolean',
      openTag: 'boolean',
      orderId: 'string',
      ossKeys: QuerySmsTemplateByCodeNewResponseBodyOssKeys,
      productUrl: 'string',
      relatedSignName: 'string',
      remark: 'string',
      requestId: 'string',
      rmdTemplateId: 'number',
      rmdTemplateVariableNum: 'number',
      signName: 'string',
      signType: 'number',
      smsContent: 'string',
      tags: QuerySmsTemplateByCodeNewResponseBodyTags,
      templateCode: 'string',
      templateName: 'string',
      templateRule: 'string',
    };
  }

  validate() {
    if(this.applicationScene && typeof (this.applicationScene as any).validate === 'function') {
      (this.applicationScene as any).validate();
    }
    if(this.fileIds && typeof (this.fileIds as any).validate === 'function') {
      (this.fileIds as any).validate();
    }
    if(this.fileUrlList && typeof (this.fileUrlList as any).validate === 'function') {
      (this.fileUrlList as any).validate();
    }
    if(this.moreDataFileIds && typeof (this.moreDataFileIds as any).validate === 'function') {
      (this.moreDataFileIds as any).validate();
    }
    if(this.moreDataFileUrls && typeof (this.moreDataFileUrls as any).validate === 'function') {
      (this.moreDataFileUrls as any).validate();
    }
    if(this.moreDataOssKeys && typeof (this.moreDataOssKeys as any).validate === 'function') {
      (this.moreDataOssKeys as any).validate();
    }
    if(this.ossKeys && typeof (this.ossKeys as any).validate === 'function') {
      (this.ossKeys as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

