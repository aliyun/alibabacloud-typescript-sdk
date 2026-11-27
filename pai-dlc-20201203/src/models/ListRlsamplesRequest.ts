// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRLSamplesRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query window in UTC RFC 3339 format. Default value: now.
   * 
   * @example
   * 2026-08-07T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number, starting from 1. This parameter must be specified together with PageSize. If neither parameter is specified, the default values PageNumber=1 and PageSize=10 are used.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 1000. This parameter must be specified together with PageNumber. If neither parameter is specified, the default value 10 is used.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query window in UTC RFC 3339 format. Default value: EndTime-7d.
   * 
   * @example
   * 2026-08-04T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

