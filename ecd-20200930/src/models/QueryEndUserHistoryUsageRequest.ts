// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEndUserHistoryUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The end date of the query, in yyyy-MM-dd format. The date cannot be later than yesterday or earlier than StartDate. Default value: yesterday.
   * 
   * @example
   * 2024-01-15
   */
  endDate?: string;
  /**
   * @remarks
   * Specifies whether to query Active Directory (AD) domain users. Valid values:
   * - true: Queries AD domain users.
   * - false or unspecified: Queries convenience users.
   */
  isAdUser?: boolean;
  /**
   * @remarks
   * The page number. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start date of the query, in yyyy-MM-dd format. The date cannot be earlier than 32 days ago. Default value: yesterday.
   * 
   * @example
   * 2024-01-01
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      isAdUser: 'IsAdUser',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      isAdUser: 'boolean',
      pageNum: 'number',
      pageSize: 'number',
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

