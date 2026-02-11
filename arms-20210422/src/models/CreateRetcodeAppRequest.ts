// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRetcodeAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  retcodeAppName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  retcodeAppType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      retcodeAppName: 'RetcodeAppName',
      retcodeAppType: 'RetcodeAppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      retcodeAppName: 'string',
      retcodeAppType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

