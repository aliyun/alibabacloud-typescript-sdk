// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySendFailDetailsNewResponseBodyListSmsSendDetailResponse extends $dara.Model {
  blackListStatus?: number;
  content?: string;
  errCode?: string;
  errCodeDesc?: string;
  outId?: string;
  phoneNum?: string;
  receiveDateStr?: string;
  sendDateStr?: string;
  sendStatus?: number;
  suggestion?: string;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      blackListStatus: 'BlackListStatus',
      content: 'Content',
      errCode: 'ErrCode',
      errCodeDesc: 'ErrCodeDesc',
      outId: 'OutId',
      phoneNum: 'PhoneNum',
      receiveDateStr: 'ReceiveDateStr',
      sendDateStr: 'SendDateStr',
      sendStatus: 'SendStatus',
      suggestion: 'Suggestion',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackListStatus: 'number',
      content: 'string',
      errCode: 'string',
      errCodeDesc: 'string',
      outId: 'string',
      phoneNum: 'string',
      receiveDateStr: 'string',
      sendDateStr: 'string',
      sendStatus: 'number',
      suggestion: 'string',
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

