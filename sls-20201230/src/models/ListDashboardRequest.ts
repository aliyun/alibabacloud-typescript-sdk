// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDashboardRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardRequest extends $dara.Model {
  /**
   * @remarks
   * The dashboard name.
   * 
   * @example
   * dashboard-1609294922657-434834
   */
  dashboardName?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * The tag information.
   */
  tags?: ListDashboardRequestTags[];
  static names(): { [key: string]: string } {
    return {
      dashboardName: 'dashboardName',
      displayName: 'displayName',
      offset: 'offset',
      size: 'size',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardName: 'string',
      displayName: 'string',
      offset: 'number',
      size: 'number',
      tags: { 'type': 'array', 'itemType': ListDashboardRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

