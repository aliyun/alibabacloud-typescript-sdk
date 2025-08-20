// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrgLiveListResponseBodyResultNewLiveLiveList extends $dara.Model {
  /**
   * @example
   * nickName
   */
  anchorNickname?: string;
  anchorUnionId?: string;
  anchorUnionIdInAlibaba?: string;
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
      anchorUnionIdInAlibaba: 'AnchorUnionIdInAlibaba',
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
      anchorUnionIdInAlibaba: 'string',
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

export class GetOrgLiveListResponseBodyResultNewLive extends $dara.Model {
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @example
   * []
   */
  liveList?: GetOrgLiveListResponseBodyResultNewLiveLiveList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'HasMore',
      liveList: 'LiveList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      liveList: { 'type': 'array', 'itemType': GetOrgLiveListResponseBodyResultNewLiveLiveList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.liveList)) {
      $dara.Model.validateArray(this.liveList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrgLiveListResponseBodyResultUpdateLiveLiveList extends $dara.Model {
  /**
   * @example
   * nickName
   */
  anchorNickname?: string;
  anchorUnionId?: string;
  anchorUnionIdInAlibaba?: string;
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
      anchorUnionIdInAlibaba: 'AnchorUnionIdInAlibaba',
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
      anchorUnionIdInAlibaba: 'string',
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

export class GetOrgLiveListResponseBodyResultUpdateLive extends $dara.Model {
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @example
   * []
   */
  liveList?: GetOrgLiveListResponseBodyResultUpdateLiveLiveList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'HasMore',
      liveList: 'LiveList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      liveList: { 'type': 'array', 'itemType': GetOrgLiveListResponseBodyResultUpdateLiveLiveList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.liveList)) {
      $dara.Model.validateArray(this.liveList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrgLiveListResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 新建的直播列表
   */
  newLive?: GetOrgLiveListResponseBodyResultNewLive;
  /**
   * @example
   * 修改的直播列表
   */
  updateLive?: GetOrgLiveListResponseBodyResultUpdateLive;
  static names(): { [key: string]: string } {
    return {
      newLive: 'NewLive',
      updateLive: 'UpdateLive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newLive: GetOrgLiveListResponseBodyResultNewLive,
      updateLive: GetOrgLiveListResponseBodyResultUpdateLive,
    };
  }

  validate() {
    if(this.newLive && typeof (this.newLive as any).validate === 'function') {
      (this.newLive as any).validate();
    }
    if(this.updateLive && typeof (this.updateLive as any).validate === 'function') {
      (this.updateLive as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrgLiveListResponseBody extends $dara.Model {
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  result?: GetOrgLiveListResponseBodyResult;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetOrgLiveListResponseBodyResult,
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

