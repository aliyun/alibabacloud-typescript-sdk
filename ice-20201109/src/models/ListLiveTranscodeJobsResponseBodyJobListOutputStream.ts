// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLiveTranscodeJobsResponseBodyJobListOutputStreamStreamInfos } from "./ListLiveTranscodeJobsResponseBodyJobListOutputStreamStreamInfos";


export class ListLiveTranscodeJobsResponseBodyJobListOutputStream extends $dara.Model {
  /**
   * @remarks
   * The list of stream URLs.
   */
  streamInfos?: ListLiveTranscodeJobsResponseBodyJobListOutputStreamStreamInfos[];
  static names(): { [key: string]: string } {
    return {
      streamInfos: 'StreamInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamInfos: { 'type': 'array', 'itemType': ListLiveTranscodeJobsResponseBodyJobListOutputStreamStreamInfos },
    };
  }

  validate() {
    if(Array.isArray(this.streamInfos)) {
      $dara.Model.validateArray(this.streamInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

