// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClassesResponseBodyItems extends $dara.Model {
  classCode?: string;
  classGroup?: string;
  cpu?: string;
  encryptedMemory?: string;
  instructionSetArch?: string;
  maxConnections?: string;
  maxIOMBPS?: string;
  maxIOPS?: string;
  memoryClass?: string;
  referencePrice?: string;
  category?: string;
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
  items?: ListClassesResponseBodyItems[];
  regionId?: string;
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

