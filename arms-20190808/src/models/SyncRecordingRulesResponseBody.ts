// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncRecordingRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response struct.
   * 
   * @example
   * {     "data":[         "c06ca68cd16f14f52bb07772eda***",         "c33dd70a0ac184c1b879d807ab2***",         "c384cf7e4dcb543e6ac8c7d4dd3***",         "ce30f833bc4a04a56a06b070319***"     ],     "message":"设置RecordingRule失败的clusterIds",     "success":true }
   */
  data?: string;
  /**
   * @remarks
   * The message returned with the result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to locate logs and troubleshoot issues.
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

