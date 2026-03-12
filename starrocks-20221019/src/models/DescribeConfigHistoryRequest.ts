// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigHistoryRequest extends $dara.Model {
  /**
   * @example
   * effective
   */
  effectStatuses?: string;
  /**
   * @example
   * 1742178604000
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  needTotal?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
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

