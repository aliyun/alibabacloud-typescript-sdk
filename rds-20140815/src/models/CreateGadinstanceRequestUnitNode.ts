// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGADInstanceRequestUnitNode extends $dara.Model {
  /**
   * @remarks
   * The name of the unit node that you want to create. The name must meet the following requirements:
   * 
   * *   The name must be **2 to 255** characters in length.
   * *   The name can contain letters, digits, underscores (_), and hyphens (-) and must start with a letter.
   * *   Does not start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The storage capacity of the unit node that you want to create. Unit: GB. You can adjust the storage capacity in increments of 5 GB. For more information, see [Primary ApsaraDB RDS instance types](https://help.aliyun.com/document_detail/26312.html). You can also call the DescribeAvailableResource operation to query the storage capacity range that is supported by the new instance type.
   * 
   * @example
   * 20
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The storage type of the new instance. Valid values:
   * 
   * *   **local_ssd**: Premium Local SSD (recommended)
   * *   **cloud_ssd**: standard SSD. This storage type is not recommended. Standard SSDs are no longer available for purchase in specific Alibaba Cloud regions.
   * *   **cloud_essd**: Enterprise SSD (ESSD) of performance level 1 (PL1).
   * *   **cloud_essd2**: ESSD of PL2.
   * *   **cloud_essd3**: ESSD of PL3.
   * 
   * The default value of this parameter is determined by the instance type specified by the **DBInstanceClass** parameter.
   * 
   * *   If the instance type specifies the Premium Local SSD storage type, the default value of this parameter is **local_ssd**.
   * *   If the instance type specifies the cloud disk storage type, the default value of this parameter is **cloud_essd**.
   * 
   * @example
   * cloud_essd2
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The instance type of the unit node that you want to create. For more information, see [Primary ApsaraDB RDS instance types](https://help.aliyun.com/document_detail/26312.html). You can call the DescribeAvailableResource operation to query the available instance types in a region.
   * 
   * @example
   * rds.mysql.t1.small
   */
  dbInstanceClass?: string;
  /**
   * @remarks
   * The conflict resolution policy based on which Data Transmission Service (DTS) responds to primary key conflicts during data synchronization to the unit node that you want to create. Valid values:
   * 
   * *   **overwrite**: DTS overwrites the conflicting primary key on the destination node.
   * *   **interrupt**: DTS stops the synchronization task, reports an error, and then exits.
   * *   **ignore**: DTS hides the conflicting primary key on the node.
   * 
   * This parameter is required.
   * 
   * @example
   * overwrite
   */
  dtsConflict?: string;
  /**
   * @remarks
   * The specifications of the data synchronization task for the unit node that you want to create. Valid values:
   * 
   * *   **small**
   * *   **medium**
   * *   **large**
   * *   **micro**
   * 
   * >  For more information, see [Specifications of data synchronization tasks](https://help.aliyun.com/document_detail/26605.html).
   * 
   * This parameter is required.
   * 
   * @example
   * medium
   */
  dtsInstanceClass?: string;
  /**
   * @remarks
   * The database engine of the unit node that you want to create. Set the value to **MySQL**.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the unit node that you want to create. Valid values:
   * 
   * *   **8.0**
   * *   **5.7**
   * *   **5.6**
   * *   **5.5**
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The billing method of the unit node that you want to create. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go
   * *   **Prepaid**: subscription
   * 
   * >  The system automatically generates a purchase order and completes the payment. You do not need to manually confirm the purchase order or complete the payment.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The region ID of the unit node that you want to create. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionID?: string;
  /**
   * @remarks
   * The [IP address whitelist](https://help.aliyun.com/document_detail/43185.html) of the unit node that you want to create. If you want to add more than one entry to the IP address whitelist, separate the entries with commas (,). Each entry must be unique. The IP address whitelist can contain up to 1,000 entries. The entries in the IP address whitelist must be in one of the following formats:
   * 
   * *   IP addresses, such as `10.10.10.10`.
   * *   CIDR blocks, such as `10.10.10.10/24`. In this example, **24** indicates that the prefix of the IP address in the whitelist is 24 bits in length. You can replace 24 with a value within the range of **1 to 32**.
   * 
   * @example
   * 10.10.10.10
   */
  securityIPList?: string;
  /**
   * @remarks
   * The vSwitch ID of the unit node that you want to create.
   * 
   * @example
   * vsw-bp1tg609m5j85********
   */
  vSwitchID?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID of the unit node that you want to create.
   * 
   * @example
   * vpc-bp19ame5m1r3o********
   */
  vpcID?: string;
  /**
   * @remarks
   * The zone ID of the unit node that you want to create. You can call the DescribeRegions operation to query the zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneID?: string;
  /**
   * @remarks
   * The zone ID of the secondary node of the unit node that you want to create. You can call the DescribeRegions operation to query the zone ID.
   * 
   * *   If the value of this parameter is the same as the **zone ID** of the unit node that you want to create, the single-zone deployment method is used.
   * *   If the value of this parameter is different from the **zone ID** of the unit node that you want to create, the multiple-zone deployment method is used.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneIDSlave1?: string;
  /**
   * @remarks
   * The zone ID of the logger node of the unit node that you want to create. You can call the DescribeRegions operation to query the zone ID.
   * 
   * *   If the value of this parameter is the same as the **zone ID** of the unit node that you want to create, the single-zone deployment method is used.
   * *   If the value of this parameter is different from the **zone ID** of the unit node that you want to create, the multiple-zone deployment method is used.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneIDSlave2?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      dbInstanceClass: 'DbInstanceClass',
      dtsConflict: 'DtsConflict',
      dtsInstanceClass: 'DtsInstanceClass',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      payType: 'PayType',
      regionID: 'RegionID',
      securityIPList: 'SecurityIPList',
      vSwitchID: 'VSwitchID',
      vpcID: 'VpcID',
      zoneID: 'ZoneID',
      zoneIDSlave1: 'ZoneIDSlave1',
      zoneIDSlave2: 'ZoneIDSlave2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDescription: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      dbInstanceClass: 'string',
      dtsConflict: 'string',
      dtsInstanceClass: 'string',
      engine: 'string',
      engineVersion: 'string',
      payType: 'string',
      regionID: 'string',
      securityIPList: 'string',
      vSwitchID: 'string',
      vpcID: 'string',
      zoneID: 'string',
      zoneIDSlave1: 'string',
      zoneIDSlave2: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

