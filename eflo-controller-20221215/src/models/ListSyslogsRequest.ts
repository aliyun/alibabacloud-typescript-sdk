// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSyslogsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1659745800
   */
  fromTime?: string;
  /**
   * @example
   * 392e8b4a03ed171433cc39f5b464ec9d
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e01-cn-nwy37atbj44
   */
  nodeId?: string;
  /**
   * @example
   * *
   */
  query?: string;
  /**
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @remarks
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

