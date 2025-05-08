// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsNetSaleDistrictResponseBodyEnsNetDistrictsEnsNetDistrict } from "./DescribeEnsNetSaleDistrictResponseBodyEnsNetDistrictsEnsNetDistrict";


export class DescribeEnsNetSaleDistrictResponseBodyEnsNetDistricts extends $dara.Model {
  ensNetDistrict?: DescribeEnsNetSaleDistrictResponseBodyEnsNetDistrictsEnsNetDistrict[];
  static names(): { [key: string]: string } {
    return {
      ensNetDistrict: 'EnsNetDistrict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensNetDistrict: { 'type': 'array', 'itemType': DescribeEnsNetSaleDistrictResponseBodyEnsNetDistrictsEnsNetDistrict },
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

