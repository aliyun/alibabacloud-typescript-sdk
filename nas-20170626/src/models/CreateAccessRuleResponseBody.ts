// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 1
   */
  accessRuleId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A323836B-5BC6-45A6-8048-60675C23****
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

