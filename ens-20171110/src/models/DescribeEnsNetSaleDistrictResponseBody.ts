// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsNetSaleDistrictResponseBodyEnsNetDistricts } from "./DescribeEnsNetSaleDistrictResponseBodyEnsNetDistricts";


export class DescribeEnsNetSaleDistrictResponseBody extends $dara.Model {
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
   * The information about the ISPs in the area.
   */
  ensNetDistricts?: DescribeEnsNetSaleDistrictResponseBodyEnsNetDistricts;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1707B55C-A12F-43EF-BC66-14FFDB9253C3
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
      ensNetDistricts: DescribeEnsNetSaleDistrictResponseBodyEnsNetDistricts,
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

