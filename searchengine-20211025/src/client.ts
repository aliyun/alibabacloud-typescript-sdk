// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ErrorResponse extends $tea.Model {
  /**
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @example
   * internal server error
   */
  message?: string;
  /**
   * @example
   * 90D6B8F5-FE97-4509-9AAB-367836C51818
   */
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
  /**
   * @remarks
   * The maximum number of full indexes that can be concurrently built.
   * 
   * @example
   * 2
   */
  buildParallelNum?: number;
  /**
   * @remarks
   * The maximum number of full indexes that can be concurrently merged.
   * 
   * @example
   * 2
   */
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
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * gfasdds2****2wfrkv
   */
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
  /**
   * @remarks
   * Indicates whether all pushes are suspended.
   * 
   * @example
   * true
   */
  pauseAll?: boolean;
  /**
   * @remarks
   * Indicates whether the push is suspended for the new full index version.
   * 
   * @example
   * true
   */
  pauseIndex?: boolean;
  /**
   * @remarks
   * Indicates whether the push is suspended for the incremental indexes.
   * 
   * @example
   * true
   */
  pauseIndexBatch?: boolean;
  /**
   * @remarks
   * Indicates whether the push is suspended for the configuration.
   * 
   * @example
   * true
   */
  pauseBiz?: boolean;
  /**
   * @remarks
   * Indicates whether the push is suspended for the real-time incremental indexes.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * Specifies whether the variable is not allowed to be modified.
   * 
   * @example
   * false
   */
  disableModify?: boolean;
  /**
   * @remarks
   * Specifies whether the variable is modified.
   * 
   * @example
   * false
   */
  isModify?: boolean;
  /**
   * @remarks
   * The variable value.
   * 
   * @example
   * ""
   */
  value?: string;
  /**
   * @remarks
   * The description of the variable.
   * 
   * @example
   * ""
   */
  description?: string;
  /**
   * @remarks
   * The template value of the variable.
   * 
   * @example
   * ""
   */
  templateValue?: string;
  /**
   * @remarks
   * The variable type. Valid values:
   * 
   * *   NORMAL: common variable
   * *   FUNCTION: function variable
   * 
   * @example
   * NORMAL
   */
  type?: string;
  /**
   * @remarks
   * The function variables.
   */
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
  /**
   * @remarks
   * The description of the offline configuration.
   * 
   * @example
   * test
   */
  desc?: string;
  /**
   * @remarks
   * The files to be modified.
   */
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
  /**
   * @remarks
   * Specifies whether to suspend all pushes.
   * 
   * @example
   * true
   */
  pauseAll?: boolean;
  /**
   * @remarks
   * Specifies whether to suspend the push for the new full index version.
   * 
   * @example
   * true
   */
  pauseIndex?: boolean;
  /**
   * @remarks
   * Specifies whether to suspend the push for the incremental indexes.
   * 
   * @example
   * true
   */
  pauseIndexBatch?: boolean;
  /**
   * @remarks
   * Specifies whether to suspend the push for the configuration.
   * 
   * @example
   * true
   */
  pauseBiz?: boolean;
  /**
   * @remarks
   * Specifies whether to suspend the push for the real-time incremental indexes.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The description of the variable.
   * 
   * @example
   * Custom variable
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the variable is not allowed to be modified.
   * 
   * @example
   * true
   */
  disableModify?: boolean;
  /**
   * @remarks
   * Specifies whether the variable is modified.
   * 
   * @example
   * true
   */
  isModify?: boolean;
  /**
   * @remarks
   * The variable type. Valid values: NORMAL: common variable. FUNCTION: function variable.
   * 
   * @example
   * NORMAL
   */
  type?: string;
  /**
   * @remarks
   * The variable value.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * The description of the variable.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the variable is not allowed to be modified.
   * 
   * @example
   * true
   */
  disableModify?: boolean;
  /**
   * @remarks
   * Specifies whether the variable is modified.
   * 
   * @example
   * false
   */
  isModify?: boolean;
  /**
   * @remarks
   * The variable type. Valid values: NORMAL: common variable. FUNCTION: function variable.
   * 
   * @example
   * NORMAL
   */
  type?: string;
  /**
   * @remarks
   * The variable value.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * The reindexing method. Valid values: api: API data source. indexRecover: data recovery by using indexing.
   * 
   * @example
   * indexRecover
   */
  buildMode?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * my_data_source
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * swift
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The timestamp in seconds. The value must be of the INTEGER type. This parameter is required if you specify an API data source.
   * 
   * @example
   * 1640867288
   */
  dataTimeSec?: number;
  /**
   * @remarks
   * The data center in which the data source is deployed.
   * 
   * @example
   * test
   */
  domain?: string;
  /**
   * @remarks
   * The data restoration version.
   * 
   * @example
   * 160131146
   */
  generation?: number;
  /**
   * @remarks
   * The partition in the MaxCompute table. This parameter is required if type is set to odps.
   * 
   * @example
   * 20201010
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 407BFD91-DE7D-50BA-8F88-CDE52A3B5E46
   */
  requestId?: string;
  /**
   * @remarks
   * The list of clusters
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * new resource group id
   * 
   * @example
   * rg-acfmxr3gs*****
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * instance
   */
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
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * NodeVO
   */
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

export class CreateAliasRequest extends $tea.Model {
  /**
   * @remarks
   * alias name
   * 
   * @example
   * test
   */
  alias?: string;
  /**
   * @remarks
   * index name
   * 
   * @example
   * index
   */
  index?: string;
  /**
   * @remarks
   * Specifies whether the OpenSearch Vector Search Edition instance is of the new version.
   * 
   * @example
   * true
   */
  newMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      index: 'index',
      newMode: 'newMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      index: 'string',
      newMode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasResponseBody extends $tea.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * Map
   * 
   * @example
   * {}
   */
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

export class CreateAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAliasResponseBody;
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
      body: CreateAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic connection.
   * 
   * @example
   * true
   */
  autoLoad?: boolean;
  /**
   * @remarks
   * The details of the Searcher workers.
   */
  dataNode?: CreateClusterRequestDataNode;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * "ha-tets"
   */
  description?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * ha-cn-zvp2qr1sk01_qrs
   */
  name?: string;
  /**
   * @remarks
   * The details of the Query Result Searcher (QRS) workers.
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The directory name.
   * 
   * @example
   * /clusters
   */
  dirName?: string;
  /**
   * @remarks
   * The path of the parent directory.
   * 
   * @example
   * /
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The name of the directory.
   * 
   * @example
   * /schemas/device_event_xt_schema.json
   */
  fileName?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) URL of the file.
   * 
   * @example
   * oss://xxx/xxxx/xxx
   */
  ossPath?: string;
  /**
   * @remarks
   * The path of the parent directory.
   * 
   * @example
   * /
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE03180A-0E29-5474-8A86-33F0683294A4
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * Specifies whether to automatically rebuild the index.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * The configuration information.
   */
  config?: CreateDataSourceRequestConfig;
  /**
   * @remarks
   * The data center in which the data source is deployed.
   * 
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-pl32rf0****_test_api
   */
  name?: string;
  /**
   * @remarks
   * The configurations of the SARO data source.
   */
  saroConfig?: CreateDataSourceRequestSaroConfig;
  /**
   * @remarks
   * The type of the data source. Valid values: odps, oss, and swift.
   * 
   * @example
   * odps
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. This parameter is only used to check whether the data source is valid. Valid values: true and false.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gist_qc
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  parent?: number;
  /**
   * @remarks
   * table, instance, template, function
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * NodeVO
   */
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
  /**
   * @remarks
   * The maximum number of full indexes that can be concurrently built.
   * 
   * @example
   * 2
   */
  buildParallelNum?: number;
  /**
   * @remarks
   * The index schema.
   * 
   * @example
   * {\\"summarys\\":{\\"summary_fields\\":[\\"id\\"]},\\"indexs\\":[{\\"index_name\\":\\"index_id\\",\\"index_type\\":\\"PRIMARYKEY64\\",\\"index_fields\\":\\"id\\",\\"has_primary_key_attribute\\":true,\\"is_primary_key_sorted\\":false}],\\"attributes\\":[\\"id\\"],\\"fields\\":[{\\"field_name\\":\\"id\\",\\"field_type\\":\\"UINT16\\"}],\\"table_name\\":\\"index_2\\"}
   */
  content?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * test1
   */
  dataSource?: string;
  /**
   * @remarks
   * The information about the data source. This parameter is required for an OpenSearch Vector Search Edition instance of the new version.
   */
  dataSourceInfo?: CreateIndexRequestDataSourceInfo;
  /**
   * @remarks
   * The data center in which the data source is deployed.
   * 
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * The extended content of the field configuration. key specifies the vector field and the field that requires embedding.
   * 
   * @example
   * {
   *         "vector":
   *         [
   *             "source_image_vector"
   *         ],
   *         "embeding":
   *         [
   *             "source_image"
   *         ],
   *         "description":
   *         []
   *     }
   */
  extend?: { [key: string]: any };
  /**
   * @remarks
   * The maximum number of full indexes that can be concurrently merged.
   * 
   * @example
   * 2
   */
  mergeParallelNum?: number;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * ha-cn-zvp2qr1sk01_qrs
   */
  name?: string;
  /**
   * @remarks
   * The number of data shards.
   * 
   * @example
   * 20211202
   */
  partition?: number;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. The system only checks the validity of the data source. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 407BFD91-DE7D-50BA-8F88-CDE52A3B5E46
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The billing method of the instance. Valid values: PREPAY: subscription. If you set this parameter to PREPAY, make sure that your Alibaba Cloud account supports balance payment or credit card payment. Otherwise, the system returns the InvalidPayMethod error message. If you set this parameter to PREPAY, you must also specify paymentInfo. POSTPAY: pay-as-you-go. This billing method is not supported.
   * 
   * @example
   * ""
   */
  chargeType?: string;
  /**
   * @remarks
   * The information about the instance specification.
   */
  components?: CreateInstanceRequestComponents[];
  /**
   * @remarks
   * The billing information.
   */
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
  /**
   * @remarks
   * The ID of the request
   * 
   * @example
   * D39EE0F1-D7EF-5F46-B781-6BF4185308B0
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -1
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * B43CD1BB-ABD7-59C5-B89A-6E5F6FE60A84
   */
  requestId?: string;
  /**
   * @remarks
   * NodeVO
   */
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
  /**
   * @remarks
   * The configurations about field processing.
   */
  dataProcessConfig?: CreateTableRequestDataProcessConfig[];
  /**
   * @remarks
   * The number of resources used for data update.
   * 
   * @example
   * 1
   */
  dataProcessorCount?: number;
  /**
   * @remarks
   * The configurations of the data source.
   */
  dataSource?: CreateTableRequestDataSource;
  /**
   * @remarks
   * The fields.
   */
  fieldSchema?: { [key: string]: string };
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * index_1
   */
  name?: string;
  /**
   * @remarks
   * The number of data shards.
   * 
   * @example
   * 1
   */
  partitionCount?: number;
  /**
   * @remarks
   * The primary key field.
   * 
   * @example
   * id
   */
  primaryKey?: string;
  /**
   * @remarks
   * The instance schema. If this parameter is specified, the parameters about the index are not required.
   * 
   * @example
   * {}
   */
  rawSchema?: string;
  /**
   * @remarks
   * The index schema.
   */
  vectorIndex?: CreateTableRequestVectorIndex[];
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. The system only checks the validity of the data source. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * Map
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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

export class DeleteAliasResponseBody extends $tea.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * FE03180A-0E29-5474-8A86-33F0683294A4
   */
  requestId?: string;
  /**
   * @remarks
   * Map
   * 
   * @example
   * {}
   */
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

export class DeleteAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAliasResponseBody;
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
      body: DeleteAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigDirRequest extends $tea.Model {
  /**
   * @remarks
   * The directory name.
   * 
   * This parameter is required.
   * 
   * @example
   * /clusters
   */
  dirName?: string;
  /**
   * @remarks
   * The path of the parent directory.
   * 
   * This parameter is required.
   * 
   * @example
   * /
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F43E8AB4-419C-5F4C-90D6-615590DFAA3C
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The file name.
   * 
   * This parameter is required.
   * 
   * @example
   * /schemas/automobile_vector_schema.json
   */
  fileName?: string;
  /**
   * @remarks
   * The path of the parent directory.
   * 
   * This parameter is required.
   * 
   * @example
   * /
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The ID of the request
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * The result returned
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
   */
  requestId?: string;
  /**
   * @remarks
   * Response<Map<String, String>>
   */
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
  /**
   * @remarks
   * The data source.
   * 
   * This parameter is required.
   * 
   * @example
   * ha-cn-pl32rf0js04_test
   */
  dataSource?: string;
  /**
   * @remarks
   * Specifies whether to delete the data source.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the index
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
   */
  requestId?: string;
  /**
   * @remarks
   * The result
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The ID of the request
   * 
   * @example
   * E45380E8-994A-5402-9806-F114B3295FCF
   */
  requestId?: string;
  /**
   * @remarks
   * The result returned
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F43E8AB4-419C-5F4C-90D6-615590DFAA3C
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * Response<Map<String, String>>
   */
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
  /**
   * @remarks
   * requestId
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * Map
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The language of the response. Default value: zh-cn.
   * 
   * @example
   * zh-cn
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * select * from test
   */
  content?: string;
  /**
   * @example
   * vpc_hz_domain_1
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * FE03180A-0E29-5474-8A86-33F0683294A4
   */
  requestId?: string;
  /**
   * @remarks
   * NodeVO
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B1FF998-BB8D-5182-BFC0-E471AA77095A
   */
  requestId?: string;
  /**
   * @remarks
   * The index information.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * *   The type of the advanced configuration. Valid values: -ONLINE: online configuration
   * *   \\-ONLINE_CAVA: online Cava configuration
   * *   \\-ONLINE_PLUGIN: online plug-in configuration
   * *   \\-ONLINE_QUERY: query configuration
   * *   \\-OFFLINE_DICT: offline dictionary configuration
   * *   \\-OFFLINE_TABLE: offline table configuration
   * *   \\-OFFLINE_COMMON: offline configuration
   * *   \\-OFFLINE_PLUGIN: offline plug-in configuration
   * *   \\-OFFLINE_INDEX: index configuration
   * 
   * @example
   * ONLINE
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E45380E8-994A-5402-9806-F114B3295FCF
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
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
  /**
   * @remarks
   * The name of the file
   * 
   * This parameter is required.
   * 
   * @example
   * /intervene_dict/chn_ecommerce_general.dict
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * The clusters.
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E45380E8-994A-5402-9806-F114B3295FCF
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
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
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FE03180A-0E29-5474-8A86-33F0683294A4
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the data source.
   */
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
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
   */
  requestId?: string;
  /**
   * @remarks
   * List
   */
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
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The name of the file in full path
   * 
   * This parameter is required.
   * 
   * @example
   * /schemas/automobile_vector_schema.json
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * The index information.
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4FB0325E-8C37-5525-96AC-0333523170A3
   */
  requestId?: string;
  /**
   * @remarks
   * The index information.
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE03180A-0E29-5474-8A86-33F0683294A4
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * The clusters.
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   */
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
  /**
   * @remarks
   * The name of the cluster
   * 
   * @example
   * vpc_sh_domain_2
   */
  clusterName?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * ha-cn-30174dhoz53_qrs
   */
  name?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * *   qrs: Query Result Searcher (QRS) worker
   * *   search: Search worker
   * *   index: index
   * *   cluster: cluster
   * 
   * @example
   * index
   */
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
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * The result set.
   */
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
  /**
   * @example
   * 1
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * InstanceVersionVO
   */
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
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   */
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
  /**
   * @remarks
   * requestId
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * The result returned.
   */
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
  /**
   * @remarks
   * The name of the directory
   * 
   * This parameter is required.
   * 
   * @example
   * /zones/general
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * The advanced configuration files.
   */
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
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-pl32rf0****_test_api
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * test_api
   */
  indexName?: string;
  /**
   * @remarks
   * Specifies whether the OpenSearch Vector Search Edition instance is of the new version.
   * 
   * @example
   * true
   */
  newMode?: boolean;
  /**
   * @remarks
   * The type of advanced configurations that you want to query. Valid values: - online -offline (default)
   * 
   * @example
   * online
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4FB0325E-8C37-5525-96AC-0333523170A3
   */
  requestId?: string;
  /**
   * @remarks
   * The advanced configurations.
   */
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

export class ListAliasesResponseBody extends $tea.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * List
   */
  result?: ListAliasesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAliasesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAliasesResponseBody;
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
      body: ListAliasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNamesResponseBody extends $tea.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * F6E3D968-529C-5C40-AFDD-133A8B8FD930
   */
  requestId?: string;
  /**
   * @remarks
   * The result set.
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * CC5EC8FA-5C0D-56AF-BEF4-6FCCEABD0511
   */
  requestId?: string;
  /**
   * @remarks
   * The index information.
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * F43E8AB4-419C-5F4C-90D6-615590DFAA3C
   */
  requestId?: string;
  /**
   * @remarks
   * The clusters.
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * CC5EC8FA-5C0D-56AF-BEF4-6FCCEABD0511
   */
  requestId?: string;
  /**
   * @remarks
   * The index information.
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 93A9E542-8CF8-5BA6-99AB-94C0FE520429
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * E45380E8-994A-5402-9806-F114B3295FCF
   */
  requestId?: string;
  /**
   * @remarks
   * NodeTreeVO
   */
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
  /**
   * @remarks
   * The data center where the data source is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * bj_vpc_domain_1
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies the index versions to be returned. Valid values:
   * 
   * 1.  true (default): returns the index versions that are complete and not expired.
   * 2.  false: returns all index versions.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
   */
  requestId?: string;
  /**
   * @remarks
   * List
   */
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
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  desc?: string;
  /**
   * @remarks
   * The time when the index version was published.
   * 
   * @example
   * 2024-06-07 16:43:00
   */
  finishedTime?: string;
  /**
   * @remarks
   * The ID of the full index version.
   * 
   * @example
   * 1708674867
   */
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
  /**
   * @remarks
   * Specifies whether the OpenSearch Vector Search Edition instance is of the new version.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4FB0325E-8C37-5525-96AC-0333523170A3
   */
  requestId?: string;
  /**
   * @remarks
   * The details of indexes.
   */
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
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * *   qrs: Query Result Searcher (QRS) Worker
   * *   search: Searcher Worker
   * *   index: index node
   * *   cluster: cluster
   * 
   * This parameter is required.
   * 
   * @example
   * search
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * The instance types.
   */
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
  /**
   * @remarks
   * The description of the instance. You can use this description to filter instances. Fuzzy match is supported.
   * 
   * @example
   * Havenask instance
   */
  description?: string;
  /**
   * @remarks
   * The instance type. Valid values: vector: OpenSearch Vector Search Edition instance. engine: OpenSearch Retrieval Engine Edition instance.
   * 
   * @example
   * vector
   */
  edition?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ha-cn-83570439y0n
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aekzgpiswzbksdi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
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
  /**
   * @remarks
   * The description of the instance. You can use this description to filter instances. Fuzzy match is supported.
   * 
   * @example
   * Havenask instance
   */
  description?: string;
  /**
   * @remarks
   * The instance type. Valid values: vector: OpenSearch Vector Search Edition instance. engine: OpenSearch Retrieval Engine Edition instance.
   * 
   * @example
   * vector
   */
  edition?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ha-cn-83570439y0n
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aekzgpiswzbksdi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
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
  /**
   * @remarks
   * The ID of the request
   * 
   * @example
   * 89B968E6-1E41-58DF-BB25-5F98ECC759CE
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   */
  result?: ListInstancesResponseBodyResult[];
  /**
   * @remarks
   * The total number of entries returned
   * 
   * @example
   * 5
   */
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
  /**
   * @remarks
   * The end tim. The value is a timestamp in seconds.
   * 
   * @example
   * 1710432000
   */
  endTime?: string;
  /**
   * @remarks
   * The number of entries per num. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The query statement
   * 
   * @example
   * status: 200 AND totalTime > 0.01
   */
  query?: string;
  /**
   * @remarks
   * The start time. The value is a timestamp in seconds.
   * 
   * @example
   * 1706340600
   */
  startTime?: string;
  /**
   * @remarks
   * -push   -select
   * 
   * @example
   * push
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
   */
  requestId?: string;
  /**
   * @remarks
   * ListResult
   */
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
  /**
   * @remarks
   * The name of the domain
   * 
   * This parameter is required.
   * 
   * @example
   * sz_vpc_domain_1
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * E45380E8-994A-5402-9806-F114B3295FCF
   */
  requestId?: string;
  /**
   * @remarks
   * List
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
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
  /**
   * @remarks
   * The instance endpoint.
   * 
   * @example
   * 127.0.0.1
   */
  address?: string;
  /**
   * @remarks
   * The request body.
   * 
   * @example
   * {}
   */
  body?: { [key: string]: any };
  /**
   * @remarks
   * The query type. Valid values: sql: SQL query. ha3: Havenask query.
   * 
   * @example
   * ha3
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The query statement
   * 
   * @example
   * query%3D1%26%26config%3Dstart%3A0%2Chit%3A10%2Cformat%3Ajson%26%26cluster%3Dgeneral
   */
  query?: string;
  /**
   * @remarks
   * The SQL statement that is executed in the query
   * 
   * @example
   * query%3Dselect%20max(content_id)%20from%20generation
   */
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
  /**
   * @remarks
   * The ID of the request
   * 
   * @example
   * 9E5BCFAA-98B3-51D0-9188-B1BC07589337
   */
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
  /**
   * @remarks
   * The instance endpoint.
   * 
   * @example
   * 127.0.0.1
   */
  address?: string;
  /**
   * @remarks
   * The name of the index table.
   * 
   * @example
   * main_index
   */
  indexName?: string;
  /**
   * @remarks
   * The rest query statement.
   * 
   * @example
   * query%3Drelation_id%3A%221151274675_2%22%26%26cluster%3Dgeneral%26%26config%3Dstart%3A0%2Chit%3A10%2Cformat%3Ajson
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F43E8AB4-419C-5F4C-90D6-615590DFAA3C
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The AccessKey ID of the MaxCompute data source.
   * 
   * @example
   * ak
   */
  accessKey?: string;
  /**
   * @remarks
   * The AccessKey secret of the MaxCompute data source.
   * 
   * @example
   * as
   */
  accessSecret?: string;
  /**
   * @remarks
   * The endpoint of the MaxCompute data source.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @remarks
   * The namespace of the SARO data source.
   * 
   * @example
   * igraph-cn-tl32wnrhi04
   */
  namespace?: string;
  /**
   * @remarks
   * The shard name.
   * 
   * @example
   * dt=20230520
   */
  partition?: string;
  /**
   * @remarks
   * The name of the MaxCompute project that is used as the data source.
   * 
   * @example
   * start-flask-v3-obcc
   */
  project?: string;
  /**
   * @remarks
   * The name of the MaxCompute table that is used as the data source.
   * 
   * @example
   * item
   */
  table?: string;
  /**
   * @remarks
   * The type of the data source. Valid values: odps, swift, saro, oss, and unKnow.
   * 
   * This parameter is required.
   * 
   * @example
   * odps
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE03180A-0E29-5474-8A86-33F0683294A4
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * requestId
   * 
   * @example
   * F6E3D968-529C-5C40-AFDD-133A8B8FD930
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
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
  /**
   * @remarks
   * Specifies whether the OpenSearch Vector Search Edition instance is of the new version.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
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
  /**
   * @example
   * 600********33
   */
  nextToken?: string;
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance
   */
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
  /**
   * @example
   * 600********33
   */
  nextToken?: string;
  resourceIdShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance
   */
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
  /**
   * @example
   * b56*******de4a7eca
   */
  nextToken?: string;
  /**
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
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
  /**
   * @remarks
   * The timestamp that indicates the end of the time range to query.
   * 
   * @example
   * 1690423741577
   */
  end?: number;
  /**
   * @remarks
   * The timestamp that indicates the beginning of the time range to query.
   * 
   * @example
   * 1687238865434
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D39EE0F1-D7EF-5F46-B781-6BF4185308B0
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The instance endpoint.
   * 
   * @example
   * 127.0.0.1
   */
  address?: string;
  /**
   * @remarks
   * The request body.
   * 
   * @example
   * {}
   */
  body?: { [key: string]: any };
  /**
   * @remarks
   * The query type. Valid values: vector, primary_key, and vector_text.
   * 
   * @example
   * primary_key
   */
  queryType?: string;
  /**
   * @remarks
   * The vector query type. Valid values: vector, image, and text.
   * 
   * @example
   * image
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The content of the advanced configuration that is returned.
   * 
   * @example
   * ""
   */
  content?: string;
  /**
   * @remarks
   * The type of the configuration content. Valid values: FILE, GIT, HTTP, and ODPS.
   * 
   * @example
   * FILE
   */
  contentType?: string;
  /**
   * @remarks
   * The description of the advanced configuration.
   * 
   * @example
   * test
   */
  desc?: string;
  /**
   * @remarks
   * The files.
   */
  files?: ModifyAdvanceConfigRequestFiles[];
  /**
   * @remarks
   * The name of the advanced configuration.
   * 
   * @example
   * ha-cn-zvp2qr1sk01_qrs
   */
  name?: string;
  /**
   * @remarks
   * The status of the advanced configuration. Valid values: drafting: The advanced configuration is in the draft state. used: The advanced configuration is being used. unused: The advanced configuration is not used. trash: The advanced configuration is being deleted.
   * 
   * @example
   * used
   */
  status?: string;
  /**
   * @remarks
   * The time when the advanced configuration was updated.
   * 
   * @example
   * 2024-02-27T07:50:55Z
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * "ha3"
   */
  content?: string;
  /**
   * @remarks
   * The variables.
   */
  variables?: { [key: string]: VariablesValue };
  /**
   * @remarks
   * The name of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * /qrs.json
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 93A9E542-8CF8-5BA6-99AB-94C0FE520429
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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

export class ModifyAliasRequest extends $tea.Model {
  /**
   * @remarks
   * alias name
   * 
   * @example
   * test
   */
  alias?: string;
  /**
   * @remarks
   * index name
   * 
   * @example
   * index
   */
  index?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      index: 'index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      index: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAliasResponseBody extends $tea.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * F6E3D968-529C-5C40-AFDD-133A8B8FD930
   */
  requestId?: string;
  /**
   * @remarks
   * Map
   * 
   * @example
   * {}
   */
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

export class ModifyAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAliasResponseBody;
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
      body: ModifyAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterDescRequest extends $tea.Model {
  /**
   * @remarks
   * The request body.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The ID of the request
   * 
   * @example
   * D39EE0F1-D7EF-5F46-B781-6BF4185308B0
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The reindexing method. Valid values: api: API data source. indexRecover: data recovery by using indexing.
   * 
   * @example
   * indexRecover
   */
  buildMode?: string;
  /**
   * @remarks
   * The configuration name, which is stored as a key.
   */
  config?: { [key: string]: number };
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * test1
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The type of the data source. Valid values: odps: MaxCompute. swift: Swift. unKnow: unknown type.
   * 
   * @example
   * maxComputer
   */
  dataSourceType?: string;
  /**
   * @remarks
   * This parameter is required when index building by using API data sources is triggered.
   * 
   * @example
   * 1640867288
   */
  dataTimeSec?: number;
  /**
   * @remarks
   * The data center in which the data source is deployed.
   * 
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the full index version.
   * 
   * @example
   * 160142641
   */
  generation?: number;
  /**
   * @remarks
   * This parameter is required when index building for full data in a MaxCompute data source is triggered.
   * 
   * @example
   * 20211202
   */
  partition?: string;
  /**
   * @remarks
   * The push mode of the configuration. By default, only the configuration is pushed.
   * 
   * @example
   * PUSH_ONLY
   */
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
  /**
   * @remarks
   * The ID of the request
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * The result
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The cluster information.
   */
  clusters?: string[];
  /**
   * @remarks
   * The configuration information.
   */
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
  /**
   * @remarks
   * The ID of the request
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * Map
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * Specifies whether to enable the automatic full indexing feature.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * The extended information.
   */
  extend?: ModifyDataSourceDeployRequestExtend;
  /**
   * @remarks
   * The parameters of the process.
   */
  processor?: ModifyDataSourceDeployRequestProcessor;
  /**
   * @remarks
   * The information about the data source.
   */
  storage?: ModifyDataSourceDeployRequestStorage;
  /**
   * @remarks
   * The information about the incremental data source Swift.
   */
  swift?: ModifyDataSourceDeployRequestSwift;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. The system only checks the validity of the data source. Valid values: true and false.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the full index version.
   * 
   * @example
   * 1708674867
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 93A9E542-8CF8-5BA6-99AB-94C0FE520429
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * ""
   */
  content?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * ds=20220713
   */
  partition?: number;
  /**
   * @remarks
   * The name of the file in the full path
   * 
   * This parameter is required.
   * 
   * @example
   * /schemas/generation_schema.json
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 89B968E6-1E41-58DF-BB25-5F98ECC759CE
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the index
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The maximum number of full indexes that can be concurrently built.
   * 
   * @example
   * 2
   */
  buildParallelNum?: number;
  /**
   * @remarks
   * The cluster information.
   */
  cluster?: { [key: string]: {[key: string]: any} };
  /**
   * @remarks
   * The name of the configuration file.
   * 
   * @example
   * ha-cn-35t3r02iq03@ha-cn-35t3r02iq03_test_api@hz_pre_vpc_domain_1@test_api@index_config_v1
   */
  clusterConfigName?: string;
  /**
   * @remarks
   * The information about the offline configuration.
   */
  config?: { [key: string]: ConfigValue };
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * {\\"summarys\\":{\\"summary_fields\\":[\\"id\\"]},\\"indexs\\":[{\\"index_name\\":\\"index_id\\",\\"index_type\\":\\"PRIMARYKEY64\\",\\"index_fields\\":\\"id\\",\\"has_primary_key_attribute\\":true,\\"is_primary_key_sorted\\":false}],\\"attributes\\":[\\"id\\"],\\"fields\\":[{\\"field_name\\":\\"id\\",\\"field_type\\":\\"UINT16\\"}],\\"table_name\\":\\"index_2\\"}
   */
  content?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-35t3n1yuj0d_index_1
   */
  dataSource?: string;
  /**
   * @remarks
   * The information about the data source, which is required for the new version of OpenSearch Vector Search Edition.
   */
  dataSourceInfo?: ModifyIndexRequestDataSourceInfo;
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the data center in which the data source is deployed.
   * 
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * The maximum number of full indexes that can be concurrently merged.
   * 
   * @example
   * 2
   */
  mergeParallelNum?: number;
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * 2
   */
  partition?: number;
  /**
   * @remarks
   * The push mode of the configuration. By default, only the configuration is pushed.
   * 
   * @example
   * PUSH_ONLY
   */
  pushMode?: string;
  /**
   * @remarks
   * Specifies whether to check the validity of input parameters. Default value: false.
   * 
   * Valid values:
   * 
   * *   **true**: checks only the validity of input parameters.
   * *   **false**: checks the validity of input parameters and creates an attribution configuration.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 93A9E542-8CF8-5BA6-99AB-94C0FE520429
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The index change rate.
   * 
   * @example
   * 20
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * test1
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The data center.
   * 
   * @example
   * pre_domain_1
   */
  domainName?: string;
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * 1633293829
   */
  generation?: number;
  /**
   * @remarks
   * The index information.
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 93A9E542-8CF8-5BA6-99AB-94C0FE520429
   */
  requestId?: string;
  /**
   * @remarks
   * Map
   * 
   * @example
   * []
   */
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
  /**
   * @remarks
   * The request body.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * F43E8AB4-419C-5F4C-90D6-615590DFAA3C
   */
  requestId?: string;
  /**
   * @remarks
   * result
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * Specifies whether to enable the index.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The number of data replicas.
   * 
   * @example
   * 1
   */
  dataDuplicateNumber?: number;
  /**
   * @remarks
   * The number of data shards.
   * 
   * @example
   * 1
   */
  dataFragmentNumber?: number;
  /**
   * @remarks
   * The traffic percentage.
   * 
   * @example
   * -100
   */
  flowRatio?: number;
  /**
   * @remarks
   * The minimum service ratio.
   * 
   * @example
   * 10
   */
  minServicePercent?: number;
  /**
   * @remarks
   * Specifies whether to mount the cluster.
   * 
   * @example
   * true
   */
  published?: boolean;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * vpc_sh_domain_2
   */
  clusterName?: string;
  /**
   * @remarks
   * The name of the data source. Valid values: -search: search for data. -not_search: do not search for data.
   * 
   * @example
   * ha-cn-2r42ostoc01_0704
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The name of the configuration before the modification.
   * 
   * This parameter is required.
   * 
   * @example
   * ha-cn-zvp2iv9a401_qrs
   */
  name?: string;
  /**
   * @remarks
   * The type of the algorithm. Valid values:
   * 
   * *   pop: a popularity model.
   * *   cp: a category prediction model.
   * *   hot: a top search model.
   * *   hint: a hint model.
   * *   suggest: a drop-down suggestions model.
   * 
   * This parameter is required.
   * 
   * @example
   * " "
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * D39EE0F1-D7EF-5F46-B781-6BF4185308B0
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the index
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The request body.
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * Map
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The password.
   * 
   * @example
   * ******************************
   */
  password?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * "username"
   */
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
  /**
   * @remarks
   * The ID of the request
   * 
   * @example
   * 407BFD91-DE7D-50BA-8F88-CDE52A3B5E46
   */
  requestId?: string;
  /**
   * @remarks
   * The result
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The request body.
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B1FF998-BB8D-5182-BFC0-E471AA77095A
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The request body.
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E45380E8-994A-5402-9806-F114B3295FCF
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The configurations about field processing.
   */
  dataProcessConfig?: ModifyTableRequestDataProcessConfig[];
  /**
   * @remarks
   * The configurations of the data source.
   */
  dataSource?: ModifyTableRequestDataSource;
  /**
   * @remarks
   * The fields.
   */
  fieldSchema?: { [key: string]: string };
  /**
   * @remarks
   * The number of data shards.
   * 
   * @example
   * 1
   */
  partitionCount?: number;
  /**
   * @remarks
   * The primary key field.
   * 
   * @example
   * id
   */
  primaryKey?: string;
  /**
   * @remarks
   * The instance schema. If this parameter is specified, the parameters about the index are not required.
   * 
   * @example
   * {}
   */
  rawSchema?: string;
  /**
   * @remarks
   * The index schema.
   */
  vectorIndex?: ModifyTableRequestVectorIndex[];
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. The system only checks the validity of the data source. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * FE03180A-0E29-5474-8A86-33F0683294A4
   */
  requestId?: string;
  /**
   * @remarks
   * Map
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The description of the advanced configuration.
   * 
   * @example
   * Custom configuration
   */
  desc?: string;
  /**
   * @remarks
   * The files.
   */
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
  /**
   * @remarks
   * The ID of the request
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * The result returned
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The request body.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * E45380E8-994A-5402-9806-F114B3295FCF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the index
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The request body.
   */
  body?: any[];
  /**
   * @remarks
   * The primary key field.
   * 
   * @example
   * id
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The deployment ID of the data source.
   * 
   * @example
   * 277
   */
  buildDeployId?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-pl32rf0js04_odps_first
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The ID of the full index version.
   * 
   * @example
   * 1653018575
   */
  generation?: string;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * main_index
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * The result returned by data search.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The timestamp in seconds. The value must be of the INTEGER type. This parameter is required if you specify an API data source.
   * 
   * @example
   * 1640867288
   */
  dataTimeSec?: number;
  /**
   * @remarks
   * oss data path
   * 
   * @example
   * oss://opensearch
   */
  ossDataPath?: string;
  /**
   * @remarks
   * The partition in the MaxCompute table. This parameter is required if type is set to odps.
   * 
   * @example
   * ds=20220713
   */
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
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * Map
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * E45380E8-994A-5402-9806-F114B3295FCF
   */
  requestId?: string;
  /**
   * @remarks
   * The result
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * NodeVO
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D39EE0F1-D7EF-5F46-B781-6BF4185308B0
   */
  requestId?: string;
  /**
   * @remarks
   * The index map.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * The index map.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * FE03180A-0E29-5474-8A86-33F0683294A4
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the index
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
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
  /**
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance
   */
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
  /**
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceIdShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance
   */
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
  /**
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
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
  /**
   * @remarks
   * The information about the instance specification.
   */
  components?: UpdateInstanceRequestComponents[];
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * ""
   */
  description?: string;
  /**
   * @remarks
   * The type of the order. Valid values: UPGRADE and DOWNGRADE. UPGRADE upgrades the instance specifications. DOWNGRADE: downgrades the instance specifications.
   * 
   * @example
   * ""
   */
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
  /**
   * @remarks
   * The ID of the request
   * 
   * @example
   * 90D6B8F5-FE97-4509-9AAB-367836C51818
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * select * from test
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * E45380E8-994A-5402-9806-F114B3295FCF
   */
  requestId?: string;
  /**
   * @remarks
   * InstanceVersionVO
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * NodeVO
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
   */
  requestId?: string;
  /**
   * @remarks
   * InstanceVersionVO
   */
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
  /**
   * @remarks
   * The class name of the function variable.
   * 
   * @example
   * ""
   */
  funcClassName?: string;
  /**
   * @remarks
   * The template of the function variable.
   * 
   * @example
   * ""
   */
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
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * $dictContent
   */
  content?: string;
  /**
   * @remarks
   * The variables.
   */
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
  /**
   * @remarks
   * The operation type. Valid values: UPDATE and DELETE. Default value: UPDATE.
   * 
   * @example
   * UPDATE
   */
  operateType?: string;
  /**
   * @remarks
   * The path of the parent directory.
   * 
   * @example
   * /
   */
  parentFullPath?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * /intervene_dict/中文-通用分析器.dict
   */
  fileName?: string;
  /**
   * @remarks
   * The configuration to be modified.
   */
  config?: ConfigValueFilesConfig;
  /**
   * @remarks
   * The directory name.
   * 
   * @example
   * /test
   */
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
  /**
   * @example
   * 1719221186114
   */
  gmtCreate?: string;
  /**
   * @example
   * 1719221186114
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * -cn-pl32rf0****
   */
  instanceId?: number;
  /**
   * @example
   * True
   */
  isDir?: number;
  /**
   * @example
   * general
   */
  name?: string;
  /**
   * @example
   * 1
   */
  parent?: number;
  /**
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * table, instance, template, function
   * 
   * @example
   * instance
   */
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
  /**
   * @remarks
   * The number of Searcher workers.
   * 
   * @example
   * 2
   */
  number?: number;
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The number of QRS workers.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The AccessKey ID of the MaxCompute data source.
   * 
   * @example
   * L***p
   */
  accessKey?: string;
  /**
   * @remarks
   * The AccessKey secret of the MaxCompute data source.
   * 
   * @example
   * 5**9a6
   */
  accessSecret?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * opensearch
   */
  bucket?: string;
  /**
   * @remarks
   * The endpoint of the MaxCompute or Object Storage Service (OSS) data source.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * aegis-ops
   */
  namespace?: string;
  /**
   * @remarks
   * The path of the OSS object.
   * 
   * @example
   * /opensearch/search
   */
  ossPath?: string;
  /**
   * @remarks
   * The partition in the MaxCompute table.
   * 
   * @example
   * ds=20220713
   */
  partition?: string;
  /**
   * @remarks
   * The file path in the Apsara File Storage for HDFS file system.
   * 
   * @example
   * test-hdfs-path
   */
  path?: string;
  /**
   * @remarks
   * The name of the MaxCompute project that is used as the data source.
   * 
   * @example
   * kubenest
   */
  project?: string;
  /**
   * @remarks
   * The name of the MaxCompute table that is used as the data source.
   * 
   * @example
   * item
   */
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
  /**
   * @remarks
   * The namespace of the SARO data source.
   * 
   * @example
   * igraph-cn-x0r3e3abe02
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the SARO table.
   * 
   * @example
   * index_hdfs
   */
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
  /**
   * @example
   * 1719221186114
   */
  gmtCreate?: string;
  /**
   * @example
   * 1719221186114
   */
  gmtModified?: string;
  /**
   * @example
   * 25030
   */
  id?: number;
  /**
   * @example
   * ha-cn-pl32rf0****
   */
  instanceId?: number;
  /**
   * @example
   * True
   */
  isDir?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * -1
   */
  parent?: number;
  /**
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * table, instance, template, function
   * 
   * @example
   * instance
   */
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
  /**
   * @remarks
   * The AccessKey ID of the MaxCompute data source.
   * 
   * @example
   * L***p
   */
  accessKey?: string;
  /**
   * @remarks
   * The AccessKey secret of the MaxCompute data source.
   * 
   * @example
   * 5**9a6
   */
  accessSecret?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The endpoint of the MaxCompute or Object Storage Service (OSS) data source.
   * 
   * @example
   * https://oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * @example
   * test-namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The path of the OSS object.
   * 
   * @example
   * /opensearch/oss.json
   */
  ossPath?: string;
  /**
   * @remarks
   * The partition in the MaxCompute table. This parameter is required if type is set to odps.
   * 
   * @example
   * ds=20230114
   */
  partition?: string;
  /**
   * @remarks
   * The path of the Apsara File Storage for HDFS data source.
   * 
   * @example
   * test-hdfs-path
   */
  path?: string;
  /**
   * @remarks
   * The name of the MaxCompute project that is used as the data source.
   * 
   * @example
   * bbt_algo_pai
   */
  project?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * bbt_rec_swing_u2i2i_score_be_v1
   */
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
  /**
   * @remarks
   * The namespace of the SARO data source.
   * 
   * @example
   * flink-test-fjx-default
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the SARO table.
   * 
   * @example
   * device_event_shy_summary_
   */
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
  /**
   * @remarks
   * Specifies whether to enable automatic full indexing.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * The information about the MaxCompute data source.
   */
  config?: CreateIndexRequestDataSourceInfoConfig;
  /**
   * @remarks
   * The start timestamp from which incremental data is retrieved.
   * 
   * @example
   * 1709715164
   */
  dataTimeSec?: number;
  /**
   * @remarks
   * The data center in which the data source is deployed.
   * 
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-35t3n1yuj0d_index_1
   */
  name?: string;
  /**
   * @remarks
   * The maximum number of full indexes that can be concurrently processed.
   * 
   * @example
   * 2
   */
  processParallelNum?: number;
  /**
   * @remarks
   * The number of resources used for data update.
   * 
   * @example
   * 4
   */
  processPartitionCount?: number;
  /**
   * @remarks
   * The configurations of the SARO data source.
   */
  saroConfig?: CreateIndexRequestDataSourceInfoSaroConfig;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   odps
   * *   swift
   * *   saro
   * *   oss
   * 
   * @example
   * odps
   */
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
  /**
   * @remarks
   * The code of the specification, which must be consistent with the value that you specify on the buy page.
   * 
   * @example
   * ""
   */
  code?: string;
  /**
   * @remarks
   * The value of the specification.
   * 
   * @example
   * ""
   */
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
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values: true and false.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The billing duration. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, and 12.
   * 
   * @example
   * 29
   */
  duration?: number;
  /**
   * @remarks
   * The unit of the billing duration. Valid values: Month and Year.
   * 
   * @example
   * ""
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ha-cn-2r42ppr7901
   */
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
  /**
   * @example
   * 1719220182844
   */
  gmtCreate?: string;
  /**
   * @example
   * 1719220182844
   */
  gmtModified?: string;
  /**
   * @example
   * 22
   */
  id?: number;
  /**
   * @example
   * ha-cn-pl32rf0****
   */
  instanceId?: number;
  /**
   * @example
   * true
   */
  isDir?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * -1
   */
  parent?: number;
  /**
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * table, instance, template, function
   * 
   * @example
   * instance
   */
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
  /**
   * @remarks
   * The OSS bucket.
   * 
   * @example
   * test
   */
  ossBucket?: string;
  /**
   * @remarks
   * The OSS endpoint.
   * 
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * uid
   */
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
  /**
   * @remarks
   * The source of the data to be vectorized.
   */
  srcFieldConfig?: CreateTableRequestDataProcessConfigParamsSrcFieldConfig;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * image
   */
  vectorModal?: string;
  /**
   * @remarks
   * The vectorization model.
   * 
   * @example
   * clip
   */
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
  /**
   * @remarks
   * The destination field.
   * 
   * @example
   * source_image_vector
   */
  dstField?: string;
  /**
   * @remarks
   * The method used to process the field. Valid values: copy and vectorize. A value of copy specifies that the value of the source field is copied to the destination field. A value of vectorize specifies that the value of the source field is vectorized by a vectorization model and the output vector is stored in the destination field.
   * 
   * @example
   * vectorize
   */
  operator?: string;
  /**
   * @remarks
   * The information about the model.
   */
  params?: CreateTableRequestDataProcessConfigParams;
  /**
   * @remarks
   * The source field.
   * 
   * @example
   * source_image
   */
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
  /**
   * @remarks
   * The AccessKey ID of the MaxCompute data source.
   * 
   * @example
   * ak
   */
  accessKey?: string;
  /**
   * @remarks
   * The AccessKey secret of the MaxCompute data source.
   * 
   * @example
   * as
   */
  accessSecret?: string;
  /**
   * @remarks
   * The OSS bucket.
   * 
   * @example
   * antsys-flytest-ci
   */
  bucket?: string;
  /**
   * @remarks
   * The endpoint of the MaxCompute data source.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) path.
   * 
   * @example
   * oss://opensearch
   */
  ossPath?: string;
  /**
   * @remarks
   * The partition in the MaxCompute table. This parameter is required if type is set to odps.
   * 
   * @example
   * ds=20220713
   */
  partition?: string;
  /**
   * @remarks
   * The name of the MaxCompute project that is used as the data source.
   * 
   * @example
   * project_20210220122847_3218
   */
  project?: string;
  /**
   * @remarks
   * The name of the MaxCompute table that is used as the data source.
   * 
   * @example
   * test56
   */
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
  /**
   * @remarks
   * Specifies whether to automatically rebuild the index.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * The configurations of the data source.
   */
  config?: CreateTableRequestDataSourceConfig;
  /**
   * @remarks
   * The start timestamp from which incremental data is retrieved.
   * 
   * @example
   * 1715160176
   */
  dataTimeSec?: number;
  /**
   * @remarks
   * The data source type. Valid values: odps, swift, and oss.
   * 
   * @example
   * odps
   */
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
  /**
   * @remarks
   * The index building parameters.
   * 
   * @example
   * {}
   */
  buildIndexParams?: string;
  /**
   * @remarks
   * The threshold for linear building.
   * 
   * @example
   * 5000
   */
  linearBuildThreshold?: string;
  /**
   * @remarks
   * The minimum number of retrieved candidate sets.
   * 
   * @example
   * 20000
   */
  minScanDocCnt?: string;
  /**
   * @remarks
   * The index retrieval parameters.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The configurations of the index schema.
   */
  advanceParams?: CreateTableRequestVectorIndexAdvanceParams;
  /**
   * @remarks
   * The dimension of the vector.
   * 
   * @example
   * 128
   */
  dimension?: string;
  /**
   * @remarks
   * The distance type.
   * 
   * @example
   * SquaredEuclidean
   */
  distanceType?: string;
  /**
   * @remarks
   * The name of the index schema.
   * 
   * @example
   * case_index
   */
  indexName?: string;
  /**
   * @remarks
   * The namespace field.
   * 
   * @example
   * namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The field that stores the indexes of the elements in sparse vectors.
   * 
   * @example
   * sparse_indices
   */
  sparseIndexField?: string;
  /**
   * @remarks
   * The field that stores the elements in sparse vectors.
   * 
   * @example
   * sparse_values
   */
  sparseValueField?: string;
  /**
   * @remarks
   * The vector field.
   * 
   * @example
   * source_image_vector
   */
  vectorField?: string;
  /**
   * @remarks
   * The vector retrieval algorithm.
   * 
   * @example
   * Qc
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
   */
  requestId?: string;
  /**
   * @remarks
   * The result
   */
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
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
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
  /**
   * @remarks
   * The endpoint of the region.
   * 
   * @example
   * endpoint
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The ID of the region. Valid values:
   * 
   * cn-hangzhou: China (Hangzhou)
   * 
   * cn-shanghai: China (Shanghai)
   * 
   * cn-qingdao: China (Qingdao)
   * 
   * cn-beijing: China (Beijing)
   * 
   * cn-zhangjiakou: China (Zhangjiakou)
   * 
   * cn-shenzhen: China (Shenzhen)
   * 
   * ap-southeast-1: Singapore (Singapore)
   * 
   * cn-internal: Internal Center
   * 
   * cn-zhangbei-in: Internal Center (Zhangjiakou)
   * 
   * us-west-1-in: Internal Center (US)
   * 
   * rus-west-1-in: Internal Center (Russia)
   * 
   * cn-daily: Daily Environment
   * 
   * cn-test: Joint Debugging
   * 
   * pre-hangzhou: China (Hangzhou)-Staging
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * 1719221186114
   */
  gmtCreate?: string;
  /**
   * @example
   * 1719220182844
   */
  gmtModified?: string;
  /**
   * @example
   * 22
   */
  id?: number;
  /**
   * @example
   * ha-cn-pl32rf0****
   */
  instanceId?: number;
  /**
   * @example
   * true
   */
  isDir?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * -1
   */
  parent?: number;
  /**
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * table, instance, template, function
   * 
   * @example
   * instance
   */
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
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * ""
   */
  fullPathName?: string;
  /**
   * @remarks
   * Indicates whether the file is a directory.
   * 
   * @example
   * True
   */
  isDir?: boolean;
  /**
   * @remarks
   * Indicates whether the file is a container.
   * 
   * @example
   * True
   */
  isTemplate?: boolean;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * ha-cn-2r42ostoc01_qrs
   */
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
  /**
   * @remarks
   * The content of the advanced configuration that is returned.
   * 
   * @example
   * {\\"url\\":\\"http://xxxxxx.aliyuncs.com/outnet_hz/packages/xxxxx/opensearch_offline_plugins_xxxxx.tar\\"}
   */
  content?: string;
  /**
   * @remarks
   * The type of the configuration content. Valid values: FILE, GIT, HTTP, and ODPS.
   * 
   * @example
   * FILE
   */
  contentType?: string;
  /**
   * @remarks
   * The description of the advanced configuration.
   * 
   * @example
   * close alarm, chiji id 37080
   */
  desc?: string;
  /**
   * @remarks
   * The files.
   */
  files?: GetAdvanceConfigResponseBodyResultFiles[];
  /**
   * @remarks
   * The name of the advanced configuration.
   * 
   * @example
   * ha-cn-0ju2s170b03_qrs
   */
  name?: string;
  /**
   * @remarks
   * The status of the advanced configuration. Valid values: drafting: The advanced configuration is in the draft state. used: The advanced configuration is being used. unused: The advanced configuration is not used. trash: The advanced configuration is being deleted.
   * 
   * @example
   * 0,1,3,6,8
   */
  status?: string;
  /**
   * @remarks
   * The time when the advanced configuration was updated.
   * 
   * @example
   * ""
   */
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
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * {"summarys":{"parameter":{"file_compressor":"zstd"},"summary_fields":["id"]},"file_compress":[{"name":"file_compressor","type":"zstd"},{"name":"no_compressor","type":""}],"indexs":[{"index_fields":"name","index_name":"ids","index_type":"STRING"},{"has_primary_key_attribute":true,"index_fields":"id","is_primary_key_sorted":false,"index_name":"id","index_type":"PRIMARYKEY64"}],"attributes":[{"file_compress":"no_compressor","field_name":"id"}],"fields":[{"user_defined_param":{},"compress_type":"uniq","field_type":"STRING","field_name":"id"},{"compress_type":"uniq","field_type":"STRING","field_name":"name"}],"table_name":"api"}
   */
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
  /**
   * @remarks
   * The name of the Searcher worker.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of replicas.
   * 
   * @example
   * 1
   */
  number?: number;
  /**
   * @remarks
   * The number of partitions.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The name of the QRS worker.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 1
   */
  number?: number;
  /**
   * @remarks
   * The number of replicas.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The configuration information.
   */
  config?: { [key: string]: {[key: string]: any} };
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 2021-08-09 00:01:02
   */
  configUpdateTime?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2024-05-21 16:05:26
   */
  createTime?: string;
  /**
   * @remarks
   * The effective advanced configuration version.
   * 
   * @example
   * test_yyds_data1
   */
  currentAdvanceConfigVersion?: string;
  /**
   * @remarks
   * The effective online configuration version.
   * 
   * @example
   * test_yyds_data1
   */
  currentOnlineConfigVersion?: string;
  /**
   * @remarks
   * The specifications of Searcher workers.
   */
  dataNode?: GetClusterResponseBodyResultDataNode;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * fzz_test
   */
  description?: string;
  /**
   * @remarks
   * The latest advanced configuration version.
   * 
   * @example
   * test_yyds_data1
   */
  latestAdvanceConfigVersion?: string;
  /**
   * @remarks
   * The latest online configuration version.
   * 
   * @example
   * test_yyds_data1
   */
  latestOnlineConfigVersion?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * general
   */
  name?: string;
  /**
   * @remarks
   * The specifications of Query Result Searcher (QRS) workers.
   */
  queryNode?: GetClusterResponseBodyResultQueryNode;
  /**
   * @remarks
   * The creation status of the cluster. Valid values: NEW and PUBLISH. NEW indicates that the cluster is being created. PUBLISH indicates that the cluster is created.
   * 
   * @example
   * NEW
   */
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
  /**
   * @remarks
   * The time when the configuration was last updated.
   * 
   * @example
   * ""
   */
  configUpdateTime?: string;
  /**
   * @remarks
   * The configuration progress. Unit: percentage.
   * 
   * @example
   * 100
   */
  donePercent?: number;
  /**
   * @remarks
   * The number of processed Searcher workers in the cluster.
   * 
   * @example
   * 1
   */
  doneSize?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * test_0704
   */
  name?: string;
  /**
   * @remarks
   * The total number of Searcher workers in the cluster.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * The name of the index configuration.
   * 
   * @example
   * index_meta_name
   */
  configMetaName?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1.0
   */
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
  /**
   * @remarks
   * The name of the index configuration.
   * 
   * @example
   * index_meta_name
   */
  configMetaName?: string;
  /**
   * @remarks
   * The version of the index template.
   * 
   * @example
   * 1.0.0
   */
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
  /**
   * @remarks
   * The information about the advanced configuration.
   */
  advanceConfigInfo?: GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListAdvanceConfigInfo;
  /**
   * @remarks
   * The name of the worker that failed due to a deployment failure.
   */
  deployFailedWorker?: string[];
  /**
   * @remarks
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 2
   */
  docSize?: number;
  /**
   * @remarks
   * The configuration progress. Unit: percentage.
   * 
   * @example
   * 100
   */
  donePercent?: number;
  /**
   * @remarks
   * The number of processed QRS workers in the cluster.
   * 
   * @example
   * 100
   */
  doneSize?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 0A3B1C48006A6C0905F6375F4821EB50
   */
  errorMsg?: string;
  /**
   * @remarks
   * The time when full data in the index was last updated.
   * 
   * @example
   * " "
   */
  fullUpdateTime?: string;
  /**
   * @remarks
   * The time when the full index version was generated.
   * 
   * @example
   * 123423
   */
  fullVersion?: number;
  /**
   * @remarks
   * The time when incremental data in the index was last updated.
   * 
   * @example
   * ""
   */
  incUpdateTime?: string;
  /**
   * @remarks
   * The time when the incremental index version was generated.
   * 
   * @example
   * 123423
   */
  incVersion?: number;
  /**
   * @remarks
   * The information about the index configuration.
   */
  indexConfigInfo?: GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListIndexConfigInfo;
  /**
   * @remarks
   * The index size.
   * 
   * @example
   * 100
   */
  indexSize?: number;
  /**
   * @remarks
   * The name of the worker that failed due to insufficient disks.
   */
  lackDiskWorker?: string[];
  /**
   * @remarks
   * The name of the worker that failed due to insufficient memory.
   */
  lackMemWorker?: string[];
  /**
   * @remarks
   * The name of the QRS worker.
   * 
   * @example
   * ha-cn-c4d2rq7nt04_qrs
   */
  name?: string;
  /**
   * @remarks
   * The total number of QRS workers in the cluster.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The process progress of QRS workers in the cluster. Unit: percentage.
   * 
   * @example
   * 100
   */
  donePercent?: number;
  /**
   * @remarks
   * The number of processed QRS workers in the cluster.
   * 
   * @example
   * 100
   */
  doneSize?: number;
  /**
   * @remarks
   * The name of the QRS worker.
   * 
   * @example
   * ha-cn-0ju2s170b03_qrs
   */
  name?: string;
  /**
   * @remarks
   * The total number of QRS workers in the cluster.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The configuration status.
   */
  configStatusList?: GetClusterRunTimeInfoResponseBodyResultDataNodesConfigStatusList[];
  /**
   * @remarks
   * The data of the Searcher worker.
   */
  dataStatusList?: GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusList[];
  /**
   * @remarks
   * The service status of the QRS worker.
   */
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
  /**
   * @remarks
   * The time when the configuration was last updated.
   * 
   * @example
   * " "
   */
  configUpdateTime?: string;
  /**
   * @remarks
   * The process progress of QRS workers in the cluster. Unit: percentage.
   * 
   * @example
   * 100
   */
  donePercent?: number;
  /**
   * @remarks
   * The number of processed QRS workers in the cluster.
   * 
   * @example
   * 100
   */
  doneSize?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * ha-cn-zvp2qr1sk01_qrs
   */
  name?: string;
  /**
   * @remarks
   * The total number of QRS workers in the cluster.
   * 
   * @example
   * 6
   */
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
  /**
   * @remarks
   * The process progress of QRS workers in the cluster. Unit: percentage.
   * 
   * @example
   * 100
   */
  donePercent?: number;
  /**
   * @remarks
   * The number of processed QRS workers in the cluster.
   * 
   * @example
   * 100
   */
  doneSize?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * ha-cn-c4d2rq7nt04_qrs
   */
  name?: string;
  /**
   * @remarks
   * The total number of QRS workers in the cluster.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The configuration status.
   */
  configStatusList?: GetClusterRunTimeInfoResponseBodyResultQueryNodeConfigStatusList[];
  /**
   * @remarks
   * The service status of the QRS worker.
   */
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
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * vpc_hz_domain_1
   */
  clusterName?: string;
  /**
   * @remarks
   * The information about the Searcher workers.
   */
  dataNodes?: GetClusterRunTimeInfoResponseBodyResultDataNodes[];
  /**
   * @remarks
   * The information about the Query Result Searcher (QRS) workers.
   */
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
  /**
   * @remarks
   * The data center where the data source is deployed in offline mode
   * 
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * The list of index information
   */
  indexes?: string[];
  /**
   * @remarks
   * The time when the full data of the data source was last queried.
   * 
   * @example
   * 1718787219
   */
  lastFulTime?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * my_index
   */
  name?: string;
  /**
   * @remarks
   * The status of the data source. Valid values: new: The data source is being created. publish: The data source is in the normal state. trash: The data source is being deleted.
   * 
   * @example
   * NEW
   */
  status?: string;
  /**
   * @remarks
   * The type of the data source
   * 
   * @example
   * odps
   */
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
  /**
   * @example
   * dist-dmj-job/src/main/java
   */
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
  /**
   * @example
   * oss://opensearch
   */
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
  /**
   * @example
   * dist-dmj-job/src/main/java
   */
  path?: string;
  /**
   * @example
   * 0.6.0
   */
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
  /**
   * @remarks
   * The startup parameters of the process.
   * 
   * @example
   * {}
   */
  args?: string;
  /**
   * @remarks
   * The resource information.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The AccessKey ID of the MaxCompute data source.
   * 
   * @example
   * ak
   */
  accessKey?: string;
  /**
   * @remarks
   * The AccessKey secret of the MaxCompute data source.
   * 
   * @example
   * as
   */
  accessSecret?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * antsys-miniapp-chongwen-static
   */
  bucket?: string;
  /**
   * @remarks
   * The endpoint of the MaxCompute data source.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @example
   * lazada-campaign-flink
   */
  namespace?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) path.
   * 
   * @example
   * oss://opensearch
   */
  ossPath?: string;
  /**
   * @remarks
   * The partition in the MaxCompute table. Example: ds=20180102.
   * 
   * @example
   * ds=20220926
   */
  partition?: string;
  /**
   * @example
   * /beiming_xobject/dwd_xobjectsandbox__list_create_action_by_new/
   */
  path?: string;
  /**
   * @example
   * wireless_1688_personal_rec
   */
  project?: string;
  /**
   * @example
   * behavior
   */
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
  /**
   * @remarks
   * The topic.
   * 
   * @example
   * topic
   */
  topic?: string;
  /**
   * @remarks
   * zk
   * 
   * @example
   * zk
   */
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
  /**
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  extend?: GetDataSourceDeployResponseBodyResultExtend;
  /**
   * @remarks
   * The parameters of the process.
   */
  processor?: GetDataSourceDeployResponseBodyResultProcessor;
  /**
   * @remarks
   * The information about the data source.
   */
  storage?: GetDataSourceDeployResponseBodyResultStorage;
  /**
   * @remarks
   * The information about the incremental data source Swift.
   */
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
  /**
   * @example
   * id
   */
  fieldName?: string;
  /**
   * @example
   * STRING
   */
  fieldType?: string;
  /**
   * @example
   * FT_UINT64
   */
  fieldTypeDetail?: { [key: string]: any };
  /**
   * @example
   * test_tusou_v2
   */
  indexName?: string;
  /**
   * @example
   * NUMBER
   */
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
  /**
   * @remarks
   * The name of the data center.
   * 
   * @example
   * hz_pre_vpc_domain_1
   */
  domainName?: string;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * test_api
   */
  name?: string;
  /**
   * @remarks
   * The deployment ID of the table.
   * 
   * @example
   * 2409
   */
  tableDeployId?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-pl32rf0****_test_api
   */
  tableName?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * test_api_hz_pre_vpc_domain_1
   */
  tag?: string;
  /**
   * @remarks
   * The name of the QRS worker.
   * 
   * @example
   * ha-cn-pl32rf0****_qrs
   */
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
  /**
   * @remarks
   * The name of the data center.
   * 
   * @example
   * hz_pre_vpc_domain_1
   */
  domainName?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * 5377
   */
  hippoId?: string;
  /**
   * @remarks
   * The ID of the data center.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the online cluster.
   * 
   * @example
   * ha-cn-pl32rf0****_hz_pre_vpc_domain_1
   */
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
  /**
   * @remarks
   * The ID of the offline deployment.
   * 
   * @example
   * 1
   */
  buildDeployId?: number;
  /**
   * @remarks
   * The name of the data center.
   * 
   * @example
   * hz_pre_vpc_domain_1
   */
  domainName?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-pl32rf0****_test_api
   */
  name?: string;
  /**
   * @remarks
   * The deployment ID of the table.
   * 
   * @example
   * 2177
   */
  tableDeployId?: number;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * ha-cn-pl32rf0****_test_api_hz_pre_vpc_domain_1
   */
  tag?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * odps
   */
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
  /**
   * @remarks
   * The name of the data center.
   * 
   * @example
   * hz_pre_vpc_domain_1
   */
  domainInfo?: string;
  /**
   * @remarks
   * The name of the Query Result Searcher (QRS) worker.
   * 
   * @example
   * ha-cn-pl32rf0****_qrs
   */
  name?: string;
  /**
   * @remarks
   * The name of the service that is used to manage the relationships between online clusters and indexes.
   * 
   * @example
   * ha-cn-pl32rf0****_hz_pre_vpc_domain_1
   */
  suezAdminName?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * ha-cn-pl32rf0****_qrs_hz_pre_vpc_domain_1
   */
  tag?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * qrs
   */
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
  /**
   * @remarks
   * The index metadata.
   */
  indexMetas?: GetDeployGraphResponseBodyResultGraphIndexMetas[];
  /**
   * @remarks
   * The metadata of online clusters.
   */
  onlineMaster?: GetDeployGraphResponseBodyResultGraphOnlineMaster[];
  /**
   * @remarks
   * The association relationships between data sources and indexes.
   */
  tableIndexRelation?: { [key: string]: string[] };
  /**
   * @remarks
   * The metadata of data sources.
   */
  tableMetas?: GetDeployGraphResponseBodyResultGraphTableMetas[];
  /**
   * @remarks
   * The association relationships between zones and indexes.
   */
  zoneIndexRelation?: { [key: string]: string[] };
  /**
   * @remarks
   * The zone metadata.
   */
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
  /**
   * @remarks
   * The deployment information.
   */
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
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * None
   */
  content?: string;
  /**
   * @remarks
   * The data source.
   * 
   * @example
   * ha-cn-2r42p5oi202_xijie_test
   */
  dataSource?: string;
  extend?: { [key: string]: string[] };
  /**
   * @remarks
   * The full path of the file.
   * 
   * @example
   * ""
   */
  fullPathName?: string;
  /**
   * @remarks
   * Indicates whether the file is a directory.
   * 
   * @example
   * True
   */
  isDir?: boolean;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * ha-cn-2r42ostoc01_qrs
   */
  name?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * ds=20210828
   */
  partition?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      dataSource: 'dataSource',
      extend: 'extend',
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
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
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
  /**
   * @remarks
   * The AccessKey ID of the MaxCompute data source.
   * 
   * @example
   * L***p
   */
  accessKey?: string;
  /**
   * @remarks
   * The AccessKey secret of the MaxCompute data source.
   * 
   * @example
   * 5**9a6
   */
  accessSecret?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * ha3test-oss
   */
  bucket?: string;
  /**
   * @remarks
   * The endpoint of the MaxCompute data source.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @remarks
   * The namespace. This parameter is applicable to the SARO data source used in the intranet of Alibaba Group.
   * 
   * @example
   * TEST_dump_demo_sj_na61hunbu2_share_holo
   */
  namespace?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) path.
   * 
   * @example
   * /test_opensearch/sift_oss_test.data
   */
  ossPath?: string;
  /**
   * @remarks
   * The partition in the MaxCompute table. Example: ds=20180102.
   * 
   * @example
   * ds=20220713
   */
  partition?: string;
  /**
   * @remarks
   * The file path in the Apsara File Storage for HDFS file system.
   * 
   * @example
   * http://test_opensearch/sift_oss_test.data
   */
  path?: string;
  /**
   * @remarks
   * The name of the MaxCompute project that is used as the data source.
   * 
   * @example
   * tisplus_dev
   */
  project?: string;
  /**
   * @remarks
   * The name of the MaxCompute table that is used as the data source.
   * 
   * @example
   * dump_odps_demo
   */
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
  /**
   * @remarks
   * The namespace of the SARO data source.
   * 
   * @example
   * TEST_dump_demo_sj_na61hunbu2_share_holo
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the SARO table.
   * 
   * @example
   * llm
   */
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
  /**
   * @remarks
   * Indicates whether the automatic full indexing feature is enabled.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * The configuration of MaxCompute data sources.
   */
  config?: GetIndexResponseBodyResultDataSourceInfoConfig;
  /**
   * @remarks
   * The data center in which the data source is deployed.
   * 
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-pl32rf0****_test_api
   */
  name?: string;
  /**
   * @remarks
   * The maximum number of full indexes that can be concurrently processed.
   * 
   * @example
   * 2
   */
  processParallelNum?: number;
  /**
   * @remarks
   * The number of resources used for data update.
   * 
   * @example
   * 2
   */
  processPartitionCount?: number;
  /**
   * @remarks
   * The configurations of the SARO data source.
   */
  saroConfig?: GetIndexResponseBodyResultDataSourceInfoSaroConfig;
  /**
   * @remarks
   * The type of the data source. Valid values: odps, swift, saro, oss, and unKnow.
   * 
   * @example
   * odps
   */
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
  /**
   * @remarks
   * The full path of the file.
   * 
   * @example
   * " "
   */
  fullPathName?: string;
  /**
   * @remarks
   * Indicates whether the file is a directory.
   * 
   * @example
   * True
   */
  isDir?: boolean;
  /**
   * @remarks
   * Indicates whether the file is a template.
   * 
   * @example
   * True
   */
  isTemplate?: boolean;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * qrs.json
   */
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
  /**
   * @remarks
   * The description of the version.
   * 
   * @example
   * close alarm, by 3.9.2 hotfix workflow
   */
  desc?: string;
  /**
   * @remarks
   * The information about the files.
   */
  files?: GetIndexResponseBodyResultVersionsFiles[];
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * ha-cn-7pp2ngv4s02_qrs
   */
  name?: string;
  /**
   * @remarks
   * The status of the index version. Valid values:
   * 
   * *   NEW: The index version is created.
   * *   PUBLISH: The index version is normal.
   * *   IN_USE: The index version is in use.
   * *   NOT_USE: The index version is not used.
   * *   STOP_USE: The index version is being stopped.
   * *   RESTORE_USE: The index version is being restored.
   * *   FAIL: The index version failed to be created.
   * 
   * @example
   * 2
   */
  status?: string;
  /**
   * @remarks
   * The time when the index version was updated.
   * 
   * @example
   * " "
   */
  updateTime?: number;
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The cluster information.
   */
  cluster?: { [key: string]: ResultClusterValue };
  /**
   * @remarks
   * The configuration information.
   */
  config?: { [key: string]: {[key: string]: any} };
  /**
   * @remarks
   * The configuration that takes effect next time.
   */
  configWhenBuild?: { [key: string]: {[key: string]: any} };
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * {"summarys":{"parameter":{"file_compressor":"zstd"},"summary_fields":["id"]},"file_compress":[{"name":"file_compressor","type":"zstd"},{"name":"no_compressor","type":""}],"indexs":[{"index_fields":"name","index_name":"ids","index_type":"STRING"},{"has_primary_key_attribute":true,"index_fields":"id","is_primary_key_sorted":false,"index_name":"id","index_type":"PRIMARYKEY64"}],"attributes":[{"file_compress":"no_compressor","field_name":"id"}],"fields":[{"user_defined_param":{},"compress_type":"uniq","field_type":"STRING","field_name":"id"},{"compress_type":"uniq","field_type":"STRING","field_name":"name"}],"table_name":"api"}
   */
  content?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-tl32nd2nq01_00
   */
  dataSource?: string;
  /**
   * @remarks
   * The information about the data source.
   */
  dataSourceInfo?: GetIndexResponseBodyResultDataSourceInfo;
  /**
   * @remarks
   * The description of the index version.
   * 
   * @example
   * test index
   */
  description?: string;
  /**
   * @remarks
   * The deployment name of the index.
   * 
   * @example
   * sz_vpc_domain_1
   */
  domain?: string;
  extend?: { [key: string]: string[] };
  /**
   * @remarks
   * The time when full data in the index was last updated.
   * 
   * @example
   * 2024-06-20 08:52:54
   */
  fullUpdateTime?: string;
  /**
   * @remarks
   * The data version.
   * 
   * @example
   * 1688523414
   */
  fullVersion?: number;
  /**
   * @remarks
   * The time when incremental data in the index was last updated.
   * 
   * @example
   * 2024-06-20 08:52:54
   */
  incUpdateTime?: string;
  /**
   * @remarks
   * The index size.
   * 
   * @example
   * 4689
   */
  indexSize?: number;
  /**
   * @remarks
   * The status of the index version. Valid values:
   * 
   * *   NEW: The index version is created.
   * *   PUBLISH: The index version is normal.
   * *   IN_USE: The index version is in use.
   * *   NOT_USE: The index version is not used.
   * *   STOP_USE: The index version is being stopped.
   * *   RESTORE_USE: The index version is being restored.
   * *   FAIL: The index version failed to be created.
   * 
   * @example
   * IN_USE
   */
  indexStatus?: string;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * general
   */
  name?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * 2
   */
  partition?: number;
  /**
   * @remarks
   * The information about the versions.
   */
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
      extend: 'extend',
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
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
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
  /**
   * @remarks
   * The index change rate.
   * 
   * @example
   * 20
   */
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
  /**
   * @remarks
   * The ID of the offline deployment.
   * 
   * @example
   * " "
   */
  buildDeployId?: string;
  /**
   * @remarks
   * The current online version number.
   * 
   * @example
   * 1
   */
  currentVersion?: number;
  /**
   * @remarks
   * The name of the index table.
   * 
   * @example
   * table4
   */
  indexName?: string;
  /**
   * @remarks
   * The index versions.
   */
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
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * ayoss-cn-zhangjiakou-b
   */
  cluster?: string;
  /**
   * @remarks
   * The index versions.
   */
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

export class GetInstanceResponseBodyResultNetwork extends $tea.Model {
  allow?: string;
  endpoint?: string;
  publicEndpoint?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      allow: 'allow',
      endpoint: 'endpoint',
      publicEndpoint: 'publicEndpoint',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allow: 'string',
      endpoint: 'string',
      publicEndpoint: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyResultSpecQrsResource extends $tea.Model {
  category?: string;
  cpu?: number;
  disk?: number;
  mem?: number;
  nodeCount?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      cpu: 'cpu',
      disk: 'disk',
      mem: 'mem',
      nodeCount: 'nodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      cpu: 'number',
      disk: 'number',
      mem: 'number',
      nodeCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyResultSpecSearchResource extends $tea.Model {
  category?: string;
  cpu?: number;
  disk?: number;
  mem?: number;
  nodeCount?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      cpu: 'cpu',
      disk: 'disk',
      mem: 'mem',
      nodeCount: 'nodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      cpu: 'number',
      disk: 'number',
      mem: 'number',
      nodeCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyResultSpec extends $tea.Model {
  qrsResource?: GetInstanceResponseBodyResultSpecQrsResource;
  searchResource?: GetInstanceResponseBodyResultSpecSearchResource;
  static names(): { [key: string]: string } {
    return {
      qrsResource: 'qrsResource',
      searchResource: 'searchResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qrsResource: GetInstanceResponseBodyResultSpecQrsResource,
      searchResource: GetInstanceResponseBodyResultSpecSearchResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyResultTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * prod
   */
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
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * POSYPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code of the instance.
   * 
   * @example
   * commodityCode
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2022-06-17T02:01:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * ha3_test
   */
  description?: string;
  edition?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 1634609702
   */
  expiredTime?: string;
  /**
   * @remarks
   * Indicates whether an overdue payment is involved.
   * 
   * @example
   * false
   */
  inDebt?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ha-cn-7mz2qsgq301
   */
  instanceId?: string;
  /**
   * @remarks
   * The lock status.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  network?: GetInstanceResponseBodyResultNetwork;
  newMode?: boolean;
  noQrs?: boolean;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzjvw24el5lma
   */
  resourceGroupId?: string;
  spec?: GetInstanceResponseBodyResultSpec;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   INIT: being initialized
   * *   WAIT_CONFIG: to be configured
   * *   CONFIG_UPDATING: configuration taking effect
   * *   READY: normal
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tags?: GetInstanceResponseBodyResultTags[];
  /**
   * @remarks
   * The time when the instance was updated.
   * 
   * @example
   * 1634609702
   */
  updateTime?: string;
  userName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      createTime: 'createTime',
      description: 'description',
      edition: 'edition',
      expiredTime: 'expiredTime',
      inDebt: 'inDebt',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      network: 'network',
      newMode: 'newMode',
      noQrs: 'noQrs',
      resourceGroupId: 'resourceGroupId',
      spec: 'spec',
      status: 'status',
      tags: 'tags',
      updateTime: 'updateTime',
      userName: 'userName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      createTime: 'string',
      description: 'string',
      edition: 'string',
      expiredTime: 'string',
      inDebt: 'boolean',
      instanceId: 'string',
      lockMode: 'string',
      network: GetInstanceResponseBodyResultNetwork,
      newMode: 'boolean',
      noQrs: 'boolean',
      resourceGroupId: 'string',
      spec: GetInstanceResponseBodyResultSpec,
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetInstanceResponseBodyResultTags },
      updateTime: 'string',
      userName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeConfigResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the index is effective online.
   * 
   * @example
   * 1
   */
  active?: boolean;
  /**
   * @remarks
   * The number of data replicas.
   * 
   * @example
   * 2
   */
  dataDuplicateNumber?: number;
  /**
   * @remarks
   * The number of data shards.
   * 
   * @example
   * 2
   */
  dataFragmentNumber?: number;
  /**
   * @remarks
   * The traffic percentage.
   * 
   * @example
   * 0
   */
  flowRatio?: number;
  /**
   * @remarks
   * The minimum service ratio.
   * 
   * @example
   * 100
   */
  minServicePercent?: number;
  /**
   * @remarks
   * Indicates whether the cluster is mounted.
   * 
   * @example
   * true
   */
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
  /**
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  combineParams?: string;
  /**
   * @example
   * init version
   */
  comment?: string;
  /**
   * @example
   * select * from test
   */
  content?: string;
  /**
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  dynamicParams?: string;
  /**
   * @example
   * 1719220182844
   */
  gmtCreate?: string;
  /**
   * @example
   * 1719221186114
   */
  gmtModified?: string;
  /**
   * @example
   * ha-cn-pl32rf0****
   */
  instanceId?: number;
  /**
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  kvpairs?: string;
  /**
   * @example
   * 1
   */
  relatedTemplateId?: number;
  /**
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  staticParams?: string;
  /**
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  templateParams?: string;
  /**
   * @example
   * 1
   */
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
  /**
   * @remarks
   * OSS Bucket
   * 
   * @example
   * test
   */
  ossBucket?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) endpoint.
   * 
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * uid
   */
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
  /**
   * @remarks
   * The source of the data to be vectorized.
   */
  srcFieldConfig?: GetTableResponseBodyResultDataProcessConfigParamsSrcFieldConfig;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * image
   */
  vectorModal?: string;
  /**
   * @remarks
   * The vectorization model.
   * 
   * @example
   * clip
   */
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
  /**
   * @remarks
   * The destination field.
   * 
   * @example
   * source_image_vector
   */
  dstField?: string;
  /**
   * @remarks
   * The method used to process the field. Valid values: copy and vectorize. A value of copy indicates that the value of the source field is copied to the destination field. A value of vectorize indicates that the value of the source field is vectorized by a vectorization model and the output vector is stored in the destination field.
   * 
   * @example
   * vectorize
   */
  operator?: string;
  /**
   * @remarks
   * The information about the model.
   */
  params?: GetTableResponseBodyResultDataProcessConfigParams;
  /**
   * @remarks
   * The source field.
   * 
   * @example
   * source_image
   */
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
  /**
   * @remarks
   * AK
   * 
   * @example
   * ak
   */
  accessKey?: string;
  /**
   * @remarks
   * AS
   * 
   * @example
   * as
   */
  accessSecret?: string;
  /**
   * @example
   * heytea-ops-oss
   */
  bucket?: string;
  /**
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @example
   * namespace
   */
  namespace?: string;
  /**
   * @example
   * /opensearch_index_data/sift_oss_test.data
   */
  ossPath?: string;
  /**
   * @example
   * ds=20220808
   */
  partition?: string;
  /**
   * @example
   * vendor/sebastian/comparator/src/exceptions
   */
  path?: string;
  /**
   * @example
   * dp_pdm_marketing_prod
   */
  project?: string;
  /**
   * @example
   * test_add
   */
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
  /**
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  config?: GetTableResponseBodyResultDataSourceConfig;
  /**
   * @example
   * 1715160176
   */
  dataTimeSec?: number;
  /**
   * @example
   * odps
   */
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
  /**
   * @remarks
   * The index building parameters.
   * 
   * @example
   * {}
   */
  buildIndexParams?: string;
  /**
   * @remarks
   * The threshold for linear building.
   * 
   * @example
   * 5000
   */
  linearBuildThreshold?: string;
  /**
   * @remarks
   * The minimum number of retrieved candidate sets.
   * 
   * @example
   * 20000
   */
  minScanDocCnt?: string;
  /**
   * @remarks
   * The index retrieval parameters.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The configurations of the index schema.
   */
  advanceParams?: GetTableResponseBodyResultVectorIndexAdvanceParams;
  /**
   * @remarks
   * The dimension of the vector.
   * 
   * @example
   * 128
   */
  dimension?: string;
  /**
   * @remarks
   * The distance type.
   * 
   * @example
   * SquaredEuclidean
   */
  distanceType?: string;
  /**
   * @remarks
   * The name of the index schema.
   * 
   * @example
   * test_odps
   */
  indexName?: string;
  /**
   * @remarks
   * The namespace field.
   * 
   * @example
   * namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The field that stores the indexes of the elements in sparse vectors.
   * 
   * @example
   * sparse_indices
   */
  sparseIndexField?: string;
  /**
   * @remarks
   * The field that stores the elements in sparse vectors.
   * 
   * @example
   * sparse_values
   */
  sparseValueField?: string;
  /**
   * @remarks
   * The vector field.
   * 
   * @example
   * source_image_vector
   */
  vectorField?: string;
  /**
   * @remarks
   * The vector retrieval algorithm.
   * 
   * @example
   * Qc
   */
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
  /**
   * @remarks
   * The configurations about field processing.
   */
  dataProcessConfig?: GetTableResponseBodyResultDataProcessConfig[];
  /**
   * @example
   * 1
   */
  dataProcessorCount?: number;
  dataSource?: GetTableResponseBodyResultDataSource;
  /**
   * @remarks
   * The field. The value is a key-value pair in which the key indicates the field name and value indicates the field type.
   */
  fieldSchema?: { [key: string]: string };
  /**
   * @example
   * test_oss
   */
  name?: string;
  /**
   * @example
   * 1
   */
  partitionCount?: number;
  /**
   * @example
   * id
   */
  primaryKey?: string;
  /**
   * @example
   * {}
   */
  rawSchema?: string;
  /**
   * @remarks
   * The state of the index table. Valid values: NEW, PUBLISH, IN_USE, NOT_USE, STOP_USE, RESTORE_USE, and FAIL. After an index is created in an OpenSearch Retrieval Engine Edition instance, the index enters the IN_USE state. If the first full index fails to be created in an OpenSearch Vector Search Edition instance of the new version, the index is in the FAIL state.
   * 
   * @example
   * IN_USE
   */
  status?: string;
  /**
   * @remarks
   * The index schema.
   */
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
  /**
   * @remarks
   * generationId
   * 
   * @example
   * 1708674867
   */
  generationId?: number;
  /**
   * @remarks
   * starting, building, ready, stopped, failed
   * 
   * @example
   * ready
   */
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
  /**
   * @remarks
   * The absolute path in which the file is stored.
   * 
   * @example
   * "/path/wpd/nae"
   */
  fullPathName?: string;
  /**
   * @remarks
   * Indicates whether the file is a directory. Valid values: true and false.
   * 
   * @example
   * true
   */
  isDir?: boolean;
  /**
   * @remarks
   * Indicates whether the file is a template. Valid values: **true** and **false**.
   * 
   * @example
   * true
   */
  isTemplate?: boolean;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * file_name_1
   */
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
  /**
   * @remarks
   * The absolute path in which the file is stored.
   * 
   * @example
   * /path/wpd/nae
   */
  fullPathName?: string;
  /**
   * @remarks
   * Indicates whether the file is a directory. Valid values: true and false.
   * 
   * @example
   * true
   */
  isDir?: boolean;
  /**
   * @remarks
   * Indicates whether the file is a template. Valid values: true and false.
   * 
   * @example
   * true
   */
  isTemplate?: boolean;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * file_name_1
   */
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
  /**
   * @remarks
   * *   The type of the advanced configuration. Valid values: -ONLINE: online configuration
   * *   \\-ONLINE_CAVA: online Cava configuration
   * *   \\-ONLINE_PLUGIN: online plug-in configuration
   * *   \\-ONLINE_QUERY: query configuration
   * *   \\-OFFLINE_DICT: offline dictionary configuration
   * *   \\-OFFLINE_TABLE: offline table configuration
   * *   \\-OFFLINE_COMMON: offline configuration
   * *   \\-OFFLINE_PLUGIN: offline plug-in configuration
   * *   \\-OFFLINE_INDEX: index configuration
   * 
   * @example
   * ONLINE
   */
  advanceConfigType?: string;
  /**
   * @remarks
   * The content of the advanced configuration that is returned.
   * 
   * @example
   * {\\"url\\":\\"http://xxxxxx.aliyuncs.com/outnet_hz/packages/xxxxx/opensearch_offline_plugins_xxxxx.tar\\"}
   */
  content?: string;
  /**
   * @remarks
   * The type of the configuration content. Valid values: FILE, GIT, HTTP, and ODPS.
   * 
   * @example
   * FILE
   */
  contentType?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user who created the advanced configuration.
   * 
   * @example
   * 123456
   */
  creator?: string;
  /**
   * @remarks
   * The description of the advanced configuration.
   * 
   * @example
   * test
   */
  desc?: string;
  /**
   * @remarks
   * The files.
   */
  files?: ListAdvanceConfigsResponseBodyResultFiles[];
  /**
   * @remarks
   * The name of the advanced configuration.
   * 
   * @example
   * my_index
   */
  name?: string;
  /**
   * @remarks
   * The status of the advanced configuration. Valid values: drafting: The advanced configuration is in the draft state. used: The advanced configuration is being used. unused: The advanced configuration is not used. trash: The advanced configuration is being deleted.
   * 
   * @example
   * drafting
   */
  status?: string;
  /**
   * @remarks
   * The time when the advanced configuration was updated.
   * 
   * @example
   * 1631070464000
   */
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

export class ListAliasesResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * alias name
   * 
   * @example
   * test
   */
  alias?: string;
  /**
   * @remarks
   * index name
   * 
   * @example
   * index
   */
  index?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      index: 'index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      index: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNamesResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * ha3_test
   */
  description?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * 25030
   */
  id?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * my_index
   */
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
  /**
   * @remarks
   * The tag content.
   * 
   * @example
   * succeed in handling request
   */
  msg?: string;
  /**
   * @remarks
   * The tag level.
   * 
   * @example
   * " "
   */
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
  /**
   * @remarks
   * The time when the task was complete.
   * 
   * @example
   * " "
   */
  finishDate?: string;
  /**
   * @remarks
   * The ordinal number of the task.
   * 
   * @example
   * 100
   */
  index?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * general
   */
  name?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The additional attributes of the card.
   * 
   * @example
   * " "
   */
  extraAttribute?: string;
  /**
   * @remarks
   * The field3 field that was passed when the FSM was created.
   * 
   * @example
   * " "
   */
  field3?: string;
  /**
   * @remarks
   * The ID of the finite state machine (FSM).
   * 
   * @example
   * tisplus_opensearch@datasource_flow_fsm@1865410598556969-ha-cn-zvp2ljiwe01_api2@bj_vpc_domain_1@null@MANUAL-ha-cn-zvp2ljiwe01_api2@1649729867698@028315
   */
  fsmId?: string;
  /**
   * @remarks
   * The change group type.
   * 
   * @example
   * " "
   */
  groupType?: string;
  /**
   * @remarks
   * The card name.
   * 
   * @example
   * ha-cn-pl32rf0js04_qrs
   */
  name?: string;
  /**
   * @remarks
   * The FSM status.
   * 
   * @example
   * onlyPublished
   */
  status?: string;
  /**
   * @remarks
   * The tags of the progress bar.
   */
  tags?: ListClusterTasksResponseBodyResultTags[];
  /**
   * @remarks
   * The task information.
   */
  taskNodes?: ListClusterTasksResponseBodyResultTaskNodes[];
  /**
   * @remarks
   * The timestamp of the card.
   * 
   * @example
   * 1657610520
   */
  time?: string;
  /**
   * @remarks
   * The card type.
   * 
   * @example
   * qrs
   */
  type?: string;
  /**
   * @remarks
   * The user who triggered the generation of the FSM process.
   * 
   * @example
   * " "
   */
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
  /**
   * @remarks
   * The name of the Searcher worker.
   * 
   * @example
   * ha-cn-8ed2k7brm05_qrs
   */
  name?: string;
  /**
   * @remarks
   * The number of Searcher workers.
   * 
   * @example
   * 1
   */
  number?: number;
  /**
   * @remarks
   * The ID of the partition that is stored on the Searcher worker.
   * 
   * @example
   * dt=20220216
   */
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
  /**
   * @remarks
   * The name of the QRS worker.
   * 
   * @example
   * test_0704
   */
  name?: string;
  /**
   * @remarks
   * The number of QRS workers.
   * 
   * @example
   * 1
   */
  number?: number;
  /**
   * @remarks
   * The ID of the partition that is stored on the QRS worker.
   * 
   * @example
   * dt=20211216
   */
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
  /**
   * @remarks
   * The configuration information.
   */
  config?: { [key: string]: {[key: string]: any} };
  /**
   * @remarks
   * The time when the configuration was updated.
   * 
   * @example
   * " "
   */
  configUpdateTime?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2024-05-21 16:05:26
   */
  createTime?: string;
  /**
   * @remarks
   * The effective advanced configuration version.
   * 
   * @example
   * " "
   */
  currentAdvanceConfigVersion?: string;
  /**
   * @remarks
   * The effective dictionary configuration version.
   * 
   * @example
   * ha-cn-pl32rf0****_offline_adv_v1
   */
  currentOfflineDictConfigVersion?: string;
  /**
   * @remarks
   * The effective online configuration version.
   * 
   * @example
   * " "
   */
  currentOnlineConfigVersion?: string;
  /**
   * @remarks
   * The effective query configuration version.
   * 
   * @example
   * ha-cn-pl32rf0****_offline_adv_v1
   */
  currentOnlineQueryConfigVersion?: string;
  /**
   * @remarks
   * The information about Searcher workers.
   */
  dataNode?: ListClustersResponseBodyResultDataNode;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * fzz_test
   */
  description?: string;
  /**
   * @remarks
   * The latest advanced configuration version.
   * 
   * @example
   * " "
   */
  latestAdvanceConfigVersion?: string;
  /**
   * @remarks
   * The latest dictionary configuration version.
   * 
   * @example
   * ha-cn-pl32rf0****_offline_adv_v1
   */
  latestOfflineDictConfigVersion?: string;
  /**
   * @remarks
   * The latest online configuration version.
   * 
   * @example
   * " "
   */
  latestOnlineConfigVersion?: string;
  /**
   * @remarks
   * The latest query configuration version.
   * 
   * @example
   * ha-cn-pl32rf0****_offline_adv_v1
   */
  latestOnlineQueryConfigVersion?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * ha-cn-7pp2pcna701_qrs
   */
  name?: string;
  /**
   * @remarks
   * The information about Query Result Searcher (QRS) workers.
   */
  queryNode?: ListClustersResponseBodyResultQueryNode;
  /**
   * @remarks
   * The cluster status. Valid values: running: The cluster is running. starting: The cluster is being started. stopping: The cluster is being stopped. stopped: The cluster is stopped.
   * 
   * @example
   * "starting"
   */
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
  /**
   * @remarks
   * Indicates whether the field has the primary key attribute. Valid values: **true** and **false**.
   * 
   * @example
   * false
   */
  hasPrimaryKeyAttribute?: boolean;
  /**
   * @remarks
   * Indicates whether the field is the primary key. Valid values: **true** and **false**.
   * 
   * @example
   * false
   */
  isPrimaryKey?: boolean;
  /**
   * @remarks
   * Indicates whether the field can be sorted. Valid values: **true** and **false**.
   * 
   * @example
   * false
   */
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
  /**
   * @remarks
   * Indicates whether the field has the index attribute. Valid values: **true** and **false**.
   * 
   * @example
   * false
   */
  addIndex?: boolean;
  /**
   * @remarks
   * Indicates whether the field is an attribute field. Valid values: **true** and **false**.
   * 
   * @example
   * false
   */
  attribute?: boolean;
  /**
   * @remarks
   * Indicates whether the field is a custom field. Valid values: **true** and **false**.
   * 
   * @example
   * false
   */
  custom?: boolean;
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The primary key field.
   */
  primaryKey?: ListDataSourceSchemasResponseBodyResultPrimaryKey;
  /**
   * @remarks
   * Indicates whether the field can be displayed. Valid values: **true** and **false**.
   * 
   * @example
   * false
   */
  summary?: boolean;
  /**
   * @remarks
   * The field type.
   * 
   * @example
   * STRING
   */
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
  /**
   * @remarks
   * The tag content.
   * 
   * @example
   * succeed in handling request
   */
  msg?: string;
  /**
   * @remarks
   * The tag level.
   * 
   * @example
   * ""
   */
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
  /**
   * @remarks
   * The time when the task was complete.
   * 
   * @example
   * ""
   */
  finishDate?: string;
  /**
   * @remarks
   * The ordinal number of the task.
   * 
   * @example
   * 100
   */
  index?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * ha-cn-7pp2ngv4s02_qrs
   */
  name?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * onlyPublished
   */
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
  /**
   * @remarks
   * The additional attributes of the card.
   * 
   * @example
   * ""
   */
  extraAttribute?: string;
  /**
   * @remarks
   * The field3 field that was passed when the FSM was created.
   * 
   * @example
   * ""
   */
  field3?: string;
  /**
   * @remarks
   * The ID of the finite state machine (FSM).
   * 
   * @example
   * tisplus_opensearch@datasource_flow_fsm@1062017779051424-ha-cn-2r42ostoc01_ecom_table@vpc_hz_domain_1@null@MANUAL-ha-cn-2r42ostoc01_ecom_table@1655974525756@006754
   */
  fsmId?: string;
  /**
   * @remarks
   * The change group type.
   * 
   * @example
   * " "
   */
  groupType?: string;
  /**
   * @remarks
   * The card name.
   * 
   * @example
   * general
   */
  name?: string;
  /**
   * @remarks
   * The FSM status.
   * 
   * @example
   * 2
   */
  status?: string;
  /**
   * @remarks
   * The tags of the progress bar.
   */
  tags?: ListDataSourceTasksResponseBodyResultTags[];
  /**
   * @remarks
   * The task information.
   */
  taskNodes?: ListDataSourceTasksResponseBodyResultTaskNodes[];
  /**
   * @remarks
   * The timestamp of the card.
   * 
   * @example
   * 1646279473
   */
  time?: string;
  /**
   * @remarks
   * The card type.
   * 
   * @example
   * search
   */
  type?: string;
  /**
   * @remarks
   * The user who triggered the generation of the FSM process.
   * 
   * @example
   * ""
   */
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
  /**
   * @remarks
   * The data center in which the data source is deployed.
   * 
   * @example
   * test
   */
  domain?: string;
  /**
   * @remarks
   * The indexes.
   */
  indexes?: string[];
  /**
   * @remarks
   * The time when the full data of the data source was last queried.
   * 
   * @example
   * 1718787785
   */
  lastFulTime?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * data_source_name
   */
  name?: string;
  /**
   * @remarks
   * The status of the data source. Valid values: new: The data source is being created. publish: The data source is in the normal state. trash: The data source is being deleted.
   * 
   * @example
   * new
   */
  status?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * odps
   */
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
  /**
   * @example
   * 12190
   */
  id?: number;
  /**
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @example
   * true
   */
  isDir?: number;
  /**
   * @example
   * general
   */
  name?: string;
  /**
   * @example
   * -1
   */
  parent?: number;
  /**
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * table, instance, template, function
   * 
   * @example
   * instance
   */
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
  /**
   * @example
   * 56
   */
  id?: number;
  /**
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @example
   * true
   */
  isDir?: number;
  /**
   * @example
   * general
   */
  name?: string;
  /**
   * @example
   * -1
   */
  parent?: number;
  /**
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * table, instance, template, function
   * 
   * @example
   * table
   */
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
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @example
   * true
   */
  isDir?: number;
  /**
   * @example
   * c26_schema
   */
  name?: string;
  /**
   * @example
   * -1
   */
  parent?: number;
  /**
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * table, instance, template, function
   * 
   * @example
   * template
   */
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
  /**
   * @example
   * general
   */
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
  /**
   * @remarks
   * The ID of the offline deployment.
   * 
   * @example
   * 122
   */
  buildDeployId?: number;
  /**
   * @remarks
   * The timestamp that was generated when the index building was started.
   * 
   * @example
   * 1626143673
   */
  createTime?: number;
  /**
   * @remarks
   * The path of the dumped index in the Apsara File Storage for HDFS file system.
   * 
   * @example
   * ""
   */
  dataDumpRoot?: string;
  /**
   * @remarks
   * The ID of the full index version.
   * 
   * @example
   * 1626143930
   */
  generation?: number;
  /**
   * @remarks
   * The shards of the index version. The value is a key-value pair in which the key indicates the index name and the value indicates the number of shards. The number of value shards.
   */
  partition?: { [key: string]: number };
  /**
   * @remarks
   * The status of the index version.
   * 
   * @example
   * STOPPED
   */
  status?: string;
  /**
   * @remarks
   * The start timestamp from which incremental data is retrieved.
   * 
   * @example
   * 1626143673
   */
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
  /**
   * @remarks
   * The AccessKey ID of the MaxCompute data source.
   * 
   * @example
   * root
   */
  accessKey?: string;
  /**
   * @remarks
   * The AccessKey secret of the MaxCompute data source.
   * 
   * @example
   * root123
   */
  accessSecret?: string;
  /**
   * @remarks
   * The OSS bucket.
   * 
   * @example
   * ha3test-oss
   */
  bucket?: string;
  /**
   * @remarks
   * The endpoint of the MaxCompute data source.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @remarks
   * The namespace. This parameter is applicable to the SARO data source used in the intranet of Alibaba Group.
   * 
   * @example
   * TEST_dump_demo_sj_na61hunbu2_share_holo
   */
  namespace?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) path.
   * 
   * @example
   * /test_opensearch/sift_oss_test.data
   */
  ossPath?: string;
  /**
   * @remarks
   * The shard name.
   * 
   * @example
   * ds=12345
   */
  partition?: string;
  /**
   * @remarks
   * The file path in the Apsara File Storage for HDFS file system.
   * 
   * @example
   * http://test_opensearch/sift_oss_test.data
   */
  path?: string;
  /**
   * @remarks
   * The name of the MaxCompute project that is used as the data source.
   * 
   * @example
   * tisplus_dev
   */
  project?: string;
  /**
   * @remarks
   * The name of the MaxCompute table that is used as the data source.
   * 
   * @example
   * dump_odps_demo
   */
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
  /**
   * @remarks
   * The namespace of the SARO data source.
   * 
   * @example
   * TEST_dump_demo_sj_na61hunbu2_share_holo
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the SARO table.
   * 
   * @example
   * dump_odps_demo
   */
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
  /**
   * @remarks
   * Indicates whether the automatic full indexing feature is enabled.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * The configuration of MaxCompute data sources.
   */
  config?: ListIndexesResponseBodyResultDataSourceInfoConfig;
  /**
   * @remarks
   * The data center in which the data source is deployed.
   * 
   * @example
   * test
   */
  domain?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * index1
   */
  name?: string;
  /**
   * @remarks
   * The number of resources used for data update.
   * 
   * @example
   * 2
   */
  processPartitionCount?: number;
  /**
   * @remarks
   * The configurations of the SARO data source.
   */
  saroConfig?: ListIndexesResponseBodyResultDataSourceInfoSaroConfig;
  /**
   * @remarks
   * The type of the data source. Valid values: odps, swift, saro, oss, and unKnow.
   * 
   * @example
   * odps
   */
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
  /**
   * @remarks
   * The full path of the file.
   * 
   * @example
   * " "
   */
  fullPathName?: string;
  /**
   * @remarks
   * Indicates whether the file is a directory.
   * 
   * @example
   * True
   */
  isDir?: boolean;
  /**
   * @remarks
   * Indicates whether the file is a template.
   * 
   * @example
   * True
   */
  isTemplate?: boolean;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * ha-cn-7mz2iv7sq01_qrs
   */
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
  /**
   * @remarks
   * The description of the index version.
   * 
   * @example
   * close alarm, by 3.9.2 hotfix workflow
   */
  desc?: string;
  /**
   * @remarks
   * The files.
   */
  files?: ListIndexesResponseBodyResultVersionsFiles[];
  /**
   * @remarks
   * The name of the index version.
   * 
   * @example
   * ha-cn-7pp2ngv4s02_qrs
   */
  name?: string;
  /**
   * @remarks
   * The status of the index version. Valid values:
   * 
   * *   NEW: The index version is created.
   * *   PUBLISH: The index version is normal.
   * *   IN_USE: The index version is in use.
   * *   NOT_USE: The index version is not used.
   * *   STOP_USE: The index version is being stopped.
   * *   RESTORE_USE: The index version is being restored.
   * *   FAIL: The index version failed to be created.
   * 
   * @example
   * 2
   */
  status?: string;
  /**
   * @remarks
   * The time when the index version was updated.
   * 
   * @example
   * " "
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the index version. If the index version is modified, the returned value is null.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The index schema, which is a JSON string.
   * 
   * @example
   * {"summarys":{"parameter":{"file_compressor":"zstd"},"summary_fields":["id"]},"file_compress":[{"name":"file_compressor","type":"zstd"},{"name":"no_compressor","type":""}],"indexs":[{"index_fields":"name","index_name":"ids","index_type":"STRING"},{"has_primary_key_attribute":true,"index_fields":"id","is_primary_key_sorted":false,"index_name":"id","index_type":"PRIMARYKEY64"}],"attributes":[{"file_compress":"no_compressor","field_name":"id"}],"fields":[{"user_defined_param":{},"compress_type":"uniq","field_type":"STRING","field_name":"id"},{"compress_type":"uniq","field_type":"STRING","field_name":"name"}],"table_name":"api"}
   */
  content?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-7mz2kvu2c01_table4
   */
  dataSource?: string;
  /**
   * @remarks
   * The information about the data source.
   */
  dataSourceInfo?: ListIndexesResponseBodyResultDataSourceInfo;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The deployment name of the index.
   * 
   * @example
   * test
   */
  domain?: string;
  /**
   * @remarks
   * The time when full data in the index was last updated.
   * 
   * @example
   * 2023-07-05 10:40:38
   */
  fullUpdateTime?: string;
  /**
   * @remarks
   * The full version of the index.
   * 
   * @example
   * 1688523414
   */
  fullVersion?: number;
  /**
   * @remarks
   * The time when incremental data in the index was last updated.
   * 
   * @example
   * 2023-07-05 10:58:33
   */
  incUpdateTime?: string;
  /**
   * @remarks
   * The index size.
   * 
   * @example
   * 4689
   */
  indexSize?: number;
  /**
   * @remarks
   * The index ststus. Valid values: NEW and PUBLISH.
   * 
   * @example
   * " "
   */
  indexStatus?: string;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * general
   */
  name?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * 2
   */
  partition?: number;
  /**
   * @remarks
   * The index versions.
   */
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
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The maximum storage of a single data node. Unit: GB.
   * 
   * @example
   * 600
   */
  maxDisk?: number;
  /**
   * @remarks
   * The memory of the instance. Unit: GB.
   * 
   * @example
   * 4
   */
  mem?: number;
  /**
   * @remarks
   * The minimum storage of a single data node. Unit: GB.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * backup
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * oboms-disk
   */
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
  allow?: string;
  /**
   * @remarks
   * The instance endpoint.
   * 
   * @example
   * ""
   */
  endpoint?: string;
  publicEndpoint?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp11ldcf59q2nbwkqgj6z
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the instance is deployed.
   * 
   * @example
   * vpc-wz9axk41d9vffoc79x0oe
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      allow: 'allow',
      endpoint: 'endpoint',
      publicEndpoint: 'publicEndpoint',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allow: 'string',
      endpoint: 'string',
      publicEndpoint: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyResultSpecQrsResource extends $tea.Model {
  category?: string;
  cpu?: number;
  disk?: number;
  mem?: number;
  nodeCount?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      cpu: 'cpu',
      disk: 'disk',
      mem: 'mem',
      nodeCount: 'nodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      cpu: 'number',
      disk: 'number',
      mem: 'number',
      nodeCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyResultSpecSearchResource extends $tea.Model {
  category?: string;
  cpu?: number;
  disk?: number;
  mem?: number;
  nodeCount?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      cpu: 'cpu',
      disk: 'disk',
      mem: 'mem',
      nodeCount: 'nodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      cpu: 'number',
      disk: 'number',
      mem: 'number',
      nodeCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyResultSpec extends $tea.Model {
  qrsResource?: ListInstancesResponseBodyResultSpecQrsResource;
  searchResource?: ListInstancesResponseBodyResultSpecSearchResource;
  static names(): { [key: string]: string } {
    return {
      qrsResource: 'qrsResource',
      searchResource: 'searchResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qrsResource: ListInstancesResponseBodyResultSpecQrsResource,
      searchResource: ListInstancesResponseBodyResultSpecSearchResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyResultTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * oboms-disk
   */
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
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code of the instance.
   * 
   * @example
   * ""
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2022-06-04T02:03:21Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * Emergency test
   */
  description?: string;
  edition?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 1634885083
   */
  expiredTime?: string;
  /**
   * @remarks
   * Indicates whether an overdue payment is involved.
   * 
   * @example
   * false
   */
  inDebt?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ha-cn-2r42n8oh001
   */
  instanceId?: string;
  /**
   * @remarks
   * The lock state of the instance.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The network information of the instance.
   */
  network?: ListInstancesResponseBodyResultNetwork;
  noQrs?: boolean;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzgpiswzbksdi
   */
  resourceGroupId?: string;
  spec?: ListInstancesResponseBodyResultSpec;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * 2
   */
  status?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tags?: ListInstancesResponseBodyResultTags[];
  /**
   * @remarks
   * The time when the instance was updated.
   * 
   * @example
   * 2018-12-06T11:17:49.0
   */
  updateTime?: string;
  userName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      createTime: 'createTime',
      description: 'description',
      edition: 'edition',
      expiredTime: 'expiredTime',
      inDebt: 'inDebt',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      network: 'network',
      noQrs: 'noQrs',
      resourceGroupId: 'resourceGroupId',
      spec: 'spec',
      status: 'status',
      tags: 'tags',
      updateTime: 'updateTime',
      userName: 'userName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      createTime: 'string',
      description: 'string',
      edition: 'string',
      expiredTime: 'string',
      inDebt: 'boolean',
      instanceId: 'string',
      lockMode: 'string',
      network: ListInstancesResponseBodyResultNetwork,
      noQrs: 'boolean',
      resourceGroupId: 'string',
      spec: ListInstancesResponseBodyResultSpec,
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListInstancesResponseBodyResultTags },
      updateTime: 'string',
      userName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The result.
   */
  result?: any[];
  /**
   * @remarks
   * The total number of entries returned
   * 
   * @example
   * 5
   */
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
  /**
   * @remarks
   * The configuration information
   * 
   * @example
   * {\\"specItems\\":[{\\"specKey\\":\\"YQ_KEYWORD_NUMBER_PLUS\\",\\"value\\":\\"1\\"}]}
   */
  config?: string;
  /**
   * @remarks
   * The name of the index
   * 
   * @example
   * generation
   */
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
  /**
   * @remarks
   * The ID of the full index version.
   * 
   * @example
   * 1708674867
   */
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
  /**
   * @remarks
   * The state of the index table. Valid values: NEW, PUBLISH, IN_USE, NOT_USE, STOP_USE, RESTORE_USE, and FAIL. After an index is created in an OpenSearch Retrieval Engine Edition instance, the index enters the IN_USE state. If the first full index fails to be created in an OpenSearch Vector Search Edition instance of the new version, the index is in the FAIL state.
   * 
   * @example
   * IN_USE
   */
  indexStatus?: string;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * es_test_1b
   */
  name?: string;
  /**
   * @remarks
   * The state of the index table. Valid values: NEW, PUBLISH, IN_USE, NOT_USE, STOP_USE, RESTORE_USE, and FAIL. After an index is created in an OpenSearch Retrieval Engine Edition instance, the index enters the IN_USE state. If the first full index fails to be created in an OpenSearch Vector Search Edition instance of the new version, the index is in the FAIL state.
   * 
   * @example
   * IN_USE
   */
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
  /**
   * @example
   * opensearch
   */
  key?: string;
  /**
   * @example
   * opensearch
   */
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
  /**
   * @example
   * rmq-cn-jeo3mn55j01
   */
  resourceId?: string;
  /**
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @example
   * opensearch
   */
  tagKey?: string;
  /**
   * @example
   * opensearch
   */
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
  /**
   * @remarks
   * The full path of the file.
   * 
   * @example
   * /cluster.json
   */
  fullPathName?: string;
  /**
   * @remarks
   * Specifies whether the file is a directory.
   * 
   * @example
   * true
   */
  isDir?: boolean;
  /**
   * @remarks
   * Specifies whether the file is a template.
   * 
   * @example
   * true
   */
  isTemplate?: boolean;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * general
   */
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
  /**
   * @remarks
   * The path of the Apsara File Storage for HDFS data source.
   * 
   * @example
   * ymsh-service/src/main/java/cn/ymsh/util/jd
   */
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
  /**
   * @remarks
   * The partitions in the MaxCompute table.
   */
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
  /**
   * @remarks
   * The path of the OSS data source.
   * 
   * @example
   * oss://test
   */
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
  /**
   * @remarks
   * The path of the SARO data source.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * The version number of the SARO data source.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The information about the Apsara File Storage for HDFS data source.
   */
  hdfs?: ModifyDataSourceDeployRequestExtendHdfs;
  /**
   * @remarks
   * The information about the MaxCompute data source.
   */
  odps?: ModifyDataSourceDeployRequestExtendOdps;
  /**
   * @remarks
   * The information about the OSS data source.
   */
  oss?: ModifyDataSourceDeployRequestExtendOss;
  /**
   * @remarks
   * The information about the SARO data source. This parameter is applicable to the SARO data source used in the intranet of Alibaba Group.
   */
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
  /**
   * @remarks
   * The startup parameters of the process.
   * 
   * @example
   * {}
   */
  args?: string;
  /**
   * @remarks
   * The resource information.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The AccessKey ID of the MaxCompute data source.
   * 
   * @example
   * ak
   */
  accessKey?: string;
  /**
   * @remarks
   * The AccessKey secret of the MaxCompute data source.
   * 
   * @example
   * as
   */
  accessSecret?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The endpoint of the MaxCompute data source.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @remarks
   * The namespace. This parameter is applicable to the SARO data source used in the intranet of Alibaba Group.
   * 
   * @example
   * dp-dev
   */
  namespace?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) path.
   * 
   * @example
   * /opensearch
   */
  ossPath?: string;
  /**
   * @remarks
   * The partition in the MaxCompute table.
   * 
   * @example
   * ds=20220713
   */
  partition?: string;
  /**
   * @remarks
   * The file path in the Apsara File Storage for HDFS file system.
   * 
   * @example
   * /ude_jobs/iflow_offline_data_access
   */
  path?: string;
  /**
   * @remarks
   * The name of the MaxCompute project that is used as the data source.
   * 
   * @example
   * kubenest
   */
  project?: string;
  /**
   * @remarks
   * The name of the MaxCompute table that is used as the data source.
   * 
   * @example
   * item
   */
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
  /**
   * @remarks
   * The topic.
   * 
   * @example
   * ha-cn-0ju2rps6c08_api
   */
  topic?: string;
  /**
   * @remarks
   * zk
   * 
   * @example
   * zk
   */
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
  /**
   * @remarks
   * The AccessKey ID of the MaxCompute data source.
   * 
   * @example
   * L***p
   */
  accessKey?: string;
  /**
   * @remarks
   * The AccessKey secret of the MaxCompute data source.
   * 
   * @example
   * 5**9a6
   */
  accessSecret?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The endpoint of the MaxCompute data source.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @remarks
   * The namespace. This parameter is applicable to the SARO data source used in the intranet of Alibaba Group.
   * 
   * @example
   * test-namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) path.
   * 
   * @example
   * /opensearch/oss.json
   */
  ossPath?: string;
  /**
   * @remarks
   * The partition in the MaxCompute table. Example: ds=20180102.
   * 
   * @example
   * ds=20230114
   */
  partition?: string;
  /**
   * @remarks
   * The file path in the Apsara File Storage for HDFS file system.
   * 
   * @example
   * test-hdfs-path
   */
  path?: string;
  /**
   * @remarks
   * The name of the MaxCompute project that is used as the data source.
   * 
   * @example
   * bbt_algo_pai
   */
  project?: string;
  /**
   * @remarks
   * The name of the MaxCompute table that is used as the data source.
   * 
   * @example
   * item
   */
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
  /**
   * @remarks
   * The namespace to which the SARO data source belongs.
   * 
   * @example
   * flink-test-fjx-default
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the SARO table.
   * 
   * @example
   * device_event_shy_summary_
   */
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
  /**
   * @remarks
   * Specifies whether to enable the automatic full indexing feature.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * The reindexing method. Valid values: api: API data source. indexRecover: data recovery by using indexing.
   * 
   * @example
   * api
   */
  buildMode?: string;
  /**
   * @remarks
   * The configurations of the MaxCompute data source.
   */
  config?: ModifyIndexRequestDataSourceInfoConfig;
  /**
   * @remarks
   * The start timestamp from which incremental data is retrieved.
   * 
   * @example
   * 1709715164
   */
  dataTimeSec?: number;
  /**
   * @remarks
   * The offline deployment name of the data source.
   * 
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the index version from which data is restored.
   * 
   * @example
   * 4
   */
  generation?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-35t3n1yuj0d_index_1
   */
  name?: string;
  /**
   * @remarks
   * The maximum number of full indexes that can be concurrently processed.
   * 
   * @example
   * 2
   */
  processParallelNum?: number;
  /**
   * @remarks
   * The number of resources used for data update.
   * 
   * @example
   * 4
   */
  processPartitionCount?: number;
  /**
   * @remarks
   * The configurations of the SARO data source.
   */
  saroConfig?: ModifyIndexRequestDataSourceInfoSaroConfig;
  /**
   * @remarks
   * The type of the data source. Valid values: odps, swift, saro, oss, and unKnow.
   * 
   * @example
   * odps
   */
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
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * atest2
   */
  indexName?: string;
  /**
   * @remarks
   * The concurrency. Default value: 1.
   * 
   * @example
   * 1
   */
  parallelNum?: number;
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * 3
   */
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
  /**
   * @remarks
   * The deployment ID of the data source.
   * 
   * @example
   * 277
   */
  buildDeployId?: string;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * main_index
   */
  indexName?: string;
  /**
   * @remarks
   * The index version.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * test
   */
  ossBucket?: string;
  /**
   * @remarks
   * The OSS endpoint.
   * 
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * uid
   */
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
  /**
   * @remarks
   * The source of the data to be vectorized.
   */
  srcFieldConfig?: ModifyTableRequestDataProcessConfigParamsSrcFieldConfig;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * image
   */
  vectorModal?: string;
  /**
   * @remarks
   * The vectorization model.
   * 
   * @example
   * clip
   */
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
  /**
   * @remarks
   * The destination field.
   * 
   * @example
   * source_image_vector
   */
  dstField?: string;
  /**
   * @remarks
   * The method used to process the field. Valid values: copy and vectorize. A value of copy specifies that the value of the source field is copied to the destination field. A value of vectorize specifies that the value of the source field is vectorized by a vectorization model and the output vector is stored in the destination field.
   * 
   * @example
   * vectorize
   */
  operator?: string;
  /**
   * @remarks
   * The information about the model.
   */
  params?: ModifyTableRequestDataProcessConfigParams;
  /**
   * @remarks
   * The source field.
   * 
   * @example
   * source_image
   */
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
  /**
   * @remarks
   * The AccessKey ID of the MaxCompute data source.
   * 
   * @example
   * AK
   */
  accessKey?: string;
  /**
   * @remarks
   * The AccessKey secret of the MaxCompute data source.
   * 
   * @example
   * AS
   */
  accessSecret?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * antsys-shujiang-osstest
   */
  bucket?: string;
  /**
   * @remarks
   * The endpoint of the MaxCompute data source.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @remarks
   * The path of the Object Storage Service (OSS) object.
   * 
   * @example
   * oss://opensearch
   */
  ossPath?: string;
  /**
   * @remarks
   * The partition in the MaxCompute table.
   * 
   * @example
   * ds=20231220
   */
  partition?: string;
  /**
   * @remarks
   * The name of the MaxCompute project that is used as the data source.
   * 
   * @example
   * yw_dw_rpt
   */
  project?: string;
  /**
   * @remarks
   * The name of the MaxCompute table that is used as the data source.
   * 
   * @example
   * behavior
   */
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
  /**
   * @remarks
   * Specifies whether to automatically rebuild the index.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * The configurations of the data source.
   */
  config?: ModifyTableRequestDataSourceConfig;
  /**
   * @remarks
   * The start timestamp from which incremental data is retrieved.
   * 
   * @example
   * 1715160176
   */
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
  /**
   * @remarks
   * The index building parameters.
   * 
   * @example
   * {}
   */
  buildIndexParams?: string;
  /**
   * @remarks
   * The threshold for linear building.
   * 
   * @example
   * 5000
   */
  linearBuildThreshold?: string;
  /**
   * @remarks
   * The minimum number of retrieved candidate sets.
   * 
   * @example
   * 20000
   */
  minScanDocCnt?: string;
  /**
   * @remarks
   * The index retrieval parameters.
   * 
   * @example
   * {}
   */
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
  /**
   * @remarks
   * The configurations of the index schema.
   */
  advanceParams?: ModifyTableRequestVectorIndexAdvanceParams;
  /**
   * @remarks
   * The dimension of the vector.
   * 
   * @example
   * 128
   */
  dimension?: string;
  /**
   * @remarks
   * The distance type.
   * 
   * @example
   * SquaredEuclidean
   */
  distanceType?: string;
  /**
   * @remarks
   * The name of the index schema.
   * 
   * @example
   * test_api
   */
  indexName?: string;
  /**
   * @remarks
   * The namespace field.
   * 
   * @example
   * namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The field that stores the indexes of the elements in sparse vectors.
   * 
   * @example
   * sparse_indices
   */
  sparseIndexField?: string;
  /**
   * @remarks
   * The field that stores the elements in sparse vectors.
   * 
   * @example
   * sparse_values
   */
  sparseValueField?: string;
  /**
   * @remarks
   * The vector field.
   * 
   * @example
   * source_image_vector
   */
  vectorField?: string;
  /**
   * @remarks
   * The vector retrieval algorithm.
   * 
   * @example
   * Qc
   */
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
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * {\\"url\\":\\"http://xxxxxx.aliyuncs.com/outnet_hz/packages/xxxxx/opensearch_offline_plugins_xxxxx.tar\\"}
   */
  content?: string;
  /**
   * @remarks
   * The variables.
   */
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
  /**
   * @remarks
   * The information about the advanced configuration.
   */
  config?: PublishAdvanceConfigRequestFilesConfig;
  /**
   * @remarks
   * The directory name.
   * 
   * @example
   * /clusters
   */
  dirName?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * vector_question_schema.json
   */
  fileName?: string;
  /**
   * @remarks
   * The operation type. Valid values: UPDATE and DELETE. Default value: UPDATE.
   * 
   * @example
   * UPDATE
   */
  operateType?: string;
  /**
   * @remarks
   * The path of the Object Storage Service (OSS) object.
   * 
   * @example
   * oss://opensearch/test.json
   */
  ossPath?: string;
  /**
   * @remarks
   * The path of the parent directory.
   * 
   * @example
   * /
   */
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
  /**
   * @example
   * 1719221186114
   */
  gmtCreate?: string;
  /**
   * @example
   * 1719221186114
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @example
   * True
   */
  isDir?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * -1
   */
  parent?: number;
  /**
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * table, instance, template, function
   * 
   * @example
   * template
   */
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
  /**
   * @example
   * opensearch
   */
  key?: string;
  /**
   * @example
   * opensearch
   */
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
  /**
   * @remarks
   * The code of the specification, which must be consistent with the value that you specify on the buy page.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The value of the specification.
   * 
   * @example
   * ""
   */
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
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code of the instance.
   * 
   * @example
   * ha3-code
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the instance was created
   * 
   * @example
   * 2018-12-06T11:17:49.0
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the instance
   * 
   * @example
   * Test instance
   */
  description?: string;
  /**
   * @remarks
   * The time when the instance expires
   * 
   * @example
   * 2019-01-06T16:00:00.0
   */
  expiredTime?: string;
  /**
   * @remarks
   * Indicates whether an overdue payment is involved
   * 
   * @example
   * false
   */
  inDebt?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ha-cn-0ju2s170b03
   */
  instanceId?: string;
  /**
   * @remarks
   * The lock status
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aeky6hthboewpuy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The time when the instance was last updated
   * 
   * @example
   * 2018-12-06T11:17:49.0
   */
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
  /**
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  combineParams?: string;
  comment?: string;
  /**
   * @example
   * select * from test
   */
  content?: string;
  /**
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  dynamicParams?: string;
  /**
   * @example
   * 1719221186114
   */
  gmtCreate?: string;
  /**
   * @example
   * 1719221186114
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  kvpairs?: string;
  /**
   * @example
   * 1
   */
  relatedTemplateId?: number;
  /**
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  staticParams?: string;
  /**
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  templateParams?: string;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 1719220182844
   */
  gmtCreate?: string;
  /**
   * @example
   * 1719221186114
   */
  gmtModified?: string;
  /**
   * @example
   * 22
   */
  id?: number;
  /**
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @example
   * true
   */
  isDir?: number;
  /**
   * @example
   * general
   */
  name?: string;
  /**
   * @example
   * -1
   */
  parent?: number;
  /**
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * table, instance, template, function
   * 
   * @example
   * instance
   */
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
  /**
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  combineParams?: string;
  comment?: string;
  /**
   * @example
   * select * from test
   */
  content?: string;
  /**
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  dynamicParams?: string;
  /**
   * @example
   * 1719221186114
   */
  gmtCreate?: string;
  /**
   * @example
   * 1719220182844
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  kvpairs?: string;
  /**
   * @example
   * 1
   */
  relatedTemplateId?: number;
  /**
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  staticParams?: string;
  /**
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  templateParams?: string;
  /**
   * @example
   * 1
   */
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
   * Triggers reindexing.
   * 
   * @remarks
   * ## Method
   *     POST
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/actions/build-index
   * 
   * @param request - BuildIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BuildIndexResponse
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
   * Triggers reindexing.
   * 
   * @remarks
   * ## Method
   *     POST
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/actions/build-index
   * 
   * @param request - BuildIndexRequest
   * @returns BuildIndexResponse
   */
  async buildIndex(instanceId: string, request: BuildIndexRequest): Promise<BuildIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.buildIndexWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 更换实例资源组
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
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
   * 更换实例资源组
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(instanceId: string, request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeResourceGroupWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - CloneSqlInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneSqlInstanceResponse
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
   * @param request - CloneSqlInstanceRequest
   * @returns CloneSqlInstanceResponse
   */
  async cloneSqlInstance(instanceId: string, database: string, sqlInstanceId: string, request: CloneSqlInstanceRequest): Promise<CloneSqlInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneSqlInstanceWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

  /**
   * @param request - CreateAliasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAliasResponse
   */
  async createAliasWithOptions(instanceId: string, request: CreateAliasRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAliasResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.newMode)) {
      query["newMode"] = request.newMode;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alias)) {
      body["alias"] = request.alias;
    }

    if (!Util.isUnset(request.index)) {
      body["index"] = request.index;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAlias",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/aliases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateAliasResponse>(await this.callApi(params, req, runtime), new CreateAliasResponse({}));
  }

  /**
   * @param request - CreateAliasRequest
   * @returns CreateAliasResponse
   */
  async createAlias(instanceId: string, request: CreateAliasRequest): Promise<CreateAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAliasWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Creates a cluster.
   * 
   * @remarks
   * ### [](#method)Method
   * `POST`
   * ### [](#uri)URI
   * `/openapi/ha3/instances/{instanceId}/clusters`
   * 
   * @param request - CreateClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
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
   * Creates a cluster.
   * 
   * @remarks
   * ### [](#method)Method
   * `POST`
   * ### [](#uri)URI
   * `/openapi/ha3/instances/{instanceId}/clusters`
   * 
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(instanceId: string, request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createClusterWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - CreateConfigDirRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConfigDirResponse
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
   * @param request - CreateConfigDirRequest
   * @returns CreateConfigDirResponse
   */
  async createConfigDir(instanceId: string, configName: string, request: CreateConfigDirRequest): Promise<CreateConfigDirResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConfigDirWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * @param request - CreateConfigFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConfigFileResponse
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
   * @param request - CreateConfigFileRequest
   * @returns CreateConfigFileResponse
   */
  async createConfigFile(instanceId: string, configName: string, request: CreateConfigFileRequest): Promise<CreateConfigFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConfigFileWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * Creates data sources.
   * 
   * @param request - CreateDataSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataSourceResponse
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
   * Creates data sources.
   * 
   * @param request - CreateDataSourceRequest
   * @returns CreateDataSourceResponse
   */
  async createDataSource(instanceId: string, request: CreateDataSourceRequest): Promise<CreateDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDataSourceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - CreateFolderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFolderResponse
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
   * @param request - CreateFolderRequest
   * @returns CreateFolderResponse
   */
  async createFolder(instanceId: string, database: string, request: CreateFolderRequest): Promise<CreateFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFolderWithOptions(instanceId, database, request, headers, runtime);
  }

  /**
   * Creates an index.
   * 
   * @remarks
   * ### Method
   * ```java
   * POST
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/indexes
   * ```
   * 
   * @param request - CreateIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIndexResponse
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
   * Creates an index.
   * 
   * @remarks
   * ### Method
   * ```java
   * POST
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/indexes
   * ```
   * 
   * @param request - CreateIndexRequest
   * @returns CreateIndexResponse
   */
  async createIndex(instanceId: string, request: CreateIndexRequest): Promise<CreateIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIndexWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Creates a Havenask instance.
   * 
   * @remarks
   * ### [](#)Method
   * `POST`
   * ### [](#uri)URI
   * `/api/instances?dryRun=false`
   * 
   * @param request - CreateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
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
   * Creates a Havenask instance.
   * 
   * @remarks
   * ### [](#)Method
   * `POST`
   * ### [](#uri)URI
   * `/api/instances?dryRun=false`
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Creates a public endpoint.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePublicUrlResponse
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
   * Creates a public endpoint.
   * @returns CreatePublicUrlResponse
   */
  async createPublicUrl(instanceId: string): Promise<CreatePublicUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPublicUrlWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param request - CreateSqlInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSqlInstanceResponse
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
   * @param request - CreateSqlInstanceRequest
   * @returns CreateSqlInstanceResponse
   */
  async createSqlInstance(instanceId: string, database: string, request: CreateSqlInstanceRequest): Promise<CreateSqlInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSqlInstanceWithOptions(instanceId, database, request, headers, runtime);
  }

  /**
   * Creates an index table.
   * 
   * @param request - CreateTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTableResponse
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
   * Creates an index table.
   * 
   * @param request - CreateTableRequest
   * @returns CreateTableResponse
   */
  async createTable(instanceId: string, request: CreateTableRequest): Promise<CreateTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTableWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Deletes the details about advanced configurations.
   * 
   * @remarks
   * ## Method
   *     DELETE
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAdvanceConfigResponse
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
   * Deletes the details about advanced configurations.
   * 
   * @remarks
   * ## Method
   *     DELETE
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}
   * @returns DeleteAdvanceConfigResponse
   */
  async deleteAdvanceConfig(instanceId: string, configName: string): Promise<DeleteAdvanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAdvanceConfigWithOptions(instanceId, configName, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAliasResponse
   */
  async deleteAliasWithOptions(instanceId: string, alias: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAliasResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteAlias",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/aliases/${OpenApiUtil.getEncodeParam(alias)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteAliasResponse>(await this.callApi(params, req, runtime), new DeleteAliasResponse({}));
  }

  /**
   * @returns DeleteAliasResponse
   */
  async deleteAlias(instanceId: string, alias: string): Promise<DeleteAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAliasWithOptions(instanceId, alias, headers, runtime);
  }

  /**
   * @param request - DeleteConfigDirRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConfigDirResponse
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
   * @param request - DeleteConfigDirRequest
   * @returns DeleteConfigDirResponse
   */
  async deleteConfigDir(instanceId: string, configName: string, request: DeleteConfigDirRequest): Promise<DeleteConfigDirResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigDirWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * @param request - DeleteConfigFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConfigFileResponse
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
   * @param request - DeleteConfigFileRequest
   * @returns DeleteConfigFileResponse
   */
  async deleteConfigFile(instanceId: string, configName: string, request: DeleteConfigFileRequest): Promise<DeleteConfigFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigFileWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * Deletes a specified data source.
   * 
   * @remarks
   * ## Method
   * `DELETE`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}`
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSourceResponse
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
   * Deletes a specified data source.
   * 
   * @remarks
   * ## Method
   * `DELETE`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}`
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSource(instanceId: string, dataSourceName: string): Promise<DeleteDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDataSourceWithOptions(instanceId, dataSourceName, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFolderResponse
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
   * @returns DeleteFolderResponse
   */
  async deleteFolder(instanceId: string, database: string, folderId: string): Promise<DeleteFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFolderWithOptions(instanceId, database, folderId, headers, runtime);
  }

  /**
   * Deletes an index.
   * 
   * @remarks
   * ## Method
   *     DELETE
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}?dataSource=xxx
   * 
   * @param request - DeleteIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIndexResponse
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
   * Deletes an index.
   * 
   * @remarks
   * ## Method
   *     DELETE
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}?dataSource=xxx
   * 
   * @param request - DeleteIndexRequest
   * @returns DeleteIndexResponse
   */
  async deleteIndex(instanceId: string, indexName: string, request: DeleteIndexRequest): Promise<DeleteIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndexWithOptions(instanceId, indexName, request, headers, runtime);
  }

  /**
   * Deletes the version of an index.
   * 
   * @remarks
   * ## Method
   *     DELETE
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/versions/{versionName}
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIndexVersionResponse
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
   * Deletes the version of an index.
   * 
   * @remarks
   * ## Method
   *     DELETE
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/versions/{versionName}
   * @returns DeleteIndexVersionResponse
   */
  async deleteIndexVersion(instanceId: string, indexName: string, versionName: string): Promise<DeleteIndexVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndexVersionWithOptions(instanceId, indexName, versionName, headers, runtime);
  }

  /**
   * Deletes a specified instance.
   * 
   * @remarks
   * ### Method
   * `DELETE`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}`
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
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
   * Deletes a specified instance.
   * 
   * @remarks
   * ### Method
   * `DELETE`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}`
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(instanceId: string): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * 删除公网域名
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePublicUrlResponse
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
   * 删除公网域名
   * @returns DeletePublicUrlResponse
   */
  async deletePublicUrl(instanceId: string): Promise<DeletePublicUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePublicUrlWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSqlInstanceResponse
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
   * @returns DeleteSqlInstanceResponse
   */
  async deleteSqlInstance(instanceId: string, database: string, sqlInstanceId: string): Promise<DeleteSqlInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSqlInstanceWithOptions(instanceId, database, sqlInstanceId, headers, runtime);
  }

  /**
   * Deletes an index table.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTableResponse
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
   * Deletes an index table.
   * @returns DeleteTableResponse
   */
  async deleteTable(instanceId: string, tableName: string): Promise<DeleteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTableWithOptions(instanceId, tableName, headers, runtime);
  }

  /**
   * Queries available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
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
   * Queries available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(request, headers, runtime);
  }

  /**
   * @param request - ExecuteSqlInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteSqlInstanceResponse
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
   * @param request - ExecuteSqlInstanceRequest
   * @returns ExecuteSqlInstanceResponse
   */
  async executeSqlInstance(instanceId: string, database: string, sqlInstanceId: string, request: ExecuteSqlInstanceRequest): Promise<ExecuteSqlInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeSqlInstanceWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

  /**
   * Performs a forced switchover.
   * 
   * @remarks
   * ### [](#)Method
   * ```java
   * PUT
   * ```
   * ### [](#uri)URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/force-switch/{fsmId}
   * ```
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ForceSwitchResponse
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
   * Performs a forced switchover.
   * 
   * @remarks
   * ### [](#)Method
   * ```java
   * PUT
   * ```
   * ### [](#uri)URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/force-switch/{fsmId}
   * ```
   * @returns ForceSwitchResponse
   */
  async forceSwitch(instanceId: string, fsmId: string): Promise<ForceSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.forceSwitchWithOptions(instanceId, fsmId, headers, runtime);
  }

  /**
   * Queries the information about an advanced configuration.
   * 
   * @remarks
   * ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}
   * 
   * @param request - GetAdvanceConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAdvanceConfigResponse
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
   * Queries the information about an advanced configuration.
   * 
   * @remarks
   * ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}
   * 
   * @param request - GetAdvanceConfigRequest
   * @returns GetAdvanceConfigResponse
   */
  async getAdvanceConfig(instanceId: string, configName: string, request: GetAdvanceConfigRequest): Promise<GetAdvanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAdvanceConfigWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * Queries the information about an advanced configuration file.
   * 
   * @remarks
   * ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/file?fileName={fileName}
   * 
   * @param request - GetAdvanceConfigFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAdvanceConfigFileResponse
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
   * Queries the information about an advanced configuration file.
   * 
   * @remarks
   * ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/file?fileName={fileName}
   * 
   * @param request - GetAdvanceConfigFileRequest
   * @returns GetAdvanceConfigFileResponse
   */
  async getAdvanceConfigFile(instanceId: string, configName: string, request: GetAdvanceConfigFileRequest): Promise<GetAdvanceConfigFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAdvanceConfigFileWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * Queries the details of a cluster.
   * 
   * @remarks
   * ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instance/{instanceId}/clusters/{clusterName}`
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterResponse
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
   * Queries the details of a cluster.
   * 
   * @remarks
   * ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instance/{instanceId}/clusters/{clusterName}`
   * @returns GetClusterResponse
   */
  async getCluster(instanceId: string, clusterName: string): Promise<GetClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterWithOptions(instanceId, clusterName, headers, runtime);
  }

  /**
   * Queries the runtime information about a specified cluster.
   * 
   * @remarks
   * ### Method
   * GET
   * ### URI
   * /openapi/ha3/instances/{instanceId}/cluster-run-time-info
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterRunTimeInfoResponse
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
   * Queries the runtime information about a specified cluster.
   * 
   * @remarks
   * ### Method
   * GET
   * ### URI
   * /openapi/ha3/instances/{instanceId}/cluster-run-time-info
   * @returns GetClusterRunTimeInfoResponse
   */
  async getClusterRunTimeInfo(instanceId: string): Promise<GetClusterRunTimeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterRunTimeInfoWithOptions(instanceId, headers, runtime);
  }

  /**
   * Obtains a data source.
   * 
   * @remarks
   * ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}`
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataSourceResponse
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
   * Obtains a data source.
   * 
   * @remarks
   * ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}`
   * @returns GetDataSourceResponse
   */
  async getDataSource(instanceId: string, dataSourceName: string): Promise<GetDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataSourceWithOptions(instanceId, dataSourceName, headers, runtime);
  }

  /**
   * 获取数据源部署信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataSourceDeployResponse
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
   * 获取数据源部署信息
   * @returns GetDataSourceDeployResponse
   */
  async getDataSourceDeploy(instanceId: string, deployName: string, dataSourceName: string): Promise<GetDataSourceDeployResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataSourceDeployWithOptions(instanceId, deployName, dataSourceName, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatabaseSchemaResponse
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
   * @returns GetDatabaseSchemaResponse
   */
  async getDatabaseSchema(instanceId: string, database: string, tableName: string): Promise<GetDatabaseSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatabaseSchemaWithOptions(instanceId, database, tableName, headers, runtime);
  }

  /**
   * Displays the overview of the deployment.
   * 
   * @remarks
   * ## Method
   * GET
   * ## URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/deploy-graph
   * ```
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeployGraphResponse
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
   * Displays the overview of the deployment.
   * 
   * @remarks
   * ## Method
   * GET
   * ## URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/deploy-graph
   * ```
   * @returns GetDeployGraphResponse
   */
  async getDeployGraph(instanceId: string): Promise<GetDeployGraphResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDeployGraphWithOptions(instanceId, headers, runtime);
  }

  /**
   * Queries the details of an index table version.
   * 
   * @remarks
   * ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/versions/{versionName}/file?fileName=/root/test.txt
   * 
   * @param request - GetFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFileResponse
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
   * Queries the details of an index table version.
   * 
   * @remarks
   * ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/versions/{versionName}/file?fileName=/root/test.txt
   * 
   * @param request - GetFileRequest
   * @returns GetFileResponse
   */
  async getFile(instanceId: string, indexName: string, versionName: string, request: GetFileRequest): Promise<GetFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFileWithOptions(instanceId, indexName, versionName, request, headers, runtime);
  }

  /**
   * Queries the information about an index version.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIndexResponse
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
   * Queries the information about an index version.
   * @returns GetIndexResponse
   */
  async getIndex(instanceId: string, indexName: string): Promise<GetIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIndexWithOptions(instanceId, indexName, headers, runtime);
  }

  /**
   * Queries the online effective policy of an index.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIndexOnlineStrategyResponse
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
   * Queries the online effective policy of an index.
   * @returns GetIndexOnlineStrategyResponse
   */
  async getIndexOnlineStrategy(instanceId: string, dataSourceName: string, deployName: string, indexName: string): Promise<GetIndexOnlineStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIndexOnlineStrategyWithOptions(instanceId, dataSourceName, deployName, indexName, headers, runtime);
  }

  /**
   * Queries the information about index versions that the current index version can be rolled back to.
   * 
   * @remarks
   * ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/clusters/{clusterName}/index-version
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIndexVersionResponse
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
   * Queries the information about index versions that the current index version can be rolled back to.
   * 
   * @remarks
   * ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/clusters/{clusterName}/index-version
   * @returns GetIndexVersionResponse
   */
  async getIndexVersion(instanceId: string, clusterName: string): Promise<GetIndexVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIndexVersionWithOptions(instanceId, clusterName, headers, runtime);
  }

  /**
   * Queries the details of an instance based on the instance ID.
   * 
   * @remarks
   * ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}`
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
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
   * Queries the details of an instance based on the instance ID.
   * 
   * @remarks
   * ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}`
   * @returns GetInstanceResponse
   */
  async getInstance(instanceId: string): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * Gets the configuration information of a node.
   * 
   * @param request - GetNodeConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeConfigResponse
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
   * Gets the configuration information of a node.
   * 
   * @param request - GetNodeConfigRequest
   * @returns GetNodeConfigResponse
   */
  async getNodeConfig(instanceId: string, request: GetNodeConfigRequest): Promise<GetNodeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNodeConfigWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - GetSqlInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSqlInstanceResponse
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
   * @param request - GetSqlInstanceRequest
   * @returns GetSqlInstanceResponse
   */
  async getSqlInstance(instanceId: string, database: string, sqlInstanceId: string, request: GetSqlInstanceRequest): Promise<GetSqlInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSqlInstanceWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

  /**
   * Queries the information about an index table.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableResponse
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
   * Queries the information about an index table.
   * @returns GetTableResponse
   */
  async getTable(instanceId: string, tableName: string): Promise<GetTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableWithOptions(instanceId, tableName, headers, runtime);
  }

  /**
   * Queries the status of an index version based on the ID of the full index version.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableGenerationResponse
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
   * Queries the status of an index version based on the ID of the full index version.
   * @returns GetTableGenerationResponse
   */
  async getTableGeneration(instanceId: string, tableName: string, generationId: string): Promise<GetTableGenerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableGenerationWithOptions(instanceId, tableName, generationId, headers, runtime);
  }

  /**
   * Queries the files in an advanced configuration directory.
   * 
   * @remarks
   * ## Method
   * `GET`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/dir?dirName={dirName}`
   * 
   * @param request - ListAdvanceConfigDirRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAdvanceConfigDirResponse
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
   * Queries the files in an advanced configuration directory.
   * 
   * @remarks
   * ## Method
   * `GET`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/dir?dirName={dirName}`
   * 
   * @param request - ListAdvanceConfigDirRequest
   * @returns ListAdvanceConfigDirResponse
   */
  async listAdvanceConfigDir(instanceId: string, configName: string, request: ListAdvanceConfigDirRequest): Promise<ListAdvanceConfigDirResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAdvanceConfigDirWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * Obtains a list of advanced configurations.
   * 
   * @remarks
   * ## Sample requests
   * `GET /openapi/ha3/instances/ose-test1/advanced-configs`
   * 
   * @param request - ListAdvanceConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAdvanceConfigsResponse
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
   * Obtains a list of advanced configurations.
   * 
   * @remarks
   * ## Sample requests
   * `GET /openapi/ha3/instances/ose-test1/advanced-configs`
   * 
   * @param request - ListAdvanceConfigsRequest
   * @returns ListAdvanceConfigsResponse
   */
  async listAdvanceConfigs(instanceId: string, request: ListAdvanceConfigsRequest): Promise<ListAdvanceConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAdvanceConfigsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAliasesResponse
   */
  async listAliasesWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAliasesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListAliases",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/aliases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAliasesResponse>(await this.callApi(params, req, runtime), new ListAliasesResponse({}));
  }

  /**
   * @returns ListAliasesResponse
   */
  async listAliases(instanceId: string): Promise<ListAliasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAliasesWithOptions(instanceId, headers, runtime);
  }

  /**
   * Queries cluster names.
   * 
   * @remarks
   * ### Method
   * GET
   * ### URI
   * /openapi/ha3/instances/{instanceId}/cluster-names
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterNamesResponse
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
   * Queries cluster names.
   * 
   * @remarks
   * ### Method
   * GET
   * ### URI
   * /openapi/ha3/instances/{instanceId}/cluster-names
   * @returns ListClusterNamesResponse
   */
  async listClusterNames(): Promise<ListClusterNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterNamesWithOptions(headers, runtime);
  }

  /**
   * Queries cluster tasks.
   * 
   * @remarks
   * ### Method
   * ```java
   * GET
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/cluster-tasks
   * ```
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterTasksResponse
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
   * Queries cluster tasks.
   * 
   * @remarks
   * ### Method
   * ```java
   * GET
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/cluster-tasks
   * ```
   * @returns ListClusterTasksResponse
   */
  async listClusterTasks(instanceId: string): Promise<ListClusterTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterTasksWithOptions(instanceId, headers, runtime);
  }

  /**
   * Queries clusters.
   * 
   * @remarks
   * ### Method
   * ```java
   * GET
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/clusters
   * ```
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClustersResponse
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
   * Queries clusters.
   * 
   * @remarks
   * ### Method
   * ```java
   * GET
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/clusters
   * ```
   * @returns ListClustersResponse
   */
  async listClusters(instanceId: string): Promise<ListClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClustersWithOptions(instanceId, headers, runtime);
  }

  /**
   * Queries the schema information about a data source.
   * 
   * @remarks
   * ## Method
   * `GET`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}/schemas`
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceSchemasResponse
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
   * Queries the schema information about a data source.
   * 
   * @remarks
   * ## Method
   * `GET`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}/schemas`
   * @returns ListDataSourceSchemasResponse
   */
  async listDataSourceSchemas(instanceId: string, dataSourceName: string): Promise<ListDataSourceSchemasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourceSchemasWithOptions(instanceId, dataSourceName, headers, runtime);
  }

  /**
   * Displays data source tasks.
   * 
   * @remarks
   * ### [](#)Method
   * ```java
   * GET
   * ```
   * ### [](#uri)URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/data-source-tasks
   * ```
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceTasksResponse
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
   * Displays data source tasks.
   * 
   * @remarks
   * ### [](#)Method
   * ```java
   * GET
   * ```
   * ### [](#uri)URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/data-source-tasks
   * ```
   * @returns ListDataSourceTasksResponse
   */
  async listDataSourceTasks(instanceId: string): Promise<ListDataSourceTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourceTasksWithOptions(instanceId, headers, runtime);
  }

  /**
   * Obtains the list of data sources.
   * 
   * @remarks
   * ## Method
   * `GET`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/data-sources`
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourcesResponse
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
   * Obtains the list of data sources.
   * 
   * @remarks
   * ## Method
   * `GET`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/data-sources`
   * @returns ListDataSourcesResponse
   */
  async listDataSources(instanceId: string): Promise<ListDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourcesWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatabasesResponse
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
   * @returns ListDatabasesResponse
   */
  async listDatabases(instanceId: string): Promise<ListDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatabasesWithOptions(instanceId, headers, runtime);
  }

  /**
   * Queries the historical index versions of a data source.
   * 
   * @remarks
   * ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}/generations?domainName={domainName}`
   * 
   * @param request - ListDateSourceGenerationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDateSourceGenerationsResponse
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
   * Queries the historical index versions of a data source.
   * 
   * @remarks
   * ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}/generations?domainName={domainName}`
   * 
   * @param request - ListDateSourceGenerationsRequest
   * @returns ListDateSourceGenerationsResponse
   */
  async listDateSourceGenerations(instanceId: string, dataSourceName: string, request: ListDateSourceGenerationsRequest): Promise<ListDateSourceGenerationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDateSourceGenerationsWithOptions(instanceId, dataSourceName, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIndexRecoverRecordsResponse
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
   * @returns ListIndexRecoverRecordsResponse
   */
  async listIndexRecoverRecords(indexName: string, instanceId: string): Promise<ListIndexRecoverRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndexRecoverRecordsWithOptions(indexName, instanceId, headers, runtime);
  }

  /**
   * Obtains the index list.
   * 
   * @remarks
   * ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes
   * 
   * @param request - ListIndexesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIndexesResponse
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
   * Obtains the index list.
   * 
   * @remarks
   * ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes
   * 
   * @param request - ListIndexesRequest
   * @returns ListIndexesResponse
   */
  async listIndexes(instanceId: string, request: ListIndexesRequest): Promise<ListIndexesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndexesWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries the specifications of an instance.
   * 
   * @remarks
   * ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/specs?type=qrs`
   * 
   * @param request - ListInstanceSpecsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceSpecsResponse
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
   * Queries the specifications of an instance.
   * 
   * @remarks
   * ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/specs?type=qrs`
   * 
   * @param request - ListInstanceSpecsRequest
   * @returns ListInstanceSpecsResponse
   */
  async listInstanceSpecs(instanceId: string, request: ListInstanceSpecsRequest): Promise<ListInstanceSpecsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceSpecsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries a list of instances.
   * 
   * @remarks
   * ### [](#)Method
   * `GET`
   * ### [](#uri)URI
   * `/openapi/ha3/instances`
   * 
   * @param tmpReq - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
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
   * Queries a list of instances.
   * 
   * @remarks
   * ### [](#)Method
   * `GET`
   * ### [](#uri)URI
   * `/openapi/ha3/instances`
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * @param request - ListLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogsResponse
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
   * @param request - ListLogsRequest
   * @returns ListLogsResponse
   */
  async listLogs(instanceId: string, request: ListLogsRequest): Promise<ListLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries the details of an online configuration.
   * 
   * @remarks
   * ### Method
   * ```java
   * GET
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/node/{nodeName}/online-configs?domain={domain}
   * ```
   * 
   * @param request - ListOnlineConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOnlineConfigsResponse
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
   * Queries the details of an online configuration.
   * 
   * @remarks
   * ### Method
   * ```java
   * GET
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/node/{nodeName}/online-configs?domain={domain}
   * ```
   * 
   * @param request - ListOnlineConfigsRequest
   * @returns ListOnlineConfigsResponse
   */
  async listOnlineConfigs(instanceId: string, nodeName: string, request: ListOnlineConfigsRequest): Promise<ListOnlineConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOnlineConfigsWithOptions(instanceId, nodeName, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPausePolicysResponse
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
   * @returns ListPausePolicysResponse
   */
  async listPausePolicys(instanceId: string): Promise<ListPausePolicysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPausePolicysWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param request - ListPostQueryResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPostQueryResultResponse
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
   * @param request - ListPostQueryResultRequest
   * @returns ListPostQueryResultResponse
   */
  async listPostQueryResult(instanceId: string, request: ListPostQueryResultRequest): Promise<ListPostQueryResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPostQueryResultWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries the query result.
   * 
   * @remarks
   * ### [](#)Method
   * `GET`
   * ### [](#uri)URI
   * `/openapi/ha3/instances/{instanceId}/query?query=xxxx`
   * 
   * @param request - ListQueryResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueryResultResponse
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
   * Queries the query result.
   * 
   * @remarks
   * ### [](#)Method
   * `GET`
   * ### [](#uri)URI
   * `/openapi/ha3/instances/{instanceId}/query?query=xxxx`
   * 
   * @param request - ListQueryResultRequest
   * @returns ListQueryResultResponse
   */
  async listQueryResult(instanceId: string, request: ListQueryResultRequest): Promise<ListQueryResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQueryResultWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - ListRestQueryResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRestQueryResultResponse
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
   * @param request - ListRestQueryResultRequest
   * @returns ListRestQueryResultResponse
   */
  async listRestQueryResult(instanceId: string, request: ListRestQueryResultRequest): Promise<ListRestQueryResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRestQueryResultWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 通过数据源配置获取schema信息
   * 
   * @param request - ListSchemasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSchemasResponse
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
   * 通过数据源配置获取schema信息
   * 
   * @param request - ListSchemasRequest
   * @returns ListSchemasResponse
   */
  async listSchemas(instanceId: string, request: ListSchemasRequest): Promise<ListSchemasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSchemasWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries a list of index versions.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTableGenerationsResponse
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
   * Queries a list of index versions.
   * @returns ListTableGenerationsResponse
   */
  async listTableGenerations(instanceId: string, tableName: string): Promise<ListTableGenerationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTableGenerationsWithOptions(instanceId, tableName, headers, runtime);
  }

  /**
   * Queries a list of index tables.
   * 
   * @param request - ListTablesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTablesResponse
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
   * Queries a list of index tables.
   * 
   * @param request - ListTablesRequest
   * @returns ListTablesResponse
   */
  async listTables(instanceId: string, request: ListTablesRequest): Promise<ListTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTablesWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 查标签接口
   * 
   * @param tmpReq - ListTagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
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
   * 查标签接口
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * 获取集群任务列表（数据源+集群）
   * 
   * @param request - ListTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTasksResponse
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
   * 获取集群任务列表（数据源+集群）
   * 
   * @param request - ListTasksRequest
   * @returns ListTasksResponse
   */
  async listTasks(instanceId: string, request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTasksWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - ListVectorQueryResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVectorQueryResultResponse
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
   * @param request - ListVectorQueryResultRequest
   * @returns ListVectorQueryResultResponse
   */
  async listVectorQueryResult(instanceId: string, request: ListVectorQueryResultRequest): Promise<ListVectorQueryResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVectorQueryResultWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - ModifyAdvanceConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAdvanceConfigResponse
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
   * @param request - ModifyAdvanceConfigRequest
   * @returns ModifyAdvanceConfigResponse
   */
  async modifyAdvanceConfig(instanceId: string, configName: string, request: ModifyAdvanceConfigRequest): Promise<ModifyAdvanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyAdvanceConfigWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * Modifies the advanced configurations.
   * 
   * @remarks
   * ## Method
   *     put
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/file?fileName={fileName}
   * 
   * @param request - ModifyAdvanceConfigFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAdvanceConfigFileResponse
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
   * Modifies the advanced configurations.
   * 
   * @remarks
   * ## Method
   *     put
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/file?fileName={fileName}
   * 
   * @param request - ModifyAdvanceConfigFileRequest
   * @returns ModifyAdvanceConfigFileResponse
   */
  async modifyAdvanceConfigFile(instanceId: string, configName: string, request: ModifyAdvanceConfigFileRequest): Promise<ModifyAdvanceConfigFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyAdvanceConfigFileWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * @param request - ModifyAliasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAliasResponse
   */
  async modifyAliasWithOptions(instanceId: string, alias: string, request: ModifyAliasRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyAliasResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alias)) {
      body["alias"] = request.alias;
    }

    if (!Util.isUnset(request.index)) {
      body["index"] = request.index;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAlias",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${OpenApiUtil.getEncodeParam(instanceId)}/aliases/${OpenApiUtil.getEncodeParam(alias)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyAliasResponse>(await this.callApi(params, req, runtime), new ModifyAliasResponse({}));
  }

  /**
   * @param request - ModifyAliasRequest
   * @returns ModifyAliasResponse
   */
  async modifyAlias(instanceId: string, alias: string, request: ModifyAliasRequest): Promise<ModifyAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyAliasWithOptions(instanceId, alias, request, headers, runtime);
  }

  /**
   * Modifies the description of a specified cluster.
   * 
   * @remarks
   * ### [](#)Method
   * `PUT`
   * ### [](#uri)URI
   * `/openapi/ha3/instances/{instanceId}/clusters/{clusterName}/desc`
   * 
   * @param request - ModifyClusterDescRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterDescResponse
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
   * Modifies the description of a specified cluster.
   * 
   * @remarks
   * ### [](#)Method
   * `PUT`
   * ### [](#uri)URI
   * `/openapi/ha3/instances/{instanceId}/clusters/{clusterName}/desc`
   * 
   * @param request - ModifyClusterDescRequest
   * @returns ModifyClusterDescResponse
   */
  async modifyClusterDesc(instanceId: string, clusterName: string, request: ModifyClusterDescRequest): Promise<ModifyClusterDescResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterDescWithOptions(instanceId, clusterName, request, headers, runtime);
  }

  /**
   * Modifies the configuration information of a cluster.
   * 
   * @remarks
   * ## Request syntax
   *     PUT /openapi/ha3/instances/{instanceId}/cluster-offline-config
   * 
   * @param request - ModifyClusterOfflineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterOfflineConfigResponse
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
   * Modifies the configuration information of a cluster.
   * 
   * @remarks
   * ## Request syntax
   *     PUT /openapi/ha3/instances/{instanceId}/cluster-offline-config
   * 
   * @param request - ModifyClusterOfflineConfigRequest
   * @returns ModifyClusterOfflineConfigResponse
   */
  async modifyClusterOfflineConfig(instanceId: string, request: ModifyClusterOfflineConfigRequest): Promise<ModifyClusterOfflineConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterOfflineConfigWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Modifies the online configuration of a cluster.
   * 
   * @remarks
   * ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/cluster-online-config`
   * 
   * @param request - ModifyClusterOnlineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterOnlineConfigResponse
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
   * Modifies the online configuration of a cluster.
   * 
   * @remarks
   * ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/cluster-online-config`
   * 
   * @param request - ModifyClusterOnlineConfigRequest
   * @returns ModifyClusterOnlineConfigResponse
   */
  async modifyClusterOnlineConfig(instanceId: string, request: ModifyClusterOnlineConfigRequest): Promise<ModifyClusterOnlineConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterOnlineConfigWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 修改数据源部署信息
   * 
   * @param request - ModifyDataSourceDeployRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDataSourceDeployResponse
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
   * 修改数据源部署信息
   * 
   * @param request - ModifyDataSourceDeployRequest
   * @returns ModifyDataSourceDeployResponse
   */
  async modifyDataSourceDeploy(instanceId: string, deployName: string, dataSourceName: string, request: ModifyDataSourceDeployRequest): Promise<ModifyDataSourceDeployResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyDataSourceDeployWithOptions(instanceId, deployName, dataSourceName, request, headers, runtime);
  }

  /**
   * Modifies a file.
   * 
   * @remarks
   * ## Method
   *     PUT
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/versions/{versionName}/file?fileName=/root/test.txt
   * 
   * @param request - ModifyFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFileResponse
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
   * Modifies a file.
   * 
   * @remarks
   * ## Method
   *     PUT
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/versions/{versionName}/file?fileName=/root/test.txt
   * 
   * @param request - ModifyFileRequest
   * @returns ModifyFileResponse
   */
  async modifyFile(instanceId: string, indexName: string, versionName: string, request: ModifyFileRequest): Promise<ModifyFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyFileWithOptions(instanceId, indexName, versionName, request, headers, runtime);
  }

  /**
   * @param request - ModifyIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyIndexResponse
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
   * @param request - ModifyIndexRequest
   * @returns ModifyIndexResponse
   */
  async modifyIndex(instanceId: string, indexName: string, request: ModifyIndexRequest): Promise<ModifyIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyIndexWithOptions(instanceId, indexName, request, headers, runtime);
  }

  /**
   * Modifies the online policy of an index.
   * 
   * @param request - ModifyIndexOnlineStrategyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyIndexOnlineStrategyResponse
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
   * Modifies the online policy of an index.
   * 
   * @param request - ModifyIndexOnlineStrategyRequest
   * @returns ModifyIndexOnlineStrategyResponse
   */
  async modifyIndexOnlineStrategy(instanceId: string, dataSourceName: string, deployName: string, indexName: string, request: ModifyIndexOnlineStrategyRequest): Promise<ModifyIndexOnlineStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyIndexOnlineStrategyWithOptions(instanceId, dataSourceName, deployName, indexName, request, headers, runtime);
  }

  /**
   * Modifies the information about index partitions.
   * 
   * @remarks
   * ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/index-partition`
   * 
   * @param request - ModifyIndexPartitionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyIndexPartitionResponse
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
   * Modifies the information about index partitions.
   * 
   * @remarks
   * ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/index-partition`
   * 
   * @param request - ModifyIndexPartitionRequest
   * @returns ModifyIndexPartitionResponse
   */
  async modifyIndexPartition(instanceId: string, request: ModifyIndexPartitionRequest): Promise<ModifyIndexPartitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyIndexPartitionWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Modifies the index version of a cluster (an index version rollback).
   * 
   * @remarks
   * ## [](#)Method
   *     PUT
   * ## [](#uri)URI
   *     /openapi/ha3/instances/{instanceId}/clusters/{clusterName}/index-version
   * 
   * @param request - ModifyIndexVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyIndexVersionResponse
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
   * Modifies the index version of a cluster (an index version rollback).
   * 
   * @remarks
   * ## [](#)Method
   *     PUT
   * ## [](#uri)URI
   *     /openapi/ha3/instances/{instanceId}/clusters/{clusterName}/index-version
   * 
   * @param request - ModifyIndexVersionRequest
   * @returns ModifyIndexVersionResponse
   */
  async modifyIndexVersion(instanceId: string, clusterName: string, request: ModifyIndexVersionRequest): Promise<ModifyIndexVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyIndexVersionWithOptions(instanceId, clusterName, request, headers, runtime);
  }

  /**
   * Modifies the configurations of a node.
   * 
   * @remarks
   * ### Method
   * ```java
   * PUT
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/node-config?type=qrs&name=test
   * ```
   * 
   * @param request - ModifyNodeConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNodeConfigResponse
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
   * Modifies the configurations of a node.
   * 
   * @remarks
   * ### Method
   * ```java
   * PUT
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/node-config?type=qrs&name=test
   * ```
   * 
   * @param request - ModifyNodeConfigRequest
   * @returns ModifyNodeConfigResponse
   */
  async modifyNodeConfig(instanceId: string, request: ModifyNodeConfigRequest): Promise<ModifyNodeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyNodeConfigWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Modifies online configurations.
   * 
   * @remarks
   * ### Method
   * ```java
   * put
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/node/{nodeName}/online-configs/{indexName}
   * ```
   * 
   * @param request - ModifyOnlineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyOnlineConfigResponse
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
   * Modifies online configurations.
   * 
   * @remarks
   * ### Method
   * ```java
   * put
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/node/{nodeName}/online-configs/{indexName}
   * ```
   * 
   * @param request - ModifyOnlineConfigRequest
   * @returns ModifyOnlineConfigResponse
   */
  async modifyOnlineConfig(instanceId: string, nodeName: string, indexName: string, request: ModifyOnlineConfigRequest): Promise<ModifyOnlineConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyOnlineConfigWithOptions(instanceId, nodeName, indexName, request, headers, runtime);
  }

  /**
   * 修改实例的密码
   * 
   * @remarks
   * ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/password`
   * 
   * @param request - ModifyPasswordRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPasswordResponse
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
   * 修改实例的密码
   * 
   * @remarks
   * ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/password`
   * 
   * @param request - ModifyPasswordRequest
   * @returns ModifyPasswordResponse
   */
  async modifyPassword(instanceId: string, request: ModifyPasswordRequest): Promise<ModifyPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyPasswordWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - ModifyPausePolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPausePolicyResponse
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
   * @param request - ModifyPausePolicyRequest
   * @returns ModifyPausePolicyResponse
   */
  async modifyPausePolicy(instanceId: string, request: ModifyPausePolicyRequest): Promise<ModifyPausePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyPausePolicyWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 修改公网域名访问白名单
   * 
   * @param request - ModifyPublicUrlIpListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPublicUrlIpListResponse
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
   * 修改公网域名访问白名单
   * 
   * @param request - ModifyPublicUrlIpListRequest
   * @returns ModifyPublicUrlIpListResponse
   */
  async modifyPublicUrlIpList(instanceId: string, request: ModifyPublicUrlIpListRequest): Promise<ModifyPublicUrlIpListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyPublicUrlIpListWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Modifies an index table.
   * 
   * @param request - ModifyTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTableResponse
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
   * Modifies an index table.
   * 
   * @param request - ModifyTableRequest
   * @returns ModifyTableResponse
   */
  async modifyTable(instanceId: string, tableName: string, request: ModifyTableRequest): Promise<ModifyTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyTableWithOptions(instanceId, tableName, request, headers, runtime);
  }

  /**
   * Publishes a version of advanced configurations.
   * 
   * @remarks
   * ## Method
   * ~~~
   * POST
   * ~~~
   * ## URI
   * ~~~
   * /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/actions/publish
   * ~~~
   * 
   * @param request - PublishAdvanceConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishAdvanceConfigResponse
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
   * Publishes a version of advanced configurations.
   * 
   * @remarks
   * ## Method
   * ~~~
   * POST
   * ~~~
   * ## URI
   * ~~~
   * /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/actions/publish
   * ~~~
   * 
   * @param request - PublishAdvanceConfigRequest
   * @returns PublishAdvanceConfigResponse
   */
  async publishAdvanceConfig(instanceId: string, configName: string, request: PublishAdvanceConfigRequest): Promise<PublishAdvanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishAdvanceConfigWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * Publishes a specified index version.
   * 
   * @remarks
   * ## Method
   *     POST
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/actions/publish
   * 
   * @param request - PublishIndexVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishIndexVersionResponse
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
   * Publishes a specified index version.
   * 
   * @remarks
   * ## Method
   *     POST
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/actions/publish
   * 
   * @param request - PublishIndexVersionRequest
   * @returns PublishIndexVersionResponse
   */
  async publishIndexVersion(instanceId: string, indexName: string, request: PublishIndexVersionRequest): Promise<PublishIndexVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishIndexVersionWithOptions(instanceId, indexName, request, headers, runtime);
  }

  /**
   * @param request - PushDocumentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushDocumentsResponse
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
   * @param request - PushDocumentsRequest
   * @returns PushDocumentsResponse
   */
  async pushDocuments(instanceId: string, dataSourceName: string, request: PushDocumentsRequest): Promise<PushDocumentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushDocumentsWithOptions(instanceId, dataSourceName, request, headers, runtime);
  }

  /**
   * Restores data from an index.
   * 
   * @remarks
   * ### Method
   * `POST`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/recover-index`
   * 
   * @param request - RecoverIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecoverIndexResponse
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
   * Restores data from an index.
   * 
   * @remarks
   * ### Method
   * `POST`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/recover-index`
   * 
   * @param request - RecoverIndexRequest
   * @returns RecoverIndexResponse
   */
  async recoverIndex(instanceId: string, request: RecoverIndexRequest): Promise<RecoverIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recoverIndexWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Rebuilds an index.
   * 
   * @param request - ReindexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReindexResponse
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
   * Rebuilds an index.
   * 
   * @param request - ReindexRequest
   * @returns ReindexResponse
   */
  async reindex(instanceId: string, tableName: string, request: ReindexRequest): Promise<ReindexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reindexWithOptions(instanceId, tableName, request, headers, runtime);
  }

  /**
   * Deletes a cluster.
   * 
   * @remarks
   * ### Method
   * ```java
   * DELETE
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/clusters/{clusterName}
   * ```
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveClusterResponse
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
   * Deletes a cluster.
   * 
   * @remarks
   * ### Method
   * ```java
   * DELETE
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/clusters/{clusterName}
   * ```
   * @returns RemoveClusterResponse
   */
  async removeCluster(instanceId: string, clusterName: string): Promise<RemoveClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeClusterWithOptions(instanceId, clusterName, headers, runtime);
  }

  /**
   * @param request - RenameFolderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameFolderResponse
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
   * @param request - RenameFolderRequest
   * @returns RenameFolderResponse
   */
  async renameFolder(instanceId: string, database: string, folderId: string, request: RenameFolderRequest): Promise<RenameFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renameFolderWithOptions(instanceId, database, folderId, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartIndexResponse
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
   * @returns StartIndexResponse
   */
  async startIndex(instanceId: string, indexName: string): Promise<StartIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startIndexWithOptions(instanceId, indexName, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopIndexResponse
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
   * @returns StopIndexResponse
   */
  async stopIndex(instanceId: string, indexName: string): Promise<StopIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopIndexWithOptions(instanceId, indexName, headers, runtime);
  }

  /**
   * Stops an FSM task.
   * 
   * @remarks
   * ### [](#)Method
   * ```java
   * PUT
   * ```
   * ### [](#uri)URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/stop-task/{fsmId}
   * ```
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTaskResponse
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
   * Stops an FSM task.
   * 
   * @remarks
   * ### [](#)Method
   * ```java
   * PUT
   * ```
   * ### [](#uri)URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/stop-task/{fsmId}
   * ```
   * @returns StopTaskResponse
   */
  async stopTask(instanceId: string, fsmId: string): Promise<StopTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopTaskWithOptions(instanceId, fsmId, headers, runtime);
  }

  /**
   * 打标签接口
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
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
   * 打标签接口
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * 删标签接口
   * 
   * @param tmpReq - UntagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
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
   * 删标签接口
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the configuration of a specified instance.
   * 
   * @remarks
   * ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}`
   * 
   * @param request - UpdateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
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
   * Modifies the configuration of a specified instance.
   * 
   * @remarks
   * ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}`
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(instanceId: string, request: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - UpdateSqlInstanceContentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSqlInstanceContentResponse
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
   * @param request - UpdateSqlInstanceContentRequest
   * @returns UpdateSqlInstanceContentResponse
   */
  async updateSqlInstanceContent(instanceId: string, database: string, sqlInstanceId: string, request: UpdateSqlInstanceContentRequest): Promise<UpdateSqlInstanceContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSqlInstanceContentWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

  /**
   * @param request - UpdateSqlInstanceNameRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSqlInstanceNameResponse
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
   * @param request - UpdateSqlInstanceNameRequest
   * @returns UpdateSqlInstanceNameResponse
   */
  async updateSqlInstanceName(instanceId: string, database: string, sqlInstanceId: string, request: UpdateSqlInstanceNameRequest): Promise<UpdateSqlInstanceNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSqlInstanceNameWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

  /**
   * @param request - UpdateSqlInstanceParamsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSqlInstanceParamsResponse
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
   * @param request - UpdateSqlInstanceParamsRequest
   * @returns UpdateSqlInstanceParamsResponse
   */
  async updateSqlInstanceParams(instanceId: string, database: string, sqlInstanceId: string, request: UpdateSqlInstanceParamsRequest): Promise<UpdateSqlInstanceParamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSqlInstanceParamsWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

}
