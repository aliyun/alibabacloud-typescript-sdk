// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewaySecurityGroupRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the security group rule.
   * 
   * @example
   * Product center access security group
   */
  description?: string;
  /**
   * @remarks
   * The port ranges.
   */
  portRanges?: string[];
  /**
   * @remarks
   * The security group ID. This parameter is required. The specified security group must be different from the security group associated with the gateway. Otherwise, an error is returned.
   * 
   * @example
   * sg-wz929kxhcdp****
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      portRanges: 'portRanges',
      securityGroupId: 'securityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      portRanges: { 'type': 'array', 'itemType': 'string' },
      securityGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

