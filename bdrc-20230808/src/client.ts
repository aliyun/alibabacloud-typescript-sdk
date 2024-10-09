// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CheckRulesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ecs:123***890:cn-shanghai:instance/i-001***90
   */
  resourceArn?: string;
  /**
   * @example
   * rule-000***dav
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceArn: 'ResourceArn',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceArn: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRulesResponseBody extends $tea.Model {
  data?: CheckRulesResponseBodyData;
  /**
   * @example
   * 700683DE-0154-56D4-8D76-3B7A2C2C7DF9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CheckRulesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseBdrcServiceResponseBody extends $tea.Model {
  /**
   * @example
   * 663D8898-E0B5-5964-BF28-A191CE6A1825
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseBdrcServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloseBdrcServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloseBdrcServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckDetailsRequest extends $tea.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * cae**********699
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ecs:123***890:cn-shanghai:instance/i-001***90
   */
  resourceArn?: string;
  /**
   * @example
   * rule-000***dav
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceArn: 'ResourceArn',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceArn: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckDetailsResponseBody extends $tea.Model {
  data?: DescribeCheckDetailsResponseBodyData;
  /**
   * @example
   * 92793A50-0B97-59F1-BAEA-EAED83BA1998
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeCheckDetailsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCheckDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCheckDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsResponseBody extends $tea.Model {
  data?: DescribeProductsResponseBodyData;
  /**
   * @example
   * 30FB202A-1D22-5394-AB02-4477CDFCF51F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeProductsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProductsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeProductsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesRequest extends $tea.Model {
  /**
   * @example
   * rule-000c***yc9
   */
  failedRuleTemplate?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * cae**********699
   */
  nextToken?: string;
  /**
   * @example
   * i-0003***110
   */
  resourceId?: string;
  /**
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @example
   * protectionScore
   */
  sortBy?: string;
  /**
   * @example
   * ASC
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      failedRuleTemplate: 'FailedRuleTemplate',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedRuleTemplate: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceId: 'string',
      resourceType: 'string',
      sortBy: 'string',
      sortOrder: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesResponseBody extends $tea.Model {
  data?: DescribeResourcesResponseBodyData;
  /**
   * @example
   * 700683DE-0154-56D4-8D76-3B7A2C2C7DF9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeResourcesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesRequest extends $tea.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * cae**********699
   */
  nextToken?: string;
  /**
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesResponseBody extends $tea.Model {
  data?: DescribeRulesResponseBodyData;
  /**
   * @example
   * 86DEBAC9-AB6A-59AB-9E5C-A540E579ECC9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeRulesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskResponseBody extends $tea.Model {
  data?: DescribeTaskResponseBodyData;
  /**
   * @example
   * 14DFF801-A4E3-5136-AAB8-7D246012CD7A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeTaskResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksRequest extends $tea.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * cae**********699
   */
  nextToken?: string;
  /**
   * @example
   * RUNNING
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBody extends $tea.Model {
  data?: DescribeTasksResponseBodyData;
  /**
   * @example
   * AE43C4CB-8074-5EBD-9806-8CA6D12800B1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeTasksResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopRiskyResourcesRequest extends $tea.Model {
  /**
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopRiskyResourcesResponseBody extends $tea.Model {
  data?: DescribeTopRiskyResourcesResponseBodyData;
  /**
   * @example
   * 34081B20-C4C0-514F-93F6-8EEC3D1A587E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeTopRiskyResourcesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopRiskyResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTopRiskyResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTopRiskyResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableCheckProductRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableCheckProductResponseBody extends $tea.Model {
  /**
   * @example
   * 89E3CBB7-16F3-52AE-BD32-31A43A2A807F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableCheckProductResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableCheckProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableCheckProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableCheckResourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ecs:123***890:cn-shanghai:instance/i-001***90
   */
  resourceArn?: string;
  static names(): { [key: string]: string } {
    return {
      resourceArn: 'ResourceArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableCheckResourceResponseBody extends $tea.Model {
  /**
   * @example
   * 86DEBAC9-AB6A-59AB-9E5C-A540E579ECC9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableCheckResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableCheckResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableCheckResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableCheckProductRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableCheckProductResponseBody extends $tea.Model {
  /**
   * @example
   * 8724BC18-904D-5A0D-BFF4-F0554F0037E7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableCheckProductResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableCheckProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableCheckProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableCheckResourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ecs:123***890:cn-shanghai:instance/i-001***90
   */
  resourceArn?: string;
  static names(): { [key: string]: string } {
    return {
      resourceArn: 'ResourceArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableCheckResourceResponseBody extends $tea.Model {
  /**
   * @example
   * E583A0FF-803C-51C4-9AC9-E029471ACD6A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableCheckResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableCheckResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableCheckResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBdrcServiceResponseBody extends $tea.Model {
  data?: GetBdrcServiceResponseBodyData;
  /**
   * @example
   * 5748C531-80B1-5C31-8421-63A1830B9E48
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetBdrcServiceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBdrcServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBdrcServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBdrcServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenBdrcServiceResponseBody extends $tea.Model {
  /**
   * @example
   * 86DEBAC9-AB6A-59AB-9E5C-A540E579ECC9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenBdrcServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenBdrcServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OpenBdrcServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourcesRequest extends $tea.Model {
  /**
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourcesResponseBody extends $tea.Model {
  data?: UpdateResourcesResponseBodyData;
  /**
   * @example
   * 5B2F09BF-CEBD-5A7E-AC01-E7F86169A5E5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateResourcesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRulesResponseBodyData extends $tea.Model {
  /**
   * @example
   * t-0000e4w0u1v592zdf6s7
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckDetailsResponseBodyDataContent extends $tea.Model {
  /**
   * @example
   * PASSED
   */
  checkStatus?: string;
  /**
   * @example
   * 1701725715
   */
  checkTime?: number;
  /**
   * @example
   * {"ecsAutoSnapshotPolicyIds":[],"hbrBackupPlans":[{"planId":"po-xxxxxxxx","sourceType":"UDM_ECS"}]}
   */
  detail?: string;
  /**
   * @example
   * ecs
   */
  productType?: string;
  /**
   * @example
   * acs:ecs:123***890:cn-shanghai:instance/i-001***90
   */
  resourceArn?: string;
  /**
   * @example
   * i-xxxxxxxx
   */
  resourceId?: string;
  /**
   * @example
   * test server
   */
  resourceName?: string;
  /**
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @example
   * rule-xxxxxxxx
   */
  ruleId?: string;
  /**
   * @example
   * ecs-backup
   */
  ruleTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkTime: 'CheckTime',
      detail: 'Detail',
      productType: 'ProductType',
      resourceArn: 'ResourceArn',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      ruleId: 'RuleId',
      ruleTemplate: 'RuleTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      checkTime: 'number',
      detail: 'string',
      productType: 'string',
      resourceArn: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      ruleId: 'string',
      ruleTemplate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckDetailsResponseBodyData extends $tea.Model {
  content?: DescribeCheckDetailsResponseBodyDataContent[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * CAESGgoSChAKDGNvbXBsZXRlVGltZRABCgQiAggAGAAiQAoJAOTzWWYAAAAACjMDLgAAADFTNzMyZDMwMzAzMDM4NzA3NTcwMzY2MjMwNzY2ODcyMzAzMTY2Nzg3ODY5MzY=
   */
  nextToken?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeCheckDetailsResponseBodyDataContent },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsResponseBodyDataContentProtectionScoreDistributionRange extends $tea.Model {
  /**
   * @example
   * 0
   */
  from?: number;
  /**
   * @example
   * 60
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsResponseBodyDataContentProtectionScoreDistribution extends $tea.Model {
  /**
   * @example
   * 5
   */
  count?: number;
  range?: DescribeProductsResponseBodyDataContentProtectionScoreDistributionRange;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      range: 'Range',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      range: DescribeProductsResponseBodyDataContentProtectionScoreDistributionRange,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsResponseBodyDataContent extends $tea.Model {
  /**
   * @example
   * 1
   */
  checkFailedCount?: number;
  /**
   * @example
   * 1
   */
  checkFailedResourceCount?: number;
  /**
   * @example
   * 1
   */
  disableCheckResourceCount?: number;
  /**
   * @example
   * true
   */
  enableCheck?: boolean;
  /**
   * @example
   * oss
   */
  productType?: string;
  /**
   * @example
   * 90
   */
  protectionScore?: number;
  protectionScoreDistribution?: DescribeProductsResponseBodyDataContentProtectionScoreDistribution[];
  /**
   * @example
   * 1726036498
   */
  protectionScoreUpdatedTime?: number;
  /**
   * @example
   * 1
   */
  riskCount?: number;
  /**
   * @example
   * 1
   */
  riskyResourceCount?: number;
  /**
   * @example
   * 100
   */
  totalResourceCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkFailedCount: 'CheckFailedCount',
      checkFailedResourceCount: 'CheckFailedResourceCount',
      disableCheckResourceCount: 'DisableCheckResourceCount',
      enableCheck: 'EnableCheck',
      productType: 'ProductType',
      protectionScore: 'ProtectionScore',
      protectionScoreDistribution: 'ProtectionScoreDistribution',
      protectionScoreUpdatedTime: 'ProtectionScoreUpdatedTime',
      riskCount: 'RiskCount',
      riskyResourceCount: 'RiskyResourceCount',
      totalResourceCount: 'TotalResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkFailedCount: 'number',
      checkFailedResourceCount: 'number',
      disableCheckResourceCount: 'number',
      enableCheck: 'boolean',
      productType: 'string',
      protectionScore: 'number',
      protectionScoreDistribution: { 'type': 'array', 'itemType': DescribeProductsResponseBodyDataContentProtectionScoreDistribution },
      protectionScoreUpdatedTime: 'number',
      riskCount: 'number',
      riskyResourceCount: 'number',
      totalResourceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsResponseBodyData extends $tea.Model {
  content?: DescribeProductsResponseBodyDataContent[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * b4fd3cffcacafd65e3818a0b9b2ff9a2
   */
  nextToken?: string;
  /**
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeProductsResponseBodyDataContent },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesResponseBodyDataContent extends $tea.Model {
  /**
   * @example
   * 0
   */
  archiveDataSize?: number;
  /**
   * @example
   * 0
   */
  checkFailedCount?: number;
  /**
   * @example
   * 0
   */
  coldArchiveDataSize?: number;
  /**
   * @example
   * 1697798340
   */
  createTime?: number;
  /**
   * @example
   * 0
   */
  enableCheck?: boolean;
  /**
   * @example
   * 0
   */
  iaDataSize?: number;
  /**
   * @example
   * ecs
   */
  productType?: string;
  /**
   * @example
   * 0
   */
  protectionScore?: number;
  /**
   * @example
   * 0
   */
  protectionScoreUpdatedTime?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * acs:ecs:cn-hangzhou:xxxxxxxx:instance/xxxxx
   */
  resourceArn?: string;
  /**
   * @example
   * i-xxxxxxxx
   */
  resourceId?: string;
  /**
   * @example
   * test server
   */
  resourceName?: string;
  /**
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @example
   * 0
   */
  standardDataSize?: number;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * 0
   */
  totalDataSize?: number;
  /**
   * @remarks
   * vSwitch ID
   * 
   * @example
   * vsw-xxxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * vpc ID
   * 
   * @example
   * vpc-xxxxxxxx
   */
  vpcId?: string;
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      archiveDataSize: 'ArchiveDataSize',
      checkFailedCount: 'CheckFailedCount',
      coldArchiveDataSize: 'ColdArchiveDataSize',
      createTime: 'CreateTime',
      enableCheck: 'EnableCheck',
      iaDataSize: 'IaDataSize',
      productType: 'ProductType',
      protectionScore: 'ProtectionScore',
      protectionScoreUpdatedTime: 'ProtectionScoreUpdatedTime',
      regionId: 'RegionId',
      resourceArn: 'ResourceArn',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      riskCount: 'RiskCount',
      standardDataSize: 'StandardDataSize',
      status: 'Status',
      totalDataSize: 'TotalDataSize',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveDataSize: 'number',
      checkFailedCount: 'number',
      coldArchiveDataSize: 'number',
      createTime: 'number',
      enableCheck: 'boolean',
      iaDataSize: 'number',
      productType: 'string',
      protectionScore: 'number',
      protectionScoreUpdatedTime: 'number',
      regionId: 'string',
      resourceArn: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      riskCount: 'number',
      standardDataSize: 'number',
      status: 'string',
      totalDataSize: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesResponseBodyData extends $tea.Model {
  content?: DescribeResourcesResponseBodyDataContent[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * fb836242f4225fa0f0e0257362dfc6dd
   */
  nextToken?: string;
  /**
   * @example
   * 149
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeResourcesResponseBodyDataContent },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesResponseBodyDataContent extends $tea.Model {
  /**
   * @example
   * 0
   */
  checkFailedResourceCount?: number;
  /**
   * @example
   * PASSED
   */
  checkStatus?: string;
  /**
   * @example
   * 1704157635
   */
  checkTime?: number;
  /**
   * @example
   * ecs
   */
  productType?: string;
  /**
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @example
   * 0
   */
  riskyResourceCount?: number;
  /**
   * @example
   * rule-bp11ggd8wr762
   */
  ruleId?: string;
  /**
   * @example
   * ecs-backup
   */
  ruleTemplate?: string;
  /**
   * @example
   * 1
   */
  totalResourceCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkFailedResourceCount: 'CheckFailedResourceCount',
      checkStatus: 'CheckStatus',
      checkTime: 'CheckTime',
      productType: 'ProductType',
      resourceType: 'ResourceType',
      riskyResourceCount: 'RiskyResourceCount',
      ruleId: 'RuleId',
      ruleTemplate: 'RuleTemplate',
      totalResourceCount: 'TotalResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkFailedResourceCount: 'number',
      checkStatus: 'string',
      checkTime: 'number',
      productType: 'string',
      resourceType: 'string',
      riskyResourceCount: 'number',
      ruleId: 'string',
      ruleTemplate: 'string',
      totalResourceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesResponseBodyData extends $tea.Model {
  content?: DescribeRulesResponseBodyDataContent[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 0975951c75d7b41464c8d08ae17043ca
   */
  nextToken?: string;
  /**
   * @example
   * 42
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeRulesResponseBodyDataContent },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1724983927
   */
  completeTime?: number;
  /**
   * @example
   * too many requests.
   */
  errorMessage?: string;
  executionId?: string;
  /**
   * @example
   * 1719026680
   */
  expireTime?: number;
  /**
   * @example
   * 100
   */
  progress?: number;
  /**
   * @example
   * 784076D6-BD6D-5564-9CEA-834EB11F0C62
   */
  requestId?: string;
  /**
   * @example
   * 1724983927
   */
  startTime?: number;
  taskDescription?: string;
  /**
   * @example
   * {"resourceTypes":["ACS::ECS::Instance","ACS::OSS::Bucket","ACS::OTS::Instance","ACS::NAS::FileSystem"]}
   */
  taskDetail?: string;
  /**
   * @example
   * t-xxxxxxxx
   */
  taskId?: string;
  /**
   * @example
   * test5566
   */
  taskName?: string;
  taskPriority?: string;
  /**
   * @example
   * RUNNING
   */
  taskStatus?: string;
  /**
   * @example
   * UPDATE_RESOURCES
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      errorMessage: 'ErrorMessage',
      executionId: 'ExecutionId',
      expireTime: 'ExpireTime',
      progress: 'Progress',
      requestId: 'RequestId',
      startTime: 'StartTime',
      taskDescription: 'TaskDescription',
      taskDetail: 'TaskDetail',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskPriority: 'TaskPriority',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'number',
      errorMessage: 'string',
      executionId: 'string',
      expireTime: 'number',
      progress: 'number',
      requestId: 'string',
      startTime: 'number',
      taskDescription: 'string',
      taskDetail: 'string',
      taskId: 'string',
      taskName: 'string',
      taskPriority: 'string',
      taskStatus: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBodyDataContent extends $tea.Model {
  /**
   * @example
   * 1724983927
   */
  completeTime?: number;
  /**
   * @example
   * device not online
   */
  errorMessage?: string;
  /**
   * @example
   * empty
   */
  executionId?: string;
  /**
   * @example
   * 1724983927
   */
  expireTime?: number;
  /**
   * @example
   * 100
   */
  progress?: number;
  /**
   * @example
   * AE43C4CB-8074-5EBD-9806-8CA6D12800B1
   */
  requestId?: string;
  /**
   * @example
   * 1724983927
   */
  startTime?: number;
  /**
   * @example
   * empty
   */
  taskDescription?: string;
  /**
   * @example
   * {"resourceTypes":["ACS::ECS::Instance","ACS::OSS::Bucket","ACS::OTS::Instance","ACS::NAS::FileSystem"]}
   */
  taskDetail?: string;
  /**
   * @example
   * t-0000e4w0u1v592zdf6s7
   */
  taskId?: string;
  /**
   * @example
   * empty
   */
  taskName?: string;
  /**
   * @example
   * HIGH
   */
  taskPriority?: string;
  /**
   * @example
   * RUNNING
   */
  taskStatus?: string;
  /**
   * @example
   * UPDATE_RESOURCES
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      errorMessage: 'ErrorMessage',
      executionId: 'ExecutionId',
      expireTime: 'ExpireTime',
      progress: 'Progress',
      requestId: 'RequestId',
      startTime: 'StartTime',
      taskDescription: 'TaskDescription',
      taskDetail: 'TaskDetail',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskPriority: 'TaskPriority',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'number',
      errorMessage: 'string',
      executionId: 'string',
      expireTime: 'number',
      progress: 'number',
      requestId: 'string',
      startTime: 'number',
      taskDescription: 'string',
      taskDetail: 'string',
      taskId: 'string',
      taskName: 'string',
      taskPriority: 'string',
      taskStatus: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBodyData extends $tea.Model {
  content?: DescribeTasksResponseBodyDataContent[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * f4b8c2504545a3b41af5e75147d17d12e3818a0b9b2ff9a2
   */
  nextToken?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeTasksResponseBodyDataContent },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopRiskyResourcesResponseBodyDataContent extends $tea.Model {
  /**
   * @example
   * 0
   */
  archiveDataSize?: number;
  /**
   * @example
   * 0
   */
  checkFailedCount?: number;
  /**
   * @example
   * 0
   */
  coldArchiveDataSize?: number;
  /**
   * @example
   * 1697798340
   */
  createTime?: number;
  /**
   * @example
   * true
   */
  enableCheck?: boolean;
  /**
   * @example
   * 0
   */
  iaDataSize?: number;
  /**
   * @example
   * ecs
   */
  productType?: string;
  /**
   * @example
   * 90
   */
  protectionScore?: number;
  /**
   * @example
   * 1726036498
   */
  protectionScoreUpdatedTime?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * acs:ecs:cn-hangzhou:xxxxxxxx:instance/xxxxx
   */
  resourceArn?: string;
  /**
   * @example
   * i-xxxxxxxx
   */
  resourceId?: string;
  /**
   * @example
   * test-server
   */
  resourceName?: string;
  /**
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @example
   * 0
   */
  standardDataSize?: number;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * 0
   */
  totalDataSize?: number;
  /**
   * @remarks
   * vSwitch ID
   * 
   * @example
   * vsw-xxxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * vpc ID
   * 
   * @example
   * vpc-xxxxxxxx
   */
  vpcId?: string;
  /**
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      archiveDataSize: 'ArchiveDataSize',
      checkFailedCount: 'CheckFailedCount',
      coldArchiveDataSize: 'ColdArchiveDataSize',
      createTime: 'CreateTime',
      enableCheck: 'EnableCheck',
      iaDataSize: 'IaDataSize',
      productType: 'ProductType',
      protectionScore: 'ProtectionScore',
      protectionScoreUpdatedTime: 'ProtectionScoreUpdatedTime',
      regionId: 'RegionId',
      resourceArn: 'ResourceArn',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      riskCount: 'RiskCount',
      standardDataSize: 'StandardDataSize',
      status: 'Status',
      totalDataSize: 'TotalDataSize',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveDataSize: 'number',
      checkFailedCount: 'number',
      coldArchiveDataSize: 'number',
      createTime: 'number',
      enableCheck: 'boolean',
      iaDataSize: 'number',
      productType: 'string',
      protectionScore: 'number',
      protectionScoreUpdatedTime: 'number',
      regionId: 'string',
      resourceArn: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      riskCount: 'number',
      standardDataSize: 'number',
      status: 'string',
      totalDataSize: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopRiskyResourcesResponseBodyData extends $tea.Model {
  content?: DescribeTopRiskyResourcesResponseBodyDataContent[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * e557bc9a65fe22cb5e2a3b240f06b0de
   */
  nextToken?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeTopRiskyResourcesResponseBodyDataContent },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBdrcServiceResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1726169608
   */
  openTime?: number;
  /**
   * @example
   * 1726169608
   */
  protectionScoreUpdatedTime?: number;
  /**
   * @example
   * SUCCESS
   */
  serviceInitializeStatus?: string;
  /**
   * @example
   * OPENED
   */
  serviceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      openTime: 'OpenTime',
      protectionScoreUpdatedTime: 'ProtectionScoreUpdatedTime',
      serviceInitializeStatus: 'ServiceInitializeStatus',
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openTime: 'number',
      protectionScoreUpdatedTime: 'number',
      serviceInitializeStatus: 'string',
      serviceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourcesResponseBodyData extends $tea.Model {
  /**
   * @example
   * t-bp1ewftyzmeg3bl4dtd2
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("bdrc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @param request - CheckRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckRulesResponse
   */
  async checkRulesWithOptions(request: CheckRulesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CheckRulesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceArn)) {
      body["ResourceArn"] = request.resourceArn;
    }

    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CheckRules",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/rules/check`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckRulesResponse>(await this.callApi(params, req, runtime), new CheckRulesResponse({}));
  }

  /**
   * @param request - CheckRulesRequest
   * @returns CheckRulesResponse
   */
  async checkRules(request: CheckRulesRequest): Promise<CheckRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkRulesWithOptions(request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseBdrcServiceResponse
   */
  async closeBdrcServiceWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CloseBdrcServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CloseBdrcService",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/service/close`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CloseBdrcServiceResponse>(await this.callApi(params, req, runtime), new CloseBdrcServiceResponse({}));
  }

  /**
   * @returns CloseBdrcServiceResponse
   */
  async closeBdrcService(): Promise<CloseBdrcServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.closeBdrcServiceWithOptions(headers, runtime);
  }

  /**
   * @param request - DescribeCheckDetailsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCheckDetailsResponse
   */
  async describeCheckDetailsWithOptions(request: DescribeCheckDetailsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeCheckDetailsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceArn)) {
      query["ResourceArn"] = request.resourceArn;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCheckDetails",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/check-details`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeCheckDetailsResponse>(await this.callApi(params, req, runtime), new DescribeCheckDetailsResponse({}));
  }

  /**
   * @param request - DescribeCheckDetailsRequest
   * @returns DescribeCheckDetailsResponse
   */
  async describeCheckDetails(request: DescribeCheckDetailsRequest): Promise<DescribeCheckDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeCheckDetailsWithOptions(request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProductsResponse
   */
  async describeProductsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeProductsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeProducts",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/products`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeProductsResponse>(await this.callApi(params, req, runtime), new DescribeProductsResponse({}));
  }

  /**
   * @returns DescribeProductsResponse
   */
  async describeProducts(): Promise<DescribeProductsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeProductsWithOptions(headers, runtime);
  }

  /**
   * @param request - DescribeResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourcesResponse
   */
  async describeResourcesWithOptions(request: DescribeResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.failedRuleTemplate)) {
      query["FailedRuleTemplate"] = request.failedRuleTemplate;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResources",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourcesResponse>(await this.callApi(params, req, runtime), new DescribeResourcesResponse({}));
  }

  /**
   * @param request - DescribeResourcesRequest
   * @returns DescribeResourcesResponse
   */
  async describeResources(request: DescribeResourcesRequest): Promise<DescribeResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeResourcesWithOptions(request, headers, runtime);
  }

  /**
   * @param request - DescribeRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRulesResponse
   */
  async describeRulesWithOptions(request: DescribeRulesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRulesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRules",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/rules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeRulesResponse>(await this.callApi(params, req, runtime), new DescribeRulesResponse({}));
  }

  /**
   * @param request - DescribeRulesRequest
   * @returns DescribeRulesResponse
   */
  async describeRules(request: DescribeRulesRequest): Promise<DescribeRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRulesWithOptions(request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTaskResponse
   */
  async describeTaskWithOptions(TaskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeTask",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/tasks/${OpenApiUtil.getEncodeParam(TaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeTaskResponse>(await this.callApi(params, req, runtime), new DescribeTaskResponse({}));
  }

  /**
   * @returns DescribeTaskResponse
   */
  async describeTask(TaskId: string): Promise<DescribeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTaskWithOptions(TaskId, headers, runtime);
  }

  /**
   * @param request - DescribeTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTasksResponse
   */
  async describeTasksWithOptions(request: DescribeTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.taskStatus)) {
      query["TaskStatus"] = request.taskStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTasks",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeTasksResponse>(await this.callApi(params, req, runtime), new DescribeTasksResponse({}));
  }

  /**
   * @param request - DescribeTasksRequest
   * @returns DescribeTasksResponse
   */
  async describeTasks(request: DescribeTasksRequest): Promise<DescribeTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTasksWithOptions(request, headers, runtime);
  }

  /**
   * @param request - DescribeTopRiskyResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTopRiskyResourcesResponse
   */
  async describeTopRiskyResourcesWithOptions(request: DescribeTopRiskyResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeTopRiskyResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTopRiskyResources",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/top-risky`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeTopRiskyResourcesResponse>(await this.callApi(params, req, runtime), new DescribeTopRiskyResourcesResponse({}));
  }

  /**
   * @param request - DescribeTopRiskyResourcesRequest
   * @returns DescribeTopRiskyResourcesResponse
   */
  async describeTopRiskyResources(request: DescribeTopRiskyResourcesRequest): Promise<DescribeTopRiskyResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTopRiskyResourcesWithOptions(request, headers, runtime);
  }

  /**
   * @param request - DisableCheckProductRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableCheckProductResponse
   */
  async disableCheckProductWithOptions(request: DisableCheckProductRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DisableCheckProductResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DisableCheckProduct",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/products/disable-check`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableCheckProductResponse>(await this.callApi(params, req, runtime), new DisableCheckProductResponse({}));
  }

  /**
   * @param request - DisableCheckProductRequest
   * @returns DisableCheckProductResponse
   */
  async disableCheckProduct(request: DisableCheckProductRequest): Promise<DisableCheckProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableCheckProductWithOptions(request, headers, runtime);
  }

  /**
   * @param request - DisableCheckResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableCheckResourceResponse
   */
  async disableCheckResourceWithOptions(request: DisableCheckResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DisableCheckResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceArn)) {
      body["ResourceArn"] = request.resourceArn;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DisableCheckResource",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/disable-check`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableCheckResourceResponse>(await this.callApi(params, req, runtime), new DisableCheckResourceResponse({}));
  }

  /**
   * @param request - DisableCheckResourceRequest
   * @returns DisableCheckResourceResponse
   */
  async disableCheckResource(request: DisableCheckResourceRequest): Promise<DisableCheckResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableCheckResourceWithOptions(request, headers, runtime);
  }

  /**
   * @param request - EnableCheckProductRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableCheckProductResponse
   */
  async enableCheckProductWithOptions(request: EnableCheckProductRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableCheckProductResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EnableCheckProduct",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/products/enable-check`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableCheckProductResponse>(await this.callApi(params, req, runtime), new EnableCheckProductResponse({}));
  }

  /**
   * @param request - EnableCheckProductRequest
   * @returns EnableCheckProductResponse
   */
  async enableCheckProduct(request: EnableCheckProductRequest): Promise<EnableCheckProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableCheckProductWithOptions(request, headers, runtime);
  }

  /**
   * @param request - EnableCheckResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableCheckResourceResponse
   */
  async enableCheckResourceWithOptions(request: EnableCheckResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableCheckResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceArn)) {
      body["ResourceArn"] = request.resourceArn;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EnableCheckResource",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/enable-check`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableCheckResourceResponse>(await this.callApi(params, req, runtime), new EnableCheckResourceResponse({}));
  }

  /**
   * @param request - EnableCheckResourceRequest
   * @returns EnableCheckResourceResponse
   */
  async enableCheckResource(request: EnableCheckResourceRequest): Promise<EnableCheckResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableCheckResourceWithOptions(request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBdrcServiceResponse
   */
  async getBdrcServiceWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBdrcServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetBdrcService",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/service`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetBdrcServiceResponse>(await this.callApi(params, req, runtime), new GetBdrcServiceResponse({}));
  }

  /**
   * @returns GetBdrcServiceResponse
   */
  async getBdrcService(): Promise<GetBdrcServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBdrcServiceWithOptions(headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenBdrcServiceResponse
   */
  async openBdrcServiceWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<OpenBdrcServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "OpenBdrcService",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/service/open`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<OpenBdrcServiceResponse>(await this.callApi(params, req, runtime), new OpenBdrcServiceResponse({}));
  }

  /**
   * @returns OpenBdrcServiceResponse
   */
  async openBdrcService(): Promise<OpenBdrcServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openBdrcServiceWithOptions(headers, runtime);
  }

  /**
   * @param request - UpdateResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourcesResponse
   */
  async updateResourcesWithOptions(request: UpdateResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResources",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourcesResponse>(await this.callApi(params, req, runtime), new UpdateResourcesResponse({}));
  }

  /**
   * @param request - UpdateResourcesRequest
   * @returns UpdateResourcesResponse
   */
  async updateResources(request: UpdateResourcesRequest): Promise<UpdateResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourcesWithOptions(request, headers, runtime);
  }

}
