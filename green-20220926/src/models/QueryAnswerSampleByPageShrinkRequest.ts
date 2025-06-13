// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAnswerSampleByPageShrinkRequest extends $dara.Model {
  answer?: string;
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
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      currentPage: 'CurrentPage',
      libId: 'LibId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sortShrink: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      currentPage: 'number',
      libId: 'string',
      pageSize: 'number',
      regionId: 'string',
      sortShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

