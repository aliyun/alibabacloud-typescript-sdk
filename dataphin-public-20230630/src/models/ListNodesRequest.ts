// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesRequestListQuery extends $dara.Model {
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SCRIPT
   */
  nodeBizType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeSubBizTypeList?: string[];
  ownerList?: string[];
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  priorityList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12111
   */
  projectId?: number;
  /**
   * @example
   * true
   */
  schedulePaused?: boolean;
  schedulePeriodList?: string[];
  /**
   * @example
   * NORMAL
   */
  scheduleType?: string;
  /**
   * @example
   * xx
   */
  searchText?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      nodeBizType: 'NodeBizType',
      nodeSubBizTypeList: 'NodeSubBizTypeList',
      ownerList: 'OwnerList',
      page: 'Page',
      pageSize: 'PageSize',
      priorityList: 'PriorityList',
      projectId: 'ProjectId',
      schedulePaused: 'SchedulePaused',
      schedulePeriodList: 'SchedulePeriodList',
      scheduleType: 'ScheduleType',
      searchText: 'SearchText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      nodeBizType: 'string',
      nodeSubBizTypeList: { 'type': 'array', 'itemType': 'string' },
      ownerList: { 'type': 'array', 'itemType': 'string' },
      page: 'number',
      pageSize: 'number',
      priorityList: { 'type': 'array', 'itemType': 'string' },
      projectId: 'number',
      schedulePaused: 'boolean',
      schedulePeriodList: { 'type': 'array', 'itemType': 'string' },
      scheduleType: 'string',
      searchText: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeSubBizTypeList)) {
      $dara.Model.validateArray(this.nodeSubBizTypeList);
    }
    if(Array.isArray(this.ownerList)) {
      $dara.Model.validateArray(this.ownerList);
    }
    if(Array.isArray(this.priorityList)) {
      $dara.Model.validateArray(this.priorityList);
    }
    if(Array.isArray(this.schedulePeriodList)) {
      $dara.Model.validateArray(this.schedulePeriodList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesRequest extends $dara.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListNodesRequestListQuery;
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
      listQuery: ListNodesRequestListQuery,
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

