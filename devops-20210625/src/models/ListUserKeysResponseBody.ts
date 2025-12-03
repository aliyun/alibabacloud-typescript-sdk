// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserKeysResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  createdAt?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  expireTime?: string;
  /**
   * @example
   * xxx
   */
  fingerPrint?: string;
  /**
   * @example
   * 5240
   */
  id?: number;
  /**
   * @example
   * ALL
   */
  keyScope?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  lastUsedTime?: string;
  /**
   * @example
   * xxx
   */
  publicKey?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      expireTime: 'expireTime',
      fingerPrint: 'fingerPrint',
      id: 'id',
      keyScope: 'keyScope',
      lastUsedTime: 'lastUsedTime',
      publicKey: 'publicKey',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      expireTime: 'string',
      fingerPrint: 'string',
      id: 'number',
      keyScope: 'string',
      lastUsedTime: 'string',
      publicKey: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserKeysResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * Openapi.RequestError
   */
  errorMessage?: string;
  /**
   * @example
   * F7B85D1B-D1C2-140F-A039-341859F130B9
   */
  requestId?: string;
  result?: ListUserKeysResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListUserKeysResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

