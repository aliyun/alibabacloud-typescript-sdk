// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBlackListStrategyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Blacklist rule.
   */
  blackListStrategyShrink?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      blackListStrategyShrink: 'BlackListStrategy',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackListStrategyShrink: 'string',
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

