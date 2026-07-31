// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSemanticJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task creator identifier, equivalent to UserId, used to display creation ownership.
   * 
   * @example
   * user-demo
   */
  creator?: string;
  /**
   * @remarks
   * The creation time of the task definition, as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1700000000000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The last modification time of the task definition, as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1700000000000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The internal unique ID of the task definition, which identifies the task created by this call.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The saved task name. Use this value for subsequent run, delete, list runs, and download results operations.
   * 
   * @example
   * semantic-job-demo
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID to which the task belongs. Use this value as the ProjectId for GetSemanticJobDetail, GetSemanticJobLog, and KillSemanticJob.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The list of associated uploaded file IDs. For singleTableFile, the single file in this list is read at runtime.
   */
  referenceFileIds?: string[];
  /**
   * @remarks
   * The list of associated external reference file URIs. For singleTableFile, the single file in this list is read at runtime.
   */
  referenceFileUris?: string[];
  /**
   * @remarks
   * The ID of the resource group that will be used when running this task.
   * 
   * @example
   * rg-demo
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The saved input datasource config, corresponding to the Source in the creation request. The data scope to be analyzed is determined based on this configuration at runtime.
   */
  source?: { [key: string]: any };
  /**
   * @remarks
   * The saved Source.type data source type, used to quickly identify the task input type.
   * 
   * @example
   * maxcompute
   */
  type?: string;
  /**
   * @remarks
   * The identifier of the user who created the task.
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

export class CreateSemanticJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The saved semantic task definition. Use Data.Name to call RunSemanticJob, DeleteSemanticJob, ListSemanticJobRuns, and DownloadSemanticResults.
   */
  data?: CreateSemanticJobResponseBodyData;
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
   * Indicates whether the request was successful.
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
      data: CreateSemanticJobResponseBodyData,
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

