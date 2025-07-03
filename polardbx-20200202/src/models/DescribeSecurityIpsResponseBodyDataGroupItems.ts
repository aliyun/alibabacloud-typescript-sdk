// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityIpsResponseBodyDataGroupItems extends $dara.Model {
  /**
   * @example
   * defaultGroup
   */
  groupName?: string;
  /**
   * @example
   * 127.0.0.1,172.168.0.0
   */
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      securityIPList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

