// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunClusterInspectResponseBody extends $dara.Model {
  /**
   * @example
   * 5d6557c983064c45bed62ab2a2119cc7
   */
  reportId?: string;
  /**
   * @example
   * 0AB4D067-4DD7-5471-B90A-FCC564BC3337
   */
  requestId?: string;
  /**
   * @example
   * T-67d7ec016ce37c0106000***
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      reportId: 'reportId',
      requestId: 'requestId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
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

