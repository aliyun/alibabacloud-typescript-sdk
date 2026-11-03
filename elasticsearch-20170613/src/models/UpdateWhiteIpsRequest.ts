// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWhiteIpsRequestWhiteIpGroup extends $dara.Model {
  /**
   * @remarks
   * The name of the whitelist group. This parameter is required if the whiteIpGroup parameter is specified.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The list of IP addresses in the whitelist group.
   */
  ips?: string[];
  /**
   * @remarks
   * The type of the IP address whitelist. Set the value to **PRIVATE_ES**, which indicates a private network access whitelist.
   * 
   * @example
   * PRIVATE_ES
   */
  whiteIpType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
      whiteIpType: 'whiteIpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
      whiteIpType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWhiteIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address information in the whitelist.
   */
  esIPWhitelist?: string[];
  /**
   * @remarks
   * Updates the whitelist configuration of the instance by using a whitelist group. You can update only one whitelist group.
   * >Notice:  You cannot configure esIPWhitelist and whiteIpGroup at the same time.
   */
  whiteIpGroup?: UpdateWhiteIpsRequestWhiteIpGroup;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * The modification method. Valid values:
   * 
   * - Cover (default): Overwrites the IP addresses in the original whitelist with the value of the ips parameter.
   * 
   * - Append: Adds the IP addresses specified by the ips parameter to the original whitelist.
   * 
   * - Delete: Removes the IP addresses specified by the ips parameter from the original whitelist. You must retain at least one IP address.
   * 
   * @example
   * Cover
   */
  modifyMode?: string;
  static names(): { [key: string]: string } {
    return {
      esIPWhitelist: 'esIPWhitelist',
      whiteIpGroup: 'whiteIpGroup',
      clientToken: 'clientToken',
      modifyMode: 'modifyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      esIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      whiteIpGroup: UpdateWhiteIpsRequestWhiteIpGroup,
      clientToken: 'string',
      modifyMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.esIPWhitelist)) {
      $dara.Model.validateArray(this.esIPWhitelist);
    }
    if(this.whiteIpGroup && typeof (this.whiteIpGroup as any).validate === 'function') {
      (this.whiteIpGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

