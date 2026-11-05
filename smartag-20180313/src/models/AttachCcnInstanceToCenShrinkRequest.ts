// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachCcnInstanceToCenShrinkRequest extends $dara.Model {
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
   * The ID of the CEN instance.
   * 
   * @example
   * cen-joimmi1s2ob3rdxw79
   */
  cenId?: string;
  /**
   * @remarks
   * The CIDR block allocation mode. Valid values: PER_REGION and UNIFIED. PER_REGION indicates that a custom CIDR block is specified for each region. UNIFIED indicates that CIDR blocks are allocated in a unified manner.
   * 
   * @example
   * UNIFIED
   */
  cidrAllocationMode?: string;
  /**
   * @remarks
   * The list of transit routers (TRs) to be attached to the CCN.
   */
  regionBindingListShrink?: string;
  /**
   * @remarks
   * The region ID of the Cloud Connect Network (CCN) instance. You can call the DescribeRegions operation to query the regions supported by Smart Access Gateway and the corresponding region IDs.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The Internet CIDR block used when the Cloud Connect Network (CCN) is attached to the Cloud Enterprise Network (CEN).
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
      regionBindingListShrink: 'RegionBindingList',
      regionId: 'RegionId',
      subnet: 'Subnet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnId: 'string',
      cenId: 'string',
      cidrAllocationMode: 'string',
      regionBindingListShrink: 'string',
      regionId: 'string',
      subnet: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

