// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetHttpDDoSAttackRuleStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F7B84CF8-F8A4-53F8-9B91-2643FD72042B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

