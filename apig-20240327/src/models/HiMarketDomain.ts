// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketDomain extends $dara.Model {
  /**
   * @remarks
   * The custom domain name. This must be a valid DNS hostname.
   */
  domain?: string;
  /**
   * @remarks
   * The network type of the endpoint. For example, `VPC` for an internal network or `INTERNET` for a public network.
   */
  networkType?: string;
  /**
   * @remarks
   * The port number for the endpoint. For example, `80` for HTTP or `443` for HTTPS.
   */
  port?: number;
  /**
   * @remarks
   * The communication protocol. Valid values include `HTTP` and `HTTPS`.
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      networkType: 'networkType',
      port: 'port',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      networkType: 'string',
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

