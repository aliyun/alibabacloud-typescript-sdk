// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeTypeResponseBodyNetworkCards extends $dara.Model {
  /**
   * @remarks
   * The index of the physical network interface controller (NIC), starting from 0. You can specify this index to attach elastic network interfaces (ENIs) to different underlying physical network interface controllers (NICs).
   * 
   * @example
   * 0
   */
  networkCardIndex?: number;
  static names(): { [key: string]: string } {
    return {
      networkCardIndex: 'NetworkCardIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkCardIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of cloud disks that can be mounted.
   * 
   * @example
   * 17
   */
  diskQuantity?: number;
  /**
   * @remarks
   * The maximum number of network interface controllers (NICs) in high-density mode.
   * 
   * @example
   * 63
   */
  eniHighDenseQuantity?: number;
  /**
   * @remarks
   * The maximum number of IPv6 addresses supported by a NIC.
   * 
   * @example
   * 256
   */
  eniIpv6AddressQuantity?: number;
  /**
   * @remarks
   * The maximum number of IPv4 addresses supported by a NIC.
   * 
   * @example
   * 256
   */
  eniPrivateIpAddressQuantity?: number;
  /**
   * @remarks
   * The maximum number of elastic network interfaces (ENIs) supported, including primary and secondary ENIs.
   * 
   * @example
   * 22
   */
  eniQuantity?: number;
  /**
   * @remarks
   * The number of Elastic RDMA Interfaces (ERIs) for the current specification.
   * 
   * @example
   * 24
   */
  eriQuantity?: number;
  /**
   * @remarks
   * The number of physical network interface controllers (NICs) supported by the instance type.
   * 
   * @example
   * 2
   */
  networkCardQuantity?: number;
  /**
   * @remarks
   * The list of physical network interface controllers (NICs), including the details of each physical NIC.
   */
  networkCards?: DescribeNodeTypeResponseBodyNetworkCards[];
  /**
   * @remarks
   * The default number of queues for the primary NIC.
   * 
   * @example
   * 64
   */
  primaryEniQueueNumber?: number;
  /**
   * @remarks
   * The number of queue pairs (QPs) for all Elastic RDMA Interfaces (ERIs) of the current specification.
   * 
   * @example
   * 8
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  /**
   * @remarks
   * The default number of queues for secondary elastic network interfaces (ENIs).
   * 
   * @example
   * 32
   */
  secondaryEniQueueNumber?: number;
  /**
   * @remarks
   * The total queue quota for elastic network interface controllers (NICs) of the current specification.
   * 
   * @example
   * 2000
   */
  totalEniQueueQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      diskQuantity: 'DiskQuantity',
      eniHighDenseQuantity: 'EniHighDenseQuantity',
      eniIpv6AddressQuantity: 'EniIpv6AddressQuantity',
      eniPrivateIpAddressQuantity: 'EniPrivateIpAddressQuantity',
      eniQuantity: 'EniQuantity',
      eriQuantity: 'EriQuantity',
      networkCardQuantity: 'NetworkCardQuantity',
      networkCards: 'NetworkCards',
      primaryEniQueueNumber: 'PrimaryEniQueueNumber',
      queuePairNumber: 'QueuePairNumber',
      requestId: 'RequestId',
      secondaryEniQueueNumber: 'SecondaryEniQueueNumber',
      totalEniQueueQuantity: 'TotalEniQueueQuantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskQuantity: 'number',
      eniHighDenseQuantity: 'number',
      eniIpv6AddressQuantity: 'number',
      eniPrivateIpAddressQuantity: 'number',
      eniQuantity: 'number',
      eriQuantity: 'number',
      networkCardQuantity: 'number',
      networkCards: { 'type': 'array', 'itemType': DescribeNodeTypeResponseBodyNetworkCards },
      primaryEniQueueNumber: 'number',
      queuePairNumber: 'number',
      requestId: 'string',
      secondaryEniQueueNumber: 'number',
      totalEniQueueQuantity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.networkCards)) {
      $dara.Model.validateArray(this.networkCards);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

