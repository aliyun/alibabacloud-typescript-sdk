// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishedAppInfoRequest extends $dara.Model {
  /**
   * @example
   * Microsoft Word
   */
  appName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * 1
   */
  categoryId?: number;
  /**
   * @example
   * 1
   */
  categoryType?: number;
  /**
   * @example
   * 17b38aaa-761f-44c5-9862-2ad0f5025d15
   */
  clientId?: string;
  /**
   * @example
   * 125.80.132.13
   */
  clientIp?: string;
  /**
   * @example
   * windows_\\"Windows 10 Enterprise\\" 10.0 (Build 14393)
   */
  clientOS?: string;
  /**
   * @example
   * 2.0.1-D-20211008.101607
   */
  clientVersion?: string;
  /**
   * @example
   * test.test
   */
  endUserId?: string;
  /**
   * @example
   * cn-shanghai
   */
  loginRegionId?: string;
  /**
   * @example
   * v189fa78c1aff77a0483b16497517322299131027b85bb84bbdc0871988ce8296d8fd891e2fdeaded3bd75f81f639acee8
   */
  loginToken?: string;
  orderParam?: string;
  /**
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @example
   * c261a6a1-e242-4f4b-813c-5fe807e49f03
   */
  sessionId?: string;
  sortType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      bizRegionId: 'BizRegionId',
      categoryId: 'CategoryId',
      categoryType: 'CategoryType',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      orderParam: 'OrderParam',
      productType: 'ProductType',
      sessionId: 'SessionId',
      sortType: 'SortType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      bizRegionId: 'string',
      categoryId: 'number',
      categoryType: 'number',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      orderParam: 'string',
      productType: 'string',
      sessionId: 'string',
      sortType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

