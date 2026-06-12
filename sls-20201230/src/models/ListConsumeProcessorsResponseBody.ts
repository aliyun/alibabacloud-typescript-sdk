// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConsumeProcessor } from "./ConsumeProcessor";


export class ListConsumeProcessorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of consume processors returned in the current response.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The list of consume processors.
   */
  processors?: ConsumeProcessor[];
  /**
   * @remarks
   * The total number of consume processors that meet the query conditions.
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

