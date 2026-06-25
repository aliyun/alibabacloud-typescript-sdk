// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDisplayConfigRequestDisplayConfig extends $dara.Model {
  /**
   * @remarks
   * The dots per inch (DPI). Valid values: 72 to 600.
   * 
   * @example
   * 240
   */
  dpi?: number;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  fps?: number;
  /**
   * @remarks
   * Specifies whether to lock the resolution.
   * 
   * @example
   * off
   */
  lockResolution?: string;
  /**
   * @remarks
   * The resolution height, in pixels.
   * 
   * @example
   * 1920
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The resolution width, in pixels.
   * 
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
  /**
   * @remarks
   * A list of instance IDs.
   */
  androidInstanceIds?: string[];
  /**
   * @remarks
   * The display settings.
   */
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

