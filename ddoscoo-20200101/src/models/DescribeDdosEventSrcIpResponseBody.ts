// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDDosEventSrcIpResponseBodyIps } from "./DescribeDdosEventSrcIpResponseBodyIps";


export class DescribeDDosEventSrcIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of information about the source IP address of the volumetric attack.
   */
  ips?: DescribeDDosEventSrcIpResponseBodyIps[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 38A0224E-FDBC-4733-A362-B391827FC1E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ips: 'Ips',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ips: { 'type': 'array', 'itemType': DescribeDDosEventSrcIpResponseBodyIps },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

