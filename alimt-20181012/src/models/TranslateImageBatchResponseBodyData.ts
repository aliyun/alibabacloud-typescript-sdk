// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranslateImageBatchResponseBodyData extends $dara.Model {
  /**
   * @example
   * EEA28E6D-4828-5031-BD8C-8FF1B3216842
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
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

