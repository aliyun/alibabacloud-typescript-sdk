// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYaoChiAgentRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  extraInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Are there any issues or abnormalities with my instance rm-xxx?
   */
  query?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-xxxxxxxxxxxx
   */
  sessionId?: string;
  /**
   * @example
   * yaochi
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

