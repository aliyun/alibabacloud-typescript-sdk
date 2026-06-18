// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlAuditInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the audit administrator account. > This parameter is required if the three-role mode is enabled. For more information, see [Three-role mode](https://help.aliyun.com/document_detail/213824.html).
   * 
   * @example
   * test_daa
   */
  auditAccountName?: string;
  /**
   * @remarks
   * The password of the audit administrator account. > This parameter is required if the three-role mode is enabled. For more information about the three-role mode, see [Three-role mode](https://help.aliyun.com/document_detail/213824.html).
   * 
   * @example
   * ******
   */
  auditAccountPassword?: string;
  /**
   * @remarks
   * The instance ID. > You can call [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) to query the details of all instances in the specified region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-****************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides. > You can call [DescribeRegions](https://help.aliyun.com/document_detail/196841.html) to query the regions supported by PolarDB-X, including region IDs.
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

