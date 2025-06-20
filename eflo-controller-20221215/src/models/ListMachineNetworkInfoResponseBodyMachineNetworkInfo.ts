// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMachineNetworkInfoResponseBodyMachineNetworkInfo extends $dara.Model {
  /**
   * @example
   * vpc/acl
   */
  clusterNet?: string;
  /**
   * @example
   * true
   */
  enableJumboFrame?: boolean;
  /**
   * @example
   * B1
   */
  hpnZone?: string;
  /**
   * @example
   * true
   */
  isDpuMode?: boolean;
  /**
   * @example
   * efg1.nvga8n
   */
  machineType?: string;
  /**
   * @example
   * XX-7.0
   */
  netArch?: string;
  /**
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

