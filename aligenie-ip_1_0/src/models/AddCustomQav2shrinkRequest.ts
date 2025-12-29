// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCustomQAV2ShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  answersShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  keyWordsShrink?: string;
  majorQuestion?: string;
  supplementaryQuestionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      answersShrink: 'Answers',
      hotelId: 'HotelId',
      keyWordsShrink: 'KeyWords',
      majorQuestion: 'MajorQuestion',
      supplementaryQuestionsShrink: 'SupplementaryQuestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answersShrink: 'string',
      hotelId: 'string',
      keyWordsShrink: 'string',
      majorQuestion: 'string',
      supplementaryQuestionsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

