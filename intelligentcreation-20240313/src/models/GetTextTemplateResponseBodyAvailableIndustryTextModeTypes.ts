// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTextTemplateResponseBodyAvailableIndustryTextModeTypesTextStyles } from "./GetTextTemplateResponseBodyAvailableIndustryTextModeTypesTextStyles";


export class GetTextTemplateResponseBodyAvailableIndustryTextModeTypes extends $dara.Model {
  /**
   * @example
   * Rewrite
   */
  name?: string;
  textStyles?: GetTextTemplateResponseBodyAvailableIndustryTextModeTypesTextStyles[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      textStyles: 'textStyles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      textStyles: { 'type': 'array', 'itemType': GetTextTemplateResponseBodyAvailableIndustryTextModeTypesTextStyles },
    };
  }

  validate() {
    if(Array.isArray(this.textStyles)) {
      $dara.Model.validateArray(this.textStyles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

