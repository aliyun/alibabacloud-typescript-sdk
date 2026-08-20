// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPersonalDirectoryContentsResponseBodyItemsObjectBindings extends $dara.Model {
  /**
   * @remarks
   * The bound object ID.
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
   * The bound object type, such as customer or project.
   * 
   * @example
   * string_value
   */
  objectType?: string;
  /**
   * @remarks
   * The display name of the object type, such as "Customer". This value is resolved from the graph schema. The value is null when the cache is missed.
   * 
   * @example
   * string_value
   */
  objectTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      objectId: 'objectId',
      objectName: 'objectName',
      objectType: 'objectType',
      objectTypeName: 'objectTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListPersonalDirectoryContentsResponseBodyItems extends $dara.Model {
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
   * The signing record ID.
   * 
   * @example
   * exampleItemId
   */
  itemId?: string;
  /**
   * @remarks
   * The item type.
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
  objectBindings?: ListPersonalDirectoryContentsResponseBodyItemsObjectBindings[];
  /**
   * @remarks
   * The number of resources in the FAILED state. This field is returned only when the top-level KB directory list is queried.
   * 
   * @example
   * 1
   */
  sourceFailedCount?: number;
  /**
   * @remarks
   * The knowledge base affiliation type. Valid values: aliding_kb_doc (DingTalk knowledge base document), normal (common knowledge).
   * 
   * @example
   * string_value
   */
  sourceKind?: string;
  /**
   * @remarks
   * The number of resources in the READY state. This field is returned only when the top-level KB directory list is queried.
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
   * The total number of resources under the directory and its subdirectories. This field is returned only when the top-level KB directory list is queried.
   * 
   * @example
   * 1
   */
  sourceTotalCount?: number;
  /**
   * @remarks
   * The data source type.
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
      objectBindings: { 'type': 'array', 'itemType': ListPersonalDirectoryContentsResponseBodyItemsObjectBindings },
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

export class ListPersonalDirectoryContentsResponseBody extends $dara.Model {
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
   * The file information.
   */
  items?: ListPersonalDirectoryContentsResponseBodyItems[];
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * The current zone list is illegal.
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: 10.
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
   * The total number of records.
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
      items: { 'type': 'array', 'itemType': ListPersonalDirectoryContentsResponseBodyItems },
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

