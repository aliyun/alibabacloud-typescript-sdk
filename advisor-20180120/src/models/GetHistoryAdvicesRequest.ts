// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistoryAdvicesRequest extends $dara.Model {
  /**
   * @example
   * 2023-07-01
   */
  endDate?: string;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @example
   * 1
   */
  severity?: string;
  /**
   * @example
   * 2023-07-01
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      language: 'Language',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      product: 'Product',
      reverse: 'Reverse',
      severity: 'Severity',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      language: 'string',
      pageNum: 'number',
      pageSize: 'number',
      product: 'string',
      reverse: 'boolean',
      severity: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

