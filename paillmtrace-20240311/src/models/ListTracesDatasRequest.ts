// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTracesDatasRequestFilters } from "./ListTracesDatasRequestFilters";


export class ListTracesDatasRequest extends $dara.Model {
  /**
   * @remarks
   * The value of the attributes.service.app.user_id field in the trace record. It can contain upper and lower case letters, digits, dot (.), hyphen (-), and underscore (_). It is empty by default.
   * 
   * @example
   * end-user.12345
   */
  endUserId?: string;
  /**
   * @remarks
   * Other filter parameters
   */
  filters?: ListTracesDatasRequestFilters[];
  /**
   * @remarks
   * Whether to return only trace records containing spans with a non-empty events. Example: Suppose a trace has 3 spans. If this parameter is True, this trace meets the condition when any one of the 3 spans has a non-empty events. The default value is False. The events is not used for filtering.
   * 
   * @example
   * False
   */
  hasEvents?: boolean;
  /**
   * @remarks
   * Whether to return only trace records containing spans with a non-empty statusMessage. Example: Suppose a trace has 3 spans. If this parameter is True, this trace meets the condition when any one of the 3 spans has a non-empty statusMessage. The default value is False. The statusMessage is not used for filtering.
   * 
   * @example
   * False
   */
  hasStatusMessage?: boolean;
  /**
   * @remarks
   * The value of the resources.service.app.name field in the trace record. It can contain upper and lower case letters, digits, dot (.), hyphen (-), and underscore (_). Must be an exact match. It is empty by default.
   * 
   * @example
   * My.super_LLM-app2
   */
  llmAppName?: string;
  maxDuration?: number;
  /**
   * @remarks
   * The upper limit of the search time range, in UTC format (YYYY-mm-dd or YYYY-MM-DD HH:mm:ss). By default, the value is (current time +10 minutes)
   * 
   * @example
   * 2024-01-31
   * 2024-12-31 23:59:59
   */
  maxTime?: string;
  minDuration?: number;
  /**
   * @remarks
   * The lower limit of the search time range, in UTC format (YYYY-mm-dd or YYYY-MM-DD HH:mm:ss). By default, the value is (current time - 2 days).
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-01-31
   * 2024-12-31 23:59:59
   */
  minTime?: string;
  /**
   * @remarks
   * Whether the returned JSON data can be directly converted to OpenTelemetry TracesData protobuf object. Default value: False. JSON data that is compatible with OpenTelemetry is more complex. Such data is generally not required unless you want to generate a protobuf object of OpenTelemetry.
   * 
   * @example
   * False
   */
  opentelemetryCompatible?: boolean;
  ownerId?: string;
  /**
   * @remarks
   * The value of the resources.service.owner.sub_id field in the trace record. It can contain upper and lower case letters, digits, dot (.), hyphen (-), and underscore (_). It is empty by default.
   * 
   * @example
   * 123456789
   */
  ownerSubId?: string;
  /**
   * @remarks
   * The page number. Page starts from page 1. Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field used to sort the returned results. Valid values: StartTime and Duration.
   * 
   * @example
   * StartTime
   * Duration
   */
  sortBy?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * *   **ASC**
   * *   **DESC** (default)
   * 
   * @example
   * DESC
   * ASC
   */
  sortOrder?: string;
  /**
   * @remarks
   * The list of span IDs. Each trace record contains one or more spans.
   */
  spanIds?: string[];
  spanName?: string;
  /**
   * @remarks
   * The list of trace IDs.
   */
  traceIds?: string[];
  /**
   * @remarks
   * The content simplification method for returned trace data to reduce the data volume.
   * 
   * REMOVE_EMBEDDING: Removes all embedding array contents.
   * 
   * ROOT_ONLY: Returns only the root span for each trace, with the root span content also having the REMOVE_EMBEDDING applied.
   * 
   * Blank: Maintains the original data without simplification.
   * 
   * @example
   * REMOVE_EMBEDDING
   * ROOT_ONLY
   */
  traceReduceMethod?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      filters: 'Filters',
      hasEvents: 'HasEvents',
      hasStatusMessage: 'HasStatusMessage',
      llmAppName: 'LlmAppName',
      maxDuration: 'MaxDuration',
      maxTime: 'MaxTime',
      minDuration: 'MinDuration',
      minTime: 'MinTime',
      opentelemetryCompatible: 'OpentelemetryCompatible',
      ownerId: 'OwnerId',
      ownerSubId: 'OwnerSubId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      spanIds: 'SpanIds',
      spanName: 'SpanName',
      traceIds: 'TraceIds',
      traceReduceMethod: 'TraceReduceMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      filters: { 'type': 'array', 'itemType': ListTracesDatasRequestFilters },
      hasEvents: 'boolean',
      hasStatusMessage: 'boolean',
      llmAppName: 'string',
      maxDuration: 'number',
      maxTime: 'string',
      minDuration: 'number',
      minTime: 'string',
      opentelemetryCompatible: 'boolean',
      ownerId: 'string',
      ownerSubId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortOrder: 'string',
      spanIds: { 'type': 'array', 'itemType': 'string' },
      spanName: 'string',
      traceIds: { 'type': 'array', 'itemType': 'string' },
      traceReduceMethod: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    if(Array.isArray(this.spanIds)) {
      $dara.Model.validateArray(this.spanIds);
    }
    if(Array.isArray(this.traceIds)) {
      $dara.Model.validateArray(this.traceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

