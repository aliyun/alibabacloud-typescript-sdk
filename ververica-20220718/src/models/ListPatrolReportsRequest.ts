// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPatrolReportsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. Unit: milliseconds (UNIX timestamp).
   * 
   * @example
   * 1718086400000
   */
  endDate?: number;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Filters reports by inspection scope type. Valid values:
   * 
   * - ALL
   * - TAGS
   * - DEPLOYMENTS
   * 
   * @example
   * ALL
   */
  scopeType?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 200.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The start time of the query. Unit: milliseconds (UNIX timestamp).
   * 
   * @example
   * 1718000000000
   */
  startDate?: number;
  /**
   * @remarks
   * Filters reports by status. Valid values:
   * 
   * - PENDING
   * - IN_PROGRESS
   * - COMPLETED
   * - FAILED
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * Filters reports by trigger type. Valid values:
   * 
   * - CRON
   * - MANUAL
   * - INNER_API
   * 
   * @example
   * CRON
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      page: 'page',
      scopeType: 'scopeType',
      size: 'size',
      startDate: 'startDate',
      status: 'status',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      page: 'number',
      scopeType: 'string',
      size: 'number',
      startDate: 'number',
      status: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

