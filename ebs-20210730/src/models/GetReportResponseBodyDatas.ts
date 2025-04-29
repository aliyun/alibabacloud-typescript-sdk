// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetReportResponseBodyDatasData } from "./GetReportResponseBodyDatasData";


export class GetReportResponseBodyDatas extends $dara.Model {
  /**
   * @remarks
   * Data.
   */
  data?: GetReportResponseBodyDatasData[];
  /**
   * @remarks
   * Data Title.
   * 
   * @example
   * disk_count_percent_by_category
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetReportResponseBodyDatasData },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

