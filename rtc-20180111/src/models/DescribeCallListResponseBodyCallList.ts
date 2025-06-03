// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCallListResponseBodyCallList extends $dara.Model {
  /**
   * @remarks
   * App ID。
   * 
   * @example
   * 9qb1****
   */
  appId?: string;
  /**
   * @example
   * 0
   */
  badExpUserCnt?: number;
  /**
   * @example
   * OUT
   */
  callStatus?: string;
  /**
   * @example
   * 904
   */
  channelId?: string;
  /**
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @example
   * 10
   */
  duration?: number;
  /**
   * @example
   * 5
   */
  userCnt?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      badExpUserCnt: 'BadExpUserCnt',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      userCnt: 'UserCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      badExpUserCnt: 'number',
      callStatus: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      userCnt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

