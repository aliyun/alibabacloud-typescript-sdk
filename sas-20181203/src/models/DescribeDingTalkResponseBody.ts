// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDingTalkResponseBodyActionList extends $dara.Model {
  /**
   * @remarks
   * The name of the notification.
   * 
   * @example
   * Alert notification
   */
  actionName?: string;
  /**
   * @remarks
   * The UID of the user.
   * 
   * @example
   * 12312412341
   */
  aliUid?: number;
  /**
   * @remarks
   * The list of notification settings.
   * 
   * @example
   * [{\\"type\\":\\"vul\\",\\"configItemList\\":[{\\"key\\":\\"key\\", \\"valueList\\":\\"123\\"}]}]
   */
  configList?: string;
  /**
   * @remarks
   * The language of the content within notifications. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  dingTalkLang?: string;
  /**
   * @remarks
   * The creation time. unit:millisecond.
   * 
   * @example
   * 1550828400000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1550828400000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The group IDs.
   * 
   * @example
   * "123,456"
   */
  groupIdList?: string;
  /**
   * @remarks
   * The ID of the notification.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The interval at which the notifications are sent.unit:minute.
   * 
   * @example
   * 1000
   */
  intervalTime?: number;
  /**
   * @remarks
   * The status of the notification. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The parameters of the notification.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      aliUid: 'AliUid',
      configList: 'ConfigList',
      dingTalkLang: 'DingTalkLang',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupIdList: 'GroupIdList',
      id: 'Id',
      intervalTime: 'IntervalTime',
      status: 'Status',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      aliUid: 'number',
      configList: 'string',
      dingTalkLang: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupIdList: 'string',
      id: 'number',
      intervalTime: 'number',
      status: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDingTalkResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of messages.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDingTalkResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of details of notifications.
   */
  actionList?: DescribeDingTalkResponseBodyActionList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeDingTalkResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B256A525-7E42-4BB9-A27C-9017FDDFF1A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      actionList: 'ActionList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: { 'type': 'array', 'itemType': DescribeDingTalkResponseBodyActionList },
      pageInfo: DescribeDingTalkResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionList)) {
      $dara.Model.validateArray(this.actionList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

