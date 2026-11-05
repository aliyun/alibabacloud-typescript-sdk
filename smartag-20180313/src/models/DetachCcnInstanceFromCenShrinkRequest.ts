// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachCcnInstanceFromCenShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the attached Cloud Connect Network (CCN).
   * 
   * @example
   * ccn-isdjvvkexkrpk*****
   */
  ccnId?: string;
  /**
   * @remarks
   * The ID of the CEN instance from which you want to revoke authorization.
   * 
   * @example
   * cen-9j8gkkj7z9vie9a8z9
   */
  cenId?: string;
  /**
   * @remarks
   * The list of transit routers to be disassociated from the CCN.
   */
  regionBindingListShrink?: string;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway instance. You can call the DescribeRegions operation to query the regions supported by Smart Access Gateway and the corresponding region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ccnId: 'CcnId',
      cenId: 'CenId',
      regionBindingListShrink: 'RegionBindingList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnId: 'string',
      cenId: 'string',
      regionBindingListShrink: 'string',
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

