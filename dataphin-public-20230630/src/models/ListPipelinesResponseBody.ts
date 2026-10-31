// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelinesResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The list of user IDs of the development owners.
   */
  developOwners?: string[];
  /**
   * @remarks
   * The directory.
   * 
   * @example
   * /dwd/Financial domain/
   */
  directory?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 12121111
   */
  fileId?: number;
  /**
   * @remarks
   * The scheduling node ID.
   * 
   * @example
   * n_6793582765516849152
   */
  nodeId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * test
   */
  nodeName?: string;
  /**
   * @remarks
   * The list of user IDs of the O&M owners.
   */
  opsOwners?: string[];
  /**
   * @remarks
   * The pipeline ID.
   * 
   * @example
   * 1450811
   */
  pipelineId?: number;
  /**
   * @remarks
   * The schedule type. Valid values:
   * - 1: Periodic scheduling.
   * - 3: Manual scheduling.
   * - 5: Real-time scheduling.
   * 
   * @example
   * 1
   */
  scheduleType?: number;
  /**
   * @remarks
   * The list of task tag names.
   */
  tags?: string[];
  /**
   * @remarks
   * The task status. Valid values:
   * - DRAFT: Draft.
   * - SUBMITTING: Submitting.
   * - SUBMITTED: Submitted.
   * - PUBLISHED: Published.
   * 
   * @example
   * SUBMITTED
   */
  taskStatus?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - 0: Offline integration.
   * - 1: Real-time integration.
   * - 13: Data aggregation.
   * - 14: Offline unstructured workflow.
   * - 15: Real-time unstructured workflow.
   * 
   * @example
   * 0
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      developOwners: 'DevelopOwners',
      directory: 'Directory',
      fileId: 'FileId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      opsOwners: 'OpsOwners',
      pipelineId: 'PipelineId',
      scheduleType: 'ScheduleType',
      tags: 'Tags',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      developOwners: { 'type': 'array', 'itemType': 'string' },
      directory: 'string',
      fileId: 'number',
      nodeId: 'string',
      nodeName: 'string',
      opsOwners: { 'type': 'array', 'itemType': 'string' },
      pipelineId: 'number',
      scheduleType: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
      taskStatus: 'string',
      taskType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.developOwners)) {
      $dara.Model.validateArray(this.developOwners);
    }
    if(Array.isArray(this.opsOwners)) {
      $dara.Model.validateArray(this.opsOwners);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of task information on the current page.
   */
  list?: ListPipelinesResponseBodyDataList[];
  /**
   * @remarks
   * The cursor for the next page in cursor-based pagination. This is an opaque cursor and does not need to be parsed. A value of null indicates that there are no more pages. Otherwise, pass this value as the nextCursor parameter in the next request to retrieve the next page.
   * 
   * @example
   * 123
   */
  nextCursor?: number;
  /**
   * @remarks
   * The current page number. Pages start from 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
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
   * The total number of records that meet the query conditions.
   * 
   * @example
   * 105
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      nextCursor: 'NextCursor',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListPipelinesResponseBodyDataList },
      nextCursor: 'number',
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. OK indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The paging query result.
   */
  data?: ListPipelinesResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListPipelinesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

