// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppliedScheduledPlanRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5737ef81-d2f1-49cf-8752-30910809****
   */
  deploymentId?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'deploymentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

