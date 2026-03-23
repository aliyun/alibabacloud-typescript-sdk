// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClassDetailsResponseBody extends $dara.Model {
  category?: string;
  classCode?: string;
  classGroup?: string;
  cpu?: string;
  DBInstanceStorageType?: string;
  instructionSetArch?: string;
  maxConnections?: string;
  maxIOMBPS?: string;
  maxIOPS?: string;
  memoryClass?: string;
  referencePrice?: string;
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

