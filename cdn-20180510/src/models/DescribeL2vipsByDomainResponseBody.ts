// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeL2VipsByDomainResponseBodyVips } from "./DescribeL2vipsByDomainResponseBodyVips";


export class DescribeL2VipsByDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * The list of VIPs.
   */
  vips?: DescribeL2VipsByDomainResponseBodyVips;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      requestId: 'RequestId',
      vips: 'Vips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      requestId: 'string',
      vips: DescribeL2VipsByDomainResponseBodyVips,
    };
  }

  validate() {
    if(this.vips && typeof (this.vips as any).validate === 'function') {
      (this.vips as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

