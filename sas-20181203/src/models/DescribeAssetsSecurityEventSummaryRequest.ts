// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetsSecurityEventSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster that you want to query.
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to obtain this parameter.
   * 
   * @example
   * cc58f827d893f4d7fb3e34b5d4395****
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
   * clusterName
   */
  containerFieldName?: string;
  /**
   * @remarks
   * The value of the container search field.
   * 
   * @example
   * arms-prom-operator
   */
  containerFieldValue?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP address of the access source.
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

