// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStreamsRequest extends $dara.Model {
  /**
   * @remarks
   * The application.
   * 
   * @example
   * live
   */
  app?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The space ID.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * The stream ID. You can specify multiple IDs separated by commas (,).
   * 
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * The stream name. You can specify multiple names separated by commas (,).
   * 
   * @example
   * 3100000*****00000002
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
   * The parent device ID of the device to which the stream belongs.
   * 
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  /**
   * @remarks
   * The field by which to sort the results. Valid values:
   * - Id (default)
   * - GroupId
   * - Name
   * - DeviceId
   * - Protocol
   * You can specify only one field.
   * 
   * @example
   * Id
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - asc: ascending order (default)
   * - desc: descending order
   * 
   * @example
   * asc
   */
  sortDirection?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      deviceId: 'DeviceId',
      domain: 'Domain',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      parentId: 'ParentId',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      deviceId: 'string',
      domain: 'string',
      groupId: 'string',
      id: 'string',
      name: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      parentId: 'string',
      sortBy: 'string',
      sortDirection: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

