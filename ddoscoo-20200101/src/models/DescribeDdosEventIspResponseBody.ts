// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDDosEventIspResponseBodyIsps } from "./DescribeDdosEventIspResponseBodyIsps";


export class DescribeDDosEventIspResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ISPs for the volumetric attack.
   */
  isps?: DescribeDDosEventIspResponseBodyIsps[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C4A3BCD1-4A32-4342-941A-4745AE69508C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isps: 'Isps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isps: { 'type': 'array', 'itemType': DescribeDDosEventIspResponseBodyIsps },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.isps)) {
      $dara.Model.validateArray(this.isps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

