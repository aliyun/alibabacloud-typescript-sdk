// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachCcnInstanceToCenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Connect Network (CCN) instance to attach.
   * 
   * @example
   * ccn-isdjvvkexkrpk*****
   */
  ccnId?: string;
  /**
   * @remarks
   * The ID of the CEN instance to authorize.
   * 
   * @example
   * cen-joimmi1s2ob3rdxw79
   */
  cenId?: string;
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
   * The Internet CIDR block used when the Cloud Connect Network (CCN) instance is attached to the CEN instance.
   * 
   * @example
   * 172.16.55.0/24
   */
  subnet?: string;
  static names(): { [key: string]: string } {
    return {
      ccnId: 'CcnId',
      cenId: 'CenId',
      regionId: 'RegionId',
      subnet: 'Subnet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnId: 'string',
      cenId: 'string',
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

