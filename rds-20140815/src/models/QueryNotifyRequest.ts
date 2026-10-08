// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryNotifyRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-05-02T08:38:37Z
   */
  from?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type.
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
   * * **30**
   * * **50**
   * * **100**
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-05-09T08:38:37Z
   */
  to?: string;
  /**
   * @remarks
   * Specifies whether to include confirmed notifications in the query results. Valid values:
   * - **true**: Include confirmed notifications.
   * - **false**: Do not include confirmed notifications.
   * >Confirmed notifications are notifications that have been marked as confirmed by calling the ConfirmNotify operation.
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

