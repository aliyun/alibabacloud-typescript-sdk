// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageLibFreeInspectionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Configuration.
   */
  configShrink?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      configShrink: 'Config',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configShrink: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

