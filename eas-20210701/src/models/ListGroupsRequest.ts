// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the filter that is used to filter out unwanted service groups. Fuzzy match is supported.
   * 
   * @example
   * foo
   */
  filter?: string;
  order?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  sort?: string;
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

