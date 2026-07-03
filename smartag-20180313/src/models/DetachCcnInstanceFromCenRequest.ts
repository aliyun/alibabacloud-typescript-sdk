// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachCcnInstanceFromCenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Connect Network (CCN) that is bound to the CEN instance.
   * 
   * @example
   * ccn-isdjvvkexkrpk*****
   */
  ccnId?: string;
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance from which you want to revoke the authorization.
   * 
   * @example
   * cen-9j8gkkj7z9vie9a8z9
   */
  cenId?: string;
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
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnId: 'string',
      cenId: 'string',
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

