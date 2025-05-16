// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterResponseBodyManagerScheduler extends $dara.Model {
  /**
   * @remarks
   * The scheduler state. Valid values:
   * 
   * *   uninit: The scheduler is being installed.
   * *   initing: The scheduler is being initialized.
   * *   running: The scheduler is running.
   * *   exception: The scheduler has run into an exception.
   * *   releasing: The scheduler is being released.
   * *   stopped: The scheduler is stopped.
   * *   pending: The scheduler is waiting to be configured.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The scheduler type. Valid values:
   * 
   * *   SLURM
   * *   PBS
   * *   OPENGRIDSCHEDULER
   * *   LSF_PLUGIN
   * *   PBS_PLUGIN
   * 
   * @example
   * SLURM
   */
  type?: string;
  /**
   * @remarks
   * The scheduler version.
   * 
   * @example
   * 22.05.8
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

