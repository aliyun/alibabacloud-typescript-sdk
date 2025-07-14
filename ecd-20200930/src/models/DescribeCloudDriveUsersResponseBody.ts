// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDriveUsersResponseBodyCloudDriveUsers extends $dara.Model {
  /**
   * @example
   * 8
   */
  driveId?: string;
  endUserId?: string;
  /**
   * @example
   * enabled
   */
  status?: string;
  /**
   * @example
   * 10240000
   */
  totalSize?: number;
  /**
   * @example
   * 20490
   */
  usedSize?: number;
  /**
   * @example
   * abc
   */
  userId?: string;
  /**
   * @example
   * abc
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'DriveId',
      endUserId: 'EndUserId',
      status: 'Status',
      totalSize: 'TotalSize',
      usedSize: 'UsedSize',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      endUserId: 'string',
      status: 'string',
      totalSize: 'number',
      usedSize: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDriveUsersResponseBody extends $dara.Model {
  cloudDriveUsers?: DescribeCloudDriveUsersResponseBodyCloudDriveUsers[];
  /**
   * @example
   * aGN4YzAxQGNuLWhhbmd6aG91LjExNzU5NTMyNjgzMTQ1****
   */
  nextToken?: string;
  /**
   * @example
   * F083AAE5-7AA9-53BB-9060-AFFB2C18****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudDriveUsers: 'CloudDriveUsers',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudDriveUsers: { 'type': 'array', 'itemType': DescribeCloudDriveUsersResponseBodyCloudDriveUsers },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cloudDriveUsers)) {
      $dara.Model.validateArray(this.cloudDriveUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

