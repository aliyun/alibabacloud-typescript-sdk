// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContactsByIdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
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
   * Example value
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Example value example value
   */
  message?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * True
   */
  model?: { [key: string]: any };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * Example value example value
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.model) {
      $dara.Model.validateMap(this.model);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

