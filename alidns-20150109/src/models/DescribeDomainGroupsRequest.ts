// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword for the group name. The search uses the %KeyWord% pattern and is case-insensitive.
   * 
   * @example
   * Group
   */
  keyWord?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese
   * 
   * - en: English
   * 
   * Default value: zh
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. The start value is **1**. The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is **100**. The default value is **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: 'string',
      lang: 'string',
      pageNumber: 'number',
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

