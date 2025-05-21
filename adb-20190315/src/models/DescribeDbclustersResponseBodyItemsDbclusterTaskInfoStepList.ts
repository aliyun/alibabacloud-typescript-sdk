// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepListStepList } from "./DescribeDbclustersResponseBodyItemsDbclusterTaskInfoStepListStepList";


export class DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepList extends $dara.Model {
  stepList?: DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepListStepList[];
  static names(): { [key: string]: string } {
    return {
      stepList: 'StepList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stepList: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepListStepList },
    };
  }

  validate() {
    if(Array.isArray(this.stepList)) {
      $dara.Model.validateArray(this.stepList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

