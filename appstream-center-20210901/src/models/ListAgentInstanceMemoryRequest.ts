// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentInstanceMemoryRequest extends $dara.Model {
  /**
   * @remarks
   * Filters by the business platform to which the Agent belongs. If omitted, no restriction is applied to the business platform.
   * 
   * @example
   * ENTERPRISE_AGENTIC_COMPUTER
   */
  agentPlatform?: string;
  /**
   * @remarks
   * Filters by Agent provider. If omitted, queries providers that support memory management. `JVSCopilot` is not supported for memory management in this operation.
   * 
   * @example
   * AgenticComputer
   */
  agentProvider?: string;
  /**
   * @remarks
   * Filters by business type code. If omitted, no restriction is applied to the business type.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The list of end user IDs to include in the query results. Exact match is applied. You can specify up to 200 IDs.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The list of end user IDs to exclude from the query results. You can specify up to 200 IDs. If used together with EndUserIds, these users are excluded from the inclusion scope.
   */
  excludedEndUserIds?: string[];
  /**
   * @remarks
   * Filters by the memory switch configured for the instance.
   * - `ENABLED`: The instance memory switch is turned on.
   * - `DISABLED`: The instance memory switch is turned off.
   * If both values are specified, instances matching either status are returned.
   */
  memoryStatuses?: string[];
  /**
   * @remarks
   * The page number. Pages start from 1. If this parameter is not specified or is set to 0, the first page is queried.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The keyword used for inclusion matching. Specify the search field by using SearchType. If left empty, no keyword filtering is applied.
   * 
   * @example
   * ecd-d8ut
   */
  searchKeyword?: string;
  /**
   * @remarks
   * The search scope for the keyword. Default value: `ALL`.
   * - `ALL`: Searches the resource ID, resource name, runtime ID, and end user ID.
   * - `RESOURCE_ID`: Searches the resource ID.
   * - `RESOURCE_NAME`: Searches the resource name.
   * - `RUNTIME_ID`: Searches the runtime ID.
   * - `END_USER_ID`: Searches the end user ID.
   * 
   * @example
   * RESOURCE_ID
   */
  searchType?: string;
  static names(): { [key: string]: string } {
    return {
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      bizType: 'BizType',
      endUserIds: 'EndUserIds',
      excludedEndUserIds: 'ExcludedEndUserIds',
      memoryStatuses: 'MemoryStatuses',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKeyword: 'SearchKeyword',
      searchType: 'SearchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentProvider: 'string',
      bizType: 'number',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      excludedEndUserIds: { 'type': 'array', 'itemType': 'string' },
      memoryStatuses: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      searchKeyword: 'string',
      searchType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    if(Array.isArray(this.excludedEndUserIds)) {
      $dara.Model.validateArray(this.excludedEndUserIds);
    }
    if(Array.isArray(this.memoryStatuses)) {
      $dara.Model.validateArray(this.memoryStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

