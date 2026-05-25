// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTlogCollectListRequest extends $dara.Model {
  /**
   * @remarks
   * appKey
   * 
   * This parameter is required.
   * 
   * @example
   * 24780725
   */
  appKey?: number;
  /**
   * @example
   * 1.0
   */
  appVersion?: string;
  /**
   * @example
   * admin
   */
  author?: string;
  /**
   * @example
   * 1777996800000
   */
  beginDate?: number;
  /**
   * @example
   * hangzhou
   */
  city?: string;
  /**
   * @example
   * 1777996800000
   */
  createBeginDate?: number;
  /**
   * @example
   * 1777996800000
   */
  createEndDate?: number;
  /**
   * @example
   * ad-0002nzx5r86f7jzrv0nx-91
   */
  deviceId?: string;
  /**
   * @example
   * 1777996800000
   */
  endDate?: number;
  /**
   * @example
   * user_nick
   */
  keyword?: string;
  /**
   * @example
   * iphone
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
   * 1
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
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * positiveComment
   */
  positiveComment?: string;
  /**
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @example
   * START
   */
  status?: string;
  /**
   * @example
   * 1777996800000
   */
  updateBeginDate?: number;
  /**
   * @example
   * 1777996800000
   */
  updateEndDate?: number;
  /**
   * @example
   * user_nick
   */
  userNick?: string;
  /**
   * @example
   * Z70g6V/MXJ8DABtD53eHzn4X
   */
  utdid?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appVersion: 'AppVersion',
      author: 'Author',
      beginDate: 'BeginDate',
      city: 'City',
      createBeginDate: 'CreateBeginDate',
      createEndDate: 'CreateEndDate',
      deviceId: 'DeviceId',
      endDate: 'EndDate',
      keyword: 'Keyword',
      model: 'Model',
      os: 'Os',
      osVersion: 'OsVersion',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      positiveComment: 'PositiveComment',
      sourceType: 'SourceType',
      status: 'Status',
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
      author: 'string',
      beginDate: 'number',
      city: 'string',
      createBeginDate: 'number',
      createEndDate: 'number',
      deviceId: 'string',
      endDate: 'number',
      keyword: 'string',
      model: 'string',
      os: 'string',
      osVersion: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      positiveComment: 'string',
      sourceType: 'string',
      status: 'string',
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

