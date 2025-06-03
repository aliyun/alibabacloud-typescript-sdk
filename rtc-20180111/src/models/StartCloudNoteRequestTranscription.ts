// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartCloudNoteRequestTranscription extends $dara.Model {
  diarizationEnabled?: boolean;
  /**
   * @example
   * b401a5da78e94xxxxc3129425c78b6a5
   */
  phraseId?: string;
  speakerCount?: number;
  /**
   * @example
   * 1
   */
  transcriptionLevel?: number;
  static names(): { [key: string]: string } {
    return {
      diarizationEnabled: 'DiarizationEnabled',
      phraseId: 'PhraseId',
      speakerCount: 'SpeakerCount',
      transcriptionLevel: 'TranscriptionLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diarizationEnabled: 'boolean',
      phraseId: 'string',
      speakerCount: 'number',
      transcriptionLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

