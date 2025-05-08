// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstancesInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * i-5qzje8f5un1wmi341m2yetaxv
   */
  instanceId?: string;
  /**
   * @remarks
   * The start time of the distribution. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-19T07:24:52Z
   */
  startTime?: string;
  /**
   * @remarks
   * The description of the distribution status.
   * 
   * @example
   * SUCCESS
   */
  statusDescrip?: string;
  /**
   * @remarks
   * The time when the distribution status was last updated. The time is displayed in UTC.
   * 
   * @example
   * 2021-10-11T02:38:19Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      statusDescrip: 'StatusDescrip',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startTime: 'string',
      statusDescrip: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

