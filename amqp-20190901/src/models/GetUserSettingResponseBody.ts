// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserSettingResponseBodyData extends $dara.Model {
  logstore?: string;
  regionId?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      logstore: 'Logstore',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      regionId: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserSettingResponseBody extends $dara.Model {
  code?: number;
  data?: GetUserSettingResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetUserSettingResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

