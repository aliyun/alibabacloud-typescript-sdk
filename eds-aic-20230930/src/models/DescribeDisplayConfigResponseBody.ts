// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisplayConfigResponseBodyDisplayConfigModel extends $dara.Model {
  /**
   * @example
   * cpn-jewjt8xryuituz4qn-****
   */
  androidInstanceId?: string;
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
   * 1280
   */
  resolutionHeight?: number;
  /**
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
  displayConfigModel?: DescribeDisplayConfigResponseBodyDisplayConfigModel[];
  /**
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

