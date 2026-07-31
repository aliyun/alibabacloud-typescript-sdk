// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSemanticJobDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The advanced runtime settings returned by the executor.
   */
  advanceSettings?: { [key: string]: any };
  /**
   * @remarks
   * The code parameter information returned by the executor. Used for troubleshooting the runtime configuration of this run.
   * 
   * @example
   * --limit 100
   */
  codeParameters?: string;
  /**
   * @remarks
   * The index of the SQL fragment currently being processed by the executor.
   * 
   * @example
   * 0
   */
  currentSqlIndex?: number;
  /**
   * @remarks
   * The customer identifier of the executor job.
   * 
   * @example
   * meta_semantic
   */
  customerName?: string;
  /**
   * @remarks
   * The data source identifier used by the executor job.
   * 
   * @example
   * maxcompute
   */
  datasource?: string;
  /**
   * @remarks
   * The runtime environment identifier returned by the executor.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The list of execution type codes returned by the executor.
   */
  execTypes?: number[];
  /**
   * @remarks
   * The executor job ID.
   * 
   * @example
   * exec-job-demo
   */
  executorJobId?: string;
  /**
   * @remarks
   * The node type code of the executor. Semantic jobs use Shell node code 6.
   * 
   * @example
   * 6
   */
  fileType?: number;
  /**
   * @remarks
   * The DataWorks workspace ID associated with the executor job.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The ID of the resource group that actually executed the job.
   * 
   * @example
   * rg-demo
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of resource URLs associated with the executor job.
   */
  resourceUrls?: { [key: string]: any }[];
  /**
   * @remarks
   * The list of status codes returned by the executor. Used to determine the current or final status of the job.
   */
  statuses?: number[];
  static names(): { [key: string]: string } {
    return {
      advanceSettings: 'AdvanceSettings',
      codeParameters: 'CodeParameters',
      currentSqlIndex: 'CurrentSqlIndex',
      customerName: 'CustomerName',
      datasource: 'Datasource',
      env: 'Env',
      execTypes: 'ExecTypes',
      executorJobId: 'ExecutorJobId',
      fileType: 'FileType',
      projectId: 'ProjectId',
      resourceGroupId: 'ResourceGroupId',
      resourceUrls: 'ResourceUrls',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanceSettings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      codeParameters: 'string',
      currentSqlIndex: 'number',
      customerName: 'string',
      datasource: 'string',
      env: 'string',
      execTypes: { 'type': 'array', 'itemType': 'number' },
      executorJobId: 'string',
      fileType: 'number',
      projectId: 'number',
      resourceGroupId: 'string',
      resourceUrls: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      statuses: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(this.advanceSettings) {
      $dara.Model.validateMap(this.advanceSettings);
    }
    if(Array.isArray(this.execTypes)) {
      $dara.Model.validateArray(this.execTypes);
    }
    if(Array.isArray(this.resourceUrls)) {
      $dara.Model.validateArray(this.resourceUrls);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSemanticJobDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job details returned by the executor. Used to determine the run status and view the actual runtime configuration.
   */
  data?: GetSemanticJobDetailResponseBodyData;
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
      data: GetSemanticJobDetailResponseBodyData,
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

