// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHaVipsResponseBodyHaVipsAssociatedEipAddresses extends $dara.Model {
  /**
   * @remarks
   * The EIP.
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
   * The time when the instance was created.
   * 
   * @example
   * 2023-01-05T07:09:28Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-51p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance that is associated with the HAVIP. Valid values:
   * 
   * *   EnsInstance: ENS instance
   * *   NetworkInterface: elastic network interface (ENI)
   * 
   * @example
   * EnsInstance
   */
  instanceType?: string;
  /**
   * @remarks
   * The private IP address of the instance that is associated with the HAVIP. Valid values:
   * 
   * @example
   * 192.XX.XX.9
   */
  ipAddress?: string;
  /**
   * @remarks
   * The association status of the HAVIP. Valid values:
   * 
   * *   Associating
   * *   InUse
   * *   Unassociating
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
   * The elastic IP addresses (EIPs) that are associated with the HAVIP.
   */
  associatedEipAddresses?: DescribeHaVipsResponseBodyHaVipsAssociatedEipAddresses[];
  /**
   * @remarks
   * The information about instances that are associated with the HAVIP.
   */
  associatedInstances?: DescribeHaVipsResponseBodyHaVipsAssociatedInstances[];
  /**
   * @remarks
   * The time when the HAVIP was created.
   * 
   * @example
   * 2023-03-29T11:17:38Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the HAVIP.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-guiyang-14
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the HAVIP.
   * 
   * @example
   * havip-52y28****
   */
  haVipId?: string;
  /**
   * @remarks
   * The IP address of the HAVIP.
   * 
   * @example
   * 192.XX.XX.5
   */
  ipAddress?: string;
  /**
   * @remarks
   * The name of the HAVIP.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * n-5wtkyrk****
   */
  networkId?: string;
  /**
   * @remarks
   * The status of the HAVIP. Valid values:
   * 
   * *   Creating
   * *   Available
   * *   InUse
   * *   Deleting
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
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
   * Details of the HAVIPs.
   */
  haVips?: DescribeHaVipsResponseBodyHaVips[];
  /**
   * @remarks
   * The page number.
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

