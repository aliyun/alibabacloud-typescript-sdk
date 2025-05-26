// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePerformanceViewsResponseBodyViews extends $dara.Model {
  /**
   * @remarks
   * The time when created.
   * 
   * @example
   * 2024-06-18T07:06:53.000+00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The time when updated.
   * 
   * @example
   * 2024-06-18T07:07:32.000+00:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The name of the view.
   * 
   * @example
   * Basic
   */
  viewName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      viewName: 'ViewName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      updateTime: 'string',
      viewName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

