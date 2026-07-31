// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSemanticJobsResponseBodyDataSemanticJobs extends $dara.Model {
  /**
   * @remarks
   * The user ID of the semantic task creator.
   * 
   * @example
   * user-demo
   */
  creator?: string;
  /**
   * @remarks
   * The creation time, expressed as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1700000000000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The last modification time, expressed as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1700000000000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The internal unique ID of the task definition.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The task name. Used for RunSemanticJob, DeleteSemanticJob, ListSemanticJobRuns, and DownloadSemanticResults.
   * 
   * @example
   * semantic-job-demo
   */
  name?: string;
  /**
   * @remarks
   * The workspace ID to which the task belongs. Used for GetSemanticJobDetail, GetSemanticJobLog, and KillSemanticJob.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The list of uploaded file IDs associated with the task.
   */
  referenceFileIds?: string[];
  /**
   * @remarks
   * The list of external reference file URIs associated with the task.
   */
  referenceFileUris?: string[];
  /**
   * @remarks
   * The ID of the resource group used to run this task.
   * 
   * @example
   * rg-demo
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The input datasource config saved in the node. This configuration determines the analysis scope at runtime.
   */
  source?: { [key: string]: any };
  /**
   * @remarks
   * The Source.type data source type saved in the task.
   * 
   * @example
   * maxcompute
   */
  type?: string;
  /**
   * @remarks
   * The user ID of the semantic task creator.
   * 
   * @example
   * user-demo
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
      referenceFileIds: 'ReferenceFileIds',
      referenceFileUris: 'ReferenceFileUris',
      resourceGroupId: 'ResourceGroupId',
      source: 'Source',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      name: 'string',
      projectId: 'number',
      referenceFileIds: { 'type': 'array', 'itemType': 'string' },
      referenceFileUris: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      source: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.referenceFileIds)) {
      $dara.Model.validateArray(this.referenceFileIds);
    }
    if(Array.isArray(this.referenceFileUris)) {
      $dara.Model.validateArray(this.referenceFileUris);
    }
    if(this.source) {
      $dara.Model.validateMap(this.source);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSemanticJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of task definitions per page in the current response.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of task definitions.
   */
  semanticJobs?: ListSemanticJobsResponseBodyDataSemanticJobs[];
  /**
   * @remarks
   * The total number of task definitions that meet the conditions within the current tenant.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      semanticJobs: 'SemanticJobs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      semanticJobs: { 'type': 'array', 'itemType': ListSemanticJobsResponseBodyDataSemanticJobs },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.semanticJobs)) {
      $dara.Model.validateArray(this.semanticJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSemanticJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The paginated result of task definitions. Use the Name field of a list item to run, delete, query run records, or download results. Use the ProjectId field to query run details, view logs, or stop a run.
   */
  data?: ListSemanticJobsResponseBodyData;
  /**
   * @remarks
   * The request ID. Used for locating logs and troubleshooting issues.
   * 
   * @example
   * 676271D6-53B4-57BE-89FA-72F7AE1418DF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListSemanticJobsResponseBodyData,
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

