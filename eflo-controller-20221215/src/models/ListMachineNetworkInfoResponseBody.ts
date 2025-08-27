// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMachineNetworkInfoResponseBodyMachineNetworkInfo extends $dara.Model {
  /**
   * @remarks
   * Network of cluster
   * 
   * @example
   * vpc/acl
   */
  clusterNet?: string;
  /**
   * @remarks
   * Specifies whether to enable the Jumbo Frames feature for the instance. Valid values:
   * 
   * *   true: The Jumbo Frame feature is enabled for the instance.
   * *   false: The Jumbo Frame feature is disabled for the instance.
   * 
   * Take note of the following items:
   * 
   * *   The instance must be in the Running (`Running`) or Stopped (`Stopped`) state.
   * *   The instance must reside in a VPC.
   * *   After the Jumbo Frames feature is enabled, the MTU value of the instance is set to 8500. After the Jumbo Frames feature is disabled, the MTU value of the instance is set to 1500. You can enable the Jumbo Frames feature only for specific instance types. For more information, see [Jumbo Frames](https://help.aliyun.com/document_detail/200512.html).
   * 
   * @example
   * true
   */
  enableJumboFrame?: boolean;
  /**
   * @remarks
   * HPN zone
   * 
   * @example
   * B1
   */
  hpnZone?: string;
  /**
   * @remarks
   * Specifies whether dpu machine.
   * 
   * @example
   * true
   */
  isDpuMode?: boolean;
  /**
   * @remarks
   * The type of machine.
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
   * The ID of the region in which the application is located.
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
   * machine network infomation
   */
  machineNetworkInfo?: ListMachineNetworkInfoResponseBodyMachineNetworkInfo[];
  /**
   * @remarks
   * Id of the request
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

