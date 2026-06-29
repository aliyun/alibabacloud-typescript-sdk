// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuestionOption } from "./QuestionOption";


export class TaskTemplateOptionConfig extends $dara.Model {
  /**
   * @remarks
   * The default value must be adapted according to the question type. For a Radio or text box question, directly enter the tag value. For a Multiple Choice question, configure it as ["{tag 1}", "{tag 2}"].
   * 
   * @example
   * 猫咪
   * 
   * **if can be null:**
   * false
   */
  defaultResult?: string;
  /**
   * @remarks
   * Select the list of question options.
   * 
   * **if can be null:**
   * false
   */
  options?: QuestionOption[];
  /**
   * @remarks
   * List of preset options for text-type questions.
   * 
   * **if can be null:**
   * false
   */
  preOptions?: string[];
  /**
   * @remarks
   * Validation rule item; valid only for fill-in-the-blank text-type questions.
   * 
   * @example
   * \\w+
   * 
   * **if can be null:**
   * false
   */
  rule?: string;
  static names(): { [key: string]: string } {
    return {
      defaultResult: 'DefaultResult',
      options: 'Options',
      preOptions: 'PreOptions',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResult: 'string',
      options: { 'type': 'array', 'itemType': QuestionOption },
      preOptions: { 'type': 'array', 'itemType': 'string' },
      rule: 'string',
    };
  }

  validate() {
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

