// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudBenchTasksResponseBodyDataListCloudbenchTasks } from "./DescribeCloudBenchTasksResponseBodyDataListCloudbenchTasks";


export class DescribeCloudBenchTasksResponseBodyDataList extends $dara.Model {
  cloudbenchTasks?: DescribeCloudBenchTasksResponseBodyDataListCloudbenchTasks[];
  static names(): { [key: string]: string } {
    return {
      cloudbenchTasks: 'cloudbenchTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudbenchTasks: { 'type': 'array', 'itemType': DescribeCloudBenchTasksResponseBodyDataListCloudbenchTasks },
    };
  }

  validate() {
    if(Array.isArray(this.cloudbenchTasks)) {
      $dara.Model.validateArray(this.cloudbenchTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

