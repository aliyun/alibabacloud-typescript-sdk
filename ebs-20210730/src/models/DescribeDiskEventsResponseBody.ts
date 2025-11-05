// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskEventsResponseBodyDiskEvents extends $dara.Model {
  /**
   * @remarks
   * The description of the event.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-bp1bq5g3dxxo1x4o****
   */
  diskId?: string;
  /**
   * @remarks
   * The recommended action after the event occurred. Valid values:
   * 
   * *   Resize: resizes the disk.
   * *   ModifyDiskSpec: changes the category of the disk.
   * *   NoAction: performs no operation.
   * 
   * @example
   * NoAction
   */
  recommendAction?: string;
  /**
   * @remarks
   * The region ID of the disk.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The state of the event. Valid values:
   * 
   * *   Solved
   * *   UnSolved
   * 
   * @example
   * Solved
   */
  status?: string;
  /**
   * @remarks
   * The time when the event occurred. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-06-01T08:00:00Z
   */
  timestamp?: string;
  /**
   * @remarks
   * The type of the event. Only DataNeedProtect can be returned.
   * 
   * @example
   * DataNeedProtect
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      diskId: 'DiskId',
      recommendAction: 'RecommendAction',
      regionId: 'RegionId',
      status: 'Status',
      timestamp: 'Timestamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      diskId: 'string',
      recommendAction: 'string',
      regionId: 'string',
      status: 'string',
      timestamp: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The risk events of the disk.
   */
  diskEvents?: DescribeDiskEventsResponseBodyDiskEvents[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      diskEvents: 'DiskEvents',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskEvents: { 'type': 'array', 'itemType': DescribeDiskEventsResponseBodyDiskEvents },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.diskEvents)) {
      $dara.Model.validateArray(this.diskEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

