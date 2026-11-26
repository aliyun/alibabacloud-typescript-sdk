// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushDeviceRenderMessageRequestDeviceInfo extends $dara.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDeviceRenderMessageRequestPayload extends $dara.Model {
  hasNext?: boolean;
  msgId?: number;
  tts?: string;
  uiContent?: string;
  static names(): { [key: string]: string } {
    return {
      hasNext: 'HasNext',
      msgId: 'MsgId',
      tts: 'Tts',
      uiContent: 'UiContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      msgId: 'number',
      tts: 'string',
      uiContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDeviceRenderMessageRequest extends $dara.Model {
  accessToken?: string;
  deviceInfo?: PushDeviceRenderMessageRequestDeviceInfo;
  payload?: PushDeviceRenderMessageRequestPayload;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      deviceInfo: PushDeviceRenderMessageRequestDeviceInfo,
      payload: PushDeviceRenderMessageRequestPayload,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

