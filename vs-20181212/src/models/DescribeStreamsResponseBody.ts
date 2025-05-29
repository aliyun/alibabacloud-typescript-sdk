// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeStreamsResponseBodyStreams } from "./DescribeStreamsResponseBodyStreams";


export class DescribeStreamsResponseBody extends $dara.Model {
  /**
   * @example
   * 5
   */
  pageCount?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  streams?: DescribeStreamsResponseBodyStreams[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      streams: 'Streams',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      streams: { 'type': 'array', 'itemType': DescribeStreamsResponseBodyStreams },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.streams)) {
      $dara.Model.validateArray(this.streams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

