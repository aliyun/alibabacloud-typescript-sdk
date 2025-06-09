// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppRequestQuotaInfo extends $dara.Model {
  appType?: string;
  cu?: number;
  storage?: number;
  static names(): { [key: string]: string } {
    return {
      appType: 'appType',
      cu: 'cu',
      storage: 'storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      cu: 'number',
      storage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

