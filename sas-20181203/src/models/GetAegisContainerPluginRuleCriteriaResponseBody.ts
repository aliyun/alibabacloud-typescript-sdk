// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAegisContainerPluginRuleCriteriaResponseBodyCriteriaList extends $dara.Model {
  /**
   * @remarks
   * The name of the search condition. Valid values:
   * 
   * *   **instanceId**: the ID of the container instance.
   * *   **clusterId**: the cluster ID.
   * *   **regionId**: the ID of the region in which the container resides.
   * *   **clusterName**: the name of the cluster.
   * *   **clusterType**: the type of the cluster.
   * *   **hostIp**: the public IP address.
   * *   **pod**: the pod.
   * *   **podIp**: the IP address of the pod.
   * *   **containerId**: the container ID.
   * *   **containerScope**: the type of the container.
   * 
   * @example
   * containerScope
   */
  name?: string;
  /**
   * @remarks
   * The type of the search condition. Valid values:
   * 
   * *   **input**: The search condition needs to be specified.
   * *   **select**: The search condition is an option that can be selected from the drop-down list.
   * 
   * @example
   * select
   */
  type?: string;
  /**
   * @remarks
   * The values.
   * 
   * @example
   * NO,YES
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      values: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAegisContainerPluginRuleCriteriaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the search condition.
   */
  criteriaList?: GetAegisContainerPluginRuleCriteriaResponseBodyCriteriaList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DA8133CC-CCA0-5CF2-BF64-FE7D52C44***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      criteriaList: 'CriteriaList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteriaList: { 'type': 'array', 'itemType': GetAegisContainerPluginRuleCriteriaResponseBodyCriteriaList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.criteriaList)) {
      $dara.Model.validateArray(this.criteriaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

