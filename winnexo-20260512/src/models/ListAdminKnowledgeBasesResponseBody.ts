// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAdminKnowledgeBasesResponseBodyItemsObjectBindings extends $dara.Model {
  /**
   * @remarks
   * The semantic graph name to which the object belongs. The object_id is unique within this graph.
   * 
   * @example
   * string_value
   */
  graphName?: string;
  /**
   * @remarks
   * The ID of the recommended item, which can be a feedId or a micro-application ID.
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * The object name.
   * 
   * @example
   * string_value
   */
  objectName?: string;
  /**
   * @remarks
   * The object type, such as customer. This field has a value only when type is mention.
   * 
   * @example
   * string_value
   */
  objectType?: string;
  /**
   * @remarks
   * The display name of the object type (such as "Customer"), parsed from the graph schema. The value is null when the cache is missed.
   * 
   * @example
   * string_value
   */
  objectTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      graphName: 'graphName',
      objectId: 'objectId',
      objectName: 'objectName',
      objectType: 'objectType',
      objectTypeName: 'objectTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graphName: 'string',
      objectId: 'string',
      objectName: 'string',
      objectType: 'string',
      objectTypeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdminKnowledgeBasesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * string_value
   */
  creatorName?: string;
  /**
   * @remarks
   * The description of the to-do card type.
   * 
   * @example
   * Sample description
   */
  description?: string;
  /**
   * @remarks
   * The directory type.
   * 
   * @example
   * string_value
   */
  directoryKind?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 1
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the data item. When tabId and orgId are the same, itemId uniquely identifies a data item. The maximum length is 128 characters.
   * 
   * @example
   * exampleItemId
   */
  itemId?: string;
  /**
   * @remarks
   * The data type (group, user, or role).
   * 
   * @example
   * string_value
   */
  itemType?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The object bindings.
   */
  objectBindings?: ListAdminKnowledgeBasesResponseBodyItemsObjectBindings[];
  /**
   * @remarks
   * The number of resources with FAILED status. This field is returned only for the top-level knowledge base directory list.
   * 
   * @example
   * 1
   */
  sourceFailedCount?: number;
  /**
   * @remarks
   * The knowledge base ownership type. Valid values: aliding_kb_doc (DingTalk knowledge base document) and normal (common knowledge).
   * 
   * @example
   * string_value
   */
  sourceKind?: string;
  /**
   * @remarks
   * The number of resources with READY status. This field is returned only for the top-level knowledge base directory list.
   * 
   * @example
   * 1
   */
  sourceReadyCount?: number;
  /**
   * @remarks
   * The resource status. This field has a value only when itemType is resource.
   * 
   * @example
   * string_value
   */
  sourceStatus?: string;
  /**
   * @remarks
   * The total number of resources in the directory and its subdirectories. This field is returned only for the top-level knowledge base directory list.
   * 
   * @example
   * 1
   */
  sourceTotalCount?: number;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * string_value
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      creatorName: 'creatorName',
      description: 'description',
      directoryKind: 'directoryKind',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      itemId: 'itemId',
      itemType: 'itemType',
      name: 'name',
      objectBindings: 'objectBindings',
      sourceFailedCount: 'sourceFailedCount',
      sourceKind: 'sourceKind',
      sourceReadyCount: 'sourceReadyCount',
      sourceStatus: 'sourceStatus',
      sourceTotalCount: 'sourceTotalCount',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorName: 'string',
      description: 'string',
      directoryKind: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      itemId: 'string',
      itemType: 'string',
      name: 'string',
      objectBindings: { 'type': 'array', 'itemType': ListAdminKnowledgeBasesResponseBodyItemsObjectBindings },
      sourceFailedCount: 'number',
      sourceKind: 'string',
      sourceReadyCount: 'number',
      sourceStatus: 'string',
      sourceTotalCount: 'number',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objectBindings)) {
      $dara.Model.validateArray(this.objectBindings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdminKnowledgeBasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of MCP cards.
   */
  items?: ListAdminKnowledgeBasesResponseBodyItems[];
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The maximum number of records returned in this request.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListAdminKnowledgeBasesResponseBodyItems },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
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

