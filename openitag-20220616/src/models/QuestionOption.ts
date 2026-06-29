// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuestionOption extends $dara.Model {
  /**
   * @remarks
   * List of child options.
   */
  children?: QuestionOption[];
  /**
   * @remarks
   * Color.
   * 
   * @example
   * #239125
   */
  color?: string;
  /**
   * @remarks
   * Tag Name.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  key?: string;
  /**
   * @remarks
   * Label display name.
   * 
   * This parameter is required.
   * 
   * @example
   * dog
   */
  label?: string;
  /**
   * @remarks
   * Remark.
   * 
   * @example
   * 第一道题目
   */
  remark?: string;
  /**
   * @remarks
   * Keyboard shortcut.
   * 
   * @example
   * 1
   */
  shortcut?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      color: 'Color',
      key: 'Key',
      label: 'Label',
      remark: 'Remark',
      shortcut: 'Shortcut',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': QuestionOption },
      color: 'string',
      key: 'string',
      label: 'string',
      remark: 'string',
      shortcut: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

