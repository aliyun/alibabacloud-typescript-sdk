// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTagToFlinkClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Prometheus instance.
   * 
   * This parameter is required.
   * 
   * @example
   * c5defa51f******c92bd2ef5fb093269
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the Flink workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * ab18f***93744d
   */
  flinkWorkSpaceId?: string;
  /**
   * @remarks
   * The name of the Flink workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * flink-demo
   */
  flinkWorkSpaceName?: string;
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
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the Flink workspace belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 198608******7619
   */
  targetUserId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      flinkWorkSpaceId: 'FlinkWorkSpaceId',
      flinkWorkSpaceName: 'FlinkWorkSpaceName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      flinkWorkSpaceId: 'string',
      flinkWorkSpaceName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      targetUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

