// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCallbackResponseBody extends $dara.Model {
  /**
   * @example
   * SHA256
   */
  cryptType?: string;
  /**
   * @example
   * false
   */
  existsOssCheckTask?: boolean;
  /**
   * @example
   * 2022-11-30 16:30:29
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-06-03 15:20:14
   */
  gmtModified?: string;
  /**
   * @example
   * 11234
   */
  id?: number;
  name?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
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
   * cb2MysbJTAAIf6gB3u4vpIEU-1ySnnf
   */
  seed?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 19964*****086772
   */
  uid?: string;
  /**
   * @example
   * https://www.aliyuncs.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      cryptType: 'CryptType',
      existsOssCheckTask: 'ExistsOssCheckTask',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      requestId: 'RequestId',
      scope: 'Scope',
      seed: 'Seed',
      uid: 'Uid',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cryptType: 'string',
      existsOssCheckTask: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      requestId: 'string',
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

