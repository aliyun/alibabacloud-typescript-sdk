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
   * - **instanceId**: instance ID.
   * - **appName**: application name.
   * - **clusterId**: cluster ID.
   * - **regionId**: region.
   * - **nodeName**: node name.
   * - **namespace**: namespace.
   * - **clusterName**: cluster name.
   * - **image**: image name.
   * - **imageRepoName**: image repository name.
   * - **imageRepoNamespace**: image repository namespace.
   * - **imageRepoTag**: image tag.
   * - **imageDigest**: image digest.
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
   * The IP address of the access source.
   * 
   * @example
   * 222.71.XXX.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The query type. Valid values:
   * 
   * - **containerId**: container ID.
   * - **uuid**: asset ID.
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

