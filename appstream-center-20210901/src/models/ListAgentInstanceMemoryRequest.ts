// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentInstanceMemoryRequest extends $dara.Model {
  /**
   * @remarks
   * Filters results by the business platform to which the agent belongs. If this parameter is omitted, no restriction is applied to the business platform.
   * 
   * @example
   * ENTERPRISE_AGENTIC_COMPUTER
   */
  agentPlatform?: string;
  /**
   * @remarks
   * Filters results by agent provider. If this parameter is omitted, the system queries providers that support memory management. `JVSCopilot` is not supported for memory management in this API operation.
   * 
   * @example
   * AgenticComputer
   */
  agentProvider?: string;
  /**
   * @remarks
   * Filters results by business type code. If this parameter is omitted, no restriction is applied to the business type.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The list of end user IDs to be included in the query results. Exact matching is applied. Maximum value: 200.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The list of end user IDs to be excluded from the query results. Maximum value: 200. When used together with EndUserIds, these users are removed from the inclusion scope.
   */
  excludedEndUserIds?: string[];
  /**
   * @remarks
   * Filters results by the memory switch configured for the instance.
   * - `ENABLED`: The instance memory switch is turned on.
   * - `DISABLED`: The instance memory switch is turned off.
   * If both values are passed, instances matching either status are returned.
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
   * The keyword used for inclusion matching. Use SearchType to specify the search field. If this parameter is left empty, no keyword filtering is applied.
   * 
   * @example
   * ecd-d8ut
   */
  searchKeyword?: string;
  /**
   * @remarks
   * The scope of the keyword search. Default value: `ALL`.
   * - `ALL`: Searches resource IDs, resource names, runtime IDs, and end user IDs.
   * - `RESOURCE_ID`: Searches resource IDs.
   * - `RESOURCE_NAME`: Searches resource names.
   * - `RUNTIME_ID`: Searches runtime IDs.
   * - `END_USER_ID`: Searches end user IDs.
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

