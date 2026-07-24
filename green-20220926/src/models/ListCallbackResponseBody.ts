// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallbackResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm.
   * 
   * @example
   * SHA256
   */
  cryptType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-06-03 15:20:14
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2024-06-03 15:20:14
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 11234
   */
  id?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * 回调通知
   */
  name?: string;
  /**
   * @remarks
   * The result scope.
   * 
   * @example
   * all
   */
  scope?: string;
  /**
   * @remarks
   * Seed。
   * 
   * @example
   * cbupVnpBjkgjFxfINMHKkrHS-1zZPUm
   */
  seed?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 16537*****831937
   */
  uid?: string;
  /**
   * @remarks
   * The callback URL.
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
   * The returned data.
   */
  data?: ListCallbackResponseBodyData[];
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify the request. You can use this ID to troubleshoot issues.
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

