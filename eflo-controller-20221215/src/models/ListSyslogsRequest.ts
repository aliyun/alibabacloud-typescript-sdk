// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSyslogsRequest extends $dara.Model {
  /**
   * @remarks
   * The start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1659745800
   */
  fromTime?: string;
  /**
   * @remarks
   * The token for the next page. To retrieve the next page of results, include the token in the next request.
   * 
   * @example
   * 392e8b4a03ed171433cc39f5b464ec9d
   */
  nextToken?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * e01-cn-nwy37atbj44
   */
  nodeId?: string;
  /**
   * @remarks
   * The query condition.
   * 
   * @example
   * *
   */
  query?: string;
  /**
   * @remarks
   * Specifies whether to sort the results by time in descending order.
   * 
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @remarks
   * The end time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1665369329
   */
  toTime?: string;
  static names(): { [key: string]: string } {
    return {
      fromTime: 'FromTime',
      nextToken: 'NextToken',
      nodeId: 'NodeId',
      query: 'Query',
      reverse: 'Reverse',
      toTime: 'ToTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromTime: 'string',
      nextToken: 'string',
      nodeId: 'string',
      query: 'string',
      reverse: 'boolean',
      toTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

