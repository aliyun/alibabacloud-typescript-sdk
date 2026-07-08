// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory to which the device belongs.
   * 
   * @example
   * 399*****488-cn-qingdao
   */
  directoryId?: string;
  /**
   * @remarks
   * The serial number of the device. The value must be unique.
   * 
   * @example
   * 7D0*****4C0
   */
  dsn?: string;
  /**
   * @remarks
   * You can query by device national standard ID.
   * 
   * @example
   * 310000000****0000002
   */
  gbId?: string;
  /**
   * @remarks
   * Query by device Space ID.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * > Specify multiple IDs. Separate them with commas (,).
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * Specifies whether to return directory information. Default value: false.
   * 
   * @example
   * false
   */
  includeDirectory?: boolean;
  /**
   * @remarks
   * Specifies whether to return stream statistics. Default value: false.
   * 
   * @example
   * false
   */
  includeStats?: boolean;
  /**
   * @remarks
   * The device name.
   * 
   * > Specify multiple names. Separate them with commas (,).
   * 
   * @example
   * 摄像头A
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
   * The ID of the parent device.
   * 
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  /**
   * @remarks
   * The field by which to sort the results. Valid value:
   * 
   * > id (default)
   * 
   * @example
   * id
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - asc (ascending) (default)
   * 
   * - desc (descending)
   * 
   * @example
   * asc
   */
  sortDirection?: string;
  /**
   * @remarks
   * Query devices by status.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The device type. Valid values:
   * 
   * - ipc (camera)
   * 
   * - platform
   * 
   * - ied (intelligent edge device)
   * 
   * @example
   * ipc
   */
  type?: string;
  /**
   * @remarks
   * Query by device manufacturer.
   * 
   * @example
   * 8yd*****qem
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      dsn: 'Dsn',
      gbId: 'GbId',
      groupId: 'GroupId',
      id: 'Id',
      includeDirectory: 'IncludeDirectory',
      includeStats: 'IncludeStats',
      name: 'Name',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      parentId: 'ParentId',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      status: 'Status',
      type: 'Type',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      dsn: 'string',
      gbId: 'string',
      groupId: 'string',
      id: 'string',
      includeDirectory: 'boolean',
      includeStats: 'boolean',
      name: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      parentId: 'string',
      sortBy: 'string',
      sortDirection: 'string',
      status: 'string',
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

