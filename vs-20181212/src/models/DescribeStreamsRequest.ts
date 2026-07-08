// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStreamsRequest extends $dara.Model {
  /**
   * @remarks
   * Filter by application.
   * 
   * @example
   * live
   */
  app?: string;
  /**
   * @remarks
   * Filter by device ID.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @remarks
   * Filter by domain name.
   * 
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the space to query.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * Stream ID.
   * 
   * > Enter multiple IDs separated by commas (,).
   * 
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * Filter by stream name.
   * 
   * > Enter multiple names separated by commas (,).
   * 
   * @example
   * 3100000*****00000002
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * Page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of items per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Parent device ID of the device that hosts this stream.
   * 
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  /**
   * @remarks
   * Sort results by a field. Valid values:
   * 
   * - Id (default)
   * 
   * - GroupId
   * 
   * - Name
   * 
   * - DeviceId
   * 
   * - Protocol
   * 
   * > You can specify only one field.
   * 
   * @example
   * Id
   */
  sortBy?: string;
  /**
   * @remarks
   * Sort order. Valid values:
   * 
   * - asc (ascending, default)
   * 
   * - desc (descending)
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

