// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupDirectoryResponseBodyItemsObjectBindings extends $dara.Model {
  /**
   * @remarks
   * The name of the knowledge graph to which the binding belongs.
   * 
   * @example
   * example
   */
  graphName?: string;
  /**
   * @remarks
   * The business ID of the object.
   * 
   * @example
   * example
   */
  objectId?: string;
  /**
   * @remarks
   * The display name of the object.
   * 
   * @example
   * example
   */
  objectName?: string;
  /**
   * @remarks
   * The object type.
   * 
   * @example
   * example
   */
  objectType?: string;
  /**
   * @remarks
   * The display name of the object type.
   * 
   * @example
   * example
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

export class ListGroupDirectoryResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the directory creator or resource submitter.
   * 
   * @example
   * example
   */
  creatorName?: string;
  /**
   * @remarks
   * The directory ownership category. This follows the service output, such as normal.
   * 
   * @example
   * example
   */
  directoryKind?: string;
  /**
   * @remarks
   * The directory type. Physical directories within the space have a value of GROUP. Reference directories retain their original type.
   * 
   * @example
   * example
   */
  directoryType?: string;
  /**
   * @remarks
   * The creation timestamp, in seconds.
   * 
   * @example
   * 1
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The modification timestamp, in seconds.
   * 
   * @example
   * 1
   */
  gmtModified?: number;
  /**
   * @remarks
   * The directoryId of a directory or the sourceId of a resource.
   * 
   * @example
   * source_example
   */
  itemId?: string;
  /**
   * @remarks
   * The content type. Valid values: directory (subdirectory) and resource.
   * 
   * @example
   * resource
   */
  itemType?: string;
  /**
   * @remarks
   * The name of the last modifier.
   * 
   * @example
   * example
   */
  modifierName?: string;
  /**
   * @remarks
   * The content name.
   * 
   * @example
   * Project Resources
   */
  name?: string;
  /**
   * @remarks
   * The list of resource object bindings. This may be empty if metadata is missing or for referenced resources.
   * 
   * @example
   * []
   */
  objectBindings?: ListGroupDirectoryResponseBodyItemsObjectBindings[];
  /**
   * @remarks
   * Indicates whether the content is a read-only reference. A value of false does not indicate write permissions. Write operations still require creator or space administrator permissions.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The resource ownership category. This follows the service output.
   * 
   * @example
   * example
   */
  sourceKind?: string;
  /**
   * @remarks
   * The resource parsing status. This field has a value only for resource items.
   * 
   * @example
   * READY
   */
  sourceStatus?: string;
  /**
   * @remarks
   * The resource type. This field has a value only for resource items. The type display rules of the service are used.
   * 
   * @example
   * example
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      creatorName: 'creatorName',
      directoryKind: 'directoryKind',
      directoryType: 'directoryType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      itemId: 'itemId',
      itemType: 'itemType',
      modifierName: 'modifierName',
      name: 'name',
      objectBindings: 'objectBindings',
      readOnly: 'readOnly',
      sourceKind: 'sourceKind',
      sourceStatus: 'sourceStatus',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorName: 'string',
      directoryKind: 'string',
      directoryType: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      itemId: 'string',
      itemType: 'string',
      modifierName: 'string',
      name: 'string',
      objectBindings: { 'type': 'array', 'itemType': ListGroupDirectoryResponseBodyItemsObjectBindings },
      readOnly: 'boolean',
      sourceKind: 'string',
      sourceStatus: 'string',
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

export class ListGroupDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The immediate subdirectories and resources on the current page. The queried directory itself is not included, and results are not recursively expanded.
   * 
   * @example
   * []
   */
  items?: ListGroupDirectoryResponseBodyItems[];
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * The requested resource does not exist
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
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries after filtering and before pagination. This includes both physical content and referenced content that match the filter criteria.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListGroupDirectoryResponseBodyItems },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

