// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLensMonitorDisksResponseBodyDiskInfos } from "./DescribeLensMonitorDisksResponseBodyDiskInfos";


export class DescribeLensMonitorDisksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the disks.
   */
  diskInfos?: DescribeLensMonitorDisksResponseBodyDiskInfos[];
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
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      diskInfos: 'DiskInfos',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskInfos: { 'type': 'array', 'itemType': DescribeLensMonitorDisksResponseBodyDiskInfos },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.diskInfos)) {
      $dara.Model.validateArray(this.diskInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

