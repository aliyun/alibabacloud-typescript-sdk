// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableTtsRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The voice code for a custom voice. You can find it on the [Custom Voice](https://aiccs.console.aliyun.com/engine/voiceprint) page.
   * 
   * @example
   * V9A******
   */
  ttsVoiceCode?: string;
  /**
   * @remarks
   * The type of the TTS voice. Valid values:
   * 
   * `SYSTEM`: system voice.
   * 
   * `COSYCLONE`: cloned voice.
   * 
   * `BL-CUSTOM`: premium custom voice.
   * 
   * @example
   * SYSTEM
   */
  voiceType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ttsVoiceCode: 'TtsVoiceCode',
      voiceType: 'VoiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ttsVoiceCode: 'string',
      voiceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

