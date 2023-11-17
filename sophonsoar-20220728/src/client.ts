// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BatchModifyInstanceStatusRequest extends $tea.Model {
  active?: number;
  lang?: string;
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      lang: 'string',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchModifyInstanceStatusResponseBody extends $tea.Model {
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

export class BatchModifyInstanceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchModifyInstanceStatusResponseBody;
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
      body: BatchModifyInstanceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComparePlaybooksRequest extends $tea.Model {
  lang?: string;
  newPlaybookReleaseId?: number;
  oldPlaybookReleaseId?: number;
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      newPlaybookReleaseId: 'NewPlaybookReleaseId',
      oldPlaybookReleaseId: 'OldPlaybookReleaseId',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      newPlaybookReleaseId: 'number',
      oldPlaybookReleaseId: 'number',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComparePlaybooksResponseBody extends $tea.Model {
  compareResult?: ComparePlaybooksResponseBodyCompareResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compareResult: 'CompareResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareResult: ComparePlaybooksResponseBodyCompareResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComparePlaybooksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ComparePlaybooksResponseBody;
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
      body: ComparePlaybooksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlaybookRequest extends $tea.Model {
  description?: string;
  displayName?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlaybookResponseBody extends $tea.Model {
  data?: CreatePlaybookResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreatePlaybookResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlaybookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePlaybookResponseBody;
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
      body: CreatePlaybookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugPlaybookRequest extends $tea.Model {
  lang?: string;
  playbookUuid?: string;
  record?: string;
  taskflow?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
      record: 'Record',
      taskflow: 'Taskflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookUuid: 'string',
      record: 'string',
      taskflow: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugPlaybookResponseBody extends $tea.Model {
  requestId?: string;
  requestUuid?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      requestUuid: 'RequestUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      requestUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugPlaybookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DebugPlaybookResponseBody;
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
      body: DebugPlaybookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteComponentAssetRequest extends $tea.Model {
  assetId?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      assetId: 'AssetId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetId: 'number',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteComponentAssetResponseBody extends $tea.Model {
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

export class DeleteComponentAssetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteComponentAssetResponseBody;
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
      body: DeleteComponentAssetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePlaybookRequest extends $tea.Model {
  lang?: string;
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePlaybookResponseBody extends $tea.Model {
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

export class DeletePlaybookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeletePlaybookResponseBody;
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
      body: DeletePlaybookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiListRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiListResponseBody extends $tea.Model {
  apiList?: DescribeApiListResponseBodyApiList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiList: 'ApiList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiList: { 'type': 'array', 'itemType': DescribeApiListResponseBodyApiList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiListResponseBody;
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
      body: DescribeApiListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentAssetFormRequest extends $tea.Model {
  componentName?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'ComponentName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentAssetFormResponseBody extends $tea.Model {
  componentAssetForm?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      componentAssetForm: 'ComponentAssetForm',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentAssetForm: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentAssetFormResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeComponentAssetFormResponseBody;
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
      body: DescribeComponentAssetFormResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentAssetsRequest extends $tea.Model {
  componentName?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'ComponentName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentAssetsResponseBody extends $tea.Model {
  componentAssets?: DescribeComponentAssetsResponseBodyComponentAssets[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      componentAssets: 'ComponentAssets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentAssets: { 'type': 'array', 'itemType': DescribeComponentAssetsResponseBodyComponentAssets },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentAssetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeComponentAssetsResponseBody;
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
      body: DescribeComponentAssetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentListRequest extends $tea.Model {
  lang?: string;
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentListResponseBody extends $tea.Model {
  components?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeComponentListResponseBody;
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
      body: DescribeComponentListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentPlaybookRequest extends $tea.Model {
  lang?: string;
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentPlaybookResponseBody extends $tea.Model {
  playbooks?: DescribeComponentPlaybookResponseBodyPlaybooks[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      playbooks: 'Playbooks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbooks: { 'type': 'array', 'itemType': DescribeComponentPlaybookResponseBodyPlaybooks },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentPlaybookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeComponentPlaybookResponseBody;
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
      body: DescribeComponentPlaybookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentsJsRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentsJsResponseBody extends $tea.Model {
  componentsJs?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      componentsJs: 'ComponentsJs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentsJs: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentsJsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeComponentsJsResponseBody;
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
      body: DescribeComponentsJsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistinctReleasesRequest extends $tea.Model {
  lang?: string;
  playbookUuid?: string;
  taskflowMd5?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
      taskflowMd5: 'TaskflowMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookUuid: 'string',
      taskflowMd5: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistinctReleasesResponseBody extends $tea.Model {
  records?: DescribeDistinctReleasesResponseBodyRecords[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': DescribeDistinctReleasesResponseBodyRecords },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistinctReleasesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDistinctReleasesResponseBody;
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
      body: DescribeDistinctReleasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnumItemsRequest extends $tea.Model {
  enumType?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      enumType: 'EnumType',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enumType: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnumItemsResponseBody extends $tea.Model {
  data?: DescribeEnumItemsResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeEnumItemsResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnumItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEnumItemsResponseBody;
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
      body: DescribeEnumItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutePlaybooksRequest extends $tea.Model {
  lang?: string;
  paramType?: string;
  playbookName?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      paramType: 'ParamType',
      playbookName: 'PlaybookName',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      paramType: 'string',
      playbookName: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutePlaybooksResponseBody extends $tea.Model {
  playbookMetrics?: DescribeExecutePlaybooksResponseBodyPlaybookMetrics[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      playbookMetrics: 'PlaybookMetrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbookMetrics: { 'type': 'array', 'itemType': DescribeExecutePlaybooksResponseBodyPlaybookMetrics },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutePlaybooksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeExecutePlaybooksResponseBody;
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
      body: DescribeExecutePlaybooksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFieldRequest extends $tea.Model {
  lang?: string;
  queryKey?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      queryKey: 'QueryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      queryKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFieldResponseBody extends $tea.Model {
  fields?: string;
  name?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: 'string',
      name: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFieldResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeFieldResponseBody;
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
      body: DescribeFieldResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLatestRecordSchemaRequest extends $tea.Model {
  lang?: string;
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLatestRecordSchemaResponseBody extends $tea.Model {
  playbookNodeSchema?: DescribeLatestRecordSchemaResponseBodyPlaybookNodeSchema;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      playbookNodeSchema: 'PlaybookNodeSchema',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbookNodeSchema: DescribeLatestRecordSchemaResponseBodyPlaybookNodeSchema,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLatestRecordSchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeLatestRecordSchemaResponseBody;
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
      body: DescribeLatestRecordSchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeParamTagsRequest extends $tea.Model {
  lang?: string;
  nodeName?: string;
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      nodeName: 'NodeName',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      nodeName: 'string',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeParamTagsResponseBody extends $tea.Model {
  paramReferredPaths?: DescribeNodeParamTagsResponseBodyParamReferredPaths[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      paramReferredPaths: 'ParamReferredPaths',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramReferredPaths: { 'type': 'array', 'itemType': DescribeNodeParamTagsResponseBodyParamReferredPaths },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeParamTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeNodeParamTagsResponseBody;
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
      body: DescribeNodeParamTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeUsedInfosRequest extends $tea.Model {
  lang?: string;
  nodeName?: string;
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      nodeName: 'NodeName',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      nodeName: 'string',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeUsedInfosResponseBody extends $tea.Model {
  nodeUsedInfos?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeUsedInfos: 'NodeUsedInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeUsedInfos: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeUsedInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeNodeUsedInfosResponseBody;
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
      body: DescribeNodeUsedInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookRequest extends $tea.Model {
  debugFlag?: number;
  lang?: string;
  playbookUuid?: string;
  taskflowMd5?: string;
  static names(): { [key: string]: string } {
    return {
      debugFlag: 'DebugFlag',
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
      taskflowMd5: 'TaskflowMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugFlag: 'number',
      lang: 'string',
      playbookUuid: 'string',
      taskflowMd5: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookResponseBody extends $tea.Model {
  playbook?: DescribePlaybookResponseBodyPlaybook;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      playbook: 'Playbook',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbook: DescribePlaybookResponseBodyPlaybook,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePlaybookResponseBody;
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
      body: DescribePlaybookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookInputOutputRequest extends $tea.Model {
  lang?: string;
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookInputOutputResponseBody extends $tea.Model {
  config?: DescribePlaybookInputOutputResponseBodyConfig;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: DescribePlaybookInputOutputResponseBodyConfig,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookInputOutputResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePlaybookInputOutputResponseBody;
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
      body: DescribePlaybookInputOutputResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookMetricsRequest extends $tea.Model {
  lang?: string;
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookMetricsResponseBody extends $tea.Model {
  metrics?: DescribePlaybookMetricsResponseBodyMetrics;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: DescribePlaybookMetricsResponseBodyMetrics,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePlaybookMetricsResponseBody;
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
      body: DescribePlaybookMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookNodesOutputRequest extends $tea.Model {
  lang?: string;
  nodeName?: string;
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      nodeName: 'NodeName',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      nodeName: 'string',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookNodesOutputResponseBody extends $tea.Model {
  playbookNodesOutput?: DescribePlaybookNodesOutputResponseBodyPlaybookNodesOutput;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      playbookNodesOutput: 'PlaybookNodesOutput',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbookNodesOutput: DescribePlaybookNodesOutputResponseBodyPlaybookNodesOutput,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookNodesOutputResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePlaybookNodesOutputResponseBody;
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
      body: DescribePlaybookNodesOutputResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookNumberMetricsRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookNumberMetricsResponseBody extends $tea.Model {
  metrics?: DescribePlaybookNumberMetricsResponseBodyMetrics;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: DescribePlaybookNumberMetricsResponseBodyMetrics,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookNumberMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePlaybookNumberMetricsResponseBody;
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
      body: DescribePlaybookNumberMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookReleasesRequest extends $tea.Model {
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookReleasesResponseBody extends $tea.Model {
  page?: DescribePlaybookReleasesResponseBodyPage;
  records?: DescribePlaybookReleasesResponseBodyRecords[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: DescribePlaybookReleasesResponseBodyPage,
      records: { 'type': 'array', 'itemType': DescribePlaybookReleasesResponseBodyRecords },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookReleasesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePlaybookReleasesResponseBody;
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
      body: DescribePlaybookReleasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybooksRequest extends $tea.Model {
  active?: number;
  endMillis?: number;
  lang?: string;
  name?: string;
  ownType?: string;
  pageNumber?: string;
  pageSize?: string;
  playbookUuid?: string;
  startMillis?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      endMillis: 'EndMillis',
      lang: 'Lang',
      name: 'Name',
      ownType: 'OwnType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      playbookUuid: 'PlaybookUuid',
      startMillis: 'StartMillis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      endMillis: 'number',
      lang: 'string',
      name: 'string',
      ownType: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      playbookUuid: 'string',
      startMillis: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybooksResponseBody extends $tea.Model {
  page?: DescribePlaybooksResponseBodyPage;
  playbooks?: DescribePlaybooksResponseBodyPlaybooks[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      playbooks: 'Playbooks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: DescribePlaybooksResponseBodyPage,
      playbooks: { 'type': 'array', 'itemType': DescribePlaybooksResponseBodyPlaybooks },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybooksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePlaybooksResponseBody;
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
      body: DescribePlaybooksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePopApiRequest extends $tea.Model {
  apiName?: string;
  apiVersion?: string;
  env?: string;
  popCode?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiVersion: 'ApiVersion',
      env: 'Env',
      popCode: 'PopCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiVersion: 'string',
      env: 'string',
      popCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePopApiResponseBody extends $tea.Model {
  apiName?: string;
  openApiMetaList?: DescribePopApiResponseBodyOpenApiMetaList[];
  popCode?: string;
  requestId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      openApiMetaList: 'OpenApiMetaList',
      popCode: 'PopCode',
      requestId: 'RequestId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      openApiMetaList: { 'type': 'array', 'itemType': DescribePopApiResponseBodyOpenApiMetaList },
      popCode: 'string',
      requestId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePopApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePopApiResponseBody;
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
      body: DescribePopApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePopApiItemListRequest extends $tea.Model {
  apiName?: string;
  apiVersion?: string;
  env?: string;
  lang?: string;
  popCode?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiVersion: 'ApiVersion',
      env: 'Env',
      lang: 'Lang',
      popCode: 'PopCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiVersion: 'string',
      env: 'string',
      lang: 'string',
      popCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePopApiItemListResponseBody extends $tea.Model {
  names?: string[];
  popCode?: string;
  requestId?: string;
  total?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      names: 'Names',
      popCode: 'PopCode',
      requestId: 'RequestId',
      total: 'Total',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      names: { 'type': 'array', 'itemType': 'string' },
      popCode: 'string',
      requestId: 'string',
      total: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePopApiItemListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePopApiItemListResponseBody;
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
      body: DescribePopApiItemListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePopApiVersionListRequest extends $tea.Model {
  env?: string;
  lang?: string;
  popCode?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      lang: 'Lang',
      popCode: 'PopCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      lang: 'string',
      popCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePopApiVersionListResponseBody extends $tea.Model {
  popCode?: string;
  requestId?: string;
  total?: number;
  versionList?: DescribePopApiVersionListResponseBodyVersionList[];
  static names(): { [key: string]: string } {
    return {
      popCode: 'PopCode',
      requestId: 'RequestId',
      total: 'Total',
      versionList: 'VersionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      popCode: 'string',
      requestId: 'string',
      total: 'number',
      versionList: { 'type': 'array', 'itemType': DescribePopApiVersionListResponseBodyVersionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePopApiVersionListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePopApiVersionListResponseBody;
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
      body: DescribePopApiVersionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTasksRequest extends $tea.Model {
  direction?: string;
  entityName?: string;
  entityType?: string;
  orderField?: string;
  pageNumber?: string;
  pageSize?: number;
  paramContent?: string;
  processActionEnd?: number;
  processActionStart?: number;
  processRemoveEnd?: number;
  processRemoveStart?: number;
  processStrategyUuid?: string;
  sceneCode?: string;
  scope?: string;
  source?: string;
  taskId?: string;
  taskStatus?: string;
  yunCode?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      entityName: 'EntityName',
      entityType: 'EntityType',
      orderField: 'OrderField',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paramContent: 'ParamContent',
      processActionEnd: 'ProcessActionEnd',
      processActionStart: 'ProcessActionStart',
      processRemoveEnd: 'ProcessRemoveEnd',
      processRemoveStart: 'ProcessRemoveStart',
      processStrategyUuid: 'ProcessStrategyUuid',
      sceneCode: 'SceneCode',
      scope: 'Scope',
      source: 'Source',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      yunCode: 'YunCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      entityName: 'string',
      entityType: 'string',
      orderField: 'string',
      pageNumber: 'string',
      pageSize: 'number',
      paramContent: 'string',
      processActionEnd: 'number',
      processActionStart: 'number',
      processRemoveEnd: 'number',
      processRemoveStart: 'number',
      processStrategyUuid: 'string',
      sceneCode: 'string',
      scope: 'string',
      source: 'string',
      taskId: 'string',
      taskStatus: 'string',
      yunCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTasksResponseBody extends $tea.Model {
  page?: DescribeProcessTasksResponseBodyPage;
  processTasks?: DescribeProcessTasksResponseBodyProcessTasks[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      processTasks: 'ProcessTasks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: DescribeProcessTasksResponseBodyPage,
      processTasks: { 'type': 'array', 'itemType': DescribeProcessTasksResponseBodyProcessTasks },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeProcessTasksResponseBody;
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
      body: DescribeProcessTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordActionOutputListRequest extends $tea.Model {
  actionUuid?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      actionUuid: 'ActionUuid',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionUuid: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordActionOutputListResponseBody extends $tea.Model {
  actionOutputs?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      actionOutputs: 'ActionOutputs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionOutputs: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordActionOutputListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSoarRecordActionOutputListResponseBody;
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
      body: DescribeSoarRecordActionOutputListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordInOutputRequest extends $tea.Model {
  actionUuid?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      actionUuid: 'ActionUuid',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionUuid: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordInOutputResponseBody extends $tea.Model {
  inOutputInfo?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      inOutputInfo: 'InOutputInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inOutputInfo: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordInOutputResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSoarRecordInOutputResponseBody;
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
      body: DescribeSoarRecordInOutputResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordsRequest extends $tea.Model {
  endMillis?: number;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  playbookUuid?: string;
  startMillis?: number;
  taskStatus?: string;
  taskflowMd5?: string;
  triggerUser?: string;
  static names(): { [key: string]: string } {
    return {
      endMillis: 'EndMillis',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      playbookUuid: 'PlaybookUuid',
      startMillis: 'StartMillis',
      taskStatus: 'TaskStatus',
      taskflowMd5: 'TaskflowMd5',
      triggerUser: 'TriggerUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endMillis: 'number',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      playbookUuid: 'string',
      startMillis: 'number',
      taskStatus: 'string',
      taskflowMd5: 'string',
      triggerUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordsResponseBody extends $tea.Model {
  page?: DescribeSoarRecordsResponseBodyPage;
  requestId?: string;
  soarExecuteRecords?: DescribeSoarRecordsResponseBodySoarExecuteRecords[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      requestId: 'RequestId',
      soarExecuteRecords: 'SoarExecuteRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: DescribeSoarRecordsResponseBodyPage,
      requestId: 'string',
      soarExecuteRecords: { 'type': 'array', 'itemType': DescribeSoarRecordsResponseBodySoarExecuteRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSoarRecordsResponseBody;
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
      body: DescribeSoarRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarTaskAndActionsRequest extends $tea.Model {
  lang?: string;
  requestUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      requestUuid: 'RequestUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      requestUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarTaskAndActionsResponseBody extends $tea.Model {
  details?: DescribeSoarTaskAndActionsResponseBodyDetails;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: DescribeSoarTaskAndActionsResponseBodyDetails,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarTaskAndActionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSoarTaskAndActionsResponseBody;
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
      body: DescribeSoarTaskAndActionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSophonCommandsRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSophonCommandsResponseBody extends $tea.Model {
  data?: DescribeSophonCommandsResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeSophonCommandsResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSophonCommandsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSophonCommandsResponseBody;
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
      body: DescribeSophonCommandsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescriberPython3ScriptLogsRequest extends $tea.Model {
  lang?: string;
  requestUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      requestUuid: 'RequestUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      requestUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescriberPython3ScriptLogsResponseBody extends $tea.Model {
  requestId?: string;
  runResult?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      runResult: 'RunResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      runResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescriberPython3ScriptLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescriberPython3ScriptLogsResponseBody;
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
      body: DescriberPython3ScriptLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyComponentAssetRequest extends $tea.Model {
  assetConfig?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      assetConfig: 'AssetConfig',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetConfig: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyComponentAssetResponseBody extends $tea.Model {
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

export class ModifyComponentAssetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyComponentAssetResponseBody;
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
      body: ModifyComponentAssetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlaybookRequest extends $tea.Model {
  description?: string;
  displayName?: string;
  lang?: string;
  playbookUuid?: string;
  taskflow?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
      taskflow: 'Taskflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      lang: 'string',
      playbookUuid: 'string',
      taskflow: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlaybookResponseBody extends $tea.Model {
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

export class ModifyPlaybookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyPlaybookResponseBody;
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
      body: ModifyPlaybookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlaybookInputOutputRequest extends $tea.Model {
  inputParams?: string;
  lang?: string;
  outputParams?: string;
  paramType?: string;
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      inputParams: 'InputParams',
      lang: 'Lang',
      outputParams: 'OutputParams',
      paramType: 'ParamType',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputParams: 'string',
      lang: 'string',
      outputParams: 'string',
      paramType: 'string',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlaybookInputOutputResponseBody extends $tea.Model {
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

export class ModifyPlaybookInputOutputResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyPlaybookInputOutputResponseBody;
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
      body: ModifyPlaybookInputOutputResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlaybookInstanceStatusRequest extends $tea.Model {
  active?: number;
  lang?: string;
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      lang: 'string',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlaybookInstanceStatusResponseBody extends $tea.Model {
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

export class ModifyPlaybookInstanceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyPlaybookInstanceStatusResponseBody;
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
      body: ModifyPlaybookInstanceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishPlaybookRequest extends $tea.Model {
  description?: string;
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishPlaybookResponseBody extends $tea.Model {
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

export class PublishPlaybookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PublishPlaybookResponseBody;
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
      body: PublishPlaybookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTreeDataRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTreeDataResponseBody extends $tea.Model {
  playbooks?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      playbooks: 'Playbooks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbooks: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTreeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTreeDataResponseBody;
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
      body: QueryTreeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenamePlaybookNodeRequest extends $tea.Model {
  lang?: string;
  newNodeName?: string;
  oldNodeName?: string;
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      newNodeName: 'NewNodeName',
      oldNodeName: 'OldNodeName',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      newNodeName: 'string',
      oldNodeName: 'string',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenamePlaybookNodeResponseBody extends $tea.Model {
  renameResult?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      renameResult: 'RenameResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renameResult: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenamePlaybookNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RenamePlaybookNodeResponseBody;
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
      body: RenamePlaybookNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertPlaybookReleaseRequest extends $tea.Model {
  isPublish?: boolean;
  playReleaseId?: number;
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      isPublish: 'IsPublish',
      playReleaseId: 'PlayReleaseId',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPublish: 'boolean',
      playReleaseId: 'number',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertPlaybookReleaseResponseBody extends $tea.Model {
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

export class RevertPlaybookReleaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RevertPlaybookReleaseResponseBody;
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
      body: RevertPlaybookReleaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPython3ScriptRequest extends $tea.Model {
  nodeName?: string;
  params?: string;
  playbookUuid?: string;
  pythonScript?: string;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
      params: 'Params',
      playbookUuid: 'PlaybookUuid',
      pythonScript: 'PythonScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
      params: 'string',
      playbookUuid: 'string',
      pythonScript: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPython3ScriptResponseBody extends $tea.Model {
  requestId?: string;
  runResult?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      runResult: 'RunResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      runResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPython3ScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RunPython3ScriptResponseBody;
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
      body: RunPython3ScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerPlaybookRequest extends $tea.Model {
  inputParam?: string;
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      inputParam: 'InputParam',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputParam: 'string',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerPlaybookResponseBody extends $tea.Model {
  requestId?: string;
  triggerUuid?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      triggerUuid: 'TriggerUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      triggerUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerPlaybookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TriggerPlaybookResponseBody;
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
      body: TriggerPlaybookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerProcessTaskRequest extends $tea.Model {
  actionType?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerProcessTaskResponseBody extends $tea.Model {
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

export class TriggerProcessTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TriggerProcessTaskResponseBody;
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
      body: TriggerProcessTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerSophonPlaybookRequest extends $tea.Model {
  commandName?: string;
  inputParams?: string;
  sophonTaskId?: string;
  triggerType?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      commandName: 'CommandName',
      inputParams: 'InputParams',
      sophonTaskId: 'SophonTaskId',
      triggerType: 'TriggerType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandName: 'string',
      inputParams: 'string',
      sophonTaskId: 'string',
      triggerType: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerSophonPlaybookResponseBody extends $tea.Model {
  data?: TriggerSophonPlaybookResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: TriggerSophonPlaybookResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerSophonPlaybookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TriggerSophonPlaybookResponseBody;
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
      body: TriggerSophonPlaybookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPlaybookRequest extends $tea.Model {
  playbookUuid?: string;
  taskFlow?: string;
  static names(): { [key: string]: string } {
    return {
      playbookUuid: 'PlaybookUuid',
      taskFlow: 'TaskFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbookUuid: 'string',
      taskFlow: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPlaybookResponseBody extends $tea.Model {
  checkTaskInfos?: VerifyPlaybookResponseBodyCheckTaskInfos[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkTaskInfos: 'CheckTaskInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkTaskInfos: { 'type': 'array', 'itemType': VerifyPlaybookResponseBodyCheckTaskInfos },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPlaybookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VerifyPlaybookResponseBody;
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
      body: VerifyPlaybookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPythonFileRequest extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPythonFileResponseBody extends $tea.Model {
  requestId?: string;
  syntax?: VerifyPythonFileResponseBodySyntax[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      syntax: 'Syntax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      syntax: { 'type': 'array', 'itemType': VerifyPythonFileResponseBodySyntax },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPythonFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VerifyPythonFileResponseBody;
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
      body: VerifyPythonFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComparePlaybooksResponseBodyCompareResult extends $tea.Model {
  description?: string;
  new?: boolean;
  same?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      new: 'New',
      same: 'Same',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      new: 'boolean',
      same: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlaybookResponseBodyData extends $tea.Model {
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiListResponseBodyApiList extends $tea.Model {
  docUrl?: string;
  popCode?: string;
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      docUrl: 'DocUrl',
      popCode: 'PopCode',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docUrl: 'string',
      popCode: 'string',
      productName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentAssetsResponseBodyComponentAssets extends $tea.Model {
  assetUuid?: string;
  componentname?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  name?: string;
  params?: string;
  static names(): { [key: string]: string } {
    return {
      assetUuid: 'AssetUuid',
      componentname: 'Componentname',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetUuid: 'string',
      componentname: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      params: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentPlaybookResponseBodyPlaybooks extends $tea.Model {
  description?: string;
  displayName?: string;
  inputParams?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      inputParams: 'InputParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      inputParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistinctReleasesResponseBodyRecords extends $tea.Model {
  description?: string;
  taskflowMd5?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      taskflowMd5: 'TaskflowMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      taskflowMd5: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnumItemsResponseBodyData extends $tea.Model {
  key?: string;
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

export class DescribeExecutePlaybooksResponseBodyPlaybookMetrics extends $tea.Model {
  description?: string;
  displayName?: string;
  paramConfig?: string;
  paramType?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      paramConfig: 'ParamConfig',
      paramType: 'ParamType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      paramConfig: 'string',
      paramType: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLatestRecordSchemaResponseBodyPlaybookNodeSchemaNodeSchema extends $tea.Model {
  actionName?: string;
  componentName?: string;
  nodeName?: string;
  outputFields?: string[];
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      componentName: 'ComponentName',
      nodeName: 'NodeName',
      outputFields: 'OutputFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      componentName: 'string',
      nodeName: 'string',
      outputFields: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLatestRecordSchemaResponseBodyPlaybookNodeSchema extends $tea.Model {
  nodeSchema?: DescribeLatestRecordSchemaResponseBodyPlaybookNodeSchemaNodeSchema[];
  static names(): { [key: string]: string } {
    return {
      nodeSchema: 'NodeSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeSchema: { 'type': 'array', 'itemType': DescribeLatestRecordSchemaResponseBodyPlaybookNodeSchemaNodeSchema },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeParamTagsResponseBodyParamReferredPaths extends $tea.Model {
  paramName?: string;
  referredPath?: string[];
  static names(): { [key: string]: string } {
    return {
      paramName: 'ParamName',
      referredPath: 'ReferredPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramName: 'string',
      referredPath: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookResponseBodyPlaybook extends $tea.Model {
  creator?: string;
  description?: string;
  displayName?: string;
  failExeNum?: number;
  gmtCreate?: string;
  gmtModified?: string;
  inputParams?: string;
  lastExeTime?: number;
  modifier?: string;
  onlineActive?: boolean;
  onlineReleaseTaskflowMd5?: string;
  ownType?: string;
  playbookUuid?: string;
  successExeNum?: number;
  taskflow?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      description: 'Description',
      displayName: 'DisplayName',
      failExeNum: 'FailExeNum',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      inputParams: 'InputParams',
      lastExeTime: 'LastExeTime',
      modifier: 'Modifier',
      onlineActive: 'OnlineActive',
      onlineReleaseTaskflowMd5: 'OnlineReleaseTaskflowMd5',
      ownType: 'OwnType',
      playbookUuid: 'PlaybookUuid',
      successExeNum: 'SuccessExeNum',
      taskflow: 'Taskflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      description: 'string',
      displayName: 'string',
      failExeNum: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      inputParams: 'string',
      lastExeTime: 'number',
      modifier: 'string',
      onlineActive: 'boolean',
      onlineReleaseTaskflowMd5: 'string',
      ownType: 'string',
      playbookUuid: 'string',
      successExeNum: 'number',
      taskflow: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookInputOutputResponseBodyConfig extends $tea.Model {
  inputParams?: string;
  outputParams?: string;
  paramType?: string;
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      inputParams: 'InputParams',
      outputParams: 'OutputParams',
      paramType: 'ParamType',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputParams: 'string',
      outputParams: 'string',
      paramType: 'string',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookMetricsResponseBodyMetrics extends $tea.Model {
  active?: number;
  description?: string;
  displayName?: string;
  failNum?: number;
  gmtCreate?: number;
  historyMd5?: number;
  lastRuntime?: number;
  ownType?: string;
  playbookUuid?: string;
  succNum?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      description: 'Description',
      displayName: 'DisplayName',
      failNum: 'FailNum',
      gmtCreate: 'GmtCreate',
      historyMd5: 'HistoryMd5',
      lastRuntime: 'LastRuntime',
      ownType: 'OwnType',
      playbookUuid: 'PlaybookUuid',
      succNum: 'SuccNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      description: 'string',
      displayName: 'string',
      failNum: 'number',
      gmtCreate: 'number',
      historyMd5: 'number',
      lastRuntime: 'number',
      ownType: 'string',
      playbookUuid: 'string',
      succNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookNodesOutputResponseBodyPlaybookNodesOutput extends $tea.Model {
  nodeName?: string;
  nodeOutput?: string;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
      nodeOutput: 'NodeOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
      nodeOutput: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookNumberMetricsResponseBodyMetrics extends $tea.Model {
  startUpNum?: number;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      startUpNum: 'StartUpNum',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startUpNum: 'number',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookReleasesResponseBodyPage extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookReleasesResponseBodyRecords extends $tea.Model {
  creator?: string;
  description?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  taskflowMd5?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      taskflowMd5: 'TaskflowMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      taskflowMd5: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybooksResponseBodyPage extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybooksResponseBodyPlaybooks extends $tea.Model {
  active?: number;
  displayName?: string;
  gmtCreate?: number;
  lastRuntime?: number;
  ownType?: string;
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      displayName: 'DisplayName',
      gmtCreate: 'GmtCreate',
      lastRuntime: 'LastRuntime',
      ownType: 'OwnType',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      displayName: 'string',
      gmtCreate: 'number',
      lastRuntime: 'number',
      ownType: 'string',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePopApiResponseBodyOpenApiMetaList extends $tea.Model {
  description?: string;
  exampleValue?: string;
  name?: string;
  required?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      exampleValue: 'ExampleValue',
      name: 'Name',
      required: 'Required',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      exampleValue: 'string',
      name: 'string',
      required: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePopApiVersionListResponseBodyVersionList extends $tea.Model {
  apiName?: string;
  popCode?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      popCode: 'PopCode',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      popCode: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTasksResponseBodyPage extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTasksResponseBodyProcessTasks extends $tea.Model {
  creator?: string;
  entityName?: string;
  entityType?: string;
  gmtCreateMillis?: number;
  gmtModifiedMillis?: number;
  inputParams?: string;
  processStrategyUuid?: string;
  processTime?: number;
  removeTime?: number;
  sceneCode?: string;
  sceneName?: string;
  scope?: string;
  source?: string;
  taskId?: string;
  taskStatus?: number;
  yunCode?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      entityName: 'EntityName',
      entityType: 'EntityType',
      gmtCreateMillis: 'GmtCreateMillis',
      gmtModifiedMillis: 'GmtModifiedMillis',
      inputParams: 'InputParams',
      processStrategyUuid: 'ProcessStrategyUuid',
      processTime: 'ProcessTime',
      removeTime: 'RemoveTime',
      sceneCode: 'SceneCode',
      sceneName: 'SceneName',
      scope: 'Scope',
      source: 'Source',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      yunCode: 'YunCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      entityName: 'string',
      entityType: 'string',
      gmtCreateMillis: 'number',
      gmtModifiedMillis: 'number',
      inputParams: 'string',
      processStrategyUuid: 'string',
      processTime: 'number',
      removeTime: 'number',
      sceneCode: 'string',
      sceneName: 'string',
      scope: 'string',
      source: 'string',
      taskId: 'string',
      taskStatus: 'number',
      yunCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordsResponseBodyPage extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordsResponseBodySoarExecuteRecords extends $tea.Model {
  endTime?: number;
  errorMsg?: string;
  rawEventReq?: string;
  requestUuid?: string;
  resultMessage?: string;
  startTime?: number;
  status?: string;
  taskName?: string;
  taskType?: string;
  taskflowMd5?: string;
  triggerType?: string;
  triggerUser?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      errorMsg: 'ErrorMsg',
      rawEventReq: 'RawEventReq',
      requestUuid: 'RequestUuid',
      resultMessage: 'ResultMessage',
      startTime: 'StartTime',
      status: 'Status',
      taskName: 'TaskName',
      taskType: 'TaskType',
      taskflowMd5: 'TaskflowMd5',
      triggerType: 'TriggerType',
      triggerUser: 'TriggerUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      errorMsg: 'string',
      rawEventReq: 'string',
      requestUuid: 'string',
      resultMessage: 'string',
      startTime: 'number',
      status: 'string',
      taskName: 'string',
      taskType: 'string',
      taskflowMd5: 'string',
      triggerType: 'string',
      triggerUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarTaskAndActionsResponseBodyDetailsActions extends $tea.Model {
  action?: string;
  actionUuid?: string;
  assetName?: string;
  component?: string;
  endTime?: number;
  nodeName?: string;
  requestUuid?: string;
  startTime?: number;
  status?: string;
  taskName?: string;
  taskStatus?: string;
  triggerUser?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionUuid: 'ActionUuid',
      assetName: 'AssetName',
      component: 'Component',
      endTime: 'EndTime',
      nodeName: 'NodeName',
      requestUuid: 'RequestUuid',
      startTime: 'StartTime',
      status: 'Status',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      triggerUser: 'TriggerUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionUuid: 'string',
      assetName: 'string',
      component: 'string',
      endTime: 'number',
      nodeName: 'string',
      requestUuid: 'string',
      startTime: 'number',
      status: 'string',
      taskName: 'string',
      taskStatus: 'string',
      triggerUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarTaskAndActionsResponseBodyDetails extends $tea.Model {
  actions?: DescribeSoarTaskAndActionsResponseBodyDetailsActions[];
  endTime?: number;
  errorMsg?: string;
  rawEventReq?: string;
  requestUuid?: string;
  resultLevel?: string;
  resultMessage?: string;
  startTime?: number;
  status?: string;
  taskFlowMd5?: string;
  taskName?: string;
  taskTenantId?: string;
  triggerType?: string;
  triggerUser?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      endTime: 'EndTime',
      errorMsg: 'ErrorMsg',
      rawEventReq: 'RawEventReq',
      requestUuid: 'RequestUuid',
      resultLevel: 'ResultLevel',
      resultMessage: 'ResultMessage',
      startTime: 'StartTime',
      status: 'Status',
      taskFlowMd5: 'TaskFlowMd5',
      taskName: 'TaskName',
      taskTenantId: 'TaskTenantId',
      triggerType: 'TriggerType',
      triggerUser: 'TriggerUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': DescribeSoarTaskAndActionsResponseBodyDetailsActions },
      endTime: 'number',
      errorMsg: 'string',
      rawEventReq: 'string',
      requestUuid: 'string',
      resultLevel: 'string',
      resultMessage: 'string',
      startTime: 'number',
      status: 'string',
      taskFlowMd5: 'string',
      taskName: 'string',
      taskTenantId: 'string',
      triggerType: 'string',
      triggerUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSophonCommandsResponseBodyDataParamConfig extends $tea.Model {
  checkField?: string;
  field?: string;
  necessary?: boolean;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      checkField: 'CheckField',
      field: 'Field',
      necessary: 'Necessary',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkField: 'string',
      field: 'string',
      necessary: 'boolean',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSophonCommandsResponseBodyData extends $tea.Model {
  description?: string;
  displayName?: string;
  name?: string;
  paramConfig?: DescribeSophonCommandsResponseBodyDataParamConfig[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      paramConfig: 'ParamConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      name: 'string',
      paramConfig: { 'type': 'array', 'itemType': DescribeSophonCommandsResponseBodyDataParamConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerSophonPlaybookResponseBodyData extends $tea.Model {
  sophonTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      sophonTaskId: 'SophonTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sophonTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPlaybookResponseBodyCheckTaskInfos extends $tea.Model {
  detail?: string;
  nodeName?: string;
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      nodeName: 'NodeName',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      nodeName: 'string',
      riskLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPythonFileResponseBodySyntax extends $tea.Model {
  endColumn?: number;
  endLineNumber?: number;
  message?: string;
  severity?: number;
  startColumn?: number;
  startLineNumber?: number;
  static names(): { [key: string]: string } {
    return {
      endColumn: 'EndColumn',
      endLineNumber: 'EndLineNumber',
      message: 'Message',
      severity: 'Severity',
      startColumn: 'StartColumn',
      startLineNumber: 'StartLineNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endColumn: 'number',
      endLineNumber: 'number',
      message: 'string',
      severity: 'number',
      startColumn: 'number',
      startLineNumber: 'number',
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
    this._endpoint = this.getEndpoint("sophonsoar", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async batchModifyInstanceStatusWithOptions(request: BatchModifyInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<BatchModifyInstanceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.active)) {
      body["Active"] = request.active;
    }

    if (!Util.isUnset(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchModifyInstanceStatus",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchModifyInstanceStatusResponse>(await this.callApi(params, req, runtime), new BatchModifyInstanceStatusResponse({}));
  }

  async batchModifyInstanceStatus(request: BatchModifyInstanceStatusRequest): Promise<BatchModifyInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchModifyInstanceStatusWithOptions(request, runtime);
  }

  async comparePlaybooksWithOptions(request: ComparePlaybooksRequest, runtime: $Util.RuntimeOptions): Promise<ComparePlaybooksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.newPlaybookReleaseId)) {
      query["NewPlaybookReleaseId"] = request.newPlaybookReleaseId;
    }

    if (!Util.isUnset(request.oldPlaybookReleaseId)) {
      query["OldPlaybookReleaseId"] = request.oldPlaybookReleaseId;
    }

    if (!Util.isUnset(request.playbookUuid)) {
      query["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ComparePlaybooks",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ComparePlaybooksResponse>(await this.callApi(params, req, runtime), new ComparePlaybooksResponse({}));
  }

  async comparePlaybooks(request: ComparePlaybooksRequest): Promise<ComparePlaybooksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.comparePlaybooksWithOptions(request, runtime);
  }

  async createPlaybookWithOptions(request: CreatePlaybookRequest, runtime: $Util.RuntimeOptions): Promise<CreatePlaybookResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.lang)) {
      body["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePlaybookResponse>(await this.callApi(params, req, runtime), new CreatePlaybookResponse({}));
  }

  async createPlaybook(request: CreatePlaybookRequest): Promise<CreatePlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPlaybookWithOptions(request, runtime);
  }

  async debugPlaybookWithOptions(request: DebugPlaybookRequest, runtime: $Util.RuntimeOptions): Promise<DebugPlaybookResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    if (!Util.isUnset(request.record)) {
      body["Record"] = request.record;
    }

    if (!Util.isUnset(request.taskflow)) {
      body["Taskflow"] = request.taskflow;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DebugPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DebugPlaybookResponse>(await this.callApi(params, req, runtime), new DebugPlaybookResponse({}));
  }

  async debugPlaybook(request: DebugPlaybookRequest): Promise<DebugPlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.debugPlaybookWithOptions(request, runtime);
  }

  async deleteComponentAssetWithOptions(request: DeleteComponentAssetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteComponentAssetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.assetId)) {
      query["AssetId"] = request.assetId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteComponentAsset",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteComponentAssetResponse>(await this.callApi(params, req, runtime), new DeleteComponentAssetResponse({}));
  }

  async deleteComponentAsset(request: DeleteComponentAssetRequest): Promise<DeleteComponentAssetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteComponentAssetWithOptions(request, runtime);
  }

  async deletePlaybookWithOptions(request: DeletePlaybookRequest, runtime: $Util.RuntimeOptions): Promise<DeletePlaybookResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeletePlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePlaybookResponse>(await this.callApi(params, req, runtime), new DeletePlaybookResponse({}));
  }

  async deletePlaybook(request: DeletePlaybookRequest): Promise<DeletePlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePlaybookWithOptions(request, runtime);
  }

  async describeApiListWithOptions(request: DescribeApiListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiList",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiListResponse>(await this.callApi(params, req, runtime), new DescribeApiListResponse({}));
  }

  async describeApiList(request: DescribeApiListRequest): Promise<DescribeApiListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiListWithOptions(request, runtime);
  }

  async describeComponentAssetFormWithOptions(request: DescribeComponentAssetFormRequest, runtime: $Util.RuntimeOptions): Promise<DescribeComponentAssetFormResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeComponentAssetForm",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeComponentAssetFormResponse>(await this.callApi(params, req, runtime), new DescribeComponentAssetFormResponse({}));
  }

  async describeComponentAssetForm(request: DescribeComponentAssetFormRequest): Promise<DescribeComponentAssetFormResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeComponentAssetFormWithOptions(request, runtime);
  }

  async describeComponentAssetsWithOptions(request: DescribeComponentAssetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeComponentAssetsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeComponentAssets",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeComponentAssetsResponse>(await this.callApi(params, req, runtime), new DescribeComponentAssetsResponse({}));
  }

  async describeComponentAssets(request: DescribeComponentAssetsRequest): Promise<DescribeComponentAssetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeComponentAssetsWithOptions(request, runtime);
  }

  async describeComponentListWithOptions(request: DescribeComponentListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeComponentListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeComponentList",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeComponentListResponse>(await this.callApi(params, req, runtime), new DescribeComponentListResponse({}));
  }

  async describeComponentList(request: DescribeComponentListRequest): Promise<DescribeComponentListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeComponentListWithOptions(request, runtime);
  }

  async describeComponentPlaybookWithOptions(request: DescribeComponentPlaybookRequest, runtime: $Util.RuntimeOptions): Promise<DescribeComponentPlaybookResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeComponentPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeComponentPlaybookResponse>(await this.callApi(params, req, runtime), new DescribeComponentPlaybookResponse({}));
  }

  async describeComponentPlaybook(request: DescribeComponentPlaybookRequest): Promise<DescribeComponentPlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeComponentPlaybookWithOptions(request, runtime);
  }

  async describeComponentsJsWithOptions(request: DescribeComponentsJsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeComponentsJsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeComponentsJs",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeComponentsJsResponse>(await this.callApi(params, req, runtime), new DescribeComponentsJsResponse({}));
  }

  async describeComponentsJs(request: DescribeComponentsJsRequest): Promise<DescribeComponentsJsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeComponentsJsWithOptions(request, runtime);
  }

  async describeDistinctReleasesWithOptions(request: DescribeDistinctReleasesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDistinctReleasesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDistinctReleases",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDistinctReleasesResponse>(await this.callApi(params, req, runtime), new DescribeDistinctReleasesResponse({}));
  }

  async describeDistinctReleases(request: DescribeDistinctReleasesRequest): Promise<DescribeDistinctReleasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDistinctReleasesWithOptions(request, runtime);
  }

  async describeEnumItemsWithOptions(request: DescribeEnumItemsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnumItemsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEnumItems",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEnumItemsResponse>(await this.callApi(params, req, runtime), new DescribeEnumItemsResponse({}));
  }

  async describeEnumItems(request: DescribeEnumItemsRequest): Promise<DescribeEnumItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnumItemsWithOptions(request, runtime);
  }

  async describeExecutePlaybooksWithOptions(request: DescribeExecutePlaybooksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExecutePlaybooksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExecutePlaybooks",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExecutePlaybooksResponse>(await this.callApi(params, req, runtime), new DescribeExecutePlaybooksResponse({}));
  }

  async describeExecutePlaybooks(request: DescribeExecutePlaybooksRequest): Promise<DescribeExecutePlaybooksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExecutePlaybooksWithOptions(request, runtime);
  }

  async describeFieldWithOptions(request: DescribeFieldRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFieldResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeField",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFieldResponse>(await this.callApi(params, req, runtime), new DescribeFieldResponse({}));
  }

  async describeField(request: DescribeFieldRequest): Promise<DescribeFieldResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFieldWithOptions(request, runtime);
  }

  async describeLatestRecordSchemaWithOptions(request: DescribeLatestRecordSchemaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLatestRecordSchemaResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLatestRecordSchema",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLatestRecordSchemaResponse>(await this.callApi(params, req, runtime), new DescribeLatestRecordSchemaResponse({}));
  }

  async describeLatestRecordSchema(request: DescribeLatestRecordSchemaRequest): Promise<DescribeLatestRecordSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLatestRecordSchemaWithOptions(request, runtime);
  }

  async describeNodeParamTagsWithOptions(request: DescribeNodeParamTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNodeParamTagsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNodeParamTags",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNodeParamTagsResponse>(await this.callApi(params, req, runtime), new DescribeNodeParamTagsResponse({}));
  }

  async describeNodeParamTags(request: DescribeNodeParamTagsRequest): Promise<DescribeNodeParamTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNodeParamTagsWithOptions(request, runtime);
  }

  async describeNodeUsedInfosWithOptions(request: DescribeNodeUsedInfosRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNodeUsedInfosResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNodeUsedInfos",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNodeUsedInfosResponse>(await this.callApi(params, req, runtime), new DescribeNodeUsedInfosResponse({}));
  }

  async describeNodeUsedInfos(request: DescribeNodeUsedInfosRequest): Promise<DescribeNodeUsedInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNodeUsedInfosWithOptions(request, runtime);
  }

  async describePlaybookWithOptions(request: DescribePlaybookRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlaybookResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePlaybookResponse>(await this.callApi(params, req, runtime), new DescribePlaybookResponse({}));
  }

  async describePlaybook(request: DescribePlaybookRequest): Promise<DescribePlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlaybookWithOptions(request, runtime);
  }

  async describePlaybookInputOutputWithOptions(request: DescribePlaybookInputOutputRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlaybookInputOutputResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePlaybookInputOutput",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePlaybookInputOutputResponse>(await this.callApi(params, req, runtime), new DescribePlaybookInputOutputResponse({}));
  }

  async describePlaybookInputOutput(request: DescribePlaybookInputOutputRequest): Promise<DescribePlaybookInputOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlaybookInputOutputWithOptions(request, runtime);
  }

  async describePlaybookMetricsWithOptions(request: DescribePlaybookMetricsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlaybookMetricsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePlaybookMetrics",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePlaybookMetricsResponse>(await this.callApi(params, req, runtime), new DescribePlaybookMetricsResponse({}));
  }

  async describePlaybookMetrics(request: DescribePlaybookMetricsRequest): Promise<DescribePlaybookMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlaybookMetricsWithOptions(request, runtime);
  }

  async describePlaybookNodesOutputWithOptions(request: DescribePlaybookNodesOutputRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlaybookNodesOutputResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePlaybookNodesOutput",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePlaybookNodesOutputResponse>(await this.callApi(params, req, runtime), new DescribePlaybookNodesOutputResponse({}));
  }

  async describePlaybookNodesOutput(request: DescribePlaybookNodesOutputRequest): Promise<DescribePlaybookNodesOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlaybookNodesOutputWithOptions(request, runtime);
  }

  async describePlaybookNumberMetricsWithOptions(request: DescribePlaybookNumberMetricsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlaybookNumberMetricsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePlaybookNumberMetrics",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePlaybookNumberMetricsResponse>(await this.callApi(params, req, runtime), new DescribePlaybookNumberMetricsResponse({}));
  }

  async describePlaybookNumberMetrics(request: DescribePlaybookNumberMetricsRequest): Promise<DescribePlaybookNumberMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlaybookNumberMetricsWithOptions(request, runtime);
  }

  async describePlaybookReleasesWithOptions(request: DescribePlaybookReleasesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlaybookReleasesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePlaybookReleases",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePlaybookReleasesResponse>(await this.callApi(params, req, runtime), new DescribePlaybookReleasesResponse({}));
  }

  async describePlaybookReleases(request: DescribePlaybookReleasesRequest): Promise<DescribePlaybookReleasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlaybookReleasesWithOptions(request, runtime);
  }

  async describePlaybooksWithOptions(request: DescribePlaybooksRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlaybooksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePlaybooks",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePlaybooksResponse>(await this.callApi(params, req, runtime), new DescribePlaybooksResponse({}));
  }

  async describePlaybooks(request: DescribePlaybooksRequest): Promise<DescribePlaybooksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlaybooksWithOptions(request, runtime);
  }

  async describePopApiWithOptions(request: DescribePopApiRequest, runtime: $Util.RuntimeOptions): Promise<DescribePopApiResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePopApi",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePopApiResponse>(await this.callApi(params, req, runtime), new DescribePopApiResponse({}));
  }

  async describePopApi(request: DescribePopApiRequest): Promise<DescribePopApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePopApiWithOptions(request, runtime);
  }

  async describePopApiItemListWithOptions(request: DescribePopApiItemListRequest, runtime: $Util.RuntimeOptions): Promise<DescribePopApiItemListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePopApiItemList",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePopApiItemListResponse>(await this.callApi(params, req, runtime), new DescribePopApiItemListResponse({}));
  }

  async describePopApiItemList(request: DescribePopApiItemListRequest): Promise<DescribePopApiItemListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePopApiItemListWithOptions(request, runtime);
  }

  async describePopApiVersionListWithOptions(request: DescribePopApiVersionListRequest, runtime: $Util.RuntimeOptions): Promise<DescribePopApiVersionListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePopApiVersionList",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePopApiVersionListResponse>(await this.callApi(params, req, runtime), new DescribePopApiVersionListResponse({}));
  }

  async describePopApiVersionList(request: DescribePopApiVersionListRequest): Promise<DescribePopApiVersionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePopApiVersionListWithOptions(request, runtime);
  }

  async describeProcessTasksWithOptions(request: DescribeProcessTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProcessTasksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProcessTasks",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProcessTasksResponse>(await this.callApi(params, req, runtime), new DescribeProcessTasksResponse({}));
  }

  async describeProcessTasks(request: DescribeProcessTasksRequest): Promise<DescribeProcessTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProcessTasksWithOptions(request, runtime);
  }

  async describeSoarRecordActionOutputListWithOptions(request: DescribeSoarRecordActionOutputListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSoarRecordActionOutputListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSoarRecordActionOutputList",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSoarRecordActionOutputListResponse>(await this.callApi(params, req, runtime), new DescribeSoarRecordActionOutputListResponse({}));
  }

  async describeSoarRecordActionOutputList(request: DescribeSoarRecordActionOutputListRequest): Promise<DescribeSoarRecordActionOutputListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSoarRecordActionOutputListWithOptions(request, runtime);
  }

  async describeSoarRecordInOutputWithOptions(request: DescribeSoarRecordInOutputRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSoarRecordInOutputResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSoarRecordInOutput",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSoarRecordInOutputResponse>(await this.callApi(params, req, runtime), new DescribeSoarRecordInOutputResponse({}));
  }

  async describeSoarRecordInOutput(request: DescribeSoarRecordInOutputRequest): Promise<DescribeSoarRecordInOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSoarRecordInOutputWithOptions(request, runtime);
  }

  async describeSoarRecordsWithOptions(request: DescribeSoarRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSoarRecordsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSoarRecords",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSoarRecordsResponse>(await this.callApi(params, req, runtime), new DescribeSoarRecordsResponse({}));
  }

  async describeSoarRecords(request: DescribeSoarRecordsRequest): Promise<DescribeSoarRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSoarRecordsWithOptions(request, runtime);
  }

  async describeSoarTaskAndActionsWithOptions(request: DescribeSoarTaskAndActionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSoarTaskAndActionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSoarTaskAndActions",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSoarTaskAndActionsResponse>(await this.callApi(params, req, runtime), new DescribeSoarTaskAndActionsResponse({}));
  }

  async describeSoarTaskAndActions(request: DescribeSoarTaskAndActionsRequest): Promise<DescribeSoarTaskAndActionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSoarTaskAndActionsWithOptions(request, runtime);
  }

  async describeSophonCommandsWithOptions(request: DescribeSophonCommandsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSophonCommandsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSophonCommands",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSophonCommandsResponse>(await this.callApi(params, req, runtime), new DescribeSophonCommandsResponse({}));
  }

  async describeSophonCommands(request: DescribeSophonCommandsRequest): Promise<DescribeSophonCommandsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSophonCommandsWithOptions(request, runtime);
  }

  async describerPython3ScriptLogsWithOptions(request: DescriberPython3ScriptLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescriberPython3ScriptLogsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescriberPython3ScriptLogs",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescriberPython3ScriptLogsResponse>(await this.callApi(params, req, runtime), new DescriberPython3ScriptLogsResponse({}));
  }

  async describerPython3ScriptLogs(request: DescriberPython3ScriptLogsRequest): Promise<DescriberPython3ScriptLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describerPython3ScriptLogsWithOptions(request, runtime);
  }

  async modifyComponentAssetWithOptions(request: ModifyComponentAssetRequest, runtime: $Util.RuntimeOptions): Promise<ModifyComponentAssetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.assetConfig)) {
      query["AssetConfig"] = request.assetConfig;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyComponentAsset",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyComponentAssetResponse>(await this.callApi(params, req, runtime), new ModifyComponentAssetResponse({}));
  }

  async modifyComponentAsset(request: ModifyComponentAssetRequest): Promise<ModifyComponentAssetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyComponentAssetWithOptions(request, runtime);
  }

  async modifyPlaybookWithOptions(request: ModifyPlaybookRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPlaybookResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    if (!Util.isUnset(request.taskflow)) {
      body["Taskflow"] = request.taskflow;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPlaybookResponse>(await this.callApi(params, req, runtime), new ModifyPlaybookResponse({}));
  }

  async modifyPlaybook(request: ModifyPlaybookRequest): Promise<ModifyPlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPlaybookWithOptions(request, runtime);
  }

  async modifyPlaybookInputOutputWithOptions(request: ModifyPlaybookInputOutputRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPlaybookInputOutputResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.inputParams)) {
      body["InputParams"] = request.inputParams;
    }

    if (!Util.isUnset(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.outputParams)) {
      body["OutputParams"] = request.outputParams;
    }

    if (!Util.isUnset(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    if (!Util.isUnset(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPlaybookInputOutput",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPlaybookInputOutputResponse>(await this.callApi(params, req, runtime), new ModifyPlaybookInputOutputResponse({}));
  }

  async modifyPlaybookInputOutput(request: ModifyPlaybookInputOutputRequest): Promise<ModifyPlaybookInputOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPlaybookInputOutputWithOptions(request, runtime);
  }

  async modifyPlaybookInstanceStatusWithOptions(request: ModifyPlaybookInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPlaybookInstanceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.active)) {
      body["Active"] = request.active;
    }

    if (!Util.isUnset(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPlaybookInstanceStatus",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPlaybookInstanceStatusResponse>(await this.callApi(params, req, runtime), new ModifyPlaybookInstanceStatusResponse({}));
  }

  async modifyPlaybookInstanceStatus(request: ModifyPlaybookInstanceStatusRequest): Promise<ModifyPlaybookInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPlaybookInstanceStatusWithOptions(request, runtime);
  }

  async publishPlaybookWithOptions(request: PublishPlaybookRequest, runtime: $Util.RuntimeOptions): Promise<PublishPlaybookResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PublishPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PublishPlaybookResponse>(await this.callApi(params, req, runtime), new PublishPlaybookResponse({}));
  }

  async publishPlaybook(request: PublishPlaybookRequest): Promise<PublishPlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishPlaybookWithOptions(request, runtime);
  }

  async queryTreeDataWithOptions(request: QueryTreeDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryTreeDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTreeData",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTreeDataResponse>(await this.callApi(params, req, runtime), new QueryTreeDataResponse({}));
  }

  async queryTreeData(request: QueryTreeDataRequest): Promise<QueryTreeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTreeDataWithOptions(request, runtime);
  }

  async renamePlaybookNodeWithOptions(request: RenamePlaybookNodeRequest, runtime: $Util.RuntimeOptions): Promise<RenamePlaybookNodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.newNodeName)) {
      query["NewNodeName"] = request.newNodeName;
    }

    if (!Util.isUnset(request.oldNodeName)) {
      query["OldNodeName"] = request.oldNodeName;
    }

    if (!Util.isUnset(request.playbookUuid)) {
      query["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenamePlaybookNode",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenamePlaybookNodeResponse>(await this.callApi(params, req, runtime), new RenamePlaybookNodeResponse({}));
  }

  async renamePlaybookNode(request: RenamePlaybookNodeRequest): Promise<RenamePlaybookNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renamePlaybookNodeWithOptions(request, runtime);
  }

  async revertPlaybookReleaseWithOptions(request: RevertPlaybookReleaseRequest, runtime: $Util.RuntimeOptions): Promise<RevertPlaybookReleaseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.isPublish)) {
      body["IsPublish"] = request.isPublish;
    }

    if (!Util.isUnset(request.playReleaseId)) {
      body["PlayReleaseId"] = request.playReleaseId;
    }

    if (!Util.isUnset(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RevertPlaybookRelease",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevertPlaybookReleaseResponse>(await this.callApi(params, req, runtime), new RevertPlaybookReleaseResponse({}));
  }

  async revertPlaybookRelease(request: RevertPlaybookReleaseRequest): Promise<RevertPlaybookReleaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revertPlaybookReleaseWithOptions(request, runtime);
  }

  async runPython3ScriptWithOptions(request: RunPython3ScriptRequest, runtime: $Util.RuntimeOptions): Promise<RunPython3ScriptResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nodeName)) {
      body["NodeName"] = request.nodeName;
    }

    if (!Util.isUnset(request.params)) {
      body["Params"] = request.params;
    }

    if (!Util.isUnset(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    if (!Util.isUnset(request.pythonScript)) {
      body["PythonScript"] = request.pythonScript;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunPython3Script",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunPython3ScriptResponse>(await this.callApi(params, req, runtime), new RunPython3ScriptResponse({}));
  }

  async runPython3Script(request: RunPython3ScriptRequest): Promise<RunPython3ScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runPython3ScriptWithOptions(request, runtime);
  }

  async triggerPlaybookWithOptions(request: TriggerPlaybookRequest, runtime: $Util.RuntimeOptions): Promise<TriggerPlaybookResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.inputParam)) {
      body["InputParam"] = request.inputParam;
    }

    if (!Util.isUnset(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TriggerPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TriggerPlaybookResponse>(await this.callApi(params, req, runtime), new TriggerPlaybookResponse({}));
  }

  async triggerPlaybook(request: TriggerPlaybookRequest): Promise<TriggerPlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.triggerPlaybookWithOptions(request, runtime);
  }

  async triggerProcessTaskWithOptions(request: TriggerProcessTaskRequest, runtime: $Util.RuntimeOptions): Promise<TriggerProcessTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TriggerProcessTask",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TriggerProcessTaskResponse>(await this.callApi(params, req, runtime), new TriggerProcessTaskResponse({}));
  }

  async triggerProcessTask(request: TriggerProcessTaskRequest): Promise<TriggerProcessTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.triggerProcessTaskWithOptions(request, runtime);
  }

  async triggerSophonPlaybookWithOptions(request: TriggerSophonPlaybookRequest, runtime: $Util.RuntimeOptions): Promise<TriggerSophonPlaybookResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commandName)) {
      query["CommandName"] = request.commandName;
    }

    if (!Util.isUnset(request.inputParams)) {
      query["InputParams"] = request.inputParams;
    }

    if (!Util.isUnset(request.sophonTaskId)) {
      query["SophonTaskId"] = request.sophonTaskId;
    }

    if (!Util.isUnset(request.triggerType)) {
      query["TriggerType"] = request.triggerType;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TriggerSophonPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TriggerSophonPlaybookResponse>(await this.callApi(params, req, runtime), new TriggerSophonPlaybookResponse({}));
  }

  async triggerSophonPlaybook(request: TriggerSophonPlaybookRequest): Promise<TriggerSophonPlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.triggerSophonPlaybookWithOptions(request, runtime);
  }

  async verifyPlaybookWithOptions(request: VerifyPlaybookRequest, runtime: $Util.RuntimeOptions): Promise<VerifyPlaybookResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    if (!Util.isUnset(request.taskFlow)) {
      body["TaskFlow"] = request.taskFlow;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "VerifyPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyPlaybookResponse>(await this.callApi(params, req, runtime), new VerifyPlaybookResponse({}));
  }

  async verifyPlaybook(request: VerifyPlaybookRequest): Promise<VerifyPlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyPlaybookWithOptions(request, runtime);
  }

  async verifyPythonFileWithOptions(request: VerifyPythonFileRequest, runtime: $Util.RuntimeOptions): Promise<VerifyPythonFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "VerifyPythonFile",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyPythonFileResponse>(await this.callApi(params, req, runtime), new VerifyPythonFileResponse({}));
  }

  async verifyPythonFile(request: VerifyPythonFileRequest): Promise<VerifyPythonFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyPythonFileWithOptions(request, runtime);
  }

}
