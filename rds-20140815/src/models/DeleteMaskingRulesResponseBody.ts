// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMaskingRulesResponseBody extends $dara.Model {
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
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 5EEE1ED1-A459-38D2-840C-0C49********
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded
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

