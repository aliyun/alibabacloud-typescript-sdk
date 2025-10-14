// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressTagsTag extends $dara.Model {
  key?: string;
  /**
   * @deprecated
   */
  tagKey?: string;
  /**
   * @deprecated
   */
  tagValue?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      tagKey: 'string',
      tagValue: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressTags extends $dara.Model {
  tag?: DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsEipAddressesResponseBodyEipAddressesEipAddress extends $dara.Model {
  allocationId?: string;
  allocationTime?: string;
  bandwidth?: number;
  chargeType?: string;
  description?: string;
  ensRegionId?: string;
  icmpReplyEnabled?: boolean;
  instanceId?: string;
  instanceType?: string;
  internetChargeType?: string;
  ipAddress?: string;
  ipStatus?: string;
  isp?: string;
  name?: string;
  standby?: boolean;
  status?: string;
  tags?: DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressTags;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      allocationTime: 'AllocationTime',
      bandwidth: 'Bandwidth',
      chargeType: 'ChargeType',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      icmpReplyEnabled: 'IcmpReplyEnabled',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
      ipStatus: 'IpStatus',
      isp: 'Isp',
      name: 'Name',
      standby: 'Standby',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      allocationTime: 'string',
      bandwidth: 'number',
      chargeType: 'string',
      description: 'string',
      ensRegionId: 'string',
      icmpReplyEnabled: 'boolean',
      instanceId: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      ipAddress: 'string',
      ipStatus: 'string',
      isp: 'string',
      name: 'string',
      standby: 'boolean',
      status: 'string',
      tags: DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsEipAddressesResponseBodyEipAddresses extends $dara.Model {
  eipAddress?: DescribeEnsEipAddressesResponseBodyEipAddressesEipAddress[];
  static names(): { [key: string]: string } {
    return {
      eipAddress: 'EipAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddress: { 'type': 'array', 'itemType': DescribeEnsEipAddressesResponseBodyEipAddressesEipAddress },
    };
  }

  validate() {
    if(Array.isArray(this.eipAddress)) {
      $dara.Model.validateArray(this.eipAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsEipAddressesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the EIPs.
   * 
   * @example
   * [\\"106.14.194.193\\"]
   */
  eipAddresses?: DescribeEnsEipAddressesResponseBodyEipAddresses;
  /**
   * @remarks
   * The page number. Valid values: an integer that is greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Valid values: **10** to **100**.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8629F679-B51D-4194-A1CC-5D8F504C362B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      eipAddresses: 'EipAddresses',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddresses: DescribeEnsEipAddressesResponseBodyEipAddresses,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.eipAddresses && typeof (this.eipAddresses as any).validate === 'function') {
      (this.eipAddresses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

