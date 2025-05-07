// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainDNSRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the DNS settings. Valid values:
   * 
   * *   **cnameMatched**: The DNS settings are properly configured.
   * *   **vipMatched**: An A record maps the domain name to the WAF virtual IP address (VIP).
   * *   **wafVip**: An A record maps the domain name to another WAF VIP.
   * *   **unRecord**: The domain name does not have a DNS record.
   * *   **unUsed**: The domain name is not pointed to WAF.
   * *   **checkTimeout**: The check times out.
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

