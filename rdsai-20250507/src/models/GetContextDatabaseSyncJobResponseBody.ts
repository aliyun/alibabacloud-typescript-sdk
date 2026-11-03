// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextDatabaseSyncJobResponseBodyDataFilters extends $dara.Model {
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

export class GetContextDatabaseSyncJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reason for the automatic pause.
   * 
   * @example
   * 3 consecutive execution failures
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
  filters?: GetContextDatabaseSyncJobResponseBodyDataFilters;
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
   * The target knowledge base ID.
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
   * The next execution time.
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
   * The target ID, which is a system-generated UUID.
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
      filters: GetContextDatabaseSyncJobResponseBodyDataFilters,
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

export class GetContextDatabaseSyncJobResponseBody extends $dara.Model {
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
  data?: GetContextDatabaseSyncJobResponseBodyData;
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
      data: GetContextDatabaseSyncJobResponseBodyData,
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

