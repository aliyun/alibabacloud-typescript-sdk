// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplicationConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the application. You can view the application names of each EMR version on the cluster creation page in the EMR console.
   * 
   * This parameter is required.
   * 
   * @example
   * HDFS
   */
  applicationName?: string;
  /**
   * @remarks
   * The name of the configuration file.
   * 
   * This parameter is required.
   * 
   * @example
   * hdfs-site.xml
   */
  configFileName?: string;
  /**
   * @remarks
   * The key of the configuration item.
   * 
   * This parameter is required.
   * 
   * @example
   * dfs.namenode.checkpoint.period
   */
  configItemKey?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * 3600s
   */
  configItemValue?: string;
  /**
   * @remarks
   * The level at which you want to apply the configurations. Valid values:
   * 
   * *   CLUSTER
   * *   NODE_GROUP
   * 
   * Default value: CLUSTER.
   * 
   * @example
   * NODE_GROUP
   */
  configScope?: string;
  /**
   * @remarks
   * The node group ID. This parameter takes effect only when the ConfigScope parameter is set to NODE_GROUP. The NodeGroupId parameter has a higher priority than the NodeGroupName parameter.
   * 
   * @example
   * ng-869471354ecd****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The name of the node group. This parameter takes effect only when the ConfigScope parameter is set to NODE_GROUP and the NodeGroupId parameter is not configured.
   * 
   * @example
   * core-1
   */
  nodeGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      configFileName: 'ConfigFileName',
      configItemKey: 'ConfigItemKey',
      configItemValue: 'ConfigItemValue',
      configScope: 'ConfigScope',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      configFileName: 'string',
      configItemKey: 'string',
      configItemValue: 'string',
      configScope: 'string',
      nodeGroupId: 'string',
      nodeGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

