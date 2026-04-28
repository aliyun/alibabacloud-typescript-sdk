// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarFsObjectsResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 100
   */
  capacity?: string;
  /**
   * @example
   * 2025-03-25T09:37:10Z
   */
  creationTime?: number;
  /**
   * @example
   * 2025-03-25T09:37:10Z
   */
  lastModified?: number;
  /**
   * @example
   * test
   */
  linkTarget?: string;
  /**
   * @example
   * 755
   */
  mode?: string;
  /**
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
   * @example
   * /test
   */
  path?: string;
  /**
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
  items?: DescribePolarFsObjectsResponseBodyItems[];
  /**
   * @example
   * 30
   */
  pageRecordCount?: string;
  /**
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @example
   * /test
   */
  path?: string;
  /**
   * @example
   * pfs-2ze0i7*****
   */
  polarFsInstanceId?: string;
  /**
   * @example
   * CDB3258F-B5DE-43C4-8935-CBA0CA******
   */
  requestId?: string;
  /**
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

