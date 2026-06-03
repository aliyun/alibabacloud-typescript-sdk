// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDBAuditCountListResponseBodyDbList extends $dara.Model {
  /**
   * @example
   * 0
   */
  assetType?: number;
  dbAddresses?: string[];
  /**
   * @example
   * 1
   */
  dbId?: number;
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
   * 5700
   */
  dbVersion?: number;
  /**
   * @example
   * 5.7
   */
  dbVersionName?: string;
  /**
   * @example
   * 1000
   */
  riskCount?: number;
  /**
   * @example
   * 2000
   */
  sessionCount?: number;
  /**
   * @example
   * 100000
   */
  sqlCount?: number;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      dbAddresses: 'DbAddresses',
      dbId: 'DbId',
      dbName: 'DbName',
      dbType: 'DbType',
      dbTypeName: 'DbTypeName',
      dbVersion: 'DbVersion',
      dbVersionName: 'DbVersionName',
      riskCount: 'RiskCount',
      sessionCount: 'SessionCount',
      sqlCount: 'SqlCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'number',
      dbAddresses: { 'type': 'array', 'itemType': 'string' },
      dbId: 'number',
      dbName: 'string',
      dbType: 'number',
      dbTypeName: 'string',
      dbVersion: 'number',
      dbVersionName: 'string',
      riskCount: 'number',
      sessionCount: 'number',
      sqlCount: 'number',
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

export class GetDBAuditCountListResponseBody extends $dara.Model {
  dbList?: GetDBAuditCountListResponseBodyDbList[];
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
      dbList: { 'type': 'array', 'itemType': GetDBAuditCountListResponseBodyDbList },
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

