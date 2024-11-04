// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BatchModifyInstanceStatusRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to start or stop the playbook.
   * 
   * *   **0**: stops the playbook.
   * *   **1**: starts the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The playbook UUID. If you want to specify multiple playbooks, separate the playbook UUIDs with commas (,).
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8baa6cff-319e-4ede-97bc-1xxxxxx,s8df2e-s8dfs-xxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 358E012F-B516-599D-9ED0-A1A361CDE615
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

export class BatchModifyInstanceStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchModifyInstanceStatusResponseBody;
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
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the second version.
   * 
   * >  You can call the [DescribePopApiVersionList](~~DescribePopApiVersionList~~) operation to query the UUIDs of versions.
   * 
   * This parameter is required.
   * 
   * @example
   * sfdf2395-e814-459f-9662-xxxxx
   */
  newPlaybookReleaseId?: number;
  /**
   * @remarks
   * The UUID of the first version.
   * 
   * >  You can call the [DescribePopApiVersionList](~~DescribePopApiVersionList~~) operation to query the UUIDs of versions.
   * 
   * This parameter is required.
   * 
   * @example
   * sflk23423-e814-459f-9662-xxxxx
   */
  oldPlaybookReleaseId?: number;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * f916b93e-e814-459f-9662-xxxxx
   */
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
  /**
   * @remarks
   * The comparison result.
   */
  compareResult?: ComparePlaybooksResponseBodyCompareResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2EC05B06-BF3C-5F3E-8FE8-3B1FAD76087A
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ComparePlaybooksResponseBody;
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
  /**
   * @remarks
   * The description of the playbook.
   * 
   * @example
   * This is a new version
   */
  description?: string;
  /**
   * @remarks
   * The name of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * test09
   */
  displayName?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  taskflowType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      lang: 'Lang',
      taskflowType: 'TaskflowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      lang: 'string',
      taskflowType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlaybookResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: CreatePlaybookResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B09B40B2-F11E-512C-B755-423F2056C17B
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
      data: CreatePlaybookResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlaybookResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePlaybookResponseBody;
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
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * f916b93e-e814-459f-9662-xxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The input parameters that you use to debug the playbook. You can define the parameters based on your business requirements.
   * 
   * @example
   * {
   *    "param1":"a",
   *    "param2":"b"
   * }
   */
  record?: string;
  /**
   * @remarks
   * The XML configuration of the playbook.
   * 
   * >  You can call the [DescribePlaybook](~~DescribePlaybook~~) operation to query the XML configuration of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * <?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" targetNamespace="http://bpmn.io/schema/bpmn" id="Definitions_1"><bpmn:process id="Process_1" isExecutable="false"><bpmn:startEvent id="StartEvent_1"/></bpmn:process><bpmndi:BPMNDiagram id="BPMNDiagram_1"><bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1"><bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1"><dc:Bounds height="36.0" width="36.0" x="173.0" y="102.0"/></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75E56B2C-C8FA-5A2F-AA08-8745E2AC33EF
   */
  requestId?: string;
  /**
   * @remarks
   * The UUID of the debugging task. You can use the UUID to query the result and other details of the debugging task.
   * 
   * @example
   * 6d412cfa-0905-4567-8a83-xxxxxx
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DebugPlaybookResponseBody;
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
  /**
   * @remarks
   * The ID of the asset.
   * 
   * >  You can call the [DescribeComponentAssets](~~DescribeComponentAssets~~) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12x
   */
  assetId?: number;
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39C38A34-8532-5D44-B88A-7263B435C316
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

export class DeleteComponentAssetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteComponentAssetResponseBody;
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
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * e99dab31-499b-4307-9248-xxxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6F3CA8A9-B5BB-506A-9182-FFE80A6E0584
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

export class DeletePlaybookResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePlaybookResponseBody;
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
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
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
  /**
   * @remarks
   * The information about the service.
   */
  apiList?: DescribeApiListResponseBodyApiList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4A15D31E-B38B-5F7F-8DC0-1C74408875AA
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApiListResponseBody;
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
  /**
   * @remarks
   * The component name.
   * 
   * This parameter is required.
   * 
   * @example
   * python3
   */
  componentName?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
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
  /**
   * @remarks
   * The metadata of the asset in the component. The value is a JSON array and contains the following fields:
   * 
   * *   **name**: the parameter name.
   * *   **defaultValue**: the default parameter value.
   * *   **description**: the parameter description.
   * *   **required**: indicates whether the parameter is required. Valid values: **true** and **false**.
   * 
   * @example
   * [
   *     {
   *         "defaultValue": "",
   *         "description": "assetname",
   *         "name": "assetname",
   *         "required": true
   *     }
   * ]
   */
  componentAssetForm?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9D1651AC-31CC-5CC4-A14E-626B3FCC1022
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeComponentAssetFormResponseBody;
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
  /**
   * @remarks
   * The name of the component.
   * 
   * This parameter is required.
   * 
   * @example
   * python3
   */
  componentName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
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
  /**
   * @remarks
   * The information about the assets.
   */
  componentAssets?: DescribeComponentAssetsResponseBodyComponentAssets[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BFEFB76D-DD0E-5529-BD57-0DAC10B9B30F
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeComponentAssetsResponseBody;
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
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * b724d2b0-3c3b-4223-9bfd-xxxxx
   */
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
  /**
   * @remarks
   * The information about the components. The value is a JSON array.
   * 
   * @example
   * [
   *     {
   *         "actions": [
   *             {
   *                 "description": "mysql component",
   *                 "name": "storeIdb",
   *                 "parameters": [
   *                     {
   *                         "description": "update the mysql db",
   *                         "name": "updateSql",
   *                         "required": false
   *                     }
   *                 ]
   *             }
   *         ],
   *         "basic": {
   *             "description": "mysq sql component for 5.6",
   *             "logo": "https://img.alicdn.com/tfs/TB1H89IpH3nBKNjSZFMXXaUSFXa-200-200.svg",
   *             "name": "Mysql"
   *         }
   *     }
   * ]
   */
  components?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B0A255B3-495C-56FB-8B6B-DB073F80388A
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeComponentListResponseBody;
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
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * ac343acc-1a61-4084-9a1cxxxxx
   */
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
  /**
   * @remarks
   * The information about the predefined components.
   */
  playbooks?: DescribeComponentPlaybookResponseBodyPlaybooks[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C5F5D6C9-DF1A-5381-92B1-39676F777D20
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeComponentPlaybookResponseBody;
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
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
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
  /**
   * @remarks
   * The configuration of the JavaScript file for the component.
   * 
   * @example
   * [
   *     {
   *         "js": "https://xxxxx.oss-cn-zhangjiakou.aliyuncs.com/componentUpload/xxxxx",
   *         "name": "python3",
   *         "ownType": "sys"
   *     }
   * ]
   */
  componentsJs?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 58A518BC-E4A8-5BD7-AFEA-366046ED9073
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeComponentsJsResponseBody;
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
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * bc0b8424-535c-4ed5-bd94-xxxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The MD5 value of the playbook XML configuration.
   * 
   * @example
   * be0a4ef084dd174abe47xxxxx
   */
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
  /**
   * @remarks
   * The information about versions.
   */
  records?: DescribeDistinctReleasesResponseBodyRecords[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 145CACF6-D276-5197-8549-CB1AD76E2AC8
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDistinctReleasesResponseBody;
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
  /**
   * @remarks
   * The type of the enumeration item. Valid values:
   * 
   * *   **process**: scenarios
   * 
   * This parameter is required.
   * 
   * @example
   * process
   */
  enumType?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese (default)
   * *   **en_us**: English
   * 
   * @example
   * zh
   */
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
  /**
   * @remarks
   * The information about the enumeration item.
   */
  data?: DescribeEnumItemsResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7698CFB-4E1C-5840-8EC9-691B86729E94
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
      data: { 'type': 'array', 'itemType': DescribeEnumItemsResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnumItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEnumItemsResponseBody;
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
  /**
   * @remarks
   * The entity type of the script input parameter. When you want to query multiple entity types, separate them with commas.
   * - **ip**: IP entity.
   * - **file**: file entity.
   * - **process**: process entity.
   * - **incident**: incident entity.
   * 
   * @example
   * ip,file,process,host
   */
  inputMode?: string;
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The input parameter type of the playbook.
   * 
   * *   **template-ip**
   * *   **template-file**
   * *   **template-process**
   * *   **custom**
   * 
   * @example
   * custom
   */
  paramType?: string;
  /**
   * @remarks
   * The playbook name. Fuzzy search is supported.
   * 
   * @example
   * demo_test
   */
  playbookName?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to query the playbook UUID.
   * 
   * @example
   * f916b93e-e814-459f-9662-xxxxxx
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      inputMode: 'InputMode',
      lang: 'Lang',
      paramType: 'ParamType',
      playbookName: 'PlaybookName',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputMode: 'string',
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
  /**
   * @remarks
   * The playbook.
   */
  playbookMetrics?: DescribeExecutePlaybooksResponseBodyPlaybookMetrics[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 88A39217-2802-5B1E-BA2B-CF1BBC43C1F5
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExecutePlaybooksResponseBody;
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
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The key of the global configuration. Valid values:
   * 
   * *   **soar_filed_tags**: queries the input template of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * soar_filed_tags
   */
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
  /**
   * @remarks
   * The configuration content.
   * 
   * @example
   * ["ip","name","hostinfo","md5"]
   */
  fields?: string;
  /**
   * @remarks
   * The name of the global configuration.
   * 
   * @example
   * soar_filed_tags
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BCDE6498-83CC-50A1-8307-3D5A539C42F8
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFieldResponseBody;
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
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * c5c88b5e-97ca-435d-8c20-xxxxxx
   */
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
  /**
   * @remarks
   * The output structure information of the playbook.
   */
  playbookNodeSchema?: DescribeLatestRecordSchemaResponseBodyPlaybookNodeSchema;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 10B92EE1-4597-593B-A131-7A17D25EF5C9
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLatestRecordSchemaResponseBody;
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
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * python3_2
   */
  nodeName?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * ac343acc-1a61-4084-9a1c-xxxxxxx
   */
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
  /**
   * @remarks
   * The configuration of the recommended path.
   */
  paramReferredPaths?: DescribeNodeParamTagsResponseBodyParamReferredPaths[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6BE94351-712A-505D-A40A-BC77CC8254A9
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNodeParamTagsResponseBody;
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
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The node name of the component.
   * 
   * This parameter is required.
   * 
   * @example
   * python3_2
   */
  nodeName?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * ac343acc-1a61-4084-9a1c-xxxx
   */
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
  /**
   * @remarks
   * The node reference information. The value is in the JSON format and contains the following fields:
   * 
   * *   **action**: the referencing action. This field contains the following information:
   * 
   *     *   **name**: the name of the referencing node.
   *     *   **inputParams**: the parameter settings of the referencing node.
   * 
   * @example
   * {
   *     "action": [
   *         {
   *             "name": "query_books",
   *             "inputParams": [
   *                 {
   *                     "referInfos": [
   *                         "${play_group.datalist.*.ids}"
   *                     ],
   *                     "name": "querySql"
   *                 }
   *             ]
   *         }
   *     ]
   * }
   */
  nodeUsedInfos?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3B10F836-C2B1-54FA-AB59-7591B548FB59
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNodeUsedInfosResponseBody;
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
  /**
   * @remarks
   * The flag that indicates whether the playbook is of the debugging or published version. Valid values:
   * 
   * *   **1**: playbook of the debugging version
   * *   **0**: playbook of the published version
   * 
   * @example
   * 0
   */
  debugFlag?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * 9030076b-6733-4842-b05a-xxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The MD5 hash value of the playbook.
   * 
   * @example
   * 7a8f608dc64c242632aa578xxxxx
   */
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
  /**
   * @remarks
   * The configuration of the playbook.
   */
  playbook?: DescribePlaybookResponseBodyPlaybook;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2989BC59-E9F0-5C83-B453-B368857649C8
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePlaybookResponseBody;
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
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * b724d2b0-3c3b-4223-9bfd-xxxxxxx
   */
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
  /**
   * @remarks
   * The configurations.
   */
  config?: DescribePlaybookInputOutputResponseBodyConfig;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 688B4CCD-5272-5DCF-9D76-FE5EFEF545F8
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePlaybookInputOutputResponseBody;
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
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * 2a687089-d4dd-47d4-9709-xxxxxx
   */
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
  /**
   * @remarks
   * The details of the playbook.
   */
  metrics?: DescribePlaybookMetricsResponseBodyMetrics;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 567D3D0B-2153-5860-BF9A-F9DEED55FB73
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePlaybookMetricsResponseBody;
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
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the component node.
   * 
   * This parameter is required.
   * 
   * @example
   * DataFormat_1
   */
  nodeName?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * ac343acc-1a61-4084-9a1c-xxxxx
   */
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
  /**
   * @remarks
   * The output data of the component node.
   */
  playbookNodesOutput?: DescribePlaybookNodesOutputResponseBodyPlaybookNodesOutput;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A491170C-FE1F-520E-83D4-72ED205B72ED
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePlaybookNodesOutputResponseBody;
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
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
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
  /**
   * @remarks
   * The statistics.
   */
  metrics?: DescribePlaybookNumberMetricsResponseBodyMetrics;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D4CC979E-3D5B-5A6A-BC87-C93C9E861C7B
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePlaybookNumberMetricsResponseBody;
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
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. If you do not specify the PageSize parameter, 10 entries are returned by default.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * ac343acc-1a61-4084-9a1c-xxxx
   */
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
  /**
   * @remarks
   * The pagination information.
   */
  page?: DescribePlaybookReleasesResponseBodyPage;
  /**
   * @remarks
   * The information about the playbook version.
   */
  records?: DescribePlaybookReleasesResponseBodyRecords[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3DFBE11C-6EB6-5166-92D6-3397796AFE1E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePlaybookReleasesResponseBody;
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
  /**
   * @remarks
   * The status of the playbook. Valid values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * The end of the time range to query. The value is a 13-digit timestamp.
   * 
   * @example
   * 1683858064361
   */
  endMillis?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the playbook.
   * 
   * @example
   * demo_playbook
   */
  name?: string;
  /**
   * @remarks
   * The sorting order. Default value: desc. Valid values:
   * 
   * *   desc: descending order
   * *   asc: ascending order
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The type of the playbook. Valid values:
   * 
   * *   **preset**: predefined playbook
   * *   **user**: custom playbook
   * 
   * @example
   * user
   */
  ownType?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. If you leave this parameter empty, 10 entries are returned on each page.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  paramTypes?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can use the UUID to query the information about a specific playbook.
   * 
   * *   You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to query the playbook UUID.
   * 
   * @example
   * 8baa6cff-319e-4ede-97bc-1xxxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The sorting basis. Default value: 1. Valid values:
   * 
   * *   1: last modification time
   * *   2: last execution time
   * 
   * @example
   * 1
   */
  sort?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a 13-digit timestamp.
   * 
   * @example
   * 1683526277415
   */
  startMillis?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      endMillis: 'EndMillis',
      lang: 'Lang',
      name: 'Name',
      order: 'Order',
      ownType: 'OwnType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paramTypes: 'ParamTypes',
      playbookUuid: 'PlaybookUuid',
      sort: 'Sort',
      startMillis: 'StartMillis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      endMillis: 'number',
      lang: 'string',
      name: 'string',
      order: 'string',
      ownType: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      paramTypes: 'string',
      playbookUuid: 'string',
      sort: 'string',
      startMillis: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybooksResponseBody extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  page?: DescribePlaybooksResponseBodyPage;
  /**
   * @remarks
   * The playbooks.
   */
  playbooks?: DescribePlaybooksResponseBodyPlaybooks[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 138B5AB7-7F2B-5814-87A3-E3ECFE1F207E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePlaybooksResponseBody;
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
  /**
   * @remarks
   * The operation name of the Alibaba Cloud service.
   * 
   * This parameter is required.
   * 
   * @example
   * DescribeInstanceInfo
   */
  apiName?: string;
  /**
   * @remarks
   * The version number of the API.
   * 
   * >  You can call the [DescribePopApiVersionList](~~DescribePopApiVersionList~~) operation to query the version number.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-10-01
   */
  apiVersion?: string;
  /**
   * @remarks
   * The environment in which the API operation parameter is used. Set the value to online.
   * 
   * This parameter is required.
   * 
   * @example
   * online
   */
  env?: string;
  /**
   * @remarks
   * The POP code of the Alibaba Cloud service.
   * 
   * >  You can call the [DescribeApiList](~~DescribeApiList~~) operation to query the POP code.
   * 
   * This parameter is required.
   * 
   * @example
   * Sas
   */
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
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * AddAssetCleanConfig
   */
  apiName?: string;
  /**
   * @remarks
   * The information about the API.
   */
  openApiMetaList?: DescribePopApiResponseBodyOpenApiMetaList[];
  /**
   * @remarks
   * The POP code of the Alibaba Cloud service.
   * 
   * @example
   * Sas
   */
  popCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A01B0BA-CFC4-5813-9EB0-A5DA15FA95AE
   */
  requestId?: string;
  /**
   * @remarks
   * The version of the API.
   * 
   * @example
   * 2019-09-10
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePopApiResponseBody;
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
  /**
   * @remarks
   * The API operation name of the Alibaba Cloud service. Fuzzy match is supported.
   * 
   * @example
   * DescribePopApiItemList
   */
  apiName?: string;
  /**
   * @remarks
   * The version number of the API.
   * 
   * >  You can call the [DescribePopApiVersionList](~~DescribePopApiVersionList~~) operation to query the version number.
   * 
   * This parameter is required.
   * 
   * @example
   * 2018-12-03
   */
  apiVersion?: string;
  /**
   * @remarks
   * The environment in which the API operation parameters are used. Set the value to online.
   * 
   * This parameter is required.
   * 
   * @example
   * online
   */
  env?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The POP code of the Alibaba Cloud service.
   * 
   * >  You can call the [DescribeApiList](~~DescribeApiList~~) operation to query the POP code.
   * 
   * This parameter is required.
   * 
   * @example
   * Sas
   */
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
  /**
   * @remarks
   * The names of API operations.
   */
  names?: string[];
  /**
   * @remarks
   * The POP code of the Alibaba Cloud service.
   * 
   * @example
   * Sas
   */
  popCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6336D603-7028-52DE-AD88-E34AA5248355
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  total?: number;
  /**
   * @remarks
   * The version number of the API for the Alibaba Cloud service.
   * 
   * @example
   * 2018-12-03
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePopApiItemListResponseBody;
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
  /**
   * @remarks
   * The environment in which the API operation parameters are used. Set the value to **online**.
   * 
   * This parameter is required.
   * 
   * @example
   * online
   */
  env?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The POP code of the Alibaba Cloud service.
   * 
   * >  You can call the [DescribeApiList](~~DescribeApiList~~) operation to query the POP code.
   * 
   * This parameter is required.
   * 
   * @example
   * Sas
   */
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
  /**
   * @remarks
   * The POP code of the Alibaba Cloud service.
   * 
   * @example
   * Sas
   */
  popCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DBCDB0E1-4D0E-55A9-A44D-A62ADE7E2FDA
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  total?: number;
  /**
   * @remarks
   * The information about the versions of API operations.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePopApiVersionListResponseBody;
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

export class DescribeProcessTaskCountRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  entityUuidList?: string[];
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 104739******259
   */
  roleFor?: number;
  /**
   * @example
   * 0
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      entityUuidList: 'EntityUuidList',
      lang: 'Lang',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityUuidList: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      roleFor: 'number',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTaskCountResponseBody extends $tea.Model {
  data?: DescribeProcessTaskCountResponseBodyData[];
  /**
   * @example
   * e866cce0-****-41de-817e-****8d5e2650
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
      data: { 'type': 'array', 'itemType': DescribeProcessTaskCountResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTaskCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProcessTaskCountResponseBody;
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
      body: DescribeProcessTaskCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTasksRequest extends $tea.Model {
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * *   **desc** (default)
   * *   **asc**
   * 
   * @example
   * desc
   */
  direction?: string;
  /**
   * @remarks
   * The name of the handling entity.
   * 
   * @example
   * 127.0.0.1
   */
  entityName?: string;
  /**
   * @remarks
   * The type of the handling entity. Valid values:
   * 
   * *   **ip**
   * *   **file**
   * *   **process**
   * 
   * @example
   * ip
   */
  entityType?: string;
  entityUuid?: string;
  /**
   * @remarks
   * The field that you use to sort the result.
   * 
   * >  You can obtain the field from the response result.
   * 
   * @example
   * gmtCreate
   */
  orderField?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. If you do not specify the PageSize parameter, 10 entries are returned by default.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The handling entity, handling scenario, or handling parameter that is used for fuzzy match.
   * 
   * @example
   * 12.x.x.x
   */
  paramContent?: string;
  /**
   * @remarks
   * The end of the time range for a handling task. The value is a 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  processActionEnd?: number;
  /**
   * @remarks
   * The beginning of the time range for a handling task. The value is a 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  processActionStart?: number;
  /**
   * @remarks
   * The end of the time range for an unblocking task. The value is a 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  processRemoveEnd?: number;
  /**
   * @remarks
   * The beginning of the time range for an unblocking task. The value is a 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  processRemoveStart?: number;
  /**
   * @remarks
   * The UUID of the handling policy.
   * 
   * >  You can call the [ListDisposeStrategy](https://help.aliyun.com/document_detail/2584440.html) operation to query the UUID of the handling policy.
   * 
   * @example
   * 92af3c79-1754-4646-9366-9ddbd1e45536_xxxx
   */
  processStrategyUuid?: string;
  /**
   * @remarks
   * The scenario code of the handling task.
   * 
   * >  You can call the [DescribeEnumItems](~~DescribeEnumItems~~) operation to query the scenario code of the handling task. This parameter is available when you set **EnumType** to **process**.
   * 
   * @example
   * event_xxx_whole_process
   */
  sceneCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is specified in the handling task.
   * 
   * @example
   * 125xxxxx9870
   */
  scope?: string;
  /**
   * @remarks
   * The triggering source of the handling task. The value is a string array. Valid values:
   * 
   * *   **system**: triggered when you manually handle an event
   * *   **custom**: triggered by an event based on an automatic response rule
   * *   **custom_alert**: triggered by an alert based on an automatic response rule
   * *   **soar-manual**: triggered when you use SOAR to manually run a playbook
   * *   **soar-mdr**: triggered by Managed Security Service
   * 
   * @example
   * ["system"]
   */
  source?: string;
  /**
   * @remarks
   * The unique identifier of the handling task.
   * 
   * >  This parameter is used to query a specific task. You can obtain the value from the response result.
   * 
   * @example
   * 150xxxxxxxxx95066
   */
  taskId?: string;
  /**
   * @remarks
   * The status of the handling task. The value is a string. Valid values:
   * 
   * *   **11**: being handled
   * *   **21**: being blocked
   * *   **22**: being quarantined
   * *   **23**: completed
   * *   **24**: added to the whitelist
   * *   **20**: successful
   * *   **90**: failed
   * *   **91**: unblocking failed
   * *   **92**: restoring quarantined files failed
   * 
   * @example
   * ["11","21"]
   */
  taskStatus?: string;
  /**
   * @remarks
   * The cloud service that is associated with the handling task. The value is a string. Valid values:
   * 
   * *   **WAF**: Web Application Firewall (WAF)
   * *   **CFW**: Cloud Firewall
   * *   **Aegis**: Security Center
   * 
   * @example
   * ["WAF"]
   */
  yunCode?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      entityName: 'EntityName',
      entityType: 'EntityType',
      entityUuid: 'EntityUuid',
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
      entityUuid: 'string',
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
  /**
   * @remarks
   * The pagination information.
   */
  page?: DescribeProcessTasksResponseBodyPage;
  /**
   * @remarks
   * The handling tasks.
   */
  processTasks?: DescribeProcessTasksResponseBodyProcessTasks[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7698CFB-4E1C-5840-8EC9-691B86729E94
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProcessTasksResponseBody;
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
  /**
   * @remarks
   * The UUID of the component action.
   * 
   * >  You can call the [DescribeSoarTaskAndActions](~~DescribeSoarTaskAndActions~~) operation to query the UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2202c90d-fa93-4726-bc32-xxxxxx
   */
  actionUuid?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. If you leave this parameter empty, 10 entries are returned on each page.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The data that is returned when the component action is performed. The value is a JSON array.
   * 
   * >  The format of the output data is determined by the component that is configured when the playbook is written.
   * 
   * @example
   * [
   *     {
   *         "a": "a",
   *         "taskname": "92af3c79-1754-4646-9366-9ddbd1e45536_xxxx",
   *         "log_time": 1699868849000
   *     }
   * ]
   */
  actionOutputs?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A2BF9CF-3E32-5E45-A79B-8F67E0A4FE90
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 100
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSoarRecordActionOutputListResponseBody;
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
  /**
   * @remarks
   * The UUID of the component action.
   * 
   * >  You can call the [DescribeSoarTaskAndActions](~~DescribeSoarTaskAndActions~~) operation to query the UUIDs of component actions.
   * 
   * This parameter is required.
   * 
   * @example
   * 0531ff66-dd05-4f24-84bf-xxxxxxxx
   */
  actionUuid?: string;
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
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
  /**
   * @remarks
   * The execution result of the component action.
   * 
   * @example
   * {
   *     "actionUuid": "3896a25d-4967-493c-942e-4e60f27da1f7-xxxxx",
   *     "outputSummary": {
   *         "datalist": [
   *             {
   *                 "a": "a"
   *             }
   *         ],
   *         "total_data_successful": 1,
   *         "total_data": 1,
   *         "total_exe_successful": 1,
   *         "total_exe": 1,
   *         "total_data_with_dup": 1,
   *         "status": true
   *     },
   *     "outputSchema": {
   *         "a": "String",
   *         "startTime": "DateTime"
   *     },
   *     "inputParams": {
   *         "inputData": [
   *             {
   *                 "outputFields": {
   *                     "a": "a"
   *                 }
   *             }
   *         ],
   *         "totalSize": 1
   *     },
   *     "startTime": "2023-11-13 17:47:28.645",
   *     "taskName": "92af3c79-1754-4646-9366-9ddbxxxxx"
   * }
   */
  inOutputInfo?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 372D8B41-AF8D-573A-9B3F-0924950F241F
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSoarRecordInOutputResponseBody;
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
  /**
   * @remarks
   * The end of the time range to query. The value is a 13-digit timestamp.
   * 
   * @example
   * 1683772744953
   */
  endMillis?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. If you do not specify the PageSize parameter, 10 entries are returned by default.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8f55e76d-b5d5-4720-9cd7-xxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a 13-byte timestamp.
   * 
   * @example
   * 1683526284584
   */
  startMillis?: number;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **success**
   * *   **failed**
   * *   **inprogress**
   * 
   * @example
   * inprogress
   */
  taskStatus?: string;
  /**
   * @remarks
   * The MD5 value of the playbook.
   * 
   * @example
   * be0a4ef084dd174abe478df52xxxxx
   */
  taskflowMd5?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to execute the task.
   * 
   * @example
   * 127xxxx4392
   */
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
  /**
   * @remarks
   * The pagination information.
   * 
   * This parameter is required.
   */
  page?: DescribeSoarRecordsResponseBodyPage;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 601C2DAC-6A67-5237-BEE8-5BF1CEE96296
   */
  requestId?: string;
  /**
   * @remarks
   * The execution records.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSoarRecordsResponseBody;
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
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * @example
   * 1077f2f9-25e8-42d9-bfdf-1528e1313f6d
   */
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
  /**
   * @remarks
   * The execution details of each task.
   */
  details?: DescribeSoarTaskAndActionsResponseBodyDetails;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 18017A93-3D5D-503A-8308-914543F1CBA3
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSoarTaskAndActionsResponseBody;
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
  /**
   * @remarks
   * The name of the command. Fuzzy match is supported.
   * 
   * @example
   * waf_process
   */
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
  /**
   * @remarks
   * The commands.
   */
  data?: DescribeSophonCommandsResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1E1EC464-3BD7-518F-9937-BCC12E6855FE
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
      data: { 'type': 'array', 'itemType': DescribeSophonCommandsResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSophonCommandsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSophonCommandsResponseBody;
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
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID that is returned when the Python3 script is run.
   * 
   * >  You can call the [RunPython3Script](~~RunPython3Script~~) operation to query the UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 69edc2b4-c95c-424f-9114-xxxxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D22D8A0C-6E86-57B2-A142-929184122AB1
   */
  requestId?: string;
  /**
   * @remarks
   * The operational logs of the Python3 script.
   * 
   * @example
   * {
   *     "logs": [
   *         {
   *             "message": "function input is {}"
   *         }
   *     ]
   * }
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescriberPython3ScriptLogsResponseBody;
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
  /**
   * @remarks
   * The configuration of the asset. The value is a JSON object.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "name": "test asset",
   *     "componentName": "SLS",
   *     "params": [
   *         {
   *             "name": "end_point",
   *             "value": "xxx"
   *         },
   *         {
   *             "name": "sub_id",
   *             "value": "xxxx"
   *         },
   *         {
   *             "name": "access_key",
   *             "value": "xxxx"
   *         }
   *     ]
   * }
   */
  assetConfig?: string;
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1C5F11E9-464E-51F0-9296-43BB312A0557
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

export class ModifyComponentAssetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyComponentAssetResponseBody;
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
  /**
   * @remarks
   * The description of the playbook.
   * 
   * @example
   * demo test task
   */
  description?: string;
  /**
   * @remarks
   * The display name of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun_waf_test_playbook
   */
  displayName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * 8baa6cff-319e-4ede-97bc-1586c35e61f8
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The XML configuration of the playbook.
   * 
   * @example
   * <?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" targetNamespace="http://bpmn.io/schema/bpmn" id="Definitions_1"><bpmn:process id="Process_1" isExecutable="false"><bpmn:startEvent id="StartEvent_1"/></bpmn:process><bpmndi:BPMNDiagram id="BPMNDiagram_1"><bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1"><bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1"><dc:Bounds height="36.0" width="36.0" x="173.0" y="102.0"/></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B584F84-D66A-5525-8E7B-05612A903ABF
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

export class ModifyPlaybookResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPlaybookResponseBody;
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
  /**
   * @remarks
   * The executed mode of a playbook. The value is a JSON array.
   */
  exeConfig?: string;
  /**
   * @remarks
   * The configuration of the input parameters. The value is a JSON array.
   * 
   * This parameter is required.
   * 
   * @example
   * [
   *     {
   *         "typeName": "String",
   *         "dataClass": "normal",
   *         "dataType": "String",
   *         "description": "period",
   *         "example": "",
   *         "name": "period",
   *         "required": false
   *     }
   * ]
   */
  inputParams?: string;
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The configuration of the output parameters. This parameter is unavailable. Leave it empty.
   * 
   * This parameter is required.
   * 
   * @example
   * []
   */
  outputParams?: string;
  /**
   * @remarks
   * The input parameter type.
   * 
   * *   **template-ip**
   * *   **template-file**
   * *   **template-process**
   * *   **custom**
   * 
   * @example
   * custom
   */
  paramType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8baa6cff-319e-4ede-97bc-xxxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      exeConfig: 'ExeConfig',
      inputParams: 'InputParams',
      lang: 'Lang',
      outputParams: 'OutputParams',
      paramType: 'ParamType',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exeConfig: 'string',
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8DDC07CE-D41B-5142-8D91-469462719C77
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

export class ModifyPlaybookInputOutputResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPlaybookInputOutputResponseBody;
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
  /**
   * @remarks
   * The playbook status. Valid values:
   * 
   * *   **1**: starts the playbook.
   * *   **0**: stops the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9fcd3829-80ff-4681-be1e-xxxxxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C2A32830-2842-5F8F-B4ED-E4783E400BBE
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

export class ModifyPlaybookInstanceStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPlaybookInstanceStatusResponseBody;
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
  /**
   * @remarks
   * The description of the released version.
   * 
   * @example
   * This is a waf processing playbook
   */
  description?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * ac343acc-1a61-4084-9a1c-xxxxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C513FCEA-D71F-5E50-ADC4-FCF8C5DCF6BF
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

export class PublishPlaybookResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PublishPlaybookResponseBody;
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
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
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
  /**
   * @remarks
   * The returned information about the playbook. The value is a JSON string.
   * 
   * @example
   * [
   *     {
   *         "playbook": {
   *             "active": false,
   *             "displayName": "test_playbook",
   *             "playbookUuid": "09a20455-3d3a-424c-a1df-xxxxxx"
   *         }
   *     }
   * ]
   */
  playbooks?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EF2ECA2D-D8E6-5021-BF5C-19DD6D52C5B2
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTreeDataResponseBody;
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
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The new name of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_process
   */
  newNodeName?: string;
  /**
   * @remarks
   * The original name of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * firewall_process
   */
  oldNodeName?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * ac343acc-1a61-4084-9a1c-xxxxxxxx
   */
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
  /**
   * @remarks
   * The returned new name of the node.
   * 
   * @example
   * waf_process
   */
  renameResult?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1E1EC464-3BD7-518F-9937-BCC12E6855FE
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenamePlaybookNodeResponseBody;
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
  /**
   * @remarks
   * Specifies whether to directly publish the new playbook after the rollback.
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  isPublish?: boolean;
  /**
   * @remarks
   * The version of the playbook that you want to publish.
   * 
   * >  You can call the [DescribePlaybookReleases](~~DescribePlaybookReleases~~) operation to query the playbook version.
   * 
   * This parameter is required.
   * 
   * @example
   * 3f97b56e-064e-47e7-a309-xxxxxxx
   */
  playReleaseId?: number;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 185295a1-c987-4b64-8796-xxxxxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B3FED5B9-190A-5952-93A4-24FBF0F0C573
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

export class RevertPlaybookReleaseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevertPlaybookReleaseResponseBody;
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
  /**
   * @remarks
   * The name of the node in the playbook.
   * 
   * @example
   * python3_3
   */
  nodeName?: string;
  /**
   * @remarks
   * The input parameters of the Python3 script.
   * 
   * @example
   * {
   *     "input1": "xx.xx.xx.xx",
   *     "input2": "7d"
   * }
   */
  params?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to query the UUIDs of playbooks.
   * 
   * @example
   * 8baa6cff-319e-4ede-97bc-xxxxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The Python3 script.
   * 
   * @example
   * import logging
   * def execute (params):
   *   #ip = params[\\"ip\\"]
   *   #logging.info("enter execute,ip is "+ip)
   *   success=True
   *   message=\\"OK\\"
   *   data=[]
   *   return (success,message,data)
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F210521C-D9BF-5264-8369-83EDDC617DB0
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the Python3 script.
   * 
   * @example
   * {
   *     "requestUuid": "fe240b98-27b1-4a36-aec1-550b894318d9",
   *     "content": {
   *         "resultData": [],
   *         "success": true
   *     }
   * }
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunPython3ScriptResponseBody;
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
  /**
   * @remarks
   * The input parameters of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "input1": "xx.xx.xx.xx",
   *     "input2": "7d"
   * }
   */
  inputParam?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2a687089-d4dd-47d4-9709-xxxxxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD5A8DB6-A42C-532B-BCE8-83E69550CD59
   */
  requestId?: string;
  /**
   * @remarks
   * The running UUID of the playbook. This parameter is used to query the running result of the playbook.
   * 
   * @example
   * 55E63C57-D6C8-5036-A770-5CB10AC807AA
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TriggerPlaybookResponseBody;
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
  /**
   * @remarks
   * The type of the action. Valid values:
   * 
   * *   **remove**: cancels blocking or isolation.
   * *   **retry**: submits the task again.
   * 
   * This parameter is required.
   * 
   * @example
   * remove
   */
  actionType?: string;
  /**
   * @remarks
   * The ID of the handling task.
   * 
   * >  You can call the [DescribeProcessTasks](~~DescribeProcessTasks~~) operation to query the IDs of handling tasks.
   * 
   * This parameter is required.
   * 
   * @example
   * 15355xxxxxx82894882
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 58A518BC-E4A8-5BD7-AFEA-366046ED9073
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

export class TriggerProcessTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TriggerProcessTaskResponseBody;
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
  /**
   * @remarks
   * The name of the command that you want to trigger.
   * 
   * >  You can call the [DescribeSophonCommands](~~DescribeSophonCommands~~) operation to query the command name.
   * 
   * @example
   * waf_process_command
   */
  commandName?: string;
  /**
   * @remarks
   * The input parameters of the command or playbook that you want to trigger.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "param1": "xx.xx.xx.xx",
   *     "param2": "7d"
   * }
   */
  inputParams?: string;
  /**
   * @remarks
   * The custom ID. If you do not specify this parameter when the playbook is triggered, a random ID is generated for fault locating and troubleshooting.
   * 
   * @example
   * f916b93e-e814-459f-9662-xxxxxxxxxx
   */
  sophonTaskId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   **command**
   * *   **playbook**
   * 
   * @example
   * playbook
   */
  triggerType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the playbook UUID.
   * 
   * @example
   * f916b93e-e814-459f-9662-xxxxxxxxxx
   */
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
  /**
   * @remarks
   * The details that is returned after the command or playbook is triggered.
   */
  data?: TriggerSophonPlaybookResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0DFC9403-54EB-5672-B690-9AA93C9EBB54
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
      data: TriggerSophonPlaybookResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerSophonPlaybookResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TriggerSophonPlaybookResponseBody;
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
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9fcd3829-80ff-4681-be1e-4d2662c35fed
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The XML configuration of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * <?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" targetNamespace="http://bpmn.io/schema/bpmn" id="Definitions_1"><bpmn:process id="Process_1" isExecutable="false"><bpmn:startEvent id="StartEvent_1"/></bpmn:process><bpmndi:BPMNDiagram id="BPMNDiagram_1"><bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1"><bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1"><dc:Bounds height="36.0" width="36.0" x="173.0" y="102.0"/></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>
   */
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
  /**
   * @remarks
   * The result of the verification.
   */
  checkTaskInfos?: VerifyPlaybookResponseBodyCheckTaskInfos[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0DFC9403-54EB-5672-B690-9AA93C9EBB54
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyPlaybookResponseBody;
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
  /**
   * @remarks
   * The Python code snippet.
   * 
   * This parameter is required.
   * 
   * @example
   * import logging
   * def execute (params):
   *   success=True
   *   message=\\"OK\\"
   *   data=[]
   *   return (success,message,data)
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F72685FB-A6E6-5A9A-97F7-6DC1056E63CE
   */
  requestId?: string;
  /**
   * @remarks
   * The verification result. If the parameter is left empty, the syntax of the code snippet is correct.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyPythonFileResponseBody;
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
  /**
   * @remarks
   * The description of the comparison result.
   * 
   * @example
   * The first version adds one node compared to the second version
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the second version provides more information than the first version. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  new?: boolean;
  /**
   * @remarks
   * Indicates whether the configurations of the two versions are the same. Valid values: **true** and **false**.
   * 
   * @example
   * false
   */
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
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * @example
   * 9e38111e-9794-4784-9ca8-xxxxxxx
   */
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
  /**
   * @remarks
   * The link to the API references of the Alibaba Cloud service.
   * 
   * @example
   * https://xxxxx
   */
  docUrl?: string;
  /**
   * @remarks
   * The POP code of the Alibaba Cloud service.
   * 
   * @example
   * Sas
   */
  popCode?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud service.
   * 
   * @example
   * Cloud Security Center
   */
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
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * @example
   * ff6fe161-93e2-464c-a326-fxxxxxx
   */
  assetUuid?: string;
  /**
   * @remarks
   * The name of the component to which the asset belongs.
   * 
   * @example
   * pyhton3
   */
  componentname?: string;
  /**
   * @remarks
   * The time when the asset was created. The time is in the yyyy-MM-ddTHH:mm:ssZ format and is displayed in UTC.
   * 
   * @example
   * 2023-03-23T14:38Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the asset was modified. The time is in the yyyy-MM-ddTHH:mm:ssZ format and is displayed in UTC.
   * 
   * @example
   * 2023-03-23T14:38Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * @example
   * 7xx
   */
  id?: number;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * test asset
   */
  name?: string;
  /**
   * @remarks
   * The configurations of the asset in the JSON string format. DescribeComponentAssetForm
   * 
   * >  For more information, see [DescribeComponentAssetForm](~~DescribeComponentAssetForm~~).
   * 
   * @example
   * [
   *     {
   *         "name": "authMethod",
   *         "value": "ak"
   *     },
   *     {
   *         "name": "accessKeyId",
   *         "value": "xxxxxxx"
   *     },
   *     {
   *         "name": "accessKeySecret",
   *         "value": "xxxxx"
   *     },
   *     {
   *         "name": "roleArn",
   *         "value": ""
   *     }
   * ]
   */
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
  /**
   * @remarks
   * The description of the predefined component.
   * 
   * @example
   * aegis_kill_process
   */
  description?: string;
  /**
   * @remarks
   * The name of the predefined component.
   * 
   * @example
   * AegisKillQuara
   */
  displayName?: string;
  /**
   * @remarks
   * The input parameter configuration of the playbook. The value is a JSON array.
   * 
   * >  For more information, see [DescribePlaybookInputOutput](~~DescribePlaybookInputOutput~~).
   * 
   * @example
   * [
   *     {
   *         "typeName": "String",
   *         "dataClass": "normal",
   *         "dataType": "String",
   *         "description": "period",
   *         "example": "",
   *         "name": "period",
   *         "required": false
   *     }
   * ]
   */
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
  /**
   * @remarks
   * The version description.
   * 
   * @example
   * demo version
   */
  description?: string;
  /**
   * @remarks
   * The MD5 value of the version XML configuration.
   * 
   * @example
   * 17cf53049bc8efa941207xxxxx
   */
  taskflowMd5?: string;
  /**
   * @remarks
   * The format of the playbook. Valid values:
   * 
   * *   **xml**: XML format.
   * *   **x6**: JSON format.
   * 
   * @example
   * x6
   */
  taskflowType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      taskflowMd5: 'TaskflowMd5',
      taskflowType: 'TaskflowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      taskflowMd5: 'string',
      taskflowType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnumItemsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The key of the enumeration item.
   * 
   * @example
   * system_xxxxx_process_book
   */
  key?: string;
  /**
   * @remarks
   * The value of the enumeration item.
   * 
   * @example
   * system_xxxxx_process_book
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

export class DescribeExecutePlaybooksResponseBodyPlaybookMetrics extends $tea.Model {
  /**
   * @remarks
   * The playbook description.
   * 
   * @example
   * a demo playbook
   */
  description?: string;
  /**
   * @remarks
   * The playbook name.
   * 
   * @example
   * demo_playbook
   */
  displayName?: string;
  /**
   * @remarks
   * The configuration of the input parameter. The value is a JSON array.
   * 
   * >  For more information, see [DescribePlaybookInputOutput](~~DescribePlaybookInputOutput~~).
   * 
   * @example
   * [
   *     {
   *         "typeName": "String",
   *         "dataClass": "normal",
   *         "dataType": "String",
   *         "description": "period",
   *         "example": "",
   *         "name": "period",
   *         "required": false
   *     }
   * ]
   */
  paramConfig?: string;
  /**
   * @remarks
   * The input parameter type of the playbook.
   * 
   * *   **template-ip**
   * *   **template-file**
   * *   **template-process**
   * *   **custom**
   * 
   * @example
   * custom
   */
  paramType?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * @example
   * c5c88b5e-97ca-435d-8c20-2xxxxx
   */
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
  /**
   * @remarks
   * The action name of the component.
   * 
   * @example
   * formatedata
   */
  actionName?: string;
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * DataFormat
   */
  componentName?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * DataFormat_1
   */
  nodeName?: string;
  /**
   * @remarks
   * The output fields.
   */
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
  /**
   * @remarks
   * The structure information.
   */
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
  /**
   * @remarks
   * The name of the upstream node.
   * 
   * @example
   * DataFormat_1
   */
  paramName?: string;
  /**
   * @remarks
   * The paths.
   */
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
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the playbook.
   * 
   * @example
   * 124xxxxx3435
   */
  creator?: string;
  /**
   * @remarks
   * The description of the playbook.
   * 
   * @example
   * demo playbook
   */
  description?: string;
  /**
   * @remarks
   * The display name of the playbook.
   * 
   * @example
   * demo_test
   */
  displayName?: string;
  /**
   * @remarks
   * The number of times that the playbook failed to be run.
   * 
   * @example
   * 1
   */
  failExeNum?: number;
  /**
   * @remarks
   * The creation time of the playbook. The value is a 13-digit timestamp.
   * 
   * @example
   * 1665288858000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time of the playbook. The value is a 13-digit timestamp.
   * 
   * @example
   * 1677482519000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The input parameter configuration of the playbook. The value is a JSON array.
   * 
   * >  For more information, see [DescribePlaybookInputOutput](~~DescribePlaybookInputOutput~~).
   * 
   * @example
   * [
   *     {
   *         "typeName": "String",
   *         "dataClass": "normal",
   *         "dataType": "String",
   *         "description": "period",
   *         "example": "",
   *         "name": "period",
   *         "required": false
   *     }
   * ]
   */
  inputParams?: string;
  /**
   * @remarks
   * The time when the playbook was last run. The value is a 13-digit timestamp.
   * 
   * @example
   * 1665288858000
   */
  lastExeTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to modify the playbook.
   * 
   * @example
   * 124xxxxx3435
   */
  modifier?: string;
  /**
   * @remarks
   * The status of the playbook. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * @example
   * 0
   */
  onlineActive?: boolean;
  /**
   * @remarks
   * The MD5 hash value in the latest published version of the playbook.
   * 
   * @example
   * asdfsdfe232-e2b2-44fd-b2cc-xxxxx
   */
  onlineReleaseTaskflowMd5?: string;
  /**
   * @remarks
   * The type of the playbook. Valid values:
   * 
   * *   **preset**: predefined playbook
   * *   **user**: custom playbook
   * 
   * @example
   * preset
   */
  ownType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * @example
   * 8db257d3-e2b2-44fd-b2cc-xxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The number of times that the playbook was successfully run.
   * 
   * @example
   * 100
   */
  successExeNum?: number;
  /**
   * @remarks
   * The XML configuration of the playbook.
   * 
   * @example
   * <?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" targetNamespace="http://bpmn.io/schema/bpmn" id="Definitions_1"><bpmn:process id="Process_1" isExecutable="false"><bpmn:startEvent id="StartEvent_1"/></bpmn:process><bpmndi:BPMNDiagram id="BPMNDiagram_1"><bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1"><bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1"><dc:Bounds height="36.0" width="36.0" x="173.0" y="102.0"/></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>
   */
  taskflow?: string;
  /**
   * @remarks
   * The playbook configuration type.
   * *   **xml**: XML format.
   * *   **x6**: JSON format.
   * 
   * @example
   * xml
   */
  taskflowType?: string;
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
      taskflowType: 'TaskflowType',
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
      taskflowType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookInputOutputResponseBodyConfig extends $tea.Model {
  /**
   * @remarks
   * The execution method of the playbook is in JSONObject format.
   */
  exeConfig?: string;
  /**
   * @remarks
   * The input parameter configuration of the playbook. The value is a JSON array.
   * 
   * @example
   * [
   *     {
   *         "typeName": "String",
   *         "dataClass": "normal",
   *         "dataType": "String",
   *         "description": "period",
   *         "example": "",
   *         "name": "period",
   *         "required": false
   *     }
   * ]
   */
  inputParams?: string;
  /**
   * @remarks
   * The output parameter configuration. This parameter is unavailable and is always left empty.
   * 
   * @example
   * []
   */
  outputParams?: string;
  /**
   * @remarks
   * The input parameter type of the playbook. Valid values:
   * 
   * *   **template-ip**
   * *   **template-file**
   * *   **template-process**
   * *   **custom**
   * 
   * @example
   * custom
   */
  paramType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * @example
   * 9030076b-6733-4842-b05a-xxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      exeConfig: 'ExeConfig',
      inputParams: 'InputParams',
      outputParams: 'OutputParams',
      paramType: 'ParamType',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exeConfig: 'string',
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
  /**
   * @remarks
   * The status of the playbook. Valid values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * The description of the playbook.
   * 
   * @example
   * This is a playbook for waf processing
   */
  description?: string;
  /**
   * @remarks
   * The name of the playbook.
   * 
   * @example
   * demo name
   */
  displayName?: string;
  /**
   * @remarks
   * The number of the tasks that are created for the playbook and failed to run.
   * 
   * @example
   * 10
   */
  failNum?: number;
  /**
   * @remarks
   * The time when the playbook was created. The value is a 13-digit timestamp.
   * 
   * @example
   * 1655277397000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The number of historical versions of the playbook.
   * 
   * @example
   * 10
   */
  historyMd5?: number;
  /**
   * @remarks
   * The time when the playbook was last run. The value is a 13-digit timestamp.
   * 
   * @example
   * 1683526277415
   */
  lastRuntime?: number;
  /**
   * @remarks
   * The type of the playbook. Valid values:
   * 
   * *   **preset**: predefined playbook
   * *   **user**: custom playbook
   * 
   * @example
   * user
   */
  ownType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * @example
   * 0fbc9bdb-9ae3-4ef4-a709-xxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The number of the tasks that are created for the playbook and were successfully run.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The name of the component node.
   * 
   * @example
   * DataFormat_1
   */
  nodeName?: string;
  /**
   * @remarks
   * The historical output data of the component node. The value is in the JSON string format. If no data is found, the parameter is left empty.
   * 
   * @example
   * {
   *     "datalist": [
   *         {
   *             "score": "10",
   *             "ip": "1.1.1.1"
   *         }
   *     ],
   *     "total_data_successful": 1,
   *     "filter_total_data": 1,
   *     "total_data": 1,
   *     "total_exe_successful": 1,
   *     "total_exe": 1,
   *     "total_data_with_dup": 1,
   *     "filter_total_data_successful": 1,
   *     "status": true
   * }
   */
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
  /**
   * @remarks
   * The number of enabled playbooks.
   * 
   * @example
   * 50
   */
  startUpNum?: number;
  /**
   * @remarks
   * The total number of playbooks.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to publish the version.
   * 
   * @example
   * 145xxxx985
   */
  creator?: string;
  /**
   * @remarks
   * The description of the layer version.
   * 
   * @example
   * This is a new version
   */
  description?: string;
  /**
   * @remarks
   * The time when the version was created. The value is a 13-digit timestamp.
   * 
   * @example
   * 1655277397000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the version was modified. The value is a 13-digit timestamp.
   * 
   * @example
   * 1691460804000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The record ID.
   * 
   * @example
   * 80xxx
   */
  id?: number;
  /**
   * @remarks
   * The MD5 value configured for the published version of the playbook.
   * 
   * @example
   * be0a4ef084dd174abe47xxxxx
   */
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
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The playbook status. Valid values:
   * 
   * *   **1**: The playbook is started.
   * *   **0**: The playbook is stopped.
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * The display name of the playbook.
   * 
   * @example
   * demo_playbook
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the playbook was created. The value is a 13-digit timestamp.
   * 
   * @example
   * 1683526277415
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the playbook was modified.
   * 
   * @example
   * 1681396398000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The time when the playbook was last run. The value is a 13-digit timestamp.
   * 
   * @example
   * 1683526277415
   */
  lastRuntime?: number;
  /**
   * @remarks
   * The type of the playbook. Valid values:
   * 
   * *   **preset**: predefined playbook
   * *   **user**: custom playbook
   * 
   * @example
   * user
   */
  ownType?: string;
  paramType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * @example
   * bb5a8640-a14f-44ef-8376-cxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      displayName: 'DisplayName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      lastRuntime: 'LastRuntime',
      ownType: 'OwnType',
      paramType: 'ParamType',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      displayName: 'string',
      gmtCreate: 'number',
      gmtModified: 'string',
      lastRuntime: 'number',
      ownType: 'string',
      paramType: 'string',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePopApiResponseBodyOpenApiMetaList extends $tea.Model {
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * demo parameter
   */
  description?: string;
  /**
   * @remarks
   * The example value.
   * 
   * @example
   * 12.xx.xx.xx
   */
  exampleValue?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * DescribePopApi
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required.
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  required?: boolean;
  /**
   * @remarks
   * The data type of the parameter field. Valid values:
   * 
   * *   **string**
   * *   **boolean**
   * *   **integer**
   * *   **long**
   * 
   * @example
   * string
   */
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
  /**
   * @remarks
   * The name of the API operation.
   * 
   * @example
   * DescribePopApiVersionList
   */
  apiName?: string;
  /**
   * @remarks
   * The POP code of the Alibaba Cloud service.
   * 
   * @example
   * Sas
   */
  popCode?: string;
  /**
   * @remarks
   * The version number of the API for the Alibaba Cloud service.
   * 
   * @example
   * 2018-12-03
   */
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

export class DescribeProcessTaskCountResponseBodyData extends $tea.Model {
  /**
   * @example
   * 67
   */
  count?: number;
  /**
   * @example
   * a680c9ae-****-4c39-****-0302****fc8e
   */
  entityUuid?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      entityUuid: 'EntityUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      entityUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTasksResponseBodyPage extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 30
   */
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
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to submit the handling task.
   * 
   * @example
   * 123xxxx355
   */
  creator?: string;
  /**
   * @remarks
   * The name of the handling entity.
   * 
   * @example
   * 1.1.1.x
   */
  entityName?: string;
  /**
   * @remarks
   * The type of the handling entity.
   * 
   * @example
   * ip
   */
  entityType?: string;
  entityUuid?: string;
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * sts_openapi.Info.DefenseSceneNotSupported
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * ParamError : The parameters of your request are invalid
   */
  errMsg?: string;
  /**
   * @remarks
   * The error tip returned if the call failed.
   * 
   * @example
   * Verify that the input parameters of the components are correct
   */
  errTip?: string;
  /**
   * @remarks
   * The creation time of the handling task. The value is a 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  gmtCreateMillis?: number;
  /**
   * @remarks
   * The modification time of the handling task. The value is a 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  gmtModifiedMillis?: number;
  /**
   * @remarks
   * The input parameter of the handling task.
   * 
   * @example
   * {"groupuuid":"c6a9b1df-f4ac-4078-bef4-99xxxxxx"}
   */
  inputParams?: string;
  /**
   * @remarks
   * The ID of the associated policy.
   * 
   * @example
   * 92af3c79-1754-4646-9366-9ddbd1e45536_xxxx
   */
  processStrategyUuid?: string;
  /**
   * @remarks
   * The delivery time of the handling task. The value is a 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  processTime?: number;
  /**
   * @remarks
   * The unblocking time of the handling task. The value is a 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  removeTime?: number;
  /**
   * @remarks
   * The scenario code of the handling task.
   * 
   * @example
   * event_xxx_whole_process
   */
  sceneCode?: string;
  /**
   * @remarks
   * The scenario name of the handling task.
   * 
   * @example
   * waf_whole_process
   */
  sceneName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is specified in the handling task.
   * 
   * @example
   * 123xxxxx234
   */
  scope?: string;
  /**
   * @remarks
   * The submission source of the handling task.
   * 
   * @example
   * system
   */
  source?: string;
  /**
   * @remarks
   * The unique identifier of the handling task.
   * 
   * @example
   * 150xxxxxxxxx95066
   */
  taskId?: string;
  /**
   * @remarks
   * The status of the handling task.
   * 
   * @example
   * 11
   */
  taskStatus?: number;
  /**
   * @remarks
   * The code of the cloud service that is associated with the handling task.
   * 
   * @example
   * WAF
   */
  yunCode?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      entityName: 'EntityName',
      entityType: 'EntityType',
      entityUuid: 'EntityUuid',
      errCode: 'ErrCode',
      errMsg: 'ErrMsg',
      errTip: 'ErrTip',
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
      entityUuid: 'string',
      errCode: 'string',
      errMsg: 'string',
      errTip: 'string',
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
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 22
   */
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
  /**
   * @remarks
   * The end of the time range to query. The value is a 13-digit timestamp.
   * 
   * @example
   * 1686294686000
   */
  endTime?: number;
  /**
   * @remarks
   * The error message of the task. If the task is successful, this field is empty.
   * 
   * @example
   * stime not match
   */
  errorMsg?: string;
  /**
   * @remarks
   * The request parameters of the task.
   * 
   * @example
   * {
   *     "input1": "xx.xx.xx.xx",
   *     "input2": "7d"
   * }
   */
  rawEventReq?: string;
  /**
   * @remarks
   * The request ID of the task. The value is unique.
   * 
   * @example
   * ba1ec480-aa90-4bb6-a1a7-9e311ae79321
   */
  requestUuid?: string;
  /**
   * @remarks
   * The returned information about the playbook. You can define the value in the playbook.
   * 
   * @example
   * Playbook finish
   */
  resultMessage?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a 13-byte timestamp.
   * 
   * @example
   * 1675823338433
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * *   **running**
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The name of the task. The value is the same as the playbook UUID.
   * 
   * @example
   * 82848ebc-eaff-4791-acd4-xxxxx
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **general**: a common task
   * *   **standard**: a component task
   * 
   * @example
   * standard
   */
  taskType?: string;
  /**
   * @remarks
   * The MD5 value of the playbook.
   * 
   * @example
   * dea65a3db87fb9bd84bbxxxxx
   */
  taskflowMd5?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **debug**: a debugging task
   * *   **manual**: a manual task
   * *   **siem**: a task that is triggered by an event or alert
   * 
   * @example
   * debug
   */
  triggerType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to execute the task.
   * 
   * @example
   * 127xxxx4392
   */
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
  /**
   * @remarks
   * The action name of the component.
   * 
   * @example
   * formatdata
   */
  action?: string;
  /**
   * @remarks
   * The UUID of the component execution record.
   * 
   * @example
   * 091be399-a937-4276-af78-xxxxxxxx
   */
  actionUuid?: string;
  /**
   * @remarks
   * The name of the asset that is used by the component.
   * 
   * @example
   * SLS Asset
   */
  assetName?: string;
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * DataFormat
   */
  component?: string;
  /**
   * @remarks
   * The end of the time range during which the component is run. The value is a 13-digit timestamp.
   * 
   * @example
   * 1699868848766
   */
  endTime?: number;
  /**
   * @remarks
   * The custom name of the node in the component.
   * 
   * @example
   * DataFormat_1
   */
  nodeName?: string;
  /**
   * @remarks
   * The request ID of the task. The value is unique.
   * 
   * @example
   * 8dac16c6-7411-4116-8d70-xxxxxxx
   */
  requestUuid?: string;
  /**
   * @remarks
   * The beginning of the time range during which the component is run. The value is a 13-digit timestamp.
   * 
   * @example
   * 1699868848731
   */
  startTime?: number;
  /**
   * @remarks
   * The running result of the component. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The name of the task. The value is the same as the playbook UUID.
   * 
   * @example
   * ed127287-6699-4e4d-b986-xxxxxxx
   */
  taskName?: string;
  /**
   * @remarks
   * The status of the triggered component action.
   * 
   * >  This parameter is disabled and left empty.
   * 
   * @example
   * NULL
   */
  taskStatus?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to execute the task.
   * 
   * @example
   * 127xxxx4392
   */
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
  /**
   * @remarks
   * The list of component actions during the running of the playbook.
   */
  actions?: DescribeSoarTaskAndActionsResponseBodyDetailsActions[];
  /**
   * @remarks
   * The end of the time range during which the playbook is run. The value is a 13-digit timestamp.
   * 
   * @example
   * 1699868848767
   */
  endTime?: number;
  /**
   * @remarks
   * The error message of the task. If the task is successful, this field is empty.
   * 
   * @example
   * stime not match
   */
  errorMsg?: string;
  /**
   * @remarks
   * The request parameters of the task.
   * 
   * @example
   * {
   *     "input1": "xx.xx.xx.xx",
   *     "input2": "7d"
   * }
   */
  rawEventReq?: string;
  /**
   * @remarks
   * The request ID of the task. The value is unique.
   * 
   * @example
   * 17f75844-75cc-4174-86da-cec07a690142
   */
  requestUuid?: string;
  /**
   * @remarks
   * The flag of the task. For debugging tasks, the value is **DEBUG**. For other tasks, the parameter is left empty.
   * 
   * @example
   * DEBUG
   */
  resultLevel?: string;
  /**
   * @remarks
   * The returned information about the playbook. You can define the value in the playbook.
   * 
   * @example
   * deubug playbook finished
   */
  resultMessage?: string;
  /**
   * @remarks
   * The beginning of the time range during which the playbook is run. The value is a 13-digit timestamp.
   * 
   * @example
   * 1699868848645
   */
  startTime?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * *   **running**
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The MD5 value of the playbook.
   * 
   * @example
   * ed127287-6699-4e4d-b986-9f770879xxx
   */
  taskFlowMd5?: string;
  /**
   * @remarks
   * The name of the task. The value is the same as the playbook UUID.
   * 
   * @example
   * 92af3c79-1754-4646-9366-9ddbd1e45536
   */
  taskName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the task belongs.
   * 
   * @example
   * 127xxxx4392
   */
  taskTenantId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   **debug**: a debugging task
   * *   **manual**: a manual task
   * *   **siem**: an event-triggered task
   * 
   * @example
   * siem
   */
  triggerType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that triggers the task.
   * 
   * @example
   * 127xxxx4392
   */
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
  /**
   * @remarks
   * The regular expression that is used to check the format of the parameter value. If the parameter is left empty, the check is not performed.
   * 
   * @example
   * [0-9]{4}\\.[0-9]{4}\\.[0-9]{4}\\.[0-9]{4}
   */
  checkField?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * ip
   */
  field?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  necessary?: boolean;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 12.xx.xx.xx
   */
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
  /**
   * @remarks
   * The description of the command.
   * 
   * @example
   * This is a action of processing for WAF
   */
  description?: string;
  /**
   * @remarks
   * The display name of the command.
   * 
   * @example
   * WAF Process IP
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the command.
   * 
   * @example
   * waf_process_ip_v2
   */
  name?: string;
  /**
   * @remarks
   * The parameter configurations.
   */
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
  /**
   * @remarks
   * The custom ID. If you do not specify this parameter when the playbook is triggered, a random ID is generated for fault locating and troubleshooting.
   * 
   * @example
   * a7c6d055-a72f-4676-bc89-3cd9edc0284c
   */
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
  /**
   * @remarks
   * The error message returned when the playbook does not pass the check.
   * 
   * @example
   * Node [python3_3] doesn\\"t have the asset information
   */
  detail?: string;
  /**
   * @remarks
   * The name of the node in the playbook.
   * 
   * @example
   * python3_3
   */
  nodeName?: string;
  /**
   * @remarks
   * The severity level of the verification information. Valid values:
   * 
   * *   warn: An issue may occur during playbook running.
   * *   error: The playbook cannot be compiled.
   * *   remind: The publishing and running of the playbook are not affected. We recommend that you optimize the playbook format.
   * 
   * @example
   * error
   */
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
  /**
   * @remarks
   * The number that indicates the end column of the error code.
   * 
   * @example
   * 5
   */
  endColumn?: number;
  /**
   * @remarks
   * The number that indicates the end line of the error code.
   * 
   * @example
   * 5
   */
  endLineNumber?: number;
  /**
   * @remarks
   * The error message for the error code.
   * 
   * @example
   * undefined name \\"ab\\"
   */
  message?: string;
  /**
   * @remarks
   * The severity level of the error code. Valid values:
   * 
   * *   4: moderate
   * *   8: serious
   * 
   * @example
   * 4
   */
  severity?: number;
  /**
   * @remarks
   * The number that indicates the start column of the error code.
   * 
   * @example
   * 2
   */
  startColumn?: number;
  /**
   * @remarks
   * The number that indicates the start line of the error code.
   * 
   * @example
   * 2
   */
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

  /**
   * Modifies the statuses of playbooks at a time.
   * 
   * @param request - BatchModifyInstanceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchModifyInstanceStatusResponse
   */
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

  /**
   * Modifies the statuses of playbooks at a time.
   * 
   * @param request - BatchModifyInstanceStatusRequest
   * @returns BatchModifyInstanceStatusResponse
   */
  async batchModifyInstanceStatus(request: BatchModifyInstanceStatusRequest): Promise<BatchModifyInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchModifyInstanceStatusWithOptions(request, runtime);
  }

  /**
   * Compares configurations between two versions of a published playbook.
   * 
   * @param request - ComparePlaybooksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ComparePlaybooksResponse
   */
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

  /**
   * Compares configurations between two versions of a published playbook.
   * 
   * @param request - ComparePlaybooksRequest
   * @returns ComparePlaybooksResponse
   */
  async comparePlaybooks(request: ComparePlaybooksRequest): Promise<ComparePlaybooksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.comparePlaybooksWithOptions(request, runtime);
  }

  /**
   * Creates a playbook.
   * 
   * @param request - CreatePlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePlaybookResponse
   */
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

    if (!Util.isUnset(request.taskflowType)) {
      body["TaskflowType"] = request.taskflowType;
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

  /**
   * Creates a playbook.
   * 
   * @param request - CreatePlaybookRequest
   * @returns CreatePlaybookResponse
   */
  async createPlaybook(request: CreatePlaybookRequest): Promise<CreatePlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPlaybookWithOptions(request, runtime);
  }

  /**
   * Debugs a playbook.
   * 
   * @param request - DebugPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DebugPlaybookResponse
   */
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

  /**
   * Debugs a playbook.
   * 
   * @param request - DebugPlaybookRequest
   * @returns DebugPlaybookResponse
   */
  async debugPlaybook(request: DebugPlaybookRequest): Promise<DebugPlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.debugPlaybookWithOptions(request, runtime);
  }

  /**
   * Deletes the assets in a component.
   * 
   * @param request - DeleteComponentAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteComponentAssetResponse
   */
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

  /**
   * Deletes the assets in a component.
   * 
   * @param request - DeleteComponentAssetRequest
   * @returns DeleteComponentAssetResponse
   */
  async deleteComponentAsset(request: DeleteComponentAssetRequest): Promise<DeleteComponentAssetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteComponentAssetWithOptions(request, runtime);
  }

  /**
   * Deletes a custom playbook.
   * 
   * @param request - DeletePlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePlaybookResponse
   */
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

  /**
   * Deletes a custom playbook.
   * 
   * @param request - DeletePlaybookRequest
   * @returns DeletePlaybookResponse
   */
  async deletePlaybook(request: DeletePlaybookRequest): Promise<DeletePlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePlaybookWithOptions(request, runtime);
  }

  /**
   * Queries the API operations of the cloud service.
   * 
   * @param request - DescribeApiListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiListResponse
   */
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

  /**
   * Queries the API operations of the cloud service.
   * 
   * @param request - DescribeApiListRequest
   * @returns DescribeApiListResponse
   */
  async describeApiList(request: DescribeApiListRequest): Promise<DescribeApiListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiListWithOptions(request, runtime);
  }

  /**
   * Queries the metadata of assets in a component. The metadata of an asset refers to the fields that describe the asset.
   * 
   * @param request - DescribeComponentAssetFormRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComponentAssetFormResponse
   */
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

  /**
   * Queries the metadata of assets in a component. The metadata of an asset refers to the fields that describe the asset.
   * 
   * @param request - DescribeComponentAssetFormRequest
   * @returns DescribeComponentAssetFormResponse
   */
  async describeComponentAssetForm(request: DescribeComponentAssetFormRequest): Promise<DescribeComponentAssetFormResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeComponentAssetFormWithOptions(request, runtime);
  }

  /**
   * Queries a list of assets in a component.
   * 
   * @param request - DescribeComponentAssetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComponentAssetsResponse
   */
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

  /**
   * Queries a list of assets in a component.
   * 
   * @param request - DescribeComponentAssetsRequest
   * @returns DescribeComponentAssetsResponse
   */
  async describeComponentAssets(request: DescribeComponentAssetsRequest): Promise<DescribeComponentAssetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeComponentAssetsWithOptions(request, runtime);
  }

  /**
   * Queries a list of common components that are available.
   * 
   * @param request - DescribeComponentListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComponentListResponse
   */
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

  /**
   * Queries a list of common components that are available.
   * 
   * @param request - DescribeComponentListRequest
   * @returns DescribeComponentListResponse
   */
  async describeComponentList(request: DescribeComponentListRequest): Promise<DescribeComponentListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeComponentListWithOptions(request, runtime);
  }

  /**
   * Queries a list of predefined components that are available.
   * 
   * @param request - DescribeComponentPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComponentPlaybookResponse
   */
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

  /**
   * Queries a list of predefined components that are available.
   * 
   * @param request - DescribeComponentPlaybookRequest
   * @returns DescribeComponentPlaybookResponse
   */
  async describeComponentPlaybook(request: DescribeComponentPlaybookRequest): Promise<DescribeComponentPlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeComponentPlaybookWithOptions(request, runtime);
  }

  /**
   * Queries the JavaScript file of a component. The component uses the returned JavaScript file for page rendering.
   * 
   * @param request - DescribeComponentsJsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComponentsJsResponse
   */
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

  /**
   * Queries the JavaScript file of a component. The component uses the returned JavaScript file for page rendering.
   * 
   * @param request - DescribeComponentsJsRequest
   * @returns DescribeComponentsJsResponse
   */
  async describeComponentsJs(request: DescribeComponentsJsRequest): Promise<DescribeComponentsJsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeComponentsJsWithOptions(request, runtime);
  }

  /**
   * Queries the information about the published versions of a playbook after deduplication.
   * 
   * @param request - DescribeDistinctReleasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDistinctReleasesResponse
   */
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

  /**
   * Queries the information about the published versions of a playbook after deduplication.
   * 
   * @param request - DescribeDistinctReleasesRequest
   * @returns DescribeDistinctReleasesResponse
   */
  async describeDistinctReleases(request: DescribeDistinctReleasesRequest): Promise<DescribeDistinctReleasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDistinctReleasesWithOptions(request, runtime);
  }

  /**
   * Queries enumeration items that are required by a cloud service.
   * 
   * @param request - DescribeEnumItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnumItemsResponse
   */
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

  /**
   * Queries enumeration items that are required by a cloud service.
   * 
   * @param request - DescribeEnumItemsRequest
   * @returns DescribeEnumItemsResponse
   */
  async describeEnumItems(request: DescribeEnumItemsRequest): Promise<DescribeEnumItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnumItemsWithOptions(request, runtime);
  }

  /**
   * Queries the playbooks that are available for an automatic response plan.
   * 
   * @param request - DescribeExecutePlaybooksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExecutePlaybooksResponse
   */
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

  /**
   * Queries the playbooks that are available for an automatic response plan.
   * 
   * @param request - DescribeExecutePlaybooksRequest
   * @returns DescribeExecutePlaybooksResponse
   */
  async describeExecutePlaybooks(request: DescribeExecutePlaybooksRequest): Promise<DescribeExecutePlaybooksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExecutePlaybooksWithOptions(request, runtime);
  }

  /**
   * Queries the global configuration information about a cloud service.
   * 
   * @param request - DescribeFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFieldResponse
   */
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

  /**
   * Queries the global configuration information about a cloud service.
   * 
   * @param request - DescribeFieldRequest
   * @returns DescribeFieldResponse
   */
  async describeField(request: DescribeFieldRequest): Promise<DescribeFieldResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFieldWithOptions(request, runtime);
  }

  /**
   * Queries the output structure information of each node in a playbook based on the most recent running record of the playbook.
   * 
   * @param request - DescribeLatestRecordSchemaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLatestRecordSchemaResponse
   */
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

  /**
   * Queries the output structure information of each node in a playbook based on the most recent running record of the playbook.
   * 
   * @param request - DescribeLatestRecordSchemaRequest
   * @returns DescribeLatestRecordSchemaResponse
   */
  async describeLatestRecordSchema(request: DescribeLatestRecordSchemaRequest): Promise<DescribeLatestRecordSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLatestRecordSchemaWithOptions(request, runtime);
  }

  /**
   * Queries recommended dynamic input parameters of a component for playbook orchestration.
   * 
   * @param request - DescribeNodeParamTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNodeParamTagsResponse
   */
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

  /**
   * Queries recommended dynamic input parameters of a component for playbook orchestration.
   * 
   * @param request - DescribeNodeParamTagsRequest
   * @returns DescribeNodeParamTagsResponse
   */
  async describeNodeParamTags(request: DescribeNodeParamTagsRequest): Promise<DescribeNodeParamTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNodeParamTagsWithOptions(request, runtime);
  }

  /**
   * Queries the nodes that reference the same node in a playbook.
   * 
   * @param request - DescribeNodeUsedInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNodeUsedInfosResponse
   */
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

  /**
   * Queries the nodes that reference the same node in a playbook.
   * 
   * @param request - DescribeNodeUsedInfosRequest
   * @returns DescribeNodeUsedInfosResponse
   */
  async describeNodeUsedInfos(request: DescribeNodeUsedInfosRequest): Promise<DescribeNodeUsedInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNodeUsedInfosWithOptions(request, runtime);
  }

  /**
   * Queries the XML configuration of a playbook.
   * 
   * @param request - DescribePlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybookResponse
   */
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

  /**
   * Queries the XML configuration of a playbook.
   * 
   * @param request - DescribePlaybookRequest
   * @returns DescribePlaybookResponse
   */
  async describePlaybook(request: DescribePlaybookRequest): Promise<DescribePlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlaybookWithOptions(request, runtime);
  }

  /**
   * Queries the input and output parameter configurations of a playbook.
   * 
   * @param request - DescribePlaybookInputOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybookInputOutputResponse
   */
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

  /**
   * Queries the input and output parameter configurations of a playbook.
   * 
   * @param request - DescribePlaybookInputOutputRequest
   * @returns DescribePlaybookInputOutputResponse
   */
  async describePlaybookInputOutput(request: DescribePlaybookInputOutputRequest): Promise<DescribePlaybookInputOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlaybookInputOutputWithOptions(request, runtime);
  }

  /**
   * Queries the metrics of a playbook. The metrics include the playbook name, playbook description, the number of times that the playbook is run, and the failure rate of the playbook.
   * 
   * @param request - DescribePlaybookMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybookMetricsResponse
   */
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

  /**
   * Queries the metrics of a playbook. The metrics include the playbook name, playbook description, the number of times that the playbook is run, and the failure rate of the playbook.
   * 
   * @param request - DescribePlaybookMetricsRequest
   * @returns DescribePlaybookMetricsResponse
   */
  async describePlaybookMetrics(request: DescribePlaybookMetricsRequest): Promise<DescribePlaybookMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlaybookMetricsWithOptions(request, runtime);
  }

  /**
   * Queries the historical output data of a component node.
   * 
   * @param request - DescribePlaybookNodesOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybookNodesOutputResponse
   */
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

  /**
   * Queries the historical output data of a component node.
   * 
   * @param request - DescribePlaybookNodesOutputRequest
   * @returns DescribePlaybookNodesOutputResponse
   */
  async describePlaybookNodesOutput(request: DescribePlaybookNodesOutputRequest): Promise<DescribePlaybookNodesOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlaybookNodesOutputWithOptions(request, runtime);
  }

  /**
   * Queries the statistics of Security Orchestration Automation Response (SOAR), such as the numbers of created and enabled playbooks.
   * 
   * @param request - DescribePlaybookNumberMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybookNumberMetricsResponse
   */
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

  /**
   * Queries the statistics of Security Orchestration Automation Response (SOAR), such as the numbers of created and enabled playbooks.
   * 
   * @param request - DescribePlaybookNumberMetricsRequest
   * @returns DescribePlaybookNumberMetricsResponse
   */
  async describePlaybookNumberMetrics(request: DescribePlaybookNumberMetricsRequest): Promise<DescribePlaybookNumberMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlaybookNumberMetricsWithOptions(request, runtime);
  }

  /**
   * Queries the information about the published versions of a playbook.
   * 
   * @param request - DescribePlaybookReleasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybookReleasesResponse
   */
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

  /**
   * Queries the information about the published versions of a playbook.
   * 
   * @param request - DescribePlaybookReleasesRequest
   * @returns DescribePlaybookReleasesResponse
   */
  async describePlaybookReleases(request: DescribePlaybookReleasesRequest): Promise<DescribePlaybookReleasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlaybookReleasesWithOptions(request, runtime);
  }

  /**
   * Queries playbooks.
   * 
   * @param request - DescribePlaybooksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybooksResponse
   */
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

  /**
   * Queries playbooks.
   * 
   * @param request - DescribePlaybooksRequest
   * @returns DescribePlaybooksResponse
   */
  async describePlaybooks(request: DescribePlaybooksRequest): Promise<DescribePlaybooksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlaybooksWithOptions(request, runtime);
  }

  /**
   * Queries the details of an API operation.
   * 
   * @param request - DescribePopApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePopApiResponse
   */
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

  /**
   * Queries the details of an API operation.
   * 
   * @param request - DescribePopApiRequest
   * @returns DescribePopApiResponse
   */
  async describePopApi(request: DescribePopApiRequest): Promise<DescribePopApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePopApiWithOptions(request, runtime);
  }

  /**
   * Queries a list of API operations for an Alibaba Cloud service.
   * 
   * @param request - DescribePopApiItemListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePopApiItemListResponse
   */
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

  /**
   * Queries a list of API operations for an Alibaba Cloud service.
   * 
   * @param request - DescribePopApiItemListRequest
   * @returns DescribePopApiItemListResponse
   */
  async describePopApiItemList(request: DescribePopApiItemListRequest): Promise<DescribePopApiItemListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePopApiItemListWithOptions(request, runtime);
  }

  /**
   * Queries the version information of API operations for an Alibaba Cloud service.
   * 
   * @param request - DescribePopApiVersionListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePopApiVersionListResponse
   */
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

  /**
   * Queries the version information of API operations for an Alibaba Cloud service.
   * 
   * @param request - DescribePopApiVersionListRequest
   * @returns DescribePopApiVersionListResponse
   */
  async describePopApiVersionList(request: DescribePopApiVersionListRequest): Promise<DescribePopApiVersionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePopApiVersionListWithOptions(request, runtime);
  }

  /**
   * 根据实体uuid查询关联的处置任务数
   * 
   * @param request - DescribeProcessTaskCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProcessTaskCountResponse
   */
  async describeProcessTaskCountWithOptions(request: DescribeProcessTaskCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProcessTaskCountResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProcessTaskCount",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProcessTaskCountResponse>(await this.callApi(params, req, runtime), new DescribeProcessTaskCountResponse({}));
  }

  /**
   * 根据实体uuid查询关联的处置任务数
   * 
   * @param request - DescribeProcessTaskCountRequest
   * @returns DescribeProcessTaskCountResponse
   */
  async describeProcessTaskCount(request: DescribeProcessTaskCountRequest): Promise<DescribeProcessTaskCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProcessTaskCountWithOptions(request, runtime);
  }

  /**
   * Queries the information about handling tasks. When you use Security Orchestration Automation Response (SOAR) to handle events, handling tasks are generated in the handling center.
   * 
   * @param request - DescribeProcessTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProcessTasksResponse
   */
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

  /**
   * Queries the information about handling tasks. When you use Security Orchestration Automation Response (SOAR) to handle events, handling tasks are generated in the handling center.
   * 
   * @param request - DescribeProcessTasksRequest
   * @returns DescribeProcessTasksResponse
   */
  async describeProcessTasks(request: DescribeProcessTasksRequest): Promise<DescribeProcessTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProcessTasksWithOptions(request, runtime);
  }

  /**
   * Queries the data that is returned when a component initiates an action in a playbook task.
   * 
   * @param request - DescribeSoarRecordActionOutputListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSoarRecordActionOutputListResponse
   */
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

  /**
   * Queries the data that is returned when a component initiates an action in a playbook task.
   * 
   * @param request - DescribeSoarRecordActionOutputListRequest
   * @returns DescribeSoarRecordActionOutputListResponse
   */
  async describeSoarRecordActionOutputList(request: DescribeSoarRecordActionOutputListRequest): Promise<DescribeSoarRecordActionOutputListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSoarRecordActionOutputListWithOptions(request, runtime);
  }

  /**
   * Queries the input and output data of a component action. You can call this operation after a playbook is run.
   * 
   * @param request - DescribeSoarRecordInOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSoarRecordInOutputResponse
   */
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

  /**
   * Queries the input and output data of a component action. You can call this operation after a playbook is run.
   * 
   * @param request - DescribeSoarRecordInOutputRequest
   * @returns DescribeSoarRecordInOutputResponse
   */
  async describeSoarRecordInOutput(request: DescribeSoarRecordInOutputRequest): Promise<DescribeSoarRecordInOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSoarRecordInOutputWithOptions(request, runtime);
  }

  /**
   * Queries the execution records of a playbook.
   * 
   * @param request - DescribeSoarRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSoarRecordsResponse
   */
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

  /**
   * Queries the execution records of a playbook.
   * 
   * @param request - DescribeSoarRecordsRequest
   * @returns DescribeSoarRecordsResponse
   */
  async describeSoarRecords(request: DescribeSoarRecordsRequest): Promise<DescribeSoarRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSoarRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the execution records of a component during the running of a playbook.
   * 
   * @param request - DescribeSoarTaskAndActionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSoarTaskAndActionsResponse
   */
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

  /**
   * Queries the execution records of a component during the running of a playbook.
   * 
   * @param request - DescribeSoarTaskAndActionsRequest
   * @returns DescribeSoarTaskAndActionsResponse
   */
  async describeSoarTaskAndActions(request: DescribeSoarTaskAndActionsRequest): Promise<DescribeSoarTaskAndActionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSoarTaskAndActionsWithOptions(request, runtime);
  }

  /**
   * Queries the commands that can be run to obtain objects.
   * 
   * @param request - DescribeSophonCommandsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSophonCommandsResponse
   */
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

  /**
   * Queries the commands that can be run to obtain objects.
   * 
   * @param request - DescribeSophonCommandsRequest
   * @returns DescribeSophonCommandsResponse
   */
  async describeSophonCommands(request: DescribeSophonCommandsRequest): Promise<DescribeSophonCommandsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSophonCommandsWithOptions(request, runtime);
  }

  /**
   * Queries the operational logs of a Python3 script by using the UUID that is returned when the script is run. The UUID is specified by requestUuid.
   * 
   * @param request - DescriberPython3ScriptLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescriberPython3ScriptLogsResponse
   */
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

  /**
   * Queries the operational logs of a Python3 script by using the UUID that is returned when the script is run. The UUID is specified by requestUuid.
   * 
   * @param request - DescriberPython3ScriptLogsRequest
   * @returns DescriberPython3ScriptLogsResponse
   */
  async describerPython3ScriptLogs(request: DescriberPython3ScriptLogsRequest): Promise<DescriberPython3ScriptLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describerPython3ScriptLogsWithOptions(request, runtime);
  }

  /**
   * Modifies the information about the asset that is configured for a component.
   * 
   * @param request - ModifyComponentAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyComponentAssetResponse
   */
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

  /**
   * Modifies the information about the asset that is configured for a component.
   * 
   * @param request - ModifyComponentAssetRequest
   * @returns ModifyComponentAssetResponse
   */
  async modifyComponentAsset(request: ModifyComponentAssetRequest): Promise<ModifyComponentAssetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyComponentAssetWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of a playbook.
   * 
   * @param request - ModifyPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPlaybookResponse
   */
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

  /**
   * Modifies the configuration of a playbook.
   * 
   * @param request - ModifyPlaybookRequest
   * @returns ModifyPlaybookResponse
   */
  async modifyPlaybook(request: ModifyPlaybookRequest): Promise<ModifyPlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPlaybookWithOptions(request, runtime);
  }

  /**
   * Modifies the input and output parameters of a playbook.
   * 
   * @param request - ModifyPlaybookInputOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPlaybookInputOutputResponse
   */
  async modifyPlaybookInputOutputWithOptions(request: ModifyPlaybookInputOutputRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPlaybookInputOutputResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.exeConfig)) {
      body["ExeConfig"] = request.exeConfig;
    }

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

  /**
   * Modifies the input and output parameters of a playbook.
   * 
   * @param request - ModifyPlaybookInputOutputRequest
   * @returns ModifyPlaybookInputOutputResponse
   */
  async modifyPlaybookInputOutput(request: ModifyPlaybookInputOutputRequest): Promise<ModifyPlaybookInputOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPlaybookInputOutputWithOptions(request, runtime);
  }

  /**
   * Modifies the status of a playbook.
   * 
   * @param request - ModifyPlaybookInstanceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPlaybookInstanceStatusResponse
   */
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

  /**
   * Modifies the status of a playbook.
   * 
   * @param request - ModifyPlaybookInstanceStatusRequest
   * @returns ModifyPlaybookInstanceStatusResponse
   */
  async modifyPlaybookInstanceStatus(request: ModifyPlaybookInstanceStatusRequest): Promise<ModifyPlaybookInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPlaybookInstanceStatusWithOptions(request, runtime);
  }

  /**
   * Publishes the playbook. After the playbook is published, the playbook runs based on the new logic.
   * 
   * @param request - PublishPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishPlaybookResponse
   */
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

  /**
   * Publishes the playbook. After the playbook is published, the playbook runs based on the new logic.
   * 
   * @param request - PublishPlaybookRequest
   * @returns PublishPlaybookResponse
   */
  async publishPlaybook(request: PublishPlaybookRequest): Promise<PublishPlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishPlaybookWithOptions(request, runtime);
  }

  /**
   * Queries all playbooks at a time.
   * 
   * @param request - QueryTreeDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTreeDataResponse
   */
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

  /**
   * Queries all playbooks at a time.
   * 
   * @param request - QueryTreeDataRequest
   * @returns QueryTreeDataResponse
   */
  async queryTreeData(request: QueryTreeDataRequest): Promise<QueryTreeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTreeDataWithOptions(request, runtime);
  }

  /**
   * Changes the name of a node in a playbook. You can call this operation during playbook orchestration. After the name of the node is changed, the reference path of the node also changes.
   * 
   * @param request - RenamePlaybookNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenamePlaybookNodeResponse
   */
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

  /**
   * Changes the name of a node in a playbook. You can call this operation during playbook orchestration. After the name of the node is changed, the reference path of the node also changes.
   * 
   * @param request - RenamePlaybookNodeRequest
   * @returns RenamePlaybookNodeResponse
   */
  async renamePlaybookNode(request: RenamePlaybookNodeRequest): Promise<RenamePlaybookNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renamePlaybookNodeWithOptions(request, runtime);
  }

  /**
   * Rolls back a playbook to a specific version. You can determine whether to publish the new playbook version during the rollback.
   * 
   * @param request - RevertPlaybookReleaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevertPlaybookReleaseResponse
   */
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

  /**
   * Rolls back a playbook to a specific version. You can determine whether to publish the new playbook version during the rollback.
   * 
   * @param request - RevertPlaybookReleaseRequest
   * @returns RevertPlaybookReleaseResponse
   */
  async revertPlaybookRelease(request: RevertPlaybookReleaseRequest): Promise<RevertPlaybookReleaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revertPlaybookReleaseWithOptions(request, runtime);
  }

  /**
   * Submits and runs a Python3 script. You can call this operation only for data processing.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of Security Orchestration Automation Response (SOAR). For more information, see [Pricing](https://www.alibabacloud.com/en/pricing-calculator?_p_lc=1&spm=openapi-amp.newDocPublishment.0.0.4c41281fWhbdPa#/commodity/vm_intl).
   * 
   * @param request - RunPython3ScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunPython3ScriptResponse
   */
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

  /**
   * Submits and runs a Python3 script. You can call this operation only for data processing.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of Security Orchestration Automation Response (SOAR). For more information, see [Pricing](https://www.alibabacloud.com/en/pricing-calculator?_p_lc=1&spm=openapi-amp.newDocPublishment.0.0.4c41281fWhbdPa#/commodity/vm_intl).
   * 
   * @param request - RunPython3ScriptRequest
   * @returns RunPython3ScriptResponse
   */
  async runPython3Script(request: RunPython3ScriptRequest): Promise<RunPython3ScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runPython3ScriptWithOptions(request, runtime);
  }

  /**
   * Triggers an enabled custom playbook or a predefined playbook.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and pricing of Security Orchestration Automation Response (SOAR). For more information, see [Pricing](https://www.alibabacloud.com/en/pricing-calculator?_p_lc=1&spm=a2796.7960336.3034855210.1.7adab91arMeIx2#/commodity/vm_intl).
   * 
   * @param request - TriggerPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerPlaybookResponse
   */
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

  /**
   * Triggers an enabled custom playbook or a predefined playbook.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and pricing of Security Orchestration Automation Response (SOAR). For more information, see [Pricing](https://www.alibabacloud.com/en/pricing-calculator?_p_lc=1&spm=a2796.7960336.3034855210.1.7adab91arMeIx2#/commodity/vm_intl).
   * 
   * @param request - TriggerPlaybookRequest
   * @returns TriggerPlaybookResponse
   */
  async triggerPlaybook(request: TriggerPlaybookRequest): Promise<TriggerPlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.triggerPlaybookWithOptions(request, runtime);
  }

  /**
   * Performs an action on a handling task that is generated by the handling center when an event is handled by using Security Orchestration Automation Response (SOAR). For example, you can call this operation to cancel blocking or isolation, or retry blocking.
   * 
   * @param request - TriggerProcessTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerProcessTaskResponse
   */
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

  /**
   * Performs an action on a handling task that is generated by the handling center when an event is handled by using Security Orchestration Automation Response (SOAR). For example, you can call this operation to cancel blocking or isolation, or retry blocking.
   * 
   * @param request - TriggerProcessTaskRequest
   * @returns TriggerProcessTaskResponse
   */
  async triggerProcessTask(request: TriggerProcessTaskRequest): Promise<TriggerProcessTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.triggerProcessTaskWithOptions(request, runtime);
  }

  /**
   * Triggers a playbook or a command.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and pricing of Security Orchestration Automation Response (SOAR). For more information, see [Pricing](https://www.alibabacloud.com/en/pricing-calculator?_p_lc=1&spm=a2796.7960336.3034855210.1.7adab91arMeIx2#/commodity/vm_intl).
   * 
   * @param request - TriggerSophonPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerSophonPlaybookResponse
   */
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

  /**
   * Triggers a playbook or a command.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and pricing of Security Orchestration Automation Response (SOAR). For more information, see [Pricing](https://www.alibabacloud.com/en/pricing-calculator?_p_lc=1&spm=a2796.7960336.3034855210.1.7adab91arMeIx2#/commodity/vm_intl).
   * 
   * @param request - TriggerSophonPlaybookRequest
   * @returns TriggerSophonPlaybookResponse
   */
  async triggerSophonPlaybook(request: TriggerSophonPlaybookRequest): Promise<TriggerSophonPlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.triggerSophonPlaybookWithOptions(request, runtime);
  }

  /**
   * Checks whether the configuration of the playbook is correct and whether the logic of the orchestration is reasonable.
   * 
   * @param request - VerifyPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyPlaybookResponse
   */
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

  /**
   * Checks whether the configuration of the playbook is correct and whether the logic of the orchestration is reasonable.
   * 
   * @param request - VerifyPlaybookRequest
   * @returns VerifyPlaybookResponse
   */
  async verifyPlaybook(request: VerifyPlaybookRequest): Promise<VerifyPlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyPlaybookWithOptions(request, runtime);
  }

  /**
   * Checks whether the syntax of a Python code snippet is correct.
   * 
   * @param request - VerifyPythonFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyPythonFileResponse
   */
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

  /**
   * Checks whether the syntax of a Python code snippet is correct.
   * 
   * @param request - VerifyPythonFileRequest
   * @returns VerifyPythonFileResponse
   */
  async verifyPythonFile(request: VerifyPythonFileRequest): Promise<VerifyPythonFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyPythonFileWithOptions(request, runtime);
  }

}
