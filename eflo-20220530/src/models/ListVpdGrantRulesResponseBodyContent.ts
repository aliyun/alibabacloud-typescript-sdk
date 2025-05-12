// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVpdGrantRulesResponseBodyContentData } from "./ListVpdGrantRulesResponseBodyContentData";


export class ListVpdGrantRulesResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun CIDR block authorization information list
   */
  data?: ListVpdGrantRulesResponseBodyContentData[];
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
      data: { 'type': 'array', 'itemType': ListVpdGrantRulesResponseBodyContentData },
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

