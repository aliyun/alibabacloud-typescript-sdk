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

