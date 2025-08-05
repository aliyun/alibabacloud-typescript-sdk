// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyControlPolicyPriorityRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 3770d603-3534-4878-b845-f00095ee5048
   */
  aclUuid?: string;
  /**
   * @remarks
   * The priority of the access control policy.
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

