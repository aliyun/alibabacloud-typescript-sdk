// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRtcAsrTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the result. A value of \\`success\\` indicates that the call is successful. If the call fails, an error message is returned.
   * 
   * @example
   * success
   */
  description?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D8ADAB55-1BB8-5C01-8434-C45D353BB1FD
   */
  requestId?: string;
  /**
   * @remarks
   * The status code. A value of 2000 indicates that the call is successful. Other values indicate that an error occurred.
   * 
   * @example
   * 2000
   */
  retCode?: number;
  /**
   * @remarks
   * The result set of tasks.
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

