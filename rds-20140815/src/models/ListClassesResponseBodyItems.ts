// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClassesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The code of the instance type. For more information, see [Primary ApsaraDB RDS instance types](https://help.aliyun.com/document_detail/26312.html) and [Read-only ApsaraDB RDS instance types](https://help.aliyun.com/document_detail/145759.html).
   * 
   * @example
   * mysql.n1.micro.1
   */
  classCode?: string;
  /**
   * @remarks
   * The instance family. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/57184.html).
   * 
   * @example
   * General
   */
  classGroup?: string;
  /**
   * @remarks
   * The number of CPU cores that are supported by the instance type. Unit: cores.
   * 
   * @example
   * 1
   */
  cpu?: string;
  /**
   * @remarks
   * The size of the encrypted memory that is supported by the security-enhanced instance type. Unit: GB.
   * 
   * @example
   * 4
   */
  encryptedMemory?: string;
  /**
   * @remarks
   * The architecture of the instance type. Valid values:
   * 
   * *   If the architecture of the instance type is **x86**, an empty string is returned by default.
   * *   If the architecture of the instance type is **ARM**, **arm** is returned.
   * 
   * @example
   * arm
   */
  instructionSetArch?: string;
  /**
   * @remarks
   * The maximum number of connections that are supported by the instance type. Unit: connections.
   * 
   * @example
   * 2000
   */
  maxConnections?: string;
  /**
   * @remarks
   * The maximum I/O bandwidth that is supported by the instance type. Unit: Mbit/s.
   * 
   * @example
   * 1024Mbps
   */
  maxIOMBPS?: string;
  /**
   * @remarks
   * The maximum input/output operations per second (IOPS) that is supported by the instance type. Unit: operations per second.
   * 
   * @example
   * 10000
   */
  maxIOPS?: string;
  /**
   * @remarks
   * The memory size that is supported by the instance type. Unit: GB.
   * 
   * @example
   * 1 GB (RDS Basic Edition)
   */
  memoryClass?: string;
  /**
   * @remarks
   * The fee that you must pay for the instance type.
   * 
   * *   Unit: cents (USD).
   * 
   * > *   If you set **CommodityCode** to a value that indicates the pay-as-you-go billing method, the ReferencePrice parameter specifies the hourly fee that you must pay.
   * > *   If you set **CommodityCode** to a value that indicates the subscription billing method, the ReferencePrice parameter specifies the monthly fee that you must pay.
   * 
   * @example
   * 2500
   */
  referencePrice?: string;
  /**
   * @remarks
   * The RDS edition of the instance. Valid values:
   * 
   * *   Regular instance
   * 
   *     *   **Basic**: RDS Basic Edition
   *     *   **HighAvailability**: RDS High-availability Edition
   *     *   **cluster**: RDS Cluster Edition for ApsaraDB RDS for MySQL or PostgreSQL
   *     *   **AlwaysOn**: RDS Cluster Edition for ApsaraDB RDS for SQL Server
   *     *   **Finance**: RDS Basic Edition for serverless instances
   * 
   * *   Serverless instance
   * 
   *     *   **serverless_basic**: RDS Basic Edition for serverless instances. This edition is available only for instances that run MySQL and PostgreSQL.
   *     *   **serverless_standard**: RDS High-availability Edition for serverless instances. This edition is available only for instances that run MySQL and PostgreSQL.
   *     *   **serverless_ha**: RDS High-availability Edition for serverless instances. This edition is available only for instances that run SQL Server.
   * 
   * @example
   * Basic
   */
  category?: string;
  /**
   * @remarks
   * The storage type of the instance.
   * 
   * @example
   * cloud_essd
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      classGroup: 'ClassGroup',
      cpu: 'Cpu',
      encryptedMemory: 'EncryptedMemory',
      instructionSetArch: 'InstructionSetArch',
      maxConnections: 'MaxConnections',
      maxIOMBPS: 'MaxIOMBPS',
      maxIOPS: 'MaxIOPS',
      memoryClass: 'MemoryClass',
      referencePrice: 'ReferencePrice',
      category: 'category',
      storageType: 'storageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      classGroup: 'string',
      cpu: 'string',
      encryptedMemory: 'string',
      instructionSetArch: 'string',
      maxConnections: 'string',
      maxIOMBPS: 'string',
      maxIOPS: 'string',
      memoryClass: 'string',
      referencePrice: 'string',
      category: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

