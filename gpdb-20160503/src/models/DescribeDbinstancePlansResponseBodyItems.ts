// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancePlansResponseBodyItemsPlanList } from "./DescribeDbinstancePlansResponseBodyItemsPlanList";


export class DescribeDBInstancePlansResponseBodyItems extends $dara.Model {
  planList?: DescribeDBInstancePlansResponseBodyItemsPlanList[];
  static names(): { [key: string]: string } {
    return {
      planList: 'PlanList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planList: { 'type': 'array', 'itemType': DescribeDBInstancePlansResponseBodyItemsPlanList },
    };
  }

  validate() {
    if(Array.isArray(this.planList)) {
      $dara.Model.validateArray(this.planList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

