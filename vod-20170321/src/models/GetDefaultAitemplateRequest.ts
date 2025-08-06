// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDefaultAITemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the AI template. Set the value to **AIMediaAudit**, which specifies the automated review.
   * 
   * This parameter is required.
   * 
   * @example
   * AIMediaAudit
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

