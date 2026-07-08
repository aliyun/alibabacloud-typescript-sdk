// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainDNSRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The DNS status. Valid values:
   * 
   * - **cnameMatched**: Normal.
   * 
   * - **vipMatched**: A record.
   * 
   * - **wafVip**: The VIP of another WAF is used.
   * 
   * - **unRecord**: No DNS resolution is configured.
   * 
   * - **unUsed**: Traffic does not pass through WAF.
   * 
   * - **checkTimeout**: The detection timed out.
   * 
   * @example
   * cnameMatched
   */
  DNSStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D827FCFE-90A7-4330-9326-D33C8B4C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DNSStatus: 'DNSStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DNSStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

