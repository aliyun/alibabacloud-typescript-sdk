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
   * > You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query supported business purposes.
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
   * The ID of the hybrid cloud cluster.
   * > This parameter is applicable only to hybrid cloud scenarios. You can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query hybrid cloud cluster information.
   * 
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in UTC. Unit: seconds.
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
   * - **high**: high risk.
   * - **medium**: medium risk.
   * - **low**: low risk.
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
   * > You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query supported event types.
   * 
   * @example
   * ObtainSensitiveUnauthorized
   */
  eventTag?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the current WAF instance.
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
   * The name of the field by which to sort. Valid values:
   * - **allCnt**: the number of attacks.
   * - **startTs**: the start time of the event.
   * - **endTs**: the end time of the event.
   * 
   * @example
   * startTs
   */
  orderKey?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - **desc**: descending order (default).
   * - **asc**: ascending order.
   * 
   * @example
   * desc
   */
  orderWay?: string;
  /**
   * @remarks
   * The origin of the event type. Valid values:
   * - **custom**: custom.
   * - **default**: built-in.
   * 
   * @example
   * default
   */
  origin?: string;
  /**
   * @remarks
   * The page number to return for a paged query. Default value: **1**, which indicates that the first page is returned during paging.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page in a paged query. Default value: **10**, which indicates that 10 entries are returned on each page during paging.
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
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in UTC. Unit: seconds.
   * 
   * @example
   * 1683648000
   */
  startTs?: number;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * - **toBeConfirmed**: pending confirmation.
   * - **confirmed**: confirmed.
   * - **actioned**: handled.
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

