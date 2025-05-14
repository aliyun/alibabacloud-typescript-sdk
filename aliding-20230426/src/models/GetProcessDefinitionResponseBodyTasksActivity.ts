// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProcessDefinitionResponseBodyTasksActivity extends $dara.Model {
  /**
   * @example
   * act-xxaanfaf
   */
  activityId?: string;
  /**
   * @example
   * running
   */
  activityInstanceStatus?: string;
  /**
   * @example
   * activity-124
   */
  activityName?: string;
  /**
   * @example
   * redirect task
   */
  activityNameInEnglish?: string;
  /**
   * @example
   * 12345
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      activityInstanceStatus: 'ActivityInstanceStatus',
      activityName: 'ActivityName',
      activityNameInEnglish: 'ActivityNameInEnglish',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      activityInstanceStatus: 'string',
      activityName: 'string',
      activityNameInEnglish: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

