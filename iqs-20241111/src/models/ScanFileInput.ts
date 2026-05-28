// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScanFileInputConfig } from "./ScanFileInputConfig";


export class ScanFileInput extends $dara.Model {
  /**
   * @example
   * wrwqr
   */
  imageBase64?: string;
  /**
   * @example
   * https://www.1241.png
   */
  imageUrl?: string;
  scanFileInputConfig?: ScanFileInputConfig;
  static names(): { [key: string]: string } {
    return {
      imageBase64: 'imageBase64',
      imageUrl: 'imageUrl',
      scanFileInputConfig: 'scanFileInputConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageBase64: 'string',
      imageUrl: 'string',
      scanFileInputConfig: ScanFileInputConfig,
    };
  }

  validate() {
    if(this.scanFileInputConfig && typeof (this.scanFileInputConfig as any).validate === 'function') {
      (this.scanFileInputConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

