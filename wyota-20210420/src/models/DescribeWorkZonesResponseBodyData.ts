// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWorkZonesResponseBodyDataWorkZoneDTOList } from "./DescribeWorkZonesResponseBodyDataWorkZoneDtolist";


export class DescribeWorkZonesResponseBodyData extends $dara.Model {
  totalCount?: number;
  workZoneDTOList?: DescribeWorkZonesResponseBodyDataWorkZoneDTOList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      workZoneDTOList: 'WorkZoneDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      workZoneDTOList: { 'type': 'array', 'itemType': DescribeWorkZonesResponseBodyDataWorkZoneDTOList },
    };
  }

  validate() {
    if(Array.isArray(this.workZoneDTOList)) {
      $dara.Model.validateArray(this.workZoneDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

