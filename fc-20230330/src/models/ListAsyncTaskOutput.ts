// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AsyncTask } from "./AsyncTask";


export class ListAsyncTaskOutput extends $dara.Model {
  nextToken?: string;
  tasks?: AsyncTask[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      tasks: 'tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      tasks: { 'type': 'array', 'itemType': AsyncTask },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

