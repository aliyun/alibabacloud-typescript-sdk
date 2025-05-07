// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceDetailsResponseBodyRdsEcsSecurityGroupRel extends $dara.Model {
  /**
   * @remarks
   * The name of the security group.
   * 
   * @example
   * test_switch
   */
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

