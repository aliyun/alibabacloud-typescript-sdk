// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConsumeProcessor } from "./ConsumeProcessor";


export class ListConsumeProcessorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of consumption processors for offset.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The list of consumption processor information.
   */
  processors?: ConsumeProcessor[];
  /**
   * @remarks
   * The total number of consumption processors that meet the query conditions.
   * 
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      processors: 'processors',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      processors: { 'type': 'array', 'itemType': ConsumeProcessor },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.processors)) {
      $dara.Model.validateArray(this.processors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

