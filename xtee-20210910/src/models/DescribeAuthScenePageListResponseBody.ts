// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuthScenePageListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The number of General Policy policies.
   * 
   * @example
   * 10
   */
  commonRuleCount?: number;
  /**
   * @remarks
   * The number of custom policies.
   * 
   * @example
   * 10
   */
  customRuleCount?: number;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_avypfd8253
   */
  eventCode?: string;
  /**
   * @remarks
   * The scenario name.
   * 
   * @example
   * 注册风险识别服务
   */
  sceneName?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * account_abuse
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      commonRuleCount: 'commonRuleCount',
      customRuleCount: 'customRuleCount',
      eventCode: 'eventCode',
      sceneName: 'sceneName',
      serverName: 'serverName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonRuleCount: 'number',
      customRuleCount: 'number',
      eventCode: 'string',
      sceneName: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthScenePageListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
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
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned object.
   */
  resultObject?: DescribeAuthScenePageListResponseBodyResultObject[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 6
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
      requestId: 'RequestId',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      resultObject: 'resultObject',
      totalItem: 'totalItem',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      resultObject: { 'type': 'array', 'itemType': DescribeAuthScenePageListResponseBodyResultObject },
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

