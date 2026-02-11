// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDispatchRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dispatchRule?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dispatchRule: 'DispatchRule',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dispatchRule: 'string',
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

