// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuestionOption } from "./QuestionOption";


export class QuestionPlugin extends $dara.Model {
  /**
   * @remarks
   * Whether it can be selected
   * 
   * @example
   * False
   */
  canSelect?: boolean;
  /**
   * @remarks
   * List of child widgets
   */
  children?: QuestionPlugin[];
  /**
   * @remarks
   * Default result
   * 
   * @example
   * 1
   */
  defaultResult?: string;
  /**
   * @remarks
   * Whether it is displayed
   * 
   * This parameter is required.
   * 
   * @example
   * True
   */
  display?: boolean;
  /**
   * @remarks
   * Additional remarks
   * 
   * @example
   * false
   */
  exif?: { [key: string]: any };
  /**
   * @remarks
   * Keyboard shortcut map
   * 
   * @example
   * ""
   */
  hotKeyMap?: string;
  /**
   * @remarks
   * Widget title
   * 
   * This parameter is required.
   * 
   * @example
   * 内部单选
   */
  markTitle?: string;
  /**
   * @remarks
   * Question alias
   * 
   * @example
   * 单选
   */
  markTitleAlias?: string;
  /**
   * @remarks
   * Whether it is required
   * 
   * This parameter is required.
   * 
   * @example
   * False
   */
  mustFill?: boolean;
  /**
   * @remarks
   * List of options configuration
   * 
   * This parameter is required.
   */
  options?: QuestionOption[];
  /**
   * @remarks
   * List of predefined options for fill-in-the-blank questions
   */
  preOptions?: string[];
  /**
   * @remarks
   * Question widget ID
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  questionId?: string;
  /**
   * @remarks
   * Regular expression, validation rule
   * 
   * @example
   * ""
   */
  rule?: string;
  /**
   * @remarks
   * Selection group
   * 
   * @example
   * g1
   */
  selectGroup?: string;
  /**
   * @remarks
   * Whether it is selected
   * 
   * @example
   * False
   */
  selected?: boolean;
  /**
   * @remarks
   * Widget type
   * 
   * This parameter is required.
   * 
   * @example
   * RADIO
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      canSelect: 'CanSelect',
      children: 'Children',
      defaultResult: 'DefaultResult',
      display: 'Display',
      exif: 'Exif',
      hotKeyMap: 'HotKeyMap',
      markTitle: 'MarkTitle',
      markTitleAlias: 'MarkTitleAlias',
      mustFill: 'MustFill',
      options: 'Options',
      preOptions: 'PreOptions',
      questionId: 'QuestionId',
      rule: 'Rule',
      selectGroup: 'SelectGroup',
      selected: 'Selected',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSelect: 'boolean',
      children: { 'type': 'array', 'itemType': QuestionPlugin },
      defaultResult: 'string',
      display: 'boolean',
      exif: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      hotKeyMap: 'string',
      markTitle: 'string',
      markTitleAlias: 'string',
      mustFill: 'boolean',
      options: { 'type': 'array', 'itemType': QuestionOption },
      preOptions: { 'type': 'array', 'itemType': 'string' },
      questionId: 'string',
      rule: 'string',
      selectGroup: 'string',
      selected: 'boolean',
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

