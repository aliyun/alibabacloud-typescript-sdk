// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID, which can be used for end-to-end diagnosis
   * 
   * @example
   * B149FD9C-ED5C-5765-B3AD-05AA4A4D64D7
   */
  requestId?: string;
  /**
   * @remarks
   * error code
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * List of areas
   * 
   * @example
   * ["cn-hangzhou", "cn-shengzhen"]
   */
  data?: string[];
  /**
   * @remarks
   * Description of the error code; empty if no error occurred
   * 
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

