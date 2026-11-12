// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAgentStatisticsCreated extends $dara.Model {
  /**
   * @remarks
   * The failure count.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * The skipped count.
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * The success count.
   * 
   * @example
   * 3
   */
  success?: number;
  /**
   * @remarks
   * The total count.
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

export class GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAgentStatisticsDeleted extends $dara.Model {
  /**
   * @remarks
   * The failure count.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * The skipped count.
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * The success count.
   * 
   * @example
   * 3
   */
  success?: number;
  /**
   * @remarks
   * The total count.
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

export class GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAgentStatisticsSame extends $dara.Model {
  /**
   * @remarks
   * The failure count.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * The skipped count.
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * The success count.
   * 
   * @example
   * 3
   */
  success?: number;
  /**
   * @remarks
   * The total count.
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

export class GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAgentStatisticsUpdated extends $dara.Model {
  /**
   * @remarks
   * The failure count.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * The skipped count.
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * The success count.
   * 
   * @example
   * 3
   */
  success?: number;
  /**
   * @remarks
   * The total count.
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

export class GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAgentStatistics extends $dara.Model {
  /**
   * @remarks
   * The creation statistics.
   */
  created?: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAgentStatisticsCreated;
  /**
   * @remarks
   * The deletion statistics.
   */
  deleted?: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAgentStatisticsDeleted;
  /**
   * @remarks
   * The statistics of unchanged assets.
   */
  same?: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAgentStatisticsSame;
  /**
   * @remarks
   * The update statistics.
   */
  updated?: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAgentStatisticsUpdated;
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
      created: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAgentStatisticsCreated,
      deleted: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAgentStatisticsDeleted,
      same: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAgentStatisticsSame,
      updated: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAgentStatisticsUpdated,
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

export class GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAssetStatisticsCreated extends $dara.Model {
  /**
   * @remarks
   * The failure count.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * The skipped count.
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * The success count.
   * 
   * @example
   * 3
   */
  success?: number;
  /**
   * @remarks
   * The total count.
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

export class GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAssetStatisticsDeleted extends $dara.Model {
  /**
   * @remarks
   * The failure count.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * The skipped count.
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * The success count.
   * 
   * @example
   * 3
   */
  success?: number;
  /**
   * @remarks
   * The total count.
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

export class GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAssetStatisticsSame extends $dara.Model {
  /**
   * @remarks
   * The failure count.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * The skipped count.
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * The success count.
   * 
   * @example
   * 3
   */
  success?: number;
  /**
   * @remarks
   * The total count.
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

export class GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAssetStatisticsUpdated extends $dara.Model {
  /**
   * @remarks
   * The failure count.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * The skipped count.
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * The success count.
   * 
   * @example
   * 3
   */
  success?: number;
  /**
   * @remarks
   * The total count.
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

export class GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAssetStatistics extends $dara.Model {
  /**
   * @remarks
   * The creation statistics.
   */
  created?: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAssetStatisticsCreated;
  /**
   * @remarks
   * The deletion statistics.
   */
  deleted?: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAssetStatisticsDeleted;
  /**
   * @remarks
   * The statistics of unchanged assets.
   */
  same?: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAssetStatisticsSame;
  /**
   * @remarks
   * The update statistics.
   */
  updated?: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAssetStatisticsUpdated;
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
      created: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAssetStatisticsCreated,
      deleted: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAssetStatisticsDeleted,
      same: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAssetStatisticsSame,
      updated: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAssetStatisticsUpdated,
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

export class GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResult extends $dara.Model {
  /**
   * @remarks
   * The agent synchronization statistics.
   */
  agentStatistics?: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAgentStatistics;
  /**
   * @remarks
   * The asset synchronization statistics.
   */
  assetStatistics?: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAssetStatistics;
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
      agentStatistics: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAgentStatistics,
      assetStatistics: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResultAssetStatistics,
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

export class GetInventorySynchronizationJobResponseBodyInventorySynchronizationJob extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * No Description
   */
  description?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1761531556
   */
  endTime?: number;
  /**
   * @remarks
   * The inventory source ID.
   * 
   * @example
   * src_xxxxxx
   */
  inventorySourceId?: string;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * sync_xxxxxxxxx
   */
  inventorySynchronizationJobId?: string;
  /**
   * @remarks
   * The synchronization node task result.
   */
  result?: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResult;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1761531256
   */
  startTime?: number;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The trigger type.
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
      result: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJobResult,
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

export class GetInventorySynchronizationJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The inventory synchronization job.
   */
  inventorySynchronizationJob?: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      inventorySynchronizationJob: 'InventorySynchronizationJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inventorySynchronizationJob: GetInventorySynchronizationJobResponseBodyInventorySynchronizationJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.inventorySynchronizationJob && typeof (this.inventorySynchronizationJob as any).validate === 'function') {
      (this.inventorySynchronizationJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

