// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateActionPlanResponseBody extends $dara.Model {
  /**
   * @example
   * ap-hz036ubmx2qmw93k****
   */
  actionPlanId?: string;
  /**
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      actionPlanId: 'ActionPlanId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPlanId: 'string',
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

