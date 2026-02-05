// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecallManagementJobResponseBodyRecallManagementTableInfo extends $dara.Model {
  /**
   * @example
   * ds=20250701
   */
  dataVersion?: string;
  /**
   * @example
   * 20250101000
   */
  recallManagementTableVersionId?: string;
  /**
   * @example
   * 10000
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

export class GetRecallManagementJobResponseBodyRecallManagerTableInfo extends $dara.Model {
  /**
   * @example
   * ds=20250701
   */
  dataVersion?: string;
  /**
   * @example
   * 20250101000
   */
  recallManagerTableVersionId?: string;
  /**
   * @example
   * 10000
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
   * @example
   * 2021-12-15T23:24:33.132
   */
  endTime?: string;
  /**
   * @example
   * "success"
   */
  log?: string;
  /**
   * @example
   * 1
   */
  recallManagementJobId?: string;
  recallManagementTableInfo?: GetRecallManagementJobResponseBodyRecallManagementTableInfo;
  recallManagerTableInfo?: GetRecallManagementJobResponseBodyRecallManagerTableInfo;
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @example
   * 2021-12-15T22:24:33.132
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

