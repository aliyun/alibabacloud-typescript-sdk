// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskFromResourceImportRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  exportTaskId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  exportVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      exportTaskId: 'exportTaskId',
      exportVersion: 'exportVersion',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      exportTaskId: 'string',
      exportVersion: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

