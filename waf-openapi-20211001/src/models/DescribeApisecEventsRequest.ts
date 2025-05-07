// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The API.
   * 
   * @example
   * /apisec/v1/register.php
   */
  apiFormat?: string;
  /**
   * @remarks
   * The ID of the event-related API.
   * 
   * @example
   * 820b860***6205da93b935b28
   */
  apiId?: string;
  /**
   * @remarks
   * The business purpose of the API.
   * 
   * >  You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the business purposes of APIs.
   * 
   * @example
   * SendMail
   */
  apiTag?: string;
  /**
   * @remarks
   * The Attack source IP.
   * 
   * @example
   * 42.224.*.*
   */
  attackIp?: string;
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * >  This parameter is available only in hybrid cloud scenarios. You can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query hybrid cloud clusters.
   * 
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp in UTC. Unit: seconds.
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
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * low
   */
  eventLevel?: string;
  /**
   * @remarks
   * The type of the event.
   * 
   * >  You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported event types.
   * 
   * @example
   * ObtainSensitiveUnauthorized
   */
  eventTag?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-5y***d31
   */
  instanceId?: string;
  /**
   * @remarks
   * The domain name or IP address of the API.
   * 
   * @example
   * a.aliyun.com
   */
  matchedHost?: string;
  /**
   * @remarks
   * The name of the sorting field. Valid values:
   * 
   * *   **allCnt**: the number of attacks
   * *   **startTs**: the start time of the event
   * *   **endTs**: the end time of the event
   * 
   * @example
   * startTs
   */
  orderKey?: string;
  /**
   * @remarks
   * The sorting method. Valid values:
   * 
   * *   **desc** (default): descending order
   * *   **asc**: ascending order
   * 
   * @example
   * desc
   */
  orderWay?: string;
  /**
   * @remarks
   * The source of the event type. Valid values:
   * 
   * *   **custom**
   * *   **default**
   * 
   * @example
   * default
   */
  origin?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the WAF instance. Value:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
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
   * The beginning of the time range to query. This value is a UNIX timestamp in UTC. Unit: seconds.
   * 
   * @example
   * 1683648000
   */
  startTs?: number;
  /**
   * @remarks
   * The event status. Valid values:
   * 
   * *   **toBeConfirmed**
   * *   **confirmed**
   * *   **ignored**
   * 
   * @example
   * Ignore
   */
  userStatus?: string;
  static names(): { [key: string]: string } {
    return {
      apiFormat: 'ApiFormat',
      apiId: 'ApiId',
      apiTag: 'ApiTag',
      attackIp: 'AttackIp',
      clusterId: 'ClusterId',
      endTs: 'EndTs',
      eventId: 'EventId',
      eventLevel: 'EventLevel',
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
      apiFormat: 'string',
      apiId: 'string',
      apiTag: 'string',
      attackIp: 'string',
      clusterId: 'string',
      endTs: 'number',
      eventId: 'string',
      eventLevel: 'string',
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

