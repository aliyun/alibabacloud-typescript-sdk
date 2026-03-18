// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobInfosRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort the results in ascending or descending order.
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
  extNodeNameList?: string[];
  /**
   * @remarks
   * The start UNIX timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1672112000
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
   * The nickname of the quota.
   * 
   * @example
   * quota_nickname
   */
  quotaNickname?: string;
  /**
   * @remarks
   * The smart diagnosis tag.
   */
  sceneTagList?: string[];
  /**
   * @remarks
   * The job signature.
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
  taskNameList?: string[];
  /**
   * @remarks
   * The end UNIX timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1672112130
   */
  to?: number;
  /**
   * @remarks
   * The job type.
   */
  typeList?: string[];
  /**
   * @remarks
   * The column to use for sorting.
   * 
   * @example
   * cuUsage
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
   * The number of entries to return on each page.
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
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 478403690625249
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      ascOrder: 'ascOrder',
      extNodeIdList: 'extNodeIdList',
      extNodeNameList: 'extNodeNameList',
      from: 'from',
      instanceIdList: 'instanceIdList',
      jobOwnerList: 'jobOwnerList',
      priorityList: 'priorityList',
      projectList: 'projectList',
      quotaNickname: 'quotaNickname',
      sceneTagList: 'sceneTagList',
      signatureList: 'signatureList',
      sortByList: 'sortByList',
      sortOrderList: 'sortOrderList',
      statusList: 'statusList',
      taskNameList: 'taskNameList',
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
      extNodeNameList: { 'type': 'array', 'itemType': 'string' },
      from: 'number',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      jobOwnerList: { 'type': 'array', 'itemType': 'string' },
      priorityList: { 'type': 'array', 'itemType': 'number' },
      projectList: { 'type': 'array', 'itemType': 'string' },
      quotaNickname: 'string',
      sceneTagList: { 'type': 'array', 'itemType': 'string' },
      signatureList: { 'type': 'array', 'itemType': 'string' },
      sortByList: { 'type': 'array', 'itemType': 'string' },
      sortOrderList: { 'type': 'array', 'itemType': 'string' },
      statusList: { 'type': 'array', 'itemType': 'string' },
      taskNameList: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.extNodeNameList)) {
      $dara.Model.validateArray(this.extNodeNameList);
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
    if(Array.isArray(this.sceneTagList)) {
      $dara.Model.validateArray(this.sceneTagList);
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
    if(Array.isArray(this.taskNameList)) {
      $dara.Model.validateArray(this.taskNameList);
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

