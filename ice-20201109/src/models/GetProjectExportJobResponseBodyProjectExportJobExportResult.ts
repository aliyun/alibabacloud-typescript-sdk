// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectExportJobResponseBodyProjectExportJobExportResult extends $dara.Model {
  projectUrl?: string;
  /**
   * @example
   * {"VideoTracks":[{"VideoTrackClips":[{"Type":"Video","MediaId":"****4d7cf14dc7b83b0e801c****","MediaURL":"https://test-bucket.oss-cn-shanghai.aliyuncs.com/test.mp4","TimelineIn":0.0,"TimelineOut":5.0,"In":0.0,"Out":5.0,"Speed":1.0,"Duration":5.0,"VirginDuration":13.334,"Height":1.0,"Width":1.0,"X":0.0,"Y":0.0}]}]}
   */
  timeline?: string;
  static names(): { [key: string]: string } {
    return {
      projectUrl: 'ProjectUrl',
      timeline: 'Timeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectUrl: 'string',
      timeline: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

