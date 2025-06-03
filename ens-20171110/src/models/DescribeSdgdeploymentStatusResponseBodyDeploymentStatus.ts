// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGDeploymentStatusResponseBodyDeploymentStatus extends $dara.Model {
  blockRwSplitSize?: number;
  cacheSize?: number;
  /**
   * @remarks
   * The ID of the AIC instance.
   * 
   * @example
   * aic-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The deployment type.
   * 
   * Valid values:
   * 
   * *   overlay: read/write splitting.
   * *   common: common deployment.
   * 
   * @example
   * overlay
   */
  mountType?: string;
  /**
   * @remarks
   * The deployment phase of the SDG.
   * 
   * @example
   * attach
   */
  phase?: string;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The deployment status of the SDG.
   * 
   * Valid values:
   * 
   * *   sdg_deploying
   * *   success
   * *   failed
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The time when the status was last updated.
   * 
   * @example
   * 2023-02-17T02:44:31Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      blockRwSplitSize: 'BlockRwSplitSize',
      cacheSize: 'CacheSize',
      instanceId: 'InstanceId',
      mountType: 'MountType',
      phase: 'Phase',
      regionId: 'RegionId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockRwSplitSize: 'number',
      cacheSize: 'number',
      instanceId: 'string',
      mountType: 'string',
      phase: 'string',
      regionId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

