// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSnLabelCountsResponseBodyDataLabelCountDTOList } from "./DescribeSnLabelCountsResponseBodyDataLabelCountDtolist";


export class DescribeSnLabelCountsResponseBodyData extends $dara.Model {
  labelCountDTOList?: DescribeSnLabelCountsResponseBodyDataLabelCountDTOList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      labelCountDTOList: 'LabelCountDTOList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelCountDTOList: { 'type': 'array', 'itemType': DescribeSnLabelCountsResponseBodyDataLabelCountDTOList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labelCountDTOList)) {
      $dara.Model.validateArray(this.labelCountDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

