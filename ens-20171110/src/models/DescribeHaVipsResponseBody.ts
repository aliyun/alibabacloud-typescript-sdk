// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHaVipsResponseBodyHaVipsAssociatedEipAddresses extends $dara.Model {
  /**
   * @remarks
   * The IP address of the EIP.
   * 
   * @example
   * 47.XX.XX.40
   */
  eip?: string;
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * @example
   * eip-5p1wz****
   */
  eipId?: string;
  static names(): { [key: string]: string } {
    return {
      eip: 'Eip',
      eipId: 'EipId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eip: 'string',
      eipId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponseBodyHaVipsAssociatedInstances extends $dara.Model {
  /**
   * @remarks
   * The time when the association was created. The time is in the ISO 8601 UTC format of YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2023-01-05T07:09:28Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-51p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance to attach to the HaVip. Valid values:
   * 
   * - EnsInstance: An ENS cloud server instance.
   * - NetworkInterface: An elastic network interfaces (ENIs) instance, which is a network interface controller (NIC).
   * 
   * @example
   * EnsInstance
   */
  instanceType?: string;
  /**
   * @remarks
   * The private IP address of the associated instance.
   * 
   * @example
   * 192.XX.XX.9
   */
  ipAddress?: string;
  /**
   * @remarks
   * The association status of the HaVip instance. Valid values:
   * - Associating: The HaVip is being associated.
   * - InUse: The HaVip is available.
   * - Unassociating: The HaVip is being disassociated.
   * 
   * @example
   * InUse
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ipAddress: 'IpAddress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      ipAddress: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponseBodyHaVips extends $dara.Model {
  /**
   * @remarks
   * The elastic IP addresses (EIPs) associated with the HaVip.
   */
  associatedEipAddresses?: DescribeHaVipsResponseBodyHaVipsAssociatedEipAddresses[];
  /**
   * @remarks
   * The instances associated with the HaVip.
   */
  associatedInstances?: DescribeHaVipsResponseBodyHaVipsAssociatedInstances[];
  /**
   * @remarks
   * The time when the HaVip was created. The time is in the ISO 8601 UTC format of YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2023-03-29T11:17:38Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the HaVip instance.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the ENS node.
   * 
   * @example
   * cn-guiyang-14
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The HaVip instance ID.
   * 
   * @example
   * havip-52y28****
   */
  haVipId?: string;
  /**
   * @remarks
   * The IP address of the HaVip.
   * 
   * @example
   * 192.XX.XX.5
   */
  ipAddress?: string;
  /**
   * @remarks
   * The name of the HaVip instance.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The network ID.
   * 
   * @example
   * n-5wtkyrk****
   */
  networkId?: string;
  /**
   * @remarks
   * The HaVip status. Valid values:
   * - Creating: The HaVip is being created.
   * - Available: The HaVip is available.
   * - InUse: The HaVip is in use.
   * - Deleting: The HaVip is being deleted.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-5yc8d****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      associatedEipAddresses: 'AssociatedEipAddresses',
      associatedInstances: 'AssociatedInstances',
      creationTime: 'CreationTime',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      haVipId: 'HaVipId',
      ipAddress: 'IpAddress',
      name: 'Name',
      networkId: 'NetworkId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedEipAddresses: { 'type': 'array', 'itemType': DescribeHaVipsResponseBodyHaVipsAssociatedEipAddresses },
      associatedInstances: { 'type': 'array', 'itemType': DescribeHaVipsResponseBodyHaVipsAssociatedInstances },
      creationTime: 'string',
      description: 'string',
      ensRegionId: 'string',
      haVipId: 'string',
      ipAddress: 'string',
      name: 'string',
      networkId: 'string',
      status: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.associatedEipAddresses)) {
      $dara.Model.validateArray(this.associatedEipAddresses);
    }
    if(Array.isArray(this.associatedInstances)) {
      $dara.Model.validateArray(this.associatedInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the HaVips.
   */
  haVips?: DescribeHaVipsResponseBodyHaVips[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAE90880-4970-4D81-A534-A6C0F3631F74
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 49
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      haVips: 'HaVips',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVips: { 'type': 'array', 'itemType': DescribeHaVipsResponseBodyHaVips },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.haVips)) {
      $dara.Model.validateArray(this.haVips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

