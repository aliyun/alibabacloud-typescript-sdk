// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYaoChiAgentRequest extends $dara.Model {
  /**
   * @remarks
   * Optional. The additional information, which is a JSON string.
   * 
   * @example
   * {}
   */
  extraInfo?: string;
  imageKeys?: string;
  /**
   * @remarks
   * The natural language description of the query.
   * 
   * This parameter is required.
   * 
   * @example
   * Are there any issues or abnormalities with my instance rm-xxx?
   */
  query?: string;
  /**
   * @remarks
   * Optional. The session ID, which is a UUID string. If this parameter is not specified, a new session is created. To maintain context in a conversation, use the same session ID.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-xxxxxxxxxxxx
   */
  sessionId?: string;
  /**
   * @remarks
   * Optional. The source cloud service. Specifies the cloud service to which the Q&A belongs. Default value: yaochi.
   * 
   * @example
   * yaochi
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      extraInfo: 'ExtraInfo',
      imageKeys: 'ImageKeys',
      query: 'Query',
      sessionId: 'SessionId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraInfo: 'string',
      imageKeys: 'string',
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

