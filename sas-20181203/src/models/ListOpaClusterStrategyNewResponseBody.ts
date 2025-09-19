// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOpaClusterStrategyNewResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The action of the rule. Valid values:
   * 
   * *   **1**: trigger alerts
   * *   **2**: block
   * *   **3**: allow
   * 
   * @example
   * 1
   */
  action?: number;
  /**
   * @remarks
   * The number of clusters on which the rule takes effect.
   * 
   * @example
   * 1
   */
  clusterCount?: number;
  /**
   * @remarks
   * The clusters on which the rule takes effect.
   */
  clusterIdList?: string[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Config the Event Audit policys
   */
  description?: string;
  /**
   * @remarks
   * The image names.
   */
  imageName?: string[];
  /**
   * @remarks
   * The tags that are added to the container.
   */
  label?: string[];
  /**
   * @remarks
   * Indicates whether the rule supports malicious Internet images. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  maliciousImage?: boolean;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 1
   */
  strategyId?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * auto-strategy-vohuiq
   */
  strategyName?: string;
  /**
   * @remarks
   * Indicates whether the rule supports unscanned images. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  unScanedImage?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      clusterCount: 'ClusterCount',
      clusterIdList: 'ClusterIdList',
      description: 'Description',
      imageName: 'ImageName',
      label: 'Label',
      maliciousImage: 'MaliciousImage',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      unScanedImage: 'UnScanedImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'number',
      clusterCount: 'number',
      clusterIdList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      imageName: { 'type': 'array', 'itemType': 'string' },
      label: { 'type': 'array', 'itemType': 'string' },
      maliciousImage: 'boolean',
      strategyId: 'number',
      strategyName: 'string',
      unScanedImage: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.clusterIdList)) {
      $dara.Model.validateArray(this.clusterIdList);
    }
    if(Array.isArray(this.imageName)) {
      $dara.Model.validateArray(this.imageName);
    }
    if(Array.isArray(this.label)) {
      $dara.Model.validateArray(this.label);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpaClusterStrategyNewResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
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

export class ListOpaClusterStrategyNewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The rules.
   */
  list?: ListOpaClusterStrategyNewResponseBodyList[];
  /**
   * @remarks
   * The message that shows the export task result. The value is fixed as **success**, which indicates that the export task is successful.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListOpaClusterStrategyNewResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7DFD947C-9172-5129-B783-DD14C55191D2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      list: 'List',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      list: { 'type': 'array', 'itemType': ListOpaClusterStrategyNewResponseBodyList },
      message: 'string',
      pageInfo: ListOpaClusterStrategyNewResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
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

