// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScheduledPlanExecutedStatus extends $dara.Model {
  /**
   * @example
   * HOT_UPDATE
   */
  restartType?: string;
  /**
   * @example
   * UPGRADED
   */
  statusState?: string;
  static names(): { [key: string]: string } {
    return {
      restartType: 'restartType',
      statusState: 'statusState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restartType: 'string',
      statusState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

