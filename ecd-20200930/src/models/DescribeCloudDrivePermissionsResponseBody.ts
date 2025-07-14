// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDrivePermissionsResponseBodyCloudDrivePermissionModels extends $dara.Model {
  endUsers?: string[];
  /**
   * @example
   * CDS_DOWNLOAD
   */
  permission?: string;
  static names(): { [key: string]: string } {
    return {
      endUsers: 'EndUsers',
      permission: 'Permission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUsers: { 'type': 'array', 'itemType': 'string' },
      permission: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endUsers)) {
      $dara.Model.validateArray(this.endUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

