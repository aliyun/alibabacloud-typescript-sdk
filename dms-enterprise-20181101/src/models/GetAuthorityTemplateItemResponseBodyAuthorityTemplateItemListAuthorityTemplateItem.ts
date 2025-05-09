// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthorityTemplateItemResponseBodyAuthorityTemplateItemListAuthorityTemplateItem extends $dara.Model {
  /**
   * @remarks
   * The additional information. For example, permissions to log on to an instance are added to the permission template.
   * 
   * @example
   * "permissionTypes": [
   *             "LOGIN"
   *           ]
   */
  attribute?: string;
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 43***
   */
  dbId?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 188****
   */
  instanceId?: number;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * 12***
   */
  itemId?: number;
  /**
   * @remarks
   * The ID of the user who modifies the resource.
   * 
   * @example
   * 51***
   */
  modifierId?: number;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   **INSTANCE**: instance
   * *   **LOGIC_DB**: logical database
   * *   **META_DB**: physical database
   * *   **LOGIC_TABLE**: logical table
   * *   **LOGIC_TABLE**: physical table
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * ExampleTable
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the permission template.
   * 
   * @example
   * 1563
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      dbId: 'DbId',
      instanceId: 'InstanceId',
      itemId: 'ItemId',
      modifierId: 'ModifierId',
      resourceType: 'ResourceType',
      tableName: 'TableName',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      dbId: 'number',
      instanceId: 'number',
      itemId: 'number',
      modifierId: 'number',
      resourceType: 'string',
      tableName: 'string',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

