// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpRiskDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the high-risk sensitive data. The information includes totalCount and opRiskDatas. opRiskDatas includes the following parameters:
   * 
   * *   sensType: the type of the sensitive data
   * *   sensLevel: the sensitivity level of the sensitive data
   * *   opType: the type of the operation
   * *   sql: the SQL statement that is executed
   * *   opAccount: the account that is used to perform the operation
   * *   opTime: the time when the operation was performed
   * 
   * @example
   * {
   *       "opRiskDatas": [
   *             {
   *                   "riskType": "Hierarchical dimension, EMR engine dimension and project dimension, EMR engine project dimension operation data, export method dimension, EMR engine",
   *                   "opTime": "2021-01-04 23:39:13",
   *                   "opType": "SQL_SELECT",
   *                   "opAccount": "user",
   *                   "sensType": "Email/name/mobile phone number",
   *                   "sql": "SELECT * FROM default.jiade_1219_test_create LIMIT 20"
   *             }
   *       ],
   *       "totalCount": 499
   * }
   */
  riskData?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskData: 'RiskData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

