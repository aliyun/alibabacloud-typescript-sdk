// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrivateNetworkWhiteIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The VPC private network access whitelist or whitelist group configuration of the instance.
   * 
   * @example
   * {"privateNetworkIpWhiteList":["0.0.XX.XX","10.2.XX.XX","192.168.XX.XX/25"]}
   */
  body?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * The modification method. Valid values:
   * 
   * - Cover (default): overwrites the original IP address whitelist with the value of the ips parameter.
   * 
   * - Append: adds the IP addresses specified by the ips parameter to the original IP address whitelist.
   * 
   * - Delete: deletes the IP addresses specified by the ips parameter from the original IP address whitelist. You must retain at least one IP address.
   * 
   * @example
   * Cover
   */
  modifyMode?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
      modifyMode: 'modifyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      clientToken: 'string',
      modifyMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

