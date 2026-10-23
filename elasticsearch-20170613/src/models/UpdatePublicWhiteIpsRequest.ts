// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePublicWhiteIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The public network access whitelist or whitelist group configuration of the instance.
   * 
   * @example
   * {"publicIpWhitelist":["0.0.0.0/0","0.0.0.0/1"]}
   */
  body?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can be up to 64 ASCII characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * The modification method. Valid values:
   * 
   * - Cover: overwrites the original IP address whitelist with the value of the ips parameter. This is the default value.
   * 
   * - Append: adds the IP addresses specified by the ips parameter to the original IP address whitelist.
   * 
   * - Delete: deletes the IP addresses specified by the ips parameter from the original IP address whitelist. At least one IP address must be retained.
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

