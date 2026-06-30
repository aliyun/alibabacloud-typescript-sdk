// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetActivityListRequest extends $dara.Model {
  appType?: string;
  language?: string;
  processCode?: string;
  systemToken?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      language: 'Language',
      processCode: 'ProcessCode',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      language: 'string',
      processCode: 'string',
      systemToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

