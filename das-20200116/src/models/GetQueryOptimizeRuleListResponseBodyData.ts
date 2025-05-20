// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetQueryOptimizeRuleListResponseBodyDataList } from "./GetQueryOptimizeRuleListResponseBodyDataList";


export class GetQueryOptimizeRuleListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  extra?: string;
  /**
   * @remarks
   * The information about tags.
   */
  list?: GetQueryOptimizeRuleListResponseBodyDataList[];
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  pageNo?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      list: { 'type': 'array', 'itemType': GetQueryOptimizeRuleListResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

