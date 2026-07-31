// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFalconSeekRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the FalconSeek cloud-native kernel feature. Valid values:
   * 
   * - true: Enable the feature.
   * - false: Disable the feature.
   * 
   * This parameter is required.
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

