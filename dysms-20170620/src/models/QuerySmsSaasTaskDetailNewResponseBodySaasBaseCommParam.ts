// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsSaasTaskDetailNewResponseBodySaasBaseCommParamParamList } from "./QuerySmsSaasTaskDetailNewResponseBodySaasBaseCommParamParamList";


export class QuerySmsSaasTaskDetailNewResponseBodySaasBaseCommParam extends $dara.Model {
  aliyunUid?: number;
  billCount?: number;
  byteCount?: number;
  clientIp?: string;
  custId?: number;
  cycleNum?: number;
  paramList?: QuerySmsSaasTaskDetailNewResponseBodySaasBaseCommParamParamList;
  partnerId?: number;
  signature?: string;
  smsContent?: string;
  smsTemplateCode?: string;
  taskErrorCase?: string;
  taskErrorSuggestion?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      billCount: 'BillCount',
      byteCount: 'ByteCount',
      clientIp: 'ClientIp',
      custId: 'CustId',
      cycleNum: 'CycleNum',
      paramList: 'ParamList',
      partnerId: 'PartnerId',
      signature: 'Signature',
      smsContent: 'SmsContent',
      smsTemplateCode: 'SmsTemplateCode',
      taskErrorCase: 'TaskErrorCase',
      taskErrorSuggestion: 'TaskErrorSuggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'number',
      billCount: 'number',
      byteCount: 'number',
      clientIp: 'string',
      custId: 'number',
      cycleNum: 'number',
      paramList: QuerySmsSaasTaskDetailNewResponseBodySaasBaseCommParamParamList,
      partnerId: 'number',
      signature: 'string',
      smsContent: 'string',
      smsTemplateCode: 'string',
      taskErrorCase: 'string',
      taskErrorSuggestion: 'string',
    };
  }

  validate() {
    if(this.paramList && typeof (this.paramList as any).validate === 'function') {
      (this.paramList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

