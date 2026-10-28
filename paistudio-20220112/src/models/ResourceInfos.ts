// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceInfos extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6
   */
  clusterId?: string;
  /**
   * @remarks
   * The ECS instance type information.
   * 
   * @example
   * ecs.gn5-c8g1.2xlarge
   */
  ecsSpec?: string;
  /**
   * @remarks
   * The GPU card type.
   */
  gpuCardType?: string;
  /**
   * @remarks
   * The machine model.
   */
  machineModel?: string;
  /**
   * @remarks
   * The maximum quota.
   * 
   * @example
   * 100
   */
  maxQuota?: number;
  /**
   * @remarks
   * The network pod ID.
   */
  networkPodId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The used quota.
   * 
   * @example
   * 10
   */
  usedQuota?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123456789
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ecsSpec: 'EcsSpec',
      gpuCardType: 'GpuCardType',
      machineModel: 'MachineModel',
      maxQuota: 'MaxQuota',
      networkPodId: 'NetworkPodId',
      regionId: 'RegionId',
      usedQuota: 'UsedQuota',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ecsSpec: 'string',
      gpuCardType: 'string',
      machineModel: 'string',
      maxQuota: 'number',
      networkPodId: 'string',
      regionId: 'string',
      usedQuota: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

