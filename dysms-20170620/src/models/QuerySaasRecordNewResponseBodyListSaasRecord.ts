// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySaasRecordNewResponseBodyListSaasRecord extends $dara.Model {
  bizType?: string;
  detailPkId?: number;
  indexCol?: string;
  lastDealDate?: string;
  recordBizExpireDate?: string;
  result?: string;
  resultDesc?: string;
  saasContent?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      detailPkId: 'DetailPkId',
      indexCol: 'IndexCol',
      lastDealDate: 'LastDealDate',
      recordBizExpireDate: 'RecordBizExpireDate',
      result: 'Result',
      resultDesc: 'ResultDesc',
      saasContent: 'SaasContent',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      detailPkId: 'number',
      indexCol: 'string',
      lastDealDate: 'string',
      recordBizExpireDate: 'string',
      result: 'string',
      resultDesc: 'string',
      saasContent: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

