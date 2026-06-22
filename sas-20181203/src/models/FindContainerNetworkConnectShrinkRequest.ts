// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindContainerNetworkConnectShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The query type of the element to query. Valid values:
   * 
   * - **EDGE**: connection information.
   * 
   * @example
   * EDGE
   */
  criteriaType?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**, which indicates that the first page is returned.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The destination node information, which is used to filter destination nodes.
   */
  dstNodeShrink?: string;
  /**
   * @remarks
   * The end time of the network connectivity.
   * 
   * @example
   * 1649260799999
   */
  endTime?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. Default value: 20. If the PageSize parameter is left empty, 20 entries are returned by default.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The source node information, which is used to filter source nodes.
   */
  srcNodeShrink?: string;
  /**
   * @remarks
   * The start time of the network connectivity.
   * 
   * @example
   * 1666886400000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      criteriaType: 'CriteriaType',
      currentPage: 'CurrentPage',
      dstNodeShrink: 'DstNode',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      srcNodeShrink: 'SrcNode',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteriaType: 'string',
      currentPage: 'number',
      dstNodeShrink: 'string',
      endTime: 'number',
      pageSize: 'number',
      srcNodeShrink: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

