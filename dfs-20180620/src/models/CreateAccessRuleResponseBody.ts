// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessRuleResponseBody extends $dara.Model {
  /**
   * @example
   * acr-c38028f0-f313-4385-9456-3501b1f5****
   */
  accessRuleId?: string;
  /**
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessRuleId: 'AccessRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRuleId: 'string',
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

