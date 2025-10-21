// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduledPlanExecutedHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 58718c99-3b29-4c5e-93bb-c9fc4ec6****
   */
  deploymentId?: string;
  /**
   * @example
   * SCHEDULED_PLAN
   */
  origin?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'deploymentId',
      origin: 'origin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      origin: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

