// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateActionPlanRequest extends $dara.Model {
  /**
   * @example
   * ap-hz036ubmx2qmw93k****
   */
  actionPlanId?: string;
  /**
   * @example
   * 1000
   */
  desiredCapacity?: number;
  /**
   * @example
   * true
   */
  enabled?: string;
  static names(): { [key: string]: string } {
    return {
      actionPlanId: 'ActionPlanId',
      desiredCapacity: 'DesiredCapacity',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPlanId: 'string',
      desiredCapacity: 'number',
      enabled: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

