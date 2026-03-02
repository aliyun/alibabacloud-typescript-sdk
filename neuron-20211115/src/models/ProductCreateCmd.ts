// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProductCreateCmd extends $dara.Model {
  accountId?: string;
  /**
   * @example
   * 多端商城
   */
  alias?: string;
  /**
   * @example
   * 1
   */
  companyId?: number;
  description?: string;
  /**
   * @example
   * yunmall
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      alias: 'alias',
      companyId: 'companyId',
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      alias: 'string',
      companyId: 'number',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

