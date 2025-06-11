// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BeeBotAssociateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of a bot instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  chatBotInstanceId?: string;
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The ISV verification code, which is used to verify whether the user is authorized by ISV.
   * 
   * @example
   * ksiekdki39ksks93939
   */
  isvCode?: string;
  /**
   * @remarks
   * The list of codes for answers from different perspectives.
   */
  perspective?: string[];
  /**
   * @remarks
   * The number of recommended questions. The value ranges from 1 to 10.
   * 
   * @example
   * 3
   */
  recommendNum?: number;
  /**
   * @remarks
   * The ID of the session, which is used to identify the session and store context information in the session.
   * 
   * @example
   * 2334324234
   */
  sessionId?: string;
  /**
   * @remarks
   * The input of the visitor.
   * 
   * @example
   * hello
   */
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      chatBotInstanceId: 'ChatBotInstanceId',
      custSpaceId: 'CustSpaceId',
      isvCode: 'IsvCode',
      perspective: 'Perspective',
      recommendNum: 'RecommendNum',
      sessionId: 'SessionId',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatBotInstanceId: 'string',
      custSpaceId: 'string',
      isvCode: 'string',
      perspective: { 'type': 'array', 'itemType': 'string' },
      recommendNum: 'number',
      sessionId: 'string',
      utterance: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.perspective)) {
      $dara.Model.validateArray(this.perspective);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

