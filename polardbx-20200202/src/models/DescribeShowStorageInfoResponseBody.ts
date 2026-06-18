// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeShowStorageInfoResponseBodyDataStorageInfos extends $dara.Model {
  /**
   * @remarks
   * The specification type (specification code) of the instance.
   * 
   * @example
   * polar.mysql.x4.large
   */
  class?: string;
  /**
   * @remarks
   * The number of databases.
   * 
   * @example
   * 3
   */
  dbCount?: number;
  /**
   * @remarks
   * Indicates whether the instance can be deleted.
   * 
   * @example
   * True
   */
  deletable?: boolean;
  /**
   * @remarks
   * The number of node groups.
   * 
   * @example
   * 12
   */
  groupCount?: number;
  /**
   * @remarks
   * The role type of the instance. Valid values:
   * MASTER: primary instance.
   * READONLY: read-only instance.
   * STANDBY: standby instance (high-availability scenario).
   * 
   * @example
   * MASTER
   */
  instKind?: string;
  /**
   * @remarks
   * Indicates whether the instance or cluster is currently in a healthy state.
   * 
   * @example
   * true
   */
  isHealthy?: boolean;
  /**
   * @remarks
   * The identifier of the leader node.
   * 
   * @example
   * 11.117.237.205:3029
   */
  leaderNode?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * pxc-xdb-m-pxcbjrylg49skcxb17394
   */
  storageInstName?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
      dbCount: 'DbCount',
      deletable: 'Deletable',
      groupCount: 'GroupCount',
      instKind: 'InstKind',
      isHealthy: 'IsHealthy',
      leaderNode: 'LeaderNode',
      status: 'Status',
      storageInstName: 'StorageInstName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
      dbCount: 'number',
      deletable: 'boolean',
      groupCount: 'number',
      instKind: 'string',
      isHealthy: 'boolean',
      leaderNode: 'string',
      status: 'number',
      storageInstName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShowStorageInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of storage information.
   */
  storageInfos?: DescribeShowStorageInfoResponseBodyDataStorageInfos[];
  static names(): { [key: string]: string } {
    return {
      storageInfos: 'StorageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageInfos: { 'type': 'array', 'itemType': DescribeShowStorageInfoResponseBodyDataStorageInfos },
    };
  }

  validate() {
    if(Array.isArray(this.storageInfos)) {
      $dara.Model.validateArray(this.storageInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShowStorageInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code of the request. This parameter is empty when the request is successful. When the request fails, exception information such as an error code is returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data.
   */
  data?: DescribeShowStorageInfoResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeShowStorageInfoResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

