// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddAuthorityTemplateItemsRequestItems extends $dara.Model {
  /**
   * @remarks
   * The database ID. Databases are divided into physical databases and logical databases.
   * 
   * *   To query the ID of a physical database, call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation.
   * *   To query the ID of a logical database, call the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation.
   * 
   * > This parameter is required if the ResourceType parameter is set to META_DB, LOGIC_DB, META_TABLE, or LOGIC_TABLE.
   * 
   * @example
   * 2478****
   */
  dbId?: number;
  /**
   * @remarks
   * The instance ID. You can call the [ListInstances](https://help.aliyun.com/document_detail/141936.html) or [GetInstance](https://help.aliyun.com/document_detail/141567.html) operation to query the instance ID.
   * 
   * > This parameter is required if the ResourceType parameter is set to INSTANCE.
   * 
   * @example
   * 237****
   */
  instanceId?: number;
  /**
   * @remarks
   * The permission types.
   */
  permissionTypes?: string[];
  /**
   * @remarks
   * The type of the resource from which you want to remove tags. Valid values:
   * 
   * *   **INSTANCE**: instance
   * *   **LOGIC_DB**: logical database
   * *   **META_DB**: physical database
   * *   **LOGIC_TABLE**: logical table
   * *   **LOGIC_TABLE**: physical table
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The table name. You can call the [ListTables](https://help.aliyun.com/document_detail/141878.html) operation to query the name of the table.
   * 
   * > This parameter is required if the ResourceType parameter is set to META_TABLE or LOGIC_TABLE.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      instanceId: 'InstanceId',
      permissionTypes: 'PermissionTypes',
      resourceType: 'ResourceType',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      instanceId: 'number',
      permissionTypes: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.permissionTypes)) {
      $dara.Model.validateArray(this.permissionTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAuthorityTemplateItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The resources that you want to add to the permission template.
   * 
   * This parameter is required.
   */
  items?: AddAuthorityTemplateItemsRequestItems[];
  /**
   * @remarks
   * The ID of the permission template. You can call the [CreateAuthorityTemplate](https://help.aliyun.com/document_detail/600705.html) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 15***
   */
  templateId?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the tenant ID, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      templateId: 'TemplateId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': AddAuthorityTemplateItemsRequestItems },
      templateId: 'number',
      tid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

