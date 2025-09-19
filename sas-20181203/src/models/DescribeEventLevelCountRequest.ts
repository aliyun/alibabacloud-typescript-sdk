// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventLevelCountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of container clusters.
   * 
   * @example
   * c7e3c5b420a7947c2933303144688****
   */
  clusterId?: string;
  /**
   * @remarks
   * The key of the condition that is used to query alert events on containers. Valid values:
   * 
   * *   **instanceId**: the ID of the asset
   * *   **appName**: the name of the application
   * *   **clusterId**: the ID of the cluster
   * *   **regionId**: the ID of the region
   * *   **nodeName**: the name of the node
   * *   **namespace**: the namespace
   * *   **clusterName**: the name of the cluster
   * *   **image**: the name of the image
   * *   **imageRepoName**: the name of the image repository
   * *   **imageRepoNamespace**: the namespace to which the image repository belongs
   * *   **imageRepoTag**: the tag that is added to the image
   * *   **imageDigest**: the digest of the image
   * 
   * @example
   * clusterId
   */
  containerFieldName?: string;
  /**
   * @remarks
   * The value of the condition that is used to query alert events on containers. If you specify multiple values, separate them with commas (,).
   * 
   * @example
   * c951761046a9c4afe92be0a7b5bexxxxx
   */
  containerFieldValue?: string;
  /**
   * @remarks
   * The ID of the container.
   * 
   * @example
   * xxxxxx30389a10c28f6d38f2398f0dcexxxxxxx922b9e8290dc7c3019d4a8,48b87f2c0662e334820f436cb9133f1ae4e053d39b6fad42xxxxxxxxxx
   */
  containerIds?: string;
  /**
   * @remarks
   * The ID of the request source. Set the value to **sas**.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The type of the accounts that you want to query. Default value: **0**. Valid values:
   * 
   * *   **0**: the current account.
   * *   **1**: all accounts.
   * 
   * @example
   * 0
   */
  multiAccountActionType?: number;
  /**
   * @remarks
   * The type of the query condition. Valid values:
   * 
   * *   **containerId**: the ID of the container
   * *   **uuid**: the UUID of the asset
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

