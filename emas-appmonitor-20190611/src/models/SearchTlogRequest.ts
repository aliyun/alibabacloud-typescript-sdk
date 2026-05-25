// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTlogRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 233588686
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1779206400000
   */
  beginDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ad-123-136
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1779206400000
   */
  endDate?: number;
  /**
   * @example
   * keyword
   */
  keyword?: string;
  /**
   * @example
   * ["debug","info","warning","error"]
   */
  levelJson?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * android
   */
  os?: string;
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
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      beginDate: 'BeginDate',
      deviceId: 'DeviceId',
      endDate: 'EndDate',
      keyword: 'Keyword',
      levelJson: 'LevelJson',
      os: 'Os',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      beginDate: 'number',
      deviceId: 'string',
      endDate: 'number',
      keyword: 'string',
      levelJson: 'string',
      os: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

