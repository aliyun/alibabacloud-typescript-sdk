// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectRequestFullTransferConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  allowDestTableNotEmpty?: boolean;
  /**
   * @example
   * NORMAL
   */
  fullTransferSpeedMode?: string;
  /**
   * @example
   * NORMAL
   */
  fullVerifySpeedMode?: string;
  hbaseObjCheckMode?: string;
  hbaseObjMigMode?: string;
  indexDDLConcurrencyLimit?: number;
  maxConcurrentIndexDDLs?: number;
  /**
   * @example
   * true
   */
  nonePkUkTruncateDstTable?: boolean;
  readWorkerNum?: number;
  throttleIOPS?: number;
  throttleRps?: number;
  writeWorkerNum?: number;
  static names(): { [key: string]: string } {
    return {
      allowDestTableNotEmpty: 'AllowDestTableNotEmpty',
      fullTransferSpeedMode: 'FullTransferSpeedMode',
      fullVerifySpeedMode: 'FullVerifySpeedMode',
      hbaseObjCheckMode: 'HbaseObjCheckMode',
      hbaseObjMigMode: 'HbaseObjMigMode',
      indexDDLConcurrencyLimit: 'IndexDDLConcurrencyLimit',
      maxConcurrentIndexDDLs: 'MaxConcurrentIndexDDLs',
      nonePkUkTruncateDstTable: 'NonePkUkTruncateDstTable',
      readWorkerNum: 'ReadWorkerNum',
      throttleIOPS: 'ThrottleIOPS',
      throttleRps: 'ThrottleRps',
      writeWorkerNum: 'WriteWorkerNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowDestTableNotEmpty: 'boolean',
      fullTransferSpeedMode: 'string',
      fullVerifySpeedMode: 'string',
      hbaseObjCheckMode: 'string',
      hbaseObjMigMode: 'string',
      indexDDLConcurrencyLimit: 'number',
      maxConcurrentIndexDDLs: 'number',
      nonePkUkTruncateDstTable: 'boolean',
      readWorkerNum: 'number',
      throttleIOPS: 'number',
      throttleRps: 'number',
      writeWorkerNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

