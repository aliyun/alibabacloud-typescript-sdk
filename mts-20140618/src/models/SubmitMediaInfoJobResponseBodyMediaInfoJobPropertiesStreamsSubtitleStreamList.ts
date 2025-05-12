// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamListSubtitleStream } from "./SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamListSubtitleStream";


export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamList extends $dara.Model {
  subtitleStream?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamListSubtitleStream[];
  static names(): { [key: string]: string } {
    return {
      subtitleStream: 'SubtitleStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleStream: { 'type': 'array', 'itemType': SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamListSubtitleStream },
    };
  }

  validate() {
    if(Array.isArray(this.subtitleStream)) {
      $dara.Model.validateArray(this.subtitleStream);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

