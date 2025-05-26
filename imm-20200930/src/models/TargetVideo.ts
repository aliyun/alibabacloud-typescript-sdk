// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TargetVideoFilterVideo } from "./TargetVideoFilterVideo";
import { TargetVideoTranscodeVideo } from "./TargetVideoTranscodeVideo";


export class TargetVideo extends $dara.Model {
  disableVideo?: boolean;
  filterVideo?: TargetVideoFilterVideo;
  stream?: number[];
  transcodeVideo?: TargetVideoTranscodeVideo;
  static names(): { [key: string]: string } {
    return {
      disableVideo: 'DisableVideo',
      filterVideo: 'FilterVideo',
      stream: 'Stream',
      transcodeVideo: 'TranscodeVideo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableVideo: 'boolean',
      filterVideo: TargetVideoFilterVideo,
      stream: { 'type': 'array', 'itemType': 'number' },
      transcodeVideo: TargetVideoTranscodeVideo,
    };
  }

  validate() {
    if(this.filterVideo && typeof (this.filterVideo as any).validate === 'function') {
      (this.filterVideo as any).validate();
    }
    if(Array.isArray(this.stream)) {
      $dara.Model.validateArray(this.stream);
    }
    if(this.transcodeVideo && typeof (this.transcodeVideo as any).validate === 'function') {
      (this.transcodeVideo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

