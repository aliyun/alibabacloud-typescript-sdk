// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSQLEvaluateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the details of all instances in the target region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-shr4idrgogti89
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The ID of the instance on which the target SQL statement is executed. > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the details of the target SQL statement, including the instance ID.
   * 
   * @example
   * transfer_for_st
   */
  dstDb?: string;
  /**
   * @remarks
   * The password of the target SQL statement. > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the details of the target SQL statement, including the password.
   * 
   * @example
   * ******
   */
  dstPassword?: string;
  /**
   * @remarks
   * The ID of the target SQL statement. > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the details of the target SQL statement, including the ID.
   * 
   * @example
   * pxc-zkrc1****l54rc
   */
  dstResId?: string;
  /**
   * @remarks
   * The username of the destination instance.
   * 
   * @example
   * drds_test
   */
  dstUserName?: string;
  /**
   * @remarks
   * The region ID of the instance. > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196841.html) operation to query the regions supported by PolarDB-X, including region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The description of the target SQL statement.
   * 
   * @example
   * test-drds->auto
   */
  slinkTaskDesc?: string;
  /**
   * @remarks
   * The task ID for executing the target SQL statement. > You can call the [DescribeCloudCenterInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the IDs of target SQL statements supported by PolarDB-X.
   * 
   * @example
   * etx-szr2rr6i*****
   */
  slinkTaskId?: string;
  /**
   * @remarks
   * Specifies whether to enable the source ApsaraDB RDS instance. Valid values: ***enable**: enabled. ***disabled**: disabled.
   * 
   * @example
   * transfer_test3
   */
  srcDb?: string;
  /**
   * @remarks
   * The port number of the source instance. Valid values: 3200 to 3999. > This parameter is available and required only when **DBEndpointInstanceType** is set to **polardb-o**.
   * 
   * @example
   * ******
   */
  srcPassword?: string;
  /**
   * @remarks
   * The ID of the source ApsaraDB RDS instance. > You can call the [DescribeDropSystemEventMetaList](https://help.aliyun.com/document_detail/196836.html) operation to query the details of all source ApsaraDB RDS instances in the target region, including instance IDs.
   * 
   * @example
   * pxc-shr****rgkh87z
   */
  srcResId?: string;
  /**
   * @remarks
   * The type of the source instance. Valid values: RDS_MYSQL, POLARX1, POLARX2_STANDARD, POLARX2_ENTERPRISE, and POLARDB_M.
   * 
   * @example
   * POLARX2
   */
  srcResType?: string;
  /**
   * @remarks
   * The username of the source instance.
   * 
   * @example
   * drds_test
   */
  srcUserName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      dstDb: 'DstDb',
      dstPassword: 'DstPassword',
      dstResId: 'DstResId',
      dstUserName: 'DstUserName',
      regionId: 'RegionId',
      slinkTaskDesc: 'SlinkTaskDesc',
      slinkTaskId: 'SlinkTaskId',
      srcDb: 'SrcDb',
      srcPassword: 'SrcPassword',
      srcResId: 'SrcResId',
      srcResType: 'SrcResType',
      srcUserName: 'SrcUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      dstDb: 'string',
      dstPassword: 'string',
      dstResId: 'string',
      dstUserName: 'string',
      regionId: 'string',
      slinkTaskDesc: 'string',
      slinkTaskId: 'string',
      srcDb: 'string',
      srcPassword: 'string',
      srcResId: 'string',
      srcResType: 'string',
      srcUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

