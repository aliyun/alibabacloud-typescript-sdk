// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManagePrivateRdsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom ApsaraDB RDS instance at the storage layer.
   * 
   * > You can call the [DescribeDrdsRdsInstances](https://help.aliyun.com/document_detail/215526.html) operation to query the details of all ApsaraDB RDS instances, including the ID of the instance.
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
   * The JSON string that consists of request parameters and the values of the request parameters of an operation that you need to call for the custom ApsaraDB RDS instance. The value of a request parameter is of the STRING type. Example: `{NodeId:"1797****"}`.
   * 
   * For more information about the request parameters and valid values of the request parameters of each operation, see the request parameter sections in the following topics:
   * 
   * *   [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/26231.html)
   * *   [DescribeAvailableClasses](https://help.aliyun.com/document_detail/196546.html)
   * *   [DescribeSQLCollectorPolicy](https://help.aliyun.com/document_detail/26292.html)
   * *   [ModifySQLCollectorPolicy](https://help.aliyun.com/document_detail/26293.html)
   * *   [DescribeParameters](https://help.aliyun.com/document_detail/26285.html)
   * *   [ModifyParameter](https://help.aliyun.com/document_detail/26286.html)
   * *   [DescribeDBInstanceHAConfig](https://help.aliyun.com/document_detail/26244.html)
   * *   [SwitchDBInstanceHA](https://help.aliyun.com/document_detail/26251.html)
   * 
   * > Among the required request parameters of the preceding operations, you do not need to specify the `Action` and `DBInstanceId` parameters. You must specify all the other required request parameters.
   * 
   * @example
   * {NodeId:"1797****"}
   */
  params?: string;
  /**
   * @remarks
   * The operation that you want to perform on the custom ApsaraDB RDS instance. Valid values:
   * 
   * *   **DescribeDBInstanceAttribute**: queries the details of the custom ApsaraDB RDS instance.
   * *   **DescribeAvailableClasses**: queries the specifications that are supported for a custom ApsaraDB RDS instance. The specifications include the instance type and the storage capacity.
   * *   **DescribeSQLCollectorPolicy**: queries whether the SQL Explorer (SQL Audit) feature is enabled for custom ApsaraDB RDS instance.
   * *   **ModifySQLCollectorPolicy**: enables or disables the SQL Explorer (SQL Audit) feature for the custom ApsaraDB RDS instance.
   * *   **DescribeParameters**: queries the parameter settings of the custom ApsaraDB RDS instance.
   * *   **ModifyParameter**: modifies the parameters of the custom ApsaraDB RDS instance.
   * *   **DescribeDBInstanceHAConfig**: queries the high availability mode and data replication mode of the custom ApsaraDB RDS instance.
   * *   **SwitchDBInstanceHA**: switches workloads between the primary and secondary custom ApsaraDB RDS instances.
   * 
   * This parameter is required.
   * 
   * @example
   * SwitchDBInstanceHA
   */
  rdsAction?: string;
  /**
   * @remarks
   * The ID of the region in which the PolarDB-X 1.0 instance resides.
   * 
   * > You can call the [DescribeDrdsInstances](https://help.aliyun.com/document_detail/139284.html) operation to query the details of all PolarDB-X 1.0 instances within an Alibaba Cloud account, including the IDs of regions in which the instances reside.
   * 
   * @example
   * cn-hanzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      drdsInstanceId: 'DrdsInstanceId',
      params: 'Params',
      rdsAction: 'RdsAction',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      drdsInstanceId: 'string',
      params: 'string',
      rdsAction: 'string',
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

