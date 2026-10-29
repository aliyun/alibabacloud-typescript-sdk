// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePurchasedDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the workspace to which the device belongs.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * 4070*****1132-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * The device name.
   * 
   * @example
   * XXX intersection camera
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The field by which to sort the results. Valid values:
   * - id (default)
   * 
   * @example
   * id
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order. Default value: asc. Valid values:
   * - asc: Ascending order.
   * - desc: Descending order.
   * 
   * @example
   * asc
   */
  sortDirection?: string;
  /**
   * @remarks
   * The device subtype. Valid values:
   * - bullet: Bullet camera.
   * - dome: Dome camera.
   * - ptz: PTZ camera.
   * 
   * @example
   * dome
   */
  subType?: string;
  /**
   * @remarks
   * The device type. Valid values:
   * - ipc: Camera.
   * - platform: Platform.
   * - ied: Intelligent device.
   * 
   * @example
   * ipc
   */
  type?: string;
  /**
   * @remarks
   * The device vendor.
   * 
   * @example
   * Company A
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      subType: 'SubType',
      type: 'Type',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      id: 'string',
      name: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortDirection: 'string',
      subType: 'string',
      type: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

