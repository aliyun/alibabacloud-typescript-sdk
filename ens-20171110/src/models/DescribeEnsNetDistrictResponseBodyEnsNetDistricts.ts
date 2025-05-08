// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsNetDistrictResponseBodyEnsNetDistrictsEnsNetDistrict } from "./DescribeEnsNetDistrictResponseBodyEnsNetDistrictsEnsNetDistrict";


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

