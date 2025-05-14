// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMultiDimTableRecordsRequestFilterConditions } from "./ListMultiDimTableRecordsRequestFilterConditions";


export class ListMultiDimTableRecordsRequestFilter extends $dara.Model {
  /**
   * @example
   * and
   */
  combination?: string;
  conditions?: ListMultiDimTableRecordsRequestFilterConditions[];
  static names(): { [key: string]: string } {
    return {
      combination: 'Combination',
      conditions: 'Conditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combination: 'string',
      conditions: { 'type': 'array', 'itemType': ListMultiDimTableRecordsRequestFilterConditions },
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

