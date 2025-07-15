// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcCloudRecordingFilesResponseBodyTaskInfoRecordFileList extends $dara.Model {
  hlsFileList?: string[];
  mp3FileList?: string[];
  mp4FileList?: string[];
  static names(): { [key: string]: string } {
    return {
      hlsFileList: 'HlsFileList',
      mp3FileList: 'Mp3FileList',
      mp4FileList: 'Mp4FileList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hlsFileList: { 'type': 'array', 'itemType': 'string' },
      mp3FileList: { 'type': 'array', 'itemType': 'string' },
      mp4FileList: { 'type': 'array', 'itemType': 'string' },
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcCloudRecordingFilesResponseBodyTaskInfo extends $dara.Model {
  recordFileList?: DescribeRtcCloudRecordingFilesResponseBodyTaskInfoRecordFileList;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
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
   * @example
   * ******58-5876-****-83CA-B56278******
   */
  requestId?: string;
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

