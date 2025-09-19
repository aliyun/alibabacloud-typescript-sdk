// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetsSecurityEventSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster to which the container belongs.
   * 
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of clusters.
   * 
   * @example
   * cc58f827d893f4d7fb3e34b5d4395****
   */
  clusterId?: string;
  /**
   * @remarks
   * The key of the condition that is used to query on containers. Valid values:
   * 
   * *   **instanceId**: the ID of the container instance
   * *   **clusterId**: the ID of the cluster
   * *   **regionId**: the region ID of the container
   * *   **clusterName**: the name of the cluster
   * *   **image**: the name of the image
   * *   **imageRepoName**: the name of the image repository
   * *   **imageRepoNamespace**: the namespace to which the image repository belongs
   * *   **imageRepoTag**: the tag that is added to the image repository
   * *   **imageDigest**: the digest of the image
   * *   **ClusterType**: the type of the cluster
   * *   **hostIp**: the public IP address
   * *   **pod**: the pod
   * *   **podIp**: the IP address of the pod
   * *   **containerId**: the ID of the container
   * *   **vulStatus**: whether vulnerabilities are detected on the container
   * *   **alarmStatus**: whether alerts are generated for the container
   * *   **riskStatus**: whether risks are detected on the container
   * *   **riskLevel**: the risk level of the container
   * *   **containerScope**: the type of the container
   * 
   * @example
   * clusterName
   */
  containerFieldName?: string;
  /**
   * @remarks
   * The value of the condition that is used to query on containers.
   * 
   * @example
   * arms-prom-operator
   */
  containerFieldValue?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 113.108.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      containerFieldName: 'ContainerFieldName',
      containerFieldValue: 'ContainerFieldValue',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      containerFieldName: 'string',
      containerFieldValue: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

