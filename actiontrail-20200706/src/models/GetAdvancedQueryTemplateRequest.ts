// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAdvancedQueryTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * utpl-N9fpjnFBSWauSXhVNP3erw
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

