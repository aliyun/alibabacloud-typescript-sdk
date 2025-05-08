// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTitleGenerateRequest extends $dara.Model {
  /**
   * @example
   * {2:"None",10:"Plastic"}
   */
  attributes?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 127896018
   */
  categoryId?: string;
  /**
   * @example
   * {   "product_id": "1",   "platform": "ae" }
   */
  extra?: string;
  /**
   * @example
   * None,Plastic
   */
  hotWords?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * en
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
   * 10pcs 80ml Kitchen Disposable
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      categoryId: 'CategoryId',
      extra: 'Extra',
      hotWords: 'HotWords',
      language: 'Language',
      platform: 'Platform',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      categoryId: 'string',
      extra: 'string',
      hotWords: 'string',
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

