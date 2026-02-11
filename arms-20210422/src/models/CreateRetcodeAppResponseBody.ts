// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRetcodeAppResponseBodyRetcodeAppDataBean extends $dara.Model {
  appId?: number;
  pid?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
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

export class CreateRetcodeAppResponseBody extends $dara.Model {
  requestId?: string;
  retcodeAppDataBean?: CreateRetcodeAppResponseBodyRetcodeAppDataBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      retcodeAppDataBean: 'RetcodeAppDataBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      retcodeAppDataBean: CreateRetcodeAppResponseBodyRetcodeAppDataBean,
    };
  }

  validate() {
    if(this.retcodeAppDataBean && typeof (this.retcodeAppDataBean as any).validate === 'function') {
      (this.retcodeAppDataBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

