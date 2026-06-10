// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordFileResponseBodyRecordFilesEventDetails extends $dara.Model {
  /**
   * @remarks
   * The event details.
   * 
   * @example
   * {\\n\\t\\"messageInfo\\" : \\"mouse_move\\",\\n\\t\\"messageType\\" : \\"UserInput\\"\\n}\\n"
   */
  eventName?: string;
  /**
   * @remarks
   * The time when the event occurred.
   * 
   * @example
   * 60
   */
  eventTime?: number;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * UserInput
   */
  eventType?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      eventTime: 'EventTime',
      eventType: 'EventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventTime: 'number',
      eventType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordFileResponseBodyRecordFiles extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud desktop.
   * 
   * @example
   * ecd-7yulhw1g1attet7d2
   */
  desktopId?: string;
  /**
   * @remarks
   * The name of the cloud desktop.
   * 
   * @example
   * fvt-ecd
   */
  desktopName?: string;
  /**
   * @remarks
   * The name of the end user.
   * 
   * @example
   * Alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The event details.
   */
  eventDetails?: DescribeRecordFileResponseBodyRecordFilesEventDetails[];
  /**
   * @remarks
   * The name of the screen recording file.
   * 
   * @example
   * Task3
   */
  fileName?: string;
  /**
   * @remarks
   * The file size. Unit: bytes.
   * 
   * @example
   * 139
   */
  fileSize?: number;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * pg-**
   */
  policyId?: string;
  /**
   * @remarks
   * The time when the screen recording ended. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format and is displayed in UTC.
   * 
   * @example
   * 2025-12-18T06:02:25Z
   */
  recordEndTime?: string;
  /**
   * @remarks
   * The expiration time of the screen recording file.
   * 
   * @example
   * 1774656000000
   */
  recordExpire?: number;
  /**
   * @remarks
   * The time when the screen recording started. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format and is displayed in UTC.
   * 
   * @example
   * 2025-12-18T06:02:25Z
   */
  recordStartTime?: string;
  /**
   * @remarks
   * The recording type. Valid values:
   * 
   * - `alltime`: continuous screen recording.
   * 
   * - `period`: interval screen recording.
   * 
   * - `event`: event-triggered screen recording.
   * 
   * - `session`: session-based screen recording.
   * 
   * @example
   * period
   */
  recordType?: number;
  /**
   * @remarks
   * The ID of the region where the cloud desktop resides.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-f3s3dgt8dtb0vlqc8
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * resource
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The upload status of the screen recording file. Valid values:
   * 
   * - `0`: uploaded.
   * 
   * - `1`: uploading.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      endUserId: 'EndUserId',
      eventDetails: 'EventDetails',
      fileName: 'FileName',
      fileSize: 'FileSize',
      policyId: 'PolicyId',
      recordEndTime: 'RecordEndTime',
      recordExpire: 'RecordExpire',
      recordStartTime: 'RecordStartTime',
      recordType: 'RecordType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupName: 'ResourceGroupName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopName: 'string',
      endUserId: 'string',
      eventDetails: { 'type': 'array', 'itemType': DescribeRecordFileResponseBodyRecordFilesEventDetails },
      fileName: 'string',
      fileSize: 'number',
      policyId: 'string',
      recordEndTime: 'string',
      recordExpire: 'number',
      recordStartTime: 'string',
      recordType: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceGroupName: 'string',
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventDetails)) {
      $dara.Model.validateArray(this.eventDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the screen recording files.
   */
  recordFiles?: DescribeRecordFileResponseBodyRecordFiles[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05C2791F-41A7-5E7C-B5E4-1401FD0E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      recordFiles: 'RecordFiles',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordFiles: { 'type': 'array', 'itemType': DescribeRecordFileResponseBodyRecordFiles },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.recordFiles)) {
      $dara.Model.validateArray(this.recordFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

