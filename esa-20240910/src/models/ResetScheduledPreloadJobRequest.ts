// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetScheduledPreloadJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the scheduled prefetch task.
   * >Notice: The ID of the scheduled prefetch task. This parameter is required. You can obtain the ID from the response of CreateScheduledPreloadJob after creating a task, or query the ID of an existing task by calling GetScheduledPreloadJob or ListScheduledPreloadJobs..
   * 
   * @example
   * 665d3af3621bccf3fe29e1a4
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

