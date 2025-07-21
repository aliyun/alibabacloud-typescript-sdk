// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppOtaVersionResponseBodyData extends $dara.Model {
  versionUid?: string;
  static names(): { [key: string]: string } {
    return {
      versionUid: 'VersionUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppOtaVersionResponseBody extends $dara.Model {
  code?: string;
  data?: CreateAppOtaVersionResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateAppOtaVersionResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

