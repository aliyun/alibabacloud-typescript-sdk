// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachCcnInstanceFromCenRequestRegionBindingList extends $dara.Model {
  /**
   * @remarks
   * The region ID of the transit router to be disassociated.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the forward routing transit router.
   * 
   * @example
   * tr-uf6mja2ssto2twh8u03xw
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DetachCcnInstanceFromCenRequest extends $dara.Model {
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
  regionBindingList?: DetachCcnInstanceFromCenRequestRegionBindingList[];
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
      regionBindingList: 'RegionBindingList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnId: 'string',
      cenId: 'string',
      regionBindingList: { 'type': 'array', 'itemType': DetachCcnInstanceFromCenRequestRegionBindingList },
      regionId: 'string',
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

