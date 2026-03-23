// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorysSupportedStorageTypes extends $dara.Model {
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorys extends $dara.Model {
  category?: string;
  supportedStorageTypes?: DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorysSupportedStorageTypes[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      supportedStorageTypes: 'SupportedStorageTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      supportedStorageTypes: { 'type': 'array', 'itemType': DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorysSupportedStorageTypes },
    };
  }

  validate() {
    if(Array.isArray(this.supportedStorageTypes)) {
      $dara.Model.validateArray(this.supportedStorageTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersions extends $dara.Model {
  supportedCategorys?: DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorys[];
  version?: string;
  static names(): { [key: string]: string } {
    return {
      supportedCategorys: 'SupportedCategorys',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedCategorys: { 'type': 'array', 'itemType': DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorys },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedCategorys)) {
      $dara.Model.validateArray(this.supportedCategorys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableZonesResponseBodyAvailableZonesSupportedEngines extends $dara.Model {
  engine?: string;
  supportedEngineVersions?: DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersions[];
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      supportedEngineVersions: 'SupportedEngineVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      supportedEngineVersions: { 'type': 'array', 'itemType': DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersions },
    };
  }

  validate() {
    if(Array.isArray(this.supportedEngineVersions)) {
      $dara.Model.validateArray(this.supportedEngineVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableZonesResponseBodyAvailableZones extends $dara.Model {
  regionId?: string;
  supportedEngines?: DescribeAvailableZonesResponseBodyAvailableZonesSupportedEngines[];
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      supportedEngines: 'SupportedEngines',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      supportedEngines: { 'type': 'array', 'itemType': DescribeAvailableZonesResponseBodyAvailableZonesSupportedEngines },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedEngines)) {
      $dara.Model.validateArray(this.supportedEngines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableZonesResponseBody extends $dara.Model {
  availableZones?: DescribeAvailableZonesResponseBodyAvailableZones[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: { 'type': 'array', 'itemType': DescribeAvailableZonesResponseBodyAvailableZones },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableZones)) {
      $dara.Model.validateArray(this.availableZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

