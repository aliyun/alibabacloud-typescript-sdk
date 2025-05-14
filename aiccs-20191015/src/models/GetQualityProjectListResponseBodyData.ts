// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetQualityProjectListResponseBodyDataQualityProjectList } from "./GetQualityProjectListResponseBodyDataQualityProjectList";


export class GetQualityProjectListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  qualityProjectList?: GetQualityProjectListResponseBodyDataQualityProjectList[];
  /**
   * @example
   * 35
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qualityProjectList: 'QualityProjectList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      qualityProjectList: { 'type': 'array', 'itemType': GetQualityProjectListResponseBodyDataQualityProjectList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.qualityProjectList)) {
      $dara.Model.validateArray(this.qualityProjectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

