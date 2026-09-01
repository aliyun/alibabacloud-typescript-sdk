// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirusScanOnceTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Different requests should use different tokens. The token supports only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * The extended information field:
   * - **additionType**: the extended scan type
   * 
   * @example
   * {\\"additionType\\":[\\"SCAN_MEMORY\\"]}
   */
  param?: string;
  /**
   * @remarks
   * The scan path information to be transmitted if the scan type is custom scan.
   */
  scanPath?: string[];
  /**
   * @remarks
   * The scan type of the virus scan. Valid values:
   * - **system**: system scan
   * - **user**: custom scan.
   * 
   * @example
   * system
   */
  scanType?: string;
  /**
   * @remarks
   * The key that stores asset information.
   * > You can call the [GetAssetSelectionConfig](~~GetAssetSelectionConfig~~) operation to obtain this parameter.
   * 
   * @example
   * 845de1ec-4b08-42e1-b564-31321e48xxxx
   */
  selectionKey?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      param: 'Param',
      scanPath: 'ScanPath',
      scanType: 'ScanType',
      selectionKey: 'SelectionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

