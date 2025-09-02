// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpSensitiveDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the access records of the sensitive data. The information includes totalCount and opRiskDatas. opRiskDatas includes the following parameters:
   * 
   * *   sensType: the type of the sensitive data.
   * *   sensLevel: the sensitivity level of the sensitive data. A larger value indicates a higher sensitivity level.
   * *   opType: the type of the operation.
   * *   sql: the SQL statement that is executed.
   * *   opAccount: the account that is used to perform the operation.
   * *   opTime: the time when the operation was performed.
   * 
   * @example
   * "opSensDatas": [       {         "sensLevel": "L4",         "opTime": "2021-02-07 00:14:51",         "opAccount": "ALIYUN$dsg_test",         "sensType": "Mobile phone number",         "sql": "select * from dsg_demo.tbl_phonebook where phone_no = &#39;1331111****&#39;;"       }     ],     "totalCount": 6
   */
  opSensitiveData?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      opSensitiveData: 'OpSensitiveData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opSensitiveData: 'string',
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

