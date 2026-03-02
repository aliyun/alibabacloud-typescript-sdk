// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Product extends $dara.Model {
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
  creator?: string;
  description?: string;
  gmtCreate?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * yunmall
   */
  name?: string;
  requestId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      alias: 'alias',
      companyId: 'companyId',
      creator: 'creator',
      description: 'description',
      gmtCreate: 'gmtCreate',
      id: 'id',
      name: 'name',
      requestId: 'requestId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      alias: 'string',
      companyId: 'number',
      creator: 'string',
      description: 'string',
      gmtCreate: 'string',
      id: 'number',
      name: 'string',
      requestId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

