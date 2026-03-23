// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JudgeXingTianBusinessRequest extends $dara.Model {
  appCode?: string;
  appName?: string;
  realmId?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appName: 'AppName',
      realmId: 'RealmId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appName: 'string',
      realmId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

