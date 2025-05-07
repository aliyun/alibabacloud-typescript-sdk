// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClassDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The RDS edition of the instance. Valid values:
   * 
   * *   **Basic**: RDS Basic Edition
   * *   **HighAvailability**: RDS High-availability Edition
   * *   **AlwaysOn**: RDS Cluster Edition
   * *   **Finance**: RDS Enterprise Edition
   * 
   * @example
   * Basic
   */
  category?: string;
  /**
   * @remarks
   * The code of the instance type.
   * 
   * @example
   * mysql.n2.medium.1
   */
  classCode?: string;
  /**
   * @remarks
   * The instance family of the instance.
   * 
   * @example
   * x
   */
  classGroup?: string;
  /**
   * @remarks
   * The number of CPU cores that are supported by the instance type. Unit: cores.
   * 
   * @example
   * 4
   */
  cpu?: string;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * *   **local_ssd**: local SSDs
   * *   **cloud_ssd**: standard SSDs
   * *   **cloud_essd**: enhanced SSDs (ESSDs) of performance level 1 (PL1)
   * *   **cloud_essd2**: ESSDs of PL2
   * *   **cloud_essd3**: ESSD of PL3
   * 
   * @example
   * local_ssd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The architecture of the instance.
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
   * The maximum I/O bandwidth that is supported by the instance type. Unit: Mbit/s.
   * 
   * @example
   * 1024
   */
  maxIOMBPS?: string;
  /**
   * @remarks
   * The maximum input/output operations per second (IOPS) that is supported by the instance type. Unit: operations per second.
   * 
   * @example
   * N/A
   */
  maxIOPS?: string;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * @example
   * 2GB
   */
  memoryClass?: string;
  /**
   * @remarks
   * The price.
   * 
   * Unit: cents (US dollars).
   * 
   * > *   If you set the CommodityCode parameter to a value that indicates the pay-as-you-go billing method, the ReferencePrice parameter specifies the hourly fee that you must pay.
   * > *   If you set the CommodityCode parameter to a value that indicates the subscription billing method, the ReferencePrice parameter specifies the monthly fee that you must pay.
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

