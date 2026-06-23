// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalSearchRequest extends $dara.Model {
  /**
   * @remarks
   * Page number, starting from 1
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Number of items per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Search query content
   * 
   * This parameter is required.
   * 
   * @example
   * 特朗普最新关税消息
   */
  query?: string;
  /**
   * @remarks
   * Web page publish time range
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

