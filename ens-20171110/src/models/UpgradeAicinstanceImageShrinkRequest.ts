// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeAICInstanceImageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AIC image.
   * 
   * This parameter is required.
   * 
   * @example
   * m-****
   */
  imageId?: string;
  /**
   * @remarks
   * The IDs of the servers.
   * 
   * This parameter is required.
   */
  serverIdsShrink?: string;
  /**
   * @remarks
   * The timeout period of the update. Unit: seconds.
   * 
   * @example
   * 1800
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      serverIdsShrink: 'ServerIds',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      serverIdsShrink: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

