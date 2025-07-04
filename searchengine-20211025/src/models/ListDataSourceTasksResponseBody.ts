// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataSourceTasksResponseBodyResult } from "./ListDataSourceTasksResponseBodyResult";


export class ListDataSourceTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * CC5EC8FA-5C0D-56AF-BEF4-6FCCEABD0511
   */
  requestId?: string;
  /**
   * @remarks
   * The index information.
   */
  result?: ListDataSourceTasksResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDataSourceTasksResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

