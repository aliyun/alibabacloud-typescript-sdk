// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAliDingMinutesRequest extends $dara.Model {
  /**
   * @remarks
   * The cursor for the paged query. Set this parameter to 0 for the first request. For subsequent requests, set this parameter to the **nextCursor** value returned in the previous response. For more information about paging, see the response parameters.
   * 
   * @example
   * opaque-next-cursor
   */
  cursor?: string;
  /**
   * @remarks
   * The actual end timestamp of the live session, in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-09-08T23:59:59+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The query start time. This value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-09-01T00:00:00+08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. Pass it explicitly through the winnexo-cli --tenant-id option.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'cursor',
      endTime: 'endTime',
      pageSize: 'pageSize',
      startTime: 'startTime',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
      endTime: 'string',
      pageSize: 'number',
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

