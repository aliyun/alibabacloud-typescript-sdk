// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourcesResponseBodyDbList extends $dara.Model {
  /**
   * @example
   * 0
   */
  assetType?: number;
  /**
   * @example
   * 0
   */
  auditSwitch?: number;
  /**
   * @example
   * 2019-06-06 09:00:00
   */
  createTime?: string;
  dbAddresses?: string[];
  /**
   * @example
   * -----BEGIN CERTIFICATE----- ...... -----END CERTIFICATE-----
   */
  dbCertificate?: string;
  /**
   * @example
   * 1
   */
  dbId?: number;
  /**
   * @example
   * rds-a235dsdg2a****
   */
  dbInstanceId?: string;
  dbName?: string;
  /**
   * @example
   * 3
   */
  dbType?: number;
  /**
   * @example
   * Mysql
   */
  dbTypeName?: string;
  /**
   * @example
   * root
   */
  dbUsername?: string;
  /**
   * @example
   * 5700
   */
  dbVersion?: number;
  /**
   * @example
   * 5.7
   */
  dbVersionName?: string;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      auditSwitch: 'AuditSwitch',
      createTime: 'CreateTime',
      dbAddresses: 'DbAddresses',
      dbCertificate: 'DbCertificate',
      dbId: 'DbId',
      dbInstanceId: 'DbInstanceId',
      dbName: 'DbName',
      dbType: 'DbType',
      dbTypeName: 'DbTypeName',
      dbUsername: 'DbUsername',
      dbVersion: 'DbVersion',
      dbVersionName: 'DbVersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'number',
      auditSwitch: 'number',
      createTime: 'string',
      dbAddresses: { 'type': 'array', 'itemType': 'string' },
      dbCertificate: 'string',
      dbId: 'number',
      dbInstanceId: 'string',
      dbName: 'string',
      dbType: 'number',
      dbTypeName: 'string',
      dbUsername: 'string',
      dbVersion: 'number',
      dbVersionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dbAddresses)) {
      $dara.Model.validateArray(this.dbAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBody extends $dara.Model {
  dbList?: ListDataSourcesResponseBodyDbList[];
  /**
   * @example
   * 1B217656-2267-4FBF-B26C-CDD201BDC3B8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dbList: 'DbList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbList: { 'type': 'array', 'itemType': ListDataSourcesResponseBodyDbList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dbList)) {
      $dara.Model.validateArray(this.dbList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

