// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudUnassignedMachinesResponseBodyUnassignedMachines extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 16
   */
  cpu?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * exampleName
   */
  customName?: string;
  /**
   * @remarks
   * The host name.
   * 
   * @example
   * online-xagent1
   */
  hostName?: string;
  /**
   * @remarks
   * The IP address of the server.
   * 
   * @example
   * 1.X.X.1
   */
  ip?: string;
  /**
   * @remarks
   * The media access control (MAC) address of the device.
   * 
   * @example
   * 00163e2686ac
   */
  mac?: string;
  /**
   * @remarks
   * The memory size. Unit: KB. A conversion factor of 1,000 is used.
   * 
   * @example
   * 31580872
   */
  memory?: number;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 78db009ab6cf055a9085f9f4****ae3a
   */
  mid?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      customName: 'CustomName',
      hostName: 'HostName',
      ip: 'Ip',
      mac: 'Mac',
      memory: 'Memory',
      mid: 'Mid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      customName: 'string',
      hostName: 'string',
      ip: 'string',
      mac: 'string',
      memory: 'number',
      mid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudUnassignedMachinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3EBCFCE9-4A3C-5E01-915D-691B****510A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 28
   */
  totalCount?: number;
  /**
   * @remarks
   * The servers that are not assigned to the hybrid cloud cluster.
   */
  unassignedMachines?: DescribeHybridCloudUnassignedMachinesResponseBodyUnassignedMachines[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      unassignedMachines: 'UnassignedMachines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      unassignedMachines: { 'type': 'array', 'itemType': DescribeHybridCloudUnassignedMachinesResponseBodyUnassignedMachines },
    };
  }

  validate() {
    if(Array.isArray(this.unassignedMachines)) {
      $dara.Model.validateArray(this.unassignedMachines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

