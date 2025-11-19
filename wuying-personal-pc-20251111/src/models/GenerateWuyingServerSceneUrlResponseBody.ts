// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateWuyingServerSceneUrlResponseBody extends $dara.Model {
  expireDurationHours?: number;
  expireTime?: string;
  requestId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      expireDurationHours: 'ExpireDurationHours',
      expireTime: 'ExpireTime',
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireDurationHours: 'number',
      expireTime: 'string',
      requestId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

