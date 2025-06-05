// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupsResponseBodyContainerGroupsHostAliases extends $dara.Model {
  /**
   * @remarks
   * The information about the hosts.
   */
  hostnames?: string[];
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 192.0.XX.XX
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      hostnames: 'Hostnames',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostnames: { 'type': 'array', 'itemType': 'string' },
      ip: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostnames)) {
      $dara.Model.validateArray(this.hostnames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

