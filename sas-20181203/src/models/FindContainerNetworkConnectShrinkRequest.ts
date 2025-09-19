// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindContainerNetworkConnectShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the information that you want to query. Valid values:
   * 
   * *   **EDGE**: connection information
   * 
   * @example
   * EDGE
   */
  criteriaType?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The information about the destination node.
   */
  dstNodeShrink?: string;
  /**
   * @remarks
   * The end time of the network connection.
   * 
   * @example
   * 1649260799999
   */
  endTime?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * > We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The information about the source node.
   */
  srcNodeShrink?: string;
  /**
   * @remarks
   * The start time of the network connection.
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

