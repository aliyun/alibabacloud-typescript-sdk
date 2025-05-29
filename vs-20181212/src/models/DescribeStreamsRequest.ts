// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStreamsRequest extends $dara.Model {
  /**
   * @example
   * live
   */
  app?: string;
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 3100000*****00000002
   */
  name?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  /**
   * @example
   * Id
   */
  sortBy?: string;
  /**
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

