// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The account that you want to use to filter events.
   * 
   * @example
   * 1818743389962696
   */
  account?: string;
  /**
   * @remarks
   * The path of the API that is associated with the security event.
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
   * 
   * > Call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported business purposes.
   * 
   * @example
   * SendMail
   */
  apiTag?: string;
  /**
   * @remarks
   * The IP address of the attacker that you want to use to filter events.
   * 
   * @example
   * 42.224.*.*
   */
  attackIp?: string;
  /**
   * @remarks
   * The ID of the hybrid cloud WAF cluster.
   * 
   * > This parameter is required only in hybrid cloud scenarios. Call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query the IDs of hybrid cloud WAF clusters.
   * 
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp. Unit: seconds.
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
   * The severity level of the event. Valid values:
   * 
   * - **high**: high severity.
   * 
   * - **medium**: medium severity.
   * 
   * - **low**: low severity.
   * 
   * @example
   * low
   */
  eventLevel?: string;
  /**
   * @remarks
   * The dimension by which security events are categorized. Valid values:
   * 
   * - **ip**: IP security event. This is the default value.
   * 
   * - **account**: account security event.
   * 
   * @example
   * ip
   */
  eventScope?: string;
  /**
   * @remarks
   * The event type.
   * 
   * > Call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported event types.
   * 
   * @example
   * ObtainSensitiveUnauthorized
   */
  eventTag?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-5y***d31
   */
  instanceId?: string;
  /**
   * @remarks
   * The domain name or IP address that is protected by WAF.
   * 
   * @example
   * a.***.com
   */
  matchedHost?: string;
  /**
   * @remarks
   * The field that is used to sort the query results. Valid values:
   * 
   * - **allCnt**: the number of attacks.
   * 
   * - **startTs**: the start time of the event.
   * 
   * - **endTs**: the end time of the event.
   * 
   * @example
   * startTs
   */
  orderKey?: string;
  /**
   * @remarks
   * The order in which the query results are sorted. Valid values:
   * 
   * - **desc**: descending order. This is the default value.
   * 
   * - **asc**: ascending order.
   * 
   * @example
   * desc
   */
  orderWay?: string;
  /**
   * @remarks
   * The source of the event type. Valid values:
   * 
   * - **custom**: a user-defined event type.
   * 
   * - **default**: a built-in event type.
   * 
   * @example
   * default
   */
  origin?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1683648000
   */
  startTs?: number;
  /**
   * @remarks
   * The handling status of the event. Valid values:
   * 
   * - **toBeConfirmed**: pending confirmation.
   * 
   * - **confirmed**: confirmed but not yet handled.
   * 
   * - **actioned**: handled.
   * 
   * - **ignored**: ignored.
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

