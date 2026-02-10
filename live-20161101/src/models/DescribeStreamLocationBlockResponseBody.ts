// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStreamLocationBlockResponseBodyStreamBlockListStreamBlock extends $dara.Model {
  appName?: string;
  blockType?: string;
  domainName?: string;
  locationList?: string;
  releaseTime?: string;
  status?: number;
  streamName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      blockType: 'BlockType',
      domainName: 'DomainName',
      locationList: 'LocationList',
      releaseTime: 'ReleaseTime',
      status: 'Status',
      streamName: 'StreamName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      blockType: 'string',
      domainName: 'string',
      locationList: 'string',
      releaseTime: 'string',
      status: 'number',
      streamName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamLocationBlockResponseBodyStreamBlockList extends $dara.Model {
  streamBlock?: DescribeStreamLocationBlockResponseBodyStreamBlockListStreamBlock[];
  static names(): { [key: string]: string } {
    return {
      streamBlock: 'StreamBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamBlock: { 'type': 'array', 'itemType': DescribeStreamLocationBlockResponseBodyStreamBlockListStreamBlock },
    };
  }

  validate() {
    if(Array.isArray(this.streamBlock)) {
      $dara.Model.validateArray(this.streamBlock);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamLocationBlockResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of entries that meet the specified conditions.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7C69682-7F88-40DD-A198-10D0309E439B
   */
  requestId?: string;
  streamBlockList?: DescribeStreamLocationBlockResponseBodyStreamBlockList;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      streamBlockList: 'StreamBlockList',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      streamBlockList: DescribeStreamLocationBlockResponseBodyStreamBlockList,
      totalPage: 'number',
    };
  }

  validate() {
    if(this.streamBlockList && typeof (this.streamBlockList as any).validate === 'function') {
      (this.streamBlockList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

