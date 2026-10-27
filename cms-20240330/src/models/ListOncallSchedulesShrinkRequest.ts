// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOncallSchedulesShrinkRequest extends $dara.Model {
  oncallScheduleIdsShrink?: string;
  /**
   * @example
   * testOncallScheduleName
   */
  oncallScheduleName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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

