// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMeCorpSubmissionResponseBodyDataCurrentActivityInstances extends $dara.Model {
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
  activityNameEn?: string;
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
      activityNameEn: 'ActivityNameEn',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      activityInstanceStatus: 'string',
      activityName: 'string',
      activityNameEn: 'string',
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

