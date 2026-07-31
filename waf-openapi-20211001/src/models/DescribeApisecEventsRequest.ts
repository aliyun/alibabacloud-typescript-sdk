// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The account information.
   * 
   * @example
   * 1818743389962696
   */
  account?: string;
  /**
   * @remarks
   * The API operation.
   * 
   * @example
   * /apisec/v1/***.php
   */
  apiFormat?: string;
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 820b860***6205da93b935b28
   */
  apiId?: string;
  /**
   * @remarks
   * The business purpose of the API.
   * > You can call [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) to obtain the supported business purposes.
   * 
   * @example
   * SendMail
   */
  apiTag?: string;
  /**
   * @remarks
   * The attack IP address.
   * 
   * @example
   * 42.224.*.*
   */
  attackIp?: string;
  /**
   * @remarks
   * The hybrid cloud cluster ID.
   * > This parameter applies only to hybrid cloud scenarios. You can call [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) to obtain hybrid cloud cluster information.
   * 
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @remarks
   * The end time of the query, in UNIX timestamp (UTC) format. Unit: seconds.
   * 
   * @example
   * 1683703260
   */
  endTs?: number;
  /**
   * @remarks
   * The ID of the API security event.
   * 
   * @example
   * 18ba94fea9***e66ba0557b7b91
   */
  eventId?: string;
  /**
   * @remarks
   * The event level. Valid values:
   * - **high**: High-risk.
   * - **medium**: Medium-risk.
   * - **low**: Low-risk.
   * 
   * @example
   * low
   */
  eventLevel?: string;
  /**
   * @remarks
   * The dimension of the security event.
   * 
   * @example
   * ip
   */
  eventScope?: string;
  /**
   * @remarks
   * The event type.
   * > You can call [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) to obtain the supported event types.
   * 
   * @example
   * ObtainSensitiveUnauthorized
   */
  eventTag?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to obtain the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-5y***d31
   */
  instanceId?: string;
  /**
   * @remarks
   * The domain name or IP address to which the API operation belongs.
   * 
   * @example
   * a.***.com
   */
  matchedHost?: string;
  /**
   * @remarks
   * The name of the field used for sorting. Valid values:
   * - **allCnt**: attack count.
   * - **startTs**: event start time.
   * - **endTs**: event end time.
   * 
   * @example
   * startTs
   */
  orderKey?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - **desc**: Descending order (default).
   * - **asc**: Ascending order.
   * 
   * @example
   * desc
   */
  orderWay?: string;
  /**
   * @remarks
   * The source of the event type. Valid values:
   * - **custom**: Custom.
   * - **default**: Built-in.
   * 
   * @example
   * default
   */
  origin?: string;
  /**
   * @remarks
   * The page number to return in a paged query. Default value: **1**, which indicates the first page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: **10**, which indicates 10 entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource group ID.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The start time of the query, in UNIX timestamp (UTC) format. Unit: seconds.
   * 
   * @example
   * 1683648000
   */
  startTs?: number;
  /**
   * @remarks
   * The event status. Valid values:
   * - **toBeConfirmed**: To be confirmed.
   * - **confirmed**: Confirmed.
   * - **actioned**: Handled.
   * - **ignored**: Ignored.
   * 
   * @example
   * ignored
   */
  userStatus?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      apiFormat: 'ApiFormat',
      apiId: 'ApiId',
      apiTag: 'ApiTag',
      attackIp: 'AttackIp',
      clusterId: 'ClusterId',
      endTs: 'EndTs',
      eventId: 'EventId',
      eventLevel: 'EventLevel',
      eventScope: 'EventScope',
      eventTag: 'EventTag',
      instanceId: 'InstanceId',
      matchedHost: 'MatchedHost',
      orderKey: 'OrderKey',
      orderWay: 'OrderWay',
      origin: 'Origin',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTs: 'StartTs',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      apiFormat: 'string',
      apiId: 'string',
      apiTag: 'string',
      attackIp: 'string',
      clusterId: 'string',
      endTs: 'number',
      eventId: 'string',
      eventLevel: 'string',
      eventScope: 'string',
      eventTag: 'string',
      instanceId: 'string',
      matchedHost: 'string',
      orderKey: 'string',
      orderWay: 'string',
      origin: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      startTs: 'number',
      userStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

