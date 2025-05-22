// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataSynchronizationStatus extends $dara.Model {
  /**
   * @remarks
   * The synchronization latency.
   * 
   * >  This parameter is no longer available.
   * 
   * @example
   * 0
   */
  delay?: string;
  /**
   * @remarks
   * The error message returned if incremental data synchronization failed.
   * 
   * >  This parameter is no longer available.
   * 
   * @example
   * The task has failed for too long and cannot be restored
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of incremental data synchronization. Unit: %.
   * 
   * >  This parameter is no longer available.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The status of incremental data synchronization.
   * 
   * >  This parameter is no longer available.
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'string',
      errorMessage: 'string',
      percent: 'string',
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

