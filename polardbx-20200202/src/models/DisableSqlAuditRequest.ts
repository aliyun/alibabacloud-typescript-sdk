// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableSqlAuditRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the audit administrator account. > If the three-role mode is enabled, this parameter is required. For more information about the three-role mode, see [Three-role mode](https://help.aliyun.com/document_detail/213824.html).
   * 
   * @example
   * test_daa
   */
  auditAccountName?: string;
  /**
   * @remarks
   * The password of the audit administrator account. > If the three-role mode is enabled, this parameter is required. For more information about the three-role mode, see [Three-role mode](https://help.aliyun.com/document_detail/213824.html).
   * 
   * @example
   * Pw@11111
   */
  auditAccountPassword?: string;
  /**
   * @remarks
   * The instance ID. > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the details of all instances in the specified region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-****************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The region ID of the instance. > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196841.html) operation to query the regions supported by PolarDB-X, including region IDs.
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
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditAccountName: 'string',
      auditAccountPassword: 'string',
      DBInstanceId: 'string',
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

