// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelinesRequestContext extends $dara.Model {
  /**
   * @remarks
   * The environment identifier. Valid values:
   * 
   * - DEV: development environment.
   * - PROD: production environment.
   * 
   * Default value: PROD.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7128268454335680
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesRequestListCommand extends $dara.Model {
  /**
   * @remarks
   * The list of creator user IDs for filtering. If left empty, no filtering is applied. Multiple values are evaluated with an OR relationship.
   */
  creatorList?: string[];
  /**
   * @remarks
   * The list of development owner user IDs for filtering. If left empty, no filtering is applied. Multiple values are evaluated with an OR relationship.
   */
  developOwnerList?: string[];
  /**
   * @remarks
   * The list of full folder paths to query. If left empty, the root folder is queried.
   */
  directories?: string[];
  /**
   * @remarks
   * Specifies whether to use exact match for node names. Default value: false.
   */
  exactMatch?: boolean;
  /**
   * @remarks
   * The list of node name keywords. This parameter is optional. If left empty, no filtering by name is applied. For exact match, specify full names. For fuzzy match, specify keywords. Multiple values are evaluated with an OR relationship.
   */
  keywords?: string[];
  /**
   * @remarks
   * The cursor-based pagination parameter (an opaque cursor that callers do not need to interpret). This parameter is optional. If not specified, the request is treated as a first-page request and returns the actual total count. If specified, the request is treated as a subsequent-page request. Pass the NextCursor value returned from the previous page as-is. The SQL layer automatically filters by incrementing ID to query the next page without re-querying the total count. No OFFSET is used throughout, which avoids performance degradation in deep paging scenarios.
   * 
   * @example
   * 123
   */
  nextCursor?: number;
  /**
   * @remarks
   * The list of O&M owner user IDs for filtering. If left empty, no filtering is applied. Multiple values are evaluated with an OR relationship.
   */
  opsOwnerList?: string[];
  /**
   * @remarks
   * The page number. Default value: 1. Pages start from 1.
   * 
   * @example
   * 3
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of node types. Default value: [0] (batch integration). Valid values:
   * 
   * - 0: batch integration.
   * - 1: real-time integration.
   * - 13: data aggregation.
   * - 14: offline unstructured workflow.
   * - 15: real-time unstructured workflow.
   * - 16: online unstructured workflow.
   * 
   * If null or an empty list is passed, the default value [0] is used.
   */
  pipelineTypeList?: number[];
  /**
   * @remarks
   * Specifies whether to recursively query subfolders. Default value: false.
   * 
   * @example
   * true
   */
  recursive?: boolean;
  /**
   * @remarks
   * The list of scheduling types for filtering. If left empty, no filtering is applied. Valid values:
   * 
   * - 1: periodic scheduling.
   * - 3: manual scheduling.
   * - 5: real-time scheduling.
   * - 7: online workflow.
   */
  scheduleTypeList?: number[];
  /**
   * @remarks
   * The list of submit statuses for filtering. If left empty, no filtering is applied. Valid values:
   * 
   * - DRAFT: draft.
   * - SUBMITTING: submitting.
   * - SUBMITTED: submitted.
   * - PUBLISHED: published.
   */
  submitStatusList?: string[];
  /**
   * @remarks
   * The list of label names for filtering. If left empty, no filtering is applied. Multiple values are evaluated with an OR relationship.
   */
  tagList?: string[];
  /**
   * @remarks
   * The total number of records for cursor-based pagination. This parameter is optional and takes effect only when NextCursor is not empty. After the first-page request returns the actual total count, pass this value back as-is for subsequent pages. The server does not re-query the total count and directly echoes the value, which avoids redundant count overhead. If not specified, the system falls back to querying one extra record to determine whether a next page exists.
   * 
   * @example
   * 1233
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      creatorList: 'CreatorList',
      developOwnerList: 'DevelopOwnerList',
      directories: 'Directories',
      exactMatch: 'ExactMatch',
      keywords: 'Keywords',
      nextCursor: 'NextCursor',
      opsOwnerList: 'OpsOwnerList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      pipelineTypeList: 'PipelineTypeList',
      recursive: 'Recursive',
      scheduleTypeList: 'ScheduleTypeList',
      submitStatusList: 'SubmitStatusList',
      tagList: 'TagList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorList: { 'type': 'array', 'itemType': 'string' },
      developOwnerList: { 'type': 'array', 'itemType': 'string' },
      directories: { 'type': 'array', 'itemType': 'string' },
      exactMatch: 'boolean',
      keywords: { 'type': 'array', 'itemType': 'string' },
      nextCursor: 'number',
      opsOwnerList: { 'type': 'array', 'itemType': 'string' },
      pageNum: 'number',
      pageSize: 'number',
      pipelineTypeList: { 'type': 'array', 'itemType': 'number' },
      recursive: 'boolean',
      scheduleTypeList: { 'type': 'array', 'itemType': 'number' },
      submitStatusList: { 'type': 'array', 'itemType': 'string' },
      tagList: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.creatorList)) {
      $dara.Model.validateArray(this.creatorList);
    }
    if(Array.isArray(this.developOwnerList)) {
      $dara.Model.validateArray(this.developOwnerList);
    }
    if(Array.isArray(this.directories)) {
      $dara.Model.validateArray(this.directories);
    }
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    if(Array.isArray(this.opsOwnerList)) {
      $dara.Model.validateArray(this.opsOwnerList);
    }
    if(Array.isArray(this.pipelineTypeList)) {
      $dara.Model.validateArray(this.pipelineTypeList);
    }
    if(Array.isArray(this.scheduleTypeList)) {
      $dara.Model.validateArray(this.scheduleTypeList);
    }
    if(Array.isArray(this.submitStatusList)) {
      $dara.Model.validateArray(this.submitStatusList);
    }
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesRequest extends $dara.Model {
  /**
   * @remarks
   * The request context.
   * 
   * This parameter is required.
   */
  context?: ListPipelinesRequestContext;
  /**
   * @remarks
   * The query parameters.
   * 
   * This parameter is required.
   */
  listCommand?: ListPipelinesRequestListCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The user ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      listCommand: 'ListCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: ListPipelinesRequestContext,
      listCommand: ListPipelinesRequestListCommand,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(this.listCommand && typeof (this.listCommand as any).validate === 'function') {
      (this.listCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

