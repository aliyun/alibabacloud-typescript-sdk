// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsSubtitleStreamListSubtitleStream } from "./QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsSubtitleStreamListSubtitleStream";


export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsSubtitleStreamList extends $dara.Model {
  subtitleStream?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsSubtitleStreamListSubtitleStream[];
  static names(): { [key: string]: string } {
    return {
      subtitleStream: 'SubtitleStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleStream: { 'type': 'array', 'itemType': QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsSubtitleStreamListSubtitleStream },
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

