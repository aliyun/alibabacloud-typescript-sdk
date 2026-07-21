// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDrivePermissionsResponseBodyCloudDrivePermissionModels extends $dara.Model {
  /**
   * @remarks
   * The list of end user IDs.
   */
  endUsers?: string[];
  /**
   * @remarks
   * The file transfer permission between the enterprise cloud drive and the on-premises device for the user. Valid values:
   * 
   * - CDS_CREATE_DOWNLOAD: has both upload and download permissions.
   * - CDS_DOWNLOAD: has only download permission.
   * - CDS_CREATE: has only upload permission.
   * 
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
  /**
   * @remarks
   * The list of permission settings for the enterprise cloud drive.
   */
  cloudDrivePermissionModels?: DescribeCloudDrivePermissionsResponseBodyCloudDrivePermissionModels[];
  /**
   * @remarks
   * The request ID.
   * 
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

