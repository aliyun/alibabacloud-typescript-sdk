// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScanClusterVulsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 687C5BAA-D103-4993-884B-C35E4314A1E1
   */
  requestId?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * T-xascadasd*****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'request_id',
      taskId: 'task_id',
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

