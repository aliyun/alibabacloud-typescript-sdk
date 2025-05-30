// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobSnapshotInfosRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort data in ascending order.
   * 
   * @example
   * true
   */
  ascOrder?: boolean;
  /**
   * @remarks
   * The ID of the upstream node.
   */
  extNodeIdList?: string[];
  /**
   * @remarks
   * Start timestamp.
   * > This parameter is invalid. The end timestamp should be the time point for the snapshot you want to view.
   * 
   * @example
   * 1706840714
   */
  from?: number;
  /**
   * @remarks
   * The instance ID.
   */
  instanceIdList?: string[];
  /**
   * @remarks
   * The account that commits the job.
   */
  jobOwnerList?: string[];
  /**
   * @remarks
   * The priority of the job.
   */
  priorityList?: number[];
  /**
   * @remarks
   * The name of project.
   */
  projectList?: string[];
  /**
   * @remarks
   * The nickname of the compute Quota used by the job.
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
   * The sorting columns.
   */
  sortByList?: string[];
  /**
   * @remarks
   * The orders for the sorting columns.
   */
  sortOrderList?: string[];
  /**
   * @remarks
   * The status of jobs.
   */
  statusList?: string[];
  /**
   * @remarks
   * End timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1706840714
   */
  to?: number;
  /**
   * @remarks
   * The type of the job.
   */
  typeList?: string[];
  /**
   * @remarks
   * The sorting column.
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
   * The ID of the tenant. You can log on to the MaxCompute console, and choose Tenants > Tenant Property from the left-side navigation pane to view the tenant ID.
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

