// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventLevelCountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster that you want to query.
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to obtain this parameter.
   * 
   * @example
   * c7e3c5b420a7947c2933303144688****
   */
  clusterId?: string;
  /**
   * @remarks
   * The container search field. Valid values:
   * 
   * - **instanceId**: instance ID
   * - **appName**: application name
   * - **clusterId**: cluster ID
   * - **regionId**: region
   * - **nodeName**: node name
   * - **namespace**: namespace
   * - **clusterName**: cluster name
   * - **image**: image name
   * - **imageRepoName**: image repository name
   * - **imageRepoNamespace**: image repository namespace
   * - **imageRepoTag**: image tag
   * - **imageDigest**: image digest
   * 
   * @example
   * clusterId
   */
  containerFieldName?: string;
  /**
   * @remarks
   * The value of the field that you want to query. Separate multiple values with commas (,).
   * 
   * @example
   * c951761046a9c4afe92be0a7b5bexxxxx
   */
  containerFieldValue?: string;
  /**
   * @remarks
   * The container IDs.
   * 
   * @example
   * xxxxxx30389a10c28f6d38f2398f0dcexxxxxxx922b9e8290dc7c3019d4a8,48b87f2c0662e334820f436cb9133f1ae4e053d39b6fad42xxxxxxxxxx
   */
  containerIds?: string;
  /**
   * @remarks
   * The source identifier of the request. Set this parameter to **sas**.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The multi-account query type. Default value: **0**. Valid values:
   * - **0**: Query data of the current account.
   * - **1**: Query data of all accounts.
   * 
   * @example
   * 0
   */
  multiAccountActionType?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member accounts in the resource folder.
   * >You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The query type. Valid values:
   * 
   * - **containerId**: container ID
   * - **uuid**: asset ID
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
      containerIds: 'ContainerIds',
      from: 'From',
      multiAccountActionType: 'MultiAccountActionType',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      containerFieldName: 'string',
      containerFieldValue: 'string',
      containerIds: 'string',
      from: 'string',
      multiAccountActionType: 'number',
      resourceDirectoryAccountId: 'number',
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

