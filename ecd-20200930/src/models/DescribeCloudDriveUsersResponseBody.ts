// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDriveUsersResponseBodyCloudDriveUsers extends $dara.Model {
  /**
   * @remarks
   * The ID of the user personal drive.
   * 
   * @example
   * 8
   */
  driveId?: string;
  /**
   * @remarks
   * The ID of the end user.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The status of the user personal drive.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The maximum storage capacity of the user personal drive. Unit: bytes.
   * 
   * @example
   * 104857600
   */
  totalSize?: number;
  /**
   * @remarks
   * The size of the used storage space. Unit: bytes.
   * 
   * @example
   * 10485760
   */
  usedSize?: number;
  /**
   * @remarks
   * The internal ID of the user.
   * 
   * @example
   * alice@cn-shanghai.148875033399****
   */
  userId?: string;
  /**
   * @remarks
   * The name of the end user.
   * 
   * @example
   * alice
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
  /**
   * @remarks
   * The list of user personal drives.
   */
  cloudDriveUsers?: DescribeCloudDriveUsersResponseBodyCloudDriveUsers[];
  /**
   * @remarks
   * The pagination token for the next query. If `NextToken` is empty, no more results are available.
   * 
   * @example
   * aGN4YzAxQGNuLWhhbmd6aG91LjExNzU5NTMyNjgzMTQ1****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

