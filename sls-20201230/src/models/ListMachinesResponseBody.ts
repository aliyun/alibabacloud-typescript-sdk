// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Machine } from "./Machine";


export class ListMachinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of machines that are returned on the current page.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The machines that are returned.
   */
  machines?: Machine[];
  /**
   * @remarks
   * The total number of machines.
   * 
   * @example
   * 8
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      machines: 'machines',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      machines: { 'type': 'array', 'itemType': Machine },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.machines)) {
      $dara.Model.validateArray(this.machines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

