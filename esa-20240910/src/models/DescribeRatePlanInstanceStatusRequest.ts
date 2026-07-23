// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRatePlanInstanceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can obtain the ID by calling the [ListUserRatePlanInstances](~~ListUserRatePlanInstances~~) operation.
   * 
   * @example
   * xcdn-91fknmb80f0g***
   */
  instanceId?: string;
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

