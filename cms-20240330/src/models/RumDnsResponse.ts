// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RumDnsResponse extends $dara.Model {
  /**
   * @remarks
   * The domain name for RUM reporting.
   * 
   * @example
   * rum
   */
  domain?: string;
  /**
   * @remarks
   * The message returned if initialization fails.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * The DNS initialization status of the domain name.
   * 
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

