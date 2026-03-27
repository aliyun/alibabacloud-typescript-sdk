// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RumDnsResponse extends $dara.Model {
  /**
   * @example
   * rum
   */
  domain?: string;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      message: 'message',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      message: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

