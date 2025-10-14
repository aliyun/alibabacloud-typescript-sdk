// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopInstancesResponseBody extends $dara.Model {
  accessDeniedDetail?: { [key: string]: string };
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
   * "XXX"
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
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
      accessDeniedDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

