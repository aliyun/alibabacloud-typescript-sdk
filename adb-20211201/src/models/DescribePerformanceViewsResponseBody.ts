// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePerformanceViewsResponseBodyViews } from "./DescribePerformanceViewsResponseBodyViews";


export class DescribePerformanceViewsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * >  This parameter is returned only if Resource Access Management (RAM) permission verification failed.
   * 
   * @example
   * {
   *     "PolicyType": "AccountLevelIdentityBasedPolicy",
   *     "AuthPrincipalOwnerId": "1*****************7",
   *     "EncodedDiagnosticMessage": "AQIBIAAAAOPdwKY2QLOvgMEc7SkkoJfj1kvZwsaRqNYMh10Tv0wTe0fCzaCdrvgazfNb0EnJKETgXyhR+3BIQjx9WAqZryejBsp1Bl4qI5En/D9dEhcXAtKCxCmE2kZCiEzpy8BoEUt+bs0DmlaGWO5xkEpttypLIB4rUhDvZd+zwPg4EXk4KSSWSWsurxtqDkKEMshKlQFBTKvJcKwyhk62IeYly4hQ+5IpXjkh1GQXuDRCQ==",
   *     "AuthPrincipalType": "SubUser",
   *     "AuthPrincipalDisplayName": "2***************9",
   *     "NoPermissionType": "ImplicitDeny",
   *     "AuthAction": "adb:DescribeExcessivePrimaryKeys"
   * }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3A8F6106-6AFD-5A34-9C80-8DE2C42D06E8
   */
  requestId?: string;
  /**
   * @remarks
   * the list of view.
   */
  views?: DescribePerformanceViewsResponseBodyViews[];
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      requestId: 'RequestId',
      views: 'Views',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      requestId: 'string',
      views: { 'type': 'array', 'itemType': DescribePerformanceViewsResponseBodyViews },
    };
  }

  validate() {
    if(Array.isArray(this.views)) {
      $dara.Model.validateArray(this.views);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

