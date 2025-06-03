// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSDGStatusResponseBodyDeploymentStatus extends $dara.Model {
  blockRwSplitSize?: number;
  cacheSize?: number;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * @example
   * cn-guangzhou-26
   */
  ensRegionId?: string;
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
   * The deployment type of the SDG.
   * 
   * @example
   * shared
   */
  mountType?: string;
  /**
   * @remarks
   * Deployment Phase
   * 
   * @example
   * attach
   */
  phase?: string;
  /**
   * @remarks
   * The ID of the SDG.
   * 
   * @example
   * sdg-xxxxxxx
   */
  SDGId?: string;
  /**
   * @remarks
   * The deployment status of the SDG.
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
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      mountType: 'MountType',
      phase: 'Phase',
      SDGId: 'SDGId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockRwSplitSize: 'number',
      cacheSize: 'number',
      ensRegionId: 'string',
      instanceId: 'string',
      mountType: 'string',
      phase: 'string',
      SDGId: 'string',
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

