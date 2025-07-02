// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationConfigsResponseBodyApplicationConfigs extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * HDFS
   */
  applicationName?: string;
  /**
   * @remarks
   * The status of the configuration value.
   * 
   * @example
   * EFFECT
   */
  configEffectState?: string;
  /**
   * @remarks
   * The name of the configuration file.
   * 
   * @example
   * hdfs-site.xml
   */
  configFileName?: string;
  /**
   * @remarks
   * The key of the configuration item.
   * 
   * @example
   * dfs.replication
   */
  configItemKey?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * 2
   */
  configItemValue?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1628589439114
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the configurations are custom.
   * 
   * @example
   * false
   */
  custom?: boolean;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * dfs.replication description
   */
  description?: string;
  /**
   * @remarks
   * The initial value.
   * 
   * @example
   * 2
   */
  initValue?: string;
  /**
   * @remarks
   * The person who modified the configurations.
   * 
   * @example
   * 170906468757****
   */
  modifier?: string;
  /**
   * @remarks
   * The node group ID.
   * 
   * @example
   * ng-d555335ced5****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * i-bp18y0ng3qqxog4mw****
   */
  nodeId?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1628589439114
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      configEffectState: 'ConfigEffectState',
      configFileName: 'ConfigFileName',
      configItemKey: 'ConfigItemKey',
      configItemValue: 'ConfigItemValue',
      createTime: 'CreateTime',
      custom: 'Custom',
      description: 'Description',
      initValue: 'InitValue',
      modifier: 'Modifier',
      nodeGroupId: 'NodeGroupId',
      nodeId: 'NodeId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      configEffectState: 'string',
      configFileName: 'string',
      configItemKey: 'string',
      configItemValue: 'string',
      createTime: 'number',
      custom: 'boolean',
      description: 'string',
      initValue: 'string',
      modifier: 'string',
      nodeGroupId: 'string',
      nodeId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

