// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the templates that you want to delete. Separate multiple IDs with commas (,).
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****,****20b48fb04483915d4f2cd8ac****
   */
  templateIds?: string;
  static names(): { [key: string]: string } {
    return {
      templateIds: 'TemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

