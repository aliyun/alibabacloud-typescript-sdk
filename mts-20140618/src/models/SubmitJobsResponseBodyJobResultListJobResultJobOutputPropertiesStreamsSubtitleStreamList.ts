// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream";


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamList extends $dara.Model {
  subtitleStream?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream[];
  static names(): { [key: string]: string } {
    return {
      subtitleStream: 'SubtitleStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleStream: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamListSubtitleStream },
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

