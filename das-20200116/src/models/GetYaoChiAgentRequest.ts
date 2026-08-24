// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYaoChiAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The additional information in JSON string format. This parameter is optional.
   * 
   * @example
   * {}
   */
  extraInfo?: string;
  imageKeys?: string;
  /**
   * @remarks
   * The natural language description of the question.
   * 
   * This parameter is required.
   * 
   * @example
   * Are there any issues or abnormalities with my instance rm-xxx?
   */
  query?: string;
  /**
   * @remarks
   * The session ID in UUID string format. This parameter is optional. If you do not specify this parameter, a new session is created. To maintain context across a conversation, use the same session ID.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-xxxxxxxxxxxx
   */
  sessionId?: string;
  /**
   * @remarks
   * The cloud service source that specifies which cloud service the question belongs to. This parameter is optional. Default value: yaochi.
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

