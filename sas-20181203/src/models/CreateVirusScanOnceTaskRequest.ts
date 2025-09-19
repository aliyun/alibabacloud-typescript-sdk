// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirusScanOnceTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Additional information fields: 
   * - **additionType**: The type of extended scan
   * 
   * @example
   * {\\"additionType\\":[\\"SCAN_MEMORY\\"]}
   */
  param?: string;
  /**
   * @remarks
   * The information about the scan path that is required for a custom scan.
   */
  scanPath?: string[];
  /**
   * @remarks
   * The type of the virus scan. Valid values:
   * 
   * *   **system**: system scan.
   * *   **user**: custom scan.
   * 
   * @example
   * system
   */
  scanType?: string;
  /**
   * @remarks
   * The key that stores the asset information.
   * 
   * > You can call the [GetAssetSelectionConfig](~~GetAssetSelectionConfig~~) operation to obtain the key value.
   * 
   * @example
   * 845de1ec-4b08-42e1-b564-31321e48xxxx
   */
  selectionKey?: string;
  static names(): { [key: string]: string } {
    return {
      param: 'Param',
      scanPath: 'ScanPath',
      scanType: 'ScanType',
      selectionKey: 'SelectionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      param: 'string',
      scanPath: { 'type': 'array', 'itemType': 'string' },
      scanType: 'string',
      selectionKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scanPath)) {
      $dara.Model.validateArray(this.scanPath);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

