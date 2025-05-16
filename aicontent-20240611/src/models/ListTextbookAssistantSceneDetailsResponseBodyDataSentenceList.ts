// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantSceneDetailsResponseBodyDataSentenceList extends $dara.Model {
  sentenceAnalysis?: string;
  /**
   * @example
   * a774c6d09c4511eebe6e0c42a106bb02
   */
  sentenceId?: string;
  /**
   * @example
   * Is this your sister?
   */
  sentenceText?: string;
  static names(): { [key: string]: string } {
    return {
      sentenceAnalysis: 'sentenceAnalysis',
      sentenceId: 'sentenceId',
      sentenceText: 'sentenceText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sentenceAnalysis: 'string',
      sentenceId: 'string',
      sentenceText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

