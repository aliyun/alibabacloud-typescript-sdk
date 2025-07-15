// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRtcAsrTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the request. If success is returned, the request was successful. If an error message is returned, the request failed.
   * 
   * @example
   * success
   */
  description?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D8ADAB55-1BB8-5C01-8434-C45D353BB1FD
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code. HTTP status code 2000 indicates that the request was successful. Other HTTP status codes indicate that the request failed.
   * 
   * @example
   * 2000
   */
  retCode?: number;
  /**
   * @remarks
   * The results returned for the tasks.
   */
  tasks?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      requestId: 'RequestId',
      retCode: 'RetCode',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      requestId: 'string',
      retCode: 'number',
      tasks: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.tasks) {
      $dara.Model.validateMap(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

