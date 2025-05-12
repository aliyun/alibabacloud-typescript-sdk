// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVccFlowInfosResponseBodyContentData } from "./ListVccFlowInfosResponseBodyContentData";


export class ListVccFlowInfosResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun Connection Traffic Information
   */
  data?: ListVccFlowInfosResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
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
      data: { 'type': 'array', 'itemType': ListVccFlowInfosResponseBodyContentData },
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

