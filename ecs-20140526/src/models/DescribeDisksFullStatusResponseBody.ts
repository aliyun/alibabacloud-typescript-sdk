// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDisksFullStatusResponseBodyDiskFullStatusSet } from "./DescribeDisksFullStatusResponseBodyDiskFullStatusSet";


export class DescribeDisksFullStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of full status information of the EBS devices.
   */
  diskFullStatusSet?: DescribeDisksFullStatusResponseBodyDiskFullStatusSet;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of EBS devices for which full status information is returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      diskFullStatusSet: 'DiskFullStatusSet',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskFullStatusSet: DescribeDisksFullStatusResponseBodyDiskFullStatusSet,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.diskFullStatusSet && typeof (this.diskFullStatusSet as any).validate === 'function') {
      (this.diskFullStatusSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

