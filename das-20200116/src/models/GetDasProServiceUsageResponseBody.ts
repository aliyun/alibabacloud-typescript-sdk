// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDasProServiceUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of DAS Enterprise Edition.
   * 
   * @example
   * daspro-cn-v0h1l6i****
   */
  commodityInstanceId?: string;
  /**
   * @remarks
   * The database engine.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The expiration time of DAS Enterprise Edition for the database instance. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1648742400000
   */
  expireTime?: number;
  /**
   * @remarks
   * The name of the database instance.
   * 
   * @example
   * TESTDB01
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The database instance ID.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the database instance.
   * 
   * @example
   * rm-2ze8g2am97624****.mysql.****.com
   */
  ip?: string;
  /**
   * @remarks
   * Indicates whether DAS Enterprise Edition for the database instance has expired. Valid values:
   * 
   * - **true**: Expired.
   * - **false**: Not expired.
   * 
   * @example
   * false
   */
  isSpare?: boolean;
  /**
   * @remarks
   * The estimated remaining time for migrating from the original SQL Explorer and Audit to the new version. Unit: milliseconds.
   * >Notice: This parameter is returned only when the migration from the original SQL Explorer and Audit to the new version is in progress.
   * 
   * @example
   * 60000
   */
  migrationPredictRemainingTime?: number;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The region in which the database instance resides.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The service unit ID.
   * 
   * @example
   * 4
   */
  serviceUnitId?: string;
  /**
   * @remarks
   * The storage duration of SQL Explorer data. Unit: days.
   * 
   * @example
   * 180
   */
  sqlRetention?: string;
  /**
   * @remarks
   * The time when DAS Enterprise Edition was enabled. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1646100892000
   */
  startTime?: number;
  /**
   * @remarks
   * The free storage quota for SQL Explorer data. Unit: MB.
   * 
   * @example
   * 5120
   */
  storageFreeQuotaInMB?: number;
  /**
   * @remarks
   * The storage space used by SQL Explorer data for the database instance. Unit: bytes.
   * 
   * @example
   * 35903498
   */
  storageUsed?: number;
  /**
   * @remarks
   * The user ID, which is the ID of the Alibaba Cloud account that is used to create the database instance.
   * 
   * @example
   * 196278346919****
   */
  userId?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-2zentqj1sk4qmolci****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityInstanceId: 'commodityInstanceId',
      engine: 'engine',
      expireTime: 'expireTime',
      instanceAlias: 'instanceAlias',
      instanceId: 'instanceId',
      ip: 'ip',
      isSpare: 'isSpare',
      migrationPredictRemainingTime: 'migrationPredictRemainingTime',
      port: 'port',
      region: 'region',
      serviceUnitId: 'serviceUnitId',
      sqlRetention: 'sqlRetention',
      startTime: 'startTime',
      storageFreeQuotaInMB: 'storageFreeQuotaInMB',
      storageUsed: 'storageUsed',
      userId: 'userId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityInstanceId: 'string',
      engine: 'string',
      expireTime: 'number',
      instanceAlias: 'string',
      instanceId: 'string',
      ip: 'string',
      isSpare: 'boolean',
      migrationPredictRemainingTime: 'number',
      port: 'number',
      region: 'string',
      serviceUnitId: 'string',
      sqlRetention: 'string',
      startTime: 'number',
      storageFreeQuotaInMB: 'number',
      storageUsed: 'number',
      userId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasProServiceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {         "storageFreeQuotaInMB": 5120,         "ip": "rm-2ze8g2am97624****.mysql.****.com",         "custinsId": 12448331,         "userId": "196278346919****",         "uuid": "hdm_b0ae36343407609bf3e8df8709d8****",         "expireTime": 1924963200000,         "instanceId": "rm-2ze8g2am97624****",         "storageUsed": 10773752667393,         "engine": "MySQL",         "instanceAlias": "TESTDB01_PROD",         "port": 3310,         "vpcId": "hdm_****",         "commodityInstanceId": "daspro-****",         "startTime": 1606381940000,         "isSpare": false,         "region": "cn-shanghai",         "serviceUnitId": "5",         "sqlRetention": 30     }
   */
  data?: GetDasProServiceUsageResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * > If the request is successful, **Successful** is returned. If the request fails, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7172BECE-588A-5961-8126-C216E16B****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetDasProServiceUsageResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

