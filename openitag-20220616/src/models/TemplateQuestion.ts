// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuestionOption } from "./QuestionOption";


export class TemplateQuestion extends $dara.Model {
  /**
   * @remarks
   * List of child nodes
   */
  children?: TemplateQuestion[];
  /**
   * @remarks
   * Additional properties
   * 
   * @example
   * null
   */
  exif?: { [key: string]: any };
  /**
   * @remarks
   * Title
   * 
   * @example
   * 题目1
   */
  markTitle?: string;
  /**
   * @remarks
   * List of options
   */
  options?: QuestionOption[];
  /**
   * @remarks
   * List of pre-filled values
   */
  preOptions?: string[];
  /**
   * @remarks
   * Question ID
   * 
   * @example
   * 1
   */
  questionId?: number;
  /**
   * @remarks
   * Type, including the following:  
   * - TEXT_EDIT  
   * - CHECKBOX  
   * - INPUT  
   * - PICTURE  
   * - VIDEO  
   * - OPEN_ENDED  
   * - SLOT  
   * - RADIO
   * 
   * @example
   * RADIO
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      exif: 'Exif',
      markTitle: 'MarkTitle',
      options: 'Options',
      preOptions: 'PreOptions',
      questionId: 'QuestionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': TemplateQuestion },
      exif: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      markTitle: 'string',
      options: { 'type': 'array', 'itemType': QuestionOption },
      preOptions: { 'type': 'array', 'itemType': 'string' },
      questionId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    if(this.exif) {
      $dara.Model.validateMap(this.exif);
    }
    if(Array.isArray(this.options)) {
      $dara.Model.validateArray(this.options);
    }
    if(Array.isArray(this.preOptions)) {
      $dara.Model.validateArray(this.preOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

