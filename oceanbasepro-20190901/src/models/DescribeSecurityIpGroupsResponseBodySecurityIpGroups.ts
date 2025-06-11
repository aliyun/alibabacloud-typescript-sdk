// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityIpGroupsResponseBodySecurityIpGroups extends $dara.Model {
  /**
   * @example
   * online_paycore
   */
  securityIpGroupName?: string;
  /**
   * @example
   * 121.41.106.33,100.104.7.0/26
   */
  securityIps?: string;
  static names(): { [key: string]: string } {
    return {
      securityIpGroupName: 'SecurityIpGroupName',
      securityIps: 'SecurityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIpGroupName: 'string',
      securityIps: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

