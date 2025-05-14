// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrgLiveListResponseBodyResultNewLiveLiveList extends $dara.Model {
  /**
   * @example
   * nickName
   */
  anchorNickname?: string;
  anchorUnionId?: string;
  /**
   * @example
   * ersqqdddf
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
   * 群OpenConversationId
   */
  shareOpenConversationIds?: string[];
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
      shareOpenConversationIds: 'ShareOpenConversationIds',
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
      shareOpenConversationIds: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.shareOpenConversationIds)) {
      $dara.Model.validateArray(this.shareOpenConversationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

