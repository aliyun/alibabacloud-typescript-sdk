// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncRecordingRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * 状态码。200表示成功。
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The struct returned.
   * 
   * @example
   * { "data":[ "c06ca68cd16f14f52bb07772eda\\*\\*\\*", "c33dd70a0ac184c1b879d807ab2\\*\\*\\*", "c384cf7e4dcb543e6ac8c7d4dd3\\*\\*\\*", "ce30f833bc4a04a56a06b070319\\*\\*\\*" ], "message":"IDs of Clusters to which the aggregation rule failed to be synchronized", "success":true }
   */
  data?: string;
  /**
   * @remarks
   * 返回结果的提示信息。
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 1A9C645C-C83F-4C9D-8CCB-29BEC9E1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
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

