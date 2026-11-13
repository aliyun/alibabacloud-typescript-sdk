// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSemanticJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The identifier of the task creator, which has the same value as `UserId` and identifies who created the task.
   * 
   * @example
   * user-demo
   */
  creator?: string;
  /**
   * @remarks
   * The time when the task definition was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1700000000000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the task definition was last modified. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1700000000000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The internal unique ID of the task definition, which is used to identify the created task.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The saved task name. This value is used for subsequent operations such as running, deleting, querying run records, and downloading results.
   * 
   * @example
   * semantic-job-demo
   */
  name?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace to which the task belongs. This ID is used as the `ProjectId` for GetSemanticJobDetail, GetSemanticJobLog, and KillSemanticJob.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The list of IDs of associated uploaded files. If the source type is `singleTableFile`, the task reads the only file in the list at runtime.
   */
  referenceFileIds?: string[];
  /**
   * @remarks
   * The list of URIs of associated external reference files. If the source type is `singleTableFile`, the task reads the only file in the list at runtime.
   */
  referenceFileUris?: string[];
  /**
   * @remarks
   * The identifier of the resource group to be used when running this task.
   * 
   * @example
   * rg-demo
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The saved input data source configuration, which corresponds to `Source` in the creation request. The data scope to be analyzed is selected based on this config during runtime.
   * 
   * @example
   * {"type":"maxcompute","domain":"sales","pinnedScopeInfo":[{"type":"project","name":"mc_project"}]}
   */
  source?: { [key: string]: any };
  /**
   * @remarks
   * The saved `Source.type` data source type, which is used to quickly identify the task input type.
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
   * The saved semantic task definition. Use `Data.Name` to call RunSemanticJob, DeleteSemanticJob, ListSemanticJobRuns, and DownloadSemanticResults.
   */
  data?: CreateSemanticJobResponseBodyData;
  /**
   * @remarks
   * The request ID. You can use this ID to locate logs and troubleshoot issues.
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

