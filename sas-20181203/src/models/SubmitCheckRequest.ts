// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The check items that are scanned. Valid values:
   * 
   * *   **FULL**: All check items are scanned.
   * *   **FULL**: Only the check items that are configured are scanned.
   * 
   * @example
   * POLICY
   */
  scanRange?: string;
  taskSource?: string;
  static names(): { [key: string]: string } {
    return {
      scanRange: 'ScanRange',
      taskSource: 'TaskSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scanRange: 'string',
      taskSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

