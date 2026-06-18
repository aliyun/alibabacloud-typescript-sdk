// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableSqlAuditRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the audit administrator account. > If the three-authority separation mode is enabled, this parameter is required. For more information about the three-authority separation module, see [Three-authority separation](https://help.aliyun.com/document_detail/213824.html).
   * 
   * @example
   * test_daa
   */
  auditAccountName?: string;
  /**
   * @remarks
   * The password of the audit administrator account. > If the three-authority separation mode is enabled, this parameter is required. For more information about the three-authority separation module, see [Three-authority separation](https://help.aliyun.com/document_detail/213824.html).
   * 
   * @example
   * Pw@11111
   */
  auditAccountPassword?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-****************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The number of days to retain audit logs:
   * 
   * - 0: Do not retain (i.e., disable automatic log expiration)
   * 
   * - >0: Logs are automatically deleted after N days
   * 
   * - >Common values: 30, 45, 90, 180, 365
   * 
   * @example
   * 45
   */
  expireAfterDays?: number;
  /**
   * @remarks
   * The region where the instance is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      auditAccountName: 'AuditAccountName',
      auditAccountPassword: 'AuditAccountPassword',
      DBInstanceId: 'DBInstanceId',
      expireAfterDays: 'ExpireAfterDays',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditAccountName: 'string',
      auditAccountPassword: 'string',
      DBInstanceId: 'string',
      expireAfterDays: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

