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
   * The key of the condition that is used to query containers. Valid values:
   * 
   * *   **instanceId**: the instance ID
   * *   **appName**: the name of the application
   * *   **clusterId**: the ID of the cluster
   * *   **regionId**: the region ID
   * *   **nodeName**: the name of the node
   * *   **namespace**: the namespace
   * *   **clusterName**: the name of the cluster
   * *   **image**: the name of the image
   * *   **imageRepoName**: the name of the image repository
   * *   **imageRepoNamespace**: the namespace to which the image repository belongs
   * *   **imageRepoTag**: the tag that is added to the image repository
   * *   **imageDigest**: the digest of the image
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
   * The type of the query. Valid values:
   * 
   * *   **containerId**
   * *   **uuid**
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

