// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDisplayConfigRequestDisplayConfig extends $dara.Model {
  /**
   * @example
   * 240
   */
  dpi?: number;
  /**
   * @example
   * null
   */
  fps?: number;
  /**
   * @example
   * off
   */
  lockResolution?: string;
  /**
   * @example
   * 1920
   */
  resolutionHeight?: number;
  /**
   * @example
   * 720
   */
  resolutionWidth?: number;
  static names(): { [key: string]: string } {
    return {
      dpi: 'Dpi',
      fps: 'Fps',
      lockResolution: 'LockResolution',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpi: 'number',
      fps: 'number',
      lockResolution: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDisplayConfigRequest extends $dara.Model {
  androidInstanceIds?: string[];
  displayConfig?: ModifyDisplayConfigRequestDisplayConfig;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      displayConfig: 'DisplayConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      displayConfig: ModifyDisplayConfigRequestDisplayConfig,
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIds)) {
      $dara.Model.validateArray(this.androidInstanceIds);
    }
    if(this.displayConfig && typeof (this.displayConfig as any).validate === 'function') {
      (this.displayConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

