// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  flowName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      flowName: 'FlowName',
      scheduleName: 'ScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowName: 'string',
      scheduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

