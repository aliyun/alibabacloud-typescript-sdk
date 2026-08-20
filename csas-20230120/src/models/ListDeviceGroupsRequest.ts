// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return in a paged query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The collection of device group IDs. Duplicate values are not allowed.
   */
  deviceGroupIds?: string[];
  /**
   * @remarks
   * The device label name. The name can be up to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * PublicServiceSystemUserGroup
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to return on each page in a paged query. Valid values: 1 to 500.
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

