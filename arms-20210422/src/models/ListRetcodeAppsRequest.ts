// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRetcodeAppsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

