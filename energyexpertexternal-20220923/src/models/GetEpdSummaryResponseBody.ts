// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEpdSummaryResponseBodyData } from "./GetEpdSummaryResponseBodyData";


export class GetEpdSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response parameters
   */
  data?: GetEpdSummaryResponseBodyData[];
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * B91B5559-065A-55C3-8D75-DA218EBFD1DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetEpdSummaryResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

