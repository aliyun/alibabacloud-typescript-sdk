// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationTokenResponseBodyApplicationTokens extends $dara.Model {
  /**
   * @remarks
   * The application token.
   * 
   * @example
   * SATFwqX8zxGf83pJcJw78KFGjmrft4erWeZYBGS8oE7NN6qoE217yaJpUdMb1UuuGqhDiF43sCA4CF91CTL5iGntqwyLuaAcS9FJ9HfGadE5a7TjiwVafwrBYkt3XXX
   */
  applicationToken?: string;
  /**
   * @remarks
   * The application token ID.
   * 
   * @example
   * token_ndfxxigahelfne2y2hodehrxxxx
   */
  applicationTokenId?: string;
  /**
   * @remarks
   * The application token type.
   * 
   * @example
   * bearer_token
   */
  applicationTokenType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationToken: 'ApplicationToken',
      applicationTokenId: 'ApplicationTokenId',
      applicationTokenType: 'ApplicationTokenType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationToken: 'string',
      applicationTokenId: 'string',
      applicationTokenType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application token.
   */
  applicationTokens?: CreateApplicationTokenResponseBodyApplicationTokens;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationTokens: 'ApplicationTokens',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationTokens: CreateApplicationTokenResponseBodyApplicationTokens,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationTokens && typeof (this.applicationTokens as any).validate === 'function') {
      (this.applicationTokens as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

