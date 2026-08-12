// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SlsJoinCondition } from "./SlsJoinCondition";


export class SlsQueryJoin extends $dara.Model {
  /**
   * @remarks
   * The list of join conditions.
   */
  conditions?: SlsJoinCondition[];
  /**
   * @remarks
   * The set operation type. Valid values: InnerJoin, LeftJoin, RightJoin, FullJoin, LeftExclude, RightExclude, CrossJoin, NoJoin, and Concat.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': SlsJoinCondition },
      type: 'string',
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

