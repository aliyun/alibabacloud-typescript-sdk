// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecallManagementJobResponseBodyRecallManagementTableInfo extends $dara.Model {
  /**
   * @remarks
   * The data version.
   * 
   * @example
   * ds=20250701
   */
  dataVersion?: string;
  /**
   * @remarks
   * The recall management table version ID.
   * 
   * @example
   * 20250101000
   */
  recallManagementTableVersionId?: string;
  /**
   * @remarks
   * The data size of the source table.
   * 
   * @example
   * 10000
   */
  sourceTableDataSize?: string;
  /**
   * @remarks
   * The number of rows in the source table.
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

export class GetRecallManagementJobResponseBodyRecallManagerTableInfo extends $dara.Model {
  /**
   * @remarks
   * The data version.
   * 
   * @example
   * ds=20250701
   */
  dataVersion?: string;
  /**
   * @remarks
   * The recall management table version ID.
   * 
   * @example
   * 20250101000
   */
  recallManagerTableVersionId?: string;
  /**
   * @remarks
   * The data size of the source table.
   * 
   * @example
   * 10000
   */
  sourceTableDataSize?: string;
  /**
   * @remarks
   * The number of rows in the source table.
   * 
   * @example
   * 100
   */
  sourceTableRowCount?: string;
  static names(): { [key: string]: string } {
    return {
      dataVersion: 'DataVersion',
      recallManagerTableVersionId: 'RecallManagerTableVersionId',
      sourceTableDataSize: 'SourceTableDataSize',
      sourceTableRowCount: 'SourceTableRowCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataVersion: 'string',
      recallManagerTableVersionId: 'string',
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

export class GetRecallManagementJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the job ended.
   * 
   * @example
   * 2021-12-15T23:24:33.132
   */
  endTime?: string;
  /**
   * @remarks
   * The log of the job.
   * 
   * @example
   * "success"
   */
  log?: string;
  /**
   * @remarks
   * The recall management job ID.
   * 
   * @example
   * 1
   */
  recallManagementJobId?: string;
  /**
   * @remarks
   * Details of the recall management table.
   */
  recallManagementTableInfo?: GetRecallManagementJobResponseBodyRecallManagementTableInfo;
  /**
   * @remarks
   * Details of the recall management table.
   */
  recallManagerTableInfo?: GetRecallManagementJobResponseBodyRecallManagerTableInfo;
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
   * The time when the job started.
   * 
   * @example
   * 2021-12-15T22:24:33.132
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the job. Valid values are:
   * 
   * - `Init`: Initializing.
   * 
   * - `Running`: Running.
   * 
   * - `Success`: Successful.
   * 
   * - `Failed`: Failed.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      log: 'Log',
      recallManagementJobId: 'RecallManagementJobId',
      recallManagementTableInfo: 'RecallManagementTableInfo',
      recallManagerTableInfo: 'RecallManagerTableInfo',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      log: 'string',
      recallManagementJobId: 'string',
      recallManagementTableInfo: GetRecallManagementJobResponseBodyRecallManagementTableInfo,
      recallManagerTableInfo: GetRecallManagementJobResponseBodyRecallManagerTableInfo,
      requestId: 'string',
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

