// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PbcCreateCmd extends $dara.Model {
  /**
   * @example
   * 基础商品
   */
  alias?: string;
  /**
   * @example
   * 企业服务
   */
  company?: string;
  /**
   * @example
   * 12
   */
  companyId?: number;
  /**
   * @example
   * 基础商品PBC
   */
  description?: string;
  /**
   * @example
   * 1
   */
  developerId?: string;
  /**
   * @example
   * common
   */
  industry?: string;
  marketId?: number;
  /**
   * @example
   * product
   */
  name?: string;
  /**
   * @example
   * foundation
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      company: 'company',
      companyId: 'companyId',
      description: 'description',
      developerId: 'developerId',
      industry: 'industry',
      marketId: 'marketId',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      company: 'string',
      companyId: 'number',
      description: 'string',
      developerId: 'string',
      industry: 'string',
      marketId: 'number',
      name: 'string',
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

