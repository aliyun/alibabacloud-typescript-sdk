// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ErrorResponse extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResultClusterValue extends $tea.Model {
  buildParallelNum?: number;
  mergeParallelNum?: number;
  static names(): { [key: string]: string } {
    return {
      buildParallelNum: 'buildParallelNum',
      mergeParallelNum: 'mergeParallelNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildParallelNum: 'number',
      mergeParallelNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResultDatabasesFunctionsValue extends $tea.Model {
  name?: string;
  signatures?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      signatures: 'signatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      signatures: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResultValue extends $tea.Model {
  pauseAll?: boolean;
  pauseIndex?: boolean;
  pauseIndexBatch?: boolean;
  pauseBiz?: boolean;
  pauseRuntime?: boolean;
  static names(): { [key: string]: string } {
    return {
      pauseAll: 'pauseAll',
      pauseIndex: 'pauseIndex',
      pauseIndexBatch: 'pauseIndexBatch',
      pauseBiz: 'pauseBiz',
      pauseRuntime: 'pauseRuntime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pauseAll: 'boolean',
      pauseIndex: 'boolean',
      pauseIndexBatch: 'boolean',
      pauseBiz: 'boolean',
      pauseRuntime: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VariablesValue extends $tea.Model {
  disableModify?: boolean;
  isModify?: boolean;
  value?: string;
  description?: string;
  templateValue?: string;
  type?: string;
  funcValue?: VariablesValueFuncValue;
  static names(): { [key: string]: string } {
    return {
      disableModify: 'disableModify',
      isModify: 'isModify',
      value: 'value',
      description: 'description',
      templateValue: 'templateValue',
      type: 'type',
      funcValue: 'funcValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableModify: 'boolean',
      isModify: 'boolean',
      value: 'string',
      description: 'string',
      templateValue: 'string',
      type: 'string',
      funcValue: VariablesValueFuncValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigValue extends $tea.Model {
  desc?: string;
  files?: ConfigValueFiles[];
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      files: 'files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      files: { 'type': 'array', 'itemType': ConfigValueFiles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BodyValue extends $tea.Model {
  pauseAll?: boolean;
  pauseIndex?: boolean;
  pauseIndexBatch?: boolean;
  pauseBiz?: boolean;
  pauseRuntime?: boolean;
  static names(): { [key: string]: string } {
    return {
      pauseAll: 'pauseAll',
      pauseIndex: 'pauseIndex',
      pauseIndexBatch: 'pauseIndexBatch',
      pauseBiz: 'pauseBiz',
      pauseRuntime: 'pauseRuntime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pauseAll: 'boolean',
      pauseIndex: 'boolean',
      pauseIndexBatch: 'boolean',
      pauseBiz: 'boolean',
      pauseRuntime: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilesConfigVariablesValue extends $tea.Model {
  description?: string;
  disableModify?: boolean;
  isModify?: boolean;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      disableModify: 'disableModify',
      isModify: 'isModify',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      disableModify: 'boolean',
      isModify: 'boolean',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigValueFilesConfigVariablesValue extends $tea.Model {
  description?: string;
  disableModify?: boolean;
  isModify?: boolean;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      disableModify: 'disableModify',
      isModify: 'isModify',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      disableModify: 'boolean',
      isModify: 'boolean',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildIndexRequest extends $tea.Model {
  buildMode?: string;
  dataSourceName?: string;
  dataSourceType?: string;
  dataTimeSec?: number;
  domain?: string;
  generation?: number;
  partition?: string;
  static names(): { [key: string]: string } {
    return {
      buildMode: 'buildMode',
      dataSourceName: 'dataSourceName',
      dataSourceType: 'dataSourceType',
      dataTimeSec: 'dataTimeSec',
      domain: 'domain',
      generation: 'generation',
      partition: 'partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildMode: 'string',
      dataSourceName: 'string',
      dataSourceType: 'string',
      dataTimeSec: 'number',
      domain: 'string',
      generation: 'number',
      partition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildIndexResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildIndexResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BuildIndexResponseBody;
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
      body: BuildIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $tea.Model {
  newResourceGroupId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'newResourceGroupId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class ChangeResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
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
      body: ChangeResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneSqlInstanceRequest extends $tea.Model {
  name?: string;
  targetFolderId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      targetFolderId: 'targetFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      targetFolderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneSqlInstanceResponseBody extends $tea.Model {
  requestId?: string;
  result?: CloneSqlInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CloneSqlInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneSqlInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloneSqlInstanceResponseBody;
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
      body: CloneSqlInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $tea.Model {
  autoLoad?: boolean;
  dataNode?: CreateClusterRequestDataNode;
  description?: string;
  name?: string;
  queryNode?: CreateClusterRequestQueryNode;
  static names(): { [key: string]: string } {
    return {
      autoLoad: 'autoLoad',
      dataNode: 'dataNode',
      description: 'description',
      name: 'name',
      queryNode: 'queryNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoLoad: 'boolean',
      dataNode: CreateClusterRequestDataNode,
      description: 'string',
      name: 'string',
      queryNode: CreateClusterRequestQueryNode,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClusterResponseBody;
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
      body: CreateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigDirRequest extends $tea.Model {
  dirName?: string;
  parentFullPath?: string;
  static names(): { [key: string]: string } {
    return {
      dirName: 'dirName',
      parentFullPath: 'parentFullPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dirName: 'string',
      parentFullPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigDirResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigDirResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateConfigDirResponseBody;
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
      body: CreateConfigDirResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigFileRequest extends $tea.Model {
  fileName?: string;
  ossPath?: string;
  parentFullPath?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      ossPath: 'ossPath',
      parentFullPath: 'parentFullPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      ossPath: 'string',
      parentFullPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigFileResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateConfigFileResponseBody;
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
      body: CreateConfigFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequest extends $tea.Model {
  autoBuildIndex?: boolean;
  config?: CreateDataSourceRequestConfig;
  domain?: string;
  name?: string;
  saroConfig?: CreateDataSourceRequestSaroConfig;
  type?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      config: 'config',
      domain: 'domain',
      name: 'name',
      saroConfig: 'saroConfig',
      type: 'type',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      config: CreateDataSourceRequestConfig,
      domain: 'string',
      name: 'string',
      saroConfig: CreateDataSourceRequestSaroConfig,
      type: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDataSourceResponseBody;
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
      body: CreateDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderRequest extends $tea.Model {
  name?: string;
  parent?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      parent: 'parent',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parent: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateFolderResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateFolderResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFolderResponseBody;
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
      body: CreateFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexRequest extends $tea.Model {
  buildParallelNum?: number;
  content?: string;
  dataSource?: string;
  dataSourceInfo?: CreateIndexRequestDataSourceInfo;
  domain?: string;
  extend?: { [key: string]: any };
  mergeParallelNum?: number;
  name?: string;
  partition?: number;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      buildParallelNum: 'buildParallelNum',
      content: 'content',
      dataSource: 'dataSource',
      dataSourceInfo: 'dataSourceInfo',
      domain: 'domain',
      extend: 'extend',
      mergeParallelNum: 'mergeParallelNum',
      name: 'name',
      partition: 'partition',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildParallelNum: 'number',
      content: 'string',
      dataSource: 'string',
      dataSourceInfo: CreateIndexRequestDataSourceInfo,
      domain: 'string',
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      mergeParallelNum: 'number',
      name: 'string',
      partition: 'number',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIndexResponseBody;
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
      body: CreateIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  chargeType?: string;
  components?: CreateInstanceRequestComponents[];
  order?: CreateInstanceRequestOrder;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      components: 'components',
      order: 'order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      components: { 'type': 'array', 'itemType': CreateInstanceRequestComponents },
      order: CreateInstanceRequestOrder,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceResponseBody;
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
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicUrlResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePublicUrlResponseBody;
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
      body: CreatePublicUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSqlInstanceRequest extends $tea.Model {
  name?: string;
  parent?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      parent: 'parent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parent: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSqlInstanceResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateSqlInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateSqlInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSqlInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSqlInstanceResponseBody;
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
      body: CreateSqlInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequest extends $tea.Model {
  dataProcessConfig?: CreateTableRequestDataProcessConfig[];
  dataProcessorCount?: number;
  dataSource?: CreateTableRequestDataSource;
  fieldSchema?: { [key: string]: string };
  name?: string;
  partitionCount?: number;
  primaryKey?: string;
  rawSchema?: string;
  vectorIndex?: CreateTableRequestVectorIndex[];
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataProcessConfig: 'dataProcessConfig',
      dataProcessorCount: 'dataProcessorCount',
      dataSource: 'dataSource',
      fieldSchema: 'fieldSchema',
      name: 'name',
      partitionCount: 'partitionCount',
      primaryKey: 'primaryKey',
      rawSchema: 'rawSchema',
      vectorIndex: 'vectorIndex',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataProcessConfig: { 'type': 'array', 'itemType': CreateTableRequestDataProcessConfig },
      dataProcessorCount: 'number',
      dataSource: CreateTableRequestDataSource,
      fieldSchema: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      partitionCount: 'number',
      primaryKey: 'string',
      rawSchema: 'string',
      vectorIndex: { 'type': 'array', 'itemType': CreateTableRequestVectorIndex },
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTableResponseBody;
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
      body: CreateTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAdvanceConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAdvanceConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAdvanceConfigResponseBody;
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
      body: DeleteAdvanceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigDirRequest extends $tea.Model {
  dirName?: string;
  parentFullPath?: string;
  static names(): { [key: string]: string } {
    return {
      dirName: 'dirName',
      parentFullPath: 'parentFullPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dirName: 'string',
      parentFullPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigDirResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigDirResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteConfigDirResponseBody;
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
      body: DeleteConfigDirResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigFileRequest extends $tea.Model {
  fileName?: string;
  parentFullPath?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      parentFullPath: 'parentFullPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      parentFullPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigFileResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteConfigFileResponseBody;
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
      body: DeleteConfigFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataSourceResponseBody;
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
      body: DeleteDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderResponseBody extends $tea.Model {
  requestId?: string;
  result?: DeleteFolderResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DeleteFolderResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFolderResponseBody;
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
      body: DeleteFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexRequest extends $tea.Model {
  dataSource?: string;
  deleteDataSource?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataSource: 'dataSource',
      deleteDataSource: 'deleteDataSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: 'string',
      deleteDataSource: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIndexResponseBody;
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
      body: DeleteIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexVersionResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIndexVersionResponseBody;
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
      body: DeleteIndexVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceResponseBody;
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
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePublicUrlResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePublicUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePublicUrlResponseBody;
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
      body: DeletePublicUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSqlInstanceResponseBody extends $tea.Model {
  requestId?: string;
  result?: DeleteSqlInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DeleteSqlInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSqlInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSqlInstanceResponseBody;
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
      body: DeleteSqlInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTableResponseBody;
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
      body: DeleteTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'acceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeRegionsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
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
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlInstanceRequest extends $tea.Model {
  combineParam?: { [key: string]: any };
  content?: string;
  domain?: string;
  dynamicParam?: { [key: string]: any };
  kvpair?: { [key: string]: any };
  params?: { [key: string]: any };
  staticParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      combineParam: 'combineParam',
      content: 'content',
      domain: 'domain',
      dynamicParam: 'dynamicParam',
      kvpair: 'kvpair',
      params: 'params',
      staticParam: 'staticParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combineParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      content: 'string',
      domain: 'string',
      dynamicParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      kvpair: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      staticParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlInstanceResponseBody extends $tea.Model {
  requestId?: string;
  result?: ExecuteSqlInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ExecuteSqlInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteSqlInstanceResponseBody;
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
      body: ExecuteSqlInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForceSwitchResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForceSwitchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ForceSwitchResponseBody;
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
      body: ForceSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvanceConfigRequest extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvanceConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetAdvanceConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetAdvanceConfigResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvanceConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAdvanceConfigResponseBody;
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
      body: GetAdvanceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvanceConfigFileRequest extends $tea.Model {
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvanceConfigFileResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetAdvanceConfigFileResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetAdvanceConfigFileResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvanceConfigFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAdvanceConfigFileResponseBody;
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
      body: GetAdvanceConfigFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetClusterResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetClusterResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClusterResponseBody;
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
      body: GetClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetClusterRunTimeInfoResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetClusterRunTimeInfoResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClusterRunTimeInfoResponseBody;
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
      body: GetClusterRunTimeInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetDataSourceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetDataSourceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDataSourceResponseBody;
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
      body: GetDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetDataSourceDeployResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetDataSourceDeployResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDataSourceDeployResponseBody;
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
      body: GetDataSourceDeployResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseSchemaResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetDatabaseSchemaResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetDatabaseSchemaResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseSchemaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDatabaseSchemaResponseBody;
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
      body: GetDatabaseSchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetDeployGraphResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetDeployGraphResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeployGraphResponseBody;
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
      body: GetDeployGraphResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileRequest extends $tea.Model {
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetFileResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetFileResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFileResponseBody;
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
      body: GetFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetIndexResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetIndexResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIndexResponseBody;
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
      body: GetIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexOnlineStrategyResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetIndexOnlineStrategyResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetIndexOnlineStrategyResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexOnlineStrategyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIndexOnlineStrategyResponseBody;
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
      body: GetIndexOnlineStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexVersionResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetIndexVersionResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetIndexVersionResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIndexVersionResponseBody;
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
      body: GetIndexVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceResponseBody;
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
      body: GetInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeConfigRequest extends $tea.Model {
  clusterName?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'clusterName',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetNodeConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetNodeConfigResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNodeConfigResponseBody;
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
      body: GetNodeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlInstanceRequest extends $tea.Model {
  version?: number;
  static names(): { [key: string]: string } {
    return {
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlInstanceResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetSqlInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetSqlInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSqlInstanceResponseBody;
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
      body: GetSqlInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetTableResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetTableResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTableResponseBody;
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
      body: GetTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableGenerationResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetTableGenerationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetTableGenerationResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableGenerationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTableGenerationResponseBody;
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
      body: GetTableGenerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvanceConfigDirRequest extends $tea.Model {
  dirName?: string;
  static names(): { [key: string]: string } {
    return {
      dirName: 'dirName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dirName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvanceConfigDirResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListAdvanceConfigDirResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAdvanceConfigDirResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvanceConfigDirResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAdvanceConfigDirResponseBody;
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
      body: ListAdvanceConfigDirResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvanceConfigsRequest extends $tea.Model {
  dataSourceName?: string;
  indexName?: string;
  newMode?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'dataSourceName',
      indexName: 'indexName',
      newMode: 'newMode',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
      indexName: 'string',
      newMode: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvanceConfigsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListAdvanceConfigsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAdvanceConfigsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvanceConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAdvanceConfigsResponseBody;
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
      body: ListAdvanceConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNamesResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListClusterNamesResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListClusterNamesResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNamesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClusterNamesResponseBody;
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
      body: ListClusterNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTasksResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListClusterTasksResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListClusterTasksResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClusterTasksResponseBody;
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
      body: ListClusterTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListClustersResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListClustersResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClustersResponseBody;
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
      body: ListClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceSchemasResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListDataSourceSchemasResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDataSourceSchemasResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceSchemasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataSourceSchemasResponseBody;
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
      body: ListDataSourceSchemasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTasksResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListDataSourceTasksResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDataSourceTasksResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataSourceTasksResponseBody;
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
      body: ListDataSourceTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListDataSourcesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDataSourcesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataSourcesResponseBody;
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
      body: ListDataSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListDatabasesResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListDatabasesResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDatabasesResponseBody;
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
      body: ListDatabasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDateSourceGenerationsRequest extends $tea.Model {
  domainName?: string;
  validStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      domainName: 'domainName',
      validStatus: 'validStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      validStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDateSourceGenerationsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListDateSourceGenerationsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDateSourceGenerationsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDateSourceGenerationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDateSourceGenerationsResponseBody;
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
      body: ListDateSourceGenerationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexRecoverRecordsResponseBody extends $tea.Model {
  desc?: string;
  finishedTime?: string;
  generationId?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      finishedTime: 'finishedTime',
      generationId: 'generationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      finishedTime: 'string',
      generationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexRecoverRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIndexRecoverRecordsResponseBody;
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
      body: ListIndexRecoverRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesRequest extends $tea.Model {
  newMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      newMode: 'newMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newMode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListIndexesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListIndexesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIndexesResponseBody;
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
      body: ListIndexesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSpecsRequest extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSpecsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListInstanceSpecsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInstanceSpecsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSpecsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceSpecsResponseBody;
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
      body: ListInstanceSpecsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  description?: string;
  edition?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  tags?: ListInstancesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      edition: 'edition',
      instanceId: 'instanceId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      edition: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListInstancesRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesShrinkRequest extends $tea.Model {
  description?: string;
  edition?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      edition: 'edition',
      instanceId: 'instanceId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      tagsShrink: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      edition: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListInstancesResponseBodyResult[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInstancesResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesResponseBody;
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
      body: ListInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsRequest extends $tea.Model {
  endTime?: string;
  pageNum?: string;
  pageSize?: string;
  query?: string;
  startTime?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      query: 'query',
      startTime: 'startTime',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNum: 'string',
      pageSize: 'string',
      query: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListLogsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListLogsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLogsResponseBody;
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
      body: ListLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnlineConfigsRequest extends $tea.Model {
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnlineConfigsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListOnlineConfigsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListOnlineConfigsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnlineConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOnlineConfigsResponseBody;
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
      body: ListOnlineConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPausePolicysResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: ResultValue };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': ResultValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPausePolicysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPausePolicysResponseBody;
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
      body: ListPausePolicysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPostQueryResultRequest extends $tea.Model {
  address?: string;
  body?: { [key: string]: any };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      body: 'body',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPostQueryResultResponseBody extends $tea.Model {
  requestId?: string;
  result?: any;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPostQueryResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPostQueryResultResponseBody;
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
      body: ListPostQueryResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryResultRequest extends $tea.Model {
  query?: string;
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
      sql: 'sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
      sql: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryResultResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class ListQueryResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQueryResultResponseBody;
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
      body: ListQueryResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRestQueryResultRequest extends $tea.Model {
  address?: string;
  indexName?: string;
  query?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      indexName: 'indexName',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      indexName: 'string',
      query: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRestQueryResultResponseBody extends $tea.Model {
  requestId?: string;
  result?: any;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRestQueryResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRestQueryResultResponseBody;
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
      body: ListRestQueryResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemasRequest extends $tea.Model {
  accessKey?: string;
  accessSecret?: string;
  endpoint?: string;
  namespace?: string;
  partition?: string;
  project?: string;
  table?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      endpoint: 'endpoint',
      namespace: 'namespace',
      partition: 'partition',
      project: 'project',
      table: 'table',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      endpoint: 'string',
      namespace: 'string',
      partition: 'string',
      project: 'string',
      table: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemasResponseBody extends $tea.Model {
  requestId?: string;
  result?: any;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSchemasResponseBody;
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
      body: ListSchemasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableGenerationsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListTableGenerationsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListTableGenerationsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableGenerationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTableGenerationsResponseBody;
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
      body: ListTableGenerationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesRequest extends $tea.Model {
  newMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      newMode: 'newMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newMode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListTablesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListTablesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTablesResponseBody;
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
      body: ListTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesShrinkRequest extends $tea.Model {
  nextToken?: string;
  resourceIdShrink?: string;
  resourceType?: string;
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      resourceIdShrink: 'resourceId',
      resourceType: 'resourceType',
      tagShrink: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      resourceIdShrink: 'string',
      resourceType: 'string',
      tagShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      requestId: 'requestId',
      tagResources: 'tagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
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
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksRequest extends $tea.Model {
  end?: number;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBody extends $tea.Model {
  requestId?: string;
  result?: any;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTasksResponseBody;
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
      body: ListTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVectorQueryResultRequest extends $tea.Model {
  address?: string;
  body?: { [key: string]: any };
  queryType?: string;
  vectorQueryType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      body: 'body',
      queryType: 'queryType',
      vectorQueryType: 'vectorQueryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      queryType: 'string',
      vectorQueryType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVectorQueryResultResponseBody extends $tea.Model {
  requestId?: string;
  result?: any;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVectorQueryResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVectorQueryResultResponseBody;
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
      body: ListVectorQueryResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAdvanceConfigRequest extends $tea.Model {
  content?: string;
  contentType?: string;
  desc?: string;
  files?: ModifyAdvanceConfigRequestFiles[];
  name?: string;
  status?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentType: 'contentType',
      desc: 'desc',
      files: 'files',
      name: 'name',
      status: 'status',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      desc: 'string',
      files: { 'type': 'array', 'itemType': ModifyAdvanceConfigRequestFiles },
      name: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAdvanceConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAdvanceConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAdvanceConfigResponseBody;
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
      body: ModifyAdvanceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAdvanceConfigFileRequest extends $tea.Model {
  content?: string;
  variables?: { [key: string]: VariablesValue };
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      variables: 'variables',
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': VariablesValue },
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAdvanceConfigFileResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAdvanceConfigFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAdvanceConfigFileResponseBody;
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
      body: ModifyAdvanceConfigFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterDescRequest extends $tea.Model {
  body?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterDescResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterDescResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyClusterDescResponseBody;
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
      body: ModifyClusterDescResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterOfflineConfigRequest extends $tea.Model {
  buildMode?: string;
  config?: { [key: string]: number };
  dataSourceName?: string;
  dataSourceType?: string;
  dataTimeSec?: number;
  domain?: string;
  generation?: number;
  partition?: string;
  pushMode?: string;
  static names(): { [key: string]: string } {
    return {
      buildMode: 'buildMode',
      config: 'config',
      dataSourceName: 'dataSourceName',
      dataSourceType: 'dataSourceType',
      dataTimeSec: 'dataTimeSec',
      domain: 'domain',
      generation: 'generation',
      partition: 'partition',
      pushMode: 'pushMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildMode: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      dataSourceName: 'string',
      dataSourceType: 'string',
      dataTimeSec: 'number',
      domain: 'string',
      generation: 'number',
      partition: 'string',
      pushMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterOfflineConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterOfflineConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyClusterOfflineConfigResponseBody;
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
      body: ModifyClusterOfflineConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterOnlineConfigRequest extends $tea.Model {
  clusters?: string[];
  config?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      clusters: 'clusters',
      config: 'config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': 'string' },
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterOnlineConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterOnlineConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyClusterOnlineConfigResponseBody;
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
      body: ModifyClusterOnlineConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequest extends $tea.Model {
  autoBuildIndex?: boolean;
  extend?: ModifyDataSourceDeployRequestExtend;
  processor?: ModifyDataSourceDeployRequestProcessor;
  storage?: ModifyDataSourceDeployRequestStorage;
  swift?: ModifyDataSourceDeployRequestSwift;
  dryRun?: boolean;
  generationId?: number;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      extend: 'extend',
      processor: 'processor',
      storage: 'storage',
      swift: 'swift',
      dryRun: 'dryRun',
      generationId: 'generationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      extend: ModifyDataSourceDeployRequestExtend,
      processor: ModifyDataSourceDeployRequestProcessor,
      storage: ModifyDataSourceDeployRequestStorage,
      swift: ModifyDataSourceDeployRequestSwift,
      dryRun: 'boolean',
      generationId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDataSourceDeployResponseBody;
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
      body: ModifyDataSourceDeployResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFileRequest extends $tea.Model {
  content?: string;
  partition?: number;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      partition: 'partition',
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      partition: 'number',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFileResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyFileResponseBody;
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
      body: ModifyFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexRequest extends $tea.Model {
  buildParallelNum?: number;
  cluster?: { [key: string]: {[key: string]: any} };
  clusterConfigName?: string;
  config?: { [key: string]: ConfigValue };
  content?: string;
  dataSource?: string;
  dataSourceInfo?: ModifyIndexRequestDataSourceInfo;
  description?: string;
  domain?: string;
  mergeParallelNum?: number;
  partition?: number;
  pushMode?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      buildParallelNum: 'buildParallelNum',
      cluster: 'cluster',
      clusterConfigName: 'clusterConfigName',
      config: 'config',
      content: 'content',
      dataSource: 'dataSource',
      dataSourceInfo: 'dataSourceInfo',
      description: 'description',
      domain: 'domain',
      mergeParallelNum: 'mergeParallelNum',
      partition: 'partition',
      pushMode: 'pushMode',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildParallelNum: 'number',
      cluster: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      clusterConfigName: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': ConfigValue },
      content: 'string',
      dataSource: 'string',
      dataSourceInfo: ModifyIndexRequestDataSourceInfo,
      description: 'string',
      domain: 'string',
      mergeParallelNum: 'number',
      partition: 'number',
      pushMode: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexResponseBody extends $tea.Model {
  requestId?: string;
  result?: any;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyIndexResponseBody;
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
      body: ModifyIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexOnlineStrategyRequest extends $tea.Model {
  changeRate?: number;
  static names(): { [key: string]: string } {
    return {
      changeRate: 'changeRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexOnlineStrategyResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexOnlineStrategyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyIndexOnlineStrategyResponseBody;
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
      body: ModifyIndexOnlineStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexPartitionRequest extends $tea.Model {
  dataSourceName?: string;
  domainName?: string;
  generation?: number;
  indexInfos?: ModifyIndexPartitionRequestIndexInfos[];
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'dataSourceName',
      domainName: 'domainName',
      generation: 'generation',
      indexInfos: 'indexInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
      domainName: 'string',
      generation: 'number',
      indexInfos: { 'type': 'array', 'itemType': ModifyIndexPartitionRequestIndexInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexPartitionResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexPartitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyIndexPartitionResponseBody;
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
      body: ModifyIndexPartitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexVersionRequest extends $tea.Model {
  body?: ModifyIndexVersionRequestBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': ModifyIndexVersionRequestBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexVersionResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyIndexVersionResponseBody;
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
      body: ModifyIndexVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodeConfigRequest extends $tea.Model {
  active?: boolean;
  dataDuplicateNumber?: number;
  dataFragmentNumber?: number;
  flowRatio?: number;
  minServicePercent?: number;
  published?: boolean;
  clusterName?: string;
  dataSourceName?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      dataDuplicateNumber: 'dataDuplicateNumber',
      dataFragmentNumber: 'dataFragmentNumber',
      flowRatio: 'flowRatio',
      minServicePercent: 'minServicePercent',
      published: 'published',
      clusterName: 'clusterName',
      dataSourceName: 'dataSourceName',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      dataDuplicateNumber: 'number',
      dataFragmentNumber: 'number',
      flowRatio: 'number',
      minServicePercent: 'number',
      published: 'boolean',
      clusterName: 'string',
      dataSourceName: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodeConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodeConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyNodeConfigResponseBody;
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
      body: ModifyNodeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOnlineConfigRequest extends $tea.Model {
  body?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOnlineConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOnlineConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyOnlineConfigResponseBody;
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
      body: ModifyOnlineConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPasswordRequest extends $tea.Model {
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'password',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPasswordResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPasswordResponseBody;
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
      body: ModifyPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPausePolicyRequest extends $tea.Model {
  body?: { [key: string]: BodyValue };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': BodyValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPausePolicyResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPausePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPausePolicyResponseBody;
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
      body: ModifyPausePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPublicUrlIpListRequest extends $tea.Model {
  body?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPublicUrlIpListResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPublicUrlIpListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPublicUrlIpListResponseBody;
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
      body: ModifyPublicUrlIpListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTableRequest extends $tea.Model {
  dataProcessConfig?: ModifyTableRequestDataProcessConfig[];
  dataSource?: ModifyTableRequestDataSource;
  fieldSchema?: { [key: string]: string };
  partitionCount?: number;
  primaryKey?: string;
  rawSchema?: string;
  vectorIndex?: ModifyTableRequestVectorIndex[];
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataProcessConfig: 'dataProcessConfig',
      dataSource: 'dataSource',
      fieldSchema: 'fieldSchema',
      partitionCount: 'partitionCount',
      primaryKey: 'primaryKey',
      rawSchema: 'rawSchema',
      vectorIndex: 'vectorIndex',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataProcessConfig: { 'type': 'array', 'itemType': ModifyTableRequestDataProcessConfig },
      dataSource: ModifyTableRequestDataSource,
      fieldSchema: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      partitionCount: 'number',
      primaryKey: 'string',
      rawSchema: 'string',
      vectorIndex: { 'type': 'array', 'itemType': ModifyTableRequestVectorIndex },
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTableResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTableResponseBody;
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
      body: ModifyTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishAdvanceConfigRequest extends $tea.Model {
  desc?: string;
  files?: PublishAdvanceConfigRequestFiles[];
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      files: 'files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      files: { 'type': 'array', 'itemType': PublishAdvanceConfigRequestFiles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishAdvanceConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishAdvanceConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PublishAdvanceConfigResponseBody;
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
      body: PublishAdvanceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishIndexVersionRequest extends $tea.Model {
  body?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishIndexVersionResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishIndexVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PublishIndexVersionResponseBody;
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
      body: PublishIndexVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDocumentsRequest extends $tea.Model {
  body?: any[];
  pkField?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      pkField: 'pkField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': 'any' },
      pkField: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDocumentsResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDocumentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushDocumentsResponseBody;
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
      body: PushDocumentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverIndexRequest extends $tea.Model {
  buildDeployId?: number;
  dataSourceName?: string;
  generation?: string;
  indexName?: string;
  static names(): { [key: string]: string } {
    return {
      buildDeployId: 'buildDeployId',
      dataSourceName: 'dataSourceName',
      generation: 'generation',
      indexName: 'indexName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildDeployId: 'number',
      dataSourceName: 'string',
      generation: 'string',
      indexName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverIndexResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverIndexResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecoverIndexResponseBody;
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
      body: RecoverIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReindexRequest extends $tea.Model {
  dataTimeSec?: number;
  ossDataPath?: string;
  partition?: string;
  static names(): { [key: string]: string } {
    return {
      dataTimeSec: 'dataTimeSec',
      ossDataPath: 'ossDataPath',
      partition: 'partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTimeSec: 'number',
      ossDataPath: 'string',
      partition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReindexResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReindexResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReindexResponseBody;
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
      body: ReindexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClusterResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveClusterResponseBody;
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
      body: RemoveClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameFolderRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
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

export class RenameFolderResponseBody extends $tea.Model {
  requestId?: string;
  result?: RenameFolderResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: RenameFolderResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameFolderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenameFolderResponseBody;
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
      body: RenameFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartIndexResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartIndexResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartIndexResponseBody;
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
      body: StartIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopIndexResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopIndexResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopIndexResponseBody;
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
      body: StopIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTaskResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopTaskResponseBody;
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
      body: StopTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
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
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tagKey: 'tagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesShrinkRequest extends $tea.Model {
  all?: boolean;
  resourceIdShrink?: string;
  resourceType?: string;
  tagKeyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      resourceIdShrink: 'resourceId',
      resourceType: 'resourceType',
      tagKeyShrink: 'tagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceIdShrink: 'string',
      resourceType: 'string',
      tagKeyShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  tequestId?: string;
  static names(): { [key: string]: string } {
    return {
      tequestId: 'tequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tequestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
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
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequest extends $tea.Model {
  components?: UpdateInstanceRequestComponents[];
  description?: string;
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      components: 'components',
      description: 'description',
      orderType: 'orderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: { 'type': 'array', 'itemType': UpdateInstanceRequestComponents },
      description: 'string',
      orderType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceResponseBody;
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
      body: UpdateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceContentRequest extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
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

export class UpdateSqlInstanceContentResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateSqlInstanceContentResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateSqlInstanceContentResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSqlInstanceContentResponseBody;
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
      body: UpdateSqlInstanceContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceNameRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
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

export class UpdateSqlInstanceNameResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateSqlInstanceNameResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateSqlInstanceNameResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSqlInstanceNameResponseBody;
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
      body: UpdateSqlInstanceNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceParamsRequest extends $tea.Model {
  combineParam?: { [key: string]: any };
  dynamicParam?: { [key: string]: any };
  kvpair?: { [key: string]: any };
  params?: { [key: string]: any };
  staticParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      combineParam: 'combineParam',
      dynamicParam: 'dynamicParam',
      kvpair: 'kvpair',
      params: 'params',
      staticParam: 'staticParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combineParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dynamicParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      kvpair: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      staticParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceParamsResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateSqlInstanceParamsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateSqlInstanceParamsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceParamsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSqlInstanceParamsResponseBody;
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
      body: UpdateSqlInstanceParamsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VariablesValueFuncValue extends $tea.Model {
  funcClassName?: string;
  template?: string;
  static names(): { [key: string]: string } {
    return {
      funcClassName: 'funcClassName',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      funcClassName: 'string',
      template: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigValueFilesConfig extends $tea.Model {
  content?: string;
  variables?: { [key: string]: ConfigValueFilesConfigVariablesValue };
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': ConfigValueFilesConfigVariablesValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigValueFiles extends $tea.Model {
  operateType?: string;
  parentFullPath?: string;
  fileName?: string;
  config?: ConfigValueFilesConfig;
  dirName?: string;
  static names(): { [key: string]: string } {
    return {
      operateType: 'operateType',
      parentFullPath: 'parentFullPath',
      fileName: 'fileName',
      config: 'config',
      dirName: 'dirName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateType: 'string',
      parentFullPath: 'string',
      fileName: 'string',
      config: ConfigValueFilesConfig,
      dirName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneSqlInstanceResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  instanceId?: number;
  isDir?: number;
  name?: string;
  parent?: number;
  templateId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      instanceId: 'instanceId',
      isDir: 'isDir',
      name: 'name',
      parent: 'parent',
      templateId: 'templateId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'number',
      isDir: 'number',
      name: 'string',
      parent: 'number',
      templateId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestDataNode extends $tea.Model {
  number?: number;
  partition?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'number',
      partition: 'partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'number',
      partition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestQueryNode extends $tea.Model {
  number?: number;
  static names(): { [key: string]: string } {
    return {
      number: 'number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequestConfig extends $tea.Model {
  accessKey?: string;
  accessSecret?: string;
  bucket?: string;
  endpoint?: string;
  namespace?: string;
  ossPath?: string;
  partition?: string;
  path?: string;
  project?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      endpoint: 'endpoint',
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      endpoint: 'string',
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequestSaroConfig extends $tea.Model {
  namespace?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  instanceId?: number;
  isDir?: number;
  name?: string;
  parent?: number;
  templateId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      instanceId: 'instanceId',
      isDir: 'isDir',
      name: 'name',
      parent: 'parent',
      templateId: 'templateId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'number',
      isDir: 'number',
      name: 'string',
      parent: 'number',
      templateId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexRequestDataSourceInfoConfig extends $tea.Model {
  accessKey?: string;
  accessSecret?: string;
  bucket?: string;
  endpoint?: string;
  namespace?: string;
  ossPath?: string;
  partition?: string;
  path?: string;
  project?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      endpoint: 'endpoint',
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      endpoint: 'string',
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexRequestDataSourceInfoSaroConfig extends $tea.Model {
  namespace?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexRequestDataSourceInfo extends $tea.Model {
  autoBuildIndex?: boolean;
  config?: CreateIndexRequestDataSourceInfoConfig;
  dataTimeSec?: number;
  domain?: string;
  name?: string;
  processParallelNum?: number;
  processPartitionCount?: number;
  saroConfig?: CreateIndexRequestDataSourceInfoSaroConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      config: 'config',
      dataTimeSec: 'dataTimeSec',
      domain: 'domain',
      name: 'name',
      processParallelNum: 'processParallelNum',
      processPartitionCount: 'processPartitionCount',
      saroConfig: 'saroConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      config: CreateIndexRequestDataSourceInfoConfig,
      dataTimeSec: 'number',
      domain: 'string',
      name: 'string',
      processParallelNum: 'number',
      processPartitionCount: 'number',
      saroConfig: CreateIndexRequestDataSourceInfoSaroConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestComponents extends $tea.Model {
  code?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestOrder extends $tea.Model {
  autoRenew?: boolean;
  duration?: number;
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'autoRenew',
      duration: 'duration',
      pricingCycle: 'pricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      duration: 'number',
      pricingCycle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyResult extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSqlInstanceResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  instanceId?: number;
  isDir?: number;
  name?: string;
  parent?: number;
  templateId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      instanceId: 'instanceId',
      isDir: 'isDir',
      name: 'name',
      parent: 'parent',
      templateId: 'templateId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'number',
      isDir: 'number',
      name: 'string',
      parent: 'number',
      templateId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestDataProcessConfigParamsSrcFieldConfig extends $tea.Model {
  ossBucket?: string;
  ossEndpoint?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ossBucket: 'ossBucket',
      ossEndpoint: 'ossEndpoint',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossBucket: 'string',
      ossEndpoint: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestDataProcessConfigParams extends $tea.Model {
  srcFieldConfig?: CreateTableRequestDataProcessConfigParamsSrcFieldConfig;
  vectorModal?: string;
  vectorModel?: string;
  static names(): { [key: string]: string } {
    return {
      srcFieldConfig: 'srcFieldConfig',
      vectorModal: 'vectorModal',
      vectorModel: 'vectorModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      srcFieldConfig: CreateTableRequestDataProcessConfigParamsSrcFieldConfig,
      vectorModal: 'string',
      vectorModel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestDataProcessConfig extends $tea.Model {
  dstField?: string;
  operator?: string;
  params?: CreateTableRequestDataProcessConfigParams;
  srcField?: string;
  static names(): { [key: string]: string } {
    return {
      dstField: 'dstField',
      operator: 'operator',
      params: 'params',
      srcField: 'srcField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstField: 'string',
      operator: 'string',
      params: CreateTableRequestDataProcessConfigParams,
      srcField: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestDataSourceConfig extends $tea.Model {
  accessKey?: string;
  accessSecret?: string;
  bucket?: string;
  endpoint?: string;
  ossPath?: string;
  partition?: string;
  project?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      endpoint: 'endpoint',
      ossPath: 'ossPath',
      partition: 'partition',
      project: 'project',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      endpoint: 'string',
      ossPath: 'string',
      partition: 'string',
      project: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestDataSource extends $tea.Model {
  autoBuildIndex?: boolean;
  config?: CreateTableRequestDataSourceConfig;
  dataTimeSec?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      config: 'config',
      dataTimeSec: 'dataTimeSec',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      config: CreateTableRequestDataSourceConfig,
      dataTimeSec: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestVectorIndexAdvanceParams extends $tea.Model {
  buildIndexParams?: string;
  linearBuildThreshold?: string;
  minScanDocCnt?: string;
  searchIndexParams?: string;
  static names(): { [key: string]: string } {
    return {
      buildIndexParams: 'buildIndexParams',
      linearBuildThreshold: 'linearBuildThreshold',
      minScanDocCnt: 'minScanDocCnt',
      searchIndexParams: 'searchIndexParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildIndexParams: 'string',
      linearBuildThreshold: 'string',
      minScanDocCnt: 'string',
      searchIndexParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestVectorIndex extends $tea.Model {
  advanceParams?: CreateTableRequestVectorIndexAdvanceParams;
  dimension?: string;
  distanceType?: string;
  indexName?: string;
  namespace?: string;
  sparseIndexField?: string;
  sparseValueField?: string;
  vectorField?: string;
  vectorIndexType?: string;
  static names(): { [key: string]: string } {
    return {
      advanceParams: 'advanceParams',
      dimension: 'dimension',
      distanceType: 'distanceType',
      indexName: 'indexName',
      namespace: 'namespace',
      sparseIndexField: 'sparseIndexField',
      sparseValueField: 'sparseValueField',
      vectorField: 'vectorField',
      vectorIndexType: 'vectorIndexType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanceParams: CreateTableRequestVectorIndexAdvanceParams,
      dimension: 'string',
      distanceType: 'string',
      indexName: 'string',
      namespace: 'string',
      sparseIndexField: 'string',
      sparseValueField: 'string',
      vectorField: 'string',
      vectorIndexType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderResponseBodyResult extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSqlInstanceResponseBodyResult extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyResult extends $tea.Model {
  endpoint?: string;
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
      localName: 'localName',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlInstanceResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  instanceId?: number;
  isDir?: number;
  name?: string;
  parent?: number;
  templateId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      instanceId: 'instanceId',
      isDir: 'isDir',
      name: 'name',
      parent: 'parent',
      templateId: 'templateId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'number',
      isDir: 'number',
      name: 'string',
      parent: 'number',
      templateId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvanceConfigResponseBodyResultFiles extends $tea.Model {
  fullPathName?: string;
  isDir?: boolean;
  isTemplate?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      fullPathName: 'fullPathName',
      isDir: 'isDir',
      isTemplate: 'isTemplate',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullPathName: 'string',
      isDir: 'boolean',
      isTemplate: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvanceConfigResponseBodyResult extends $tea.Model {
  content?: string;
  contentType?: string;
  desc?: string;
  files?: GetAdvanceConfigResponseBodyResultFiles[];
  name?: string;
  status?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentType: 'contentType',
      desc: 'desc',
      files: 'files',
      name: 'name',
      status: 'status',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      desc: 'string',
      files: { 'type': 'array', 'itemType': GetAdvanceConfigResponseBodyResultFiles },
      name: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvanceConfigFileResponseBodyResult extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
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

export class GetClusterResponseBodyResultDataNode extends $tea.Model {
  name?: string;
  number?: number;
  partition?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      number: 'number',
      partition: 'partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      number: 'number',
      partition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyResultQueryNode extends $tea.Model {
  name?: string;
  number?: number;
  partition?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      number: 'number',
      partition: 'partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      number: 'number',
      partition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyResult extends $tea.Model {
  config?: { [key: string]: {[key: string]: any} };
  configUpdateTime?: string;
  createTime?: string;
  currentAdvanceConfigVersion?: string;
  currentOnlineConfigVersion?: string;
  dataNode?: GetClusterResponseBodyResultDataNode;
  description?: string;
  latestAdvanceConfigVersion?: string;
  latestOnlineConfigVersion?: string;
  name?: string;
  queryNode?: GetClusterResponseBodyResultQueryNode;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      configUpdateTime: 'configUpdateTime',
      createTime: 'createTime',
      currentAdvanceConfigVersion: 'currentAdvanceConfigVersion',
      currentOnlineConfigVersion: 'currentOnlineConfigVersion',
      dataNode: 'dataNode',
      description: 'description',
      latestAdvanceConfigVersion: 'latestAdvanceConfigVersion',
      latestOnlineConfigVersion: 'latestOnlineConfigVersion',
      name: 'name',
      queryNode: 'queryNode',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      configUpdateTime: 'string',
      createTime: 'string',
      currentAdvanceConfigVersion: 'string',
      currentOnlineConfigVersion: 'string',
      dataNode: GetClusterResponseBodyResultDataNode,
      description: 'string',
      latestAdvanceConfigVersion: 'string',
      latestOnlineConfigVersion: 'string',
      name: 'string',
      queryNode: GetClusterResponseBodyResultQueryNode,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultDataNodesConfigStatusList extends $tea.Model {
  configUpdateTime?: string;
  donePercent?: number;
  doneSize?: number;
  name?: string;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      configUpdateTime: 'configUpdateTime',
      donePercent: 'donePercent',
      doneSize: 'doneSize',
      name: 'name',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configUpdateTime: 'string',
      donePercent: 'number',
      doneSize: 'number',
      name: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListAdvanceConfigInfo extends $tea.Model {
  configMetaName?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      configMetaName: 'configMetaName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMetaName: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListIndexConfigInfo extends $tea.Model {
  configMetaName?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      configMetaName: 'configMetaName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMetaName: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusList extends $tea.Model {
  advanceConfigInfo?: GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListAdvanceConfigInfo;
  deployFailedWorker?: string[];
  docSize?: number;
  donePercent?: number;
  doneSize?: number;
  errorMsg?: string;
  fullUpdateTime?: string;
  fullVersion?: number;
  incUpdateTime?: string;
  incVersion?: number;
  indexConfigInfo?: GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListIndexConfigInfo;
  indexSize?: number;
  lackDiskWorker?: string[];
  lackMemWorker?: string[];
  name?: string;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      advanceConfigInfo: 'advanceConfigInfo',
      deployFailedWorker: 'deployFailedWorker',
      docSize: 'docSize',
      donePercent: 'donePercent',
      doneSize: 'doneSize',
      errorMsg: 'errorMsg',
      fullUpdateTime: 'fullUpdateTime',
      fullVersion: 'fullVersion',
      incUpdateTime: 'incUpdateTime',
      incVersion: 'incVersion',
      indexConfigInfo: 'indexConfigInfo',
      indexSize: 'indexSize',
      lackDiskWorker: 'lackDiskWorker',
      lackMemWorker: 'lackMemWorker',
      name: 'name',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanceConfigInfo: GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListAdvanceConfigInfo,
      deployFailedWorker: { 'type': 'array', 'itemType': 'string' },
      docSize: 'number',
      donePercent: 'number',
      doneSize: 'number',
      errorMsg: 'string',
      fullUpdateTime: 'string',
      fullVersion: 'number',
      incUpdateTime: 'string',
      incVersion: 'number',
      indexConfigInfo: GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListIndexConfigInfo,
      indexSize: 'number',
      lackDiskWorker: { 'type': 'array', 'itemType': 'string' },
      lackMemWorker: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultDataNodesServiceStatus extends $tea.Model {
  donePercent?: number;
  doneSize?: number;
  name?: string;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      donePercent: 'donePercent',
      doneSize: 'doneSize',
      name: 'name',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      donePercent: 'number',
      doneSize: 'number',
      name: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultDataNodes extends $tea.Model {
  configStatusList?: GetClusterRunTimeInfoResponseBodyResultDataNodesConfigStatusList[];
  dataStatusList?: GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusList[];
  serviceStatus?: GetClusterRunTimeInfoResponseBodyResultDataNodesServiceStatus;
  static names(): { [key: string]: string } {
    return {
      configStatusList: 'configStatusList',
      dataStatusList: 'dataStatusList',
      serviceStatus: 'serviceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configStatusList: { 'type': 'array', 'itemType': GetClusterRunTimeInfoResponseBodyResultDataNodesConfigStatusList },
      dataStatusList: { 'type': 'array', 'itemType': GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusList },
      serviceStatus: GetClusterRunTimeInfoResponseBodyResultDataNodesServiceStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultQueryNodeConfigStatusList extends $tea.Model {
  configUpdateTime?: string;
  donePercent?: number;
  doneSize?: number;
  name?: string;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      configUpdateTime: 'configUpdateTime',
      donePercent: 'donePercent',
      doneSize: 'doneSize',
      name: 'name',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configUpdateTime: 'string',
      donePercent: 'number',
      doneSize: 'number',
      name: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultQueryNodeServiceStatus extends $tea.Model {
  donePercent?: number;
  doneSize?: number;
  name?: string;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      donePercent: 'donePercent',
      doneSize: 'doneSize',
      name: 'name',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      donePercent: 'number',
      doneSize: 'number',
      name: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultQueryNode extends $tea.Model {
  configStatusList?: GetClusterRunTimeInfoResponseBodyResultQueryNodeConfigStatusList[];
  serviceStatus?: GetClusterRunTimeInfoResponseBodyResultQueryNodeServiceStatus;
  static names(): { [key: string]: string } {
    return {
      configStatusList: 'configStatusList',
      serviceStatus: 'serviceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configStatusList: { 'type': 'array', 'itemType': GetClusterRunTimeInfoResponseBodyResultQueryNodeConfigStatusList },
      serviceStatus: GetClusterRunTimeInfoResponseBodyResultQueryNodeServiceStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResult extends $tea.Model {
  clusterName?: string;
  dataNodes?: GetClusterRunTimeInfoResponseBodyResultDataNodes[];
  queryNode?: GetClusterRunTimeInfoResponseBodyResultQueryNode;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'clusterName',
      dataNodes: 'dataNodes',
      queryNode: 'queryNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      dataNodes: { 'type': 'array', 'itemType': GetClusterRunTimeInfoResponseBodyResultDataNodes },
      queryNode: GetClusterRunTimeInfoResponseBodyResultQueryNode,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceResponseBodyResult extends $tea.Model {
  domain?: string;
  indexes?: string[];
  lastFulTime?: number;
  name?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      indexes: 'indexes',
      lastFulTime: 'lastFulTime',
      name: 'name',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      indexes: { 'type': 'array', 'itemType': 'string' },
      lastFulTime: 'number',
      name: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponseBodyResultExtendHdfs extends $tea.Model {
  path?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponseBodyResultExtendOdps extends $tea.Model {
  partitions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      partitions: 'partitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponseBodyResultExtendOss extends $tea.Model {
  path?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponseBodyResultExtendSaro extends $tea.Model {
  path?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'path',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponseBodyResultExtend extends $tea.Model {
  hdfs?: GetDataSourceDeployResponseBodyResultExtendHdfs;
  odps?: GetDataSourceDeployResponseBodyResultExtendOdps;
  oss?: GetDataSourceDeployResponseBodyResultExtendOss;
  saro?: GetDataSourceDeployResponseBodyResultExtendSaro;
  static names(): { [key: string]: string } {
    return {
      hdfs: 'hdfs',
      odps: 'odps',
      oss: 'oss',
      saro: 'saro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hdfs: GetDataSourceDeployResponseBodyResultExtendHdfs,
      odps: GetDataSourceDeployResponseBodyResultExtendOdps,
      oss: GetDataSourceDeployResponseBodyResultExtendOss,
      saro: GetDataSourceDeployResponseBodyResultExtendSaro,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponseBodyResultProcessor extends $tea.Model {
  args?: string;
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      resource: 'resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      resource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponseBodyResultStorage extends $tea.Model {
  accessKey?: string;
  accessSecret?: string;
  bucket?: string;
  endpoint?: string;
  namespace?: string;
  ossPath?: string;
  partition?: string;
  path?: string;
  project?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      endpoint: 'endpoint',
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      endpoint: 'string',
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponseBodyResultSwift extends $tea.Model {
  topic?: string;
  zk?: string;
  static names(): { [key: string]: string } {
    return {
      topic: 'topic',
      zk: 'zk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      zk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponseBodyResult extends $tea.Model {
  autoBuildIndex?: boolean;
  extend?: GetDataSourceDeployResponseBodyResultExtend;
  processor?: GetDataSourceDeployResponseBodyResultProcessor;
  storage?: GetDataSourceDeployResponseBodyResultStorage;
  swift?: GetDataSourceDeployResponseBodyResultSwift;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      extend: 'extend',
      processor: 'processor',
      storage: 'storage',
      swift: 'swift',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      extend: GetDataSourceDeployResponseBodyResultExtend,
      processor: GetDataSourceDeployResponseBodyResultProcessor,
      storage: GetDataSourceDeployResponseBodyResultStorage,
      swift: GetDataSourceDeployResponseBodyResultSwift,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseSchemaResponseBodyResult extends $tea.Model {
  fieldName?: string;
  fieldType?: string;
  fieldTypeDetail?: { [key: string]: any };
  indexName?: string;
  indexType?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'fieldName',
      fieldType: 'fieldType',
      fieldTypeDetail: 'fieldTypeDetail',
      indexName: 'indexName',
      indexType: 'indexType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldType: 'string',
      fieldTypeDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      indexName: 'string',
      indexType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponseBodyResultGraphIndexMetas extends $tea.Model {
  domainName?: string;
  name?: string;
  tableDeployId?: number;
  tableName?: string;
  tag?: string;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'domainName',
      name: 'name',
      tableDeployId: 'tableDeployId',
      tableName: 'tableName',
      tag: 'tag',
      zoneName: 'zoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      name: 'string',
      tableDeployId: 'number',
      tableName: 'string',
      tag: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponseBodyResultGraphOnlineMaster extends $tea.Model {
  domainName?: string;
  hippoId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'domainName',
      hippoId: 'hippoId',
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      hippoId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponseBodyResultGraphTableMetas extends $tea.Model {
  buildDeployId?: number;
  domainName?: string;
  name?: string;
  tableDeployId?: number;
  tag?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      buildDeployId: 'buildDeployId',
      domainName: 'domainName',
      name: 'name',
      tableDeployId: 'tableDeployId',
      tag: 'tag',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildDeployId: 'number',
      domainName: 'string',
      name: 'string',
      tableDeployId: 'number',
      tag: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponseBodyResultGraphZoneMetas extends $tea.Model {
  domainInfo?: string;
  name?: string;
  suezAdminName?: string;
  tag?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainInfo: 'domainInfo',
      name: 'name',
      suezAdminName: 'suezAdminName',
      tag: 'tag',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfo: 'string',
      name: 'string',
      suezAdminName: 'string',
      tag: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponseBodyResultGraph extends $tea.Model {
  indexMetas?: GetDeployGraphResponseBodyResultGraphIndexMetas[];
  onlineMaster?: GetDeployGraphResponseBodyResultGraphOnlineMaster[];
  tableIndexRelation?: { [key: string]: string[] };
  tableMetas?: GetDeployGraphResponseBodyResultGraphTableMetas[];
  zoneIndexRelation?: { [key: string]: string[] };
  zoneMetas?: GetDeployGraphResponseBodyResultGraphZoneMetas[];
  static names(): { [key: string]: string } {
    return {
      indexMetas: 'indexMetas',
      onlineMaster: 'onlineMaster',
      tableIndexRelation: 'tableIndexRelation',
      tableMetas: 'tableMetas',
      zoneIndexRelation: 'zoneIndexRelation',
      zoneMetas: 'zoneMetas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexMetas: { 'type': 'array', 'itemType': GetDeployGraphResponseBodyResultGraphIndexMetas },
      onlineMaster: { 'type': 'array', 'itemType': GetDeployGraphResponseBodyResultGraphOnlineMaster },
      tableIndexRelation: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      tableMetas: { 'type': 'array', 'itemType': GetDeployGraphResponseBodyResultGraphTableMetas },
      zoneIndexRelation: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      zoneMetas: { 'type': 'array', 'itemType': GetDeployGraphResponseBodyResultGraphZoneMetas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponseBodyResult extends $tea.Model {
  graph?: GetDeployGraphResponseBodyResultGraph;
  static names(): { [key: string]: string } {
    return {
      graph: 'graph',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graph: GetDeployGraphResponseBodyResultGraph,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseBodyResult extends $tea.Model {
  content?: string;
  dataSource?: string;
  fullPathName?: string;
  isDir?: boolean;
  name?: string;
  partition?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      dataSource: 'dataSource',
      fullPathName: 'fullPathName',
      isDir: 'isDir',
      name: 'name',
      partition: 'partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      dataSource: 'string',
      fullPathName: 'string',
      isDir: 'boolean',
      name: 'string',
      partition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponseBodyResultDataSourceInfoConfig extends $tea.Model {
  accessKey?: string;
  accessSecret?: string;
  bucket?: string;
  endpoint?: string;
  namespace?: string;
  ossPath?: string;
  partition?: string;
  path?: string;
  project?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      endpoint: 'endpoint',
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      endpoint: 'string',
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponseBodyResultDataSourceInfoSaroConfig extends $tea.Model {
  namespace?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponseBodyResultDataSourceInfo extends $tea.Model {
  autoBuildIndex?: boolean;
  config?: GetIndexResponseBodyResultDataSourceInfoConfig;
  domain?: string;
  name?: string;
  processParallelNum?: number;
  processPartitionCount?: number;
  saroConfig?: GetIndexResponseBodyResultDataSourceInfoSaroConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      config: 'config',
      domain: 'domain',
      name: 'name',
      processParallelNum: 'processParallelNum',
      processPartitionCount: 'processPartitionCount',
      saroConfig: 'saroConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      config: GetIndexResponseBodyResultDataSourceInfoConfig,
      domain: 'string',
      name: 'string',
      processParallelNum: 'number',
      processPartitionCount: 'number',
      saroConfig: GetIndexResponseBodyResultDataSourceInfoSaroConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponseBodyResultVersionsFiles extends $tea.Model {
  fullPathName?: string;
  isDir?: boolean;
  isTemplate?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      fullPathName: 'fullPathName',
      isDir: 'isDir',
      isTemplate: 'isTemplate',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullPathName: 'string',
      isDir: 'boolean',
      isTemplate: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponseBodyResultVersions extends $tea.Model {
  desc?: string;
  files?: GetIndexResponseBodyResultVersionsFiles[];
  name?: string;
  status?: string;
  updateTime?: number;
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      files: 'files',
      name: 'name',
      status: 'status',
      updateTime: 'updateTime',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      files: { 'type': 'array', 'itemType': GetIndexResponseBodyResultVersionsFiles },
      name: 'string',
      status: 'string',
      updateTime: 'number',
      versionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponseBodyResult extends $tea.Model {
  cluster?: { [key: string]: ResultClusterValue };
  config?: { [key: string]: {[key: string]: any} };
  configWhenBuild?: { [key: string]: {[key: string]: any} };
  content?: string;
  dataSource?: string;
  dataSourceInfo?: GetIndexResponseBodyResultDataSourceInfo;
  description?: string;
  domain?: string;
  fullUpdateTime?: string;
  fullVersion?: number;
  incUpdateTime?: string;
  indexSize?: number;
  indexStatus?: string;
  name?: string;
  partition?: number;
  versions?: GetIndexResponseBodyResultVersions[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      config: 'config',
      configWhenBuild: 'configWhenBuild',
      content: 'content',
      dataSource: 'dataSource',
      dataSourceInfo: 'dataSourceInfo',
      description: 'description',
      domain: 'domain',
      fullUpdateTime: 'fullUpdateTime',
      fullVersion: 'fullVersion',
      incUpdateTime: 'incUpdateTime',
      indexSize: 'indexSize',
      indexStatus: 'indexStatus',
      name: 'name',
      partition: 'partition',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'map', 'keyType': 'string', 'valueType': ResultClusterValue },
      config: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      configWhenBuild: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      content: 'string',
      dataSource: 'string',
      dataSourceInfo: GetIndexResponseBodyResultDataSourceInfo,
      description: 'string',
      domain: 'string',
      fullUpdateTime: 'string',
      fullVersion: 'number',
      incUpdateTime: 'string',
      indexSize: 'number',
      indexStatus: 'string',
      name: 'string',
      partition: 'number',
      versions: { 'type': 'array', 'itemType': GetIndexResponseBodyResultVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexOnlineStrategyResponseBodyResult extends $tea.Model {
  changeRate?: number;
  static names(): { [key: string]: string } {
    return {
      changeRate: 'changeRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexVersionResponseBodyResultIndexVersions extends $tea.Model {
  buildDeployId?: string;
  currentVersion?: number;
  indexName?: string;
  versions?: number[];
  static names(): { [key: string]: string } {
    return {
      buildDeployId: 'buildDeployId',
      currentVersion: 'currentVersion',
      indexName: 'indexName',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildDeployId: 'string',
      currentVersion: 'number',
      indexName: 'string',
      versions: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexVersionResponseBodyResult extends $tea.Model {
  cluster?: string;
  indexVersions?: GetIndexVersionResponseBodyResultIndexVersions[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      indexVersions: 'indexVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      indexVersions: { 'type': 'array', 'itemType': GetIndexVersionResponseBodyResultIndexVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyResultTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class GetInstanceResponseBodyResult extends $tea.Model {
  chargeType?: string;
  commodityCode?: string;
  createTime?: string;
  description?: string;
  expiredTime?: string;
  inDebt?: boolean;
  instanceId?: string;
  lockMode?: string;
  resourceGroupId?: string;
  status?: string;
  tags?: GetInstanceResponseBodyResultTags[];
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      createTime: 'createTime',
      description: 'description',
      expiredTime: 'expiredTime',
      inDebt: 'inDebt',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
      tags: 'tags',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      createTime: 'string',
      description: 'string',
      expiredTime: 'string',
      inDebt: 'boolean',
      instanceId: 'string',
      lockMode: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetInstanceResponseBodyResultTags },
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeConfigResponseBodyResult extends $tea.Model {
  active?: boolean;
  dataDuplicateNumber?: number;
  dataFragmentNumber?: number;
  flowRatio?: number;
  minServicePercent?: number;
  published?: boolean;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      dataDuplicateNumber: 'dataDuplicateNumber',
      dataFragmentNumber: 'dataFragmentNumber',
      flowRatio: 'flowRatio',
      minServicePercent: 'minServicePercent',
      published: 'published',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      dataDuplicateNumber: 'number',
      dataFragmentNumber: 'number',
      flowRatio: 'number',
      minServicePercent: 'number',
      published: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlInstanceResponseBodyResult extends $tea.Model {
  combineParams?: string;
  comment?: string;
  content?: string;
  dynamicParams?: string;
  gmtCreate?: string;
  gmtModified?: string;
  instanceId?: number;
  kvpairs?: string;
  relatedTemplateId?: number;
  staticParams?: string;
  templateParams?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      combineParams: 'combineParams',
      comment: 'comment',
      content: 'content',
      dynamicParams: 'dynamicParams',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      instanceId: 'instanceId',
      kvpairs: 'kvpairs',
      relatedTemplateId: 'relatedTemplateId',
      staticParams: 'staticParams',
      templateParams: 'templateParams',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combineParams: 'string',
      comment: 'string',
      content: 'string',
      dynamicParams: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      instanceId: 'number',
      kvpairs: 'string',
      relatedTemplateId: 'number',
      staticParams: 'string',
      templateParams: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyResultDataProcessConfigParamsSrcFieldConfig extends $tea.Model {
  ossBucket?: string;
  ossEndpoint?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ossBucket: 'ossBucket',
      ossEndpoint: 'ossEndpoint',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossBucket: 'string',
      ossEndpoint: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyResultDataProcessConfigParams extends $tea.Model {
  srcFieldConfig?: GetTableResponseBodyResultDataProcessConfigParamsSrcFieldConfig;
  vectorModal?: string;
  vectorModel?: string;
  static names(): { [key: string]: string } {
    return {
      srcFieldConfig: 'srcFieldConfig',
      vectorModal: 'vectorModal',
      vectorModel: 'vectorModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      srcFieldConfig: GetTableResponseBodyResultDataProcessConfigParamsSrcFieldConfig,
      vectorModal: 'string',
      vectorModel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyResultDataProcessConfig extends $tea.Model {
  dstField?: string;
  operator?: string;
  params?: GetTableResponseBodyResultDataProcessConfigParams;
  srcField?: string;
  static names(): { [key: string]: string } {
    return {
      dstField: 'dstField',
      operator: 'operator',
      params: 'params',
      srcField: 'srcField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstField: 'string',
      operator: 'string',
      params: GetTableResponseBodyResultDataProcessConfigParams,
      srcField: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyResultDataSourceConfig extends $tea.Model {
  accessKey?: string;
  accessSecret?: string;
  bucket?: string;
  endpoint?: string;
  namespace?: string;
  ossPath?: string;
  partition?: string;
  path?: string;
  project?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      endpoint: 'endpoint',
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      endpoint: 'string',
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyResultDataSource extends $tea.Model {
  autoBuildIndex?: boolean;
  config?: GetTableResponseBodyResultDataSourceConfig;
  dataTimeSec?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      config: 'config',
      dataTimeSec: 'dataTimeSec',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      config: GetTableResponseBodyResultDataSourceConfig,
      dataTimeSec: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyResultVectorIndexAdvanceParams extends $tea.Model {
  buildIndexParams?: string;
  linearBuildThreshold?: string;
  minScanDocCnt?: string;
  searchIndexParams?: string;
  static names(): { [key: string]: string } {
    return {
      buildIndexParams: 'buildIndexParams',
      linearBuildThreshold: 'linearBuildThreshold',
      minScanDocCnt: 'minScanDocCnt',
      searchIndexParams: 'searchIndexParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildIndexParams: 'string',
      linearBuildThreshold: 'string',
      minScanDocCnt: 'string',
      searchIndexParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyResultVectorIndex extends $tea.Model {
  advanceParams?: GetTableResponseBodyResultVectorIndexAdvanceParams;
  dimension?: string;
  distanceType?: string;
  indexName?: string;
  namespace?: string;
  sparseIndexField?: string;
  sparseValueField?: string;
  vectorField?: string;
  vectorIndexType?: string;
  static names(): { [key: string]: string } {
    return {
      advanceParams: 'advanceParams',
      dimension: 'dimension',
      distanceType: 'distanceType',
      indexName: 'indexName',
      namespace: 'namespace',
      sparseIndexField: 'sparseIndexField',
      sparseValueField: 'sparseValueField',
      vectorField: 'vectorField',
      vectorIndexType: 'vectorIndexType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanceParams: GetTableResponseBodyResultVectorIndexAdvanceParams,
      dimension: 'string',
      distanceType: 'string',
      indexName: 'string',
      namespace: 'string',
      sparseIndexField: 'string',
      sparseValueField: 'string',
      vectorField: 'string',
      vectorIndexType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyResult extends $tea.Model {
  dataProcessConfig?: GetTableResponseBodyResultDataProcessConfig[];
  dataProcessorCount?: number;
  dataSource?: GetTableResponseBodyResultDataSource;
  fieldSchema?: { [key: string]: string };
  name?: string;
  partitionCount?: number;
  primaryKey?: string;
  rawSchema?: string;
  status?: string;
  vectorIndex?: GetTableResponseBodyResultVectorIndex[];
  static names(): { [key: string]: string } {
    return {
      dataProcessConfig: 'dataProcessConfig',
      dataProcessorCount: 'dataProcessorCount',
      dataSource: 'dataSource',
      fieldSchema: 'fieldSchema',
      name: 'name',
      partitionCount: 'partitionCount',
      primaryKey: 'primaryKey',
      rawSchema: 'rawSchema',
      status: 'status',
      vectorIndex: 'vectorIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataProcessConfig: { 'type': 'array', 'itemType': GetTableResponseBodyResultDataProcessConfig },
      dataProcessorCount: 'number',
      dataSource: GetTableResponseBodyResultDataSource,
      fieldSchema: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      partitionCount: 'number',
      primaryKey: 'string',
      rawSchema: 'string',
      status: 'string',
      vectorIndex: { 'type': 'array', 'itemType': GetTableResponseBodyResultVectorIndex },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableGenerationResponseBodyResult extends $tea.Model {
  generationId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      generationId: 'generationId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generationId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvanceConfigDirResponseBodyResult extends $tea.Model {
  fullPathName?: string;
  isDir?: boolean;
  isTemplate?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      fullPathName: 'fullPathName',
      isDir: 'isDir',
      isTemplate: 'isTemplate',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullPathName: 'string',
      isDir: 'boolean',
      isTemplate: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvanceConfigsResponseBodyResultFiles extends $tea.Model {
  fullPathName?: string;
  isDir?: boolean;
  isTemplate?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      fullPathName: 'fullPathName',
      isDir: 'isDir',
      isTemplate: 'isTemplate',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullPathName: 'string',
      isDir: 'boolean',
      isTemplate: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvanceConfigsResponseBodyResult extends $tea.Model {
  advanceConfigType?: string;
  content?: string;
  contentType?: string;
  creator?: string;
  desc?: string;
  files?: ListAdvanceConfigsResponseBodyResultFiles[];
  name?: string;
  status?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      advanceConfigType: 'advanceConfigType',
      content: 'content',
      contentType: 'contentType',
      creator: 'creator',
      desc: 'desc',
      files: 'files',
      name: 'name',
      status: 'status',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanceConfigType: 'string',
      content: 'string',
      contentType: 'string',
      creator: 'string',
      desc: 'string',
      files: { 'type': 'array', 'itemType': ListAdvanceConfigsResponseBodyResultFiles },
      name: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNamesResponseBodyResult extends $tea.Model {
  description?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTasksResponseBodyResultTags extends $tea.Model {
  msg?: string;
  tagLevel?: string;
  static names(): { [key: string]: string } {
    return {
      msg: 'msg',
      tagLevel: 'tagLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      tagLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTasksResponseBodyResultTaskNodes extends $tea.Model {
  finishDate?: string;
  index?: number;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      finishDate: 'finishDate',
      index: 'index',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishDate: 'string',
      index: 'number',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTasksResponseBodyResult extends $tea.Model {
  extraAttribute?: string;
  field3?: string;
  fsmId?: string;
  groupType?: string;
  name?: string;
  status?: string;
  tags?: ListClusterTasksResponseBodyResultTags[];
  taskNodes?: ListClusterTasksResponseBodyResultTaskNodes[];
  time?: string;
  type?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      extraAttribute: 'extraAttribute',
      field3: 'field3',
      fsmId: 'fsmId',
      groupType: 'groupType',
      name: 'name',
      status: 'status',
      tags: 'tags',
      taskNodes: 'taskNodes',
      time: 'time',
      type: 'type',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraAttribute: 'string',
      field3: 'string',
      fsmId: 'string',
      groupType: 'string',
      name: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListClusterTasksResponseBodyResultTags },
      taskNodes: { 'type': 'array', 'itemType': ListClusterTasksResponseBodyResultTaskNodes },
      time: 'string',
      type: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyResultDataNode extends $tea.Model {
  name?: string;
  number?: number;
  partition?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      number: 'number',
      partition: 'partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      number: 'number',
      partition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyResultQueryNode extends $tea.Model {
  name?: string;
  number?: number;
  partition?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      number: 'number',
      partition: 'partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      number: 'number',
      partition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyResult extends $tea.Model {
  config?: { [key: string]: {[key: string]: any} };
  configUpdateTime?: string;
  createTime?: string;
  currentAdvanceConfigVersion?: string;
  currentOfflineDictConfigVersion?: string;
  currentOnlineConfigVersion?: string;
  currentOnlineQueryConfigVersion?: string;
  dataNode?: ListClustersResponseBodyResultDataNode;
  description?: string;
  latestAdvanceConfigVersion?: string;
  latestOfflineDictConfigVersion?: string;
  latestOnlineConfigVersion?: string;
  latestOnlineQueryConfigVersion?: string;
  name?: string;
  queryNode?: ListClustersResponseBodyResultQueryNode;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      configUpdateTime: 'configUpdateTime',
      createTime: 'createTime',
      currentAdvanceConfigVersion: 'currentAdvanceConfigVersion',
      currentOfflineDictConfigVersion: 'currentOfflineDictConfigVersion',
      currentOnlineConfigVersion: 'currentOnlineConfigVersion',
      currentOnlineQueryConfigVersion: 'currentOnlineQueryConfigVersion',
      dataNode: 'dataNode',
      description: 'description',
      latestAdvanceConfigVersion: 'latestAdvanceConfigVersion',
      latestOfflineDictConfigVersion: 'latestOfflineDictConfigVersion',
      latestOnlineConfigVersion: 'latestOnlineConfigVersion',
      latestOnlineQueryConfigVersion: 'latestOnlineQueryConfigVersion',
      name: 'name',
      queryNode: 'queryNode',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      configUpdateTime: 'string',
      createTime: 'string',
      currentAdvanceConfigVersion: 'string',
      currentOfflineDictConfigVersion: 'string',
      currentOnlineConfigVersion: 'string',
      currentOnlineQueryConfigVersion: 'string',
      dataNode: ListClustersResponseBodyResultDataNode,
      description: 'string',
      latestAdvanceConfigVersion: 'string',
      latestOfflineDictConfigVersion: 'string',
      latestOnlineConfigVersion: 'string',
      latestOnlineQueryConfigVersion: 'string',
      name: 'string',
      queryNode: ListClustersResponseBodyResultQueryNode,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceSchemasResponseBodyResultPrimaryKey extends $tea.Model {
  hasPrimaryKeyAttribute?: boolean;
  isPrimaryKey?: boolean;
  isPrimaryKeySorted?: boolean;
  static names(): { [key: string]: string } {
    return {
      hasPrimaryKeyAttribute: 'hasPrimaryKeyAttribute',
      isPrimaryKey: 'isPrimaryKey',
      isPrimaryKeySorted: 'isPrimaryKeySorted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPrimaryKeyAttribute: 'boolean',
      isPrimaryKey: 'boolean',
      isPrimaryKeySorted: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceSchemasResponseBodyResult extends $tea.Model {
  addIndex?: boolean;
  attribute?: boolean;
  custom?: boolean;
  name?: string;
  primaryKey?: ListDataSourceSchemasResponseBodyResultPrimaryKey;
  summary?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      addIndex: 'addIndex',
      attribute: 'attribute',
      custom: 'custom',
      name: 'name',
      primaryKey: 'primaryKey',
      summary: 'summary',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addIndex: 'boolean',
      attribute: 'boolean',
      custom: 'boolean',
      name: 'string',
      primaryKey: ListDataSourceSchemasResponseBodyResultPrimaryKey,
      summary: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTasksResponseBodyResultTags extends $tea.Model {
  msg?: string;
  tagLevel?: string;
  static names(): { [key: string]: string } {
    return {
      msg: 'msg',
      tagLevel: 'tagLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      tagLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTasksResponseBodyResultTaskNodes extends $tea.Model {
  finishDate?: string;
  index?: number;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      finishDate: 'finishDate',
      index: 'index',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishDate: 'string',
      index: 'number',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTasksResponseBodyResult extends $tea.Model {
  extraAttribute?: string;
  field3?: string;
  fsmId?: string;
  groupType?: string;
  name?: string;
  status?: string;
  tags?: ListDataSourceTasksResponseBodyResultTags[];
  taskNodes?: ListDataSourceTasksResponseBodyResultTaskNodes[];
  time?: string;
  type?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      extraAttribute: 'extraAttribute',
      field3: 'field3',
      fsmId: 'fsmId',
      groupType: 'groupType',
      name: 'name',
      status: 'status',
      tags: 'tags',
      taskNodes: 'taskNodes',
      time: 'time',
      type: 'type',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraAttribute: 'string',
      field3: 'string',
      fsmId: 'string',
      groupType: 'string',
      name: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListDataSourceTasksResponseBodyResultTags },
      taskNodes: { 'type': 'array', 'itemType': ListDataSourceTasksResponseBodyResultTaskNodes },
      time: 'string',
      type: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBodyResult extends $tea.Model {
  domain?: string;
  indexes?: string[];
  lastFulTime?: number;
  name?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      indexes: 'indexes',
      lastFulTime: 'lastFulTime',
      name: 'name',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      indexes: { 'type': 'array', 'itemType': 'string' },
      lastFulTime: 'number',
      name: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBodyResultDatabasesSqlInstances extends $tea.Model {
  children?: any[];
  id?: number;
  instanceId?: number;
  isDir?: number;
  name?: string;
  parent?: number;
  templateId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      id: 'id',
      instanceId: 'instanceId',
      isDir: 'isDir',
      name: 'name',
      parent: 'parent',
      templateId: 'templateId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': 'any' },
      id: 'number',
      instanceId: 'number',
      isDir: 'number',
      name: 'string',
      parent: 'number',
      templateId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBodyResultDatabasesTables extends $tea.Model {
  children?: any[];
  id?: number;
  instanceId?: number;
  isDir?: number;
  name?: string;
  parent?: number;
  templateId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      id: 'id',
      instanceId: 'instanceId',
      isDir: 'isDir',
      name: 'name',
      parent: 'parent',
      templateId: 'templateId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': 'any' },
      id: 'number',
      instanceId: 'number',
      isDir: 'number',
      name: 'string',
      parent: 'number',
      templateId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBodyResultDatabasesTemplates extends $tea.Model {
  children?: any[];
  id?: number;
  instanceId?: number;
  isDir?: number;
  name?: string;
  parent?: number;
  templateId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      id: 'id',
      instanceId: 'instanceId',
      isDir: 'isDir',
      name: 'name',
      parent: 'parent',
      templateId: 'templateId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': 'any' },
      id: 'number',
      instanceId: 'number',
      isDir: 'number',
      name: 'string',
      parent: 'number',
      templateId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBodyResultDatabases extends $tea.Model {
  database?: string;
  functions?: { [key: string]: ResultDatabasesFunctionsValue[] };
  sqlInstances?: ListDatabasesResponseBodyResultDatabasesSqlInstances[];
  tables?: ListDatabasesResponseBodyResultDatabasesTables[];
  templates?: ListDatabasesResponseBodyResultDatabasesTemplates[];
  static names(): { [key: string]: string } {
    return {
      database: 'database',
      functions: 'functions',
      sqlInstances: 'sqlInstances',
      tables: 'tables',
      templates: 'templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      functions: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ResultDatabasesFunctionsValue } },
      sqlInstances: { 'type': 'array', 'itemType': ListDatabasesResponseBodyResultDatabasesSqlInstances },
      tables: { 'type': 'array', 'itemType': ListDatabasesResponseBodyResultDatabasesTables },
      templates: { 'type': 'array', 'itemType': ListDatabasesResponseBodyResultDatabasesTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBodyResult extends $tea.Model {
  databases?: ListDatabasesResponseBodyResultDatabases[];
  static names(): { [key: string]: string } {
    return {
      databases: 'databases',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': ListDatabasesResponseBodyResultDatabases },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDateSourceGenerationsResponseBodyResult extends $tea.Model {
  buildDeployId?: number;
  createTime?: number;
  dataDumpRoot?: string;
  generation?: number;
  partition?: { [key: string]: number };
  status?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      buildDeployId: 'buildDeployId',
      createTime: 'createTime',
      dataDumpRoot: 'dataDumpRoot',
      generation: 'generation',
      partition: 'partition',
      status: 'status',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildDeployId: 'number',
      createTime: 'number',
      dataDumpRoot: 'string',
      generation: 'number',
      partition: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      status: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponseBodyResultDataSourceInfoConfig extends $tea.Model {
  accessKey?: string;
  accessSecret?: string;
  bucket?: string;
  endpoint?: string;
  namespace?: string;
  ossPath?: string;
  partition?: string;
  path?: string;
  project?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      endpoint: 'endpoint',
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      endpoint: 'string',
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponseBodyResultDataSourceInfoSaroConfig extends $tea.Model {
  namespace?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponseBodyResultDataSourceInfo extends $tea.Model {
  autoBuildIndex?: boolean;
  config?: ListIndexesResponseBodyResultDataSourceInfoConfig;
  domain?: string;
  name?: string;
  processPartitionCount?: number;
  saroConfig?: ListIndexesResponseBodyResultDataSourceInfoSaroConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      config: 'config',
      domain: 'domain',
      name: 'name',
      processPartitionCount: 'processPartitionCount',
      saroConfig: 'saroConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      config: ListIndexesResponseBodyResultDataSourceInfoConfig,
      domain: 'string',
      name: 'string',
      processPartitionCount: 'number',
      saroConfig: ListIndexesResponseBodyResultDataSourceInfoSaroConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponseBodyResultVersionsFiles extends $tea.Model {
  fullPathName?: string;
  isDir?: boolean;
  isTemplate?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      fullPathName: 'fullPathName',
      isDir: 'isDir',
      isTemplate: 'isTemplate',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullPathName: 'string',
      isDir: 'boolean',
      isTemplate: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponseBodyResultVersions extends $tea.Model {
  desc?: string;
  files?: ListIndexesResponseBodyResultVersionsFiles[];
  name?: string;
  status?: string;
  updateTime?: number;
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      files: 'files',
      name: 'name',
      status: 'status',
      updateTime: 'updateTime',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      files: { 'type': 'array', 'itemType': ListIndexesResponseBodyResultVersionsFiles },
      name: 'string',
      status: 'string',
      updateTime: 'number',
      versionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponseBodyResult extends $tea.Model {
  content?: string;
  dataSource?: string;
  dataSourceInfo?: ListIndexesResponseBodyResultDataSourceInfo;
  description?: string;
  domain?: string;
  fullUpdateTime?: string;
  fullVersion?: number;
  incUpdateTime?: string;
  indexSize?: number;
  indexStatus?: string;
  name?: string;
  partition?: number;
  versions?: ListIndexesResponseBodyResultVersions[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      dataSource: 'dataSource',
      dataSourceInfo: 'dataSourceInfo',
      description: 'description',
      domain: 'domain',
      fullUpdateTime: 'fullUpdateTime',
      fullVersion: 'fullVersion',
      incUpdateTime: 'incUpdateTime',
      indexSize: 'indexSize',
      indexStatus: 'indexStatus',
      name: 'name',
      partition: 'partition',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      dataSource: 'string',
      dataSourceInfo: ListIndexesResponseBodyResultDataSourceInfo,
      description: 'string',
      domain: 'string',
      fullUpdateTime: 'string',
      fullVersion: 'number',
      incUpdateTime: 'string',
      indexSize: 'number',
      indexStatus: 'string',
      name: 'string',
      partition: 'number',
      versions: { 'type': 'array', 'itemType': ListIndexesResponseBodyResultVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSpecsResponseBodyResult extends $tea.Model {
  cpu?: number;
  maxDisk?: number;
  mem?: number;
  minDisk?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      maxDisk: 'maxDisk',
      mem: 'mem',
      minDisk: 'minDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      maxDisk: 'number',
      mem: 'number',
      minDisk: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequestTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class ListInstancesResponseBodyResultNetwork extends $tea.Model {
  endpoint?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyResultTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class ListInstancesResponseBodyResult extends $tea.Model {
  chargeType?: string;
  commodityCode?: string;
  createTime?: string;
  description?: string;
  expiredTime?: string;
  inDebt?: boolean;
  instanceId?: string;
  lockMode?: string;
  network?: ListInstancesResponseBodyResultNetwork;
  resourceGroupId?: string;
  status?: string;
  tags?: ListInstancesResponseBodyResultTags[];
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      createTime: 'createTime',
      description: 'description',
      expiredTime: 'expiredTime',
      inDebt: 'inDebt',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      network: 'network',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
      tags: 'tags',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      createTime: 'string',
      description: 'string',
      expiredTime: 'string',
      inDebt: 'boolean',
      instanceId: 'string',
      lockMode: 'string',
      network: ListInstancesResponseBodyResultNetwork,
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListInstancesResponseBodyResultTags },
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsResponseBodyResult extends $tea.Model {
  result?: any[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': 'any' },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnlineConfigsResponseBodyResult extends $tea.Model {
  config?: string;
  indexName?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      indexName: 'indexName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      indexName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableGenerationsResponseBodyResult extends $tea.Model {
  generationId?: number;
  static names(): { [key: string]: string } {
    return {
      generationId: 'generationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generationId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBodyResult extends $tea.Model {
  indexStatus?: string;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      indexStatus: 'indexStatus',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexStatus: 'string',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAdvanceConfigRequestFiles extends $tea.Model {
  fullPathName?: string;
  isDir?: boolean;
  isTemplate?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      fullPathName: 'fullPathName',
      isDir: 'isDir',
      isTemplate: 'isTemplate',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullPathName: 'string',
      isDir: 'boolean',
      isTemplate: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestExtendHdfs extends $tea.Model {
  path?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestExtendOdps extends $tea.Model {
  partitions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      partitions: 'partitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestExtendOss extends $tea.Model {
  path?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestExtendSaro extends $tea.Model {
  path?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'path',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestExtend extends $tea.Model {
  hdfs?: ModifyDataSourceDeployRequestExtendHdfs;
  odps?: ModifyDataSourceDeployRequestExtendOdps;
  oss?: ModifyDataSourceDeployRequestExtendOss;
  saro?: ModifyDataSourceDeployRequestExtendSaro;
  static names(): { [key: string]: string } {
    return {
      hdfs: 'hdfs',
      odps: 'odps',
      oss: 'oss',
      saro: 'saro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hdfs: ModifyDataSourceDeployRequestExtendHdfs,
      odps: ModifyDataSourceDeployRequestExtendOdps,
      oss: ModifyDataSourceDeployRequestExtendOss,
      saro: ModifyDataSourceDeployRequestExtendSaro,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestProcessor extends $tea.Model {
  args?: string;
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      resource: 'resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      resource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestStorage extends $tea.Model {
  accessKey?: string;
  accessSecret?: string;
  bucket?: string;
  endpoint?: string;
  namespace?: string;
  ossPath?: string;
  partition?: string;
  path?: string;
  project?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      endpoint: 'endpoint',
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      endpoint: 'string',
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestSwift extends $tea.Model {
  topic?: string;
  zk?: string;
  static names(): { [key: string]: string } {
    return {
      topic: 'topic',
      zk: 'zk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      zk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexRequestDataSourceInfoConfig extends $tea.Model {
  accessKey?: string;
  accessSecret?: string;
  bucket?: string;
  endpoint?: string;
  namespace?: string;
  ossPath?: string;
  partition?: string;
  path?: string;
  project?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      endpoint: 'endpoint',
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      endpoint: 'string',
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexRequestDataSourceInfoSaroConfig extends $tea.Model {
  namespace?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexRequestDataSourceInfo extends $tea.Model {
  autoBuildIndex?: boolean;
  buildMode?: string;
  config?: ModifyIndexRequestDataSourceInfoConfig;
  dataTimeSec?: number;
  domain?: string;
  generation?: number;
  name?: string;
  processParallelNum?: number;
  processPartitionCount?: number;
  saroConfig?: ModifyIndexRequestDataSourceInfoSaroConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      buildMode: 'buildMode',
      config: 'config',
      dataTimeSec: 'dataTimeSec',
      domain: 'domain',
      generation: 'generation',
      name: 'name',
      processParallelNum: 'processParallelNum',
      processPartitionCount: 'processPartitionCount',
      saroConfig: 'saroConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      buildMode: 'string',
      config: ModifyIndexRequestDataSourceInfoConfig,
      dataTimeSec: 'number',
      domain: 'string',
      generation: 'number',
      name: 'string',
      processParallelNum: 'number',
      processPartitionCount: 'number',
      saroConfig: ModifyIndexRequestDataSourceInfoSaroConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexPartitionRequestIndexInfos extends $tea.Model {
  indexName?: string;
  parallelNum?: number;
  partitionCount?: number;
  static names(): { [key: string]: string } {
    return {
      indexName: 'indexName',
      parallelNum: 'parallelNum',
      partitionCount: 'partitionCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexName: 'string',
      parallelNum: 'number',
      partitionCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexVersionRequestBody extends $tea.Model {
  buildDeployId?: string;
  indexName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      buildDeployId: 'buildDeployId',
      indexName: 'indexName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildDeployId: 'string',
      indexName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTableRequestDataProcessConfigParamsSrcFieldConfig extends $tea.Model {
  ossBucket?: string;
  ossEndpoint?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ossBucket: 'ossBucket',
      ossEndpoint: 'ossEndpoint',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossBucket: 'string',
      ossEndpoint: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTableRequestDataProcessConfigParams extends $tea.Model {
  srcFieldConfig?: ModifyTableRequestDataProcessConfigParamsSrcFieldConfig;
  vectorModal?: string;
  vectorModel?: string;
  static names(): { [key: string]: string } {
    return {
      srcFieldConfig: 'srcFieldConfig',
      vectorModal: 'vectorModal',
      vectorModel: 'vectorModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      srcFieldConfig: ModifyTableRequestDataProcessConfigParamsSrcFieldConfig,
      vectorModal: 'string',
      vectorModel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTableRequestDataProcessConfig extends $tea.Model {
  dstField?: string;
  operator?: string;
  params?: ModifyTableRequestDataProcessConfigParams;
  srcField?: string;
  static names(): { [key: string]: string } {
    return {
      dstField: 'dstField',
      operator: 'operator',
      params: 'params',
      srcField: 'srcField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstField: 'string',
      operator: 'string',
      params: ModifyTableRequestDataProcessConfigParams,
      srcField: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTableRequestDataSourceConfig extends $tea.Model {
  accessKey?: string;
  accessSecret?: string;
  bucket?: string;
  endpoint?: string;
  ossPath?: string;
  partition?: string;
  project?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      endpoint: 'endpoint',
      ossPath: 'ossPath',
      partition: 'partition',
      project: 'project',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      endpoint: 'string',
      ossPath: 'string',
      partition: 'string',
      project: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTableRequestDataSource extends $tea.Model {
  autoBuildIndex?: boolean;
  config?: ModifyTableRequestDataSourceConfig;
  dataTimeSec?: number;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      config: 'config',
      dataTimeSec: 'dataTimeSec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      config: ModifyTableRequestDataSourceConfig,
      dataTimeSec: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTableRequestVectorIndexAdvanceParams extends $tea.Model {
  buildIndexParams?: string;
  linearBuildThreshold?: string;
  minScanDocCnt?: string;
  searchIndexParams?: string;
  static names(): { [key: string]: string } {
    return {
      buildIndexParams: 'buildIndexParams',
      linearBuildThreshold: 'linearBuildThreshold',
      minScanDocCnt: 'minScanDocCnt',
      searchIndexParams: 'searchIndexParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildIndexParams: 'string',
      linearBuildThreshold: 'string',
      minScanDocCnt: 'string',
      searchIndexParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTableRequestVectorIndex extends $tea.Model {
  advanceParams?: ModifyTableRequestVectorIndexAdvanceParams;
  dimension?: string;
  distanceType?: string;
  indexName?: string;
  namespace?: string;
  sparseIndexField?: string;
  sparseValueField?: string;
  vectorField?: string;
  vectorIndexType?: string;
  static names(): { [key: string]: string } {
    return {
      advanceParams: 'advanceParams',
      dimension: 'dimension',
      distanceType: 'distanceType',
      indexName: 'indexName',
      namespace: 'namespace',
      sparseIndexField: 'sparseIndexField',
      sparseValueField: 'sparseValueField',
      vectorField: 'vectorField',
      vectorIndexType: 'vectorIndexType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanceParams: ModifyTableRequestVectorIndexAdvanceParams,
      dimension: 'string',
      distanceType: 'string',
      indexName: 'string',
      namespace: 'string',
      sparseIndexField: 'string',
      sparseValueField: 'string',
      vectorField: 'string',
      vectorIndexType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishAdvanceConfigRequestFilesConfig extends $tea.Model {
  content?: string;
  variables?: { [key: string]: FilesConfigVariablesValue };
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': FilesConfigVariablesValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishAdvanceConfigRequestFiles extends $tea.Model {
  config?: PublishAdvanceConfigRequestFilesConfig;
  dirName?: string;
  fileName?: string;
  operateType?: string;
  ossPath?: string;
  parentFullPath?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      dirName: 'dirName',
      fileName: 'fileName',
      operateType: 'operateType',
      ossPath: 'ossPath',
      parentFullPath: 'parentFullPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: PublishAdvanceConfigRequestFilesConfig,
      dirName: 'string',
      fileName: 'string',
      operateType: 'string',
      ossPath: 'string',
      parentFullPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameFolderResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  instanceId?: number;
  isDir?: number;
  name?: string;
  parent?: number;
  templateId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      instanceId: 'instanceId',
      isDir: 'isDir',
      name: 'name',
      parent: 'parent',
      templateId: 'templateId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'number',
      isDir: 'number',
      name: 'string',
      parent: 'number',
      templateId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class UpdateInstanceRequestComponents extends $tea.Model {
  code?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBodyResult extends $tea.Model {
  chargeType?: string;
  commodityCode?: string;
  createTime?: string;
  description?: string;
  expiredTime?: string;
  inDebt?: boolean;
  instanceId?: string;
  lockMode?: string;
  resourceGroupId?: string;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      createTime: 'createTime',
      description: 'description',
      expiredTime: 'expiredTime',
      inDebt: 'inDebt',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      createTime: 'string',
      description: 'string',
      expiredTime: 'string',
      inDebt: 'boolean',
      instanceId: 'string',
      lockMode: 'string',
      resourceGroupId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceContentResponseBodyResult extends $tea.Model {
  combineParams?: string;
  comment?: string;
  content?: string;
  dynamicParams?: string;
  gmtCreate?: string;
  gmtModified?: string;
  instanceId?: number;
  kvpairs?: string;
  relatedTemplateId?: number;
  staticParams?: string;
  templateParams?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      combineParams: 'combineParams',
      comment: 'comment',
      content: 'content',
      dynamicParams: 'dynamicParams',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      instanceId: 'instanceId',
      kvpairs: 'kvpairs',
      relatedTemplateId: 'relatedTemplateId',
      staticParams: 'staticParams',
      templateParams: 'templateParams',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combineParams: 'string',
      comment: 'string',
      content: 'string',
      dynamicParams: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      instanceId: 'number',
      kvpairs: 'string',
      relatedTemplateId: 'number',
      staticParams: 'string',
      templateParams: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceNameResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  instanceId?: number;
  isDir?: number;
  name?: string;
  parent?: number;
  templateId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      instanceId: 'instanceId',
      isDir: 'isDir',
      name: 'name',
      parent: 'parent',
      templateId: 'templateId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'number',
      isDir: 'number',
      name: 'string',
      parent: 'number',
      templateId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceParamsResponseBodyResult extends $tea.Model {
  combineParams?: string;
  comment?: string;
  content?: string;
  dynamicParams?: string;
  gmtCreate?: string;
  gmtModified?: string;
  instanceId?: number;
  kvpairs?: string;
  relatedTemplateId?: number;
  staticParams?: string;
  templateParams?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      combineParams: 'combineParams',
      comment: 'comment',
      content: 'content',
      dynamicParams: 'dynamicParams',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      instanceId: 'instanceId',
      kvpairs: 'kvpairs',
      relatedTemplateId: 'relatedTemplateId',
      staticParams: 'staticParams',
      templateParams: 'templateParams',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combineParams: 'string',
      comment: 'string',
      content: 'string',
      dynamicParams: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      instanceId: 'number',
      kvpairs: 'string',
      relatedTemplateId: 'number',
      staticParams: 'string',
      templateParams: 'string',
      version: 'number',
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
    this._endpoint = this.getEndpoint("searchengine", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary Triggers reindexing.
   *
   * @description ## Method
   *     POST
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/actions/build-index
   *
   * @param request BuildIndexRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return BuildIndexResponse
   */
  async buildIndexWithOptions(instanceId: string, request: BuildIndexRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BuildIndexResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.buildMode)) {
      body["buildMode"] = request.buildMode;
    }

    if (!Util.isUnset(request.dataSourceName)) {
      body["dataSourceName"] = request.dataSourceName;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      body["dataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.dataTimeSec)) {
      body["dataTimeSec"] = request.dataTimeSec;
    }

    if (!Util.isUnset(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!Util.isUnset(request.generation)) {
      body["generation"] = request.generation;
    }

    if (!Util.isUnset(request.partition)) {
      body["partition"] = request.partition;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BuildIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/actions/build-index`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BuildIndexResponse>(await this.callApi(params, req, runtime), new BuildIndexResponse({}));
  }

  /**
   * @summary Triggers reindexing.
   *
   * @description ## Method
   *     POST
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/actions/build-index
   *
   * @param request BuildIndexRequest
   * @return BuildIndexResponse
   */
  async buildIndex(instanceId: string, request: BuildIndexRequest): Promise<BuildIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.buildIndexWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @summary 更换实例资源组
   *
   * @param request ChangeResourceGroupRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(instanceId: string, request: ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.newResourceGroupId)) {
      body["newResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/actions/change-resource-group`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  /**
   * @summary 更换实例资源组
   *
   * @param request ChangeResourceGroupRequest
   * @return ChangeResourceGroupResponse
   */
  async changeResourceGroup(instanceId: string, request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeResourceGroupWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request CloneSqlInstanceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CloneSqlInstanceResponse
   */
  async cloneSqlInstanceWithOptions(instanceId: string, database: string, sqlInstanceId: string, request: CloneSqlInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CloneSqlInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.targetFolderId)) {
      body["targetFolderId"] = request.targetFolderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CloneSqlInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/sql-studio/databases/${OpenApiUtil.getEncodeParam(database)}/sql-instances/${OpenApiUtil.getEncodeParam(sqlInstanceId)}/actions/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CloneSqlInstanceResponse>(await this.callApi(params, req, runtime), new CloneSqlInstanceResponse({}));
  }

  /**
   * @param request CloneSqlInstanceRequest
   * @return CloneSqlInstanceResponse
   */
  async cloneSqlInstance(instanceId: string, database: string, sqlInstanceId: string, request: CloneSqlInstanceRequest): Promise<CloneSqlInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneSqlInstanceWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

  /**
   * @summary Creates a cluster.
   *
   * @description ### Method
   * `POST`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/clusters`
   *
   * @param request CreateClusterRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateClusterResponse
   */
  async createClusterWithOptions(instanceId: string, request: CreateClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoLoad)) {
      body["autoLoad"] = request.autoLoad;
    }

    if (!Util.isUnset(request.dataNode)) {
      body["dataNode"] = request.dataNode;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.queryNode)) {
      body["queryNode"] = request.queryNode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateCluster",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/clusters`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateClusterResponse>(await this.callApi(params, req, runtime), new CreateClusterResponse({}));
  }

  /**
   * @summary Creates a cluster.
   *
   * @description ### Method
   * `POST`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/clusters`
   *
   * @param request CreateClusterRequest
   * @return CreateClusterResponse
   */
  async createCluster(instanceId: string, request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createClusterWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request CreateConfigDirRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateConfigDirResponse
   */
  async createConfigDirWithOptions(instanceId: string, configName: string, request: CreateConfigDirRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateConfigDirResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dirName)) {
      body["dirName"] = request.dirName;
    }

    if (!Util.isUnset(request.parentFullPath)) {
      body["parentFullPath"] = request.parentFullPath;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateConfigDir",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/advanced-configs/${OpenApiUtil.getEncodeParam(configName)}/dir`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateConfigDirResponse>(await this.callApi(params, req, runtime), new CreateConfigDirResponse({}));
  }

  /**
   * @param request CreateConfigDirRequest
   * @return CreateConfigDirResponse
   */
  async createConfigDir(instanceId: string, configName: string, request: CreateConfigDirRequest): Promise<CreateConfigDirResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConfigDirWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * @param request CreateConfigFileRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateConfigFileResponse
   */
  async createConfigFileWithOptions(instanceId: string, configName: string, request: CreateConfigFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateConfigFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileName)) {
      body["fileName"] = request.fileName;
    }

    if (!Util.isUnset(request.ossPath)) {
      body["ossPath"] = request.ossPath;
    }

    if (!Util.isUnset(request.parentFullPath)) {
      body["parentFullPath"] = request.parentFullPath;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateConfigFile",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/advanced-configs/${OpenApiUtil.getEncodeParam(configName)}/file`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateConfigFileResponse>(await this.callApi(params, req, runtime), new CreateConfigFileResponse({}));
  }

  /**
   * @param request CreateConfigFileRequest
   * @return CreateConfigFileResponse
   */
  async createConfigFile(instanceId: string, configName: string, request: CreateConfigFileRequest): Promise<CreateConfigFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConfigFileWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * @summary Creates data sources.
   *
   * @param request CreateDataSourceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDataSourceResponse
   */
  async createDataSourceWithOptions(instanceId: string, request: CreateDataSourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDataSourceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoBuildIndex)) {
      body["autoBuildIndex"] = request.autoBuildIndex;
    }

    if (!Util.isUnset(request.config)) {
      body["config"] = request.config;
    }

    if (!Util.isUnset(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.saroConfig)) {
      body["saroConfig"] = request.saroConfig;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataSource",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/data-sources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDataSourceResponse>(await this.callApi(params, req, runtime), new CreateDataSourceResponse({}));
  }

  /**
   * @summary Creates data sources.
   *
   * @param request CreateDataSourceRequest
   * @return CreateDataSourceResponse
   */
  async createDataSource(instanceId: string, request: CreateDataSourceRequest): Promise<CreateDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDataSourceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request CreateFolderRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateFolderResponse
   */
  async createFolderWithOptions(instanceId: string, database: string, request: CreateFolderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFolderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.parent)) {
      body["parent"] = request.parent;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFolder",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/sql-studio/databases/${OpenApiUtil.getEncodeParam(database)}/folders`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateFolderResponse>(await this.callApi(params, req, runtime), new CreateFolderResponse({}));
  }

  /**
   * @param request CreateFolderRequest
   * @return CreateFolderResponse
   */
  async createFolder(instanceId: string, database: string, request: CreateFolderRequest): Promise<CreateFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFolderWithOptions(instanceId, database, request, headers, runtime);
  }

  /**
   * @summary Creates an index.
   *
   * @description ### Method
   * ```java
   * POST
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/indexes
   * ```
   *
   * @param request CreateIndexRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateIndexResponse
   */
  async createIndexWithOptions(instanceId: string, request: CreateIndexRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateIndexResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.buildParallelNum)) {
      body["buildParallelNum"] = request.buildParallelNum;
    }

    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.dataSource)) {
      body["dataSource"] = request.dataSource;
    }

    if (!Util.isUnset(request.dataSourceInfo)) {
      body["dataSourceInfo"] = request.dataSourceInfo;
    }

    if (!Util.isUnset(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!Util.isUnset(request.extend)) {
      body["extend"] = request.extend;
    }

    if (!Util.isUnset(request.mergeParallelNum)) {
      body["mergeParallelNum"] = request.mergeParallelNum;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.partition)) {
      body["partition"] = request.partition;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/indexes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateIndexResponse>(await this.callApi(params, req, runtime), new CreateIndexResponse({}));
  }

  /**
   * @summary Creates an index.
   *
   * @description ### Method
   * ```java
   * POST
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/indexes
   * ```
   *
   * @param request CreateIndexRequest
   * @return CreateIndexResponse
   */
  async createIndex(instanceId: string, request: CreateIndexRequest): Promise<CreateIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIndexWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @summary Creates a Havenask instance.
   *
   * @description ### Method
   * `POST`
   * ### URI
   * `/api/instances?dryRun=false`
   *
   * @param request CreateInstanceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateInstanceResponse
   */
  async createInstanceWithOptions(request: CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.chargeType)) {
      body["chargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.components)) {
      body["components"] = request.components;
    }

    if (!Util.isUnset(request.order)) {
      body["order"] = request.order;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  /**
   * @summary Creates a Havenask instance.
   *
   * @description ### Method
   * `POST`
   * ### URI
   * `/api/instances?dryRun=false`
   *
   * @param request CreateInstanceRequest
   * @return CreateInstanceResponse
   */
  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(request, headers, runtime);
  }

  /**
   * @summary 开通公网域名
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreatePublicUrlResponse
   */
  async createPublicUrlWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreatePublicUrlResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CreatePublicUrl",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/public-url`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreatePublicUrlResponse>(await this.callApi(params, req, runtime), new CreatePublicUrlResponse({}));
  }

  /**
   * @summary 开通公网域名
   *
   * @return CreatePublicUrlResponse
   */
  async createPublicUrl(instanceId: string): Promise<CreatePublicUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPublicUrlWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param request CreateSqlInstanceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateSqlInstanceResponse
   */
  async createSqlInstanceWithOptions(instanceId: string, database: string, request: CreateSqlInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSqlInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.parent)) {
      body["parent"] = request.parent;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSqlInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/sql-studio/databases/${OpenApiUtil.getEncodeParam(database)}/sql-instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSqlInstanceResponse>(await this.callApi(params, req, runtime), new CreateSqlInstanceResponse({}));
  }

  /**
   * @param request CreateSqlInstanceRequest
   * @return CreateSqlInstanceResponse
   */
  async createSqlInstance(instanceId: string, database: string, request: CreateSqlInstanceRequest): Promise<CreateSqlInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSqlInstanceWithOptions(instanceId, database, request, headers, runtime);
  }

  /**
   * @summary 创建索引V2
   *
   * @param request CreateTableRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTableResponse
   */
  async createTableWithOptions(instanceId: string, request: CreateTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTableResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataProcessConfig)) {
      body["dataProcessConfig"] = request.dataProcessConfig;
    }

    if (!Util.isUnset(request.dataProcessorCount)) {
      body["dataProcessorCount"] = request.dataProcessorCount;
    }

    if (!Util.isUnset(request.dataSource)) {
      body["dataSource"] = request.dataSource;
    }

    if (!Util.isUnset(request.fieldSchema)) {
      body["fieldSchema"] = request.fieldSchema;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.partitionCount)) {
      body["partitionCount"] = request.partitionCount;
    }

    if (!Util.isUnset(request.primaryKey)) {
      body["primaryKey"] = request.primaryKey;
    }

    if (!Util.isUnset(request.rawSchema)) {
      body["rawSchema"] = request.rawSchema;
    }

    if (!Util.isUnset(request.vectorIndex)) {
      body["vectorIndex"] = request.vectorIndex;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTable",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/tables`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTableResponse>(await this.callApi(params, req, runtime), new CreateTableResponse({}));
  }

  /**
   * @summary 创建索引V2
   *
   * @param request CreateTableRequest
   * @return CreateTableResponse
   */
  async createTable(instanceId: string, request: CreateTableRequest): Promise<CreateTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTableWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @summary Deletes the details about advanced configurations.
   *
   * @description ## Method
   *     DELETE
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteAdvanceConfigResponse
   */
  async deleteAdvanceConfigWithOptions(instanceId: string, configName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAdvanceConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteAdvanceConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/advanced-configs/${OpenApiUtil.getEncodeParam(configName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteAdvanceConfigResponse>(await this.callApi(params, req, runtime), new DeleteAdvanceConfigResponse({}));
  }

  /**
   * @summary Deletes the details about advanced configurations.
   *
   * @description ## Method
   *     DELETE
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}
   *
   * @return DeleteAdvanceConfigResponse
   */
  async deleteAdvanceConfig(instanceId: string, configName: string): Promise<DeleteAdvanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAdvanceConfigWithOptions(instanceId, configName, headers, runtime);
  }

  /**
   * @param request DeleteConfigDirRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteConfigDirResponse
   */
  async deleteConfigDirWithOptions(instanceId: string, configName: string, request: DeleteConfigDirRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteConfigDirResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dirName)) {
      query["dirName"] = request.dirName;
    }

    if (!Util.isUnset(request.parentFullPath)) {
      query["parentFullPath"] = request.parentFullPath;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConfigDir",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/advanced-configs/${OpenApiUtil.getEncodeParam(configName)}/dir`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteConfigDirResponse>(await this.callApi(params, req, runtime), new DeleteConfigDirResponse({}));
  }

  /**
   * @param request DeleteConfigDirRequest
   * @return DeleteConfigDirResponse
   */
  async deleteConfigDir(instanceId: string, configName: string, request: DeleteConfigDirRequest): Promise<DeleteConfigDirResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigDirWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * @param request DeleteConfigFileRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteConfigFileResponse
   */
  async deleteConfigFileWithOptions(instanceId: string, configName: string, request: DeleteConfigFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteConfigFileResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!Util.isUnset(request.parentFullPath)) {
      query["parentFullPath"] = request.parentFullPath;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConfigFile",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/advanced-configs/${OpenApiUtil.getEncodeParam(configName)}/file`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteConfigFileResponse>(await this.callApi(params, req, runtime), new DeleteConfigFileResponse({}));
  }

  /**
   * @param request DeleteConfigFileRequest
   * @return DeleteConfigFileResponse
   */
  async deleteConfigFile(instanceId: string, configName: string, request: DeleteConfigFileRequest): Promise<DeleteConfigFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigFileWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * @summary Deletes a specified data source.
   *
   * @description ## Method
   * `DELETE`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}`
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDataSourceResponse
   */
  async deleteDataSourceWithOptions(instanceId: string, dataSourceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDataSourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataSource",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/data-sources/${OpenApiUtil.getEncodeParam(dataSourceName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataSourceResponse>(await this.callApi(params, req, runtime), new DeleteDataSourceResponse({}));
  }

  /**
   * @summary Deletes a specified data source.
   *
   * @description ## Method
   * `DELETE`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}`
   *
   * @return DeleteDataSourceResponse
   */
  async deleteDataSource(instanceId: string, dataSourceName: string): Promise<DeleteDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDataSourceWithOptions(instanceId, dataSourceName, headers, runtime);
  }

  /**
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteFolderResponse
   */
  async deleteFolderWithOptions(instanceId: string, database: string, folderId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteFolderResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteFolder",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/sql-studio/databases/${OpenApiUtil.getEncodeParam(database)}/folders/${OpenApiUtil.getEncodeParam(folderId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteFolderResponse>(await this.callApi(params, req, runtime), new DeleteFolderResponse({}));
  }

  /**
   * @return DeleteFolderResponse
   */
  async deleteFolder(instanceId: string, database: string, folderId: string): Promise<DeleteFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFolderWithOptions(instanceId, database, folderId, headers, runtime);
  }

  /**
   * @summary Deletes an index.
   *
   * @description ## Method
   *     DELETE
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}?dataSource=xxx
   *
   * @param request DeleteIndexRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteIndexResponse
   */
  async deleteIndexWithOptions(instanceId: string, indexName: string, request: DeleteIndexRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteIndexResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSource)) {
      query["dataSource"] = request.dataSource;
    }

    if (!Util.isUnset(request.deleteDataSource)) {
      query["deleteDataSource"] = request.deleteDataSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/indexes/${OpenApiUtil.getEncodeParam(indexName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteIndexResponse>(await this.callApi(params, req, runtime), new DeleteIndexResponse({}));
  }

  /**
   * @summary Deletes an index.
   *
   * @description ## Method
   *     DELETE
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}?dataSource=xxx
   *
   * @param request DeleteIndexRequest
   * @return DeleteIndexResponse
   */
  async deleteIndex(instanceId: string, indexName: string, request: DeleteIndexRequest): Promise<DeleteIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndexWithOptions(instanceId, indexName, request, headers, runtime);
  }

  /**
   * @summary Deletes the version of an index.
   *
   * @description ## Method
   *     DELETE
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/versions/{versionName}
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteIndexVersionResponse
   */
  async deleteIndexVersionWithOptions(instanceId: string, indexName: string, versionName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteIndexVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteIndexVersion",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/indexes/${OpenApiUtil.getEncodeParam(indexName)}/versions/${OpenApiUtil.getEncodeParam(versionName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteIndexVersionResponse>(await this.callApi(params, req, runtime), new DeleteIndexVersionResponse({}));
  }

  /**
   * @summary Deletes the version of an index.
   *
   * @description ## Method
   *     DELETE
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/versions/{versionName}
   *
   * @return DeleteIndexVersionResponse
   */
  async deleteIndexVersion(instanceId: string, indexName: string, versionName: string): Promise<DeleteIndexVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndexVersionWithOptions(instanceId, indexName, versionName, headers, runtime);
  }

  /**
   * @summary Deletes a specified instance.
   *
   * @description ### Method
   * `DELETE`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}`
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
  }

  /**
   * @summary Deletes a specified instance.
   *
   * @description ### Method
   * `DELETE`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}`
   *
   * @return DeleteInstanceResponse
   */
  async deleteInstance(instanceId: string): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * @summary 删除公网域名
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeletePublicUrlResponse
   */
  async deletePublicUrlWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeletePublicUrlResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeletePublicUrl",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/public-url`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeletePublicUrlResponse>(await this.callApi(params, req, runtime), new DeletePublicUrlResponse({}));
  }

  /**
   * @summary 删除公网域名
   *
   * @return DeletePublicUrlResponse
   */
  async deletePublicUrl(instanceId: string): Promise<DeletePublicUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePublicUrlWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteSqlInstanceResponse
   */
  async deleteSqlInstanceWithOptions(instanceId: string, database: string, sqlInstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSqlInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteSqlInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/sql-studio/databases/${OpenApiUtil.getEncodeParam(database)}/sql-instances/${OpenApiUtil.getEncodeParam(sqlInstanceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSqlInstanceResponse>(await this.callApi(params, req, runtime), new DeleteSqlInstanceResponse({}));
  }

  /**
   * @return DeleteSqlInstanceResponse
   */
  async deleteSqlInstance(instanceId: string, database: string, sqlInstanceId: string): Promise<DeleteSqlInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSqlInstanceWithOptions(instanceId, database, sqlInstanceId, headers, runtime);
  }

  /**
   * @summary 删除索引表V2
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTableResponse
   */
  async deleteTableWithOptions(instanceId: string, tableName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTableResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteTable",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/tables/${OpenApiUtil.getEncodeParam(tableName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTableResponse>(await this.callApi(params, req, runtime), new DeleteTableResponse({}));
  }

  /**
   * @summary 删除索引表V2
   *
   * @return DeleteTableResponse
   */
  async deleteTable(instanceId: string, tableName: string): Promise<DeleteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTableWithOptions(instanceId, tableName, headers, runtime);
  }

  /**
   * @param request DescribeRegionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["acceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * @param request DescribeRegionsRequest
   * @return DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(request, headers, runtime);
  }

  /**
   * @param request ExecuteSqlInstanceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ExecuteSqlInstanceResponse
   */
  async executeSqlInstanceWithOptions(instanceId: string, database: string, sqlInstanceId: string, request: ExecuteSqlInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ExecuteSqlInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.combineParam)) {
      body["combineParam"] = request.combineParam;
    }

    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!Util.isUnset(request.dynamicParam)) {
      body["dynamicParam"] = request.dynamicParam;
    }

    if (!Util.isUnset(request.kvpair)) {
      body["kvpair"] = request.kvpair;
    }

    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
    }

    if (!Util.isUnset(request.staticParam)) {
      body["staticParam"] = request.staticParam;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteSqlInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/sql-studio/databases/${OpenApiUtil.getEncodeParam(database)}/sql-instances/${OpenApiUtil.getEncodeParam(sqlInstanceId)}/actions/execution`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExecuteSqlInstanceResponse>(await this.callApi(params, req, runtime), new ExecuteSqlInstanceResponse({}));
  }

  /**
   * @param request ExecuteSqlInstanceRequest
   * @return ExecuteSqlInstanceResponse
   */
  async executeSqlInstance(instanceId: string, database: string, sqlInstanceId: string, request: ExecuteSqlInstanceRequest): Promise<ExecuteSqlInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeSqlInstanceWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

  /**
   * @summary Performs a forced switchover.
   *
   * @description \\### Method
   * ```java
   * PUT
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/force-switch/{fsmId}
   * ```
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ForceSwitchResponse
   */
  async forceSwitchWithOptions(instanceId: string, fsmId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ForceSwitchResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ForceSwitch",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/force-switch/${OpenApiUtil.getEncodeParam(fsmId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ForceSwitchResponse>(await this.callApi(params, req, runtime), new ForceSwitchResponse({}));
  }

  /**
   * @summary Performs a forced switchover.
   *
   * @description \\### Method
   * ```java
   * PUT
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/force-switch/{fsmId}
   * ```
   *
   * @return ForceSwitchResponse
   */
  async forceSwitch(instanceId: string, fsmId: string): Promise<ForceSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.forceSwitchWithOptions(instanceId, fsmId, headers, runtime);
  }

  /**
   * @summary Queries the information about a dictionary.
   *
   * @description ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}
   *
   * @param request GetAdvanceConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAdvanceConfigResponse
   */
  async getAdvanceConfigWithOptions(instanceId: string, configName: string, request: GetAdvanceConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAdvanceConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAdvanceConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/advanced-configs/${OpenApiUtil.getEncodeParam(configName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAdvanceConfigResponse>(await this.callApi(params, req, runtime), new GetAdvanceConfigResponse({}));
  }

  /**
   * @summary Queries the information about a dictionary.
   *
   * @description ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}
   *
   * @param request GetAdvanceConfigRequest
   * @return GetAdvanceConfigResponse
   */
  async getAdvanceConfig(instanceId: string, configName: string, request: GetAdvanceConfigRequest): Promise<GetAdvanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAdvanceConfigWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * @summary Obtains the information in a specified advanced configuration file.
   *
   * @description ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/file?fileName={fileName}
   *
   * @param request GetAdvanceConfigFileRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAdvanceConfigFileResponse
   */
  async getAdvanceConfigFileWithOptions(instanceId: string, configName: string, request: GetAdvanceConfigFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAdvanceConfigFileResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAdvanceConfigFile",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/advanced-configs/${OpenApiUtil.getEncodeParam(configName)}/file`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAdvanceConfigFileResponse>(await this.callApi(params, req, runtime), new GetAdvanceConfigFileResponse({}));
  }

  /**
   * @summary Obtains the information in a specified advanced configuration file.
   *
   * @description ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/file?fileName={fileName}
   *
   * @param request GetAdvanceConfigFileRequest
   * @return GetAdvanceConfigFileResponse
   */
  async getAdvanceConfigFile(instanceId: string, configName: string, request: GetAdvanceConfigFileRequest): Promise<GetAdvanceConfigFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAdvanceConfigFileWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * @summary Queries the details of a cluster.
   *
   * @description ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instance/{instanceId}/clusters/{clusterName}`
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetClusterResponse
   */
  async getClusterWithOptions(instanceId: string, clusterName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetClusterResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetCluster",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/clusters/${OpenApiUtil.getEncodeParam(clusterName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetClusterResponse>(await this.callApi(params, req, runtime), new GetClusterResponse({}));
  }

  /**
   * @summary Queries the details of a cluster.
   *
   * @description ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instance/{instanceId}/clusters/{clusterName}`
   *
   * @return GetClusterResponse
   */
  async getCluster(instanceId: string, clusterName: string): Promise<GetClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterWithOptions(instanceId, clusterName, headers, runtime);
  }

  /**
   * @summary Queries the runtime information about a specified cluster.
   *
   * @description ### Method
   * GET
   * ### URI
   * /openapi/ha3/instances/{instanceId}/cluster-run-time-info
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetClusterRunTimeInfoResponse
   */
  async getClusterRunTimeInfoWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetClusterRunTimeInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetClusterRunTimeInfo",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/cluster-run-time-info`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetClusterRunTimeInfoResponse>(await this.callApi(params, req, runtime), new GetClusterRunTimeInfoResponse({}));
  }

  /**
   * @summary Queries the runtime information about a specified cluster.
   *
   * @description ### Method
   * GET
   * ### URI
   * /openapi/ha3/instances/{instanceId}/cluster-run-time-info
   *
   * @return GetClusterRunTimeInfoResponse
   */
  async getClusterRunTimeInfo(instanceId: string): Promise<GetClusterRunTimeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterRunTimeInfoWithOptions(instanceId, headers, runtime);
  }

  /**
   * @summary Obtains a data source.
   *
   * @description ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}`
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDataSourceResponse
   */
  async getDataSourceWithOptions(instanceId: string, dataSourceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDataSourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetDataSource",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/data-sources/${OpenApiUtil.getEncodeParam(dataSourceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDataSourceResponse>(await this.callApi(params, req, runtime), new GetDataSourceResponse({}));
  }

  /**
   * @summary Obtains a data source.
   *
   * @description ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}`
   *
   * @return GetDataSourceResponse
   */
  async getDataSource(instanceId: string, dataSourceName: string): Promise<GetDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataSourceWithOptions(instanceId, dataSourceName, headers, runtime);
  }

  /**
   * @summary 获取数据源部署信息
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDataSourceDeployResponse
   */
  async getDataSourceDeployWithOptions(instanceId: string, deployName: string, dataSourceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDataSourceDeployResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetDataSourceDeploy",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/data-sources/${OpenApiUtil.getEncodeParam(dataSourceName)}/deploys/${OpenApiUtil.getEncodeParam(deployName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDataSourceDeployResponse>(await this.callApi(params, req, runtime), new GetDataSourceDeployResponse({}));
  }

  /**
   * @summary 获取数据源部署信息
   *
   * @return GetDataSourceDeployResponse
   */
  async getDataSourceDeploy(instanceId: string, deployName: string, dataSourceName: string): Promise<GetDataSourceDeployResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataSourceDeployWithOptions(instanceId, deployName, dataSourceName, headers, runtime);
  }

  /**
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDatabaseSchemaResponse
   */
  async getDatabaseSchemaWithOptions(instanceId: string, database: string, tableName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDatabaseSchemaResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetDatabaseSchema",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/sql-studio/databases/${OpenApiUtil.getEncodeParam(database)}/tables/${OpenApiUtil.getEncodeParam(tableName)}/schema`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDatabaseSchemaResponse>(await this.callApi(params, req, runtime), new GetDatabaseSchemaResponse({}));
  }

  /**
   * @return GetDatabaseSchemaResponse
   */
  async getDatabaseSchema(instanceId: string, database: string, tableName: string): Promise<GetDatabaseSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatabaseSchemaWithOptions(instanceId, database, tableName, headers, runtime);
  }

  /**
   * @summary Displays the overview of the deployment.
   *
   * @description ## Method
   * GET
   * ## URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/deploy-graph
   * ```
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDeployGraphResponse
   */
  async getDeployGraphWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDeployGraphResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetDeployGraph",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/deploy-graph`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeployGraphResponse>(await this.callApi(params, req, runtime), new GetDeployGraphResponse({}));
  }

  /**
   * @summary Displays the overview of the deployment.
   *
   * @description ## Method
   * GET
   * ## URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/deploy-graph
   * ```
   *
   * @return GetDeployGraphResponse
   */
  async getDeployGraph(instanceId: string): Promise<GetDeployGraphResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDeployGraphWithOptions(instanceId, headers, runtime);
  }

  /**
   * @summary Queries details about the version information of an index table.
   *
   * @description ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/versions/{versionName}/file?fileName=/root/test.txt
   *
   * @param request GetFileRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetFileResponse
   */
  async getFileWithOptions(instanceId: string, indexName: string, versionName: string, request: GetFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFileResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFile",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/indexes/${OpenApiUtil.getEncodeParam(indexName)}/versions/${OpenApiUtil.getEncodeParam(versionName)}/file`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFileResponse>(await this.callApi(params, req, runtime), new GetFileResponse({}));
  }

  /**
   * @summary Queries details about the version information of an index table.
   *
   * @description ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/versions/{versionName}/file?fileName=/root/test.txt
   *
   * @param request GetFileRequest
   * @return GetFileResponse
   */
  async getFile(instanceId: string, indexName: string, versionName: string, request: GetFileRequest): Promise<GetFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFileWithOptions(instanceId, indexName, versionName, request, headers, runtime);
  }

  /**
   * @summary Queries the information about an index version.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetIndexResponse
   */
  async getIndexWithOptions(instanceId: string, indexName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetIndexResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/indexes/${OpenApiUtil.getEncodeParam(indexName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetIndexResponse>(await this.callApi(params, req, runtime), new GetIndexResponse({}));
  }

  /**
   * @summary Queries the information about an index version.
   *
   * @return GetIndexResponse
   */
  async getIndex(instanceId: string, indexName: string): Promise<GetIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIndexWithOptions(instanceId, indexName, headers, runtime);
  }

  /**
   * @summary 获取索引在线生效策略
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetIndexOnlineStrategyResponse
   */
  async getIndexOnlineStrategyWithOptions(instanceId: string, dataSourceName: string, deployName: string, indexName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetIndexOnlineStrategyResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetIndexOnlineStrategy",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/data-sources/${OpenApiUtil.getEncodeParam(dataSourceName)}/deploys/${OpenApiUtil.getEncodeParam(deployName)}/indexes/${OpenApiUtil.getEncodeParam(indexName)}/online-strategy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetIndexOnlineStrategyResponse>(await this.callApi(params, req, runtime), new GetIndexOnlineStrategyResponse({}));
  }

  /**
   * @summary 获取索引在线生效策略
   *
   * @return GetIndexOnlineStrategyResponse
   */
  async getIndexOnlineStrategy(instanceId: string, dataSourceName: string, deployName: string, indexName: string): Promise<GetIndexOnlineStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIndexOnlineStrategyWithOptions(instanceId, dataSourceName, deployName, indexName, headers, runtime);
  }

  /**
   * @summary Obtains the information about index versions that the current index version can be rolled back to.
   *
   * @description ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/clusters/{clusterName}/index-version
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetIndexVersionResponse
   */
  async getIndexVersionWithOptions(instanceId: string, clusterName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetIndexVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetIndexVersion",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/clusters/${OpenApiUtil.getEncodeParam(clusterName)}/index-version`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetIndexVersionResponse>(await this.callApi(params, req, runtime), new GetIndexVersionResponse({}));
  }

  /**
   * @summary Obtains the information about index versions that the current index version can be rolled back to.
   *
   * @description ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/clusters/{clusterName}/index-version
   *
   * @return GetIndexVersionResponse
   */
  async getIndexVersion(instanceId: string, clusterName: string): Promise<GetIndexVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIndexVersionWithOptions(instanceId, clusterName, headers, runtime);
  }

  /**
   * @summary Queries the details of an instance based on a specified instance ID.
   *
   * @description ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}`
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetInstanceResponse
   */
  async getInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
  }

  /**
   * @summary Queries the details of an instance based on a specified instance ID.
   *
   * @description ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}`
   *
   * @return GetInstanceResponse
   */
  async getInstance(instanceId: string): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * @summary Gets the configuration information of a node.
   *
   * @param request GetNodeConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetNodeConfigResponse
   */
  async getNodeConfigWithOptions(instanceId: string, request: GetNodeConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetNodeConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterName)) {
      query["clusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNodeConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/node-config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetNodeConfigResponse>(await this.callApi(params, req, runtime), new GetNodeConfigResponse({}));
  }

  /**
   * @summary Gets the configuration information of a node.
   *
   * @param request GetNodeConfigRequest
   * @return GetNodeConfigResponse
   */
  async getNodeConfig(instanceId: string, request: GetNodeConfigRequest): Promise<GetNodeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNodeConfigWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request GetSqlInstanceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetSqlInstanceResponse
   */
  async getSqlInstanceWithOptions(instanceId: string, database: string, sqlInstanceId: string, request: GetSqlInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSqlInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSqlInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/sql-studio/databases/${OpenApiUtil.getEncodeParam(database)}/sql-instances/${OpenApiUtil.getEncodeParam(sqlInstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSqlInstanceResponse>(await this.callApi(params, req, runtime), new GetSqlInstanceResponse({}));
  }

  /**
   * @param request GetSqlInstanceRequest
   * @return GetSqlInstanceResponse
   */
  async getSqlInstance(instanceId: string, database: string, sqlInstanceId: string, request: GetSqlInstanceRequest): Promise<GetSqlInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSqlInstanceWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

  /**
   * @summary 获取索引表信息V2
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTableResponse
   */
  async getTableWithOptions(instanceId: string, tableName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTableResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTable",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/tables/${OpenApiUtil.getEncodeParam(tableName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTableResponse>(await this.callApi(params, req, runtime), new GetTableResponse({}));
  }

  /**
   * @summary 获取索引表信息V2
   *
   * @return GetTableResponse
   */
  async getTable(instanceId: string, tableName: string): Promise<GetTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableWithOptions(instanceId, tableName, headers, runtime);
  }

  /**
   * @summary 根据generationId获取某个索引版本状态V2
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTableGenerationResponse
   */
  async getTableGenerationWithOptions(instanceId: string, tableName: string, generationId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTableGenerationResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTableGeneration",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/tables/${OpenApiUtil.getEncodeParam(tableName)}/index_versions/${OpenApiUtil.getEncodeParam(generationId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTableGenerationResponse>(await this.callApi(params, req, runtime), new GetTableGenerationResponse({}));
  }

  /**
   * @summary 根据generationId获取某个索引版本状态V2
   *
   * @return GetTableGenerationResponse
   */
  async getTableGeneration(instanceId: string, tableName: string, generationId: string): Promise<GetTableGenerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableGenerationWithOptions(instanceId, tableName, generationId, headers, runtime);
  }

  /**
   * @summary Obtains the file list in an advanced configuration directory.
   *
   * @description ## Method
   * `GET`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/dir?dirName={dirName}`
   *
   * @param request ListAdvanceConfigDirRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAdvanceConfigDirResponse
   */
  async listAdvanceConfigDirWithOptions(instanceId: string, configName: string, request: ListAdvanceConfigDirRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAdvanceConfigDirResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dirName)) {
      query["dirName"] = request.dirName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAdvanceConfigDir",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/advanced-configs/${OpenApiUtil.getEncodeParam(configName)}/dir`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAdvanceConfigDirResponse>(await this.callApi(params, req, runtime), new ListAdvanceConfigDirResponse({}));
  }

  /**
   * @summary Obtains the file list in an advanced configuration directory.
   *
   * @description ## Method
   * `GET`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/dir?dirName={dirName}`
   *
   * @param request ListAdvanceConfigDirRequest
   * @return ListAdvanceConfigDirResponse
   */
  async listAdvanceConfigDir(instanceId: string, configName: string, request: ListAdvanceConfigDirRequest): Promise<ListAdvanceConfigDirResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAdvanceConfigDirWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * @summary Obtains a list of advanced configurations.
   *
   * @description ## Sample requests
   * `GET /openapi/ha3/instances/ose-test1/advanced-configs`
   *
   * @param request ListAdvanceConfigsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAdvanceConfigsResponse
   */
  async listAdvanceConfigsWithOptions(instanceId: string, request: ListAdvanceConfigsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAdvanceConfigsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSourceName)) {
      query["dataSourceName"] = request.dataSourceName;
    }

    if (!Util.isUnset(request.indexName)) {
      query["indexName"] = request.indexName;
    }

    if (!Util.isUnset(request.newMode)) {
      query["newMode"] = request.newMode;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAdvanceConfigs",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/advanced-configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAdvanceConfigsResponse>(await this.callApi(params, req, runtime), new ListAdvanceConfigsResponse({}));
  }

  /**
   * @summary Obtains a list of advanced configurations.
   *
   * @description ## Sample requests
   * `GET /openapi/ha3/instances/ose-test1/advanced-configs`
   *
   * @param request ListAdvanceConfigsRequest
   * @return ListAdvanceConfigsResponse
   */
  async listAdvanceConfigs(instanceId: string, request: ListAdvanceConfigsRequest): Promise<ListAdvanceConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAdvanceConfigsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @summary Queries cluster names.
   *
   * @description ### Method
   * GET
   * ### URI
   * /openapi/ha3/instances/{instanceId}/cluster-names
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListClusterNamesResponse
   */
  async listClusterNamesWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListClusterNamesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListClusterNames",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/cluster-names`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListClusterNamesResponse>(await this.callApi(params, req, runtime), new ListClusterNamesResponse({}));
  }

  /**
   * @summary Queries cluster names.
   *
   * @description ### Method
   * GET
   * ### URI
   * /openapi/ha3/instances/{instanceId}/cluster-names
   *
   * @return ListClusterNamesResponse
   */
  async listClusterNames(): Promise<ListClusterNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterNamesWithOptions(headers, runtime);
  }

  /**
   * @summary Displays cluster tasks .
   *
   * @description ### Method
   * ```java
   * GET
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/cluster-tasks
   * ```
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListClusterTasksResponse
   */
  async listClusterTasksWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListClusterTasksResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListClusterTasks",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/cluster-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListClusterTasksResponse>(await this.callApi(params, req, runtime), new ListClusterTasksResponse({}));
  }

  /**
   * @summary Displays cluster tasks .
   *
   * @description ### Method
   * ```java
   * GET
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/cluster-tasks
   * ```
   *
   * @return ListClusterTasksResponse
   */
  async listClusterTasks(instanceId: string): Promise<ListClusterTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterTasksWithOptions(instanceId, headers, runtime);
  }

  /**
   * @summary Queries clusters.
   *
   * @description ### Method
   * ```java
   * GET
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/clusters
   * ```
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListClustersResponse
   */
  async listClustersWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListClustersResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListClusters",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/clusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListClustersResponse>(await this.callApi(params, req, runtime), new ListClustersResponse({}));
  }

  /**
   * @summary Queries clusters.
   *
   * @description ### Method
   * ```java
   * GET
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/clusters
   * ```
   *
   * @return ListClustersResponse
   */
  async listClusters(instanceId: string): Promise<ListClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClustersWithOptions(instanceId, headers, runtime);
  }

  /**
   * @summary Obtains the schema information of a specified data source.
   *
   * @description ## Method
   * `GET`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}/schemas`
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDataSourceSchemasResponse
   */
  async listDataSourceSchemasWithOptions(instanceId: string, dataSourceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDataSourceSchemasResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListDataSourceSchemas",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/data-sources/${OpenApiUtil.getEncodeParam(dataSourceName)}/schemas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDataSourceSchemasResponse>(await this.callApi(params, req, runtime), new ListDataSourceSchemasResponse({}));
  }

  /**
   * @summary Obtains the schema information of a specified data source.
   *
   * @description ## Method
   * `GET`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}/schemas`
   *
   * @return ListDataSourceSchemasResponse
   */
  async listDataSourceSchemas(instanceId: string, dataSourceName: string): Promise<ListDataSourceSchemasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourceSchemasWithOptions(instanceId, dataSourceName, headers, runtime);
  }

  /**
   * @summary Displays data source tasks.
   *
   * @description ### Method
   * ```java
   * GET
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/data-source-tasks
   * ```
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDataSourceTasksResponse
   */
  async listDataSourceTasksWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDataSourceTasksResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListDataSourceTasks",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/data-source-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDataSourceTasksResponse>(await this.callApi(params, req, runtime), new ListDataSourceTasksResponse({}));
  }

  /**
   * @summary Displays data source tasks.
   *
   * @description ### Method
   * ```java
   * GET
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/data-source-tasks
   * ```
   *
   * @return ListDataSourceTasksResponse
   */
  async listDataSourceTasks(instanceId: string): Promise<ListDataSourceTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourceTasksWithOptions(instanceId, headers, runtime);
  }

  /**
   * @summary Obtains the list of data sources.
   *
   * @description ## Method
   * `GET`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/data-sources`
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDataSourcesResponse
   */
  async listDataSourcesWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDataSourcesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListDataSources",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/data-sources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDataSourcesResponse>(await this.callApi(params, req, runtime), new ListDataSourcesResponse({}));
  }

  /**
   * @summary Obtains the list of data sources.
   *
   * @description ## Method
   * `GET`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/data-sources`
   *
   * @return ListDataSourcesResponse
   */
  async listDataSources(instanceId: string): Promise<ListDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourcesWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDatabasesResponse
   */
  async listDatabasesWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDatabasesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListDatabases",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/sql-studio/databases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDatabasesResponse>(await this.callApi(params, req, runtime), new ListDatabasesResponse({}));
  }

  /**
   * @return ListDatabasesResponse
   */
  async listDatabases(instanceId: string): Promise<ListDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatabasesWithOptions(instanceId, headers, runtime);
  }

  /**
   * @summary Obtains the data restoration version of a data source.
   *
   * @description ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}/generations?domainName={domainName}`
   *
   * @param request ListDateSourceGenerationsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDateSourceGenerationsResponse
   */
  async listDateSourceGenerationsWithOptions(instanceId: string, dataSourceName: string, request: ListDateSourceGenerationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDateSourceGenerationsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domainName)) {
      query["domainName"] = request.domainName;
    }

    if (!Util.isUnset(request.validStatus)) {
      query["validStatus"] = request.validStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDateSourceGenerations",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/data-sources/${OpenApiUtil.getEncodeParam(dataSourceName)}/generations`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDateSourceGenerationsResponse>(await this.callApi(params, req, runtime), new ListDateSourceGenerationsResponse({}));
  }

  /**
   * @summary Obtains the data restoration version of a data source.
   *
   * @description ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}/generations?domainName={domainName}`
   *
   * @param request ListDateSourceGenerationsRequest
   * @return ListDateSourceGenerationsResponse
   */
  async listDateSourceGenerations(instanceId: string, dataSourceName: string, request: ListDateSourceGenerationsRequest): Promise<ListDateSourceGenerationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDateSourceGenerationsWithOptions(instanceId, dataSourceName, request, headers, runtime);
  }

  /**
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListIndexRecoverRecordsResponse
   */
  async listIndexRecoverRecordsWithOptions(indexName: string, instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListIndexRecoverRecordsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListIndexRecoverRecords",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/indexes/${OpenApiUtil.getEncodeParam(indexName)}/actions/list-recover-records`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListIndexRecoverRecordsResponse>(await this.callApi(params, req, runtime), new ListIndexRecoverRecordsResponse({}));
  }

  /**
   * @return ListIndexRecoverRecordsResponse
   */
  async listIndexRecoverRecords(indexName: string, instanceId: string): Promise<ListIndexRecoverRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndexRecoverRecordsWithOptions(indexName, instanceId, headers, runtime);
  }

  /**
   * @summary Obtains the index list.
   *
   * @description ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes
   *
   * @param request ListIndexesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListIndexesResponse
   */
  async listIndexesWithOptions(instanceId: string, request: ListIndexesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListIndexesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.newMode)) {
      query["newMode"] = request.newMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIndexes",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/indexes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListIndexesResponse>(await this.callApi(params, req, runtime), new ListIndexesResponse({}));
  }

  /**
   * @summary Obtains the index list.
   *
   * @description ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes
   *
   * @param request ListIndexesRequest
   * @return ListIndexesResponse
   */
  async listIndexes(instanceId: string, request: ListIndexesRequest): Promise<ListIndexesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndexesWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @summary Queries instances.
   *
   * @description ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/specs?type=qrs`
   *
   * @param request ListInstanceSpecsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListInstanceSpecsResponse
   */
  async listInstanceSpecsWithOptions(instanceId: string, request: ListInstanceSpecsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstanceSpecsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstanceSpecs",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/specs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceSpecsResponse>(await this.callApi(params, req, runtime), new ListInstanceSpecsResponse({}));
  }

  /**
   * @summary Queries instances.
   *
   * @description ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/specs?type=qrs`
   *
   * @param request ListInstanceSpecsRequest
   * @return ListInstanceSpecsResponse
   */
  async listInstanceSpecs(instanceId: string, request: ListInstanceSpecsRequest): Promise<ListInstanceSpecsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceSpecsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @summary Queries instances.
   *
   * @description ### Method
   * `GET`
   * ### URI
   * `/openapi/[code]/instances`
   *
   * @param tmpReq ListInstancesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListInstancesResponse
   */
  async listInstancesWithOptions(tmpReq: ListInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      query["description"] = request.description;
    }

    if (!Util.isUnset(request.edition)) {
      query["edition"] = request.edition;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstances",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
  }

  /**
   * @summary Queries instances.
   *
   * @description ### Method
   * `GET`
   * ### URI
   * `/openapi/[code]/instances`
   *
   * @param request ListInstancesRequest
   * @return ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * @param request ListLogsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListLogsResponse
   */
  async listLogsWithOptions(instanceId: string, request: ListLogsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLogsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLogs",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListLogsResponse>(await this.callApi(params, req, runtime), new ListLogsResponse({}));
  }

  /**
   * @param request ListLogsRequest
   * @return ListLogsResponse
   */
  async listLogs(instanceId: string, request: ListLogsRequest): Promise<ListLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @summary Obtains the details of online configurations.
   *
   * @description ### Method
   * ```java
   * GET
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/node/{nodeName}/online-configs?domain={domain}
   * ```
   *
   * @param request ListOnlineConfigsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListOnlineConfigsResponse
   */
  async listOnlineConfigsWithOptions(instanceId: string, nodeName: string, request: ListOnlineConfigsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListOnlineConfigsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domain)) {
      query["domain"] = request.domain;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOnlineConfigs",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/node/${OpenApiUtil.getEncodeParam(nodeName)}/online-configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListOnlineConfigsResponse>(await this.callApi(params, req, runtime), new ListOnlineConfigsResponse({}));
  }

  /**
   * @summary Obtains the details of online configurations.
   *
   * @description ### Method
   * ```java
   * GET
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/node/{nodeName}/online-configs?domain={domain}
   * ```
   *
   * @param request ListOnlineConfigsRequest
   * @return ListOnlineConfigsResponse
   */
  async listOnlineConfigs(instanceId: string, nodeName: string, request: ListOnlineConfigsRequest): Promise<ListOnlineConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOnlineConfigsWithOptions(instanceId, nodeName, request, headers, runtime);
  }

  /**
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPausePolicysResponse
   */
  async listPausePolicysWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPausePolicysResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListPausePolicys",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/pause-policies`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPausePolicysResponse>(await this.callApi(params, req, runtime), new ListPausePolicysResponse({}));
  }

  /**
   * @return ListPausePolicysResponse
   */
  async listPausePolicys(instanceId: string): Promise<ListPausePolicysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPausePolicysWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param request ListPostQueryResultRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPostQueryResultResponse
   */
  async listPostQueryResultWithOptions(instanceId: string, request: ListPostQueryResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPostQueryResultResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.address)) {
      query["address"] = request.address;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListPostQueryResult",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPostQueryResultResponse>(await this.callApi(params, req, runtime), new ListPostQueryResultResponse({}));
  }

  /**
   * @param request ListPostQueryResultRequest
   * @return ListPostQueryResultResponse
   */
  async listPostQueryResult(instanceId: string, request: ListPostQueryResultRequest): Promise<ListPostQueryResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPostQueryResultWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @summary Queries the query result.
   *
   * @description ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/query?query=xxxx`
   *
   * @param request ListQueryResultRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListQueryResultResponse
   */
  async listQueryResultWithOptions(instanceId: string, request: ListQueryResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListQueryResultResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    if (!Util.isUnset(request.sql)) {
      query["sql"] = request.sql;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListQueryResult",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/query`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListQueryResultResponse>(await this.callApi(params, req, runtime), new ListQueryResultResponse({}));
  }

  /**
   * @summary Queries the query result.
   *
   * @description ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/query?query=xxxx`
   *
   * @param request ListQueryResultRequest
   * @return ListQueryResultResponse
   */
  async listQueryResult(instanceId: string, request: ListQueryResultRequest): Promise<ListQueryResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQueryResultWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request ListRestQueryResultRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListRestQueryResultResponse
   */
  async listRestQueryResultWithOptions(instanceId: string, request: ListRestQueryResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRestQueryResultResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.address)) {
      query["address"] = request.address;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.indexName)) {
      body["indexName"] = request.indexName;
    }

    if (!Util.isUnset(request.query)) {
      body["query"] = request.query;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListRestQueryResult",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/rest-query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRestQueryResultResponse>(await this.callApi(params, req, runtime), new ListRestQueryResultResponse({}));
  }

  /**
   * @param request ListRestQueryResultRequest
   * @return ListRestQueryResultResponse
   */
  async listRestQueryResult(instanceId: string, request: ListRestQueryResultRequest): Promise<ListRestQueryResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRestQueryResultWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @summary 通过数据源配置获取schema信息
   *
   * @param request ListSchemasRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListSchemasResponse
   */
  async listSchemasWithOptions(instanceId: string, request: ListSchemasRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSchemasResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessKey)) {
      query["accessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.accessSecret)) {
      query["accessSecret"] = request.accessSecret;
    }

    if (!Util.isUnset(request.endpoint)) {
      query["endpoint"] = request.endpoint;
    }

    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.partition)) {
      query["partition"] = request.partition;
    }

    if (!Util.isUnset(request.project)) {
      query["project"] = request.project;
    }

    if (!Util.isUnset(request.table)) {
      query["table"] = request.table;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSchemas",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/schemas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSchemasResponse>(await this.callApi(params, req, runtime), new ListSchemasResponse({}));
  }

  /**
   * @summary 通过数据源配置获取schema信息
   *
   * @param request ListSchemasRequest
   * @return ListSchemasResponse
   */
  async listSchemas(instanceId: string, request: ListSchemasRequest): Promise<ListSchemasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSchemasWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @summary 获取索引generation列表V2
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTableGenerationsResponse
   */
  async listTableGenerationsWithOptions(instanceId: string, tableName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTableGenerationsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListTableGenerations",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/tables/${OpenApiUtil.getEncodeParam(tableName)}/index_versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTableGenerationsResponse>(await this.callApi(params, req, runtime), new ListTableGenerationsResponse({}));
  }

  /**
   * @summary 获取索引generation列表V2
   *
   * @return ListTableGenerationsResponse
   */
  async listTableGenerations(instanceId: string, tableName: string): Promise<ListTableGenerationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTableGenerationsWithOptions(instanceId, tableName, headers, runtime);
  }

  /**
   * @summary 获取索引列表V2
   *
   * @param request ListTablesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTablesResponse
   */
  async listTablesWithOptions(instanceId: string, request: ListTablesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTablesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.newMode)) {
      query["newMode"] = request.newMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTables",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTablesResponse>(await this.callApi(params, req, runtime), new ListTablesResponse({}));
  }

  /**
   * @summary 获取索引列表V2
   *
   * @param request ListTablesRequest
   * @return ListTablesResponse
   */
  async listTables(instanceId: string, request: ListTablesRequest): Promise<ListTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTablesWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @summary 查标签接口
   *
   * @param tmpReq ListTagResourcesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(tmpReq: ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "resourceId", "json");
    }

    if (!Util.isUnset(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceIdShrink)) {
      query["resourceId"] = request.resourceIdShrink;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/resource-tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * @summary 查标签接口
   *
   * @param request ListTagResourcesRequest
   * @return ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取集群任务列表（数据源+集群）
   *
   * @param request ListTasksRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTasksResponse
   */
  async listTasksWithOptions(instanceId: string, request: ListTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.end)) {
      query["end"] = request.end;
    }

    if (!Util.isUnset(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTasks",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTasksResponse>(await this.callApi(params, req, runtime), new ListTasksResponse({}));
  }

  /**
   * @summary 获取集群任务列表（数据源+集群）
   *
   * @param request ListTasksRequest
   * @return ListTasksResponse
   */
  async listTasks(instanceId: string, request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTasksWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request ListVectorQueryResultRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListVectorQueryResultResponse
   */
  async listVectorQueryResultWithOptions(instanceId: string, request: ListVectorQueryResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListVectorQueryResultResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.address)) {
      query["address"] = request.address;
    }

    if (!Util.isUnset(request.queryType)) {
      query["queryType"] = request.queryType;
    }

    if (!Util.isUnset(request.vectorQueryType)) {
      query["vectorQueryType"] = request.vectorQueryType;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListVectorQueryResult",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/vector-query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListVectorQueryResultResponse>(await this.callApi(params, req, runtime), new ListVectorQueryResultResponse({}));
  }

  /**
   * @param request ListVectorQueryResultRequest
   * @return ListVectorQueryResultResponse
   */
  async listVectorQueryResult(instanceId: string, request: ListVectorQueryResultRequest): Promise<ListVectorQueryResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVectorQueryResultWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request ModifyAdvanceConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyAdvanceConfigResponse
   */
  async modifyAdvanceConfigWithOptions(instanceId: string, configName: string, request: ModifyAdvanceConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyAdvanceConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.contentType)) {
      body["contentType"] = request.contentType;
    }

    if (!Util.isUnset(request.desc)) {
      body["desc"] = request.desc;
    }

    if (!Util.isUnset(request.files)) {
      body["files"] = request.files;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

    if (!Util.isUnset(request.updateTime)) {
      body["updateTime"] = request.updateTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAdvanceConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/advanced-configs/${OpenApiUtil.getEncodeParam(configName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyAdvanceConfigResponse>(await this.callApi(params, req, runtime), new ModifyAdvanceConfigResponse({}));
  }

  /**
   * @param request ModifyAdvanceConfigRequest
   * @return ModifyAdvanceConfigResponse
   */
  async modifyAdvanceConfig(instanceId: string, configName: string, request: ModifyAdvanceConfigRequest): Promise<ModifyAdvanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyAdvanceConfigWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * @summary Modifies the advanced configurations.
   *
   * @description ## Method
   *     put
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/file?fileName={fileName}
   *
   * @param request ModifyAdvanceConfigFileRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyAdvanceConfigFileResponse
   */
  async modifyAdvanceConfigFileWithOptions(instanceId: string, configName: string, request: ModifyAdvanceConfigFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyAdvanceConfigFileResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAdvanceConfigFile",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/advanced-configs/${OpenApiUtil.getEncodeParam(configName)}/file`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyAdvanceConfigFileResponse>(await this.callApi(params, req, runtime), new ModifyAdvanceConfigFileResponse({}));
  }

  /**
   * @summary Modifies the advanced configurations.
   *
   * @description ## Method
   *     put
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/file?fileName={fileName}
   *
   * @param request ModifyAdvanceConfigFileRequest
   * @return ModifyAdvanceConfigFileResponse
   */
  async modifyAdvanceConfigFile(instanceId: string, configName: string, request: ModifyAdvanceConfigFileRequest): Promise<ModifyAdvanceConfigFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyAdvanceConfigFileWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * @summary Modifies the description of a specified cluster.
   *
   * @description ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/clusters/{clusterName}/desc`
   *
   * @param request ModifyClusterDescRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyClusterDescResponse
   */
  async modifyClusterDescWithOptions(instanceId: string, clusterName: string, request: ModifyClusterDescRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyClusterDescResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyClusterDesc",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/clusters/${OpenApiUtil.getEncodeParam(clusterName)}/desc`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyClusterDescResponse>(await this.callApi(params, req, runtime), new ModifyClusterDescResponse({}));
  }

  /**
   * @summary Modifies the description of a specified cluster.
   *
   * @description ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/clusters/{clusterName}/desc`
   *
   * @param request ModifyClusterDescRequest
   * @return ModifyClusterDescResponse
   */
  async modifyClusterDesc(instanceId: string, clusterName: string, request: ModifyClusterDescRequest): Promise<ModifyClusterDescResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterDescWithOptions(instanceId, clusterName, request, headers, runtime);
  }

  /**
   * @summary Modifies the configuration information of a cluster.
   *
   * @description ## Request syntax
   *     PUT /openapi/ha3/instances/{instanceId}/cluster-offline-config
   *
   * @param request ModifyClusterOfflineConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyClusterOfflineConfigResponse
   */
  async modifyClusterOfflineConfigWithOptions(instanceId: string, request: ModifyClusterOfflineConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyClusterOfflineConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.buildMode)) {
      body["buildMode"] = request.buildMode;
    }

    if (!Util.isUnset(request.config)) {
      body["config"] = request.config;
    }

    if (!Util.isUnset(request.dataSourceName)) {
      body["dataSourceName"] = request.dataSourceName;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      body["dataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.dataTimeSec)) {
      body["dataTimeSec"] = request.dataTimeSec;
    }

    if (!Util.isUnset(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!Util.isUnset(request.generation)) {
      body["generation"] = request.generation;
    }

    if (!Util.isUnset(request.partition)) {
      body["partition"] = request.partition;
    }

    if (!Util.isUnset(request.pushMode)) {
      body["pushMode"] = request.pushMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyClusterOfflineConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/cluster-offline-config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyClusterOfflineConfigResponse>(await this.callApi(params, req, runtime), new ModifyClusterOfflineConfigResponse({}));
  }

  /**
   * @summary Modifies the configuration information of a cluster.
   *
   * @description ## Request syntax
   *     PUT /openapi/ha3/instances/{instanceId}/cluster-offline-config
   *
   * @param request ModifyClusterOfflineConfigRequest
   * @return ModifyClusterOfflineConfigResponse
   */
  async modifyClusterOfflineConfig(instanceId: string, request: ModifyClusterOfflineConfigRequest): Promise<ModifyClusterOfflineConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterOfflineConfigWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @summary Modifies the online configurations of a cluster.
   *
   * @description ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/cluster-online-config`
   *
   * @param request ModifyClusterOnlineConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyClusterOnlineConfigResponse
   */
  async modifyClusterOnlineConfigWithOptions(instanceId: string, request: ModifyClusterOnlineConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyClusterOnlineConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusters)) {
      body["clusters"] = request.clusters;
    }

    if (!Util.isUnset(request.config)) {
      body["config"] = request.config;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyClusterOnlineConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/cluster-online-config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyClusterOnlineConfigResponse>(await this.callApi(params, req, runtime), new ModifyClusterOnlineConfigResponse({}));
  }

  /**
   * @summary Modifies the online configurations of a cluster.
   *
   * @description ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/cluster-online-config`
   *
   * @param request ModifyClusterOnlineConfigRequest
   * @return ModifyClusterOnlineConfigResponse
   */
  async modifyClusterOnlineConfig(instanceId: string, request: ModifyClusterOnlineConfigRequest): Promise<ModifyClusterOnlineConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterOnlineConfigWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @summary 修改数据源部署信息
   *
   * @param request ModifyDataSourceDeployRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDataSourceDeployResponse
   */
  async modifyDataSourceDeployWithOptions(instanceId: string, deployName: string, dataSourceName: string, request: ModifyDataSourceDeployRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyDataSourceDeployResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.generationId)) {
      query["generationId"] = request.generationId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoBuildIndex)) {
      body["autoBuildIndex"] = request.autoBuildIndex;
    }

    if (!Util.isUnset(request.extend)) {
      body["extend"] = request.extend;
    }

    if (!Util.isUnset(request.processor)) {
      body["processor"] = request.processor;
    }

    if (!Util.isUnset(request.storage)) {
      body["storage"] = request.storage;
    }

    if (!Util.isUnset(request.swift)) {
      body["swift"] = request.swift;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDataSourceDeploy",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/data-sources/${OpenApiUtil.getEncodeParam(dataSourceName)}/deploys/${OpenApiUtil.getEncodeParam(deployName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyDataSourceDeployResponse>(await this.callApi(params, req, runtime), new ModifyDataSourceDeployResponse({}));
  }

  /**
   * @summary 修改数据源部署信息
   *
   * @param request ModifyDataSourceDeployRequest
   * @return ModifyDataSourceDeployResponse
   */
  async modifyDataSourceDeploy(instanceId: string, deployName: string, dataSourceName: string, request: ModifyDataSourceDeployRequest): Promise<ModifyDataSourceDeployResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyDataSourceDeployWithOptions(instanceId, deployName, dataSourceName, request, headers, runtime);
  }

  /**
   * @summary Modifies a file.
   *
   * @description ## Method
   *     PUT
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/versions/{versionName}/file?fileName=/root/test.txt
   *
   * @param request ModifyFileRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyFileResponse
   */
  async modifyFileWithOptions(instanceId: string, indexName: string, versionName: string, request: ModifyFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyFileResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.partition)) {
      body["partition"] = request.partition;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyFile",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/indexes/${OpenApiUtil.getEncodeParam(indexName)}/versions/${OpenApiUtil.getEncodeParam(versionName)}/file`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyFileResponse>(await this.callApi(params, req, runtime), new ModifyFileResponse({}));
  }

  /**
   * @summary Modifies a file.
   *
   * @description ## Method
   *     PUT
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/versions/{versionName}/file?fileName=/root/test.txt
   *
   * @param request ModifyFileRequest
   * @return ModifyFileResponse
   */
  async modifyFile(instanceId: string, indexName: string, versionName: string, request: ModifyFileRequest): Promise<ModifyFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyFileWithOptions(instanceId, indexName, versionName, request, headers, runtime);
  }

  /**
   * @param request ModifyIndexRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyIndexResponse
   */
  async modifyIndexWithOptions(instanceId: string, indexName: string, request: ModifyIndexRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyIndexResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.buildParallelNum)) {
      body["buildParallelNum"] = request.buildParallelNum;
    }

    if (!Util.isUnset(request.cluster)) {
      body["cluster"] = request.cluster;
    }

    if (!Util.isUnset(request.clusterConfigName)) {
      body["clusterConfigName"] = request.clusterConfigName;
    }

    if (!Util.isUnset(request.config)) {
      body["config"] = request.config;
    }

    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.dataSource)) {
      body["dataSource"] = request.dataSource;
    }

    if (!Util.isUnset(request.dataSourceInfo)) {
      body["dataSourceInfo"] = request.dataSourceInfo;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!Util.isUnset(request.mergeParallelNum)) {
      body["mergeParallelNum"] = request.mergeParallelNum;
    }

    if (!Util.isUnset(request.partition)) {
      body["partition"] = request.partition;
    }

    if (!Util.isUnset(request.pushMode)) {
      body["pushMode"] = request.pushMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/indexes/${OpenApiUtil.getEncodeParam(indexName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyIndexResponse>(await this.callApi(params, req, runtime), new ModifyIndexResponse({}));
  }

  /**
   * @param request ModifyIndexRequest
   * @return ModifyIndexResponse
   */
  async modifyIndex(instanceId: string, indexName: string, request: ModifyIndexRequest): Promise<ModifyIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyIndexWithOptions(instanceId, indexName, request, headers, runtime);
  }

  /**
   * @summary 修改索引在线策略
   *
   * @param request ModifyIndexOnlineStrategyRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyIndexOnlineStrategyResponse
   */
  async modifyIndexOnlineStrategyWithOptions(instanceId: string, dataSourceName: string, deployName: string, indexName: string, request: ModifyIndexOnlineStrategyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyIndexOnlineStrategyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeRate)) {
      body["changeRate"] = request.changeRate;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyIndexOnlineStrategy",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/data-sources/${OpenApiUtil.getEncodeParam(dataSourceName)}/deploys/${OpenApiUtil.getEncodeParam(deployName)}/indexes/${OpenApiUtil.getEncodeParam(indexName)}/online-strategy`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyIndexOnlineStrategyResponse>(await this.callApi(params, req, runtime), new ModifyIndexOnlineStrategyResponse({}));
  }

  /**
   * @summary 修改索引在线策略
   *
   * @param request ModifyIndexOnlineStrategyRequest
   * @return ModifyIndexOnlineStrategyResponse
   */
  async modifyIndexOnlineStrategy(instanceId: string, dataSourceName: string, deployName: string, indexName: string, request: ModifyIndexOnlineStrategyRequest): Promise<ModifyIndexOnlineStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyIndexOnlineStrategyWithOptions(instanceId, dataSourceName, deployName, indexName, request, headers, runtime);
  }

  /**
   * @summary Modifies the information about index partitions.
   *
   * @description ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/index-partition`
   *
   * @param request ModifyIndexPartitionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyIndexPartitionResponse
   */
  async modifyIndexPartitionWithOptions(instanceId: string, request: ModifyIndexPartitionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyIndexPartitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSourceName)) {
      body["dataSourceName"] = request.dataSourceName;
    }

    if (!Util.isUnset(request.domainName)) {
      body["domainName"] = request.domainName;
    }

    if (!Util.isUnset(request.generation)) {
      body["generation"] = request.generation;
    }

    if (!Util.isUnset(request.indexInfos)) {
      body["indexInfos"] = request.indexInfos;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyIndexPartition",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/index-partition`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyIndexPartitionResponse>(await this.callApi(params, req, runtime), new ModifyIndexPartitionResponse({}));
  }

  /**
   * @summary Modifies the information about index partitions.
   *
   * @description ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/index-partition`
   *
   * @param request ModifyIndexPartitionRequest
   * @return ModifyIndexPartitionResponse
   */
  async modifyIndexPartition(instanceId: string, request: ModifyIndexPartitionRequest): Promise<ModifyIndexPartitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyIndexPartitionWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @summary Modifies the index version of a cluster (an index version rollback).
   *
   * @description ## Method
   *     PUT
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/clusters/{clusterName}/index-version
   *
   * @param request ModifyIndexVersionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyIndexVersionResponse
   */
  async modifyIndexVersionWithOptions(instanceId: string, clusterName: string, request: ModifyIndexVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyIndexVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyIndexVersion",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/clusters/${OpenApiUtil.getEncodeParam(clusterName)}/index-version`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyIndexVersionResponse>(await this.callApi(params, req, runtime), new ModifyIndexVersionResponse({}));
  }

  /**
   * @summary Modifies the index version of a cluster (an index version rollback).
   *
   * @description ## Method
   *     PUT
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/clusters/{clusterName}/index-version
   *
   * @param request ModifyIndexVersionRequest
   * @return ModifyIndexVersionResponse
   */
  async modifyIndexVersion(instanceId: string, clusterName: string, request: ModifyIndexVersionRequest): Promise<ModifyIndexVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyIndexVersionWithOptions(instanceId, clusterName, request, headers, runtime);
  }

  /**
   * @summary Modifies the configurations of a node.
   *
   * @description ### Method
   * ```java
   * PUT
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/node-config?type=qrs&name=test
   * ```
   *
   * @param request ModifyNodeConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyNodeConfigResponse
   */
  async modifyNodeConfigWithOptions(instanceId: string, request: ModifyNodeConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyNodeConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterName)) {
      query["clusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.dataSourceName)) {
      query["dataSourceName"] = request.dataSourceName;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.active)) {
      body["active"] = request.active;
    }

    if (!Util.isUnset(request.dataDuplicateNumber)) {
      body["dataDuplicateNumber"] = request.dataDuplicateNumber;
    }

    if (!Util.isUnset(request.dataFragmentNumber)) {
      body["dataFragmentNumber"] = request.dataFragmentNumber;
    }

    if (!Util.isUnset(request.flowRatio)) {
      body["flowRatio"] = request.flowRatio;
    }

    if (!Util.isUnset(request.minServicePercent)) {
      body["minServicePercent"] = request.minServicePercent;
    }

    if (!Util.isUnset(request.published)) {
      body["published"] = request.published;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyNodeConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/node-config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyNodeConfigResponse>(await this.callApi(params, req, runtime), new ModifyNodeConfigResponse({}));
  }

  /**
   * @summary Modifies the configurations of a node.
   *
   * @description ### Method
   * ```java
   * PUT
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/node-config?type=qrs&name=test
   * ```
   *
   * @param request ModifyNodeConfigRequest
   * @return ModifyNodeConfigResponse
   */
  async modifyNodeConfig(instanceId: string, request: ModifyNodeConfigRequest): Promise<ModifyNodeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyNodeConfigWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @summary Modifies online configurations.
   *
   * @description ### Method
   * ```java
   * put
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/node/{nodeName}/online-configs/{indexName}
   * ```
   *
   * @param request ModifyOnlineConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyOnlineConfigResponse
   */
  async modifyOnlineConfigWithOptions(instanceId: string, nodeName: string, indexName: string, request: ModifyOnlineConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyOnlineConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyOnlineConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/node/${OpenApiUtil.getEncodeParam(nodeName)}/online-configs/${OpenApiUtil.getEncodeParam(indexName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyOnlineConfigResponse>(await this.callApi(params, req, runtime), new ModifyOnlineConfigResponse({}));
  }

  /**
   * @summary Modifies online configurations.
   *
   * @description ### Method
   * ```java
   * put
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/node/{nodeName}/online-configs/{indexName}
   * ```
   *
   * @param request ModifyOnlineConfigRequest
   * @return ModifyOnlineConfigResponse
   */
  async modifyOnlineConfig(instanceId: string, nodeName: string, indexName: string, request: ModifyOnlineConfigRequest): Promise<ModifyOnlineConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyOnlineConfigWithOptions(instanceId, nodeName, indexName, request, headers, runtime);
  }

  /**
   * @summary 修改实例的密码
   *
   * @description ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/password`
   *
   * @param request ModifyPasswordRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyPasswordResponse
   */
  async modifyPasswordWithOptions(instanceId: string, request: ModifyPasswordRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyPasswordResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.password)) {
      body["password"] = request.password;
    }

    if (!Util.isUnset(request.username)) {
      body["username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPassword",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/password`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyPasswordResponse>(await this.callApi(params, req, runtime), new ModifyPasswordResponse({}));
  }

  /**
   * @summary 修改实例的密码
   *
   * @description ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/password`
   *
   * @param request ModifyPasswordRequest
   * @return ModifyPasswordResponse
   */
  async modifyPassword(instanceId: string, request: ModifyPasswordRequest): Promise<ModifyPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyPasswordWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request ModifyPausePolicyRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyPausePolicyResponse
   */
  async modifyPausePolicyWithOptions(instanceId: string, request: ModifyPausePolicyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyPausePolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPausePolicy",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/pause-policies`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyPausePolicyResponse>(await this.callApi(params, req, runtime), new ModifyPausePolicyResponse({}));
  }

  /**
   * @param request ModifyPausePolicyRequest
   * @return ModifyPausePolicyResponse
   */
  async modifyPausePolicy(instanceId: string, request: ModifyPausePolicyRequest): Promise<ModifyPausePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyPausePolicyWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @summary 修改公网域名访问白名单
   *
   * @param request ModifyPublicUrlIpListRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyPublicUrlIpListResponse
   */
  async modifyPublicUrlIpListWithOptions(instanceId: string, request: ModifyPublicUrlIpListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyPublicUrlIpListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPublicUrlIpList",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/public-url-ip-list`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyPublicUrlIpListResponse>(await this.callApi(params, req, runtime), new ModifyPublicUrlIpListResponse({}));
  }

  /**
   * @summary 修改公网域名访问白名单
   *
   * @param request ModifyPublicUrlIpListRequest
   * @return ModifyPublicUrlIpListResponse
   */
  async modifyPublicUrlIpList(instanceId: string, request: ModifyPublicUrlIpListRequest): Promise<ModifyPublicUrlIpListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyPublicUrlIpListWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @summary 修改索引V2
   *
   * @param request ModifyTableRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyTableResponse
   */
  async modifyTableWithOptions(instanceId: string, tableName: string, request: ModifyTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyTableResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataProcessConfig)) {
      body["dataProcessConfig"] = request.dataProcessConfig;
    }

    if (!Util.isUnset(request.dataSource)) {
      body["dataSource"] = request.dataSource;
    }

    if (!Util.isUnset(request.fieldSchema)) {
      body["fieldSchema"] = request.fieldSchema;
    }

    if (!Util.isUnset(request.partitionCount)) {
      body["partitionCount"] = request.partitionCount;
    }

    if (!Util.isUnset(request.primaryKey)) {
      body["primaryKey"] = request.primaryKey;
    }

    if (!Util.isUnset(request.rawSchema)) {
      body["rawSchema"] = request.rawSchema;
    }

    if (!Util.isUnset(request.vectorIndex)) {
      body["vectorIndex"] = request.vectorIndex;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTable",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/tables/${OpenApiUtil.getEncodeParam(tableName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyTableResponse>(await this.callApi(params, req, runtime), new ModifyTableResponse({}));
  }

  /**
   * @summary 修改索引V2
   *
   * @param request ModifyTableRequest
   * @return ModifyTableResponse
   */
  async modifyTable(instanceId: string, tableName: string, request: ModifyTableRequest): Promise<ModifyTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyTableWithOptions(instanceId, tableName, request, headers, runtime);
  }

  /**
   * @summary Publishes a version of advanced configurations.
   *
   * @description ## Method
   * ~~~
   * POST
   * ~~~
   * ## URI
   * ~~~
   * /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/actions/publish
   * ~~~
   *
   * @param request PublishAdvanceConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return PublishAdvanceConfigResponse
   */
  async publishAdvanceConfigWithOptions(instanceId: string, configName: string, request: PublishAdvanceConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PublishAdvanceConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.desc)) {
      body["desc"] = request.desc;
    }

    if (!Util.isUnset(request.files)) {
      body["files"] = request.files;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PublishAdvanceConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/advanced-configs/${OpenApiUtil.getEncodeParam(configName)}/actions/publish`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PublishAdvanceConfigResponse>(await this.callApi(params, req, runtime), new PublishAdvanceConfigResponse({}));
  }

  /**
   * @summary Publishes a version of advanced configurations.
   *
   * @description ## Method
   * ~~~
   * POST
   * ~~~
   * ## URI
   * ~~~
   * /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/actions/publish
   * ~~~
   *
   * @param request PublishAdvanceConfigRequest
   * @return PublishAdvanceConfigResponse
   */
  async publishAdvanceConfig(instanceId: string, configName: string, request: PublishAdvanceConfigRequest): Promise<PublishAdvanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishAdvanceConfigWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * @summary Publishes a specified index version.
   *
   * @description ## Method
   *     POST
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/actions/publish
   *
   * @param request PublishIndexVersionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return PublishIndexVersionResponse
   */
  async publishIndexVersionWithOptions(instanceId: string, indexName: string, request: PublishIndexVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PublishIndexVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PublishIndexVersion",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/indexes/${OpenApiUtil.getEncodeParam(indexName)}/actions/publish`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PublishIndexVersionResponse>(await this.callApi(params, req, runtime), new PublishIndexVersionResponse({}));
  }

  /**
   * @summary Publishes a specified index version.
   *
   * @description ## Method
   *     POST
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/actions/publish
   *
   * @param request PublishIndexVersionRequest
   * @return PublishIndexVersionResponse
   */
  async publishIndexVersion(instanceId: string, indexName: string, request: PublishIndexVersionRequest): Promise<PublishIndexVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishIndexVersionWithOptions(instanceId, indexName, request, headers, runtime);
  }

  /**
   * @param request PushDocumentsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return PushDocumentsResponse
   */
  async pushDocumentsWithOptions(instanceId: string, dataSourceName: string, request: PushDocumentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PushDocumentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pkField)) {
      query["pkField"] = request.pkField;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "PushDocuments",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/data-sources/${OpenApiUtil.getEncodeParam(dataSourceName)}/actions/bulk`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PushDocumentsResponse>(await this.callApi(params, req, runtime), new PushDocumentsResponse({}));
  }

  /**
   * @param request PushDocumentsRequest
   * @return PushDocumentsResponse
   */
  async pushDocuments(instanceId: string, dataSourceName: string, request: PushDocumentsRequest): Promise<PushDocumentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushDocumentsWithOptions(instanceId, dataSourceName, request, headers, runtime);
  }

  /**
   * @summary Restores data from an index.
   *
   * @description ### Method
   * `POST`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/recover-index`
   *
   * @param request RecoverIndexRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecoverIndexResponse
   */
  async recoverIndexWithOptions(instanceId: string, request: RecoverIndexRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RecoverIndexResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.buildDeployId)) {
      body["buildDeployId"] = request.buildDeployId;
    }

    if (!Util.isUnset(request.dataSourceName)) {
      body["dataSourceName"] = request.dataSourceName;
    }

    if (!Util.isUnset(request.generation)) {
      body["generation"] = request.generation;
    }

    if (!Util.isUnset(request.indexName)) {
      body["indexName"] = request.indexName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecoverIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/recover-index`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RecoverIndexResponse>(await this.callApi(params, req, runtime), new RecoverIndexResponse({}));
  }

  /**
   * @summary Restores data from an index.
   *
   * @description ### Method
   * `POST`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/recover-index`
   *
   * @param request RecoverIndexRequest
   * @return RecoverIndexResponse
   */
  async recoverIndex(instanceId: string, request: RecoverIndexRequest): Promise<RecoverIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recoverIndexWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @summary 索引重建V2
   *
   * @param request ReindexRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ReindexResponse
   */
  async reindexWithOptions(instanceId: string, tableName: string, request: ReindexRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ReindexResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataTimeSec)) {
      body["dataTimeSec"] = request.dataTimeSec;
    }

    if (!Util.isUnset(request.ossDataPath)) {
      body["ossDataPath"] = request.ossDataPath;
    }

    if (!Util.isUnset(request.partition)) {
      body["partition"] = request.partition;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Reindex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/tables/${OpenApiUtil.getEncodeParam(tableName)}/reindex`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ReindexResponse>(await this.callApi(params, req, runtime), new ReindexResponse({}));
  }

  /**
   * @summary 索引重建V2
   *
   * @param request ReindexRequest
   * @return ReindexResponse
   */
  async reindex(instanceId: string, tableName: string, request: ReindexRequest): Promise<ReindexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reindexWithOptions(instanceId, tableName, request, headers, runtime);
  }

  /**
   * @summary Deletes a cluster.
   *
   * @description ### Method
   * ```java
   * DELETE
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/clusters/{clusterName}
   * ```
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RemoveClusterResponse
   */
  async removeClusterWithOptions(instanceId: string, clusterName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveClusterResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RemoveCluster",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/clusters/${OpenApiUtil.getEncodeParam(clusterName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveClusterResponse>(await this.callApi(params, req, runtime), new RemoveClusterResponse({}));
  }

  /**
   * @summary Deletes a cluster.
   *
   * @description ### Method
   * ```java
   * DELETE
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/clusters/{clusterName}
   * ```
   *
   * @return RemoveClusterResponse
   */
  async removeCluster(instanceId: string, clusterName: string): Promise<RemoveClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeClusterWithOptions(instanceId, clusterName, headers, runtime);
  }

  /**
   * @param request RenameFolderRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RenameFolderResponse
   */
  async renameFolderWithOptions(instanceId: string, database: string, folderId: string, request: RenameFolderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RenameFolderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RenameFolder",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/sql-studio/databases/${OpenApiUtil.getEncodeParam(database)}/folders/${OpenApiUtil.getEncodeParam(folderId)}/name`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RenameFolderResponse>(await this.callApi(params, req, runtime), new RenameFolderResponse({}));
  }

  /**
   * @param request RenameFolderRequest
   * @return RenameFolderResponse
   */
  async renameFolder(instanceId: string, database: string, folderId: string, request: RenameFolderRequest): Promise<RenameFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renameFolderWithOptions(instanceId, database, folderId, request, headers, runtime);
  }

  /**
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartIndexResponse
   */
  async startIndexWithOptions(instanceId: string, indexName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartIndexResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StartIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/indexes/${OpenApiUtil.getEncodeParam(indexName)}/startIndex`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartIndexResponse>(await this.callApi(params, req, runtime), new StartIndexResponse({}));
  }

  /**
   * @return StartIndexResponse
   */
  async startIndex(instanceId: string, indexName: string): Promise<StartIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startIndexWithOptions(instanceId, indexName, headers, runtime);
  }

  /**
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopIndexResponse
   */
  async stopIndexWithOptions(instanceId: string, indexName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopIndexResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/indexes/${OpenApiUtil.getEncodeParam(indexName)}/stopIndex`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopIndexResponse>(await this.callApi(params, req, runtime), new StopIndexResponse({}));
  }

  /**
   * @return StopIndexResponse
   */
  async stopIndex(instanceId: string, indexName: string): Promise<StopIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopIndexWithOptions(instanceId, indexName, headers, runtime);
  }

  /**
   * @summary Stops an FSM task.
   *
   * @description ### Method
   * ```java
   * PUT
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/stop-task/{fsmId}
   * ```
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopTaskResponse
   */
  async stopTaskWithOptions(instanceId: string, fsmId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopTask",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/stop-task/${OpenApiUtil.getEncodeParam(fsmId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopTaskResponse>(await this.callApi(params, req, runtime), new StopTaskResponse({}));
  }

  /**
   * @summary Stops an FSM task.
   *
   * @description ### Method
   * ```java
   * PUT
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/stop-task/{fsmId}
   * ```
   *
   * @return StopTaskResponse
   */
  async stopTask(instanceId: string, fsmId: string): Promise<StopTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopTaskWithOptions(instanceId, fsmId, headers, runtime);
  }

  /**
   * @summary 打标签接口
   *
   * @param request TagResourcesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      body["tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/resource-tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * @summary 打标签接口
   *
   * @param request TagResourcesRequest
   * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 删标签接口
   *
   * @param tmpReq UntagResourcesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UntagResourcesResponse
   */
  async untagResourcesWithOptions(tmpReq: UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new UntagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "resourceId", "json");
    }

    if (!Util.isUnset(tmpReq.tagKey)) {
      request.tagKeyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKey, "tagKey", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      query["all"] = request.all;
    }

    if (!Util.isUnset(request.resourceIdShrink)) {
      query["resourceId"] = request.resourceIdShrink;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKeyShrink)) {
      query["tagKey"] = request.tagKeyShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/resource-tags`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * @summary 删标签接口
   *
   * @param request UntagResourcesRequest
   * @return UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * @summary Modifies the configuration of a specified instance.
   *
   * @description ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}`
   *
   * @param request UpdateInstanceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateInstanceResponse
   */
  async updateInstanceWithOptions(instanceId: string, request: UpdateInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.components)) {
      body["components"] = request.components;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.orderType)) {
      body["orderType"] = request.orderType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceResponse>(await this.callApi(params, req, runtime), new UpdateInstanceResponse({}));
  }

  /**
   * @summary Modifies the configuration of a specified instance.
   *
   * @description ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}`
   *
   * @param request UpdateInstanceRequest
   * @return UpdateInstanceResponse
   */
  async updateInstance(instanceId: string, request: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request UpdateSqlInstanceContentRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateSqlInstanceContentResponse
   */
  async updateSqlInstanceContentWithOptions(instanceId: string, database: string, sqlInstanceId: string, request: UpdateSqlInstanceContentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSqlInstanceContentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSqlInstanceContent",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/sql-studio/databases/${OpenApiUtil.getEncodeParam(database)}/sql-instances/${OpenApiUtil.getEncodeParam(sqlInstanceId)}/content`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateSqlInstanceContentResponse>(await this.callApi(params, req, runtime), new UpdateSqlInstanceContentResponse({}));
  }

  /**
   * @param request UpdateSqlInstanceContentRequest
   * @return UpdateSqlInstanceContentResponse
   */
  async updateSqlInstanceContent(instanceId: string, database: string, sqlInstanceId: string, request: UpdateSqlInstanceContentRequest): Promise<UpdateSqlInstanceContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSqlInstanceContentWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

  /**
   * @param request UpdateSqlInstanceNameRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateSqlInstanceNameResponse
   */
  async updateSqlInstanceNameWithOptions(instanceId: string, database: string, sqlInstanceId: string, request: UpdateSqlInstanceNameRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSqlInstanceNameResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSqlInstanceName",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/sql-studio/databases/${OpenApiUtil.getEncodeParam(database)}/sql-instances/${OpenApiUtil.getEncodeParam(sqlInstanceId)}/name`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateSqlInstanceNameResponse>(await this.callApi(params, req, runtime), new UpdateSqlInstanceNameResponse({}));
  }

  /**
   * @param request UpdateSqlInstanceNameRequest
   * @return UpdateSqlInstanceNameResponse
   */
  async updateSqlInstanceName(instanceId: string, database: string, sqlInstanceId: string, request: UpdateSqlInstanceNameRequest): Promise<UpdateSqlInstanceNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSqlInstanceNameWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

  /**
   * @param request UpdateSqlInstanceParamsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateSqlInstanceParamsResponse
   */
  async updateSqlInstanceParamsWithOptions(instanceId: string, database: string, sqlInstanceId: string, request: UpdateSqlInstanceParamsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSqlInstanceParamsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.combineParam)) {
      body["combineParam"] = request.combineParam;
    }

    if (!Util.isUnset(request.dynamicParam)) {
      body["dynamicParam"] = request.dynamicParam;
    }

    if (!Util.isUnset(request.kvpair)) {
      body["kvpair"] = request.kvpair;
    }

    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
    }

    if (!Util.isUnset(request.staticParam)) {
      body["staticParam"] = request.staticParam;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSqlInstanceParams",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/sql-studio/databases/${OpenApiUtil.getEncodeParam(database)}/sql-instances/${OpenApiUtil.getEncodeParam(sqlInstanceId)}/params`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateSqlInstanceParamsResponse>(await this.callApi(params, req, runtime), new UpdateSqlInstanceParamsResponse({}));
  }

  /**
   * @param request UpdateSqlInstanceParamsRequest
   * @return UpdateSqlInstanceParamsResponse
   */
  async updateSqlInstanceParams(instanceId: string, database: string, sqlInstanceId: string, request: UpdateSqlInstanceParamsRequest): Promise<UpdateSqlInstanceParamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSqlInstanceParamsWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

}
