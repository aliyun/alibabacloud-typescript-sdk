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

export class DescribeEnsNetDistrictResponseBodyEnsNetDistricts extends $dara.Model {
  ensNetDistrict?: DescribeEnsNetDistrictResponseBodyEnsNetDistrictsEnsNetDistrict[];
  static names(): { [key: string]: string } {
    return {
      ensNetDistrict: 'EnsNetDistrict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensNetDistrict: { 'type': 'array', 'itemType': DescribeEnsNetDistrictResponseBodyEnsNetDistrictsEnsNetDistrict },
    };
  }

  validate() {
    if(Array.isArray(this.ensNetDistrict)) {
      $dara.Model.validateArray(this.ensNetDistrict);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetDistrictResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned service code. A value of 0 indicates that the operation was successful.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The information about the regions.
   */
  ensNetDistricts?: DescribeEnsNetDistrictResponseBodyEnsNetDistricts;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F3B261DD-3858-4D3C-877D-303ADF374600
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ensNetDistricts: 'EnsNetDistricts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ensNetDistricts: DescribeEnsNetDistrictResponseBodyEnsNetDistricts,
      requestId: 'string',
    };
  }

  validate() {
    if(this.ensNetDistricts && typeof (this.ensNetDistricts as any).validate === 'function') {
      (this.ensNetDistricts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

