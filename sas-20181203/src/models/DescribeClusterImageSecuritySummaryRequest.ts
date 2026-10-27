// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterImageSecuritySummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c3aaf6c8085f84791882eef200cd2****
   */
  clusterId?: string;
  /**
   * @remarks
   * The container search field. Valid values:
   * 
   * - **instanceId**: the container instance ID
   * - **clusterId**: the cluster ID
   * - **regionId**: the container region
   * - **clusterName**: the cluster name
   * - **image**: the image name
   * - **imageRepoName**: the image repository name
   * - **imageRepoNamespace**: the image repository namespace
   * - **imageRepoTag**: the image repository tag
   * - **imageDigest**: the image digest
   * - **clusterType**: the cluster type
   * - **hostIp**: the public IP address
   * - **pod**: the pod
   * - **podIp**: the pod IP address
   * - **containerId**: the container ID
   * - **vulStatus**: whether the container has vulnerabilities
   * - **alarmStatus**: whether the container has security alerts
   * - **riskStatus**: whether the container has risks
   * - **riskLevel**: the container risk level
   * - **containerScope**: the container type
   * 
   * @example
   * clusterId
   */
  containerFieldName?: string;
  /**
   * @remarks
   * The value of the container search field.
   * 
   * @example
   * c2ac28b2d0c734df29a21d29f18ac****
   */
  containerFieldValue?: string;
  /**
   * @remarks
   * The image digest.
   * 
   * @example
   * 402902de6480a020b9f29e7105e77b8a218bc1cccbc3935d3b38c8ea9ba2****
   */
  imageDigest?: string;
  /**
   * @remarks
   * The image repository name.
   * 
   * @example
   * repo
   */
  imageRepoName?: string;
  /**
   * @remarks
   * The image repository namespace.
   * 
   * @example
   * namespace
   */
  imageRepoNamespace?: string;
  /**
   * @remarks
   * The image tag.
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

