// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream } from "./QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream";


export class QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList extends $dara.Model {
  subtitleStream?: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream[];
  static names(): { [key: string]: string } {
    return {
      subtitleStream: 'SubtitleStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleStream: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream },
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

