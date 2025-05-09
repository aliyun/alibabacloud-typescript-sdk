// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStandardGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the security rule set.
   * 
   * This parameter is required.
   * 
   * @example
   * Production Environment test rules
   */
  description?: string;
  /**
   * @remarks
   * The security rule set ID. You can call the [ListStandardGroups](https://help.aliyun.com/document_detail/465940.html) operation to obtain the ID of the security rule set.
   * 
   * This parameter is required.
   * 
   * @example
   * 242***
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the security rule set.
   * 
   * This parameter is required.
   * 
   * @example
   * poc_test
   */
  groupName?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * >  To view the tenant ID, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 23****
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'number',
      groupName: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

