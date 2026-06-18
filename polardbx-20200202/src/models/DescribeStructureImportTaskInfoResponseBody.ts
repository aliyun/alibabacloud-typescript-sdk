// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStructureImportTaskInfoResponseBodyDataStructureImportResult extends $dara.Model {
  /**
   * @remarks
   * The cause of the exception.
   * 
   * @example
   * java.sql.SQLException: [1a7a5f22aa403000][10.239.190.4:3058][hash_realtime_new]ERR-CODE: [TDDL-5123][ERR_INSTANCE_READ_ONLY_OPTION_NOT_SUPPORT] server is running with the instance-read-only option so it cannot execute this statement
   */
  exceptionDetail?: string;
  /**
   * @remarks
   * The name of the table that encountered an exception.
   * 
   * @example
   * hash_realtime_new.wm_in_job_et
   */
  exceptionFullTableName?: string;
  /**
   * @remarks
   * The number of completed records.
   * 
   * @example
   * 118
   */
  finishedNum?: number;
  /**
   * @remarks
   * The current progress in percentage.
   * 
   * @example
   * 100
   */
  percentage?: number;
  /**
   * @remarks
   * The import status.
   * 
   * @example
   * finish
   */
  status?: string;
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      exceptionDetail: 'ExceptionDetail',
      exceptionFullTableName: 'ExceptionFullTableName',
      finishedNum: 'FinishedNum',
      percentage: 'Percentage',
      status: 'Status',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionDetail: 'string',
      exceptionFullTableName: 'string',
      finishedNum: 'number',
      percentage: 'number',
      status: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStructureImportTaskInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The slink status.
   * 
   * @example
   * STRUCTURE_IMPORT
   */
  slinkStage?: string;
  /**
   * @remarks
   * The import result of the schema import task.
   */
  structureImportResult?: DescribeStructureImportTaskInfoResponseBodyDataStructureImportResult;
  static names(): { [key: string]: string } {
    return {
      slinkStage: 'SlinkStage',
      structureImportResult: 'StructureImportResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slinkStage: 'string',
      structureImportResult: DescribeStructureImportTaskInfoResponseBodyDataStructureImportResult,
    };
  }

  validate() {
    if(this.structureImportResult && typeof (this.structureImportResult as any).validate === 'function') {
      (this.structureImportResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStructureImportTaskInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result set.
   */
  data?: DescribeStructureImportTaskInfoResponseBodyData;
  /**
   * @remarks
   * The returned message. This parameter is empty if the request is successful. If the request fails, an error message is returned, such as an error code.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeStructureImportTaskInfoResponseBodyData,
      message: 'string',
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

