// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserVisibleKnowledgeBaseContentsResponseBodyItemsShareInfos extends $dara.Model {
  /**
   * @remarks
   * The Ray Job ID.
   * 
   * @example
   * submission_example
   */
  submissionId?: string;
  /**
   * @remarks
   * The user ID of the submitter.
   * 
   * @example
   * 1
   */
  submitterId?: number;
  /**
   * @remarks
   * The submitter name.
   * 
   * @example
   * John
   */
  submitterName?: string;
  /**
   * @remarks
   * The target directory ID.
   * 
   * @example
   * dir_target
   */
  targetDirectoryId?: string;
  /**
   * @remarks
   * The target directory name.
   * 
   * @example
   * Shared directory
   */
  targetDirectoryName?: string;
  /**
   * @remarks
   * The root directory ID of the target enterprise knowledge base.
   * 
   * @example
   * dir_kb_root
   */
  targetKbRootDirectoryId?: string;
  /**
   * @remarks
   * The name of the target enterprise knowledge base.
   * 
   * @example
   * Product knowledge base
   */
  targetKbRootDirectoryName?: string;
  static names(): { [key: string]: string } {
    return {
      submissionId: 'submissionId',
      submitterId: 'submitterId',
      submitterName: 'submitterName',
      targetDirectoryId: 'targetDirectoryId',
      targetDirectoryName: 'targetDirectoryName',
      targetKbRootDirectoryId: 'targetKbRootDirectoryId',
      targetKbRootDirectoryName: 'targetKbRootDirectoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      submissionId: 'string',
      submitterId: 'number',
      submitterName: 'string',
      targetDirectoryId: 'string',
      targetDirectoryName: 'string',
      targetKbRootDirectoryId: 'string',
      targetKbRootDirectoryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserVisibleKnowledgeBaseContentsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * John
   */
  creatorName?: string;
  /**
   * @remarks
   * The description of the to-do card type.
   * 
   * @example
   * Product materials and user guide
   */
  description?: string;
  /**
   * @remarks
   * The directory type.
   * 
   * @example
   * normal
   */
  directoryKind?: string;
  /**
   * @remarks
   * The directory type.
   * 
   * @example
   * TENANT
   */
  directoryType?: string;
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
   * The item ID.
   * 
   * @example
   * source_example
   */
  itemId?: string;
  /**
   * @remarks
   * The item type.
   * 
   * @example
   * resource
   */
  itemType?: string;
  /**
   * @remarks
   * Indicates whether the resource has a pending knowledge base submission record.
   * 
   * @example
   * false
   */
  kbSubmissionPending?: boolean;
  /**
   * @remarks
   * The name of the modifier.
   * 
   * @example
   * Jane
   */
  modifierName?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Product description.pdf
   */
  name?: string;
  /**
   * @remarks
   * The object bindings.
   */
  objectBindings?: { [key: string]: any }[];
  /**
   * @remarks
   * The visibility mode of the knowledge base to digital employees.
   * 
   * @example
   * PUBLIC
   */
  ooVisibilityMode?: string;
  /**
   * @remarks
   * Indicates whether the item is read-only.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The sharing information.
   */
  shareInfos?: ListUserVisibleKnowledgeBaseContentsResponseBodyItemsShareInfos[];
  /**
   * @remarks
   * Indicates whether shared access is allowed.
   * 
   * @example
   * false
   */
  shared?: boolean;
  /**
   * @remarks
   * The number of resources in FAILED status. Returned only when listing top-level KB directories.
   * 
   * @example
   * 0
   */
  sourceFailedCount?: number;
  /**
   * @remarks
   * The knowledge base affiliation type. Valid values: aliding_kb_doc (DingTalk knowledge base document), normal (common knowledge).
   * 
   * @example
   * normal
   */
  sourceKind?: string;
  /**
   * @remarks
   * The number of resources in READY status. Returned only when listing top-level KB directories.
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
   * READY
   */
  sourceStatus?: string;
  /**
   * @remarks
   * The total number of resources under the directory and its subdirectories. Returned only when listing top-level KB directories.
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
   * FILE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      creatorName: 'creatorName',
      description: 'description',
      directoryKind: 'directoryKind',
      directoryType: 'directoryType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      itemId: 'itemId',
      itemType: 'itemType',
      kbSubmissionPending: 'kbSubmissionPending',
      modifierName: 'modifierName',
      name: 'name',
      objectBindings: 'objectBindings',
      ooVisibilityMode: 'ooVisibilityMode',
      readOnly: 'readOnly',
      shareInfos: 'shareInfos',
      shared: 'shared',
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
      directoryType: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      itemId: 'string',
      itemType: 'string',
      kbSubmissionPending: 'boolean',
      modifierName: 'string',
      name: 'string',
      objectBindings: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      ooVisibilityMode: 'string',
      readOnly: 'boolean',
      shareInfos: { 'type': 'array', 'itemType': ListUserVisibleKnowledgeBaseContentsResponseBodyItemsShareInfos },
      shared: 'boolean',
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
    if(Array.isArray(this.shareInfos)) {
      $dara.Model.validateArray(this.shareInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserVisibleKnowledgeBaseContentsResponseBody extends $dara.Model {
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
   * The list of skill cards.
   */
  items?: ListUserVisibleKnowledgeBaseContentsResponseBodyItems[];
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
   * The page number. Default value: 1. Pages start from page 1.
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
   * The total number of records.
   * 
   * @example
   * 1
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
      items: { 'type': 'array', 'itemType': ListUserVisibleKnowledgeBaseContentsResponseBodyItems },
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

