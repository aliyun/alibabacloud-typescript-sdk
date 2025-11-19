// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OssConfiguration } from "./OssConfiguration";


export class RecordingConfiguration extends $dara.Model {
  /**
   * @remarks
   * 是否启用录制
   * 
   * This parameter is required.
   */
  enabled?: boolean;
  ossLocation?: OssConfiguration;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      ossLocation: 'ossLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      ossLocation: OssConfiguration,
    };
  }

  validate() {
    if(this.ossLocation && typeof (this.ossLocation as any).validate === 'function') {
      (this.ossLocation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

