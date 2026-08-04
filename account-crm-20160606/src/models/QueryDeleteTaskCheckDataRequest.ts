// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDeleteTaskCheckDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  agAccountType?: string;
  appName?: string;
  longLang?: string;
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
  /**
   * @remarks
   * This parameter is required.
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      agAccountType: 'AgAccountType',
      appName: 'AppName',
      longLang: 'LongLang',
      mpk: 'Mpk',
      pk: 'Pk',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agAccountType: 'string',
      appName: 'string',
      longLang: 'string',
      mpk: 'string',
      pk: 'string',
      taskId: 'string',
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

