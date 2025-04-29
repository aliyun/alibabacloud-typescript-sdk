// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacitySocketCapacitiesSocketCapacity extends $dara.Model {
  /**
   * @remarks
   * The amount of available memory. Unit: GiB.
   * 
   * @example
   * 65
   */
  availableMemory?: number;
  /**
   * @remarks
   * The number of available vCPUs.
   * 
   * @example
   * 64
   */
  availableVcpu?: number;
  /**
   * @remarks
   * The socket ID.
   * 
   * @example
   * 1
   */
  socketId?: number;
  /**
   * @remarks
   * The total amount of memory. Unit: GiB.
   * 
   * @example
   * 128
   */
  totalMemory?: number;
  /**
   * @remarks
   * The total number of vCPUs.
   * 
   * @example
   * 128
   */
  totalVcpu?: number;
  static names(): { [key: string]: string } {
    return {
      availableMemory: 'AvailableMemory',
      availableVcpu: 'AvailableVcpu',
      socketId: 'SocketId',
      totalMemory: 'TotalMemory',
      totalVcpu: 'TotalVcpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableMemory: 'number',
      availableVcpu: 'number',
      socketId: 'number',
      totalMemory: 'number',
      totalVcpu: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

