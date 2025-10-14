// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStructureImportTaskInfoResponseBodyDataStructureImportResult extends $dara.Model {
  /**
   * @example
   * java.sql.SQLException: [1a7a5f22aa403000][10.239.190.4:3058][hash_realtime_new]ERR-CODE: [TDDL-5123][ERR_INSTANCE_READ_ONLY_OPTION_NOT_SUPPORT] server is running with the instance-read-only option so it cannot execute this statement
   */
  exceptionDetail?: string;
  /**
   * @example
   * hash_realtime_new.wm_in_job_et
   */
  exceptionFullTableName?: string;
  /**
   * @example
   * 118
   */
  finishedNum?: number;
  /**
   * @example
   * 100
   */
  percentage?: number;
  /**
   * @example
   * finish
   */
  status?: string;
  /**
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
   * @example
   * STRUCTURE_IMPORT
   */
  slinkStage?: string;
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
  data?: DescribeStructureImportTaskInfoResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
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

