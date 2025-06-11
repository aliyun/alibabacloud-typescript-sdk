// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlAuditStatResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  affectRows?: number;
  /**
   * @example
   * test_database_1
   */
  databaseName?: string;
  /**
   * @example
   * 142
   */
  executeTime?: number;
  /**
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @example
   * UPDATE
   */
  operatorType?: string;
  /**
   * @example
   * 1
   */
  returnRows?: number;
  /**
   * @example
   * 1
   */
  scanRows?: number;
  /**
   * @remarks
   * Sql ID
   * 
   * @example
   * 8D6E84****0B8FB1823D199E2CA1****
   */
  sqlId?: string;
  /**
   * @example
   * UPDATE `oceanbase_test_table` SET `name` = ? WHERE `key` = ?
   */
  sqlStatement?: string;
  /**
   * @example
   * t33h8y08k****
   */
  tenantId?: string;
  /**
   * @example
   * 1
   */
  totalAffectRows?: number;
  /**
   * @example
   * 0
   */
  totalFailed?: number;
  /**
   * @example
   * 1
   */
  totalReturnRows?: number;
  /**
   * @example
   * 10
   */
  totalScanRows?: number;
  /**
   * @example
   * 1
   */
  totalSucceed?: number;
  /**
   * @example
   * xx.xx.xx.xx
   */
  userClientIp?: string;
  /**
   * @example
   * test_mysql
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      affectRows: 'AffectRows',
      databaseName: 'DatabaseName',
      executeTime: 'ExecuteTime',
      instanceId: 'InstanceId',
      operatorType: 'OperatorType',
      returnRows: 'ReturnRows',
      scanRows: 'ScanRows',
      sqlId: 'SqlId',
      sqlStatement: 'SqlStatement',
      tenantId: 'TenantId',
      totalAffectRows: 'TotalAffectRows',
      totalFailed: 'TotalFailed',
      totalReturnRows: 'TotalReturnRows',
      totalScanRows: 'TotalScanRows',
      totalSucceed: 'TotalSucceed',
      userClientIp: 'UserClientIp',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectRows: 'number',
      databaseName: 'string',
      executeTime: 'number',
      instanceId: 'string',
      operatorType: 'string',
      returnRows: 'number',
      scanRows: 'number',
      sqlId: 'string',
      sqlStatement: 'string',
      tenantId: 'string',
      totalAffectRows: 'number',
      totalFailed: 'number',
      totalReturnRows: 'number',
      totalScanRows: 'number',
      totalSucceed: 'number',
      userClientIp: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

