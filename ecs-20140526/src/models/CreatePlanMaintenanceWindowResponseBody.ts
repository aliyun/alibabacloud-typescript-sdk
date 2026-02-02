// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePlanMaintenanceWindowResponseBody extends $dara.Model {
  /**
   * @example
   * pw-bp1a9yavgq3dgttvowun
   */
  planWindowId?: string;
  /**
   * @example
   * 7D5B1188-3F08-56D1-A6B2-91B267452633
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      planWindowId: 'PlanWindowId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planWindowId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

