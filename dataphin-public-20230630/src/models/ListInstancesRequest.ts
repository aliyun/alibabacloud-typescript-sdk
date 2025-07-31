// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequestListQuery extends $dara.Model {
  /**
   * @example
   * SCRIPT
   */
  bizType?: string;
  bizUnitId?: number;
  flowId?: string;
  /**
   * @example
   * 2024-05-31
   */
  maxBizDate?: string;
  /**
   * @example
   * 2024-05-31
   */
  maxRunDate?: string;
  /**
   * @example
   * 2024-05-30
   */
  minBizDate?: string;
  /**
   * @example
   * 2024-05-30
   */
  minRunDate?: string;
  /**
   * @example
   * n_23131
   */
  nodeId?: string;
  ownerList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  priorityList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 131311111321
   */
  projectId?: number;
  runStatusList?: string[];
  schedulePaused?: boolean;
  schedulePeriodList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
  scheduleType?: string;
  /**
   * @example
   * xx
   */
  searchText?: string;
  subBizTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      bizUnitId: 'BizUnitId',
      flowId: 'FlowId',
      maxBizDate: 'MaxBizDate',
      maxRunDate: 'MaxRunDate',
      minBizDate: 'MinBizDate',
      minRunDate: 'MinRunDate',
      nodeId: 'NodeId',
      ownerList: 'OwnerList',
      page: 'Page',
      pageSize: 'PageSize',
      priorityList: 'PriorityList',
      projectId: 'ProjectId',
      runStatusList: 'RunStatusList',
      schedulePaused: 'SchedulePaused',
      schedulePeriodList: 'SchedulePeriodList',
      scheduleType: 'ScheduleType',
      searchText: 'SearchText',
      subBizTypeList: 'SubBizTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      bizUnitId: 'number',
      flowId: 'string',
      maxBizDate: 'string',
      maxRunDate: 'string',
      minBizDate: 'string',
      minRunDate: 'string',
      nodeId: 'string',
      ownerList: { 'type': 'array', 'itemType': 'string' },
      page: 'number',
      pageSize: 'number',
      priorityList: { 'type': 'array', 'itemType': 'string' },
      projectId: 'number',
      runStatusList: { 'type': 'array', 'itemType': 'string' },
      schedulePaused: 'boolean',
      schedulePeriodList: { 'type': 'array', 'itemType': 'string' },
      scheduleType: 'string',
      searchText: 'string',
      subBizTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ownerList)) {
      $dara.Model.validateArray(this.ownerList);
    }
    if(Array.isArray(this.priorityList)) {
      $dara.Model.validateArray(this.priorityList);
    }
    if(Array.isArray(this.runStatusList)) {
      $dara.Model.validateArray(this.runStatusList);
    }
    if(Array.isArray(this.schedulePeriodList)) {
      $dara.Model.validateArray(this.schedulePeriodList);
    }
    if(Array.isArray(this.subBizTypeList)) {
      $dara.Model.validateArray(this.subBizTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $dara.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  listQuery?: ListInstancesRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      listQuery: ListInstancesRequestListQuery,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.listQuery && typeof (this.listQuery as any).validate === 'function') {
      (this.listQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

