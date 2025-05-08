// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsNetDistrictResponseBodyEnsNetDistrictsEnsNetDistrict extends $dara.Model {
  /**
   * @remarks
   * The number of nodes in the region.
   * 
   * @example
   * 2
   */
  ensRegionIdCount?: string;
  /**
   * @remarks
   * The code of the region.
   * 
   * @example
   * 100106
   */
  netDistrictCode?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * southWest
   */
  netDistrictEnName?: string;
  /**
   * @remarks
   * The parent code of the region.
   * 
   * @example
   * 100000
   */
  netDistrictFatherCode?: string;
  /**
   * @remarks
   * The level of the region.
   * 
   * *   **Big**: area
   * *   **Middle**: province
   * *   **Small**: city
   * 
   * @example
   * Big
   */
  netDistrictLevel?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * southwest China
   */
  netDistrictName?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionIdCount: 'EnsRegionIdCount',
      netDistrictCode: 'NetDistrictCode',
      netDistrictEnName: 'NetDistrictEnName',
      netDistrictFatherCode: 'NetDistrictFatherCode',
      netDistrictLevel: 'NetDistrictLevel',
      netDistrictName: 'NetDistrictName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionIdCount: 'string',
      netDistrictCode: 'string',
      netDistrictEnName: 'string',
      netDistrictFatherCode: 'string',
      netDistrictLevel: 'string',
      netDistrictName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

