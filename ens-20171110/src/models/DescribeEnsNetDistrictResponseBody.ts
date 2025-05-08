// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsNetDistrictResponseBodyEnsNetDistricts } from "./DescribeEnsNetDistrictResponseBodyEnsNetDistricts";


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

