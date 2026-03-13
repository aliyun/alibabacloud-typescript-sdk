// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AsyncTask } from "./AsyncTask";


export class ListAsyncTaskOutput extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  /**
   * @remarks
   * The asynchronous tasks.
   */
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

