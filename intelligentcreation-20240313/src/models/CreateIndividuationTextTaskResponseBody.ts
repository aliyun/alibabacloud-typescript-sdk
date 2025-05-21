// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndividuationTextTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 56AC346B-AF40-5E4F-AFFE-FD8BA5E6FB3A
   */
  requestId?: string;
  /**
   * @example
   * 837091359375048704
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskId: 'taskId',
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

