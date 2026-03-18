// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobSnapshotInfosRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort the results in ascending order.
   * 
   * @example
   * true
   */
  ascOrder?: boolean;
  /**
   * @remarks
   * The upstream node ID.
   */
  extNodeIdList?: string[];
  /**
   * @remarks
   * The start UNIX timestamp.
   * 
   * > This parameter is invalid. The end timestamp is the point in time for the snapshot that you want to view.
   * 
   * @example
   * 1706840714
   */
  from?: number;
  /**
   * @remarks
   * The job instance ID.
   */
  instanceIdList?: string[];
  /**
   * @remarks
   * The job owner.
   */
  jobOwnerList?: string[];
  /**
   * @remarks
   * The job priority.
   */
  priorityList?: number[];
  /**
   * @remarks
   * The project name.
   */
  projectList?: string[];
  /**
   * @remarks
   * The nickname of the computing quota that the job uses.
   * 
   * @example
   * quota_A
   */
  quotaNickname?: string;
  /**
   * @remarks
   * The signature of the SQL job.
   */
  signatureList?: string[];
  /**
   * @remarks
   * The fields for multi-column sorting.
   */
  sortByList?: string[];
  /**
   * @remarks
   * The sort orders for multi-column sorting.
   */
  sortOrderList?: string[];
  /**
   * @remarks
   * The job status.
   */
  statusList?: string[];
  /**
   * @remarks
   * The end UNIX timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1706840714
   */
  to?: number;
  /**
   * @remarks
   * The job type.
   */
  typeList?: string[];
  /**
   * @remarks
   * The column to sort by. Valid values:
   * 
   * - submittedAtTime
   * 
   * - waitingTime
   * 
   * - runningAtTime
   * 
   * - runningTime
   * 
   * - snapshotTime
   * 
   * - totalTime
   * 
   * - cpuUsage
   * 
   * - memoryUsage
   * 
   * - minCpuPct
   * 
   * - minMemoryPct
   * 
   * - priority
   * 
   * - cpuRequest
   * 
   * - memoryRequest
   * 
   * - cpuUsageToRequestRatio
   * 
   * - memoryUsageToRequestRatio
   * 
   * @example
   * cpuUsage
   */
  orderColumn?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-chengdu
   */
  region?: string;
  /**
   * @remarks
   * The tenant ID. To view the tenant ID, log on to the MaxCompute console. In the navigation pane on the left, choose Tenant Management > Tenant Properties.
   * 
   * @example
   * 478403690625249
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      ascOrder: 'ascOrder',
      extNodeIdList: 'extNodeIdList',
      from: 'from',
      instanceIdList: 'instanceIdList',
      jobOwnerList: 'jobOwnerList',
      priorityList: 'priorityList',
      projectList: 'projectList',
      quotaNickname: 'quotaNickname',
      signatureList: 'signatureList',
      sortByList: 'sortByList',
      sortOrderList: 'sortOrderList',
      statusList: 'statusList',
      to: 'to',
      typeList: 'typeList',
      orderColumn: 'orderColumn',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ascOrder: 'boolean',
      extNodeIdList: { 'type': 'array', 'itemType': 'string' },
      from: 'number',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      jobOwnerList: { 'type': 'array', 'itemType': 'string' },
      priorityList: { 'type': 'array', 'itemType': 'number' },
      projectList: { 'type': 'array', 'itemType': 'string' },
      quotaNickname: 'string',
      signatureList: { 'type': 'array', 'itemType': 'string' },
      sortByList: { 'type': 'array', 'itemType': 'string' },
      sortOrderList: { 'type': 'array', 'itemType': 'string' },
      statusList: { 'type': 'array', 'itemType': 'string' },
      to: 'number',
      typeList: { 'type': 'array', 'itemType': 'string' },
      orderColumn: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extNodeIdList)) {
      $dara.Model.validateArray(this.extNodeIdList);
    }
    if(Array.isArray(this.instanceIdList)) {
      $dara.Model.validateArray(this.instanceIdList);
    }
    if(Array.isArray(this.jobOwnerList)) {
      $dara.Model.validateArray(this.jobOwnerList);
    }
    if(Array.isArray(this.priorityList)) {
      $dara.Model.validateArray(this.priorityList);
    }
    if(Array.isArray(this.projectList)) {
      $dara.Model.validateArray(this.projectList);
    }
    if(Array.isArray(this.signatureList)) {
      $dara.Model.validateArray(this.signatureList);
    }
    if(Array.isArray(this.sortByList)) {
      $dara.Model.validateArray(this.sortByList);
    }
    if(Array.isArray(this.sortOrderList)) {
      $dara.Model.validateArray(this.sortOrderList);
    }
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    if(Array.isArray(this.typeList)) {
      $dara.Model.validateArray(this.typeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

