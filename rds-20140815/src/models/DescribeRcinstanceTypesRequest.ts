// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceTypesRequest extends $dara.Model {
  commodityCode?: string;
  engine?: string;
  instanceType?: string[];
  instanceTypeFamily?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      engine: 'Engine',
      instanceType: 'InstanceType',
      instanceTypeFamily: 'InstanceTypeFamily',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      engine: 'string',
      instanceType: { 'type': 'array', 'itemType': 'string' },
      instanceTypeFamily: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceType)) {
      $dara.Model.validateArray(this.instanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

