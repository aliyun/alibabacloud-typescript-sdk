// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTextTemplateResponseBodyAvailableIndustryTextModeTypes } from "./GetTextTemplateResponseBodyAvailableIndustryTextModeTypes";


export class GetTextTemplateResponseBodyAvailableIndustry extends $dara.Model {
  /**
   * @example
   * Car
   */
  name?: string;
  textModeTypes?: GetTextTemplateResponseBodyAvailableIndustryTextModeTypes[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      textModeTypes: 'textModeTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      textModeTypes: { 'type': 'array', 'itemType': GetTextTemplateResponseBodyAvailableIndustryTextModeTypes },
    };
  }

  validate() {
    if(Array.isArray(this.textModeTypes)) {
      $dara.Model.validateArray(this.textModeTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

