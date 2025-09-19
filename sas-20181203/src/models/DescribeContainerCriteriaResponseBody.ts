// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerCriteriaResponseBodyCriteriaList extends $dara.Model {
  /**
   * @remarks
   * The name of the search condition. Valid values:
   * 
   * *   **instanceId**: the ID of the container instance.
   * *   **clusterId**: the cluster ID.
   * *   **regionId**: the ID of the region in which the container resides.
   * *   **clusterName**: the name of the cluster.
   * *   **image**: the name of the image.
   * *   **imageRepoName**: the name of the image repository.
   * *   **imageRepoNamespace**: the namespace of the image repository.
   * *   **imageRepoTag**: the tag of the image repository.
   * *   **imageDigest**: the image digest.
   * *   **ClusterType**: the type of the cluster.
   * *   **hostIp**: the public IP address.
   * *   **pod**: the pod.
   * *   **podIp**: the IP address of the pod.
   * *   **containerId**: the container ID.
   * *   **vulStatus**: indicates whether vulnerabilities exist in the container.
   * *   **alarmStatus**: indicates whether alerts are generated for the container.
   * *   **riskStatus**: indicates whether risks exist in the container.
   * *   **riskLevel**: the risk level of the container.
   * *   **containerScope**: the type of the container.
   * 
   * @example
   * clusterId
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
   * input
   */
  type?: string;
  /**
   * @remarks
   * The values of the search condition. This parameter is returned only if the value of **Type** is set to **select**.
   * 
   * > If the value of **Type** is set to **input**, the return value of this parameter is empty.
   * 
   * @example
   * ManagedKubernetes,NotManagedKubernetes,PrivateKubernetes
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

export class DescribeContainerCriteriaResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of information about the filter condition.
   */
  criteriaList?: DescribeContainerCriteriaResponseBodyCriteriaList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * A4EB8B1C-1DEC-5E18-BCD0-D1BBB3936FA7
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
      criteriaList: { 'type': 'array', 'itemType': DescribeContainerCriteriaResponseBodyCriteriaList },
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

