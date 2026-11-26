// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopComputeJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the computing instance, excluding the region name.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_streaming-cn-pe333xxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the computing job.
   * 
   * This parameter is required.
   * 
   * @example
   * order_enrichment
   */
  jobName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The job stop strategy. Default value: `CANCEL` if omitted.
   * 
   * - `CANCEL`: Stops the job directly and skips the current savepoint.
   * - `STOP_WITH_SAVEPOINT`: Creates a savepoint and then stops the job.
   * - `STOP_WITH_DRAIN`: Stops the job in drain mode and creates a savepoint, triggering the output of event time windows.
   * 
   * Strategies with savepoints apply only to running production jobs.
   * 
   * @example
   * STOP_WITH_SAVEPOINT
   */
  stopStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobName: 'JobName',
      regionId: 'RegionId',
      stopStrategy: 'StopStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobName: 'string',
      regionId: 'string',
      stopStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

