// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAddressRecoverSuspendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denial details.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Example value example value
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * Example value
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The returned message. If the request is successful, a success message is returned. If the request fails, the cause of the failure is returned.
   * 
   * @example
   * Example value example value
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * Example value example value example value
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. A value of true indicates success. A value of false indicates failure.
   * 
   * @example
   * false
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

