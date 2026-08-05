// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcCloudRecordingFilesResponseBodyTaskInfoRecordFileListVodMediaList extends $dara.Model {
  /**
   * @remarks
   * The array of media resource IDs generated during recording.
   */
  mediaIds?: string[];
  /**
   * @remarks
   * The array of automatically merged media resource IDs generated after recording ends.
   */
  mergedIds?: string[];
  /**
   * @remarks
   * The subscribed stream.
   *  - For stream mixing recording, the value is always Mix.
   *  - For single-stream recording, the value is Single::{UserId}::{Suffix}.
   *    - UserId is the UserId corresponding to this stream.
   *    - Suffix depends on the StreamType and SourceType specified during subscription.
   *      - When StreamType is 0: if SourceType is 0, Suffix is AV::C. If SourceType is 1, Suffix is AV::S.
   *      - When StreamType is 1: Suffix can only be A.
   *      - When StreamType is 2 (not supported for single-stream recording): if SourceType is 0, Suffix is V::C. If SourceType is 1, Suffix is V::S.
   * 
   * @example
   * Single::UserA::AV::C
   */
  stream?: string;
  static names(): { [key: string]: string } {
    return {
      mediaIds: 'MediaIds',
      mergedIds: 'MergedIds',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaIds: { 'type': 'array', 'itemType': 'string' },
      mergedIds: { 'type': 'array', 'itemType': 'string' },
      stream: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mediaIds)) {
      $dara.Model.validateArray(this.mediaIds);
    }
    if(Array.isArray(this.mergedIds)) {
      $dara.Model.validateArray(this.mergedIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcCloudRecordingFilesResponseBodyTaskInfoRecordFileList extends $dara.Model {
  /**
   * @remarks
   * The array of HLS recording file names.
   */
  hlsFileList?: string[];
  /**
   * @remarks
   * The array of MP3 recording file names.
   */
  mp3FileList?: string[];
  /**
   * @remarks
   * The array of MP4 recording file names.
   */
  mp4FileList?: string[];
  /**
   * @remarks
   * The array of VOD media resources. When recording to VOD, this is the collection of recording files for each subscribed stream, where each item corresponds to a subscribed stream.
   */
  vodMediaList?: DescribeRtcCloudRecordingFilesResponseBodyTaskInfoRecordFileListVodMediaList[];
  static names(): { [key: string]: string } {
    return {
      hlsFileList: 'HlsFileList',
      mp3FileList: 'Mp3FileList',
      mp4FileList: 'Mp4FileList',
      vodMediaList: 'VodMediaList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hlsFileList: { 'type': 'array', 'itemType': 'string' },
      mp3FileList: { 'type': 'array', 'itemType': 'string' },
      mp4FileList: { 'type': 'array', 'itemType': 'string' },
      vodMediaList: { 'type': 'array', 'itemType': DescribeRtcCloudRecordingFilesResponseBodyTaskInfoRecordFileListVodMediaList },
    };
  }

  validate() {
    if(Array.isArray(this.hlsFileList)) {
      $dara.Model.validateArray(this.hlsFileList);
    }
    if(Array.isArray(this.mp3FileList)) {
      $dara.Model.validateArray(this.mp3FileList);
    }
    if(Array.isArray(this.mp4FileList)) {
      $dara.Model.validateArray(this.mp4FileList);
    }
    if(Array.isArray(this.vodMediaList)) {
      $dara.Model.validateArray(this.vodMediaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcCloudRecordingFilesResponseBodyTaskInfo extends $dara.Model {
  /**
   * @remarks
   * The list of recording files.
   */
  recordFileList?: DescribeRtcCloudRecordingFilesResponseBodyTaskInfoRecordFileList;
  /**
   * @remarks
   * The task status. Valid values:
   * - RUNNING
   * - RECOVERING
   * - STOPPING
   * - STOPPED.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The task ID passed in the request.
   * 
   * @example
   * ******73-8501-****-8ac1-72295a******
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      recordFileList: 'RecordFileList',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordFileList: DescribeRtcCloudRecordingFilesResponseBodyTaskInfoRecordFileList,
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.recordFileList && typeof (this.recordFileList as any).validate === 'function') {
      (this.recordFileList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcCloudRecordingFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******58-5876-****-83CA-B56278******
   */
  requestId?: string;
  /**
   * @remarks
   * The task information.
   */
  taskInfo?: DescribeRtcCloudRecordingFilesResponseBodyTaskInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInfo: DescribeRtcCloudRecordingFilesResponseBodyTaskInfo,
    };
  }

  validate() {
    if(this.taskInfo && typeof (this.taskInfo as any).validate === 'function') {
      (this.taskInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

