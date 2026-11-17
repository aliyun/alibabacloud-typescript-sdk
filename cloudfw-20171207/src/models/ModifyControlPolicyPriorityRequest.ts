// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyControlPolicyPriorityRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 3770d603-3534-4878-b845-f00095ee****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The priority of the access control policy. Valid values: 1 to the number of policies in the same direction and of the same IP version. You can call DescribeControlPolicy to query the number of policies in the same direction and determine the valid upper limit. If the value exceeds the range, the ErrorParametersNewOrder (-200119) error is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  order?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      order: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

