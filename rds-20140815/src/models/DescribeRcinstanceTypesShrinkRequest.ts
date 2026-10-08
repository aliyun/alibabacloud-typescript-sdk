// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceTypesShrinkRequest extends $dara.Model {
  commodityCode?: string;
  engine?: string;
  instanceTypeShrink?: string;
  instanceTypeFamily?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      engine: 'Engine',
      instanceTypeShrink: 'InstanceType',
      instanceTypeFamily: 'InstanceTypeFamily',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      engine: 'string',
      instanceTypeShrink: 'string',
      instanceTypeFamily: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

