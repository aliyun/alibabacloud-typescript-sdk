// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecallManagementJobsResponseBodyRecallManagementJobsRecallManagementTableInfo extends $dara.Model {
  /**
   * @remarks
   * The data version number.
   * 
   * @example
   * ds=20250701
   */
  dataVersion?: string;
  /**
   * @remarks
   * The ID of the table version.
   * 
   * @example
   * 2
   */
  recallManagementTableVersionId?: string;
  /**
   * @remarks
   * The data size of the source table.
   * 
   * @example
   * 100
   */
  sourceTableDataSize?: string;
  /**
   * @remarks
   * The number of data rows in the source table.
   * 
   * @example
   * 100
   */
  sourceTableRowCount?: string;
  static names(): { [key: string]: string } {
    return {
      dataVersion: 'DataVersion',
      recallManagementTableVersionId: 'RecallManagementTableVersionId',
      sourceTableDataSize: 'SourceTableDataSize',
      sourceTableRowCount: 'SourceTableRowCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataVersion: 'string',
      recallManagementTableVersionId: 'string',
      sourceTableDataSize: 'string',
      sourceTableRowCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecallManagementJobsResponseBodyRecallManagementJobsRecallManagerTableInfo extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * ds=20250701
   */
  dataVersion?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * 2
   */
  recallManagementTableVersionId?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * 1000
   */
  sourceTableDataSize?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * 100
   */
  sourceTableRowCount?: string;
  static names(): { [key: string]: string } {
    return {
      dataVersion: 'DataVersion',
      recallManagementTableVersionId: 'RecallManagementTableVersionId',
      sourceTableDataSize: 'SourceTableDataSize',
      sourceTableRowCount: 'SourceTableRowCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataVersion: 'string',
      recallManagementTableVersionId: 'string',
      sourceTableDataSize: 'string',
      sourceTableRowCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecallManagementJobsResponseBodyRecallManagementJobs extends $dara.Model {
  /**
   * @remarks
   * The end time of the task. The time follows the ISO 8601 standard and is displayed in UTC.
   * 
   * @example
   * 2025-03-28T10:24Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 1
   */
  recallManagementJobId?: string;
  /**
   * @remarks
   * The task information of the recall management table.
   */
  recallManagementTableInfo?: ListRecallManagementJobsResponseBodyRecallManagementJobsRecallManagementTableInfo;
  /**
   * @remarks
   * **[Deprecated]**
   */
  recallManagerTableInfo?: ListRecallManagementJobsResponseBodyRecallManagementJobsRecallManagerTableInfo;
  /**
   * @remarks
   * The start time of the task. The time follows the ISO 8601 standard and is displayed in UTC.
   * 
   * @example
   * 2025-01-28T10:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status. Valid values: `Init` (initializing), `Running` (running), `Success` (successful), and `Failed` (failed).
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      recallManagementJobId: 'RecallManagementJobId',
      recallManagementTableInfo: 'RecallManagementTableInfo',
      recallManagerTableInfo: 'RecallManagerTableInfo',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      recallManagementJobId: 'string',
      recallManagementTableInfo: ListRecallManagementJobsResponseBodyRecallManagementJobsRecallManagementTableInfo,
      recallManagerTableInfo: ListRecallManagementJobsResponseBodyRecallManagementJobsRecallManagerTableInfo,
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.recallManagementTableInfo && typeof (this.recallManagementTableInfo as any).validate === 'function') {
      (this.recallManagementTableInfo as any).validate();
    }
    if(this.recallManagerTableInfo && typeof (this.recallManagerTableInfo as any).validate === 'function') {
      (this.recallManagerTableInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecallManagementJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * This parameter does not take effect.
   * 
   * @example
   * 0
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter does not take effect.
   * 
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of synchronization tasks.
   */
  recallManagementJobs?: ListRecallManagementJobsResponseBodyRecallManagementJobs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 30
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      recallManagementJobs: 'RecallManagementJobs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      recallManagementJobs: { 'type': 'array', 'itemType': ListRecallManagementJobsResponseBodyRecallManagementJobs },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recallManagementJobs)) {
      $dara.Model.validateArray(this.recallManagementJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

