// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLabelTablesResponseBodyLabelTables } from "./ListLabelTablesResponseBodyLabelTables";


export class ListLabelTablesResponseBody extends $dara.Model {
  labelTables?: ListLabelTablesResponseBodyLabelTables[];
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @example
   * 21
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      labelTables: 'LabelTables',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelTables: { 'type': 'array', 'itemType': ListLabelTablesResponseBodyLabelTables },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labelTables)) {
      $dara.Model.validateArray(this.labelTables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

