// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolarAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The additional information. The value is a JSON string.
   * 
   * @example
   * {}
   */
  extraInfo?: string;
  /**
   * @remarks
   * The session query. You can obtain this value from the response of the Start a digital human API.
   * 
   * This parameter is required.
   * 
   * @example
   * c4d242f3-c909-4846-91d9-f84c238a9820
   */
  query?: string;
  /**
   * @remarks
   * The session ID. You can obtain this value from the response of the Start a digital human API.
   * 
   * @example
   * c4d242f3-c909-4846-91d9-f84c238a9820
   */
  sessionId?: string;
  /**
   * @remarks
   * The product type source. Valid values: polardb-console.
   * 
   * @example
   * polardb-console
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      extraInfo: 'ExtraInfo',
      query: 'Query',
      sessionId: 'SessionId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraInfo: 'string',
      query: 'string',
      sessionId: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

