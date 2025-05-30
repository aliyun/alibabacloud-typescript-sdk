// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUrgentDemandItemListResponseBodyDataRecordsUrgentDemandEcsRequest extends $dara.Model {
  commodityCode?: string;
  commodityNum?: number;
  commodityTypeCode?: string;
  itemId?: number;
  vcpuCount?: number;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'commodityCode',
      commodityNum: 'commodityNum',
      commodityTypeCode: 'commodityTypeCode',
      itemId: 'itemId',
      vcpuCount: 'vcpuCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityNum: 'number',
      commodityTypeCode: 'string',
      itemId: 'number',
      vcpuCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

