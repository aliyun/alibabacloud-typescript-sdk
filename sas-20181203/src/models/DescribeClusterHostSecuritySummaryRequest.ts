// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterHostSecuritySummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * @example
   * c3aaf6c8085f84791882eef200cd2****
   */
  clusterId?: string;
  /**
   * @remarks
   * The container search field. Valid values:
   * 
   * - **instanceId**: The instance ID.
   * - **appName**: The application name.
   * - **clusterId**: The cluster ID.
   * - **regionId**: The region ID.
   * - **nodeName**: The node name.
   * - **namespace**: The namespace.
   * - **clusterName**: The cluster name.
   * - **image**: The image name.
   * - **imageRepoName**: The image repository name.
   * - **imageRepoNamespace**: The image repository namespace.
   * - **imageRepoTag**: The image tag.
   * - **imageDigest**: The image digest.
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
   * c1fdb5fd8d42e425d88fd73eec7be****
   */
  containerFieldValue?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 222.71.XXX.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The query type. Valid values:
   * 
   * - **containerId**: The container ID.
   * - **uuid**: The asset ID.
   * 
   * @example
   * uuid
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      containerFieldName: 'ContainerFieldName',
      containerFieldValue: 'ContainerFieldValue',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      containerFieldName: 'string',
      containerFieldValue: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

