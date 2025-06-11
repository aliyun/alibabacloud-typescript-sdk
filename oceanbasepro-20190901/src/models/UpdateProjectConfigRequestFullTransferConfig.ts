// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectConfigRequestFullTransferConfig extends $dara.Model {
  indexDDLConcurrencyLimit?: number;
  maxConcurrentIndexDDLs?: number;
  /**
   * @example
   * 64
   */
  readWorkerNum?: number;
  /**
   * @example
   * null
   */
  throttleIOPS?: number;
  /**
   * @example
   * null
   */
  throttleRps?: number;
  /**
   * @example
   * 64
   */
  writeWorkerNum?: number;
  static names(): { [key: string]: string } {
    return {
      indexDDLConcurrencyLimit: 'IndexDDLConcurrencyLimit',
      maxConcurrentIndexDDLs: 'MaxConcurrentIndexDDLs',
      readWorkerNum: 'ReadWorkerNum',
      throttleIOPS: 'ThrottleIOPS',
      throttleRps: 'ThrottleRps',
      writeWorkerNum: 'WriteWorkerNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexDDLConcurrencyLimit: 'number',
      maxConcurrentIndexDDLs: 'number',
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

