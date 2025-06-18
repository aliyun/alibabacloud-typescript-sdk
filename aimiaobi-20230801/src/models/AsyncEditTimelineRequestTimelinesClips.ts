// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncEditTimelineRequestTimelinesClips extends $dara.Model {
  clipId?: string;
  contentInner?: string;
  in?: number;
  out?: number;
  videoId?: string;
  videoName?: string;
  static names(): { [key: string]: string } {
    return {
      clipId: 'ClipId',
      contentInner: 'ContentInner',
      in: 'In',
      out: 'Out',
      videoId: 'VideoId',
      videoName: 'VideoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipId: 'string',
      contentInner: 'string',
      in: 'number',
      out: 'number',
      videoId: 'string',
      videoName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

