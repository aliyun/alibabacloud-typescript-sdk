// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMachineNetworkInfoResponseBodyMachineNetworkInfo extends $dara.Model {
  /**
   * @remarks
   * The cluster network.
   * 
   * @example
   * vpc/acl
   */
  clusterNet?: string;
  /**
   * @remarks
   * Indicates whether jumbo frames are enabled.
   * 
   * @example
   * true
   */
  enableJumboFrame?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * B1
   */
  hpnZone?: string;
  /**
   * @remarks
   * Indicates whether the machine is in DPU mode.
   * 
   * @example
   * true
   */
  isDpuMode?: boolean;
  /**
   * @remarks
   * The machine type.
   * 
   * @example
   * efg1.nvga8n
   */
  machineType?: string;
  /**
   * @remarks
   * The network architecture.
   * 
   * @example
   * XX-7.0
   */
  netArch?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterNet: 'ClusterNet',
      enableJumboFrame: 'EnableJumboFrame',
      hpnZone: 'HpnZone',
      isDpuMode: 'IsDpuMode',
      machineType: 'MachineType',
      netArch: 'NetArch',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterNet: 'string',
      enableJumboFrame: 'boolean',
      hpnZone: 'string',
      isDpuMode: 'boolean',
      machineType: 'string',
      netArch: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineNetworkInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The network information of the machine types.
   */
  machineNetworkInfo?: ListMachineNetworkInfoResponseBodyMachineNetworkInfo[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      machineNetworkInfo: 'MachineNetworkInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineNetworkInfo: { 'type': 'array', 'itemType': ListMachineNetworkInfoResponseBodyMachineNetworkInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.machineNetworkInfo)) {
      $dara.Model.validateArray(this.machineNetworkInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

