// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainDNSRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The DNS status. Valid values:
   * 
   * - **cnameMatched**: The DNS record is normal.
   * 
   * - **vipMatched**: The domain name is mapped to an A record.
   * 
   * - **wafVip**: The domain name is mapped to the virtual IP address (VIP) of another WAF instance.
   * 
   * - **unRecord**: No DNS record is configured.
   * 
   * - **unUsed**: Traffic is not forwarded to WAF.
   * 
   * - **checkTimeout**: The check timed out.
   * 
   * @example
   * cnameMatched
   */
  DNSStatus?: string;
  /**
   * @remarks
   * The ID of the request.
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

