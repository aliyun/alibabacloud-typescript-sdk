// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySendDetailsByPhoneNumNewResponseBodyListSmsSendDetailResponse extends $dara.Model {
  applyDateStr?: string;
  billCount?: number;
  bizId?: string;
  bizType?: number;
  blackListStatus?: number;
  content?: string;
  errCode?: string;
  errCodeDesc?: string;
  innerErrCode?: string;
  outId?: string;
  phoneNum?: string;
  receiveDateStr?: string;
  sendDateStr?: string;
  sendStatus?: number;
  smsLength?: number;
  statisticsStatus?: number;
  suggestion?: string;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      applyDateStr: 'ApplyDateStr',
      billCount: 'BillCount',
      bizId: 'BizId',
      bizType: 'BizType',
      blackListStatus: 'BlackListStatus',
      content: 'Content',
      errCode: 'ErrCode',
      errCodeDesc: 'ErrCodeDesc',
      innerErrCode: 'InnerErrCode',
      outId: 'OutId',
      phoneNum: 'PhoneNum',
      receiveDateStr: 'ReceiveDateStr',
      sendDateStr: 'SendDateStr',
      sendStatus: 'SendStatus',
      smsLength: 'SmsLength',
      statisticsStatus: 'StatisticsStatus',
      suggestion: 'Suggestion',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyDateStr: 'string',
      billCount: 'number',
      bizId: 'string',
      bizType: 'number',
      blackListStatus: 'number',
      content: 'string',
      errCode: 'string',
      errCodeDesc: 'string',
      innerErrCode: 'string',
      outId: 'string',
      phoneNum: 'string',
      receiveDateStr: 'string',
      sendDateStr: 'string',
      sendStatus: 'number',
      smsLength: 'number',
      statisticsStatus: 'number',
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

