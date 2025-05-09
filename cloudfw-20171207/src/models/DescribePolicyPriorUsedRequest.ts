// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyPriorUsedRequest extends $dara.Model {
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies.
   * 
   * Valid values:
   * 
   * *   **in**: inbound.
   * *   **out**: outbound.
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The IP version of the asset that is protected by Cloud Firewall.
   * 
   * Valid values:
   * 
   * *   **4** (default): IPv4.
   * *   **6**: IPv6.
   * 
   * @example
   * 6
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * Valid values:
   * 
   * *   **zh** (default)
   * *   **en**
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
      direction: 'Direction',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
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

