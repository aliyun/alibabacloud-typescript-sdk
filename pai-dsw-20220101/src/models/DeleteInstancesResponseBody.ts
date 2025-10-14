// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstancesResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: { [key: string]: any };
  /**
   * @example
   * PermissionError
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  instanceIds?: string[];
  /**
   * @example
   * The instance can not be deleted.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AA527C1A-F259-5E53-A4DD-D0941193F02D
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceIds: 'InstanceIds',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
      httpStatusCode: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail) {
      $dara.Model.validateMap(this.accessDeniedDetail);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

