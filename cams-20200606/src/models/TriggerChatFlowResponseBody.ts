// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerChatFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of access denial
   * 
   * @example
   * 无
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * 无
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   * 
   * @example
   * {}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * Error description message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 无
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful.
   * - **true**: Call succeeded.
   * - **false**: Call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

