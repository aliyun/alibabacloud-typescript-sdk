// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvalidateThirdPartyAppLoginStateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfoShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * com.*.*.*
   */
  thirdPartyAppId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      thirdPartyAppId: 'ThirdPartyAppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      thirdPartyAppId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

