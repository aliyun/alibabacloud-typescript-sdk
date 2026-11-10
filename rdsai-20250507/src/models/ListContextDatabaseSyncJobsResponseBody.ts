// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextDatabaseSyncJobsResponseBodyDataJobsFilters extends $dara.Model {
  /**
   * @remarks
   * The list of exclusion rules.
   * 
   * @example
   * ["/Archived documents"]
   */
  exclude?: string[];
  /**
   * @remarks
   * The list of excluded document IDs.
   * 
   * @example
   * ["doc-as1llqmkol****"]
   */
  excludedDocumentIds?: string[];
  /**
   * @remarks
   * The list of inclusion rules.
   * 
   * @example
   * ["/R&D documents"]
   */
  include?: string[];
  /**
   * @remarks
   * The size limit in bytes.
   * 
   * @example
   * 2147483648
   */
  sizeLimit?: number;
  /**
   * @remarks
   * The list of allowed document types.
   * 
   * @example
   * ["docx", "pdf"]
   */
  typeAllowlist?: string[];
  static names(): { [key: string]: string } {
    return {
      exclude: 'Exclude',
      excludedDocumentIds: 'ExcludedDocumentIds',
      include: 'Include',
      sizeLimit: 'SizeLimit',
      typeAllowlist: 'TypeAllowlist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exclude: { 'type': 'array', 'itemType': 'string' },
      excludedDocumentIds: { 'type': 'array', 'itemType': 'string' },
      include: { 'type': 'array', 'itemType': 'string' },
      sizeLimit: 'number',
      typeAllowlist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.exclude)) {
      $dara.Model.validateArray(this.exclude);
    }
    if(Array.isArray(this.excludedDocumentIds)) {
      $dara.Model.validateArray(this.excludedDocumentIds);
    }
    if(Array.isArray(this.include)) {
      $dara.Model.validateArray(this.include);
    }
    if(Array.isArray(this.typeAllowlist)) {
      $dara.Model.validateArray(this.typeAllowlist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContextDatabaseSyncJobsResponseBodyDataJobs extends $dara.Model {
  /**
   * @remarks
   * The auto-pause reason.
   * 
   * @example
   * Three consecutive run failures
   */
  autoPauseReason?: string;
  /**
   * @remarks
   * Indicates whether the job is automatically paused.
   * 
   * @example
   * true
   */
  autoPaused?: boolean;
  /**
   * @remarks
   * The configuration version number.
   * 
   * @example
   * 3
   */
  configVersion?: number;
  /**
   * @remarks
   * Indicates whether the job is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The filter conditions.
   * 
   * @example
   * {"include":["/R&D documents/**"],"exclude":["/Archived documents/**"],"excludedDocumentIds":[],"sizeLimit":2147483648,"typeAllowlist":["docx","pdf"]}
   */
  filters?: ListContextDatabaseSyncJobsResponseBodyDataJobsFilters;
  /**
   * @remarks
   * The job ID, which is a system-generated UUID.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  id?: string;
  /**
   * @remarks
   * The destination knowledge base ID.
   * 
   * @example
   * kb-as1llqmkol****
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * R&D team document import
   */
  name?: string;
  /**
   * @remarks
   * The next run time.
   * 
   * @example
   * 2026-09-23T10:00:00+08:00
   */
  nextRunAt?: string;
  /**
   * @remarks
   * The schedule type. Valid values: interval and daily-times.
   * 
   * @example
   * daily-times
   */
  scheduleType?: string;
  /**
   * @remarks
   * The data source ID, which is a system-generated UUID.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  sourceId?: string;
  /**
   * @remarks
   * The destination ID, which is a system-generated UUID.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPauseReason: 'AutoPauseReason',
      autoPaused: 'AutoPaused',
      configVersion: 'ConfigVersion',
      enabled: 'Enabled',
      filters: 'Filters',
      id: 'Id',
      knowledgeBaseId: 'KnowledgeBaseId',
      name: 'Name',
      nextRunAt: 'NextRunAt',
      scheduleType: 'ScheduleType',
      sourceId: 'SourceId',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPauseReason: 'string',
      autoPaused: 'boolean',
      configVersion: 'number',
      enabled: 'boolean',
      filters: ListContextDatabaseSyncJobsResponseBodyDataJobsFilters,
      id: 'string',
      knowledgeBaseId: 'string',
      name: 'string',
      nextRunAt: 'string',
      scheduleType: 'string',
      sourceId: 'string',
      targetId: 'string',
    };
  }

  validate() {
    if(this.filters && typeof (this.filters as any).validate === 'function') {
      (this.filters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContextDatabaseSyncJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of import jobs.
   * 
   * @example
   * [{"Id":"job-as1llqmkol****", "SourceId":"src-as1llqmkol****", "TargetId":"tg-as1llqmkol****", "KnowledgeBaseId":"kb-as1llqmkol****"}]
   */
  jobs?: ListContextDatabaseSyncJobsResponseBodyDataJobs[];
  /**
   * @remarks
   * The page number, starting from 1.
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
   * The total number of entries.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListContextDatabaseSyncJobsResponseBodyDataJobs },
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContextDatabaseSyncJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Sample value
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListContextDatabaseSyncJobsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 1
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * Sample value
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * id-001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListContextDatabaseSyncJobsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

