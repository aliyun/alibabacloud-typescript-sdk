// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRefreshTasksResponseBodyTasksCDNTask } from "./DescribeRefreshTasksResponseBodyTasksCdntask";


export class DescribeRefreshTasksResponseBodyTasks extends $dara.Model {
  CDNTask?: DescribeRefreshTasksResponseBodyTasksCDNTask[];
  static names(): { [key: string]: string } {
    return {
      CDNTask: 'CDNTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CDNTask: { 'type': 'array', 'itemType': DescribeRefreshTasksResponseBodyTasksCDNTask },
    };
  }

  validate() {
    if(Array.isArray(this.CDNTask)) {
      $dara.Model.validateArray(this.CDNTask);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

