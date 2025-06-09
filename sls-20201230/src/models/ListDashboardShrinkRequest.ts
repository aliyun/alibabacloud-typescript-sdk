// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDashboardShrinkRequest extends $dara.Model {
  dashboardName?: string;
  displayName?: string;
  /**
   * @remarks
   * The line from which the query starts. Default value: 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 500. Default value: 500.
   * 
   * @example
   * 10
   */
  size?: number;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dashboardName: 'dashboardName',
      displayName: 'displayName',
      offset: 'offset',
      size: 'size',
      tagsShrink: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardName: 'string',
      displayName: 'string',
      offset: 'number',
      size: 'number',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

