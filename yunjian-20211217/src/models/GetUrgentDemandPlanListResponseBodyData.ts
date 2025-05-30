// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUrgentDemandPlanListResponseBodyDataRecords } from "./GetUrgentDemandPlanListResponseBodyDataRecords";


export class GetUrgentDemandPlanListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 2
   */
  pages?: number;
  records?: GetUrgentDemandPlanListResponseBodyDataRecords[];
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * 15
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      pages: 'pages',
      records: 'records',
      size: 'size',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      pages: 'number',
      records: { 'type': 'array', 'itemType': GetUrgentDemandPlanListResponseBodyDataRecords },
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

