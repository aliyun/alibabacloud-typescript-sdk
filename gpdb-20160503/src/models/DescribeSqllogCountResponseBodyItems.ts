// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSQLLogCountResponseBodyItemsSeries } from "./DescribeSqllogCountResponseBodyItemsSeries";


export class DescribeSQLLogCountResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * gp-xxxxxxxx
   */
  name?: string;
  /**
   * @remarks
   * Details of the audit logs.
   */
  series?: DescribeSQLLogCountResponseBodyItemsSeries[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      series: { 'type': 'array', 'itemType': DescribeSQLLogCountResponseBodyItemsSeries },
    };
  }

  validate() {
    if(Array.isArray(this.series)) {
      $dara.Model.validateArray(this.series);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

