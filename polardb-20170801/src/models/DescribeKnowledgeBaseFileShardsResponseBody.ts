// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKnowledgeBaseFileShardsResponseBodyShards extends $dara.Model {
  headings?: string[];
  pageNumbers?: string[];
  /**
   * @example
   * ******
   */
  shardContent?: string;
  /**
   * @example
   * 1
   */
  shardIndex?: number;
  static names(): { [key: string]: string } {
    return {
      headings: 'Headings',
      pageNumbers: 'PageNumbers',
      shardContent: 'ShardContent',
      shardIndex: 'ShardIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headings: { 'type': 'array', 'itemType': 'string' },
      pageNumbers: { 'type': 'array', 'itemType': 'string' },
      shardContent: 'string',
      shardIndex: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.headings)) {
      $dara.Model.validateArray(this.headings);
    }
    if(Array.isArray(this.pageNumbers)) {
      $dara.Model.validateArray(this.pageNumbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKnowledgeBaseFileShardsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageRecordCount?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * 3E5CD764-xxxx-xxxx-xxxx-20E0DE84B2AF
   */
  requestId?: string;
  shards?: DescribeKnowledgeBaseFileShardsResponseBodyShards[];
  /**
   * @example
   * 10
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      shards: 'Shards',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageRecordCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      shards: { 'type': 'array', 'itemType': DescribeKnowledgeBaseFileShardsResponseBodyShards },
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.shards)) {
      $dara.Model.validateArray(this.shards);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

