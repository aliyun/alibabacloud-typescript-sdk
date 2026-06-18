// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataImportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the details of all instances in the specified region, including instance IDs.
   * 
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The execution status of the target SQL import. Valid values: * **importing**: importing. * **success**: import succeeded. * **fail**: import failed.
   * 
   * @example
   * transfer_test3
   */
  dstDb?: string;
  /**
   * @remarks
   * The password of the privileged account for the target ApsaraDB RDS instance. > * You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the privileged account information of the target instance, including the password. * This parameter takes effect only when DstPassword is set to true.
   * 
   * @example
   * ******
   */
  dstPassword?: string;
  /**
   * @remarks
   * The migration task ID.
   * 
   * @example
   * pxc-shr8****k36vrn
   */
  dstResId?: string;
  /**
   * @remarks
   * The username of the target.
   * 
   * @example
   * bbt_cms_prod
   */
  dstUserName?: string;
  /**
   * @remarks
   * The region in which the instance resides. > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196841.html) operation to query the regions supported by PolarDB-X, including region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The import task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * etx-szr2rr6i*****
   */
  slinkTaskId?: string;
  /**
   * @remarks
   * The database information of the source when the source database is ApsaraDB RDS for MySQL. > The source database must be consistent with the target database.
   * 
   * @example
   * transfer_for_st
   */
  srcDb?: string;
  /**
   * @remarks
   * The read/write mode for executing the import task on the source. Valid values: * **rw**: read and write. * **ro**: read-only.
   * 
   * @example
   * ******
   */
  srcPassword?: string;
  /**
   * @remarks
   * The ID of the source ApsaraDB RDS instance. > You can call the [DescribeDrivingAccess](https://help.aliyun.com/document_detail/196830.html) operation to query the details of all source ApsaraDB RDS instances in the specified region, including instance IDs.
   * 
   * @example
   * pxc-shrnv****kh87z
   */
  srcResId?: string;
  /**
   * @remarks
   * The username of the source.
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
      slinkTaskId: 'SlinkTaskId',
      srcDb: 'SrcDb',
      srcPassword: 'SrcPassword',
      srcResId: 'SrcResId',
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
      slinkTaskId: 'string',
      srcDb: 'string',
      srcPassword: 'string',
      srcResId: 'string',
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

