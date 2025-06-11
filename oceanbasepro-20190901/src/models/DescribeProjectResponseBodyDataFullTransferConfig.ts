// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectResponseBodyDataFullTransferConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  allowDestTableNotEmpty?: boolean;
  /**
   * @example
   * FAST
   */
  fullTransferSpeedMode?: string;
  /**
   * @example
   * FAST
   */
  fullVerifySpeedMode?: string;
  /**
   * @example
   * false
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

