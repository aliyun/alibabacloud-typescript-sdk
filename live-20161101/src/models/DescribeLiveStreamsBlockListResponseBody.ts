// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamsBlockListResponseBodyStreamUrls extends $dara.Model {
  streamUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      streamUrl: 'StreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.streamUrl)) {
      $dara.Model.validateArray(this.streamUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsBlockListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The main streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 2
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9D855EC8-CF71-4615-B164-F7DFCB23B41D
   */
  requestId?: string;
  /**
   * @remarks
   * The complete URL of each live stream.
   */
  streamUrls?: DescribeLiveStreamsBlockListResponseBodyStreamUrls;
  /**
   * @remarks
   * The total number of live stream URLs that meet the specified conditions.
   * 
   * @example
   * 11
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 2
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      streamUrls: 'StreamUrls',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      streamUrls: DescribeLiveStreamsBlockListResponseBodyStreamUrls,
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(this.streamUrls && typeof (this.streamUrls as any).validate === 'function') {
      (this.streamUrls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

