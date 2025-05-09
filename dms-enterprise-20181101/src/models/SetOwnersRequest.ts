// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetOwnersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user whom you want to specify as an owner. Separate multiple IDs with commas (,). You can call the [GetUser](https://help.aliyun.com/document_detail/147098.html) or [ListUsers](https://help.aliyun.com/document_detail/141938.html) operation to query the ID of the user.
   * 
   * >  The value of the OwnerIds parameter is that of the UserId parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 51****
   */
  ownerIds?: string;
  /**
   * @remarks
   * The type of the owner. Valid values:
   * 
   * *   INSTANCE: an owner of an instance.
   * *   DATABASE: an owner of a physical database.
   * *   LOGIC_DATABASE: an owner of a logical database.
   * *   TABLE: an owner of a physical table.
   * *   LOGIC_TABLE: an owner of a logical table.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  ownerType?: string;
  /**
   * @remarks
   * The ID of the resource. The ID of the resource varies with the owner type. The owner types and resource IDs have the following mappings:
   * 
   * *   INSTANCE: the ID of an instance. You can call the [ListInstances](https://help.aliyun.com/document_detail/141936.html) operation to query the ID of the instance.
   * *   DATABASE: the ID of a physical database. You can call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) operation to query the ID of the physical database.
   * *   LOGIC_DATABASE: the ID of a logical database. You can call the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) operation to query the ID of the logical database.
   * *   TABLE: the ID of a physical table. You can call the [ListTables](https://help.aliyun.com/document_detail/141878.html) operation to query the ID of the physical table.
   * *   LOGIC_DATABASE: the ID of a logical table. You can call the [ListLogicTables](https://help.aliyun.com/document_detail/141875.html) operation to query the ID of the logical table.
   * 
   * This parameter is required.
   * 
   * @example
   * 174****
   */
  resourceId?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To view the ID of the tenant, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see the "View information about the current tenant" section of the [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html) topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      ownerIds: 'OwnerIds',
      ownerType: 'OwnerType',
      resourceId: 'ResourceId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerIds: 'string',
      ownerType: 'string',
      resourceId: 'string',
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

