// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePurchasedDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * Queries by the ID of the group to which the device belongs.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * Queries by device ID.
   * 
   * @example
   * 4070*****1132-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * Queries by device name.
   * 
   * @example
   * xxx路口摄像头
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The default is 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. The default is 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The field to sort by. Valid value:
   * 
   * - id (default)
   * 
   * @example
   * id
   */
  sortBy?: string;
  /**
   * @remarks
   * The sorting order. The default is ascending. Valid values:
   * 
   * - asc (ascending)
   * 
   * - desc (descending)
   * 
   * @example
   * asc
   */
  sortDirection?: string;
  /**
   * @remarks
   * Queries by device subtype. Valid values:
   * 
   * - bullet (bullet camera)
   * 
   * - dome (dome camera)
   * 
   * - ptz (PTZ camera)
   * 
   * @example
   * dome
   */
  subType?: string;
  /**
   * @remarks
   * Queries by device type. Valid values:
   * 
   * - ipc (camera)
   * 
   * - platform (platform)
   * 
   * - ied (intelligent edge device)
   * 
   * @example
   * ipc
   */
  type?: string;
  /**
   * @remarks
   * Queries by device vendor.
   * 
   * @example
   * 公司A
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

