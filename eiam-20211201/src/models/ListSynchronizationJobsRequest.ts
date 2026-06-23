// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSynchronizationJobsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * Dynamic parameter name
   * 
   * @example
   * qps
   */
  key?: string;
  /**
   * @remarks
   * Dynamic parameter values
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsRequest extends $dara.Model {
  /**
   * @remarks
   * Synchronization job direction. Valid values:
   * 
   * - ingress: inbound
   * 
   * - egress: outbound
   * 
   * @example
   * ingress
   */
  direction?: string;
  /**
   * @remarks
   * Synchronization end time in Unix timestamp format, in milliseconds.
   * 
   * @example
   * 1649830226000
   */
  endTime?: number;
  /**
   * @remarks
   * Filter parameters
   */
  filters?: ListSynchronizationJobsRequestFilters[];
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Number of rows per page for paginated queries. Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for querying the next page. This parameter is not returned when there are no more pages.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * Page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Synchronization start time in Unix timestamp format, in milliseconds.
   * 
   * @example
   * 1649830226000
   */
  startTime?: number;
  /**
   * @remarks
   * Synchronization job status. Valid values:
   * 
   * - pending: initial state
   * 
   * - running: running
   * 
   * - failed: failed
   * 
   * - partial_success: partially succeeded
   * 
   * - success: succeeded
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * List of synchronization target IDs. [idp_111XXXX,idp_222XXXX]
   * 
   * @example
   * target_001
   */
  targetIds?: string[];
  /**
   * @remarks
   * Synchronization target type. Valid values:
   * 
   * - identity_provider: identity provider
   * 
   * - application: application
   * 
   * @example
   * identity_provider
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      endTime: 'EndTime',
      filters: 'Filters',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
      targetIds: 'TargetIds',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      endTime: 'number',
      filters: { 'type': 'array', 'itemType': ListSynchronizationJobsRequestFilters },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      status: 'string',
      targetIds: { 'type': 'array', 'itemType': 'string' },
      targetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    if(Array.isArray(this.targetIds)) {
      $dara.Model.validateArray(this.targetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

