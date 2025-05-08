// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsNetSaleDistrictResponseBodyEnsNetDistrictsEnsNetDistrict extends $dara.Model {
  /**
   * @remarks
   * The information about the ISP.
   * 
   * @example
   * {                         "count":2,                         "name":"telecommunication",                         "code":"telecom",                         "country":"cn"                     }
   */
  ensRegionIdCount?: string;
  /**
   * @remarks
   * The information about the instance.
   * 
   * @example
   * {                         "count":2,                         "code":"multiCarrier"                     }
   */
  instanceCount?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * 100101
   */
  netDistrictCode?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * northEast
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
   * The region level. Valid values:
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
   * The Chinese name of the region.
   * 
   * @example
   * Northeast China
   */
  netDistrictName?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionIdCount: 'EnsRegionIdCount',
      instanceCount: 'InstanceCount',
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
      instanceCount: 'string',
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

