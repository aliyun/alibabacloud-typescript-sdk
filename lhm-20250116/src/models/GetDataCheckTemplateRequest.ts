// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCheckTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The check template ID (logical foreign key) that uniquely identifies a check template.
   * 
   * This parameter is required.
   * 
   * @example
   * 1001
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'templateId',
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

