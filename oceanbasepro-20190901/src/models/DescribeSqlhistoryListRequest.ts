// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLHistoryListRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the time range for querying the SQL execution history.   
   * The value must be UTC time in the format of YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-13T15:40:43Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.   
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * SQLID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8D6E84****0B8FB1823D199E2CA1****
   */
  SQLId?: string;
  /**
   * @remarks
   * The start time of the time range for querying the SQL execution history.   
   * The value must be UTC time in the format of YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-06-13T15:40:43Z
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * t2mr3oae0****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      SQLId: 'SQLId',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      SQLId: 'string',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

