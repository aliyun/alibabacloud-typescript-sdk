// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisplayConfigResponseBodyDisplayConfigModel extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cpn-jewjt8xryuituz4qn-****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The dots per inch (DPI). The value ranges from 72 to 600.
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
   * Indicates whether the resolution is locked.
   * 
   * @example
   * off
   */
  lockResolution?: string;
  /**
   * @remarks
   * The height of the resolution. Unit: pixels.
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The width of the resolution. Unit: pixels.
   * 
   * @example
   * 720
   */
  resolutionWidth?: number;
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      dpi: 'Dpi',
      fps: 'Fps',
      lockResolution: 'LockResolution',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
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

export class DescribeDisplayConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of display settings.
   */
  displayConfigModel?: DescribeDisplayConfigResponseBodyDisplayConfigModel[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FFEF7EFE-1E36-56D1-B5BF-5BACE43B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      displayConfigModel: 'DisplayConfigModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayConfigModel: { 'type': 'array', 'itemType': DescribeDisplayConfigResponseBodyDisplayConfigModel },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.displayConfigModel)) {
      $dara.Model.validateArray(this.displayConfigModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

