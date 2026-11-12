// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAgentStatisticsCreated extends $dara.Model {
  /**
   * @remarks
   * The number of failed items.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * The number of skipped items.
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * The number of successful items.
   * 
   * @example
   * 3
   */
  success?: number;
  /**
   * @remarks
   * The total number of items.
   * 
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAgentStatisticsDeleted extends $dara.Model {
  /**
   * @remarks
   * The number of failed items.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * The number of skipped items.
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * The number of successful items.
   * 
   * @example
   * 3
   */
  success?: number;
  /**
   * @remarks
   * The total number of items.
   * 
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAgentStatisticsSame extends $dara.Model {
  /**
   * @remarks
   * The number of failed items.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * The number of skipped items.
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * The number of successful items.
   * 
   * @example
   * 3
   */
  success?: number;
  /**
   * @remarks
   * The total number of items.
   * 
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAgentStatisticsUpdated extends $dara.Model {
  /**
   * @remarks
   * The number of failed items.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * The number of skipped items.
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * The number of successful items.
   * 
   * @example
   * 3
   */
  success?: number;
  /**
   * @remarks
   * The total number of items.
   * 
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAgentStatistics extends $dara.Model {
  /**
   * @remarks
   * The statistics of the creation result.
   */
  created?: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAgentStatisticsCreated;
  /**
   * @remarks
   * The statistics of the deletion result.
   */
  deleted?: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAgentStatisticsDeleted;
  /**
   * @remarks
   * The statistics of unchanged items.
   */
  same?: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAgentStatisticsSame;
  /**
   * @remarks
   * The statistics of the update result.
   */
  updated?: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAgentStatisticsUpdated;
  static names(): { [key: string]: string } {
    return {
      created: 'Created',
      deleted: 'Deleted',
      same: 'Same',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAgentStatisticsCreated,
      deleted: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAgentStatisticsDeleted,
      same: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAgentStatisticsSame,
      updated: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAgentStatisticsUpdated,
    };
  }

  validate() {
    if(this.created && typeof (this.created as any).validate === 'function') {
      (this.created as any).validate();
    }
    if(this.deleted && typeof (this.deleted as any).validate === 'function') {
      (this.deleted as any).validate();
    }
    if(this.same && typeof (this.same as any).validate === 'function') {
      (this.same as any).validate();
    }
    if(this.updated && typeof (this.updated as any).validate === 'function') {
      (this.updated as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAssetStatisticsCreated extends $dara.Model {
  /**
   * @remarks
   * The number of failed items.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * The number of skipped items.
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * The number of successful items.
   * 
   * @example
   * 3
   */
  success?: number;
  /**
   * @remarks
   * The total number of items.
   * 
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAssetStatisticsDeleted extends $dara.Model {
  /**
   * @remarks
   * The number of failed items.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * The number of skipped items.
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * The number of successful items.
   * 
   * @example
   * 3
   */
  success?: number;
  /**
   * @remarks
   * The total number of items.
   * 
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAssetStatisticsSame extends $dara.Model {
  /**
   * @remarks
   * The number of failed items.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * The number of skipped items.
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * The number of successful items.
   * 
   * @example
   * 3
   */
  success?: number;
  /**
   * @remarks
   * The total number of items.
   * 
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAssetStatisticsUpdated extends $dara.Model {
  /**
   * @remarks
   * The number of failed items.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * The number of skipped items.
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * The number of successful items.
   * 
   * @example
   * 3
   */
  success?: number;
  /**
   * @remarks
   * The total number of items.
   * 
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAssetStatistics extends $dara.Model {
  /**
   * @remarks
   * The statistics of the creation result.
   */
  created?: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAssetStatisticsCreated;
  /**
   * @remarks
   * The statistics of the deletion result.
   */
  deleted?: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAssetStatisticsDeleted;
  /**
   * @remarks
   * The statistics of unchanged items.
   */
  same?: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAssetStatisticsSame;
  /**
   * @remarks
   * The statistics of the update result.
   */
  updated?: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAssetStatisticsUpdated;
  static names(): { [key: string]: string } {
    return {
      created: 'Created',
      deleted: 'Deleted',
      same: 'Same',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAssetStatisticsCreated,
      deleted: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAssetStatisticsDeleted,
      same: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAssetStatisticsSame,
      updated: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAssetStatisticsUpdated,
    };
  }

  validate() {
    if(this.created && typeof (this.created as any).validate === 'function') {
      (this.created as any).validate();
    }
    if(this.deleted && typeof (this.deleted as any).validate === 'function') {
      (this.deleted as any).validate();
    }
    if(this.same && typeof (this.same as any).validate === 'function') {
      (this.same as any).validate();
    }
    if(this.updated && typeof (this.updated as any).validate === 'function') {
      (this.updated as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResult extends $dara.Model {
  /**
   * @remarks
   * The statistics of the agent synchronization result.
   */
  agentStatistics?: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAgentStatistics;
  /**
   * @remarks
   * The statistics of the asset synchronization result.
   */
  assetStatistics?: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAssetStatistics;
  /**
   * @remarks
   * The error code of the synchronization result.
   * 
   * @example
   * No ErrorCode
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message of the synchronization result.
   * 
   * @example
   * No Error Message
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      agentStatistics: 'AgentStatistics',
      assetStatistics: 'AssetStatistics',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatistics: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAgentStatistics,
      assetStatistics: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResultAssetStatistics,
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    if(this.agentStatistics && typeof (this.agentStatistics as any).validate === 'function') {
      (this.agentStatistics as any).validate();
    }
    if(this.assetStatistics && typeof (this.assetStatistics as any).validate === 'function') {
      (this.assetStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobs extends $dara.Model {
  /**
   * @remarks
   * The description of the synchronization job.
   * 
   * @example
   * No Description
   */
  description?: string;
  /**
   * @remarks
   * The end time of the synchronization job.
   * 
   * @example
   * 1761533214
   */
  endTime?: number;
  /**
   * @remarks
   * The IDs of the synchronization targets.
   * 
   * @example
   * src_xxxxx
   */
  inventorySourceId?: string;
  /**
   * @remarks
   * The ID of the synchronization job.
   * 
   * @example
   * sync_xxxxxxx
   */
  inventorySynchronizationJobId?: string;
  /**
   * @remarks
   * The task result of the synchronization node.
   */
  result?: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResult;
  /**
   * @remarks
   * The start time of the synchronization job.
   * 
   * @example
   * 1761531256
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the synchronization job.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The trigger type of the synchronization job.
   * 
   * @example
   * manual
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      endTime: 'EndTime',
      inventorySourceId: 'InventorySourceId',
      inventorySynchronizationJobId: 'InventorySynchronizationJobId',
      result: 'Result',
      startTime: 'StartTime',
      status: 'Status',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endTime: 'number',
      inventorySourceId: 'string',
      inventorySynchronizationJobId: 'string',
      result: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobsResult,
      startTime: 'number',
      status: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventorySynchronizationJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The inventory synchronization jobs.
   */
  inventorySynchronizationJobs?: ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobs[];
  /**
   * @remarks
   * The maximum number of returned results.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned by the current call for subsequent paged queries.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      inventorySynchronizationJobs: 'InventorySynchronizationJobs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inventorySynchronizationJobs: { 'type': 'array', 'itemType': ListInventorySynchronizationJobsResponseBodyInventorySynchronizationJobs },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.inventorySynchronizationJobs)) {
      $dara.Model.validateArray(this.inventorySynchronizationJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

