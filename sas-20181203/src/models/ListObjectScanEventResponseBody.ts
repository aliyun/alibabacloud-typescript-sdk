// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListObjectScanEventResponseBodyDataDetails extends $dara.Model {
  /**
   * @remarks
   * The name of the detail item.
   * 
   * @example
   * DownloadUrl
   */
  name?: string;
  /**
   * @remarks
   * The display name of the alert event.
   * 
   * @example
   * DownloadUrl
   */
  nameDisplay?: string;
  /**
   * @remarks
   * The type of the detail information.
   * 
   * @example
   * html
   */
  type?: string;
  /**
   * @remarks
   * The value of the detail item.
   * 
   * @example
   * http://gcx.cn-hangzhou.aliyuncs.com/****
   */
  value?: string;
  /**
   * @remarks
   * The display value of the detail item.
   * 
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
   * @remarks
   * The bucket name.
   * 
   * @example
   * hz-new01****
   */
  bucketName?: string;
  /**
   * @remarks
   * The detailed information of the check item.
   */
  details?: ListObjectScanEventResponseBodyDataDetails[];
  /**
   * @remarks
   * Indicates whether cloud sandbox detection is supported. Valid values:
   * 
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  displaySandboxResult?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * connect timed out
   */
  errorMsg?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 911273
   */
  eventId?: number;
  /**
   * @remarks
   * The alert name.
   * 
   * @example
   * WebShell
   */
  eventName?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * /usr/local****
   */
  filePath?: string;
  /**
   * @remarks
   * The timestamp when the alert first occurred.
   * 
   * @example
   * 1694576692000
   */
  firstTime?: number;
  /**
   * @remarks
   * Indicates whether alerts exist for sub-files within a compressed archive. Valid values:
   * - **true**: Yes. You can obtain the corresponding **EventId** value and call this operation again with the **EventId** value passed to **ParentEventId** to view the alert events for the sub-files within the compressed archive.
   * - **false**: No.
   * 
   * @example
   * true
   */
  hasSubEvent?: boolean;
  /**
   * @remarks
   * The timestamp when the alert was last detected.
   * 
   * @example
   * 1694576692000
   */
  lastTime?: number;
  /**
   * @remarks
   * The information about the matched whitelist rule.
   * 
   * @example
   * <strong></strong>&nbsp&nbspmd5&nbsp&nbsp contains &nbsp&nbsp23&nbsp&nbsp
   */
  matchedWhiteListRuleI18nStr?: string;
  /**
   * @remarks
   * The MD5 hash of the file.
   * 
   * @example
   * 5b394b54ca632fe51c4ab4a6dbaf****
   */
  md5?: string;
  /**
   * @remarks
   * The alert handling result.
   * 
   * @example
   * fail
   */
  operateResult?: string;
  /**
   * @remarks
   * The storage key of the file in the OSS bucket.
   * 
   * @example
   * 1/2023/07/21/10/18/16899059356518bcf6c64-a04e-492d-a421-4ae8b888****
   */
  ossKey?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The risk level of the scanned alert. Valid values:
   * 
   * - **high**: high risk.
   * - **medium**: medium risk.
   * - **low**: low risk.
   * 
   * @example
   * medium
   */
  riskLevel?: string;
  /**
   * @remarks
   * The SHA-1 hash of the file.
   * 
   * @example
   * 3c01bdbb26f358bab27f267924aa2c9a03fc****
   */
  sha1?: string;
  /**
   * @remarks
   * The SHA-256 hash of the file.
   * 
   * @example
   * 3a6fed5fc11392b3ee9f81caf017b48640d7458766a8eb0382899a605b41****
   */
  sha256?: string;
  /**
   * @remarks
   * The data source. Valid values:
   * - **API**: API detection
   * - **OSS**: OSS detection.
   * 
   * @example
   * OSS
   */
  source?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * 
   * - 0: unhandled 
   * - 1: manually handled
   * - 2: whitelisted
   * - 3: ignored
   * - 4: access denied.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      details: 'Details',
      displaySandboxResult: 'DisplaySandboxResult',
      errorMsg: 'ErrorMsg',
      eventId: 'EventId',
      eventName: 'EventName',
      filePath: 'FilePath',
      firstTime: 'FirstTime',
      hasSubEvent: 'HasSubEvent',
      lastTime: 'LastTime',
      matchedWhiteListRuleI18nStr: 'MatchedWhiteListRuleI18nStr',
      md5: 'Md5',
      operateResult: 'OperateResult',
      ossKey: 'OssKey',
      remark: 'Remark',
      riskLevel: 'RiskLevel',
      sha1: 'Sha1',
      sha256: 'Sha256',
      source: 'Source',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      details: { 'type': 'array', 'itemType': ListObjectScanEventResponseBodyDataDetails },
      displaySandboxResult: 'string',
      errorMsg: 'string',
      eventId: 'number',
      eventName: 'string',
      filePath: 'string',
      firstTime: 'number',
      hasSubEvent: 'boolean',
      lastTime: 'number',
      matchedWhiteListRuleI18nStr: 'string',
      md5: 'string',
      operateResult: 'string',
      ossKey: 'string',
      remark: 'string',
      riskLevel: 'string',
      sha1: 'string',
      sha256: 'string',
      source: 'string',
      status: 'number',
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
   * @remarks
   * The page number of the current page in the paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries displayed on each page in the paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 253
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
  /**
   * @remarks
   * The data details.
   */
  data?: ListObjectScanEventResponseBodyData[];
  /**
   * @remarks
   * The pagination information for the paged query.
   */
  pageInfo?: ListObjectScanEventResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for this request. You can use it to troubleshoot issues.
   * 
   * @example
   * 7BC55C8F-226E-5AF5-9A2C-2EC43864****
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

