// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltas } from "./GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltas";


export class GetNextResultToVerifyResponseBodyDataDialoguesDialogue extends $dara.Model {
  /**
   * @example
   * 980
   */
  begin?: number;
  /**
   * @example
   * XXX
   */
  beginTime?: string;
  deltas?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltas;
  /**
   * @example
   * 6
   */
  emotionValue?: number;
  /**
   * @example
   * 3422
   */
  end?: number;
  /**
   * @example
   * 00:00:07
   */
  hourMinSec?: string;
  identity?: string;
  /**
   * @example
   * 2
   */
  incorrectWords?: number;
  role?: string;
  /**
   * @example
   * 1
   */
  silenceDuration?: number;
  sourceRole?: string;
  sourceWords?: string;
  /**
   * @example
   * 332
   */
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      beginTime: 'BeginTime',
      deltas: 'Deltas',
      emotionValue: 'EmotionValue',
      end: 'End',
      hourMinSec: 'HourMinSec',
      identity: 'Identity',
      incorrectWords: 'IncorrectWords',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      sourceRole: 'SourceRole',
      sourceWords: 'SourceWords',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'string',
      deltas: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltas,
      emotionValue: 'number',
      end: 'number',
      hourMinSec: 'string',
      identity: 'string',
      incorrectWords: 'number',
      role: 'string',
      silenceDuration: 'number',
      sourceRole: 'string',
      sourceWords: 'string',
      speechRate: 'number',
      words: 'string',
    };
  }

  validate() {
    if(this.deltas && typeof (this.deltas as any).validate === 'function') {
      (this.deltas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

