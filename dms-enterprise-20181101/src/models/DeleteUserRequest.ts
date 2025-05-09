// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the tenant. 
   * 
   * >  To view the ID of the tenant, move the pointer over the profile picture in the upper-right corner of the DMS console. For more information, see the "View information about the current tenant" section of the [Manage DMS tenants](https://www.alibabacloud.com/help/en/data-management-service/latest/manage-dms-tenants) topic.
   * 
   * @example
   * -1
   */
  tid?: number;
  /**
   * @remarks
   * The unique ID (UID) of Alibaba Cloud account to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

