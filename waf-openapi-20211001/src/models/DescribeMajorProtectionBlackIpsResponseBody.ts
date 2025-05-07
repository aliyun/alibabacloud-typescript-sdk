// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMajorProtectionBlackIpsResponseBodyIpList } from "./DescribeMajorProtectionBlackIpsResponseBodyIpList";


export class DescribeMajorProtectionBlackIpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of IP addresses in the IP address blacklist.
   */
  ipList?: DescribeMajorProtectionBlackIpsResponseBodyIpList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 41631674-EEB0-5B02-BEB4-40A758E9B841
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of IP addresses in the blacklist.
   * 
   * @example
   * 63
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipList: 'IpList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: { 'type': 'array', 'itemType': DescribeMajorProtectionBlackIpsResponseBodyIpList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipList)) {
      $dara.Model.validateArray(this.ipList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

