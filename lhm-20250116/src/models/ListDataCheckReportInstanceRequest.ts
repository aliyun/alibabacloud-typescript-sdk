// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCheckReportInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The check task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

