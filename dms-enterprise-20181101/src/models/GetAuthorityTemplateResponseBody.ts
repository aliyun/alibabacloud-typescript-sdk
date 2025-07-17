// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthorityTemplateResponseBodyAuthorityTemplateViewAuthorityTemplateItemListAuthorityTemplateItem extends $dara.Model {
  /**
   * @remarks
   * Other information. For example, you can add the logon permission on an instance to the permission template.
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
   * The ID of the user who modified the resource.
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
   * *   **SINGLE_TABLE**: physical table
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

export class GetAuthorityTemplateResponseBodyAuthorityTemplateViewAuthorityTemplateItemList extends $dara.Model {
  authorityTemplateItem?: GetAuthorityTemplateResponseBodyAuthorityTemplateViewAuthorityTemplateItemListAuthorityTemplateItem[];
  static names(): { [key: string]: string } {
    return {
      authorityTemplateItem: 'AuthorityTemplateItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityTemplateItem: { 'type': 'array', 'itemType': GetAuthorityTemplateResponseBodyAuthorityTemplateViewAuthorityTemplateItemListAuthorityTemplateItem },
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

export class GetAuthorityTemplateResponseBodyAuthorityTemplateView extends $dara.Model {
  /**
   * @remarks
   * The resource information in the permission template.
   */
  authorityTemplateItemList?: GetAuthorityTemplateResponseBodyAuthorityTemplateViewAuthorityTemplateItemList;
  /**
   * @remarks
   * The time when the permission template was created. The time is in the yyyy-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2023-01-01 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the user who created the permission template.
   * 
   * @example
   * 12***
   */
  creatorId?: number;
  /**
   * @remarks
   * The description of the permission template.
   * 
   * @example
   * This template is used for business testing.
   */
  description?: string;
  /**
   * @remarks
   * The name of the permission template.
   * 
   * @example
   * TestTemplate
   */
  name?: string;
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
      authorityTemplateItemList: 'AuthorityTemplateItemList',
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      description: 'Description',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityTemplateItemList: GetAuthorityTemplateResponseBodyAuthorityTemplateViewAuthorityTemplateItemList,
      createTime: 'string',
      creatorId: 'number',
      description: 'string',
      name: 'string',
      templateId: 'number',
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

export class GetAuthorityTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the permission template.
   */
  authorityTemplateView?: GetAuthorityTemplateResponseBodyAuthorityTemplateView;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
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
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
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
      authorityTemplateView: 'AuthorityTemplateView',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityTemplateView: GetAuthorityTemplateResponseBodyAuthorityTemplateView,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      tid: 'number',
    };
  }

  validate() {
    if(this.authorityTemplateView && typeof (this.authorityTemplateView as any).validate === 'function') {
      (this.authorityTemplateView as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

