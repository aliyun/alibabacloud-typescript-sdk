// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRatePlanInstanceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the [ListUserRatePlanInstances](~~ListUserRatePlanInstances~~) operation to obtain the instance ID.
   * 
   * @example
   * xcdn-91fknmb80f0g***
   */
  instanceId?: string;
  /**
   * @remarks
   * The resource owner account.
   * 
   * @example
   * 1700594193617909
   */
  resourceOwner?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceOwner: 'ResourceOwner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceOwner: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

