// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelinesResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The list of user IDs of development owners.
   */
  developOwners?: string[];
  /**
   * @remarks
   * The directory in which the task resides.
   * 
   * @example
   * /dwd/Finance/
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
   * The node name.
   * 
   * @example
   * test
   */
  nodeName?: string;
  /**
   * @remarks
   * The list of user IDs of O&M owners.
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
   * - 1: periodic scheduling.
   * - 3: manual scheduling.
   * - 5: real-time scheduling.
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
   * - DRAFT: draft.
   * - SUBMITTING: being submitted.
   * - SUBMITTED: submitted.
   * - PUBLISHED: published.
   * 
   * @example
   * SUBMITTED
   */
  taskStatus?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - 0: offline integration.
   * - 1: real-time integration.
   * - 13: data aggregation.
   * - 14: offline unstructured workflow.
   * - 15: real-time unstructured workflow.
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
   * The cursor for the next page (an opaque cursor that the caller does not need to interpret). A null value indicates that there are no more pages. Otherwise, pass this value as the nextCursor parameter in the next request to retrieve the next page.
   * 
   * @example
   * 123
   */
  nextCursor?: number;
  /**
   * @remarks
   * The current page number, starting from 1.
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
   * The total number of records that match the conditions. On the first page request, the actual total is returned. On subsequent page requests (when nextCursor is passed in), if totalCount is included in the request, the same value is returned. Otherwise, this field is not returned. The total value is a snapshot taken at the time of the first page query and is not updated in real time as data changes during pagination.
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
   * The error code. OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The paged query result.
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
   * Indicates whether the request was successful.
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

