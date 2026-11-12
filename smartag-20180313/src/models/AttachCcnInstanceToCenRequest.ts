// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachCcnInstanceToCenRequestRegionBindingList extends $dara.Model {
  /**
   * @remarks
   * The custom CIDR block for each region when the CidrAllocationMode parameter is set to PER_REGION.
   * 
   * @example
   * 192.168.60.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The region ID of the transit router.
   * 
   * @example
   * cn-shanghai-finance-1
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the transit router used for forward routing.
   * 
   * @example
   * tr-wz9h1y152p7bajkehs5a3
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      regionId: 'RegionId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      regionId: 'string',
      transitRouterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachCcnInstanceToCenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Connect Network (CCN) to attach.
   * 
   * @example
   * ccn-isdjvvkexkrpk*****
   */
  ccnId?: string;
  /**
   * @remarks
   * The ID of the CEN instance to which you want to attach the CCN instance.
   * 
   * @example
   * cen-joimmi1s2ob3rdxw79
   */
  cenId?: string;
  /**
   * @remarks
   * The CIDR block allocation mode. Valid values: - PER_REGION: Custom CIDR blocks are allocated for each region. - UNIFIED: A unified CIDR block is allocated.
   * 
   * @example
   * UNIFIED
   */
  cidrAllocationMode?: string;
  /**
   * @remarks
   * The list of transit routers to be newly attached to the CCN instance.
   */
  regionBindingList?: AttachCcnInstanceToCenRequestRegionBindingList[];
  /**
   * @remarks
   * The region ID of the Cloud Connect Network (CCN) instance. You can invoke the DescribeRegions operation to query the regions supported by Smart Access Gateway and the corresponding region IDs.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The Internet CIDR block used to attach the Cloud Connect Network (CCN) to the Cloud Enterprise Network (CEN).
   * 
   * @example
   * 172.16.55.0/24
   */
  subnet?: string;
  static names(): { [key: string]: string } {
    return {
      ccnId: 'CcnId',
      cenId: 'CenId',
      cidrAllocationMode: 'CidrAllocationMode',
      regionBindingList: 'RegionBindingList',
      regionId: 'RegionId',
      subnet: 'Subnet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnId: 'string',
      cenId: 'string',
      cidrAllocationMode: 'string',
      regionBindingList: { 'type': 'array', 'itemType': AttachCcnInstanceToCenRequestRegionBindingList },
      regionId: 'string',
      subnet: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regionBindingList)) {
      $dara.Model.validateArray(this.regionBindingList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

