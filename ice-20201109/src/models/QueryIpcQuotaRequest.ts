// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryIpcQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * Capability. Default value is understand. Valid values:
   * 
   * - understand: understanding
   * 
   * - understand-reid: understanding with reid
   * 
   * - search: search
   * 
   * @example
   * understand
   */
  capability?: string;
  /**
   * @remarks
   * End time. UTC time in the format: yyyy-MM-ddTHH:mm:ssZ. The difference between EndTime and StartTime must not exceed 180 days.
   * 
   * @example
   * 2025-05-09T08:52:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Page number for paging. Default Value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Page size, which specifies the number of entries displayed per page. Default value is 10, and the maximum value is 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Start Time. UTC time in the format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2025-05-08T08:52:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      capability: 'Capability',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capability: 'string',
      endTime: 'string',
      pageNo: 'number',
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

