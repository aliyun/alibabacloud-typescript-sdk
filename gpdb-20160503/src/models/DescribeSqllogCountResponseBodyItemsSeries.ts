// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSQLLogCountResponseBodyItemsSeriesValues } from "./DescribeSqllogCountResponseBodyItemsSeriesValues";


export class DescribeSQLLogCountResponseBodyItemsSeries extends $dara.Model {
  /**
   * @remarks
   * Details of the audit logs.
   */
  values?: DescribeSQLLogCountResponseBodyItemsSeriesValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': DescribeSQLLogCountResponseBodyItemsSeriesValues },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

