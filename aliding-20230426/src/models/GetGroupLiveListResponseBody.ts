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

export class GetGroupLiveListResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 直播列表
   */
  groupLiveList?: GetGroupLiveListResponseBodyResultGroupLiveList[];
  static names(): { [key: string]: string } {
    return {
      groupLiveList: 'GroupLiveList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupLiveList: { 'type': 'array', 'itemType': GetGroupLiveListResponseBodyResultGroupLiveList },
    };
  }

  validate() {
    if(Array.isArray(this.groupLiveList)) {
      $dara.Model.validateArray(this.groupLiveList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupLiveListResponseBody extends $dara.Model {
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  result?: GetGroupLiveListResponseBodyResult;
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
      result: GetGroupLiveListResponseBodyResult,
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

