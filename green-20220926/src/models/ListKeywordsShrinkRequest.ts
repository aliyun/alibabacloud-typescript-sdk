// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKeywordsShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sortShrink?: string;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      libId: 'LibId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sortShrink: 'Sort',
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

