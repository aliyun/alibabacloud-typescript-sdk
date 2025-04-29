// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTagMiningAnalysisTaskRequest extends $dara.Model {
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
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

