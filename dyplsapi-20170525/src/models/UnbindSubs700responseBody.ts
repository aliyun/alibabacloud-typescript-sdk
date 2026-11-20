// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindSubs700ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the permission check failure.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code of the API request. Valid values:
   * - OK: The request is successful.
   * - Other error codes. For more information, see [API error codes](https://help.aliyun.com/document_detail/59892.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The default response format. This parameter has no actual value.
   * 
   * @example
   * {}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9297B722-A016-43FB-B51A-E54050******
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether the API call is successful. Valid values:
   * - true: The API call is successful.
   * - false: The API call fails.
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

