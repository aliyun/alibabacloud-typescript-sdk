// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceStatusRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  svcCode?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      svcCode: 'SvcCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      svcCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

