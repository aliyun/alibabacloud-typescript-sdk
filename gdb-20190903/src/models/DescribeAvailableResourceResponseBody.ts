// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedStorageSizeListSupportedStorageSizeStorageSize extends $dara.Model {
  max?: number;
  min?: number;
  step?: number;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
      step: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedStorageSizeListSupportedStorageSize extends $dara.Model {
  storageSize?: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedStorageSizeListSupportedStorageSizeStorageSize;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      storageSize: 'StorageSize',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageSize: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedStorageSizeListSupportedStorageSizeStorageSize,
      storageType: 'string',
    };
  }

  validate() {
    if(this.storageSize && typeof (this.storageSize as any).validate === 'function') {
      (this.storageSize as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedStorageSizeList extends $dara.Model {
  supportedStorageSize?: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedStorageSizeListSupportedStorageSize[];
  static names(): { [key: string]: string } {
    return {
      supportedStorageSize: 'SupportedStorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedStorageSize: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedStorageSizeListSupportedStorageSize },
    };
  }

  validate() {
    if(Array.isArray(this.supportedStorageSize)) {
      $dara.Model.validateArray(this.supportedStorageSize);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClass extends $dara.Model {
  instanceClass?: string;
  supportedStorageSizeList?: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedStorageSizeList;
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      instanceClass: 'InstanceClass',
      supportedStorageSizeList: 'SupportedStorageSizeList',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceClass: 'string',
      supportedStorageSizeList: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedStorageSizeList,
      tips: 'string',
    };
  }

  validate() {
    if(this.supportedStorageSizeList && typeof (this.supportedStorageSizeList as any).validate === 'function') {
      (this.supportedStorageSizeList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassList extends $dara.Model {
  supportedInstanceClass?: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClass[];
  static names(): { [key: string]: string } {
    return {
      supportedInstanceClass: 'SupportedInstanceClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedInstanceClass: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClass },
    };
  }

  validate() {
    if(Array.isArray(this.supportedInstanceClass)) {
      $dara.Model.validateArray(this.supportedInstanceClass);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerial extends $dara.Model {
  serial?: string;
  supportedInstanceClassList?: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassList;
  static names(): { [key: string]: string } {
    return {
      serial: 'Serial',
      supportedInstanceClassList: 'SupportedInstanceClassList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serial: 'string',
      supportedInstanceClassList: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassList,
    };
  }

  validate() {
    if(this.supportedInstanceClassList && typeof (this.supportedInstanceClassList as any).validate === 'function') {
      (this.supportedInstanceClassList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialList extends $dara.Model {
  supportedSerial?: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerial[];
  static names(): { [key: string]: string } {
    return {
      supportedSerial: 'SupportedSerial',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedSerial: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerial },
    };
  }

  validate() {
    if(Array.isArray(this.supportedSerial)) {
      $dara.Model.validateArray(this.supportedSerial);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZone extends $dara.Model {
  supportedSerialList?: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialList;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      supportedSerialList: 'SupportedSerialList',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedSerialList: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialList,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.supportedSerialList && typeof (this.supportedSerialList as any).validate === 'function') {
      (this.supportedSerialList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneList extends $dara.Model {
  availableZone?: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZone[];
  static names(): { [key: string]: string } {
    return {
      availableZone: 'AvailableZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZone: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZone },
    };
  }

  validate() {
    if(Array.isArray(this.availableZone)) {
      $dara.Model.validateArray(this.availableZone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBody extends $dara.Model {
  availableZoneList?: DescribeAvailableResourceResponseBodyAvailableZoneList;
  regionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZoneList: 'AvailableZoneList',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZoneList: DescribeAvailableResourceResponseBodyAvailableZoneList,
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.availableZoneList && typeof (this.availableZoneList as any).validate === 'function') {
      (this.availableZoneList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

