// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVLExtractionTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 411ce93a-7eb5-40cf-836a-53c32f097663
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

