// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBlockRequestScopesBlockScopeApp extends $dara.Model {
  appName?: string[];
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: { 'type': 'array', 'itemType': 'string' },
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appName)) {
      $dara.Model.validateArray(this.appName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

