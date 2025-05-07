// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOfficeSitesResponseBodyOfficeSites } from "./DescribeOfficeSitesResponseBodyOfficeSites";


export class DescribeOfficeSitesResponseBody extends $dara.Model {
  officeSites?: DescribeOfficeSitesResponseBodyOfficeSites[];
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      officeSites: 'OfficeSites',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSites: { 'type': 'array', 'itemType': DescribeOfficeSitesResponseBodyOfficeSites },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.officeSites)) {
      $dara.Model.validateArray(this.officeSites);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

