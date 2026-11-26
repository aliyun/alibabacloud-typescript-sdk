// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableTtsRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The personalized voice code. You can view the voice code on the [Personalized Voices](https://aiccs.console.aliyun.com/engine/voiceprint) page.
   * 
   * @example
   * V9A******
   */
  ttsVoiceCode?: string;
  /**
   * @remarks
   * The enumeration value of the TTS voice type. Valid values:
   * - `SYSTEM`: system voice.
   * - `COSYCLONE`: cloned voice.
   * - `BL-CUSTOM`: custom premium cloned voice.
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

