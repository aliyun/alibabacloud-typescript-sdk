// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWafRulesetResponseBody extends $dara.Model {
  /**
   * @remarks
   * Ruleset ID.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
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

