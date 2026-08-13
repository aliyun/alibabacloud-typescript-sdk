// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * Filters the results by the effective status of the configuration.
   * 
   * @example
   * effective
   */
  effectStatuses?: string;
  /**
   * @remarks
   * The end time for the query, specified as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1742178604000
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to return the total number of configuration history records.
   * 
   * @example
   * true
   */
  needTotal?: boolean;
  /**
   * @remarks
   * The page number. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The default value is 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time for the query, specified as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1742178604000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      effectStatuses: 'EffectStatuses',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      needTotal: 'NeedTotal',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectStatuses: 'string',
      endTime: 'number',
      instanceId: 'string',
      needTotal: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

