// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClassesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The instance type code. For more information, see [Primary instance types](https://help.aliyun.com/document_detail/26312.html) and [Read-only instance types](https://help.aliyun.com/document_detail/145759.html).
   * 
   * @example
   * mysql.n1.micro.1
   */
  classCode?: string;
  /**
   * @remarks
   * The instance family. For more information, see [Instance families](https://help.aliyun.com/document_detail/57184.html).
   * 
   * @example
   * general-purpose
   */
  classGroup?: string;
  /**
   * @remarks
   * The number of CPU cores for the instance type. Unit: cores.
   * 
   * @example
   * 1
   */
  cpu?: string;
  /**
   * @remarks
   * The encrypted memory size for the security-enhanced instance family. Unit: GB.
   * 
   * @example
   * 4
   */
  encryptedMemory?: string;
  /**
   * @remarks
   * The architecture type of the instance type. Valid values:
   * 
   * - If the instance uses the **x86** architecture, this parameter is empty by default.
   * - If the instance uses the **arm** architecture, **arm** is returned.
   * 
   * @example
   * arm
   */
  instructionSetArch?: string;
  /**
   * @remarks
   * The maximum number of connections for the instance type.
   * 
   * @example
   * 2000
   */
  maxConnections?: string;
  /**
   * @remarks
   * The maximum I/O bandwidth for the instance type. Unit: Mbit/s.
   * 
   * @example
   * 1024Mbps
   */
  maxIOMBPS?: string;
  /**
   * @remarks
   * The maximum IOPS for the instance type.
   * 
   * @example
   * 10000
   */
  maxIOPS?: string;
  /**
   * @remarks
   * The memory size for the instance type. Unit: GB.
   * 
   * @example
   * 1GB
   */
  memoryClass?: string;
  /**
   * @remarks
   * The price for the instance type.
   * 
   * <props="china">
   * * Unit: cents (CNY).
   * 
   * <props="intl">
   * * Unit: cents (USD).
   * 
   * 
   * > * If you set the **CommodityCode** parameter to a pay-as-you-go commodity code, this parameter indicates the hourly price.
   * > * If you set the **CommodityCode** parameter to a subscription commodity code, this parameter indicates the monthly price.
   * 
   * @example
   * 2500
   */
  referencePrice?: string;
  /**
   * @remarks
   * The instance edition. Valid values:
   * * Regular instances
   *     * **Basic**: Basic Edition.
   *     * **HighAvailability**: High availability series.
   *     * **cluster**: MySQL or PostgreSQL Cluster Edition.
   *     * **AlwaysOn**: SQL Server Cluster Edition.
   *     * **Finance**: RDS Enterprise Edition.
   * * Serverless instances
   *     * **serverless_basic**: Serverless Basic Edition. (Applicable only to MySQL and PostgreSQL)
   *     * **serverless_standard**: Serverless high availability series. (Applicable only to MySQL and PostgreSQL)
   *     * **serverless_ha**: SQL Server Serverless high availability series.
   * 
   * @example
   * Basic
   */
  category?: string;
  /**
   * @remarks
   * The instance storage type.
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

export class ListClassesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of instance type information.
   */
  items?: ListClassesResponseBodyItems[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CF8D35BF-263D-4F7B-883A-1163B79A9EC6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListClassesResponseBodyItems },
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

