// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClassDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The edition. Valid values:
   * * **Basic**: Basic Edition
   * * **HighAvailability**: High-availability Edition
   * * **AlwaysOn**: Cluster Edition
   * * **Finance**: RDS Enterprise Edition
   * 
   * @example
   * Basic
   */
  category?: string;
  /**
   * @remarks
   * The instance type code.
   * 
   * @example
   * mysql.n2.medium.1
   */
  classCode?: string;
  /**
   * @remarks
   * The instance family.
   * 
   * @example
   * x
   */
  classGroup?: string;
  /**
   * @remarks
   * The number of CPU cores for the instance type. Unit: cores.
   * 
   * @example
   * 4
   */
  cpu?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * * **local_ssd**: local SSD
   * * **cloud_ssd**: standard SSD
   * * **cloud_essd**: PL1 ESSD
   * * **cloud_essd2**: PL2 ESSD
   * * **cloud_essd3**: PL3 ESSD
   * 
   * @example
   * local_ssd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The architecture.
   * 
   * @example
   * x86
   */
  instructionSetArch?: string;
  /**
   * @remarks
   * The maximum number of connections.
   * 
   * @example
   * 4000
   */
  maxConnections?: string;
  /**
   * @remarks
   * The maximum I/O bandwidth for the instance type. Unit: Mbit/s.
   * 
   * @example
   * 1024
   */
  maxIOMBPS?: string;
  /**
   * @remarks
   * The maximum IOPS for the instance type. Unit: operations per second.
   * 
   * @example
   * N/A
   */
  maxIOPS?: string;
  /**
   * @remarks
   * The memory capacity. Unit: GB.
   * 
   * @example
   * 2GB
   */
  memoryClass?: string;
  /**
   * @remarks
   * The price.
   * 
   * <props="china">Unit: cents (CNY).
   * <props="intl">Unit: cents (USD).
   * 
   * > * If you set the CommodityCode parameter to a pay-as-you-go commodity code, the hourly price is returned.
   * > * If you set the CommodityCode parameter to a subscription commodity code, the monthly price is returned.
   * 
   * @example
   * 13400
   */
  referencePrice?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E9DD55F4-1A5F-48CA-BA57-DFB3CA8C4C34
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      classCode: 'ClassCode',
      classGroup: 'ClassGroup',
      cpu: 'Cpu',
      DBInstanceStorageType: 'DBInstanceStorageType',
      instructionSetArch: 'InstructionSetArch',
      maxConnections: 'MaxConnections',
      maxIOMBPS: 'MaxIOMBPS',
      maxIOPS: 'MaxIOPS',
      memoryClass: 'MemoryClass',
      referencePrice: 'ReferencePrice',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      classCode: 'string',
      classGroup: 'string',
      cpu: 'string',
      DBInstanceStorageType: 'string',
      instructionSetArch: 'string',
      maxConnections: 'string',
      maxIOMBPS: 'string',
      maxIOPS: 'string',
      memoryClass: 'string',
      referencePrice: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

