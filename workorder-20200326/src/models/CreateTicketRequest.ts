// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicketRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * support@aliyun.com
   */
  email?: string;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * all
   */
  notifyTimeRange?: string;
  /**
   * @example
   * 13288888888
   */
  phone?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  secretContent?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      email: 'Email',
      language: 'Language',
      notifyTimeRange: 'NotifyTimeRange',
      phone: 'Phone',
      productCode: 'ProductCode',
      secretContent: 'SecretContent',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      email: 'string',
      language: 'string',
      notifyTimeRange: 'string',
      phone: 'string',
      productCode: 'string',
      secretContent: 'string',
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

