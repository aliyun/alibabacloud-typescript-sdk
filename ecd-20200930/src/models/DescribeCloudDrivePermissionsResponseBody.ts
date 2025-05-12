// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudDrivePermissionsResponseBodyCloudDrivePermissionModels } from "./DescribeCloudDrivePermissionsResponseBodyCloudDrivePermissionModels";


export class DescribeCloudDrivePermissionsResponseBody extends $dara.Model {
  cloudDrivePermissionModels?: DescribeCloudDrivePermissionsResponseBodyCloudDrivePermissionModels[];
  /**
   * @example
   * A87DBB05-653A-5E4B-B72B-5F4A1E07E5B3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudDrivePermissionModels: 'CloudDrivePermissionModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudDrivePermissionModels: { 'type': 'array', 'itemType': DescribeCloudDrivePermissionsResponseBodyCloudDrivePermissionModels },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cloudDrivePermissionModels)) {
      $dara.Model.validateArray(this.cloudDrivePermissionModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

