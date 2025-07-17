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

export class GetAuthorityTemplateItemResponseBodyAuthorityTemplateItemList extends $dara.Model {
  authorityTemplateItem?: GetAuthorityTemplateItemResponseBodyAuthorityTemplateItemListAuthorityTemplateItem[];
  static names(): { [key: string]: string } {
    return {
      authorityTemplateItem: 'AuthorityTemplateItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityTemplateItem: { 'type': 'array', 'itemType': GetAuthorityTemplateItemResponseBodyAuthorityTemplateItemListAuthorityTemplateItem },
    };
  }

  validate() {
    if(Array.isArray(this.authorityTemplateItem)) {
      $dara.Model.validateArray(this.authorityTemplateItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorityTemplateItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The permission templates.
   */
  authorityTemplateItemList?: GetAuthorityTemplateItemResponseBodyAuthorityTemplateItemList;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5B96E35F-A58E-5399-9041-09CF9A1E46EA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      authorityTemplateItemList: 'AuthorityTemplateItemList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityTemplateItemList: GetAuthorityTemplateItemResponseBodyAuthorityTemplateItemList,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      tid: 'number',
    };
  }

  validate() {
    if(this.authorityTemplateItemList && typeof (this.authorityTemplateItemList as any).validate === 'function') {
      (this.authorityTemplateItemList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

