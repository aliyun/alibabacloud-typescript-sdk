// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAnswerSampleByPageRequest extends $dara.Model {
  /**
   * @remarks
   * The answer.
   * 
   * @example
   * 答案
   */
  answer?: string;
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
   * The ID of the proxy answer library.
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
   */
  sort?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      currentPage: 'CurrentPage',
      libId: 'LibId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      currentPage: 'number',
      libId: 'string',
      pageSize: 'number',
      regionId: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.sort) {
      $dara.Model.validateMap(this.sort);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

