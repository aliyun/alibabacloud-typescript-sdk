// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMaskingRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned data
   */
  data?: { [key: string]: string };
  /**
   * @remarks
   * Return message
   * 
   * @example
   * successful create
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 792233B1-76B8-5A01-92B4-**********864
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Return values:
   * 
   * - **true**: Succeeded
   * - **false**: Failed
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      message: 'string',
      requestId: 'string',
      success: 'string',
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

