// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsRegionIdIpv6InfoResponseBodySupportIpv6Info } from "./DescribeEnsRegionIdIpv6infoResponseBodySupportIpv6info";


export class DescribeEnsRegionIdIpv6InfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3703C4AC-9396-458C-8F25-1D701334D309
   */
  requestId?: string;
  /**
   * @remarks
   * IPv6 support information.
   */
  supportIpv6Info?: DescribeEnsRegionIdIpv6InfoResponseBodySupportIpv6Info;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportIpv6Info: 'SupportIpv6Info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportIpv6Info: DescribeEnsRegionIdIpv6InfoResponseBodySupportIpv6Info,
    };
  }

  validate() {
    if(this.supportIpv6Info && typeof (this.supportIpv6Info as any).validate === 'function') {
      (this.supportIpv6Info as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

