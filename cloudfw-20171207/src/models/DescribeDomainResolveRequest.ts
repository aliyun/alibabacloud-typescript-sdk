// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainResolveRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name whose DNS record you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The IP version of the asset that is protected by Cloud Firewall. Valid values:
   * 
   * *   **4**: IPv4 (default)
   * *   **6**: IPv6
   * 
   * @example
   * 6
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language of the content within the response.
   * 
   * Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ipVersion: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

