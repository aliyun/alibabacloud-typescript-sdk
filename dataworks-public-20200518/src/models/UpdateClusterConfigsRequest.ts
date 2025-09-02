// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClusterConfig } from "./ClusterConfig";


export class UpdateClusterConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster associated with DataWorks.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  clusterId?: number;
  /**
   * @remarks
   * The configuration type of the cluster. Valid values:
   * 
   * *   SPARK_CONF: SPARK parameters
   * 
   * This parameter is required.
   * 
   * @example
   * SPARK_CONF
   */
  configType?: string;
  /**
   * @remarks
   * The configuration information of the cluster submodule.
   * 
   * This parameter is required.
   */
  configValues?: ClusterConfig[];
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 5678
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      configType: 'ConfigType',
      configValues: 'ConfigValues',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'number',
      configType: 'string',
      configValues: { 'type': 'array', 'itemType': ClusterConfig },
      projectId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configValues)) {
      $dara.Model.validateArray(this.configValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

