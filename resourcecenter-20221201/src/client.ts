// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AssociateDefaultFilterRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the filter.
   * 
   * This parameter is required.
   */
  filterName?: string;
  static names(): { [key: string]: string } {
    return {
      filterName: 'FilterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateDefaultFilterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54673B22-2001-556A-B394-B8697AA9670B
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

export class AssociateDefaultFilterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateDefaultFilterResponseBody;
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
      body: AssociateDefaultFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFilterRequest extends $tea.Model {
  /**
   * @remarks
   * The configurations of the filter.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *   "regions": [],
   *   "tagFilters": [
   *     [{ "type": "notContainTagKey", "tagKey": "xxx", "tagValue": "" }],
   *     [{ "tagKey": "xxx", "tagValue": "xxx" }]
   *   ],
   *   "resourceTypes": [
   *     "ACS::ECS::AutoSnapshotPolicy"
   *   ]
   * }
   */
  filterConfiguration?: string;
  /**
   * @remarks
   * The name of the filter.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS
   */
  filterName?: string;
  static names(): { [key: string]: string } {
    return {
      filterConfiguration: 'FilterConfiguration',
      filterName: 'FilterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterConfiguration: 'string',
      filterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFilterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EEF1EE1F-50F6-5494-B3DA-8F597DEB31BF
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

export class CreateFilterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFilterResponseBody;
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
      body: CreateFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavedQueryRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the template.
   * 
   * The description must be 1 to 256 characters in length.
   * 
   * @example
   * Queries all resources on which you have permissions and sorts the resources by resource type and resource ID.
   */
  description?: string;
  /**
   * @remarks
   * The query statement in the template.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT * FROM resources;
   */
  expression?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * *   The name must be 1 to 64 characters in length.
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * Query of All Alibaba Cloud Resources
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expression: 'Expression',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expression: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavedQueryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * sq-GeAck****
   */
  queryId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EFA806B9-7F36-55AB-8B7A-D680C2C5EE57
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryId: 'QueryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavedQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSavedQueryResponseBody;
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
      body: CreateSavedQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFilterRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the filter.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS
   */
  filterName?: string;
  static names(): { [key: string]: string } {
    return {
      filterName: 'FilterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFilterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A4A63E3C-89EC-51F9-9934-C9AF1BCBAAA5
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

export class DeleteFilterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFilterResponseBody;
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
      body: DeleteFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSavedQueryRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the template.
   * 
   * You can call the [ListSavedQueries](~~ListSavedQueries~~) operation to obtain the template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sq-GeAck****
   */
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSavedQueryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D170D58E-6256-5344-8F5E-922EC9ECB7EA
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

export class DeleteSavedQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSavedQueryResponseBody;
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
      body: DeleteSavedQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableMultiAccountResourceCenterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4951F920-48DB-5731-96AA-3A7C8AE617D9
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

export class DisableMultiAccountResourceCenterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableMultiAccountResourceCenterResponseBody;
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
      body: DisableMultiAccountResourceCenterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableResourceCenterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D170D58E-6256-5344-8F5E-922EC9ECB7EA
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

export class DisableResourceCenterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableResourceCenterResponseBody;
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
      body: DisableResourceCenterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateDefaultFilterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BCAB07BA-82FA-5DC0-9322-FB7ED726481D
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

export class DisassociateDefaultFilterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisassociateDefaultFilterResponseBody;
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
      body: DisassociateDefaultFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMultiAccountResourceCenterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 767038B7-2027-5508-858B-E213232D57D5
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the feature. Valid values:
   * 
   * *   Pending: The feature is being enabled.
   * *   Enabled: The feature is enabled.
   * 
   * @example
   * Pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMultiAccountResourceCenterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableMultiAccountResourceCenterResponseBody;
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
      body: EnableMultiAccountResourceCenterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableResourceCenterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 45357BEF-AB50-5E4D-B05D-5A882A4BE924
   */
  requestId?: string;
  /**
   * @remarks
   * The activation status of the service. Valid values:
   * 
   * *   Pending: The service is being activated.
   * *   Enabled: The service is activated.
   * 
   * @example
   * Pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableResourceCenterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableResourceCenterResponseBody;
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
      body: EnableResourceCenterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteMultiAccountSQLQueryRequest extends $tea.Model {
  /**
   * @remarks
   * The SQL statement to be executed.
   * 
   * The number of characters in the SQL statement must be less than 2,000.
   * 
   * For more information about the SQL syntax, see [Basic SQL syntax](https://help.aliyun.com/document_detail/2539395.html).
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT * FROM resources LIMIT 100;
   */
  expression?: string;
  /**
   * @remarks
   * The search scope. The value of this parameter can be one of the following items:
   * 
   * *   ID of a resource directory: Resources within the management account and all members of the resource directory are searched.
   * *   ID of the Root folder: Resources within all members in the Root folder and the subfolders of the Root folder are searched.
   * *   ID of a folder: Resources within all members in the folder are searched.
   * *   ID of a member: Resources within the member are searched.
   * *   ID of a member/ID of a Resource group: Resources within the member in the resource group are searched.
   * 
   * For more information about how to obtain the ID of a resource directory, the Root folder, a folder, a member, or a resource group, see [GetResourceDirectory](https://help.aliyun.com/document_detail/159995.html), [ListFoldersForParent](https://help.aliyun.com/document_detail/159997.html), [ListFoldersForParent](https://help.aliyun.com/document_detail/159997.html), [ListAccounts](https://help.aliyun.com/document_detail/160016.html), or [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rd-r4****
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteMultiAccountSQLQueryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The columns.
   */
  columns?: ExecuteMultiAccountSQLQueryResponseBodyColumns[];
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 44C8A952-D6B0-5BC8-82D5-93BA02E26F2E
   */
  requestId?: string;
  /**
   * @remarks
   * An array of search results.
   */
  rows?: any[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': ExecuteMultiAccountSQLQueryResponseBodyColumns },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      rows: { 'type': 'array', 'itemType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteMultiAccountSQLQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteMultiAccountSQLQueryResponseBody;
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
      body: ExecuteMultiAccountSQLQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSQLQueryRequest extends $tea.Model {
  /**
   * @remarks
   * The SQL statement to be executed.
   * 
   * The number of characters in the SQL statement must be less than 2,000.
   * 
   * For more information about the SQL syntax, see [Basic SQL syntax](https://help.aliyun.com/document_detail/2539395.html).
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT * FROM resources LIMIT 100;
   */
  expression?: string;
  /**
   * @remarks
   * The search scope.
   * 
   * Set this parameter to the ID of a resource group.
   * 
   * For information about how to obtain the ID of a resource group, see [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html).
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSQLQueryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The columns.
   */
  columns?: ExecuteSQLQueryResponseBodyColumns[];
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D696E6EF-3A6D-5770-801E-4982081FE4D0
   */
  requestId?: string;
  /**
   * @remarks
   * An array of search results.
   */
  rows?: any[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': ExecuteSQLQueryResponseBodyColumns },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      rows: { 'type': 'array', 'itemType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSQLQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteSQLQueryResponseBody;
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
      body: ExecuteSQLQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExampleQueryRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the template.
   * 
   * >  You can call the [ListExampleQueries](~~ListExampleQueries~~) operation to obtain the template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sq-0PfKy****
   */
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExampleQueryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the sample query template.
   */
  exampleQuery?: GetExampleQueryResponseBodyExampleQuery;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36A3D9BE-B607-5993-B546-7E19EF65DC00
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exampleQuery: 'ExampleQuery',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exampleQuery: GetExampleQueryResponseBodyExampleQuery,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExampleQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetExampleQueryResponseBody;
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
      body: GetExampleQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiAccountResourceCenterServiceStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The initialization status of the feature. Valid values:
   * 
   * *   Pending: The feature is being initialized.
   * *   Finished: The feature is initialized.
   * 
   * @example
   * Pending
   */
  initialStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 81671397-1425-51F1-A144-4799E01BEBFF
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the feature. Valid values:
   * 
   * *   Enabled: The feature is enabled.
   * *   Disabled: The feature is disabled.
   * 
   * @example
   * Enabled
   */
  serviceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      initialStatus: 'InitialStatus',
      requestId: 'RequestId',
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initialStatus: 'string',
      requestId: 'string',
      serviceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiAccountResourceCenterServiceStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMultiAccountResourceCenterServiceStatusResponseBody;
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
      body: GetMultiAccountResourceCenterServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiAccountResourceConfigurationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the management account or member of the resource directory.
   * 
   * This parameter is required.
   * 
   * @example
   * 1619302****
   */
  accountId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * m-eb3hji****
   */
  resourceId?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * ACS::VPC::RouteTable
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      resourceId: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiAccountResourceConfigurationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the management account or member of the resource directory.
   * 
   * @example
   * 1619302****
   */
  accountId?: string;
  /**
   * @remarks
   * The configurations of the resource.
   */
  configuration?: { [key: string]: any };
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * @example
   * 2023-02-14T03:12:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the resource expires.
   * 
   * @example
   * 2023-09-18T07:04:21Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The attributes of the IP address.
   */
  ipAddressAttributes?: GetMultiAccountResourceConfigurationResponseBodyIpAddressAttributes[];
  /**
   * @remarks
   * The IP addresses.
   * 
   * > Whether this parameter is returned is determined by the Alibaba Cloud service to which the resource belongs.
   */
  ipAddresses?: string[];
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B2DCC08B-C12A-5705-879C-5A1450016156
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the resource belongs.
   * 
   * @example
   * rg-acfmzy6d****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * m-eb3hji****
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * test_resource
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ACS::VPC::RouteTable
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags of the resource.
   */
  tags?: GetMultiAccountResourceConfigurationResponseBodyTags[];
  /**
   * @remarks
   * The zone ID of the resource.
   * 
   * @example
   * cn-shanghai-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      configuration: 'Configuration',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      ipAddressAttributes: 'IpAddressAttributes',
      ipAddresses: 'IpAddresses',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      configuration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createTime: 'string',
      expireTime: 'string',
      ipAddressAttributes: { 'type': 'array', 'itemType': GetMultiAccountResourceConfigurationResponseBodyIpAddressAttributes },
      ipAddresses: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': GetMultiAccountResourceConfigurationResponseBodyTags },
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiAccountResourceConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMultiAccountResourceConfigurationResponseBody;
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
      body: GetMultiAccountResourceConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceCenterServiceStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The initialization status of the service. Valid values:
   * 
   * *   Pending: The service is being initialized.
   * *   Finished: The service is initialized.
   * 
   * @example
   * Pending
   */
  initialStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AD5F848D-CCDC-5464-93E1-4BA50A4826DD
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the service. Valid values:
   * 
   * *   Enabled: The service is activated.
   * *   Disabled: The service is deactivated.
   * 
   * @example
   * Enabled
   */
  serviceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      initialStatus: 'InitialStatus',
      requestId: 'RequestId',
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initialStatus: 'string',
      requestId: 'string',
      serviceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceCenterServiceStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceCenterServiceStatusResponseBody;
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
      body: GetResourceCenterServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceConfigurationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-bp1kyg72m****
   */
  resourceId?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * For more information about the resource types supported by Resource Center, see [Services that work with Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ACS::VPC::RouteTable
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceConfigurationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 151266687691****
   */
  accountId?: string;
  /**
   * @remarks
   * The configurations of the resource.
   */
  configuration?: { [key: string]: any };
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * @example
   * 2021-06-30T09:20:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the resource expires.
   * 
   * @example
   * 2021-07-30T09:20:08Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The attributes of the IP address.
   */
  ipAddressAttributes?: GetResourceConfigurationResponseBodyIpAddressAttributes[];
  /**
   * @remarks
   * The IP addresses.
   * 
   * > Whether this parameter is returned is determined by the Alibaba Cloud service to which the resource belongs.
   */
  ipAddresses?: string[];
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F1CE0D52-32DA-531A-87A4-B9A5B68D5D8E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the resource belongs.
   * 
   * @example
   * rg-acfmv4k****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * vtb-uf6978gdqbi****
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * group1
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ACS::VPC::VSwitch
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags of the resource.
   */
  tags?: GetResourceConfigurationResponseBodyTags[];
  /**
   * @remarks
   * The zone ID of the resource.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      configuration: 'Configuration',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      ipAddressAttributes: 'IpAddressAttributes',
      ipAddresses: 'IpAddresses',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      configuration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createTime: 'string',
      expireTime: 'string',
      ipAddressAttributes: { 'type': 'array', 'itemType': GetResourceConfigurationResponseBodyIpAddressAttributes },
      ipAddresses: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': GetResourceConfigurationResponseBodyTags },
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceConfigurationResponseBody;
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
      body: GetResourceConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceCountsRequest extends $tea.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filter?: GetResourceCountsRequestFilter[];
  /**
   * @remarks
   * The dimension by which resources are queried. Valid values:
   * 
   * *   ResourceType
   * *   Region
   * *   ResourceGroupId
   * *   TagKey
   * *   TagValue
   * 
   * @example
   * ResourceType
   */
  groupByKey?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      groupByKey: 'GroupByKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': GetResourceCountsRequestFilter },
      groupByKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceCountsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filters?: GetResourceCountsResponseBodyFilters[];
  /**
   * @remarks
   * The dimension by which resources are queried.
   * 
   * @example
   * ResourceType
   */
  groupByKey?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6D98D9B0-318D-56A4-910C-93B5F945AF2B
   */
  requestId?: string;
  /**
   * @remarks
   * The numbers of resources.
   */
  resourceCounts?: GetResourceCountsResponseBodyResourceCounts[];
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      groupByKey: 'GroupByKey',
      requestId: 'RequestId',
      resourceCounts: 'ResourceCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': GetResourceCountsResponseBodyFilters },
      groupByKey: 'string',
      requestId: 'string',
      resourceCounts: { 'type': 'array', 'itemType': GetResourceCountsResponseBodyResourceCounts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceCountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceCountsResponseBody;
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
      body: GetResourceCountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavedQueryRequest extends $tea.Model {
  /**
   * @remarks
   * The template ID.
   * 
   * >  You can call the [ListSavedQueries](~~ListSavedQueries~~) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sq-GeAck****
   */
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavedQueryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6D98D9B0-318D-56A4-910C-93B5F945AF2B
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the template.
   */
  savedQuery?: GetSavedQueryResponseBodySavedQuery;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      savedQuery: 'SavedQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      savedQuery: GetSavedQueryResponseBodySavedQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavedQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSavedQueryResponseBody;
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
      body: GetSavedQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExampleQueriesRequest extends $tea.Model {
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 50.
   * 
   * Default value: 50.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExampleQueriesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the sample query templates.
   */
  exampleQueries?: ListExampleQueriesResponseBodyExampleQueries[];
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D696E6EF-3A6D-5770-801E-4982081FE4D0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exampleQueries: 'ExampleQueries',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exampleQueries: { 'type': 'array', 'itemType': ListExampleQueriesResponseBodyExampleQueries },
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExampleQueriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExampleQueriesResponseBody;
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
      body: ListExampleQueriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFiltersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The name of the default filter.
   */
  defaultFilterName?: string;
  /**
   * @remarks
   * The configurations of the filter.
   */
  filters?: ListFiltersResponseBodyFilters[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AA39FB9C-CB74-5E73-8DFE-3A2B096F0759
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultFilterName: 'DefaultFilterName',
      filters: 'Filters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultFilterName: 'string',
      filters: { 'type': 'array', 'itemType': ListFiltersResponseBodyFilters },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFiltersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFiltersResponseBody;
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
      body: ListFiltersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiAccountResourceGroupsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the management account or member of the resource directory.
   * 
   * This parameter is required.
   * 
   * @example
   * 1394339739****
   */
  accountId?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * Maximum value: 100. Default value: 10.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAS2Nboi3t4xGrdlG5/Ks/Q1xPG9jzviYEuZydevXIkgF
   */
  nextToken?: string;
  /**
   * @remarks
   * The IDs of resource groups.
   */
  resourceGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupIds: 'ResourceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiAccountResourceGroupsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAU5VsT9R1adMTuz9GzginZ3Y+7Y/5JATS+6q5GK9kT75
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FF0A66E-781F-51EE-9531-928F197558F2
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource groups.
   */
  resourceGroups?: ListMultiAccountResourceGroupsResponseBodyResourceGroups[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceGroups: 'ResourceGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resourceGroups: { 'type': 'array', 'itemType': ListMultiAccountResourceGroupsResponseBodyResourceGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiAccountResourceGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMultiAccountResourceGroupsResponseBody;
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
      body: ListMultiAccountResourceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiAccountTagKeysRequest extends $tea.Model {
  /**
   * @remarks
   * The matching mode. Valid values:
   * 
   * *   Equals: equal match
   * *   Prefix: match by prefix
   * 
   * @example
   * Equals
   */
  matchType?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * If the total number of entries returned for the current request exceeds the value of the `MaxResults` parameter, the entries are truncated. In this case, you can use the `token` to initiate another request and obtain the remaining entries.
   * 
   * @example
   * eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The search scope. You can set the value to one of the following items:
   * 
   * *   ID of a resource directory: Resources within the management account and all members of the resource directory are searched. You can call the [GetResourceDirectory](https://help.aliyun.com/document_detail/159995.html) operation to obtain the ID.
   * *   ID of the Root folder: Resources within all members in the Root folder and the subfolders of the Root folder are searched. You can call the [ListFoldersForParent](https://help.aliyun.com/document_detail/159997.html) operation to obtain the ID.
   * *   ID of a folder: Resources within all members in the folder are searched. You can call the [ListFoldersForParent](https://help.aliyun.com/document_detail/159997.html) operation to obtain the ID.
   * *   ID of a member: Resources within the member are searched. You can call the [ListAccounts](https://help.aliyun.com/document_detail/160016.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rd-r4****
   */
  scope?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test_key
   */
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      matchType: 'MatchType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      scope: 'Scope',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      scope: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiAccountTagKeysResponseBody extends $tea.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAARfZmVDe9NvRXloR5+8CK9nNJufMdRA7W1miLC1P****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FA6086F9-6363-51A5-A507-88E3201EBCCB
   */
  requestId?: string;
  /**
   * @remarks
   * The tag keys.
   */
  tagKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiAccountTagKeysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMultiAccountTagKeysResponseBody;
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
      body: ListMultiAccountTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiAccountTagValuesRequest extends $tea.Model {
  /**
   * @remarks
   * The matching mode. Valid values:
   * 
   * *   Equals: equal match
   * *   Prefix: match by prefix
   * 
   * @example
   * Equals
   */
  matchType?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * If the total number of entries returned for the current request exceeds the value of the `MaxResults` parameter, the entries are truncated. In this case, you can use the `token` to initiate another request and obtain the remaining entries.
   * 
   * @example
   * eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The search scope. You can set the value to one of the following items:
   * 
   * *   ID of a resource directory: Resources within the management account and all members of the resource directory are searched. You can call the [GetResourceDirectory](https://help.aliyun.com/document_detail/159995.html) operation to obtain the ID.
   * *   ID of the Root folder: Resources within all members in the Root folder and the subfolders of the Root folder are searched. You can call the [ListFoldersForParent](https://help.aliyun.com/document_detail/159997.html) operation to obtain the ID.
   * *   ID of a folder: Resources within all members in the folder are searched. You can call the [ListFoldersForParent](https://help.aliyun.com/document_detail/159997.html) operation to obtain the ID.
   * *   ID of a member: Resources within the member are searched. You can call the [ListAccounts](https://help.aliyun.com/document_detail/160016.html) operation to obtain the ID.
   * 
   * @example
   * rd-r4****
   */
  scope?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * This parameter is required.
   * 
   * @example
   * test_key
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test_value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      matchType: 'MatchType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      scope: 'Scope',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      scope: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiAccountTagValuesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 36A3D9BE-B607-5993-B546-7E19EF65DC00
   */
  requestId?: string;
  /**
   * @remarks
   * The tag values.
   */
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiAccountTagValuesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMultiAccountTagValuesResponseBody;
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
      body: ListMultiAccountTagValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The query conditions.
   */
  query?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * For more information about the resource types that are supported by Resource Center, see [Services that work with Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * 
   * @example
   * ACS::ACK::Cluster
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      query: 'Query',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      query: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E5556E4C-479A-5BBB-B325-F07563E7E917
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource types.
   */
  resourceTypes?: ListResourceTypesResponseBodyResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceTypes: { 'type': 'array', 'itemType': ListResourceTypesResponseBodyResourceTypes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceTypesResponseBody;
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
      body: ListResourceTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSavedQueriesRequest extends $tea.Model {
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 50.
   * 
   * Default value: 50.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSavedQueriesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAARfZmVDe9NvRXloR5+8CK9nNJufMdRA7W1miLC1P****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D696E6EF-3A6D-5770-801E-4982081FE4D0
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the custom query templates.
   */
  savedQueries?: ListSavedQueriesResponseBodySavedQueries[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      savedQueries: 'SavedQueries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      savedQueries: { 'type': 'array', 'itemType': ListSavedQueriesResponseBodySavedQueries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSavedQueriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSavedQueriesResponseBody;
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
      body: ListSavedQueriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  /**
   * @remarks
   * The matching mode. Valid values:
   * 
   * *   Equals: equal match
   * *   Prefix: match by prefix
   * 
   * @example
   * Equals
   */
  matchType?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * If the total number of entries returned for the current request exceeds the value of the `MaxResults` parameter, the entries are truncated. In this case, you can use the `token` to initiate another request and obtain the remaining entries.
   * 
   * @example
   * AAAAAUYb00R0gHZBE8FVDeoh2ME93VeeEPUHs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test_key
   */
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      matchType: 'MatchType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAUDnubHKJbVTCdlIGYUPtsu3EoN3bfdgjDA****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 44C8A952-D6B0-5BC8-82D5-93BA02E26F2E
   */
  requestId?: string;
  /**
   * @remarks
   * The tag keys.
   */
  tagKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagKeysResponseBody;
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
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesRequest extends $tea.Model {
  /**
   * @remarks
   * The matching mode. Valid values:
   * 
   * *   Equals: equal match
   * *   Prefix: match by prefix
   * 
   * @example
   * Equals
   */
  matchType?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * If the total number of entries returned for the current request exceeds the value of the `MaxResults` parameter, the entries are truncated. In this case, you can use the `token` to initiate another request and obtain the remaining entries.
   * 
   * @example
   * eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * This parameter is required.
   * 
   * @example
   * test_key
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test_value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      matchType: 'MatchType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C1840B83-1193-5E83-AFA6-4B8D303E29F5
   */
  requestId?: string;
  /**
   * @remarks
   * The tag values.
   */
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagValuesResponseBody;
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
      body: ListTagValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMultiAccountResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filter?: SearchMultiAccountResourcesRequestFilter[];
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * If the total number of entries returned for the current request exceeds the value of the `MaxResults` parameter, the entries are truncated. In this case, you can use the token to initiate another request and obtain the remaining entries.``
   * 
   * @example
   * eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The search scope. You can set the value to one of the following items:
   * 
   * *   ID of a resource directory: Resources within the management account and all members of the resource directory are searched. You can call the [GetResourceDirectory](https://help.aliyun.com/document_detail/159995.html) operation to obtain the ID.
   * *   ID of the Root folder: Resources within all members in the Root folder and the subfolders of the Root folder are searched. You can call the [ListFoldersForParent](https://help.aliyun.com/document_detail/159997.html) operation to obtain the ID.
   * *   ID of a folder: Resources within all members in the folder are searched. You can call the [ListFoldersForParent](https://help.aliyun.com/document_detail/159997.html) operation to obtain the ID.
   * *   ID of a member: Resources within the member are searched. You can call the [ListAccounts](https://help.aliyun.com/document_detail/160016.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rd-r4****
   */
  scope?: string;
  /**
   * @remarks
   * The method that is used to sort the entries returned.
   */
  sortCriterion?: SearchMultiAccountResourcesRequestSortCriterion;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      scope: 'Scope',
      sortCriterion: 'SortCriterion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': SearchMultiAccountResourcesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      scope: 'string',
      sortCriterion: SearchMultiAccountResourcesRequestSortCriterion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMultiAccountResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filters?: SearchMultiAccountResourcesResponseBodyFilters[];
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * The pagination token that is used in the next request to retrieve a new page of results.
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EFA806B9-7F36-55AB-8B7A-D680C2C5EE57
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resources.
   */
  resources?: SearchMultiAccountResourcesResponseBodyResources[];
  /**
   * @remarks
   * The search scope.
   * 
   * *   ID of a resource directory: Resources within the management account and all members of the resource directory are searched.
   * *   ID of the Root folder: Resources within all members in the Root folder and the subfolders of the Root folder are searched.
   * *   ID of a folder: Resources within all members in the folder are searched.
   * *   ID of a member: Resources within the member are searched.
   * 
   * @example
   * rd-r4****
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resources: 'Resources',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': SearchMultiAccountResourcesResponseBodyFilters },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': SearchMultiAccountResourcesResponseBodyResources },
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMultiAccountResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchMultiAccountResourcesResponseBody;
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
      body: SearchMultiAccountResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filter?: SearchResourcesRequestFilter[];
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * If the total number of entries returned for the current request exceeds the value of the `MaxResults` parameter, the entries are truncated. In this case, you can use the `token` to initiate another request and obtain the remaining entries.
   * 
   * @example
   * eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The method that is used to sort the entries returned.
   */
  sortCriterion?: SearchResourcesRequestSortCriterion;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      sortCriterion: 'SortCriterion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': SearchResourcesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      sortCriterion: SearchResourcesRequestSortCriterion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filters?: SearchResourcesResponseBodyFilters[];
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D696E6EF-3A6D-5770-801E-4982081FE4D0
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resources.
   */
  resources?: SearchResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': SearchResourcesResponseBodyFilters },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': SearchResourcesResponseBodyResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchResourcesResponseBody;
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
      body: SearchResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFilterRequest extends $tea.Model {
  /**
   * @remarks
   * The configurations of the filter.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *   "regions": [],
   *   "tagFilters": [
   *     [{ "type": "notContainTagKey", "tagKey": "xxx", "tagValue": "" }],
   *     [{ "tagKey": "xxx", "tagValue": "xxx" }]
   *   ],
   *   "resourceTypes": [
   *     "ACS::ECS::AutoSnapshotPolicy"
   *   ]
   * }
   */
  filterConfiguration?: string;
  /**
   * @remarks
   * The name of the filter.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS
   */
  filterName?: string;
  static names(): { [key: string]: string } {
    return {
      filterConfiguration: 'FilterConfiguration',
      filterName: 'FilterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterConfiguration: 'string',
      filterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFilterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3C5CDBF6-4DB7-53E9-ADDC-5919E3FACF6F
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

export class UpdateFilterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFilterResponseBody;
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
      body: UpdateFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSavedQueryRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the template.
   * 
   * The description must be 1 to 256 characters in length.
   * 
   * @example
   * Queries all resources on which you have permissions and sorts the resources by resource type and resource ID.
   */
  description?: string;
  /**
   * @remarks
   * The query statement in the template.
   * 
   * @example
   * SELECT * FROM resources;
   */
  expression?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * *   The name must be 1 to 64 characters in length.
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must be unique.
   * 
   * @example
   * Query of All Alibaba Cloud Resources
   */
  name?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sq-GeAck****
   */
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expression: 'Expression',
      name: 'Name',
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expression: 'string',
      name: 'string',
      queryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSavedQueryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D696E6EF-3A6D-5770-801E-4982081FE4D0
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

export class UpdateSavedQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSavedQueryResponseBody;
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
      body: UpdateSavedQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteMultiAccountSQLQueryResponseBodyColumns extends $tea.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * resource_id
   */
  name?: string;
  /**
   * @remarks
   * The type of the column.
   * 
   * @example
   * varchar
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSQLQueryResponseBodyColumns extends $tea.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * resource_id
   */
  name?: string;
  /**
   * @remarks
   * The type of the column.
   * 
   * @example
   * varchar
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExampleQueryResponseBodyExampleQuery extends $tea.Model {
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * Queries all resources on which you have permissions and sorts the resources by resource type and resource ID.
   */
  description?: string;
  /**
   * @remarks
   * The query statement in the template.
   * 
   * @example
   * SELECT
   *   resource_id,
   *   resource_name,
   *   region_id,
   *   zone_id,
   *   resource_type,
   *   account_id,
   *   create_time,
   *   resource_group_id,
   *   tags,
   *   ip_addresses,
   *   vpc_id,
   *   v_switch_id
   * FROM
   *   resources
   * ORDER BY
   *   resource_type,
   *   resource_id
   * LIMIT
   *   1000 OFFSET 0;
   */
  expression?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * Query of All Alibaba Cloud Resources
   */
  name?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * sq-0PfKy****
   */
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expression: 'Expression',
      name: 'Name',
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expression: 'string',
      name: 'string',
      queryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiAccountResourceConfigurationResponseBodyIpAddressAttributes extends $tea.Model {
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 172.27.199.42
   */
  ipAddress?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   **Public**: the Internet
   * *   **Private**: internal network
   * 
   * @example
   * Public
   */
  networkType?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * Ipv4
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      networkType: 'NetworkType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: 'string',
      networkType: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiAccountResourceConfigurationResponseBodyTags extends $tea.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * @example
   * tag-value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceConfigurationResponseBodyIpAddressAttributes extends $tea.Model {
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.168.1.2
   */
  ipAddress?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   **Public**: the Internet
   * *   **Private**: internal network
   * 
   * @example
   * Public
   */
  networkType?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * Ipv4
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      networkType: 'NetworkType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: 'string',
      networkType: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceConfigurationResponseBodyTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test-value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceCountsRequestFilter extends $tea.Model {
  /**
   * @remarks
   * The key of the filter condition. For more information, see `Supported filter parameters`.
   * 
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @remarks
   * The matching mode.
   * 
   * The value Equals indicates an equal match.
   * 
   * @example
   * Equals
   */
  matchType?: string;
  /**
   * @remarks
   * The values of the filter condition.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      matchType: 'MatchType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      matchType: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceCountsResponseBodyFilters extends $tea.Model {
  /**
   * @remarks
   * The key of the filter condition.
   * 
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @remarks
   * The values of the filter condition.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceCountsResponseBodyResourceCounts extends $tea.Model {
  /**
   * @remarks
   * The number of resources.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * ACS::ECS::NetworkInterface
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavedQueryResponseBodySavedQuery extends $tea.Model {
  /**
   * @remarks
   * The time when the template was created. The time is displayed in UTC.
   * 
   * @example
   * 2023-10-30T01:43:16Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * Queries all resources on which you have permissions and sorts the resources by resource type and resource ID.
   */
  description?: string;
  /**
   * @remarks
   * The query statement in the template.
   * 
   * @example
   * SELECT * FROM resources;
   */
  expression?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * Query of All Alibaba Cloud Resources
   */
  name?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * sq-GeAck****
   */
  queryId?: string;
  /**
   * @remarks
   * The time when the template was updated. The time is displayed in UTC.
   * 
   * @example
   * 2023-10-30T01:43:16Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      expression: 'Expression',
      name: 'Name',
      queryId: 'QueryId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      expression: 'string',
      name: 'string',
      queryId: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExampleQueriesResponseBodyExampleQueries extends $tea.Model {
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * Queries all resources on which you have permissions and sorts the resources by resource type and resource ID.
   */
  description?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * Query of All Alibaba Cloud Resources
   */
  name?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * sq-0PfKy****
   */
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      queryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFiltersResponseBodyFilters extends $tea.Model {
  /**
   * @remarks
   * The configurations of the filter.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *   "regions": [],
   *   "tagFilters": [
   *     [{ "type": "notContainTagKey", "tagKey": "xxx", "tagValue": "" }],
   *     [{ "tagKey": "xxx", "tagValue": "xxx" }]
   *   ],
   *   "resourceTypes": [
   *     "ACS::ECS::AutoSnapshotPolicy"
   *   ]
   * }
   */
  filterConfiguration?: string;
  /**
   * @remarks
   * The name of the filter.
   */
  filterName?: string;
  static names(): { [key: string]: string } {
    return {
      filterConfiguration: 'FilterConfiguration',
      filterName: 'FilterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterConfiguration: 'string',
      filterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiAccountResourceGroupsResponseBodyResourceGroups extends $tea.Model {
  /**
   * @remarks
   * The ID of the management account or member of the resource directory.
   * 
   * @example
   * 1394339739****
   */
  accountId?: string;
  /**
   * @remarks
   * The time when the resource group was created.
   * 
   * @example
   * 2021-06-30T09:20:08Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the resource group.
   * 
   * @example
   * group1
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  id?: string;
  /**
   * @remarks
   * The unique identifier of the resource group.
   * 
   * @example
   * my-project
   */
  name?: string;
  /**
   * @remarks
   * The status of the resource group. Valid values:
   * 
   * *   Creating: The resource group is being created.
   * *   OK: The resource group is created.
   * *   PendingDelete: The resource group is waiting to be deleted.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createDate: 'string',
      displayName: 'string',
      id: 'string',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBodyResourceTypesCodeMapping extends $tea.Model {
  resourceGroup?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroup: 'ResourceGroup',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroup: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBodyResourceTypes extends $tea.Model {
  /**
   * **if can be null:**
   * true
   */
  authorized?: boolean;
  codeMapping?: ListResourceTypesResponseBodyResourceTypesCodeMapping;
  /**
   * @remarks
   * The supported filter conditions.
   */
  filterKeys?: string[];
  /**
   * @remarks
   * The name of the Alibaba Cloud service.
   * 
   * @example
   * Container Service for Kubernetes
   */
  productName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::ACK::Cluster
   */
  resourceType?: string;
  /**
   * @remarks
   * The name of the resource type.
   * 
   * @example
   * Cluster
   */
  resourceTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      authorized: 'Authorized',
      codeMapping: 'CodeMapping',
      filterKeys: 'FilterKeys',
      productName: 'ProductName',
      resourceType: 'ResourceType',
      resourceTypeName: 'ResourceTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorized: 'boolean',
      codeMapping: ListResourceTypesResponseBodyResourceTypesCodeMapping,
      filterKeys: { 'type': 'array', 'itemType': 'string' },
      productName: 'string',
      resourceType: 'string',
      resourceTypeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSavedQueriesResponseBodySavedQueries extends $tea.Model {
  /**
   * @remarks
   * The time when the template was created. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-13T05:50:35Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * Queries all resources on which you have permissions and sorts the resources by resource type and resource ID.
   */
  description?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Query of All Alibaba Cloud Resources
   */
  name?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * sq-GeAck****
   */
  queryId?: string;
  /**
   * @remarks
   * The time when the template was updated. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-14 10:27:07
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      queryId: 'QueryId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      queryId: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMultiAccountResourcesRequestFilter extends $tea.Model {
  /**
   * @remarks
   * The key of the filter condition. For more information, see `Supported filter parameters`.
   * 
   * @example
   * ResourceGroupId
   */
  key?: string;
  /**
   * @remarks
   * The matching mode.
   * 
   * The value Equals indicates an equal match.
   * 
   * @example
   * Equals
   */
  matchType?: string;
  /**
   * @remarks
   * The values of the filter condition.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      matchType: 'MatchType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      matchType: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMultiAccountResourcesRequestSortCriterion extends $tea.Model {
  /**
   * @remarks
   * The attribute based on which the entries are sorted.
   * 
   * The value CreateTime indicates the creation time of resources.
   * 
   * @example
   * CreateTime
   */
  key?: string;
  /**
   * @remarks
   * The order in which the entries are sorted. Valid values:
   * 
   * *   ASC: The entries are sorted in ascending order. This value is the default value.
   * *   DESC: The entries are sorted in descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      order: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMultiAccountResourcesResponseBodyFilters extends $tea.Model {
  /**
   * @remarks
   * The key of the filter condition.
   * 
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @remarks
   * The matching mode.
   * 
   * @example
   * Equals
   */
  matchType?: string;
  /**
   * @remarks
   * The values of the filter condition.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      matchType: 'MatchType',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      matchType: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMultiAccountResourcesResponseBodyResourcesIpAddressAttributes extends $tea.Model {
  /**
   * @remarks
   * The IP address.
   */
  ipAddress?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   **Public**: the Internet
   * *   **Private**: internal network
   * 
   * @example
   * Public
   */
  networkType?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * Ipv4
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      networkType: 'NetworkType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: 'string',
      networkType: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMultiAccountResourcesResponseBodyResourcesTags extends $tea.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * @example
   * test_key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * @example
   * test_value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMultiAccountResourcesResponseBodyResources extends $tea.Model {
  /**
   * @remarks
   * The ID of the management account or member of the resource directory.
   * 
   * @example
   * 151266687691****
   */
  accountId?: string;
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * >  Whether this parameter is returned is determined by the Alibaba Cloud service to which the resource belongs.
   * 
   * @example
   * 2021-06-30T09:20:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the resource expires.
   * 
   * @example
   * 2023-06-14T14:35:45Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The attributes of the IP address.
   */
  ipAddressAttributes?: SearchMultiAccountResourcesResponseBodyResourcesIpAddressAttributes[];
  /**
   * @remarks
   * The IP addresses.
   * 
   * >  Whether this parameter is returned is determined by the Alibaba Cloud service to which the resource belongs.
   */
  ipAddresses?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * vtb-bp11lbh452fr8940s****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * group1
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::VPC::RouteTable
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: SearchMultiAccountResourcesResponseBodyResourcesTags[];
  /**
   * @remarks
   * The zone ID.
   * 
   * >  Whether this parameter is returned is determined by the Alibaba Cloud service to which the resource belongs.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      ipAddressAttributes: 'IpAddressAttributes',
      ipAddresses: 'IpAddresses',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createTime: 'string',
      expireTime: 'string',
      ipAddressAttributes: { 'type': 'array', 'itemType': SearchMultiAccountResourcesResponseBodyResourcesIpAddressAttributes },
      ipAddresses: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': SearchMultiAccountResourcesResponseBodyResourcesTags },
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResourcesRequestFilter extends $tea.Model {
  /**
   * @remarks
   * The key of the filter condition. For more information, see `Supported filter parameters`.
   * 
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @remarks
   * The matching mode.
   * 
   * The value Equals indicates an equal match.
   * 
   * @example
   * Equals
   */
  matchType?: string;
  /**
   * @remarks
   * The values of the filter condition.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      matchType: 'MatchType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      matchType: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResourcesRequestSortCriterion extends $tea.Model {
  /**
   * @remarks
   * The attribute based on which the entries are sorted.
   * 
   * The value CreateTime indicates the creation time of resources.
   * 
   * @example
   * CreateTime
   */
  key?: string;
  /**
   * @remarks
   * The order in which the entries are sorted. Valid values:
   * 
   * *   ASC: The entries are sorted in ascending order. This value is the default value.
   * *   DESC: The entries are sorted in descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      order: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResourcesResponseBodyFilters extends $tea.Model {
  /**
   * @remarks
   * The key of the filter condition.
   * 
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @remarks
   * The matching mode.
   * 
   * @example
   * Equals
   */
  matchType?: string;
  /**
   * @remarks
   * The values of the filter condition.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      matchType: 'MatchType',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      matchType: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResourcesResponseBodyResourcesIpAddressAttributes extends $tea.Model {
  /**
   * @remarks
   * The IP address.
   */
  ipAddress?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   **Public**: the Internet
   * *   **Private**: internal network
   * 
   * @example
   * Public
   */
  networkType?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * Ipv4
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      networkType: 'NetworkType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: 'string',
      networkType: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResourcesResponseBodyResourcesTags extends $tea.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * @example
   * test_key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * @example
   * test_value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResourcesResponseBodyResources extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 151266687691****
   */
  accountId?: string;
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * >  Whether this parameter is returned is determined by the Alibaba Cloud service to which the resource belongs.
   * 
   * @example
   * 2021-06-30T09:20:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the resource expires.
   * 
   * @example
   * 2021-07-30T09:20:08Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The attributes of the IP address.
   */
  ipAddressAttributes?: SearchResourcesResponseBodyResourcesIpAddressAttributes[];
  /**
   * @remarks
   * The IP addresses.
   * 
   * >  Whether this parameter is returned is determined by the Alibaba Cloud service to which the resource belongs.
   */
  ipAddresses?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * vtb-bp11lbh452fr8940s****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * group1
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::VPC::RouteTable
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: SearchResourcesResponseBodyResourcesTags[];
  /**
   * @remarks
   * The zone ID.
   * 
   * >  Whether this parameter is returned is determined by the Alibaba Cloud service to which the resource belongs.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      ipAddressAttributes: 'IpAddressAttributes',
      ipAddresses: 'IpAddresses',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createTime: 'string',
      expireTime: 'string',
      ipAddressAttributes: { 'type': 'array', 'itemType': SearchResourcesResponseBodyResourcesIpAddressAttributes },
      ipAddresses: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': SearchResourcesResponseBodyResourcesTags },
      zoneId: 'string',
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
    this._endpoint = this.getEndpoint("resourcecenter", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Sets a default filter.
   * 
   * @param request - AssociateDefaultFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateDefaultFilterResponse
   */
  async associateDefaultFilterWithOptions(request: AssociateDefaultFilterRequest, runtime: $Util.RuntimeOptions): Promise<AssociateDefaultFilterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filterName)) {
      query["FilterName"] = request.filterName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateDefaultFilter",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateDefaultFilterResponse>(await this.callApi(params, req, runtime), new AssociateDefaultFilterResponse({}));
  }

  /**
   * Sets a default filter.
   * 
   * @param request - AssociateDefaultFilterRequest
   * @returns AssociateDefaultFilterResponse
   */
  async associateDefaultFilter(request: AssociateDefaultFilterRequest): Promise<AssociateDefaultFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateDefaultFilterWithOptions(request, runtime);
  }

  /**
   * Creates a filter.
   * 
   * @param request - CreateFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFilterResponse
   */
  async createFilterWithOptions(request: CreateFilterRequest, runtime: $Util.RuntimeOptions): Promise<CreateFilterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filterConfiguration)) {
      query["FilterConfiguration"] = request.filterConfiguration;
    }

    if (!Util.isUnset(request.filterName)) {
      query["FilterName"] = request.filterName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFilter",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFilterResponse>(await this.callApi(params, req, runtime), new CreateFilterResponse({}));
  }

  /**
   * Creates a filter.
   * 
   * @param request - CreateFilterRequest
   * @returns CreateFilterResponse
   */
  async createFilter(request: CreateFilterRequest): Promise<CreateFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFilterWithOptions(request, runtime);
  }

  /**
   * Creates a custom query template.
   * 
   * @param request - CreateSavedQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSavedQueryResponse
   */
  async createSavedQueryWithOptions(request: CreateSavedQueryRequest, runtime: $Util.RuntimeOptions): Promise<CreateSavedQueryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.expression)) {
      query["Expression"] = request.expression;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSavedQuery",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSavedQueryResponse>(await this.callApi(params, req, runtime), new CreateSavedQueryResponse({}));
  }

  /**
   * Creates a custom query template.
   * 
   * @param request - CreateSavedQueryRequest
   * @returns CreateSavedQueryResponse
   */
  async createSavedQuery(request: CreateSavedQueryRequest): Promise<CreateSavedQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSavedQueryWithOptions(request, runtime);
  }

  /**
   * Deletes a filter.
   * 
   * @param request - DeleteFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFilterResponse
   */
  async deleteFilterWithOptions(request: DeleteFilterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFilterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filterName)) {
      query["FilterName"] = request.filterName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFilter",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFilterResponse>(await this.callApi(params, req, runtime), new DeleteFilterResponse({}));
  }

  /**
   * Deletes a filter.
   * 
   * @param request - DeleteFilterRequest
   * @returns DeleteFilterResponse
   */
  async deleteFilter(request: DeleteFilterRequest): Promise<DeleteFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFilterWithOptions(request, runtime);
  }

  /**
   * Deletes a custom query template.
   * 
   * @param request - DeleteSavedQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSavedQueryResponse
   */
  async deleteSavedQueryWithOptions(request: DeleteSavedQueryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSavedQueryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.queryId)) {
      query["QueryId"] = request.queryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSavedQuery",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSavedQueryResponse>(await this.callApi(params, req, runtime), new DeleteSavedQueryResponse({}));
  }

  /**
   * Deletes a custom query template.
   * 
   * @param request - DeleteSavedQueryRequest
   * @returns DeleteSavedQueryResponse
   */
  async deleteSavedQuery(request: DeleteSavedQueryRequest): Promise<DeleteSavedQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSavedQueryWithOptions(request, runtime);
  }

  /**
   * Disables the cross-account resource search feature by using the management account of a resource directory or a delegated administrator account of Resource Center.
   * 
   * @param request - DisableMultiAccountResourceCenterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableMultiAccountResourceCenterResponse
   */
  async disableMultiAccountResourceCenterWithOptions(runtime: $Util.RuntimeOptions): Promise<DisableMultiAccountResourceCenterResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DisableMultiAccountResourceCenter",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableMultiAccountResourceCenterResponse>(await this.callApi(params, req, runtime), new DisableMultiAccountResourceCenterResponse({}));
  }

  /**
   * Disables the cross-account resource search feature by using the management account of a resource directory or a delegated administrator account of Resource Center.
   * @returns DisableMultiAccountResourceCenterResponse
   */
  async disableMultiAccountResourceCenter(): Promise<DisableMultiAccountResourceCenterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableMultiAccountResourceCenterWithOptions(runtime);
  }

  /**
   * Deactivates the Resource Center service.
   * 
   * @param request - DisableResourceCenterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableResourceCenterResponse
   */
  async disableResourceCenterWithOptions(runtime: $Util.RuntimeOptions): Promise<DisableResourceCenterResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DisableResourceCenter",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableResourceCenterResponse>(await this.callApi(params, req, runtime), new DisableResourceCenterResponse({}));
  }

  /**
   * Deactivates the Resource Center service.
   * @returns DisableResourceCenterResponse
   */
  async disableResourceCenter(): Promise<DisableResourceCenterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableResourceCenterWithOptions(runtime);
  }

  /**
   * Cancels the default filter.
   * 
   * @param request - DisassociateDefaultFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisassociateDefaultFilterResponse
   */
  async disassociateDefaultFilterWithOptions(runtime: $Util.RuntimeOptions): Promise<DisassociateDefaultFilterResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DisassociateDefaultFilter",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisassociateDefaultFilterResponse>(await this.callApi(params, req, runtime), new DisassociateDefaultFilterResponse({}));
  }

  /**
   * Cancels the default filter.
   * @returns DisassociateDefaultFilterResponse
   */
  async disassociateDefaultFilter(): Promise<DisassociateDefaultFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disassociateDefaultFilterWithOptions(runtime);
  }

  /**
   * Enables the cross-account resource search feature by using the management account of a resource directory or a delegated administrator account of Resource Center.
   * 
   * @remarks
   * If you have created a resource directory for your enterprise, you can enable the cross-account resource search feature by using the management account of the resource directory or a delegated administrator account of Resource Center to view the resources of members in the resource directory. For more information about a resource directory, see [Resource Directory overview](https://help.aliyun.com/document_detail/200506.html).
   * 
   * @param request - EnableMultiAccountResourceCenterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableMultiAccountResourceCenterResponse
   */
  async enableMultiAccountResourceCenterWithOptions(runtime: $Util.RuntimeOptions): Promise<EnableMultiAccountResourceCenterResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "EnableMultiAccountResourceCenter",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableMultiAccountResourceCenterResponse>(await this.callApi(params, req, runtime), new EnableMultiAccountResourceCenterResponse({}));
  }

  /**
   * Enables the cross-account resource search feature by using the management account of a resource directory or a delegated administrator account of Resource Center.
   * 
   * @remarks
   * If you have created a resource directory for your enterprise, you can enable the cross-account resource search feature by using the management account of the resource directory or a delegated administrator account of Resource Center to view the resources of members in the resource directory. For more information about a resource directory, see [Resource Directory overview](https://help.aliyun.com/document_detail/200506.html).
   * @returns EnableMultiAccountResourceCenterResponse
   */
  async enableMultiAccountResourceCenter(): Promise<EnableMultiAccountResourceCenterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableMultiAccountResourceCenterWithOptions(runtime);
  }

  /**
   * Activates the Resource Center service.
   * 
   * @param request - EnableResourceCenterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableResourceCenterResponse
   */
  async enableResourceCenterWithOptions(runtime: $Util.RuntimeOptions): Promise<EnableResourceCenterResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "EnableResourceCenter",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableResourceCenterResponse>(await this.callApi(params, req, runtime), new EnableResourceCenterResponse({}));
  }

  /**
   * Activates the Resource Center service.
   * @returns EnableResourceCenterResponse
   */
  async enableResourceCenter(): Promise<EnableResourceCenterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableResourceCenterWithOptions(runtime);
  }

  /**
   * Executes an SQL statement to query resources across accounts.
   * 
   * @param request - ExecuteMultiAccountSQLQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteMultiAccountSQLQueryResponse
   */
  async executeMultiAccountSQLQueryWithOptions(request: ExecuteMultiAccountSQLQueryRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteMultiAccountSQLQueryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.expression)) {
      query["Expression"] = request.expression;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteMultiAccountSQLQuery",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteMultiAccountSQLQueryResponse>(await this.callApi(params, req, runtime), new ExecuteMultiAccountSQLQueryResponse({}));
  }

  /**
   * Executes an SQL statement to query resources across accounts.
   * 
   * @param request - ExecuteMultiAccountSQLQueryRequest
   * @returns ExecuteMultiAccountSQLQueryResponse
   */
  async executeMultiAccountSQLQuery(request: ExecuteMultiAccountSQLQueryRequest): Promise<ExecuteMultiAccountSQLQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeMultiAccountSQLQueryWithOptions(request, runtime);
  }

  /**
   * Executes an SQL statement to query the resources that can be accessed within the current account.
   * 
   * @param request - ExecuteSQLQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteSQLQueryResponse
   */
  async executeSQLQueryWithOptions(request: ExecuteSQLQueryRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteSQLQueryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.expression)) {
      query["Expression"] = request.expression;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteSQLQuery",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteSQLQueryResponse>(await this.callApi(params, req, runtime), new ExecuteSQLQueryResponse({}));
  }

  /**
   * Executes an SQL statement to query the resources that can be accessed within the current account.
   * 
   * @param request - ExecuteSQLQueryRequest
   * @returns ExecuteSQLQueryResponse
   */
  async executeSQLQuery(request: ExecuteSQLQueryRequest): Promise<ExecuteSQLQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeSQLQueryWithOptions(request, runtime);
  }

  /**
   * Queries the information about a sample query template.
   * 
   * @param request - GetExampleQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExampleQueryResponse
   */
  async getExampleQueryWithOptions(request: GetExampleQueryRequest, runtime: $Util.RuntimeOptions): Promise<GetExampleQueryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.queryId)) {
      query["QueryId"] = request.queryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetExampleQuery",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetExampleQueryResponse>(await this.callApi(params, req, runtime), new GetExampleQueryResponse({}));
  }

  /**
   * Queries the information about a sample query template.
   * 
   * @param request - GetExampleQueryRequest
   * @returns GetExampleQueryResponse
   */
  async getExampleQuery(request: GetExampleQueryRequest): Promise<GetExampleQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExampleQueryWithOptions(request, runtime);
  }

  /**
   * Queries the status of the cross-account resource search feature by using the management account of a resource directory or a delegated administrator account of Resource Center.
   * 
   * @param request - GetMultiAccountResourceCenterServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMultiAccountResourceCenterServiceStatusResponse
   */
  async getMultiAccountResourceCenterServiceStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<GetMultiAccountResourceCenterServiceStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetMultiAccountResourceCenterServiceStatus",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMultiAccountResourceCenterServiceStatusResponse>(await this.callApi(params, req, runtime), new GetMultiAccountResourceCenterServiceStatusResponse({}));
  }

  /**
   * Queries the status of the cross-account resource search feature by using the management account of a resource directory or a delegated administrator account of Resource Center.
   * @returns GetMultiAccountResourceCenterServiceStatusResponse
   */
  async getMultiAccountResourceCenterServiceStatus(): Promise<GetMultiAccountResourceCenterServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMultiAccountResourceCenterServiceStatusWithOptions(runtime);
  }

  /**
   * Queries the configurations of a resource within the management account or a member of a resource directory.
   * 
   * @param request - GetMultiAccountResourceConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMultiAccountResourceConfigurationResponse
   */
  async getMultiAccountResourceConfigurationWithOptions(request: GetMultiAccountResourceConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<GetMultiAccountResourceConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMultiAccountResourceConfiguration",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMultiAccountResourceConfigurationResponse>(await this.callApi(params, req, runtime), new GetMultiAccountResourceConfigurationResponse({}));
  }

  /**
   * Queries the configurations of a resource within the management account or a member of a resource directory.
   * 
   * @param request - GetMultiAccountResourceConfigurationRequest
   * @returns GetMultiAccountResourceConfigurationResponse
   */
  async getMultiAccountResourceConfiguration(request: GetMultiAccountResourceConfigurationRequest): Promise<GetMultiAccountResourceConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMultiAccountResourceConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the status of the Resource Center service.
   * 
   * @param request - GetResourceCenterServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceCenterServiceStatusResponse
   */
  async getResourceCenterServiceStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<GetResourceCenterServiceStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetResourceCenterServiceStatus",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceCenterServiceStatusResponse>(await this.callApi(params, req, runtime), new GetResourceCenterServiceStatusResponse({}));
  }

  /**
   * Queries the status of the Resource Center service.
   * @returns GetResourceCenterServiceStatusResponse
   */
  async getResourceCenterServiceStatus(): Promise<GetResourceCenterServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceCenterServiceStatusWithOptions(runtime);
  }

  /**
   * Queries the configurations of a resource within the current account.
   * 
   * @param request - GetResourceConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceConfigurationResponse
   */
  async getResourceConfigurationWithOptions(request: GetResourceConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceConfiguration",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceConfigurationResponse>(await this.callApi(params, req, runtime), new GetResourceConfigurationResponse({}));
  }

  /**
   * Queries the configurations of a resource within the current account.
   * 
   * @param request - GetResourceConfigurationRequest
   * @returns GetResourceConfigurationResponse
   */
  async getResourceConfiguration(request: GetResourceConfigurationRequest): Promise<GetResourceConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the numbers of resources on which the current account has access permissions.
   * 
   * @param request - GetResourceCountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceCountsResponse
   */
  async getResourceCountsWithOptions(request: GetResourceCountsRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceCountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.groupByKey)) {
      query["GroupByKey"] = request.groupByKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceCounts",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceCountsResponse>(await this.callApi(params, req, runtime), new GetResourceCountsResponse({}));
  }

  /**
   * Queries the numbers of resources on which the current account has access permissions.
   * 
   * @param request - GetResourceCountsRequest
   * @returns GetResourceCountsResponse
   */
  async getResourceCounts(request: GetResourceCountsRequest): Promise<GetResourceCountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceCountsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a custom query template.
   * 
   * @param request - GetSavedQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSavedQueryResponse
   */
  async getSavedQueryWithOptions(request: GetSavedQueryRequest, runtime: $Util.RuntimeOptions): Promise<GetSavedQueryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.queryId)) {
      query["QueryId"] = request.queryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSavedQuery",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSavedQueryResponse>(await this.callApi(params, req, runtime), new GetSavedQueryResponse({}));
  }

  /**
   * Queries the information about a custom query template.
   * 
   * @param request - GetSavedQueryRequest
   * @returns GetSavedQueryResponse
   */
  async getSavedQuery(request: GetSavedQueryRequest): Promise<GetSavedQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSavedQueryWithOptions(request, runtime);
  }

  /**
   * Queries all sample query templates.
   * 
   * @param request - ListExampleQueriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExampleQueriesResponse
   */
  async listExampleQueriesWithOptions(request: ListExampleQueriesRequest, runtime: $Util.RuntimeOptions): Promise<ListExampleQueriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListExampleQueries",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListExampleQueriesResponse>(await this.callApi(params, req, runtime), new ListExampleQueriesResponse({}));
  }

  /**
   * Queries all sample query templates.
   * 
   * @param request - ListExampleQueriesRequest
   * @returns ListExampleQueriesResponse
   */
  async listExampleQueries(request: ListExampleQueriesRequest): Promise<ListExampleQueriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExampleQueriesWithOptions(request, runtime);
  }

  /**
   * Queries a list of filters.
   * 
   * @param request - ListFiltersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFiltersResponse
   */
  async listFiltersWithOptions(runtime: $Util.RuntimeOptions): Promise<ListFiltersResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListFilters",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFiltersResponse>(await this.callApi(params, req, runtime), new ListFiltersResponse({}));
  }

  /**
   * Queries a list of filters.
   * @returns ListFiltersResponse
   */
  async listFilters(): Promise<ListFiltersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFiltersWithOptions(runtime);
  }

  /**
   * Queries the resource groups within the management account or a member of a resource directory by using the management account of the resource directory or a delegated administrator account of Resource Center.
   * 
   * @param request - ListMultiAccountResourceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMultiAccountResourceGroupsResponse
   */
  async listMultiAccountResourceGroupsWithOptions(request: ListMultiAccountResourceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListMultiAccountResourceGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceGroupIds)) {
      query["ResourceGroupIds"] = request.resourceGroupIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMultiAccountResourceGroups",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMultiAccountResourceGroupsResponse>(await this.callApi(params, req, runtime), new ListMultiAccountResourceGroupsResponse({}));
  }

  /**
   * Queries the resource groups within the management account or a member of a resource directory by using the management account of the resource directory or a delegated administrator account of Resource Center.
   * 
   * @param request - ListMultiAccountResourceGroupsRequest
   * @returns ListMultiAccountResourceGroupsResponse
   */
  async listMultiAccountResourceGroups(request: ListMultiAccountResourceGroupsRequest): Promise<ListMultiAccountResourceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMultiAccountResourceGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the tag keys of resources within the management account or a member of a resource directory by using the management account of the resource directory or a delegated administrator account of Resource Center.
   * 
   * @param request - ListMultiAccountTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMultiAccountTagKeysResponse
   */
  async listMultiAccountTagKeysWithOptions(request: ListMultiAccountTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListMultiAccountTagKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.matchType)) {
      query["MatchType"] = request.matchType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMultiAccountTagKeys",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMultiAccountTagKeysResponse>(await this.callApi(params, req, runtime), new ListMultiAccountTagKeysResponse({}));
  }

  /**
   * Queries the tag keys of resources within the management account or a member of a resource directory by using the management account of the resource directory or a delegated administrator account of Resource Center.
   * 
   * @param request - ListMultiAccountTagKeysRequest
   * @returns ListMultiAccountTagKeysResponse
   */
  async listMultiAccountTagKeys(request: ListMultiAccountTagKeysRequest): Promise<ListMultiAccountTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMultiAccountTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the tag values of resources within the management account or a member of a resource directory by using the management account of the resource directory or a delegated administrator account of Resource Center.
   * 
   * @param request - ListMultiAccountTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMultiAccountTagValuesResponse
   */
  async listMultiAccountTagValuesWithOptions(request: ListMultiAccountTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<ListMultiAccountTagValuesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.matchType)) {
      query["MatchType"] = request.matchType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    if (!Util.isUnset(request.tagValue)) {
      query["TagValue"] = request.tagValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMultiAccountTagValues",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMultiAccountTagValuesResponse>(await this.callApi(params, req, runtime), new ListMultiAccountTagValuesResponse({}));
  }

  /**
   * Queries the tag values of resources within the management account or a member of a resource directory by using the management account of the resource directory or a delegated administrator account of Resource Center.
   * 
   * @param request - ListMultiAccountTagValuesRequest
   * @returns ListMultiAccountTagValuesResponse
   */
  async listMultiAccountTagValues(request: ListMultiAccountTagValuesRequest): Promise<ListMultiAccountTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMultiAccountTagValuesWithOptions(request, runtime);
  }

  /**
   * Queries the resource types supported by Resource Center.
   * 
   * @param request - ListResourceTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceTypesResponse
   */
  async listResourceTypesWithOptions(request: ListResourceTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceTypesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceTypes",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceTypesResponse>(await this.callApi(params, req, runtime), new ListResourceTypesResponse({}));
  }

  /**
   * Queries the resource types supported by Resource Center.
   * 
   * @param request - ListResourceTypesRequest
   * @returns ListResourceTypesResponse
   */
  async listResourceTypes(request: ListResourceTypesRequest): Promise<ListResourceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceTypesWithOptions(request, runtime);
  }

  /**
   * Queries all custom query templates.
   * 
   * @param request - ListSavedQueriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSavedQueriesResponse
   */
  async listSavedQueriesWithOptions(request: ListSavedQueriesRequest, runtime: $Util.RuntimeOptions): Promise<ListSavedQueriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSavedQueries",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSavedQueriesResponse>(await this.callApi(params, req, runtime), new ListSavedQueriesResponse({}));
  }

  /**
   * Queries all custom query templates.
   * 
   * @param request - ListSavedQueriesRequest
   * @returns ListSavedQueriesResponse
   */
  async listSavedQueries(request: ListSavedQueriesRequest): Promise<ListSavedQueriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSavedQueriesWithOptions(request, runtime);
  }

  /**
   * Queries the tag keys of resources within the current account.
   * 
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.matchType)) {
      query["MatchType"] = request.matchType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagKeys",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagKeysResponse>(await this.callApi(params, req, runtime), new ListTagKeysResponse({}));
  }

  /**
   * Queries the tag keys of resources within the current account.
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the tag values of resources within the current account.
   * 
   * @param request - ListTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagValuesResponse
   */
  async listTagValuesWithOptions(request: ListTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagValuesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.matchType)) {
      query["MatchType"] = request.matchType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    if (!Util.isUnset(request.tagValue)) {
      query["TagValue"] = request.tagValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagValues",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagValuesResponse>(await this.callApi(params, req, runtime), new ListTagValuesResponse({}));
  }

  /**
   * Queries the tag values of resources within the current account.
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Searches for resources within the management account or members of a resource directory.
   * 
   * @remarks
   *   You can use this operation to search for only resources whose types are supported by Resource Center in services that work with Resource Center. For more information about the services and the resource types that are supported by Resource Center, see [Services that work with Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * *   Before you use a RAM user or a RAM role to call the operation, you must make sure that the RAM user or RAM role is granted the required permissions. For more information, see [Grant a RAM user the permissions to use Resource Center](https://help.aliyun.com/document_detail/600556.html).
   * *   By default, the operation returns a maximum of 20 entries. You can configure the `MaxResults` parameter to specify the maximum number of entries to return.
   * *   If the response does not contain the `NextToken` parameter, all entries are returned. Otherwise, more entries exist. If you want to obtain the entries, you can call the operation again to initiate another query request. In the request, set the `NextToken` parameter to the value of `NextToken` in the last response of the operation. If you do not configure the `NextToken` parameter, entries on the first page are returned by default.
   * *   You can specify one or more filter conditions to narrow the search scope. For more information about supported filter parameters and matching methods, see the Supported filter parameters section. Multiple filter conditions have logical `AND` relations. Only resources that meet all filter conditions are returned. The values of a filter condition have logical `OR` relations. Resources that meet any value of the filter condition are returned.
   * *   You can visit [Sample Code Center](https://api.alibabacloud.com/api-tools/demo/ResourceCenter) to view more sample queries.
   * 
   * @param request - SearchMultiAccountResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchMultiAccountResourcesResponse
   */
  async searchMultiAccountResourcesWithOptions(request: SearchMultiAccountResourcesRequest, runtime: $Util.RuntimeOptions): Promise<SearchMultiAccountResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!Util.isUnset(request.sortCriterion)) {
      query["SortCriterion"] = request.sortCriterion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchMultiAccountResources",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchMultiAccountResourcesResponse>(await this.callApi(params, req, runtime), new SearchMultiAccountResourcesResponse({}));
  }

  /**
   * Searches for resources within the management account or members of a resource directory.
   * 
   * @remarks
   *   You can use this operation to search for only resources whose types are supported by Resource Center in services that work with Resource Center. For more information about the services and the resource types that are supported by Resource Center, see [Services that work with Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * *   Before you use a RAM user or a RAM role to call the operation, you must make sure that the RAM user or RAM role is granted the required permissions. For more information, see [Grant a RAM user the permissions to use Resource Center](https://help.aliyun.com/document_detail/600556.html).
   * *   By default, the operation returns a maximum of 20 entries. You can configure the `MaxResults` parameter to specify the maximum number of entries to return.
   * *   If the response does not contain the `NextToken` parameter, all entries are returned. Otherwise, more entries exist. If you want to obtain the entries, you can call the operation again to initiate another query request. In the request, set the `NextToken` parameter to the value of `NextToken` in the last response of the operation. If you do not configure the `NextToken` parameter, entries on the first page are returned by default.
   * *   You can specify one or more filter conditions to narrow the search scope. For more information about supported filter parameters and matching methods, see the Supported filter parameters section. Multiple filter conditions have logical `AND` relations. Only resources that meet all filter conditions are returned. The values of a filter condition have logical `OR` relations. Resources that meet any value of the filter condition are returned.
   * *   You can visit [Sample Code Center](https://api.alibabacloud.com/api-tools/demo/ResourceCenter) to view more sample queries.
   * 
   * @param request - SearchMultiAccountResourcesRequest
   * @returns SearchMultiAccountResourcesResponse
   */
  async searchMultiAccountResources(request: SearchMultiAccountResourcesRequest): Promise<SearchMultiAccountResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchMultiAccountResourcesWithOptions(request, runtime);
  }

  /**
   * Search for resources that you can access within the current account.
   * 
   * @remarks
   *   You can use this operation to search for only resources whose types are supported by Resource Center in services that work with Resource Center. For more information about the services and the resource types that are supported by Resource Center, see [Services that work with Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * *   By default, the operation returns a maximum of 20 entries. You can configure the `MaxResults` parameter to specify the maximum number of entries to return.
   * *   If the response does not contain the `NextToken` parameter, all entries are returned. Otherwise, more entries exist. If you want to obtain the entries, you can call the operation again to initiate another query request. In the request, set the `NextToken` parameter to the value of `NextToken` in the last response of the operation. If you do not configure the `NextToken` parameter, entries on the first page are returned by default.
   * *   You can specify one or more filter conditions to narrow the search scope. For more information about supported filter parameters and matching methods, see the Supported filter parameters section. Multiple filter conditions have logical `AND` relations. Only resources that meet all filter conditions are returned. The values of a filter condition have logical `OR` relations. Resources that meet any value of the filter condition are returned.
   * *   You can visit [Sample Code Center](https://api.aliyun.com/api-tools/demo/ResourceCenter) to view more sample queries.
   * 
   * @param request - SearchResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchResourcesResponse
   */
  async searchResourcesWithOptions(request: SearchResourcesRequest, runtime: $Util.RuntimeOptions): Promise<SearchResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sortCriterion)) {
      query["SortCriterion"] = request.sortCriterion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchResources",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchResourcesResponse>(await this.callApi(params, req, runtime), new SearchResourcesResponse({}));
  }

  /**
   * Search for resources that you can access within the current account.
   * 
   * @remarks
   *   You can use this operation to search for only resources whose types are supported by Resource Center in services that work with Resource Center. For more information about the services and the resource types that are supported by Resource Center, see [Services that work with Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * *   By default, the operation returns a maximum of 20 entries. You can configure the `MaxResults` parameter to specify the maximum number of entries to return.
   * *   If the response does not contain the `NextToken` parameter, all entries are returned. Otherwise, more entries exist. If you want to obtain the entries, you can call the operation again to initiate another query request. In the request, set the `NextToken` parameter to the value of `NextToken` in the last response of the operation. If you do not configure the `NextToken` parameter, entries on the first page are returned by default.
   * *   You can specify one or more filter conditions to narrow the search scope. For more information about supported filter parameters and matching methods, see the Supported filter parameters section. Multiple filter conditions have logical `AND` relations. Only resources that meet all filter conditions are returned. The values of a filter condition have logical `OR` relations. Resources that meet any value of the filter condition are returned.
   * *   You can visit [Sample Code Center](https://api.aliyun.com/api-tools/demo/ResourceCenter) to view more sample queries.
   * 
   * @param request - SearchResourcesRequest
   * @returns SearchResourcesResponse
   */
  async searchResources(request: SearchResourcesRequest): Promise<SearchResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchResourcesWithOptions(request, runtime);
  }

  /**
   * Updates a filter.
   * 
   * @param request - UpdateFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFilterResponse
   */
  async updateFilterWithOptions(request: UpdateFilterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFilterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filterConfiguration)) {
      query["FilterConfiguration"] = request.filterConfiguration;
    }

    if (!Util.isUnset(request.filterName)) {
      query["FilterName"] = request.filterName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFilter",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFilterResponse>(await this.callApi(params, req, runtime), new UpdateFilterResponse({}));
  }

  /**
   * Updates a filter.
   * 
   * @param request - UpdateFilterRequest
   * @returns UpdateFilterResponse
   */
  async updateFilter(request: UpdateFilterRequest): Promise<UpdateFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFilterWithOptions(request, runtime);
  }

  /**
   * Updates a custom query template.
   * 
   * @param request - UpdateSavedQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSavedQueryResponse
   */
  async updateSavedQueryWithOptions(request: UpdateSavedQueryRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSavedQueryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.expression)) {
      query["Expression"] = request.expression;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.queryId)) {
      query["QueryId"] = request.queryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSavedQuery",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSavedQueryResponse>(await this.callApi(params, req, runtime), new UpdateSavedQueryResponse({}));
  }

  /**
   * Updates a custom query template.
   * 
   * @param request - UpdateSavedQueryRequest
   * @returns UpdateSavedQueryResponse
   */
  async updateSavedQuery(request: UpdateSavedQueryRequest): Promise<UpdateSavedQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSavedQueryWithOptions(request, runtime);
  }

}
