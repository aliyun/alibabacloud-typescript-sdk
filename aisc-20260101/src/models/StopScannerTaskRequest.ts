// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopScannerTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the scan task. This is the TaskId returned by CreateTargetScanTask or the ScannerTaskId returned by ListScanTasksByTarget. If the task does not exist or belongs to another tenant, a 400 error is returned without exposing whether the resource exists.
   * 
   * This parameter is required.
   * 
   * @example
   * task-abc123def4567
   */
  scannerTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      scannerTaskId: 'ScannerTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scannerTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

