// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLiveTranscodeJobResponseBodyJobOutputStreamStreamInfos } from "./GetLiveTranscodeJobResponseBodyJobOutputStreamStreamInfos";


export class GetLiveTranscodeJobResponseBodyJobOutputStream extends $dara.Model {
  /**
   * @remarks
   * The information about the output stream.
   */
  streamInfos?: GetLiveTranscodeJobResponseBodyJobOutputStreamStreamInfos[];
  static names(): { [key: string]: string } {
    return {
      streamInfos: 'StreamInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamInfos: { 'type': 'array', 'itemType': GetLiveTranscodeJobResponseBodyJobOutputStreamStreamInfos },
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

