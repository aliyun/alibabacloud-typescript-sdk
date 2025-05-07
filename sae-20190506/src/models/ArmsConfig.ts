// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ArmsConfig extends $dara.Model {
  agentVersion?: string;
  appId?: string;
  licenseKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'agentVersion',
      appId: 'appId',
      licenseKey: 'licenseKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: 'string',
      appId: 'string',
      licenseKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

