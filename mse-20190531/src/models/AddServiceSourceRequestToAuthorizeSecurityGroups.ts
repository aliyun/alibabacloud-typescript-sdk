// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddServiceSourceRequestToAuthorizeSecurityGroups extends $dara.Model {
  /**
   * @remarks
   * The description of the authorization record.
   * 
   * @example
   * rule for xxx
   */
  description?: string;
  /**
   * @remarks
   * The authorized port range of the security group. You can select multiple port ranges. Separate each port range with a comma (,).
   * 
   * @example
   * 8080/8080,9000/10000
   */
  portRange?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-bp1acepclex0vmi1****
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      portRange: 'PortRange',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      portRange: 'string',
      securityGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

