// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScannerTaskHitDataUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the scan task. This is the TaskId returned by CreateTargetScanTask or the ScannerTaskId returned by ListScanTasksByTarget. This parameter is registered as optional but is required in practice. An empty value returns HTTP status code 400. If the task does not exist or belongs to another tenant, HTTP status code 400 is returned uniformly to avoid exposing whether the resource exists.
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

