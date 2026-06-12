// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MLDataParam } from "./MldataParam";


export class ListAnnotationDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of data records.
   */
  data?: MLDataParam[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': MLDataParam },
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

