// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarRecordInOutputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution result of the component action.
   * 
   * @example
   * {
   *     "actionUuid": "3896a25d-4967-493c-942e-4e60f27da1f7-xxxxx",
   *     "outputSummary": {
   *         "datalist": [
   *             {
   *                 "a": "a"
   *             }
   *         ],
   *         "total_data_successful": 1,
   *         "total_data": 1,
   *         "total_exe_successful": 1,
   *         "total_exe": 1,
   *         "total_data_with_dup": 1,
   *         "status": true
   *     },
   *     "outputSchema": {
   *         "a": "String",
   *         "startTime": "DateTime"
   *     },
   *     "inputParams": {
   *         "inputData": [
   *             {
   *                 "outputFields": {
   *                     "a": "a"
   *                 }
   *             }
   *         ],
   *         "totalSize": 1
   *     },
   *     "startTime": "2023-11-13 17:47:28.645",
   *     "taskName": "92af3c79-1754-4646-9366-9ddbxxxxx"
   * }
   */
  inOutputInfo?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 372D8B41-AF8D-573A-9B3F-0924950F241F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      inOutputInfo: 'InOutputInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inOutputInfo: 'string',
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

