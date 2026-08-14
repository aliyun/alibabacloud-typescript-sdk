// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterListDeptMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization configuration filter. Valid values:
   * - inherit: only members that inherit department settings.
   * - custom: only members with custom settings.
   * - Empty: all members.
   * 
   * @example
   * inherit
   */
  authConfig?: string;
  /**
   * @remarks
   * Specifies whether to include the authorized models and the number of associated keys for the member.
   * 
   * @example
   * false
   */
  includeAuthorization?: boolean;
  /**
   * @remarks
   * Specifies whether to include the monthly and permanent balance of the member\\"s sub-wallet.
   * 
   * @example
   * true
   */
  includeBalance?: boolean;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * John
   */
  keyword?: string;
  /**
   * @remarks
   * Filters members by the authorized model ID.
   * 
   * @example
   * 1
   */
  model?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
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

