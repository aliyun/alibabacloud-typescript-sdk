// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAuthorityTemplateItemsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  itemsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 15***
   */
  templateId?: number;
  /**
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      itemsShrink: 'Items',
      templateId: 'TemplateId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemsShrink: 'string',
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

