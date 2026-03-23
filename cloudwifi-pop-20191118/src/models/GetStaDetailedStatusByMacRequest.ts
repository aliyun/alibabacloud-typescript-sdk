// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStaDetailedStatusByMacRequest extends $dara.Model {
  appCode?: string;
  appName?: string;
  staMac?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appName: 'AppName',
      staMac: 'StaMac',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appName: 'string',
      staMac: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

