// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTailReportDetails extends $dara.Model {
  features?: { [key: string]: any };
  itemId?: string;
  targetProgress?: string;
  targetTraffic?: number;
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      itemId: 'ItemId',
      targetProgress: 'TargetProgress',
      targetTraffic: 'TargetTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      itemId: 'string',
      targetProgress: 'string',
      targetTraffic: 'number',
    };
  }

  validate() {
    if(this.features) {
      $dara.Model.validateMap(this.features);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

