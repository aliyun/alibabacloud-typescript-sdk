// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVideoAnalysisTaskResponseBodyData extends $dara.Model {
  taskErrorMessage?: string;
  /**
   * @example
   * 3feb69ed02d9b1a17d0f1a942675d300
   */
  taskId?: string;
  /**
   * @example
   * CANCELED
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      taskErrorMessage: 'taskErrorMessage',
      taskId: 'taskId',
      taskStatus: 'taskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskErrorMessage: 'string',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

