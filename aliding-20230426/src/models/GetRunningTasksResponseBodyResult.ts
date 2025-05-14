// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRunningTasksResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2020-01-01
   */
  activeTimeGMT?: string;
  /**
   * @example
   * act-xxaanfaf
   */
  activityId?: string;
  /**
   * @example
   * 123456
   */
  actualActionerId?: string;
  /**
   * @example
   * 2020-01-01
   */
  createTimeGMT?: string;
  /**
   * @example
   * 2020-01-01
   */
  finishTimeGMT?: string;
  /**
   * @example
   * 123456
   */
  originatorId?: string;
  /**
   * @example
   * instancexxxx
   */
  processInstanceId?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * taskId
   */
  taskId?: string;
  /**
   * @example
   * append task
   */
  taskType?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  /**
   * @example
   * title
   */
  titleInEnglish?: string;
  static names(): { [key: string]: string } {
    return {
      activeTimeGMT: 'ActiveTimeGMT',
      activityId: 'ActivityId',
      actualActionerId: 'ActualActionerId',
      createTimeGMT: 'CreateTimeGMT',
      finishTimeGMT: 'FinishTimeGMT',
      originatorId: 'OriginatorId',
      processInstanceId: 'ProcessInstanceId',
      status: 'Status',
      taskId: 'TaskId',
      taskType: 'TaskType',
      title: 'Title',
      titleInEnglish: 'TitleInEnglish',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTimeGMT: 'string',
      activityId: 'string',
      actualActionerId: 'string',
      createTimeGMT: 'string',
      finishTimeGMT: 'string',
      originatorId: 'string',
      processInstanceId: 'string',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
      title: 'string',
      titleInEnglish: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

