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

export class GetTextTemplateResponseBody extends $dara.Model {
  availableIndustry?: GetTextTemplateResponseBodyAvailableIndustry;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableIndustry: 'availableIndustry',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIndustry: GetTextTemplateResponseBodyAvailableIndustry,
      requestId: 'string',
    };
  }

  validate() {
    if(this.availableIndustry && typeof (this.availableIndustry as any).validate === 'function') {
      (this.availableIndustry as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

