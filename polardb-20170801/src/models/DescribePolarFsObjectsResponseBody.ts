// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarFsObjectsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The capacity.
   * 
   * @example
   * 100
   */
  capacity?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-03-25T09:37:10Z
   */
  creationTime?: number;
  /**
   * @remarks
   * The last modified time.
   * 
   * @example
   * 2025-03-25T09:37:10Z
   */
  lastModified?: number;
  /**
   * @remarks
   * The real path of the symbolic link.
   * 
   * @example
   * test
   */
  linkTarget?: string;
  /**
   * @remarks
   * The file system permissions.
   * 
   * @example
   * 755
   */
  mode?: string;
  /**
   * @remarks
   * The number of links.
   * 
   * @example
   * test
   */
  nlink?: number;
  /**
   * @remarks
   * Owner
   * 
   * @example
   * test
   */
  owner?: string;
  /**
   * @remarks
   * The absolute path of the directory.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * directory
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      creationTime: 'CreationTime',
      lastModified: 'LastModified',
      linkTarget: 'LinkTarget',
      mode: 'Mode',
      nlink: 'Nlink',
      owner: 'Owner',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      creationTime: 'number',
      lastModified: 'number',
      linkTarget: 'string',
      mode: 'string',
      nlink: 'number',
      owner: 'string',
      path: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarFsObjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of directory entries.
   */
  items?: DescribePolarFsObjectsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of records that can be displayed on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: string;
  /**
   * @remarks
   * The number of records per page. Valid values: 30, 50, and 100. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The absolute path of the directory.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The PolarFs instance ID.
   * 
   * @example
   * pfs-2ze0i7*****
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CDB3258F-B5DE-43C4-8935-CBA0CA******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 50
   */
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      path: 'Path',
      polarFsInstanceId: 'PolarFsInstanceId',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribePolarFsObjectsResponseBodyItems },
      pageRecordCount: 'string',
      pageSize: 'string',
      path: 'string',
      polarFsInstanceId: 'string',
      requestId: 'string',
      totalRecordCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

