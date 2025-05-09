// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNodeDependenciesResponseBodyPagingInfoNodes } from "./ListNodeDependenciesResponseBodyPagingInfoNodes";


export class ListNodeDependenciesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The descendant nodes.
   */
  nodes?: ListNodeDependenciesResponseBodyPagingInfoNodes[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 90
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodes },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

