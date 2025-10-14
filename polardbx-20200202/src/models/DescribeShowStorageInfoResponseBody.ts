// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeShowStorageInfoResponseBodyDataStorageInfos extends $dara.Model {
  /**
   * @example
   * polar.mysql.x4.large
   */
  class?: string;
  /**
   * @example
   * 3
   */
  dbCount?: number;
  /**
   * @example
   * True
   */
  deletable?: boolean;
  /**
   * @example
   * 12
   */
  groupCount?: number;
  /**
   * @example
   * MASTER
   */
  instKind?: string;
  /**
   * @example
   * true
   */
  isHealthy?: boolean;
  /**
   * @example
   * 11.117.237.205:3029
   */
  leaderNode?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
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
   * @example
   * 200
   */
  code?: string;
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

