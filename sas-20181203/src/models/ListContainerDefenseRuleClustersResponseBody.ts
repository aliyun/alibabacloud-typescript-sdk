// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContainerDefenseRuleClustersResponseBodyClusterList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether all namespaces are included. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  allNamespace?: number;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * cfeb7a9f99ce740e98c5595d0fe37****
   */
  clusterId?: string;
  /**
   * @remarks
   * The namespaces.
   */
  namespaces?: string[];
  /**
   * @remarks
   * The ID of the rule.
   * 
   * >  You can call the [ListInterceptionRulePage](https://help.aliyun.com/document_detail/2590599.html) operation to query the IDs of rules.
   * 
   * @example
   * 403178
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      allNamespace: 'AllNamespace',
      clusterId: 'ClusterId',
      namespaces: 'Namespaces',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allNamespace: 'number',
      clusterId: 'string',
      namespaces: { 'type': 'array', 'itemType': 'string' },
      ruleId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerDefenseRuleClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The clusters.
   */
  clusterList?: ListContainerDefenseRuleClustersResponseBodyClusterList[];
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
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1F995515-CAF3-5F84-8D82-C9F706AD5070
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
      clusterList: 'ClusterList',
      code: 'Code',
      count: 'Count',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterList: { 'type': 'array', 'itemType': ListContainerDefenseRuleClustersResponseBodyClusterList },
      code: 'string',
      count: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.clusterList)) {
      $dara.Model.validateArray(this.clusterList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

