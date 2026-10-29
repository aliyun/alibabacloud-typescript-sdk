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
   * The device serial number, which uniquely identifies the device.
   * 
   * @example
   * 7D0*****4C0
   */
  dsn?: string;
  /**
   * @remarks
   * The national standard ID of the device.
   * 
   * @example
   * 310000000****0000002
   */
  gbId?: string;
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
   * The device ID. You can specify multiple IDs separated by commas (,).
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
   * Specifies whether to return stream statistics information. Default value: false.
   * 
   * @example
   * false
   */
  includeStats?: boolean;
  /**
   * @remarks
   * The device name. You can specify multiple names separated by commas (,).
   * 
   * @example
   * Camera A
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
   * The ID of the parent device to which the device belongs.
   * 
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  /**
   * @remarks
   * The field used for sorting. Valid value:
   * - id: Sort by ID. This is the default value.
   * 
   * @example
   * id
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - asc: Ascending order. This is the default value.
   * - desc: Descending order.
   * 
   * @example
   * asc
   */
  sortDirection?: string;
  /**
   * @remarks
   * The device status.
   * 
   * @example
   * on
   */
  status?: string;
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

