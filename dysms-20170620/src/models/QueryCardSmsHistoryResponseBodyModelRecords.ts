// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCardSmsHistoryResponseBodyModelRecords extends $dara.Model {
  acceptDate?: number;
  apiSend?: number;
  cardTemplateType?: string;
  customTmpCode?: string;
  description?: string;
  fuuId?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  isSupport?: number;
  outId?: string;
  pid?: number;
  receiveState?: number;
  receiver?: string;
  renderDate?: number;
  renderState?: number;
  shortUrl?: string;
  signName?: string;
  smsContent?: string;
  suggestion?: string;
  tmpCode?: string;
  tmpId?: string;
  tmpType?: number;
  tmpTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptDate: 'AcceptDate',
      apiSend: 'ApiSend',
      cardTemplateType: 'CardTemplateType',
      customTmpCode: 'CustomTmpCode',
      description: 'Description',
      fuuId: 'FuuId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      isSupport: 'IsSupport',
      outId: 'OutId',
      pid: 'Pid',
      receiveState: 'ReceiveState',
      receiver: 'Receiver',
      renderDate: 'RenderDate',
      renderState: 'RenderState',
      shortUrl: 'ShortUrl',
      signName: 'SignName',
      smsContent: 'SmsContent',
      suggestion: 'Suggestion',
      tmpCode: 'TmpCode',
      tmpId: 'TmpId',
      tmpType: 'TmpType',
      tmpTypeName: 'TmpTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptDate: 'number',
      apiSend: 'number',
      cardTemplateType: 'string',
      customTmpCode: 'string',
      description: 'string',
      fuuId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      isSupport: 'number',
      outId: 'string',
      pid: 'number',
      receiveState: 'number',
      receiver: 'string',
      renderDate: 'number',
      renderState: 'number',
      shortUrl: 'string',
      signName: 'string',
      smsContent: 'string',
      suggestion: 'string',
      tmpCode: 'string',
      tmpId: 'string',
      tmpType: 'number',
      tmpTypeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

