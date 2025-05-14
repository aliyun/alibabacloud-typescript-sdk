// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMeterImsSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The duration of video editing.
   * 
   * @example
   * 8722
   */
  editingDuration?: string;
  /**
   * @remarks
   * The duration of live editing.
   * 
   * @example
   * 2000
   */
  liveEditDuration?: string;
  /**
   * @remarks
   * The duration of live stream recording.
   * 
   * @example
   * 100
   */
  liveRecordDuration?: string;
  /**
   * @remarks
   * The number of live stream snapshots.
   * 
   * @example
   * 100
   */
  liveSnapshotCount?: string;
  /**
   * @remarks
   * The duration of live stream transcoding.
   * 
   * @example
   * 12356
   */
  liveTranscodeDuration?: number;
  /**
   * @remarks
   * The duration of AI processing.
   * 
   * @example
   * 0
   */
  mpsAiDuration?: number;
  /**
   * @remarks
   * The duration of video-on-demand (VOD) transcoding.
   * 
   * @example
   * 17337
   */
  mpsTranscodeDuration?: number;
  /**
   * @remarks
   * The duration of audio and video enhancement.
   * 
   * @example
   * 300
   */
  mpsTranscodeUHDDuration?: number;
  static names(): { [key: string]: string } {
    return {
      editingDuration: 'EditingDuration',
      liveEditDuration: 'LiveEditDuration',
      liveRecordDuration: 'LiveRecordDuration',
      liveSnapshotCount: 'LiveSnapshotCount',
      liveTranscodeDuration: 'LiveTranscodeDuration',
      mpsAiDuration: 'MpsAiDuration',
      mpsTranscodeDuration: 'MpsTranscodeDuration',
      mpsTranscodeUHDDuration: 'MpsTranscodeUHDDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingDuration: 'string',
      liveEditDuration: 'string',
      liveRecordDuration: 'string',
      liveSnapshotCount: 'string',
      liveTranscodeDuration: 'number',
      mpsAiDuration: 'number',
      mpsTranscodeDuration: 'number',
      mpsTranscodeUHDDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

