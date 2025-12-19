// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordFileResponseBodyRecordFilesEventDetails extends $dara.Model {
  /**
   * @example
   * {\\n\\t\\"messageInfo\\" : \\"mouse_move\\",\\n\\t\\"messageType\\" : \\"UserInput\\"\\n}\\n"
   */
  eventName?: string;
  /**
   * @example
   * 60
   */
  eventTime?: number;
  /**
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
   * @example
   * ecd-7yulhw1g1attet7d2
   */
  desktopId?: string;
  /**
   * @example
   * fvt-ecd
   */
  desktopName?: string;
  /**
   * @example
   * Alice
   */
  endUserId?: string;
  eventDetails?: DescribeRecordFileResponseBodyRecordFilesEventDetails[];
  /**
   * @example
   * Task3
   */
  fileName?: string;
  /**
   * @example
   * 139
   */
  fileSize?: number;
  /**
   * @example
   * pg-**
   */
  policyId?: string;
  /**
   * @example
   * 2025-12-18T06:02:25Z
   */
  recordEndTime?: string;
  /**
   * @example
   * 1774656000000
   */
  recordExpire?: number;
  /**
   * @example
   * 2025-12-18T06:02:25Z
   */
  recordStartTime?: string;
  /**
   * @example
   * period
   */
  recordType?: number;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * rg-f3s3dgt8dtb0vlqc8
   */
  resourceGroupId?: string;
  /**
   * @example
   * resource
   */
  resourceGroupName?: string;
  /**
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
  recordFiles?: DescribeRecordFileResponseBodyRecordFiles[];
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * 05C2791F-41A7-5E7C-B5E4-1401FD0E****
   */
  requestId?: string;
  /**
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

