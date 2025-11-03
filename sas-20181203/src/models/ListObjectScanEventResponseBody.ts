// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListObjectScanEventResponseBodyDataDetails extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter in the file details.
   * 
   * @example
   * DownloadUrl
   */
  name?: string;
  /**
   * @remarks
   * The display name of the alert.
   * 
   * @example
   * DownloadUrl
   */
  nameDisplay?: string;
  /**
   * @remarks
   * The value type of the parameter in the file details.
   * 
   * @example
   * html
   */
  type?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * http://gcx.cn-hangzhou.aliyuncs.com/****
   */
  value?: string;
  /**
   * @remarks
   * The value of the parameter.
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
   * The name of the OSS bucket.
   * 
   * @example
   * hz-new01****
   */
  bucketName?: string;
  /**
   * @remarks
   * The details of the file.
   */
  details?: ListObjectScanEventResponseBodyDataDetails[];
  /**
   * @remarks
   * Indicates whether the file can be detected by cloud sandbox. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  displaySandboxResult?: string;
  errorMsg?: string;
  /**
   * @remarks
   * The ID of the alert.
   * 
   * @example
   * 911273
   */
  eventId?: number;
  /**
   * @remarks
   * The name of the alert.
   * 
   * @example
   * WebShell
   */
  eventName?: string;
  /**
   * @remarks
   * The path to the file.
   * 
   * @example
   * /usr/local****
   */
  filePath?: string;
  /**
   * @remarks
   * The timestamp at which the alert was first detected.
   * 
   * @example
   * 1694576692000
   */
  firstTime?: number;
  /**
   * @remarks
   * Indicates whether an alert is generated for the file extracted from the package. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  hasSubEvent?: boolean;
  /**
   * @remarks
   * The timestamp at which the alert was last detected.
   * 
   * @example
   * 1694576692000
   */
  lastTime?: number;
  matchedWhiteListRuleI18nStr?: string;
  /**
   * @remarks
   * The MD5 hash value of the file.
   * 
   * @example
   * 5b394b54ca632fe51c4ab4a6dbaf****
   */
  md5?: string;
  operateResult?: string;
  /**
   * @remarks
   * The key of the file that is stored in the OSS bucket.
   * 
   * @example
   * 1/2023/07/21/10/18/16899059356518bcf6c64-a04e-492d-a421-4ae8b888****
   */
  ossKey?: string;
  remark?: string;
  /**
   * @remarks
   * The risk level of the alert. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * medium
   */
  riskLevel?: string;
  /**
   * @remarks
   * The SHA-1 hash value of the file.
   * 
   * @example
   * 3c01bdbb26f358bab27f267924aa2c9a03fc****
   */
  sha1?: string;
  /**
   * @remarks
   * The SHA-256 hash value of the file.
   * 
   * @example
   * 3a6fed5fc11392b3ee9f81caf017b48640d7458766a8eb0382899a605b41****
   */
  sha256?: string;
  /**
   * @remarks
   * The method that is used to detect the malicious file. Valid values:
   * 
   * *   **API**: uses API operations.
   * *   **OSS**: uses OSS file check.
   * 
   * @example
   * OSS
   */
  source?: string;
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
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
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
   * The data returned.
   */
  data?: ListObjectScanEventResponseBodyData[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListObjectScanEventResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
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

