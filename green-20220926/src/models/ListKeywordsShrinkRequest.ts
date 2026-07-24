// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKeywordsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The keyword library ID.
   * 
   * @example
   * custom_xxxx
   */
  libId?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The sort field.
   * 
   * @example
   * {\\"GmtCreate\\":\\"desc\\"}
   */
  sortShrink?: string;
  /**
   * @remarks
   * The keyword library code. Valid values:
   * 
   * - desensitize: desensitization keyword library.
   * 
   * @example
   * desensitize
   */
  tenantCode?: string;
  /**
   * @remarks
   * The keyword.
   * 
   * @example
   * 测试词
   */
  word?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      libId: 'LibId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sortShrink: 'Sort',
      tenantCode: 'TenantCode',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      libId: 'string',
      pageSize: 'number',
      regionId: 'string',
      sortShrink: 'string',
      tenantCode: 'string',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

