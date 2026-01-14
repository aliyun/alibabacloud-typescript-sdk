// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCommonAreasRequest extends $dara.Model {
  /**
   * @remarks
   * The IP version used to connect to the GA instance. Valid values:
   * 
   * *   **IPv4** (default)
   * *   **IPv6**
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * Specifies whether to query regions where endpoint groups of GA can be deployed. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * @example
   * true
   */
  isEpg?: boolean;
  /**
   * @remarks
   * Specifies whether to query regions supported by GA. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
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

