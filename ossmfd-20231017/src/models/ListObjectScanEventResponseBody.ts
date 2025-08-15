// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListObjectScanEventResponseBodyDataDetails extends $dara.Model {
  /**
   * @example
   * DownloadUrl
   */
  name?: string;
  /**
   * @example
   * DownloadUrl
   */
  nameDisplay?: string;
  /**
   * @example
   * html
   */
  type?: string;
  /**
   * @example
   * http://gcx.cn-hangzhou.aliyuncs.com/****
   */
  value?: string;
  /**
   * @example
   * http://gcx.cn-hangzhou.aliyuncs.com/****
   */
  valueDisplay?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      nameDisplay: 'NameDisplay',
      type: 'Type',
      value: 'Value',
      valueDisplay: 'ValueDisplay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      nameDisplay: 'string',
      type: 'string',
      value: 'string',
      valueDisplay: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListObjectScanEventResponseBodyData extends $dara.Model {
  /**
   * @example
   * testBucket******
   */
  bucketName?: string;
  details?: ListObjectScanEventResponseBodyDataDetails[];
  /**
   * @example
   * true
   */
  displaySandboxResult?: string;
  /**
   * @example
   * 1
   */
  eventId?: number;
  eventName?: string;
  /**
   * @example
   * /usr/local****
   */
  filePath?: string;
  /**
   * @example
   * 1694576692000
   */
  firstTime?: number;
  /**
   * @example
   * true
   */
  hasSubEvent?: boolean;
  /**
   * @example
   * 1694576692000
   */
  lastTime?: number;
  /**
   * @example
   * e991e62f484bb6accd676e57a9******
   */
  md5?: string;
  /**
   * @example
   * 1/2022/06/23/15/41/16559701077444693a0c6-33b2-4cc2-a99f-9f38b8b8****
   */
  ossKey?: string;
  /**
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @example
   * 3c01bdbb26f358bab27f267924aa2c9a03fc****
   */
  sha1?: string;
  /**
   * @example
   * 3a6fed5fc11392b3ee9f81caf017b48640d7458766a8eb0382899a605b41****
   */
  sha256?: string;
  /**
   * @example
   * OSS
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      details: 'Details',
      displaySandboxResult: 'DisplaySandboxResult',
      eventId: 'EventId',
      eventName: 'EventName',
      filePath: 'FilePath',
      firstTime: 'FirstTime',
      hasSubEvent: 'HasSubEvent',
      lastTime: 'LastTime',
      md5: 'Md5',
      ossKey: 'OssKey',
      riskLevel: 'RiskLevel',
      sha1: 'Sha1',
      sha256: 'Sha256',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      details: { 'type': 'array', 'itemType': ListObjectScanEventResponseBodyDataDetails },
      displaySandboxResult: 'string',
      eventId: 'number',
      eventName: 'string',
      filePath: 'string',
      firstTime: 'number',
      hasSubEvent: 'boolean',
      lastTime: 'number',
      md5: 'string',
      ossKey: 'string',
      riskLevel: 'string',
      sha1: 'string',
      sha256: 'string',
      source: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListObjectScanEventResponseBodyPageInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 187
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListObjectScanEventResponseBody extends $dara.Model {
  data?: ListObjectScanEventResponseBodyData[];
  pageInfo?: ListObjectScanEventResponseBodyPageInfo;
  /**
   * @example
   * E99D386F-5546-5BCD-BADD-F4EF4B******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListObjectScanEventResponseBodyData },
      pageInfo: ListObjectScanEventResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

