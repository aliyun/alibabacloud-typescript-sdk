// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGroupLiveListResponseBodyResultGroupLiveList extends $dara.Model {
  /**
   * @example
   * nickName
   */
  anchorNickname?: string;
  /**
   * @example
   * Eijxx
   */
  anchorUnionId?: string;
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

