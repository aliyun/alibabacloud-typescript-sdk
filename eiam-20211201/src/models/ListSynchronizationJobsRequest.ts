// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSynchronizationJobsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the dynamic parameter.
   * 
   * @example
   * qps
   */
  key?: string;
  /**
   * @remarks
   * The value of the dynamic parameter.
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
   * The direction of the synchronization task. Valid values:
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
   * The end time of the synchronization. The time is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830226000
   */
  endTime?: number;
  /**
   * @remarks
   * The filter parameters.
   */
  filters?: ListSynchronizationJobsRequestFilters[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to query the next page. If no more pages exist, this parameter is not returned.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the synchronization. The time is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830226000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the synchronization task. Valid values:
   * 
   * - pending: initial state
   * 
   * - running: running
   * 
   * - failed: failed
   * 
   * - partial_success: partially successful
   * 
   * - success: successful
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The list of synchronization target IDs. Example: [idp_111XXXX,idp_222XXXX].
   * 
   * @example
   * target_001
   */
  targetIds?: string[];
  /**
   * @remarks
   * The type of the synchronization target. Valid values:
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

