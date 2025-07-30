// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSynchronizationJobsRequestFilters extends $dara.Model {
  key?: string;
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
   * 同步方向[ingress,egress]
   * 
   * @example
   * ingress
   */
  direction?: string;
  /**
   * @remarks
   * 同步结束时间
   * 
   * @example
   * 1649830226000
   */
  endTime?: number;
  filters?: ListSynchronizationJobsRequestFilters[];
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 分页查询时每页行数。默认值为20，最大值为100。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * 当前查询的列表页码，默认为1。
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 当前查询的列表页码，默认为20。
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * 同步开始时间
   * 
   * @example
   * 1649830226000
   */
  startTime?: number;
  /**
   * @remarks
   * 同步状态[pending,running,suspending,failed,partial_success,success]
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * 同步目标ID
   * 
   * @example
   * target_001
   */
  targetIds?: string[];
  /**
   * @remarks
   * 同步目标类型[identity_provider,organizational_unit,application,user]
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

