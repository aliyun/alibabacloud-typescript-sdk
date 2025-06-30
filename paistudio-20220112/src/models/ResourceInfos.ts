// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceInfos extends $dara.Model {
  clusterId?: string;
  ecsSpec?: string;
  gpuCardType?: string;
  machineModel?: string;
  maxQuota?: number;
  networkPodId?: string;
  regionId?: string;
  usedQuota?: number;
  userId?: string;
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

