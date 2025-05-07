// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTasksResponseBodyItemsTaskProgressInfo } from "./DescribeTasksResponseBodyItemsTaskProgressInfo";


export class DescribeTasksResponseBodyItems extends $dara.Model {
  taskProgressInfo?: DescribeTasksResponseBodyItemsTaskProgressInfo[];
  static names(): { [key: string]: string } {
    return {
      taskProgressInfo: 'TaskProgressInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskProgressInfo: { 'type': 'array', 'itemType': DescribeTasksResponseBodyItemsTaskProgressInfo },
    };
  }

  validate() {
    if(Array.isArray(this.taskProgressInfo)) {
      $dara.Model.validateArray(this.taskProgressInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

