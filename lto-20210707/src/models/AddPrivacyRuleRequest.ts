// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPrivacyRuleRequest extends $dara.Model {
  algImpl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  algType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  regionId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      algImpl: 'AlgImpl',
      algType: 'AlgType',
      name: 'Name',
      regionId: 'RegionId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algImpl: 'string',
      algType: 'string',
      name: 'string',
      regionId: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

