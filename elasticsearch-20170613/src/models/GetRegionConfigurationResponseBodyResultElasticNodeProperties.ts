// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRegionConfigurationResponseBodyResultElasticNodePropertiesAmountRange } from "./GetRegionConfigurationResponseBodyResultElasticNodePropertiesAmountRange";
import { GetRegionConfigurationResponseBodyResultElasticNodePropertiesDiskList } from "./GetRegionConfigurationResponseBodyResultElasticNodePropertiesDiskList";


export class GetRegionConfigurationResponseBodyResultElasticNodeProperties extends $dara.Model {
  amountRange?: GetRegionConfigurationResponseBodyResultElasticNodePropertiesAmountRange;
  diskList?: GetRegionConfigurationResponseBodyResultElasticNodePropertiesDiskList[];
  spec?: string[];
  static names(): { [key: string]: string } {
    return {
      amountRange: 'amountRange',
      diskList: 'diskList',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountRange: GetRegionConfigurationResponseBodyResultElasticNodePropertiesAmountRange,
      diskList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultElasticNodePropertiesDiskList },
      spec: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.amountRange && typeof (this.amountRange as any).validate === 'function') {
      (this.amountRange as any).validate();
    }
    if(Array.isArray(this.diskList)) {
      $dara.Model.validateArray(this.diskList);
    }
    if(Array.isArray(this.spec)) {
      $dara.Model.validateArray(this.spec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

