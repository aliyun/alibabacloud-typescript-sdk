// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAiEngineEvidenceRequestsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The value is a numeric string ranging from 100 to 599, or unknown. A value of unknown indicates that the status code is not collected.
   * 
   * @example
   * 500
   */
  httpStatus?: string;
  /**
   * @remarks
   * The evidence impact tag. Valid values: block, monitor, bypass, attempt, and challenge. Exact match is supported.
   * 
   * @example
   * bypass
   */
  impactType?: string;
  /**
   * @remarks
   * The HTTP request method. Exact match is supported.
   * 
   * @example
   * POST
   */
  method?: string;
  /**
   * @remarks
   * The node ID. Exact match is supported. The value can be up to 64 ASCII characters in length.
   * 
   * @example
   * n109-04
   */
  nodeId?: string;
  /**
   * @remarks
   * The attack source type.
   * 
   * @example
   * ip
   */
  sourceType?: string;
  /**
   * @remarks
   * Specifies whether the request is a suspected bypass.
   * 
   * @example
   * 1
   */
  suspectedBypass?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatus: 'httpStatus',
      impactType: 'impactType',
      method: 'method',
      nodeId: 'nodeId',
      sourceType: 'sourceType',
      suspectedBypass: 'suspectedBypass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatus: 'string',
      impactType: 'string',
      method: 'string',
      nodeId: 'string',
      sourceType: 'string',
      suspectedBypass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAiEngineEvidenceRequestsRequest extends $dara.Model {
  /**
   * @remarks
   * The event ID. The value can be up to 64 ASCII characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * EVT-20241025-109
   */
  eventId?: string;
  /**
   * @remarks
   * The filter conditions. Exact match is used, and multiple conditions are connected by the AND operator. The value is a JSON object. Property names use camelCase, and property values are strings.
   * 
   * @example
   * {"suspectedBypass":"1","httpStatus":"500"}
   */
  filter?: DescribeAiEngineEvidenceRequestsRequestFilter;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-de****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the response.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page in a paging query. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. The value is the **NextToken** parameter value returned by the previous API call. You do not need to specify this parameter for the first query.
   * 
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @remarks
   * The region where the WAF instance resides.
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
   * rg-dsdo*****
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The search value. This parameter is used together with SearchKey. The value can be up to 256 characters in length.
   * 
   * @example
   * trace-20241***ssdas
   */
  seachValue?: string;
  /**
   * @remarks
   * The search key. This parameter is used together with SeachValue. Valid values: traceId, requestPath, sourceIp, sourceAccount, sourceFingerprint, and auto.
   * 
   * @example
   * traceId
   */
  searchKey?: string;
  /**
   * @remarks
   * The sort field.
   * 
   * @example
   * request_time
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * asc
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      filter: 'Filter',
      instanceId: 'InstanceId',
      language: 'Language',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      seachValue: 'SeachValue',
      searchKey: 'SearchKey',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      filter: DescribeAiEngineEvidenceRequestsRequestFilter,
      instanceId: 'string',
      language: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      seachValue: 'string',
      searchKey: 'string',
      sortBy: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

