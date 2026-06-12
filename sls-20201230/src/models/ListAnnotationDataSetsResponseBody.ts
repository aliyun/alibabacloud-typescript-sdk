// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MLDataSetParam } from "./MldataSetParam";


export class ListAnnotationDataSetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of data that is returned.
   */
  data?: MLDataSetParam[];
  /**
   * @remarks
   * The total number of entries.
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
      data: { 'type': 'array', 'itemType': MLDataSetParam },
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

