// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigL7UsKeepaliveRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website.
   * 
   * >  A forwarding rule must be configured for the domain name. You can call the [DescribeDomains](https://help.aliyun.com/document_detail/91724.html) operation to query all domain names.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The settings for back-to-origin persistent connections. The value is a string that consists of a JSON struct. The JSON struct contains the following fields:
   * 
   * *   **enabled**: the switch for back-to-origin persistent connections. This field is required, and the value is of the Boolean type.
   * *   **keepalive_requests**: the number of requests that reuse a persistent connection. This field is required, and the value is of the integer type.
   * *   **keepalive_timeout**: the timeout period for an idle persistent connection. This field is required, and the value is of the integer type.
   * 
   * This parameter is required.
   * 
   * @example
   * {"enabled": true, "keepalive_requests": 1000,"keepalive_timeout": 30}
   */
  upstreamKeepalive?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      upstreamKeepalive: 'UpstreamKeepalive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      upstreamKeepalive: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

