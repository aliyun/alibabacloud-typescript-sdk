// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClusterConfigsShrinkRequest extends $dara.Model {
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
  configValuesShrink?: string;
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
      configValuesShrink: 'ConfigValues',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'number',
      configType: 'string',
      configValuesShrink: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

