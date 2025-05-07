// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDDoSStatusResponseBodyDDoSStatus } from "./DescribeDdoSstatusResponseBodyDdoSstatus";


export class DescribeDDoSStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether DDoS attacks occur on specific domain names.
   */
  DDoSStatus?: DescribeDDoSStatusResponseBodyDDoSStatus[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DDoSStatus: 'DDoSStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDoSStatus: { 'type': 'array', 'itemType': DescribeDDoSStatusResponseBodyDDoSStatus },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DDoSStatus)) {
      $dara.Model.validateArray(this.DDoSStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

