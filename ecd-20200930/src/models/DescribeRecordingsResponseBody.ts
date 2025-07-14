// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordingsResponseBodyRecordings extends $dara.Model {
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-10v0vuvm616sk****
   */
  desktopId?: string;
  /**
   * @remarks
   * The cloud computer name.
   * 
   * @example
   * DemoComputer
   */
  desktopName?: string;
  /**
   * @remarks
   * The end time of the recording.
   * 
   * @example
   * 2023-04-10T07:26:06Z
   */
  endTime?: string;
  /**
   * @remarks
   * The end user IDs.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * pg-4w5nk44zo5yl129dd/1mk78dugw344.mp4
   */
  filePath?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * pg-6dn811rzrwh9ws4z6
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The size of the screen recording file. Unit: bytes.
   * 
   * @example
   * 1742845
   */
  recordingSize?: number;
  /**
   * @remarks
   * The type of event that triggers the recording.
   * 
   * Valid values:
   * 
   * *   byaction_cmd_ft: triggered by copy-paste or file transfer events.
   * *   period: triggered at scheduled intervals.
   * *   session: triggered by session lifecycle monitoring.
   * *   byaction_commands: triggered by copy-paste only.
   * *   alltime: continuous recording.
   * *   byaction_file_transfer: triggered by file transfer only.
   * 
   * @example
   * alltime
   */
  recordingType?: string;
  /**
   * @remarks
   * The download URL of the screen recording file.
   */
  signedUrl?: string;
  /**
   * @remarks
   * The start time of the recording.
   * 
   * @example
   * 2023-04-10T07:26:06Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      endTime: 'EndTime',
      endUserIds: 'EndUserIds',
      filePath: 'FilePath',
      policyGroupId: 'PolicyGroupId',
      recordingSize: 'RecordingSize',
      recordingType: 'RecordingType',
      signedUrl: 'SignedUrl',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopName: 'string',
      endTime: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      filePath: 'string',
      policyGroupId: 'string',
      recordingSize: 'number',
      recordingType: 'string',
      signedUrl: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nbCQ7ar+fECeh1IuWQXi39R5eoJ68zWp99mTAKRRNRhw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The screen recording files.
   */
  recordings?: DescribeRecordingsResponseBodyRecordings[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 327CFE78-1C0D-51AC-A9C6-BCEDF0DD44D6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      recordings: 'Recordings',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      recordings: { 'type': 'array', 'itemType': DescribeRecordingsResponseBodyRecordings },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recordings)) {
      $dara.Model.validateArray(this.recordings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

