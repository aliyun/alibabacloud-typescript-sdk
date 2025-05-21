// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAICoachCheatDetectionResponseBodyImageCheat } from "./GetAicoachCheatDetectionResponseBodyImageCheat";
import { GetAICoachCheatDetectionResponseBodyVoiceCheat } from "./GetAicoachCheatDetectionResponseBodyVoiceCheat";


export class GetAICoachCheatDetectionResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  cheatId?: string;
  /**
   * @example
   * success
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @example
   * 2025-02-24 12:00:00
   */
  gmtCreate?: string;
  imageCheat?: GetAICoachCheatDetectionResponseBodyImageCheat;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0E8B1746-AE35-5C4B-A3A8-345B274AE32C
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * true
   * 
   * @example
   * True
   */
  success?: boolean;
  voiceCheat?: GetAICoachCheatDetectionResponseBodyVoiceCheat;
  static names(): { [key: string]: string } {
    return {
      cheatId: 'cheatId',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      gmtCreate: 'gmtCreate',
      imageCheat: 'imageCheat',
      requestId: 'requestId',
      status: 'status',
      success: 'success',
      voiceCheat: 'voiceCheat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cheatId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      gmtCreate: 'string',
      imageCheat: GetAICoachCheatDetectionResponseBodyImageCheat,
      requestId: 'string',
      status: 'number',
      success: 'boolean',
      voiceCheat: GetAICoachCheatDetectionResponseBodyVoiceCheat,
    };
  }

  validate() {
    if(this.imageCheat && typeof (this.imageCheat as any).validate === 'function') {
      (this.imageCheat as any).validate();
    }
    if(this.voiceCheat && typeof (this.voiceCheat as any).validate === 'function') {
      (this.voiceCheat as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

