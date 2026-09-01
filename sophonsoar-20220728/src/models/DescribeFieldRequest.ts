// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFieldRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response messages. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The key of the global configuration. Valid value:
   * 
   * - **soar_filed_tags**: Obtains the input field template for a playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * soar_filed_tags
   */
  queryKey?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      queryKey: 'QueryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      queryKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

