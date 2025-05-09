// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddAuthorityTemplateItemsRequestItems extends $dara.Model {
  /**
   * @example
   * 2478****
   */
  dbId?: number;
  /**
   * @example
   * 237****
   */
  instanceId?: number;
  permissionTypes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
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

