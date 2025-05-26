// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePerformanceViewAttributeResponseBodyViewDetail } from "./DescribePerformanceViewAttributeResponseBodyViewDetail";


export class DescribePerformanceViewAttributeResponseBody extends $dara.Model {
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
   * The type of the view.
   * 
   * @example
   * Basic
   */
  createFromViewType?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * @example
   * amv-bp198m028ih55xxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to populate the names of the metrics in the original monitoring view when you view the monitoring view. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  fillOriginViewKeys?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E031AABF-BD56-5966-A063-4283EF18DB45
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the monitoring view.
   */
  viewDetail?: DescribePerformanceViewAttributeResponseBodyViewDetail;
  /**
   * @remarks
   * The name of the view.
   * 
   * @example
   * Basic
   */
  viewName?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      createFromViewType: 'CreateFromViewType',
      DBClusterId: 'DBClusterId',
      fillOriginViewKeys: 'FillOriginViewKeys',
      requestId: 'RequestId',
      viewDetail: 'ViewDetail',
      viewName: 'ViewName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      createFromViewType: 'string',
      DBClusterId: 'string',
      fillOriginViewKeys: 'boolean',
      requestId: 'string',
      viewDetail: DescribePerformanceViewAttributeResponseBodyViewDetail,
      viewName: 'string',
    };
  }

  validate() {
    if(this.viewDetail && typeof (this.viewDetail as any).validate === 'function') {
      (this.viewDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

