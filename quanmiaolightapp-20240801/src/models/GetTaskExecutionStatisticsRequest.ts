// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskExecutionStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EssayCorrectionTask
   */
  taskCode?: string;
  static names(): { [key: string]: string } {
    return {
      taskCode: 'taskCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

