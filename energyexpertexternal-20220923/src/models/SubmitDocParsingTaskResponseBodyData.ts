// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDocParsingTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * TaskID
   * 
   * @example
   * ae9d07be-1a11-4d30-be75-cc962b98279c
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

