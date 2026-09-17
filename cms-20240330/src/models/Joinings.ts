// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JoinConditions } from "./JoinConditions";


export class Joinings extends $dara.Model {
  /**
   * @remarks
   * The list of join conditions for result sets. The conditions define the matching rules between multiple result sets and are used to merge query results from different data sources based on specified conditions.
   * 
   * @example
   * [{"leftField":"host","operator":"eq","rightField":"instance_id"}]
   */
  conditions?: JoinConditions[];
  /**
   * @remarks
   * The set operation type: InnerJoin / LeftJoin / RightJoin / FullJoin / LeftExclude / RightExclude / CrossJoin / NoJoin / Concat.
   * 
   * @example
   * INNER
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
      conditions: { 'type': 'array', 'itemType': JoinConditions },
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

