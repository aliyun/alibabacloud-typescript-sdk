// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalSearchRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. The value starts from 1.
   * 
   * @example
   * 1
   */
  page?: number;
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
   * The search query.
   * 
   * This parameter is required.
   * 
   * @example
   * Latest Trump tariff news
   */
  query?: string;
  /**
   * @remarks
   * The relative time range of the webpage publication time. Specify a value based on the relative time options.
   * 
   * @example
   * OneWeek
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      pageSize: 'pageSize',
      query: 'query',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      query: 'string',
      timeRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

