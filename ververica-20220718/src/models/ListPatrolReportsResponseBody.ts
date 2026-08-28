// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPatrolReportsResponseBodyDataItemsScopeConfig extends $dara.Model {
  /**
   * @remarks
   * The list of deployment IDs. This field is valid only when scopeType is set to DEPLOYMENTS.
   */
  deploymentIds?: string[];
  /**
   * @remarks
   * The tag mapping. This field is valid only when scopeType is set to TAGS. The key is the tag name, and the value is a list of tag values.
   */
  tags?: { [key: string]: string[] };
  static names(): { [key: string]: string } {
    return {
      deploymentIds: 'deploymentIds',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentIds: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.deploymentIds)) {
      $dara.Model.validateArray(this.deploymentIds);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPatrolReportsResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The inspection completion time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1785981634652
   */
  completedAt?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1755158793586
   */
  createdAt?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The number of inspected jobs.
   * 
   * @example
   * 2
   */
  inspectedJobs?: number;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The number of jobs with delay and backpressure.
   * 
   * @example
   * 1
   */
  problemDelayBackpressureCount?: number;
  /**
   * @remarks
   * The number of jobs with unhealthy checkpoints.
   * 
   * @example
   * 0
   */
  problemUnhealthyCheckpointCount?: number;
  /**
   * @remarks
   * The number of unhealthy jobs.
   * 
   * @example
   * 1
   */
  problemUnhealthyCount?: number;
  /**
   * @remarks
   * The report ID.
   * 
   * @example
   * e7fd2601edc24a37baaba7eec5f64312
   */
  reportId?: string;
  /**
   * @remarks
   * The number of jobs with a Critical risk level.
   * 
   * @example
   * 0
   */
  riskCriticalCount?: number;
  /**
   * @remarks
   * The number of jobs with an Info risk level.
   * 
   * @example
   * 1
   */
  riskInfoCount?: number;
  /**
   * @remarks
   * The number of jobs with a Warning risk level.
   * 
   * @example
   * 1
   */
  riskWarningCount?: number;
  /**
   * @remarks
   * The inspection scope configuration.
   */
  scopeConfig?: ListPatrolReportsResponseBodyDataItemsScopeConfig;
  /**
   * @remarks
   * The inspection scope type.
   * 
   * @example
   * ALL
   */
  scopeType?: string;
  /**
   * @remarks
   * The inspection start time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1755158793586
   */
  startedAt?: string;
  /**
   * @remarks
   * The report status.
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * The total number of jobs.
   * 
   * @example
   * 5
   */
  totalJobs?: number;
  /**
   * @remarks
   * The trigger type.
   * 
   * @example
   * CRON
   */
  triggerType?: string;
  /**
   * @remarks
   * The update time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1784168829417
   */
  updatedAt?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      completedAt: 'completedAt',
      createdAt: 'createdAt',
      errorMessage: 'errorMessage',
      inspectedJobs: 'inspectedJobs',
      namespace: 'namespace',
      problemDelayBackpressureCount: 'problemDelayBackpressureCount',
      problemUnhealthyCheckpointCount: 'problemUnhealthyCheckpointCount',
      problemUnhealthyCount: 'problemUnhealthyCount',
      reportId: 'reportId',
      riskCriticalCount: 'riskCriticalCount',
      riskInfoCount: 'riskInfoCount',
      riskWarningCount: 'riskWarningCount',
      scopeConfig: 'scopeConfig',
      scopeType: 'scopeType',
      startedAt: 'startedAt',
      status: 'status',
      totalJobs: 'totalJobs',
      triggerType: 'triggerType',
      updatedAt: 'updatedAt',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedAt: 'string',
      createdAt: 'string',
      errorMessage: 'string',
      inspectedJobs: 'number',
      namespace: 'string',
      problemDelayBackpressureCount: 'number',
      problemUnhealthyCheckpointCount: 'number',
      problemUnhealthyCount: 'number',
      reportId: 'string',
      riskCriticalCount: 'number',
      riskInfoCount: 'number',
      riskWarningCount: 'number',
      scopeConfig: ListPatrolReportsResponseBodyDataItemsScopeConfig,
      scopeType: 'string',
      startedAt: 'string',
      status: 'string',
      totalJobs: 'number',
      triggerType: 'string',
      updatedAt: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.scopeConfig && typeof (this.scopeConfig as any).validate === 'function') {
      (this.scopeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPatrolReportsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of inspection reports.
   */
  items?: ListPatrolReportsResponseBodyDataItems[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      page: 'page',
      size: 'size',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListPatrolReportsResponseBodyDataItems },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPatrolReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The paginated data of inspection reports.
   */
  data?: ListPatrolReportsResponseBodyData;
  /**
   * @remarks
   * The business error code. This value is not empty when success is false. This value is empty when success is true.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * The business error message. This value is not empty when success is false. This value is empty when success is true.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The business status code, which is always 200. Use the success field to determine whether the business request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the business request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListPatrolReportsResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
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

