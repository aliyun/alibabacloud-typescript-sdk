// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVccsResponseBodyContentData } from "./ListVccsResponseBodyContentData";


export class ListVccsResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun Connection Information List
   */
  data?: ListVccsResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListVccsResponseBodyContentData },
      total: 'number',
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

