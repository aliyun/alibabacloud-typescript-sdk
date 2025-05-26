// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsJobsResponseBodyAPSJobs extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * aps-******
   */
  apsJobId?: string;
  /**
   * @remarks
   * The name of the APS job.
   * 
   * @example
   * data-sync-******
   */
  apsJobName?: string;
  /**
   * @remarks
   * The time when the APS job was created.
   * 
   * @example
   * 2022-06-28 15:00:04
   */
  createTime?: string;
  /**
   * @remarks
   * The synchronization latency.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The destination cluster ID.
   * 
   * @example
   * amv-*******
   */
  destinationInstanceID?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * OK
   */
  errMessage?: string;
  /**
   * @remarks
   * The progress.
   * 
   * @example
   * 30: The progress is 30%.
   */
  projress?: string;
  /**
   * @remarks
   * The ID of the source instance or cluster.
   * 
   * @example
   * pc-******
   */
  sourceInstanceID?: string;
  /**
   * @remarks
   * The status of the APS job.
   * 
   * @example
   * -
   */
  status?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * -
   */
  subStatus?: string;
  static names(): { [key: string]: string } {
    return {
      apsJobId: 'ApsJobId',
      apsJobName: 'ApsJobName',
      createTime: 'CreateTime',
      delay: 'Delay',
      destinationInstanceID: 'DestinationInstanceID',
      errMessage: 'ErrMessage',
      projress: 'Projress',
      sourceInstanceID: 'SourceInstanceID',
      status: 'Status',
      subStatus: 'SubStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apsJobId: 'string',
      apsJobName: 'string',
      createTime: 'string',
      delay: 'number',
      destinationInstanceID: 'string',
      errMessage: 'string',
      projress: 'string',
      sourceInstanceID: 'string',
      status: 'string',
      subStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

