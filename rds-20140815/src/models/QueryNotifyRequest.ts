// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryNotifyRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-05-02T08:38:37Z
   */
  from?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.****
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-05-09T08:38:37Z
   */
  to?: string;
  /**
   * @remarks
   * Specifies whether the query results contain confirmed notifications. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  A confirmed notification is a notification that has been marked as confirmed by calling the ConfirmNotify operation.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  withConfirmed?: boolean;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      to: 'To',
      withConfirmed: 'WithConfirmed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      to: 'string',
      withConfirmed: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

