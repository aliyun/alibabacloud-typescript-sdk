// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateApplicationConfig } from "./UpdateApplicationConfig";


export class UpdateApplicationConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of application configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * CLUSTER
   */
  applicationConfigs?: UpdateApplicationConfig[];
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * HDFS
   */
  applicationName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-e6a9d46e9267****
   */
  clusterId?: string;
  /**
   * @remarks
   * The operation on the configuration items. Valid values:
   * 
   * - ADD: Adds configuration items.
   * 
   * - UPDATE: Updates configuration items.
   * 
   * - DELETE: Deletes configuration items.
   * 
   * @example
   * ADD
   */
  configAction?: string;
  /**
   * @remarks
   * The scope of the configuration operation. Valid values:
   * 
   * - CLUSTER: The cluster level.
   * 
   * - NODE_GROUP: The node group level.
   * 
   * @example
   * CLUSTER
   */
  configScope?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The node group ID.
   * 
   * @example
   * ng-869471354ecd****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * i-bp1cudc25w2bfwl5****
   */
  nodeId?: string;
  /**
   * @remarks
   * Specifies whether to refresh the configurations.
   * The default value is true.
   * 
   * @example
   * true
   */
  refreshConfig?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationConfigs: 'ApplicationConfigs',
      applicationName: 'ApplicationName',
      clusterId: 'ClusterId',
      configAction: 'ConfigAction',
      configScope: 'ConfigScope',
      description: 'Description',
      nodeGroupId: 'NodeGroupId',
      nodeId: 'NodeId',
      refreshConfig: 'RefreshConfig',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigs: { 'type': 'array', 'itemType': UpdateApplicationConfig },
      applicationName: 'string',
      clusterId: 'string',
      configAction: 'string',
      configScope: 'string',
      description: 'string',
      nodeGroupId: 'string',
      nodeId: 'string',
      refreshConfig: 'boolean',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationConfigs)) {
      $dara.Model.validateArray(this.applicationConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

