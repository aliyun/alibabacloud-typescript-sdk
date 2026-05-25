// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTlogDeviceListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 24781204
   */
  appKey?: number;
  /**
   * @example
   * 1.0
   */
  appVersion?: string;
  /**
   * @example
   * 1778860800000
   */
  beginDate?: number;
  /**
   * @example
   * apple
   */
  brand?: string;
  city?: string;
  /**
   * @example
   * 1633159200000
   */
  createBeginDate?: number;
  /**
   * @example
   * 1633159200000
   */
  createEndDate?: number;
  /**
   * @example
   * 1779465599999
   */
  endDate?: number;
  /**
   * @example
   * Z70g612312124323Hzn4X
   */
  keyword?: string;
  /**
   * @example
   * iphone16
   */
  model?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * android
   */
  os?: string;
  /**
   * @example
   * 1.0
   */
  osVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * 1633159200000
   */
  updateBeginDate?: number;
  /**
   * @example
   * 1633159200000
   */
  updateEndDate?: number;
  /**
   * @example
   * userNick
   */
  userNick?: string;
  /**
   * @example
   * Z70g612312124323Hzn4X
   */
  utdid?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appVersion: 'AppVersion',
      beginDate: 'BeginDate',
      brand: 'Brand',
      city: 'City',
      createBeginDate: 'CreateBeginDate',
      createEndDate: 'CreateEndDate',
      endDate: 'EndDate',
      keyword: 'Keyword',
      model: 'Model',
      os: 'Os',
      osVersion: 'OsVersion',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      updateBeginDate: 'UpdateBeginDate',
      updateEndDate: 'UpdateEndDate',
      userNick: 'UserNick',
      utdid: 'Utdid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      appVersion: 'string',
      beginDate: 'number',
      brand: 'string',
      city: 'string',
      createBeginDate: 'number',
      createEndDate: 'number',
      endDate: 'number',
      keyword: 'string',
      model: 'string',
      os: 'string',
      osVersion: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      updateBeginDate: 'number',
      updateEndDate: 'number',
      userNick: 'string',
      utdid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

