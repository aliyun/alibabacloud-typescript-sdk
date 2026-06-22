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
   * - **instanceId**: container instance ID
   * - **clusterId**: cluster ID
   * - **regionId**: container region
   * - **clusterName**: cluster name
   * - **image**: image name
   * - **imageRepoName**: image repository name
   * - **imageRepoNamespace**: image repository namespace
   * - **imageRepoTag**: image repository tag
   * - **imageDigest**: image digest
   * - **clusterType**: cluster type
   * - **hostIp**: public IP address
   * - **pod**: pod
   * - **podIp**: pod IP address
   * - **containerId**: container ID
   * - **vulStatus**: whether the container has vulnerabilities
   * - **alarmStatus**: whether the container has security alerts
   * - **riskStatus**: whether the container has risks
   * - **riskLevel**: container risk level
   * - **containerScope**: container type.
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
   * The IP address of the access source.
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

