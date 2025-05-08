// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafSiteSettingsBotManagementDefiniteBots extends $dara.Model {
  action?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

