// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTextTemplateResponseBodyAvailableIndustryTextModeTypesTextStyles extends $dara.Model {
  desc?: string;
  /**
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @example
   * RED_BOOK
   */
  name?: string;
  /**
   * @example
   * 111
   */
  templateKey?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      disabled: 'disabled',
      name: 'name',
      templateKey: 'templateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      disabled: 'boolean',
      name: 'string',
      templateKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

