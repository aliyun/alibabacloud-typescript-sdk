// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrgLiveListResponseBodyResultUpdateLiveLiveList extends $dara.Model {
  /**
   * @example
   * nickName
   */
  anchorNickname?: string;
  anchorUnionId?: string;
  /**
   * @example
   * 012345
   */
  anchorUserId?: string;
  /**
   * @example
   * 1398324600000
   */
  liveEndTime?: number;
  /**
   * @example
   * 1398321600000
   */
  liveStartTime?: number;
  /**
   * @example
   * 4d38xxxxx
   */
  liveUuid?: string;
  /**
   * @example
   * 直播标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      anchorNickname: 'AnchorNickname',
      anchorUnionId: 'AnchorUnionId',
      anchorUserId: 'AnchorUserId',
      liveEndTime: 'LiveEndTime',
      liveStartTime: 'LiveStartTime',
      liveUuid: 'LiveUuid',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorNickname: 'string',
      anchorUnionId: 'string',
      anchorUserId: 'string',
      liveEndTime: 'number',
      liveStartTime: 'number',
      liveUuid: 'string',
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

