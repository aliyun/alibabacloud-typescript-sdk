// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableDiskType extends $dara.Model {
  diskName?: string;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      diskName: 'DiskName',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskName: 'string',
      diskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableRegion extends $dara.Model {
  area?: string;
  city?: string;
  country?: string;
  ensRegionId?: string;
  ensRegionName?: string;
  isp?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      city: 'City',
      country: 'Country',
      ensRegionId: 'EnsRegionId',
      ensRegionName: 'EnsRegionName',
      isp: 'Isp',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      city: 'string',
      country: 'string',
      ensRegionId: 'string',
      ensRegionName: 'string',
      isp: 'string',
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableSpec extends $dara.Model {
  cores?: string;
  memory?: string;
  specName?: string;
  specValue?: string;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      memory: 'Memory',
      specName: 'SpecName',
      specValue: 'SpecValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'string',
      memory: 'string',
      specName: 'string',
      specValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableStorageTypeAvailableDefaultStorageType extends $dara.Model {
  storageName?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      storageName: 'StorageName',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageName: 'string',
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

export class DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableStorageTypeAvailableSpecialStorageType extends $dara.Model {
  storageType?: string;
  storageName?: string;
  ensRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      storageType: 'StorageType',
      storageName: 'StorageName',
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageType: 'string',
      storageName: 'string',
      ensRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableStorageType extends $dara.Model {
  availableDefaultStorageType?: DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableStorageTypeAvailableDefaultStorageType[];
  availableSpecialStorageType?: DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableStorageTypeAvailableSpecialStorageType[][];
  static names(): { [key: string]: string } {
    return {
      availableDefaultStorageType: 'AvailableDefaultStorageType',
      availableSpecialStorageType: 'AvailableSpecialStorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableDefaultStorageType: { 'type': 'array', 'itemType': DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableStorageTypeAvailableDefaultStorageType },
      availableSpecialStorageType: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableStorageTypeAvailableSpecialStorageType } },
    };
  }

  validate() {
    if(Array.isArray(this.availableDefaultStorageType)) {
      $dara.Model.validateArray(this.availableDefaultStorageType);
    }
    if(Array.isArray(this.availableSpecialStorageType)) {
      $dara.Model.validateArray(this.availableSpecialStorageType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResource extends $dara.Model {
  availableDiskType?: DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableDiskType[];
  availableRegion?: DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableRegion[];
  availableSpec?: DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableSpec[];
  availableStorageType?: DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableStorageType;
  commodityCode?: string;
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      availableDiskType: 'AvailableDiskType',
      availableRegion: 'AvailableRegion',
      availableSpec: 'AvailableSpec',
      availableStorageType: 'AvailableStorageType',
      commodityCode: 'CommodityCode',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableDiskType: { 'type': 'array', 'itemType': DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableDiskType },
      availableRegion: { 'type': 'array', 'itemType': DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableRegion },
      availableSpec: { 'type': 'array', 'itemType': DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableSpec },
      availableStorageType: DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableStorageType,
      commodityCode: 'string',
      orderType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableDiskType)) {
      $dara.Model.validateArray(this.availableDiskType);
    }
    if(Array.isArray(this.availableRegion)) {
      $dara.Model.validateArray(this.availableRegion);
    }
    if(Array.isArray(this.availableSpec)) {
      $dara.Model.validateArray(this.availableSpec);
    }
    if(this.availableStorageType && typeof (this.availableStorageType as any).validate === 'function') {
      (this.availableStorageType as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsSaleControlAvailableResourceResponseBody extends $dara.Model {
  requestId?: string;
  saleControlAvailableResource?: DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResource[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      saleControlAvailableResource: 'SaleControlAvailableResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      saleControlAvailableResource: { 'type': 'array', 'itemType': DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResource },
    };
  }

  validate() {
    if(Array.isArray(this.saleControlAvailableResource)) {
      $dara.Model.validateArray(this.saleControlAvailableResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

