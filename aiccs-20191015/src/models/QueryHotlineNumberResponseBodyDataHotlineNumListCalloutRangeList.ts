// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeListGroupDOList } from "./QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeListGroupDolist";


export class QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeList extends $dara.Model {
  /**
   * @example
   * 2256****
   */
  departmentId?: number;
  departmentName?: string;
  groupDOList?: QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeListGroupDOList[];
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      departmentName: 'DepartmentName',
      groupDOList: 'GroupDOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'number',
      departmentName: 'string',
      groupDOList: { 'type': 'array', 'itemType': QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeListGroupDOList },
    };
  }

  validate() {
    if(Array.isArray(this.groupDOList)) {
      $dara.Model.validateArray(this.groupDOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

