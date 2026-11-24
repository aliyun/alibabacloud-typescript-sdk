// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page displayed during paging in a paged query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The IDs of the device groups. Duplicate IDs are not allowed.
   */
  deviceGroupIds?: string[];
  /**
   * @remarks
   * The name of the device tag. The name can be up to 128 characters in length and supports Chinese characters and uppercase and lowercase English letters. It can also contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * Public service system user group
   */
  name?: string;
  /**
   * @remarks
   * The Settings for the number of entries per page during paging in a paged query. Valid values: 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      deviceGroupIds: 'DeviceGroupIds',
      name: 'Name',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      deviceGroupIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deviceGroupIds)) {
      $dara.Model.validateArray(this.deviceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

