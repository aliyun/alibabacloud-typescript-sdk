// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVisibleKnowledgeBaseContentsResponseBodyItemsObjectBindings extends $dara.Model {
  /**
   * @remarks
   * The semantic graph name to which the object belongs. The object_id is unique within this graph.
   * 
   * @example
   * product
   */
  graphName?: string;
  /**
   * @remarks
   * The ID of the recommended item, which can be a **feedId** or a micro-application ID.
   * 
   * @example
   * 2676
   */
  objectId?: string;
  /**
   * @remarks
   * The object name.
   * 
   * @example
   * 0bf4cf71-a55d-43f7-9d1e-3f9a6110ae6b
   */
  objectName?: string;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * table
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

export class ListVisibleKnowledgeBaseContentsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * admin
   */
  creatorName?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Created by taishan-module-recovery
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
   * 2025-11-14T02:18:27Z
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-11-26T08:46:25Z
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the data item. When tabId and orgId are the same, itemId uniquely identifies a data item. The maximum length is 128 characters.
   * 
   * @example
   * 8525934734583554048_prod
   */
  itemId?: string;
  /**
   * @remarks
   * The item type.
   * 
   * @example
   * item
   */
  itemType?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * cs-default-umodel-1782181212383_k8s.metric.k8s_csi_node_pv_node_cn-heyuan-acdr-1/c80cf3a4f9d6c496781591bd17d006c6f
   */
  name?: string;
  /**
   * @remarks
   * The object bindings.
   */
  objectBindings?: ListVisibleKnowledgeBaseContentsResponseBodyItemsObjectBindings[];
  /**
   * @remarks
   * The number of resources in the FAILED state. This field is returned only when listing top-level knowledge base directories.
   * 
   * @example
   * 1
   */
  sourceFailedCount?: number;
  /**
   * @remarks
   * The knowledge base affiliation type. Valid values: aliding_kb_doc (DingTalk knowledge base document) and normal (common knowledge).
   * 
   * @example
   * string_value
   */
  sourceKind?: string;
  /**
   * @remarks
   * The number of resources in the READY state. This field is returned only when listing top-level knowledge base directories.
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
   * The total number of resources under the directory and its subdirectories. This field is returned only when listing top-level knowledge base directories.
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
   * AGENT
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
      objectBindings: { 'type': 'array', 'itemType': ListVisibleKnowledgeBaseContentsResponseBodyItemsObjectBindings },
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

export class ListVisibleKnowledgeBaseContentsResponseBody extends $dara.Model {
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
  items?: ListVisibleKnowledgeBaseContentsResponseBodyItems[];
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C474BFC7-7B11-5D92-971E-74AA82EC495B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of context libraries that match the query conditions.
   * 
   * @example
   * 3
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
      items: { 'type': 'array', 'itemType': ListVisibleKnowledgeBaseContentsResponseBodyItems },
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

