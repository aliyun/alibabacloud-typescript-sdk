// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceRecord } from "./ResourceRecord";


export class ListResourceRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of records returned.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The list of resource records.
   */
  items?: ResourceRecord[];
  /**
   * @remarks
   * The total number of records that match the specified conditions.
   * 
   * @example
   * 245
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      items: 'items',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      items: { 'type': 'array', 'itemType': ResourceRecord },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

