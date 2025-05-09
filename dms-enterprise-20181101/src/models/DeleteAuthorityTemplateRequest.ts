// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAuthorityTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2592
   */
  templateId?: number;
  /**
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'number',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

