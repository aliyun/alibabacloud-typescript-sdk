// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceAlarmStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The data source for statistics on instance alarms, with a default value of aqs:
   * - *sas*: Situation Awareness data source
   * - *aqs*: Alarm event data
   * - *honeypot*: Honeypot
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The UUID of the server to be queried.
   * > Call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) API to obtain this parameter.
   * 
   * @example
   * 00fea5a1-9792-4373-ab1e-bb6536ba****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

