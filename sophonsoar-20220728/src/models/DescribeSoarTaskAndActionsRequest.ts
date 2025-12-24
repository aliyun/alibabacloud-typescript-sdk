// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarTaskAndActionsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  queryType?: string;
  queryValue?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * @example
   * 1077f2f9-25e8-42d9-bfdf-1528e1313f6d
   */
  requestUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      queryValue: 'QueryValue',
      requestUuid: 'RequestUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryType: 'string',
      queryValue: 'string',
      requestUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

