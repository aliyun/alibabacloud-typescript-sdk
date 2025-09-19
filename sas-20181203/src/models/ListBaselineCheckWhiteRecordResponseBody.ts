// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaselineCheckWhiteRecordResponseBodyListContainerItems extends $dara.Model {
  /**
   * @remarks
   * Names of the whitelisted containers for the current asset, separated by English commas.
   * 
   * @example
   * "anythingllm,ChuanhuChat"
   */
  containerNames?: string;
  /**
   * @remarks
   * Server UUID.
   * 
   * @example
   * beeea5c2-1857-4b2b-a794-7d21eae*****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      containerNames: 'ContainerNames',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerNames: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineCheckWhiteRecordResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 696
   */
  checkId?: number;
  /**
   * @remarks
   * The description of the check item.
   * 
   * @example
   * Config the Event Audit policys
   */
  checkItem?: string;
  /**
   * @remarks
   * The type of the check item.
   * 
   * @example
   * Security audit
   */
  checkType?: string;
  /**
   * @remarks
   * The display name of the check item type.
   * 
   * @example
   * Security audit
   */
  checkTypeDisName?: string;
  /**
   * @remarks
   * List of whitelisted container names in the check item.
   */
  containerItems?: ListBaselineCheckWhiteRecordResponseBodyListContainerItems[];
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The reason why the check item is added to the whitelist.
   * 
   * @example
   * AutoTest
   */
  reason?: string;
  /**
   * @remarks
   * The ID of the whitelist rule.
   * 
   * @example
   * 79412
   */
  recordId?: number;
  /**
   * @remarks
   * The data source. Valid values:
   * 
   * *   **default**: server
   * *   **agentless**: agentless detection
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * The object that is added to the whitelist.
   * 
   * @example
   * HOST_BASELINE_WHITE_LIST_21
   */
  target?: string;
  /**
   * @remarks
   * The type of the assets on which the whitelist rule takes effect. Valid values:
   * 
   * *   **all_instance**: all servers
   * *   **instance**: specific servers
   * 
   * @example
   * instance
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkItem: 'CheckItem',
      checkType: 'CheckType',
      checkTypeDisName: 'CheckTypeDisName',
      containerItems: 'ContainerItems',
      lang: 'Lang',
      reason: 'Reason',
      recordId: 'RecordId',
      source: 'Source',
      target: 'Target',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      checkItem: 'string',
      checkType: 'string',
      checkTypeDisName: 'string',
      containerItems: { 'type': 'array', 'itemType': ListBaselineCheckWhiteRecordResponseBodyListContainerItems },
      lang: 'string',
      reason: 'string',
      recordId: 'number',
      source: 'string',
      target: 'string',
      targetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.containerItems)) {
      $dara.Model.validateArray(this.containerItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineCheckWhiteRecordResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 45
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
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

export class ListBaselineCheckWhiteRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The whitelist rules.
   */
  list?: ListBaselineCheckWhiteRecordResponseBodyList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListBaselineCheckWhiteRecordResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9F4E6157-9600-5588-86B9-38F09067****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListBaselineCheckWhiteRecordResponseBodyList },
      pageInfo: ListBaselineCheckWhiteRecordResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
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

