// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallbackResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Encryption algorithm.
   * 
   * @example
   * SHA256
   */
  cryptType?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2024-06-03 15:20:14
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 2024-06-03 15:20:14
   */
  gmtModified?: string;
  /**
   * @remarks
   * Primary key ID.
   * 
   * @example
   * 11234
   */
  id?: number;
  /**
   * @remarks
   * Name.
   * 
   * @example
   * 回调通知
   */
  name?: string;
  /**
   * @remarks
   * Result scope.
   * 
   * @example
   * all
   */
  scope?: string;
  /**
   * @remarks
   * Seed.
   * 
   * @example
   * cbupVnpBjkgjFxfINMHKkrHS-1zZPUm
   */
  seed?: string;
  /**
   * @remarks
   * UID.
   * 
   * @example
   * 16537*****831937
   */
  uid?: string;
  /**
   * @remarks
   * Callback URL.
   * 
   * @example
   * https://console.aliyun.com/
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      cryptType: 'CryptType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      scope: 'Scope',
      seed: 'Seed',
      uid: 'Uid',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cryptType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      scope: 'string',
      seed: 'string',
      uid: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallbackResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned data.
   */
  data?: ListCallbackResponseBodyData[];
  /**
   * @remarks
   * Backend-assigned ID, used to uniquely identify a request. Can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListCallbackResponseBodyData },
      requestId: 'string',
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

