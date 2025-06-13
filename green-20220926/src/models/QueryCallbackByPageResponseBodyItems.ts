// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCallbackByPageResponseBodyItems extends $dara.Model {
  /**
   * @example
   * SHA256
   */
  cryptType?: string;
  /**
   * @example
   * 2024-06-03 15:20:14
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-06-03 15:20:14
   */
  gmtModified?: string;
  /**
   * @example
   * 1697
   */
  id?: number;
  name?: string;
  /**
   * @example
   * all
   */
  scope?: string;
  /**
   * @remarks
   * Seed。
   * 
   * @example
   * cb6gYS8GXj4Vn4Y4FN0Y8R5M-1x46Mq
   */
  seed?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 12161*****398900
   */
  uid?: string;
  /**
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

