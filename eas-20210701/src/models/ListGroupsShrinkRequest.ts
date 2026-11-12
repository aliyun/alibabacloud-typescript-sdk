// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name filter. Fuzzy match is supported.
   * 
   * @example
   * foo
   */
  filter?: string;
  /**
   * @remarks
   * The custom labels.
   * 
   * @example
   * {"key1":"value1","key2":null}
   */
  labelsShrink?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The current page number of the service group list. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The Settings for the number of service groups to return on each page during paging in a paged query. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The sort field.
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  /**
   * @remarks
   * The traffic distribution mode filter.
   * 
   * @example
   * auto
   */
  trafficMode?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      labelsShrink: 'Labels',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sort: 'Sort',
      trafficMode: 'TrafficMode',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      labelsShrink: 'string',
      order: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      sort: 'string',
      trafficMode: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

