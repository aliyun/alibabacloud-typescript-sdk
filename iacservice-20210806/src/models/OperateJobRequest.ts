// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dasd
   */
  comment?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

