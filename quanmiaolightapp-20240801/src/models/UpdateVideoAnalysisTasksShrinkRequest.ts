// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVideoAnalysisTasksShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  taskIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CANCELED
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      taskIdsShrink: 'taskIds',
      taskStatus: 'taskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIdsShrink: 'string',
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

