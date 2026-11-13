// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * acaf8f54-d40e-4c33-a900-f6c1b345cb47
   */
  clientToken?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * securityGroupId
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * type
   */
  type?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1g14f566kbk8jex****
   */
  vpcId?: string;
  /**
   * @remarks
   * The list of vSwitch IDs.
   */
  vswitchIds?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      name: 'name',
      securityGroupId: 'securityGroupId',
      type: 'type',
      vpcId: 'vpcId',
      vswitchIds: 'vswitchIds',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      name: 'string',
      securityGroupId: 'string',
      type: 'string',
      vpcId: 'string',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vswitchIds)) {
      $dara.Model.validateArray(this.vswitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

