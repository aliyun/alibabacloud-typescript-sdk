// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteAggregatorsResponseBodyOperateAggregatorsResultOperateAggregators } from "./DeleteAggregatorsResponseBodyOperateAggregatorsResultOperateAggregators";


export class DeleteAggregatorsResponseBodyOperateAggregatorsResult extends $dara.Model {
  /**
   * @remarks
   * The details of the account group.
   */
  operateAggregators?: DeleteAggregatorsResponseBodyOperateAggregatorsResultOperateAggregators[];
  static names(): { [key: string]: string } {
    return {
      operateAggregators: 'OperateAggregators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateAggregators: { 'type': 'array', 'itemType': DeleteAggregatorsResponseBodyOperateAggregatorsResultOperateAggregators },
    };
  }

  validate() {
    if(Array.isArray(this.operateAggregators)) {
      $dara.Model.validateArray(this.operateAggregators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

