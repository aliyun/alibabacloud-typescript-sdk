// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTargetsResponseBodyDataTargets } from "./ListTargetsResponseBodyDataTargets";


export class ListTargetsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * If excess return values exist, this parameter is returned.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The event targets.
   */
  targets?: ListTargetsResponseBodyDataTargets[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 18
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      targets: 'Targets',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      targets: { 'type': 'array', 'itemType': ListTargetsResponseBodyDataTargets },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

