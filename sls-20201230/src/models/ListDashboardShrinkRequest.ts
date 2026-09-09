// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDashboardShrinkRequest extends $dara.Model {
  dashboardName?: string;
  displayName?: string;
  /**
   * @remarks
   * The line from which the query starts. The default value is 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. The maximum value is 500. The default value is 500.
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

