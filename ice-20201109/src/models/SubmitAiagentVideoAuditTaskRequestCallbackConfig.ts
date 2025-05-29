// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIAgentVideoAuditTaskRequestCallbackConfig extends $dara.Model {
  /**
   * @example
   * Bearer Token
   */
  token?: string;
  /**
   * @example
   * https://yourcallback
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

