// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecallManagementJobsResponseBodyRecallManagementJobsRecallManagementTableInfo extends $dara.Model {
  dataVersion?: string;
  recallManagementTableVersionId?: string;
  sourceTableDataSize?: string;
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
   * @example
   * ds=20250701
   */
  dataVersion?: string;
  /**
   * @example
   * 2
   */
  recallManagementTableVersionId?: string;
  /**
   * @example
   * 1000
   */
  sourceTableDataSize?: string;
  /**
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
   * @example
   * 2025-03-28T10:24Z
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  recallManagementJobId?: string;
  recallManagementTableInfo?: ListRecallManagementJobsResponseBodyRecallManagementJobsRecallManagementTableInfo;
  recallManagerTableInfo?: ListRecallManagementJobsResponseBodyRecallManagementJobsRecallManagerTableInfo;
  /**
   * @example
   * 2025-01-28T10:00:00Z
   */
  startTime?: string;
  /**
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
   * @example
   * 0
   */
  maxResults?: number;
  /**
   * @example
   * ""
   */
  nextToken?: string;
  recallManagementJobs?: ListRecallManagementJobsResponseBodyRecallManagementJobs[];
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
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

