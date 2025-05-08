// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableDiskType } from "./DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableDiskType";
import { DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableRegion } from "./DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableRegion";
import { DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableSpec } from "./DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableSpec";
import { DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableStorageType } from "./DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableStorageType";


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

