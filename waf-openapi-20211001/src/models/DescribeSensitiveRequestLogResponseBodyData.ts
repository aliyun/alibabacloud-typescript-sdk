// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveRequestLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The API.
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
   * The number of sensitive data records involved in cross-border data transfer.
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
   * IP region, formatted as a region code.
   * 
   * @example
   * CN
   */
  remoteCountryId?: string;
  /**
   * @remarks
   * The time when the request was initiated. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * @example
   * 1723392000
   */
  requestTime?: number;
  /**
   * @remarks
   * The details of sensitive data. The value is a string that consists of a JSON struct. The JSON struct contains key-value pairs. In a key-value pair, a key indicates the identifier of a sensitive data type, including built-in and custom types, and a value indicates specific sensitive data.
   * 
   * >  You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported sensitive data types.
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
   * The trace ID.
   * 
   * @example
   * 0a3d455b17027784870843933dce3d
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
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

