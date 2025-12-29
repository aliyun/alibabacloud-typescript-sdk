// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomQARequest extends $dara.Model {
  answers?: string[];
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
  keyWords?: string[];
  /**
   * @example
   * ***
   */
  majorQuestion?: string;
  supplementaryQuestions?: string[];
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      customQAId: 'CustomQAId',
      hotelId: 'HotelId',
      keyWords: 'KeyWords',
      majorQuestion: 'MajorQuestion',
      supplementaryQuestions: 'SupplementaryQuestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: { 'type': 'array', 'itemType': 'string' },
      customQAId: 'string',
      hotelId: 'string',
      keyWords: { 'type': 'array', 'itemType': 'string' },
      majorQuestion: 'string',
      supplementaryQuestions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.answers)) {
      $dara.Model.validateArray(this.answers);
    }
    if(Array.isArray(this.keyWords)) {
      $dara.Model.validateArray(this.keyWords);
    }
    if(Array.isArray(this.supplementaryQuestions)) {
      $dara.Model.validateArray(this.supplementaryQuestions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

