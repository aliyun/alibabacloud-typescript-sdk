// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCommonAreasRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address protocol used to connect to Global Accelerator (GA). Valid values:
   * - **IPv4** (default): IPv4 address protocol. Queries regions that support IPv4.
   * - **IPv6**: IPv6 address protocol. Queries regions that support IPv6.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * Specifies whether the region is an endpoint group region supported by Global Accelerator.
   * - **true**: Yes.
   * - **false** (default): No.
   * 
   * @example
   * true
   */
  isEpg?: boolean;
  /**
   * @remarks
   * Specifies whether the region is an acceleration area supported by Global Accelerator.
   * - **true**: Yes.
   * - **false** (default): No.
   * 
   * @example
   * true
   */
  isIpSet?: boolean;
  static names(): { [key: string]: string } {
    return {
      ipVersion: 'IpVersion',
      isEpg: 'IsEpg',
      isIpSet: 'IsIpSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipVersion: 'string',
      isEpg: 'boolean',
      isIpSet: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

