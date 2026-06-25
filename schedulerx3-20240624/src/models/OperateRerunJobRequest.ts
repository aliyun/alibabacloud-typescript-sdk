// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateRerunJobRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The unique identifier of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The specific time of day for which to rerun the data. The format is `HH:mm:ss`.
   * 
   * This parameter is required.
   * 
   * @example
   * 14:11:10
   */
  dataTime?: string;
  /**
   * @remarks
   * The end of the time range to rerun, specified as a Unix timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1698458024000
   */
  endDate?: number;
  /**
   * @remarks
   * The unique identifier of the job.
   * 
   * This parameter is required.
   * 
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @remarks
   * The start of the time range to rerun, specified as a Unix timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1698458024000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      dataTime: 'DataTime',
      endDate: 'EndDate',
      jobId: 'JobId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      dataTime: 'string',
      endDate: 'number',
      jobId: 'number',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

