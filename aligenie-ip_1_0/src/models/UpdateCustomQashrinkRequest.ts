// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomQAShrinkRequest extends $dara.Model {
  answersShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  customQAId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  keyWordsShrink?: string;
  /**
   * @example
   * ***
   */
  majorQuestion?: string;
  supplementaryQuestionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      answersShrink: 'Answers',
      customQAId: 'CustomQAId',
      hotelId: 'HotelId',
      keyWordsShrink: 'KeyWords',
      majorQuestion: 'MajorQuestion',
      supplementaryQuestionsShrink: 'SupplementaryQuestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answersShrink: 'string',
      customQAId: 'string',
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

