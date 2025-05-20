// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMachineNetworkInfoResponseBodyMachineNetworkInfo extends $dara.Model {
  /**
   * @remarks
   * Cluster network
   * 
   * @example
   * vpc/acl
   */
  clusterNet?: string;
  /**
   * @remarks
   * Whether jumbo frame capability is enabled
   * 
   * @example
   * true
   */
  enableJumboFrame?: boolean;
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * B1
   */
  hpnZone?: string;
  /**
   * @remarks
   * Whether it is in DPU mode
   * 
   * @example
   * true
   */
  isDpuMode?: boolean;
  /**
   * @remarks
   * Machine type
   * 
   * @example
   * efg1.nvga8n
   */
  machineType?: string;
  /**
   * @remarks
   * Network architecture
   * 
   * @example
   * XX-7.0
   */
  netArch?: string;
  /**
   * @remarks
   * 地域ID。
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

