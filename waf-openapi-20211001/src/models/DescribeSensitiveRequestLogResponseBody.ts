// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveRequestLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The account that initiated the request.
   * 
   * @example
   * admin
   */
  account?: string;
  /**
   * @remarks
   * The API path.
   * 
   * @example
   * /api/users/login
   */
  apiFormat?: string;
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 197b52abcd81d6a8bd4***e477
   */
  apiId?: string;
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * 103.118.55.**
   */
  clientIP?: string;
  /**
   * @remarks
   * The number of outbound sensitive data entries.
   * 
   * @example
   * 12
   */
  count?: number;
  /**
   * @remarks
   * The domain name of the API.
   * 
   * @example
   * a.****.com
   */
  matchedHost?: string;
  /**
   * @remarks
   * The code of the region to which the client IP address belongs.
   * 
   * @example
   * CN
   */
  remoteCountryId?: string;
  /**
   * @remarks
   * The time of the request. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1723392000
   */
  requestTime?: number;
  /**
   * @remarks
   * The sensitive data. The key indicates the sensitive data type identifier, which can be a built-in or custom type, and the value indicates the list of sensitive data.
   * 
   * > You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported sensitive data types.
   * 
   * @example
   * {
   *           "1000":[ 
   *               "90.88.49.19",
   *               "90.88.49.19"
   *           ],
   *           "835436":[ 
   *               "www.abc.com"
   *           ]
   * }
   */
  sensitiveList?: string;
  /**
   * @remarks
   * The ID of the access log.
   * 
   * @example
   * 0a3d455b17027784870843933dce3d
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      apiFormat: 'ApiFormat',
      apiId: 'ApiId',
      clientIP: 'ClientIP',
      count: 'Count',
      matchedHost: 'MatchedHost',
      remoteCountryId: 'RemoteCountryId',
      requestTime: 'RequestTime',
      sensitiveList: 'SensitiveList',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      apiFormat: 'string',
      apiId: 'string',
      clientIP: 'string',
      count: 'number',
      matchedHost: 'string',
      remoteCountryId: 'string',
      requestTime: 'number',
      sensitiveList: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSensitiveRequestLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of access logs.
   */
  data?: DescribeSensitiveRequestLogResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 26E46541-7AAB-5565-801D-F14DBDC5****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeSensitiveRequestLogResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

