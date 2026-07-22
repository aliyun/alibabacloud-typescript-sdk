// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteScheduledTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the scheduled task.
   * 
   * This parameter is required.
   * 
   * @example
   * sch-260705-agbx1eev
   */
  scheduledId?: string;
  static names(): { [key: string]: string } {
    return {
      scheduledId: 'ScheduledId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduledId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

