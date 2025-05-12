// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudDriveUsersResponseBodyCloudDriveUsers } from "./DescribeCloudDriveUsersResponseBodyCloudDriveUsers";


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

