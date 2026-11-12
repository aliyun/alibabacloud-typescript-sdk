// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateRerunJobRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 1625
   */
  appId?: number;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The data timestamp, in the HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 14:11:10
   */
  dataTime?: string;
  /**
   * @remarks
   * The end time, specified as a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1698458024000
   */
  endDate?: number;
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @remarks
   * The start time, specified as a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1698458024000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
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
      appId: 'number',
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

