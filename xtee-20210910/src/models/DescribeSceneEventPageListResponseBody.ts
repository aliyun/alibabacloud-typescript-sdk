// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSceneEventPageListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The number of General Policy rules.
   * 
   * @example
   * 10
   */
  commonRuleCount?: string;
  /**
   * @remarks
   * The number of custom policies.
   * 
   * @example
   * 10
   */
  customRuleCount?: string;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_aszbjb7236
   */
  eventCode?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * 注册风险
   */
  eventName?: string;
  /**
   * @remarks
   * The time when the event was last modified.
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The user who last modified the event.
   * 
   * @example
   * 公有云用户uid
   */
  modifier?: string;
  /**
   * @remarks
   * The number of user-defined policies.
   * 
   * @example
   * 10
   */
  normalRuleCount?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * device_risk
   */
  service?: string;
  /**
   * @remarks
   * The usage status.
   * 
   * @example
   * 使用/未使用
   */
  useStatus?: string;
  /**
   * @remarks
   * The number of whitebox implementation policies.
   * 
   * @example
   * 10
   */
  whiteBoxRuleCount?: string;
  static names(): { [key: string]: string } {
    return {
      commonRuleCount: 'commonRuleCount',
      customRuleCount: 'customRuleCount',
      eventCode: 'eventCode',
      eventName: 'eventName',
      gmtModified: 'gmtModified',
      modifier: 'modifier',
      normalRuleCount: 'normalRuleCount',
      service: 'service',
      useStatus: 'useStatus',
      whiteBoxRuleCount: 'whiteBoxRuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonRuleCount: 'string',
      customRuleCount: 'string',
      eventCode: 'string',
      eventName: 'string',
      gmtModified: 'string',
      modifier: 'string',
      normalRuleCount: 'string',
      service: 'string',
      useStatus: 'string',
      whiteBoxRuleCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneEventPageListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page in the response. Default value: 20. Minimum value: 1. Maximum value: 50.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID. Each request has a unique ID for troubleshooting purposes.
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * The returned array.
   */
  resultObject?: DescribeSceneEventPageListResponseBodyResultObject[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 3
   */
  totalItem?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 9
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      requestId: 'requestId',
      resultObject: 'resultObject',
      totalItem: 'totalItem',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeSceneEventPageListResponseBodyResultObject },
      totalItem: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

