// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantSceneDetailsResponseBodyDataWordList extends $dara.Model {
  wordAnalysis?: string;
  /**
   * @example
   * a94c3337ed8c11eebe6e0c42a106bb02
   */
  wordId?: string;
  /**
   * @example
   * family
   */
  wordText?: string;
  static names(): { [key: string]: string } {
    return {
      wordAnalysis: 'wordAnalysis',
      wordId: 'wordId',
      wordText: 'wordText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wordAnalysis: 'string',
      wordId: 'string',
      wordText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

