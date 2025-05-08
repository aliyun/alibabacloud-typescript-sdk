// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableStorageTypeAvailableDefaultStorageType } from "./DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableStorageTypeAvailableDefaultStorageType";
import { DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableStorageTypeAvailableSpecialStorageType } from "./DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableStorageTypeAvailableSpecialStorageType";


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

