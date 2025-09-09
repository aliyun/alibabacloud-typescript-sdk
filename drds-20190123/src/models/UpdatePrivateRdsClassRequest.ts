// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrivateRdsClassRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use vouchers to offset the purchase fees. Valid values: **true** and **false**. Default value: false.
   * 
   * > If you downgrade the specifications of an instance after you use the vouchers, the vouchers used for the purchase cannot be refunded.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The ID of the custom ApsaraDB RDS instance at the storage layer.
   * 
   * > You can call the [DescribeDrdsRdsInstances](~~xxxx~~) operation to query the details of all ApsaraDB RDS instances at the storage layer of a PolarDB-X 1.0 instance, including the IDs of the ApsaraDB RDS instances.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * > You can call the [DescribeDrdsInstances](https://help.aliyun.com/document_detail/139284.html) operation to query the details of all PolarDB-X 1.0 instances within an Alibaba Cloud account, including the IDs of the instances.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * @example
   * 12
   */
  prePayDuration?: number;
  /**
   * @remarks
   * The new instance type of the custom ApsaraDB RDS instance at the storage layer.
   * 
   * > You can call the [DescribeAvailableClasses](https://help.aliyun.com/document_detail/196546.html) operation to view the specifications that are supported for a custom ApsaraDB RDS instance. The specifications include the instance type and the storage capacity.
   * 
   * @example
   * rds.mysql.c1.xlarge
   */
  rdsClass?: string;
  /**
   * @remarks
   * The new storage capacity of the custom ApsaraDB RDS instance at the storage layer.
   * 
   * > You can call the [DescribeAvailableClasses](https://help.aliyun.com/document_detail/196546.html) operation to view the specifications that are supported for a custom ApsaraDB RDS instance. The specifications include the instance type and the storage capacity.
   * 
   * @example
   * 50
   */
  storage?: string;
  static names(): { [key: string]: string } {
    return {
      autoUseCoupon: 'AutoUseCoupon',
      DBInstanceId: 'DBInstanceId',
      drdsInstanceId: 'DrdsInstanceId',
      prePayDuration: 'PrePayDuration',
      rdsClass: 'RdsClass',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUseCoupon: 'boolean',
      DBInstanceId: 'string',
      drdsInstanceId: 'string',
      prePayDuration: 'number',
      rdsClass: 'string',
      storage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

