// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRplInspectionTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraDB RDS instance to which the migration object belongs in the target instance. > You can invoke the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the details of all ApsaraDB RDS instances in the specified region, including instance IDs.
   * 
   * @example
   * transfer_test3
   */
  dstDb?: string;
  /**
   * @remarks
   * The password of the privileged account for the destination ApsaraDB RDS instance. > * The password must be 8 to 32 characters in length. * The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. * Special characters include ! @ # $ & % ^ * ( ) _ + - =.
   * 
   * @example
   * ******
   */
  dstPassword?: string;
  /**
   * @remarks
   * The destination task ID.
   * 
   * @example
   * pxc-zkrc1****l54rc
   */
  dstResId?: string;
  /**
   * @remarks
   * The username used to connect to the target instance.
   * 
   * @example
   * bbt_item
   */
  dstUserName?: string;
  /**
   * @remarks
   * The region ID. > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196841.html) operation to query the regions supported by PolarDB-X, including region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The switchover task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * etx-szr2rr6i*****
   */
  slinkTaskId?: string;
  /**
   * @remarks
   * The password of the source ApsaraDB RDS instance. > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the details of all instances in the specified region, including the password.
   * 
   * @example
   * ******
   */
  srcPassword?: string;
  /**
   * @remarks
   * The username used to connect to the source instance (source database).
   * 
   * @example
   * bbt_ump
   */
  srcUserName?: string;
  static names(): { [key: string]: string } {
    return {
      dstDb: 'DstDb',
      dstPassword: 'DstPassword',
      dstResId: 'DstResId',
      dstUserName: 'DstUserName',
      regionId: 'RegionId',
      slinkTaskId: 'SlinkTaskId',
      srcPassword: 'SrcPassword',
      srcUserName: 'SrcUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstDb: 'string',
      dstPassword: 'string',
      dstResId: 'string',
      dstUserName: 'string',
      regionId: 'string',
      slinkTaskId: 'string',
      srcPassword: 'string',
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

