// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplicationConfig extends $dara.Model {
  /**
   * @remarks
   * 应用名称。从EMR控制台集群创建页面可查看到指定发行版的应用名称列表。
   * 
   * This parameter is required.
   * 
   * @example
   * HDFS
   */
  applicationName?: string;
  /**
   * @remarks
   * 应用配置文件名。
   * 
   * This parameter is required.
   * 
   * @example
   * hdfs-site.xml
   */
  configFileName?: string;
  /**
   * @remarks
   * 配置项键。
   * 
   * This parameter is required.
   * 
   * @example
   * dfs.namenode.checkpoint.period
   */
  configItemKey?: string;
  /**
   * @remarks
   * 配置项值。
   * 
   * @example
   * 3600s
   */
  configItemValue?: string;
  /**
   * @remarks
   * 配置范围。取值范围：
   * - CLUSTER：集群级别。
   * - NODE_GROUP：节点组级别。
   * 
   * 默认值：CLUSTER。
   * 
   * @example
   * NODE_GROUP
   */
  configScope?: string;
  /**
   * @remarks
   * 节点组ID。ConfigScope取值NODE_GROUP时，该参数生效。NodeGroupId参数优先级高于NodeGroupName。
   * 
   * @example
   * ng-869471354ecd****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * 节点组名称。ConfigScope取值NODE_GROUP时，且参数NodeGroupId为空时生效，该参数生效。
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

