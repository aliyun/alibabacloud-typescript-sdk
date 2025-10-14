// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStoragePoolInfoResponseBodyDataStoragePools extends $dara.Model {
  /**
   * @example
   * polar.mysql.x4.large
   */
  class?: string;
  /**
   * @example
   * [pxc-xdb-s-pxcbj****xxnwp0wac2c4\\",\\"pxc-xdb-s-pxcbjr3b8****p0wa1589\\"]
   */
  dnIdList?: string[];
  /**
   * @remarks
   * DN id
   * 
   * @example
   * pxc-xdb-s-pxcshr****rh7fn2654fc
   */
  dnIdString?: string;
  /**
   * @example
   * {\\"appId\\":\\"APP_ETLUP1E5FMI5ND5IFO8W\\"}
   */
  extra?: string;
  /**
   * @example
   * 2025-08-27 23:19:52.0
   */
  gmtCreated?: string;
  /**
   * @example
   * 2025-09-02 16:52:47.0
   */
  gmtModified?: string;
  /**
   * @example
   * none
   */
  idleDNIdList?: string[];
  /**
   * @example
   * test-cacheapi
   */
  name?: string;
  /**
   * @example
   * pxc-xdb-s-hzr*****6j4se284344
   */
  unDeletableDNId?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
      dnIdList: 'DnIdList',
      dnIdString: 'DnIdString',
      extra: 'Extra',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      idleDNIdList: 'IdleDNIdList',
      name: 'Name',
      unDeletableDNId: 'UnDeletableDNId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
      dnIdList: { 'type': 'array', 'itemType': 'string' },
      dnIdString: 'string',
      extra: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      idleDNIdList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      unDeletableDNId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dnIdList)) {
      $dara.Model.validateArray(this.dnIdList);
    }
    if(Array.isArray(this.idleDNIdList)) {
      $dara.Model.validateArray(this.idleDNIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoragePoolInfoResponseBodyData extends $dara.Model {
  storagePools?: DescribeStoragePoolInfoResponseBodyDataStoragePools[];
  static names(): { [key: string]: string } {
    return {
      storagePools: 'StoragePools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storagePools: { 'type': 'array', 'itemType': DescribeStoragePoolInfoResponseBodyDataStoragePools },
    };
  }

  validate() {
    if(Array.isArray(this.storagePools)) {
      $dara.Model.validateArray(this.storagePools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoragePoolInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeStoragePoolInfoResponseBodyData;
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
      data: DescribeStoragePoolInfoResponseBodyData,
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

