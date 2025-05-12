// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamListSubtitleStream } from "./QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamListSubtitleStream";


export class QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamList extends $dara.Model {
  subtitleStream?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamListSubtitleStream[];
  static names(): { [key: string]: string } {
    return {
      subtitleStream: 'SubtitleStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleStream: { 'type': 'array', 'itemType': QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamListSubtitleStream },
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

