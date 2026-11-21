// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeOncallSchedule extends $dara.Model {
  /**
   * @remarks
   * The extended details.
   * 
   * @example
   * {
   *   "oncallScheduleId": "testId",
   *   "oncallScheduleName": "testName",
   *   "rotations": [
   *     {
   *       "activeDays": [
   *         1
   *       ],
   *       "contacts": [
   *         "testId"
   *       ],
   *       "rotationEndTime": "24:00",
   *       "rotationName": "testName",
   *       "rotationStartTime": "00:00",
   *       "shiftRecurrenceFrequency": "WEEKLY",
   *       "startDate": "2024-01-01",
   *       "timeZone": "Asia/Shanghai",
   *       "shiftLength": 3
   *     }
   *   ],
   *   "shiftRobotId": "testId",
   *   "substitudes": [
   *     {
   *       "startTime": "2024-10-10 09:00",
   *       "endTime": "2024-10-15 18:00",
   *       "replacedContactId": "testId",
   *       "contactId": "testId"
   *     }
   *   ],
   *   "workspace": "default-cms-5884500827389836-cn-hangzhou"
   * }
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1700000000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 1700000000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The unique identifier.
   * 
   * @example
   * Sample value
   */
  identifier?: string;
  /**
   * @remarks
   * The name of the schedule.
   * 
   * @example
   * Sample name
   */
  name?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * Sample value
   */
  source?: string;
  /**
   * @remarks
   * The workspace.
   * 
   * @example
   * Sample value
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      identifier: 'identifier',
      name: 'name',
      source: 'source',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'string',
      gmtModified: 'string',
      identifier: 'string',
      name: 'string',
      source: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.detail) {
      $dara.Model.validateMap(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

