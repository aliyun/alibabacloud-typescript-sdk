// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesHostAliases extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hostNames?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      hostNames: 'HostNames',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostNames: { 'type': 'array', 'itemType': 'string' },
      ip: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostNames)) {
      $dara.Model.validateArray(this.hostNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

