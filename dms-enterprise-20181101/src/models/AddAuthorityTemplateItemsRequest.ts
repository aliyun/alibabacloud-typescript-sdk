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

export class AddAuthorityTemplateItemsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  items?: AddAuthorityTemplateItemsRequestItems[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 15***
   */
  templateId?: number;
  /**
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

