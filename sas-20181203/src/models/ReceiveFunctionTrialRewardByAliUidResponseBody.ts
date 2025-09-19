// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReceiveFunctionTrialRewardByAliUidResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 94004FDB-27EC-5666-83D4-D0C5C624****
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

