// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertRulesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alertIds?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertIds: 'AlertIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertIds: 'string',
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

