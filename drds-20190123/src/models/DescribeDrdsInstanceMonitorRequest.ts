// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsInstanceMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the value in the UNIX timestamp format. The timestamp must be in UTC. Unit: ms.
   * 
   * >  If the time range that you specify is less than 1 hour, the monitoring data that is collected in a 1-hour period before the end time is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 1603209690000
   */
  endTime?: number;
  /**
   * @remarks
   * The performance monitoring metrics. You can specify one or more metrics. Separate multiple metric names with commas (,).
   * 
   * >  For more information about performance monitoring metrics, see [Monitor instances](https://help.aliyun.com/document_detail/186703.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu
   */
  key?: string;
  /**
   * @remarks
   * The multiple of the default time interval that you want to use to collect monitoring data. By default, the system collects monitoring data of resources at an interval of 1 minute. If you set the value of this parameter to 2, the system collects monitoring data of the instance at an interval of 2 minutes.
   * 
   * @example
   * 1
   */
  periodMultiple?: number;
  /**
   * @remarks
   * The ID of the region where the instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of the query. Specify the value in the UNIX timestamp format. The timestamp must be in UTC. Unit: ms.
   * 
   * This parameter is required.
   * 
   * @example
   * 1603123290000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      key: 'Key',
      periodMultiple: 'PeriodMultiple',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      endTime: 'number',
      key: 'string',
      periodMultiple: 'number',
      regionId: 'string',
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

