// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveRequestLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The account of the request.
   * 
   * @example
   * admin
   */
  account?: string;
  /**
   * @remarks
   * The API operation.
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
   * The IP address.
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
   * The domain name to which the API operation belongs.
   * 
   * @example
   * a.****.com
   */
  matchedHost?: string;
  /**
   * @remarks
   * The region to which the IP address belongs, in region identifier code format.
   * 
   * @example
   * CN
   */
  remoteCountryId?: string;
  /**
   * @remarks
   * The request time, in UNIX timestamp (UTC) format. Unit: seconds.
   * 
   * @example
   * 1723392000
   */
  requestTime?: number;
  /**
   * @remarks
   * The sensitive data information. The value is a JSON string constructed from a series of parameters. The key of the JSON object is the sensitive data type identifier, which can be built-in or custom. The value is a list of sensitive data entries.
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
   * The log ID.
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

