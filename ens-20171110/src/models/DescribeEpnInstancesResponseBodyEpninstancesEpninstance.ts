// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEpnInstancesResponseBodyEPNInstancesEPNInstance extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created. The time is displayed in UTC.
   * 
   * @example
   * 2019-11-01T06:08:46Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the EPN instance.
   * 
   * @example
   * epn****
   */
  EPNInstanceId?: string;
  /**
   * @remarks
   * The name of the EPN instance.
   * 
   * @example
   * ens_test_epn
   */
  EPNInstanceName?: string;
  /**
   * @remarks
   * Set the value to EdgeToEdge.
   * 
   * @example
   * EdgeToEdge
   */
  EPNInstanceType?: string;
  /**
   * @remarks
   * The end of the time range during which the data was queried. The time is displayed in UTC.
   * 
   * @example
   * 2019-11-01T06:08:46Z
   */
  endTime?: string;
  /**
   * @remarks
   * The inbound bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 40
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The time when the instance was last modified. The time is displayed in UTC.
   * 
   * @example
   * 2019-11-01T06:08:46Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The networking mode. Valid values:
   * 
   * *   SpeedUp: intelligent acceleration network (Internet)
   * *   Connection: internal network
   * *   SpeedUpAndConnection: intelligent acceleration network and internal network
   * 
   * @example
   * SpeedUp
   */
  networkingModel?: string;
  /**
   * @remarks
   * The beginning of the time range during which the data was queried. The time is displayed in UTC.
   * 
   * @example
   * 2019-11-01T06:08:46Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   Running
   * *   Excuting
   * *   Stopped
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      EPNInstanceId: 'EPNInstanceId',
      EPNInstanceName: 'EPNInstanceName',
      EPNInstanceType: 'EPNInstanceType',
      endTime: 'EndTime',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      modifyTime: 'ModifyTime',
      networkingModel: 'NetworkingModel',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      EPNInstanceId: 'string',
      EPNInstanceName: 'string',
      EPNInstanceType: 'string',
      endTime: 'string',
      internetMaxBandwidthOut: 'number',
      modifyTime: 'string',
      networkingModel: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

