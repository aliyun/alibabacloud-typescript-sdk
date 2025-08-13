// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSceneEventPageListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Number of common rules
   * 
   * @example
   * 10
   */
  commonRuleCount?: string;
  /**
   * @remarks
   * Number of custom rules
   * 
   * @example
   * 10
   */
  customRuleCount?: string;
  /**
   * @remarks
   * Event code
   * 
   * @example
   * de_aszbjb7236
   */
  eventCode?: string;
  /**
   * @remarks
   * Event name.
   * 
   * @example
   * 注册风险
   */
  eventName?: string;
  /**
   * @remarks
   * Modification time
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Modifier
   * 
   * @example
   * 公有云用户uid
   */
  modifier?: string;
  /**
   * @remarks
   * Number of custom rules
   * 
   * @example
   * 10
   */
  normalRuleCount?: string;
  /**
   * @remarks
   * Service code
   * 
   * @example
   * device_risk
   */
  service?: string;
  /**
   * @remarks
   * Usage status
   * 
   * @example
   * 使用/未使用
   */
  useStatus?: string;
  /**
   * @remarks
   * Number of white-box rules
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
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of items per page. Default value: 20, minimum value: 1, maximum value: 50.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID, each request has a unique value, which facilitates subsequent troubleshooting
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * Return array
   */
  resultObject?: DescribeSceneEventPageListResponseBodyResultObject[];
  /**
   * @remarks
   * Total number of items
   * 
   * @example
   * 3
   */
  totalItem?: number;
  /**
   * @remarks
   * Total number of pages
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

