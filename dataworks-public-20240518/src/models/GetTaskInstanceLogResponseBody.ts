// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskInstanceLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The run log of the instance.
   * 
   * @example
   * This is running log
   */
  taskInstanceLog?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInstanceLog: 'TaskInstanceLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInstanceLog: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

