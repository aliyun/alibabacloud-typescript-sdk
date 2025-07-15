// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStreamLocationBlockResponseBodyStreamBlockListStreamBlock extends $dara.Model {
  /**
   * @remarks
   * The name of the application in which the blocking applies.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The blocking type. Valid values:
   * 
   * *   blacklist
   * *   whitelist
   * 
   * @example
   * blacklist
   */
  blockType?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The blocked region. If multiple regions are specified, such as CN and AS, they are separated by commas (,).
   * 
   * @example
   * CN
   */
  locationList?: string;
  /**
   * @remarks
   * The time when the blocking ends. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-08-13T09:27Z
   */
  releaseTime?: string;
  /**
   * @remarks
   * The blocking status. Valid values: 0 (not started), 1 (blocking), 2 (successful), 3 (failed), 4 (expired), and 5 (deleting).
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The name of the stream.
   * 
   * @example
   * stream
   */
  streamName?: string;
  /**
   * @remarks
   * The time when the configuration was last modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-08-14T09:27Z
   */
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
  /**
   * @remarks
   * The configurations.
   */
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

