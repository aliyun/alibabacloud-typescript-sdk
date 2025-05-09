// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 123123
   */
  id?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A6C6B486-E3A2-5D52-9E76-D9380485D946
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

