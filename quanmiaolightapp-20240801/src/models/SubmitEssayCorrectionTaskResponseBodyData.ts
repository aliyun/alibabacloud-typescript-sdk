// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitEssayCorrectionTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 3feb69ed02d9b1a17d0f1a942675d300
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

