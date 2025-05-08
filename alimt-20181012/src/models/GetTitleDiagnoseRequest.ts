// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTitleDiagnoseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  categoryId?: string;
  /**
   * @example
   * {   "product_id": "1",   "platform": "ae" }
   */
  extra?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ae
   */
  platform?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Amroe Japan Comic Theme Uzumaki Naruto Namikaze Minato 3D Visual Cartoon 7 Color USB Touch
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      extra: 'Extra',
      language: 'Language',
      platform: 'Platform',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      extra: 'string',
      language: 'string',
      platform: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

