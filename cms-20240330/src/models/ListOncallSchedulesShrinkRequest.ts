// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOncallSchedulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the on-call schedules.
   */
  oncallScheduleIdsShrink?: string;
  /**
   * @remarks
   * The name of the on-call schedule.
   * 
   * @example
   * testOncallScheduleName
   */
  oncallScheduleName?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * default-cms-5884500827389836-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      oncallScheduleIdsShrink: 'oncallScheduleIds',
      oncallScheduleName: 'oncallScheduleName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oncallScheduleIdsShrink: 'string',
      oncallScheduleName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

