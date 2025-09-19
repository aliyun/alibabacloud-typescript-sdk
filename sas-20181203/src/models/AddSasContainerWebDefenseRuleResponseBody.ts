// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSasContainerWebDefenseRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique value of the created rule.
   * 
   * @example
   * 200634
   */
  data?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8B4B6E6D-B0B0-5F05-A14E-82917D9648EE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
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

