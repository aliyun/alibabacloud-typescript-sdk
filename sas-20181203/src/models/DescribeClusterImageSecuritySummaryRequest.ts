// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterImageSecuritySummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c3aaf6c8085f84791882eef200cd2****
   */
  clusterId?: string;
  /**
   * @remarks
   * The key of the condition that is used to query containers. Valid values:
   * 
   * *   **instanceId**: the instance ID of the container
   * *   **clusterId**: the ID of the cluster
   * *   **regionId**: the region ID of the container
   * *   **clusterName**: the name of the cluster
   * *   **image**: the name of the image
   * *   **imageRepoName**: the name of the image repository
   * *   **imageRepoNamespace**: the namespace to which the image repository belongs
   * *   **imageRepoTag**: the tag that is added to the image repository
   * *   **imageDigest**: the digest of the image
   * *   **clusterType**: the type of the cluster
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
   * clusterId
   */
  containerFieldName?: string;
  /**
   * @remarks
   * The value of the condition that is used to query containers.
   * 
   * @example
   * c2ac28b2d0c734df29a21d29f18ac****
   */
  containerFieldValue?: string;
  /**
   * @remarks
   * The digest of the image.
   * 
   * @example
   * 402902de6480a020b9f29e7105e77b8a218bc1cccbc3935d3b38c8ea9ba2****
   */
  imageDigest?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * repo
   */
  imageRepoName?: string;
  /**
   * @remarks
   * The namespace of the image repository.
   * 
   * @example
   * namespace
   */
  imageRepoNamespace?: string;
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * 3.54.0.1
   */
  imageTag?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 60.190.XXX.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      containerFieldName: 'ContainerFieldName',
      containerFieldValue: 'ContainerFieldValue',
      imageDigest: 'ImageDigest',
      imageRepoName: 'ImageRepoName',
      imageRepoNamespace: 'ImageRepoNamespace',
      imageTag: 'ImageTag',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      containerFieldName: 'string',
      containerFieldValue: 'string',
      imageDigest: 'string',
      imageRepoName: 'string',
      imageRepoNamespace: 'string',
      imageTag: 'string',
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

