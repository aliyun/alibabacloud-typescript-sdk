// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShrinkClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CC9FEF89-9BE5-5E03-845E-238B48D7599B
   */
  requestId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * i159136551662516768776
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

