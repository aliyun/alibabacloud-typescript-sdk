// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteJobsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of executor IDs. A maximum of 100 IDs are supported.
   */
  executorIdsShrink?: string;
  /**
   * @remarks
   * The type of the job scheduler.
   * 
   * *   HPC
   * *   K8S
   * 
   * Default value: HPC
   * 
   * @example
   * HPC
   */
  jobScheduler?: string;
  /**
   * @remarks
   * The information about the job to be deleted.
   */
  jobSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      executorIdsShrink: 'ExecutorIds',
      jobScheduler: 'JobScheduler',
      jobSpecShrink: 'JobSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorIdsShrink: 'string',
      jobScheduler: 'string',
      jobSpecShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

