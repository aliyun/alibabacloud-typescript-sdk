// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarAgentSessionStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The session ID, which is used to identify a visitor\\"s session and maintain context information. Usage notes: You can obtain this ID by calling the GetPolarAgent API and retrieving the SessionId field from the response. Note that GetPolarAgent requires Signature Version 3.0 and the SSE protocol. The ID must be in the standard UUID format, such as 1e28530a-0da2-c475-5f16-5b1b8b9a73c9.
   * 
   * This parameter is required.
   * 
   * @example
   * 1e28530a-0da2-c475-5f16-5b1b8b9a73c9
   */
  sessionId?: string;
  /**
   * @remarks
   * The product source. Valid values: polardb-console.
   * 
   * @example
   * polardb-console
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

