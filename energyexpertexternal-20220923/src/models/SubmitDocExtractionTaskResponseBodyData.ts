// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDocExtractionTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 864773ec-d35b-4c36-8871-52d07fbe806d
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

