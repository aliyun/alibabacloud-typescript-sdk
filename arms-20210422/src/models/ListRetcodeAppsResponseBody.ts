// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRetcodeAppsResponseBodyRetcodeApps extends $dara.Model {
  appId?: number;
  appName?: string;
  pid?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      pid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRetcodeAppsResponseBody extends $dara.Model {
  requestId?: string;
  retcodeApps?: ListRetcodeAppsResponseBodyRetcodeApps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      retcodeApps: 'RetcodeApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      retcodeApps: { 'type': 'array', 'itemType': ListRetcodeAppsResponseBodyRetcodeApps },
    };
  }

  validate() {
    if(Array.isArray(this.retcodeApps)) {
      $dara.Model.validateArray(this.retcodeApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

