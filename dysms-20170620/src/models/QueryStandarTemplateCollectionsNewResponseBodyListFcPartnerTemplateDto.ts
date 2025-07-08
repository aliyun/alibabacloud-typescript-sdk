// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryStandarTemplateCollectionsNewResponseBodyListFcPartnerTemplateDTO extends $dara.Model {
  businessType?: number;
  fcTag?: number;
  i18n?: string;
  id?: number;
  isDeleted?: number;
  mcBusinessType?: number;
  mcCategory?: number;
  mcSignature?: string;
  messageTypeId?: number;
  opNick?: string;
  partnerId?: number;
  qualificationId?: number;
  remark?: string;
  signTemplateId?: number;
  signType?: number;
  sourceId?: string;
  speedLevel?: number;
  state?: number;
  templateCode?: string;
  templateContent?: string;
  templateId?: number;
  templateName?: string;
  templateParamRule?: string;
  templateSenderType?: number;
  templateType?: number;
  totalCountLimit?: number;
  voiceType?: number;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      fcTag: 'FcTag',
      i18n: 'I18n',
      id: 'Id',
      isDeleted: 'IsDeleted',
      mcBusinessType: 'McBusinessType',
      mcCategory: 'McCategory',
      mcSignature: 'McSignature',
      messageTypeId: 'MessageTypeId',
      opNick: 'OpNick',
      partnerId: 'PartnerId',
      qualificationId: 'QualificationId',
      remark: 'Remark',
      signTemplateId: 'SignTemplateId',
      signType: 'SignType',
      sourceId: 'SourceId',
      speedLevel: 'SpeedLevel',
      state: 'State',
      templateCode: 'TemplateCode',
      templateContent: 'TemplateContent',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateParamRule: 'TemplateParamRule',
      templateSenderType: 'TemplateSenderType',
      templateType: 'TemplateType',
      totalCountLimit: 'TotalCountLimit',
      voiceType: 'VoiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'number',
      fcTag: 'number',
      i18n: 'string',
      id: 'number',
      isDeleted: 'number',
      mcBusinessType: 'number',
      mcCategory: 'number',
      mcSignature: 'string',
      messageTypeId: 'number',
      opNick: 'string',
      partnerId: 'number',
      qualificationId: 'number',
      remark: 'string',
      signTemplateId: 'number',
      signType: 'number',
      sourceId: 'string',
      speedLevel: 'number',
      state: 'number',
      templateCode: 'string',
      templateContent: 'string',
      templateId: 'number',
      templateName: 'string',
      templateParamRule: 'string',
      templateSenderType: 'number',
      templateType: 'number',
      totalCountLimit: 'number',
      voiceType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

