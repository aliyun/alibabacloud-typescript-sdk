// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgOneKeyDeleteTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  agAccountType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mpk?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pk?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agAccountType: 'AgAccountType',
      appName: 'AppName',
      mpk: 'Mpk',
      pk: 'Pk',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agAccountType: 'string',
      appName: 'string',
      mpk: 'string',
      pk: 'string',
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

