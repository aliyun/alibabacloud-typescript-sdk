// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGroupPropertyRequest extends $dara.Model {
  /**
   * @remarks
   * The new property information of the server group after modification. The following parameters are described:
   * 
   * - **groupFlag**: The type of the server group. Valid values: **0** (default group) | **1** (other group).
   * - **groupId**: The ID of the server group.
   * - **groupIndex**: The sorting number of the server group. Sorted in ascending order.
   * - **groupName**: The name of the server group. Set this parameter to the new name of the server group. The new name must be different from the original name.
   * 
   * > Call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to obtain the values of groupFlag and groupId. The values of groupFlag and groupId cannot be modified. Only the value of groupName can be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"groupFlag":1,"groupId":8436682,"groupIndex":1,"groupName":"example"}]
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

