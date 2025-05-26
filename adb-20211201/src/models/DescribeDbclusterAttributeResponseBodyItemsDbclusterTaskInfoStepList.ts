// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterAttributeResponseBodyItemsDBClusterTaskInfoStepListStepList } from "./DescribeDbclusterAttributeResponseBodyItemsDbclusterTaskInfoStepListStepList";


export class DescribeDBClusterAttributeResponseBodyItemsDBClusterTaskInfoStepList extends $dara.Model {
  stepList?: DescribeDBClusterAttributeResponseBodyItemsDBClusterTaskInfoStepListStepList[];
  static names(): { [key: string]: string } {
    return {
      stepList: 'StepList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stepList: { 'type': 'array', 'itemType': DescribeDBClusterAttributeResponseBodyItemsDBClusterTaskInfoStepListStepList },
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

