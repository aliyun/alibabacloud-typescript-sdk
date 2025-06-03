// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartCloudNoteRequestRealtimeSubtitleTranslation } from "./StartCloudNoteRequestRealtimeSubtitleTranslation";


export class StartCloudNoteRequestRealtimeSubtitle extends $dara.Model {
  enabled?: boolean;
  translation?: StartCloudNoteRequestRealtimeSubtitleTranslation;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      translation: 'Translation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      translation: StartCloudNoteRequestRealtimeSubtitleTranslation,
    };
  }

  validate() {
    if(this.translation && typeof (this.translation as any).validate === 'function') {
      (this.translation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

