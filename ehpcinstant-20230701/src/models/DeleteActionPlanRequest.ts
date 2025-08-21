// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteActionPlanRequest extends $dara.Model {
  /**
   * @example
   * ap-hz036ubmx2qmw93k****
   */
  actionPlanId?: string;
  static names(): { [key: string]: string } {
    return {
      actionPlanId: 'ActionPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPlanId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

