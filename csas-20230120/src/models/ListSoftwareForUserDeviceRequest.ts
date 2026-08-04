// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSoftwareForUserDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Valid values: 1 to 10,000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the user device. Call one of the following operations to obtain the device ID:
   * 
   * - [GetUserDevice](~~GetUserDevice~~): Get the details of a user device.
   * 
   * - [ListUserDevices](~~ListUserDevices~~): Get a list of user devices.
   * 
   * This parameter is required.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 500.
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
      deviceTag: 'DeviceTag',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      deviceTag: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

