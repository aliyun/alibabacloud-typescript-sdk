// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetQualityResultResponseBodyDataQualityResultResponseList } from "./GetQualityResultResponseBodyDataQualityResultResponseList";


export class GetQualityResultResponseBodyData extends $dara.Model {
  pageNo?: number;
  pageSize?: number;
  qualityResultResponseList?: GetQualityResultResponseBodyDataQualityResultResponseList[];
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qualityResultResponseList: 'QualityResultResponseList',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      qualityResultResponseList: { 'type': 'array', 'itemType': GetQualityResultResponseBodyDataQualityResultResponseList },
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.qualityResultResponseList)) {
      $dara.Model.validateArray(this.qualityResultResponseList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

