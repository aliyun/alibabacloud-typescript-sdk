// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStandardGroupRequest extends $dara.Model {
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
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 23****
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
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

