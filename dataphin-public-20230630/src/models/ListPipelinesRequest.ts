// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelinesRequestContext extends $dara.Model {
  /**
   * @remarks
   * The environment identifier. Valid values: DEV: development environment. PROD: production environment. Default value: PROD.
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
   * The user IDs of the creators used for filtering. If this parameter is left empty, no filtering is performed. If multiple IDs are specified, they are evaluated by using the OR operator.
   */
  creatorList?: string[];
  /**
   * @remarks
   * The user IDs of the development owners used for filtering. If this parameter is left empty, no filtering is performed. If multiple IDs are specified, they are evaluated by using the OR operator.
   */
  developOwnerList?: string[];
  /**
   * @remarks
   * The full paths of the directories to query. If this parameter is left empty, the root directory is queried.
   */
  directories?: string[];
  /**
   * @remarks
   * Specifies whether an exact match is performed on the node name. Default value: false.
   */
  exactMatch?: boolean;
  /**
   * @remarks
   * The keywords used to filter task names. This parameter is optional. If this parameter is left empty, tasks are not filtered by name. If exact match is enabled, this parameter specifies a list of full names. If fuzzy match is used, this parameter specifies a list of keywords. If multiple keywords are specified, they are evaluated by using the OR operator.
   */
  keywords?: string[];
  /**
   * @remarks
   * The cursor for the next page. Leave this parameter empty for the first page. For subsequent pages, pass the NextCursor value returned from the previous page.
   * 
   * @example
   * 123
   */
  nextCursor?: number;
  /**
   * @remarks
   * The user IDs of the O&M owners used for filtering. If this parameter is left empty, no filtering is performed. If multiple IDs are specified, they are evaluated by using the OR operator.
   */
  opsOwnerList?: string[];
  /**
   * @remarks
   * The page number. Default value: 1. The value starts from 1.
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
   * The task types. Default value: [0]. Valid values: 0: offline integration. 1: real-time integration. 13: data ingestion. 14: offline unstructured workflow. 15: real-time unstructured workflow. 16: online unstructured workflow. If you pass null or an empty list, the default value [0] is used.
   */
  pipelineTypeList?: number[];
  /**
   * @remarks
   * Specifies whether to recursively query subdirectories. Default value: false.
   * 
   * @example
   * true
   */
  recursive?: boolean;
  /**
   * @remarks
   * The schedule types used for filtering. If this parameter is left empty, no filtering is performed. Valid values: 1: periodic scheduling. 3: manual scheduling. 5: real-time scheduling. 7: online workflow.
   */
  scheduleTypeList?: number[];
  /**
   * @remarks
   * The submit statuses used for filtering. If this parameter is left empty, no filtering is performed. Valid values: DRAFT: draft. SUBMITTING: submitting. SUBMITTED: submitted. PUBLISHED: published.
   */
  submitStatusList?: string[];
  /**
   * @remarks
   * The tag names used for filtering. If this parameter is left empty, no filtering is performed. If multiple names are specified, they are evaluated by using the OR operator.
   */
  tagList?: string[];
  /**
   * @remarks
   * The total number of records.
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
   * The ID of the operator.
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

