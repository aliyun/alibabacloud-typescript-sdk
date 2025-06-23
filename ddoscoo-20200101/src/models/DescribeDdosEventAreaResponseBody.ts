// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDDosEventAreaResponseBodyAreas } from "./DescribeDdosEventAreaResponseBodyAreas";


export class DescribeDDosEventAreaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the source region from which the volumetric attack was initiated.
   */
  areas?: DescribeDDosEventAreaResponseBodyAreas[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 11710C9F-BC5E-481A-BEC5-C6D8FBFCA827
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      areas: 'Areas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areas: { 'type': 'array', 'itemType': DescribeDDosEventAreaResponseBodyAreas },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.areas)) {
      $dara.Model.validateArray(this.areas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

