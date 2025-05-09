// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityRuleTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The code for the template.
   * 
   * This parameter is required.
   * 
   * @example
   * USER_DEFINED:123
   */
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

