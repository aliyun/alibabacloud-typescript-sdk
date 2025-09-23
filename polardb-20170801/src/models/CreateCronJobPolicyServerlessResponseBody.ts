// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCronJobPolicyServerlessResponseBody extends $dara.Model {
  /**
   * @example
   * ModifyDBClusterServerlessConf
   */
  action?: string;
  /**
   * @example
   * 0 0 8 * * ?
   */
  cronExpression?: string;
  /**
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @example
   * 2021-04-07T04:00Z
   */
  endTime?: string;
  /**
   * @example
   * 1fa3c0e7-b568-4f41-b703-463c96a91bd8
   */
  jobId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 45D24263-7E3A-4140-9472-************
   */
  requestId?: string;
  /**
   * @example
   * 2020-05-01T00:00Z
   */
  startTime?: string;
  /**
   * @example
   * working
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      cronExpression: 'CronExpression',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      jobId: 'JobId',
      regionId: 'RegionId',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      cronExpression: 'string',
      DBClusterId: 'string',
      endTime: 'string',
      jobId: 'string',
      regionId: 'string',
      requestId: 'string',
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

