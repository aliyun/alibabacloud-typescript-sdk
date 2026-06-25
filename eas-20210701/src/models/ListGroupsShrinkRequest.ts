// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The filter name. Fuzzy match is supported.
   * 
   * @example
   * foo
   */
  filter?: string;
  /**
   * @remarks
   * The user-defined labels.
   */
  labelsShrink?: string;
  /**
   * @remarks
   * The sort order of the results.
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
   * The number of service groups to display on each page in a paged query. Settings for paging default to 100.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The field by which to sort the results.
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  /**
   * @remarks
   * The traffic allocation method used to filter service groups.
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

