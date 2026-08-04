// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterListDeptMembersRequest extends $dara.Model {
  /**
   * @example
   * inherit
   */
  authConfig?: string;
  /**
   * @example
   * false
   */
  includeAuthorization?: boolean;
  /**
   * @example
   * true
   */
  includeBalance?: boolean;
  /**
   * @example
   * 张三
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  model?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      includeAuthorization: 'includeAuthorization',
      includeBalance: 'includeBalance',
      keyword: 'keyword',
      model: 'model',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: 'string',
      includeAuthorization: 'boolean',
      includeBalance: 'boolean',
      keyword: 'string',
      model: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

