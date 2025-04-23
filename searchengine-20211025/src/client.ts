// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class VariablesValueFuncValue extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigValueFilesConfig extends $dara.Model {
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

  validate() {
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigValueFiles extends $dara.Model {
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

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneSqlInstanceResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestDataNode extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestQueryNode extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequestConfig extends $dara.Model {
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
  catalog?: string;
  database?: string;
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
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      catalog: 'catalog',
      database: 'database',
      endpoint: 'endpoint',
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      catalog: 'string',
      database: 'string',
      endpoint: 'string',
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequestSaroConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexRequestDataSourceInfoConfig extends $dara.Model {
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
  catalog?: string;
  database?: string;
  /**
   * @remarks
   * The endpoint of the MaxCompute or Object Storage Service (OSS) data source.
   * 
   * @example
   * https://oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  format?: string;
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
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      catalog: 'catalog',
      database: 'database',
      endpoint: 'endpoint',
      format: 'format',
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      catalog: 'string',
      database: 'string',
      endpoint: 'string',
      format: 'string',
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexRequestDataSourceInfoSaroConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexRequestDataSourceInfo extends $dara.Model {
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

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.saroConfig && typeof (this.saroConfig as any).validate === 'function') {
      (this.saroConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestComponents extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestOrder extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestTags extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelRequestContentRequestHeader extends $dara.Model {
  /**
   * @example
   * Bearer OS-v0********6vvs
   */
  authorization?: string;
  /**
   * @example
   * application/json
   */
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      authorization: 'Authorization',
      contentType: 'Content-Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorization: 'string',
      contentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelRequestContentRequestParametersBuild extends $dara.Model {
  /**
   * @example
   * query
   */
  inputType?: string;
  static names(): { [key: string]: string } {
    return {
      inputType: 'input_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelRequestContentRequestParametersSearch extends $dara.Model {
  /**
   * @example
   * document
   */
  inputType?: string;
  static names(): { [key: string]: string } {
    return {
      inputType: 'input_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelRequestContentRequestParameters extends $dara.Model {
  build?: CreateModelRequestContentRequestParametersBuild;
  search?: CreateModelRequestContentRequestParametersSearch;
  static names(): { [key: string]: string } {
    return {
      build: 'build',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      build: CreateModelRequestContentRequestParametersBuild,
      search: CreateModelRequestContentRequestParametersSearch,
    };
  }

  validate() {
    if(this.build && typeof (this.build as any).validate === 'function') {
      (this.build as any).validate();
    }
    if(this.search && typeof (this.search as any).validate === 'function') {
      (this.search as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelRequestContentRequestUrlParams extends $dara.Model {
  /**
   * @example
   * key: value
   */
  build?: { [key: string]: any };
  /**
   * @example
   * key: value
   */
  search?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      build: 'build',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      build: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      search: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.build) {
      $dara.Model.validateMap(this.build);
    }
    if(this.search) {
      $dara.Model.validateMap(this.search);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelRequestContentRequest extends $dara.Model {
  header?: CreateModelRequestContentRequestHeader;
  parameters?: CreateModelRequestContentRequestParameters;
  /**
   * @example
   * {\\"input\\": [\\"%{input}\\"], \\"input_type\\": \\"%{input_type}\\"}
   */
  requestBody?: string;
  urlParams?: CreateModelRequestContentRequestUrlParams;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      parameters: 'parameters',
      requestBody: 'requestBody',
      urlParams: 'urlParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: CreateModelRequestContentRequestHeader,
      parameters: CreateModelRequestContentRequestParameters,
      requestBody: 'string',
      urlParams: CreateModelRequestContentRequestUrlParams,
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    if(this.urlParams && typeof (this.urlParams as any).validate === 'function') {
      (this.urlParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelRequestContentResponse extends $dara.Model {
  /**
   * @example
   * $.result.embeddings[*].embedding
   */
  embeddings?: string;
  static names(): { [key: string]: string } {
    return {
      embeddings: 'embeddings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddings: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelRequestContent extends $dara.Model {
  /**
   * @example
   * 128
   */
  dimension?: number;
  /**
   * @example
   * POST
   */
  method?: string;
  /**
   * @example
   * text_embedding
   */
  modelType?: string;
  request?: CreateModelRequestContentRequest;
  response?: CreateModelRequestContentResponse;
  /**
   * @example
   * http://***.platform-cn-shanghai.opensearch.aliyuncs.com/v3/openapi/workspaces/default/text-embedding/ops-text-embedding-001
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'dimension',
      method: 'method',
      modelType: 'modelType',
      request: 'request',
      response: 'response',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'number',
      method: 'string',
      modelType: 'string',
      request: CreateModelRequestContentRequest,
      response: CreateModelRequestContentResponse,
      url: 'string',
    };
  }

  validate() {
    if(this.request && typeof (this.request as any).validate === 'function') {
      (this.request as any).validate();
    }
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSqlInstanceResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestDataProcessConfigParamsSrcFieldConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestDataProcessConfigParams extends $dara.Model {
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

  validate() {
    if(this.srcFieldConfig && typeof (this.srcFieldConfig as any).validate === 'function') {
      (this.srcFieldConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestDataProcessConfig extends $dara.Model {
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

  validate() {
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestDataSourceConfig extends $dara.Model {
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
  catalog?: string;
  database?: string;
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
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      catalog: 'catalog',
      database: 'database',
      endpoint: 'endpoint',
      ossPath: 'ossPath',
      partition: 'partition',
      project: 'project',
      table: 'table',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      catalog: 'string',
      database: 'string',
      endpoint: 'string',
      ossPath: 'string',
      partition: 'string',
      project: 'string',
      table: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestDataSource extends $dara.Model {
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

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestVectorIndexAdvanceParams extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestVectorIndex extends $dara.Model {
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

  validate() {
    if(this.advanceParams && typeof (this.advanceParams as any).validate === 'function') {
      (this.advanceParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderResponseBodyResult extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSqlInstanceResponseBodyResult extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlInstanceResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvanceConfigResponseBodyResultFiles extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvanceConfigResponseBodyResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvanceConfigFileResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyResultDataNode extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyResultQueryNode extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyResult extends $dara.Model {
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

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    if(this.dataNode && typeof (this.dataNode as any).validate === 'function') {
      (this.dataNode as any).validate();
    }
    if(this.queryNode && typeof (this.queryNode as any).validate === 'function') {
      (this.queryNode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultDataNodesConfigStatusList extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListAdvanceConfigInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListIndexConfigInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusList extends $dara.Model {
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

  validate() {
    if(this.advanceConfigInfo && typeof (this.advanceConfigInfo as any).validate === 'function') {
      (this.advanceConfigInfo as any).validate();
    }
    if(Array.isArray(this.deployFailedWorker)) {
      $dara.Model.validateArray(this.deployFailedWorker);
    }
    if(this.indexConfigInfo && typeof (this.indexConfigInfo as any).validate === 'function') {
      (this.indexConfigInfo as any).validate();
    }
    if(Array.isArray(this.lackDiskWorker)) {
      $dara.Model.validateArray(this.lackDiskWorker);
    }
    if(Array.isArray(this.lackMemWorker)) {
      $dara.Model.validateArray(this.lackMemWorker);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultDataNodesServiceStatus extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultDataNodes extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.configStatusList)) {
      $dara.Model.validateArray(this.configStatusList);
    }
    if(Array.isArray(this.dataStatusList)) {
      $dara.Model.validateArray(this.dataStatusList);
    }
    if(this.serviceStatus && typeof (this.serviceStatus as any).validate === 'function') {
      (this.serviceStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultQueryNodeConfigStatusList extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultQueryNodeServiceStatus extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultQueryNode extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.configStatusList)) {
      $dara.Model.validateArray(this.configStatusList);
    }
    if(this.serviceStatus && typeof (this.serviceStatus as any).validate === 'function') {
      (this.serviceStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.dataNodes)) {
      $dara.Model.validateArray(this.dataNodes);
    }
    if(this.queryNode && typeof (this.queryNode as any).validate === 'function') {
      (this.queryNode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceResponseBodyResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.indexes)) {
      $dara.Model.validateArray(this.indexes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponseBodyResultExtendHdfs extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponseBodyResultExtendOdps extends $dara.Model {
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

  validate() {
    if(this.partitions) {
      $dara.Model.validateMap(this.partitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponseBodyResultExtendOss extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponseBodyResultExtendSaro extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponseBodyResultExtend extends $dara.Model {
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

  validate() {
    if(this.hdfs && typeof (this.hdfs as any).validate === 'function') {
      (this.hdfs as any).validate();
    }
    if(this.odps && typeof (this.odps as any).validate === 'function') {
      (this.odps as any).validate();
    }
    if(this.oss && typeof (this.oss as any).validate === 'function') {
      (this.oss as any).validate();
    }
    if(this.saro && typeof (this.saro as any).validate === 'function') {
      (this.saro as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponseBodyResultProcessor extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponseBodyResultStorage extends $dara.Model {
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
  catalog?: string;
  database?: string;
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
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      catalog: 'catalog',
      database: 'database',
      endpoint: 'endpoint',
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      catalog: 'string',
      database: 'string',
      endpoint: 'string',
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponseBodyResultSwift extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponseBodyResult extends $dara.Model {
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

  validate() {
    if(this.extend && typeof (this.extend as any).validate === 'function') {
      (this.extend as any).validate();
    }
    if(this.processor && typeof (this.processor as any).validate === 'function') {
      (this.processor as any).validate();
    }
    if(this.storage && typeof (this.storage as any).validate === 'function') {
      (this.storage as any).validate();
    }
    if(this.swift && typeof (this.swift as any).validate === 'function') {
      (this.swift as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseSchemaResponseBodyResult extends $dara.Model {
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

  validate() {
    if(this.fieldTypeDetail) {
      $dara.Model.validateMap(this.fieldTypeDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponseBodyResultGraphIndexMetas extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponseBodyResultGraphOnlineMaster extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponseBodyResultGraphTableMetas extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponseBodyResultGraphZoneMetas extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponseBodyResultGraph extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.indexMetas)) {
      $dara.Model.validateArray(this.indexMetas);
    }
    if(Array.isArray(this.onlineMaster)) {
      $dara.Model.validateArray(this.onlineMaster);
    }
    if(this.tableIndexRelation) {
      $dara.Model.validateMap(this.tableIndexRelation);
    }
    if(Array.isArray(this.tableMetas)) {
      $dara.Model.validateArray(this.tableMetas);
    }
    if(this.zoneIndexRelation) {
      $dara.Model.validateMap(this.zoneIndexRelation);
    }
    if(Array.isArray(this.zoneMetas)) {
      $dara.Model.validateArray(this.zoneMetas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponseBodyResult extends $dara.Model {
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

  validate() {
    if(this.graph && typeof (this.graph as any).validate === 'function') {
      (this.graph as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseBodyResult extends $dara.Model {
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
  /**
   * @remarks
   * Extended information
   */
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

  validate() {
    if(this.extend) {
      $dara.Model.validateMap(this.extend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponseBodyResultDataSourceInfoConfig extends $dara.Model {
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
  catalog?: string;
  database?: string;
  /**
   * @remarks
   * The endpoint of the MaxCompute data source.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  format?: string;
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
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      catalog: 'catalog',
      database: 'database',
      endpoint: 'endpoint',
      format: 'format',
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      catalog: 'string',
      database: 'string',
      endpoint: 'string',
      format: 'string',
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponseBodyResultDataSourceInfoSaroConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponseBodyResultDataSourceInfo extends $dara.Model {
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

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.saroConfig && typeof (this.saroConfig as any).validate === 'function') {
      (this.saroConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponseBodyResultVersionsFiles extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponseBodyResultVersions extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponseBodyResult extends $dara.Model {
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
  createTime?: string;
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
  /**
   * @remarks
   * Extended information
   */
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
  updateTime?: string;
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
      createTime: 'createTime',
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
      updateTime: 'updateTime',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'map', 'keyType': 'string', 'valueType': ResultClusterValue },
      config: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      configWhenBuild: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      content: 'string',
      createTime: 'string',
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
      updateTime: 'string',
      versions: { 'type': 'array', 'itemType': GetIndexResponseBodyResultVersions },
    };
  }

  validate() {
    if(this.cluster) {
      $dara.Model.validateMap(this.cluster);
    }
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    if(this.configWhenBuild) {
      $dara.Model.validateMap(this.configWhenBuild);
    }
    if(this.dataSourceInfo && typeof (this.dataSourceInfo as any).validate === 'function') {
      (this.dataSourceInfo as any).validate();
    }
    if(this.extend) {
      $dara.Model.validateMap(this.extend);
    }
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexOnlineStrategyResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexVersionResponseBodyResultIndexVersions extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexVersionResponseBodyResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.indexVersions)) {
      $dara.Model.validateArray(this.indexVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyResultNetwork extends $dara.Model {
  /**
   * @remarks
   * The public domain name whitelist.
   * 
   * @example
   * 127.0.0.1
   */
  allow?: string;
  /**
   * @remarks
   * The instance endpoint.
   * 
   * @example
   * ha-cn-35t3r****.ha.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * ha-cn-35t3ni****.public.ha.aliyuncs.com
   */
  publicEndpoint?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp11ldcf59q2n****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-wz9axk41d9vff****
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyResultSpecQrsResource extends $dara.Model {
  /**
   * @remarks
   * The category. Valid values: local_ssd, SSD, and cloud.
   * 
   * @example
   * local_ssd
   */
  category?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 100
   */
  disk?: number;
  /**
   * @remarks
   * The memory of the instance. Unit: GB.
   * 
   * @example
   * 10
   */
  mem?: number;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyResultSpecSearchResource extends $dara.Model {
  /**
   * @remarks
   * The category. Valid values: local_ssd, SSD, and cloud.
   * 
   * @example
   * local_ssd
   */
  category?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 100
   */
  disk?: number;
  /**
   * @remarks
   * The memory of the instance. Unit: GB.
   * 
   * @example
   * 10
   */
  mem?: number;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyResultSpec extends $dara.Model {
  /**
   * @remarks
   * The QRS worker specifications.
   */
  qrsResource?: GetInstanceResponseBodyResultSpecQrsResource;
  /**
   * @remarks
   * The searcher worker specifications.
   */
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

  validate() {
    if(this.qrsResource && typeof (this.qrsResource as any).validate === 'function') {
      (this.qrsResource as any).validate();
    }
    if(this.searchResource && typeof (this.searchResource as any).validate === 'function') {
      (this.searchResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyResultTags extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyResult extends $dara.Model {
  bsVersion?: string;
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
  /**
   * @remarks
   * The edition of the instance. Valid values: vector and engine.
   * 
   * @example
   * vector
   */
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
  /**
   * @remarks
   * The network information of the instance.
   */
  network?: GetInstanceResponseBodyResultNetwork;
  /**
   * @remarks
   * Specifies whether the instance is of the new version.
   * 
   * @example
   * true
   */
  newMode?: boolean;
  /**
   * @remarks
   * Specifies whether the instance has only one node.
   * 
   * @example
   * false
   */
  noQrs?: boolean;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzjvw24el5lma
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The node specifications.
   */
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
  /**
   * @remarks
   * The username.
   * 
   * @example
   * admin
   */
  userName?: string;
  /**
   * @remarks
   * The version of the engine.
   * 
   * @example
   * ha3_3.10.0
   */
  version?: string;
  zoneCount?: number;
  static names(): { [key: string]: string } {
    return {
      bsVersion: 'bsVersion',
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
      zoneCount: 'zoneCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bsVersion: 'string',
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
      zoneCount: 'number',
    };
  }

  validate() {
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBodyResultContentRequestHeader extends $dara.Model {
  /**
   * @example
   * Bearer OS-v0********6vvs
   */
  authorization?: string;
  /**
   * @example
   * application/json
   */
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      authorization: 'Authorization',
      contentType: 'Content-Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorization: 'string',
      contentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBodyResultContentRequestParametersBuild extends $dara.Model {
  /**
   * @example
   * query
   */
  inputType?: string;
  static names(): { [key: string]: string } {
    return {
      inputType: 'input_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBodyResultContentRequestParametersSearch extends $dara.Model {
  /**
   * @example
   * document
   */
  inputType?: string;
  static names(): { [key: string]: string } {
    return {
      inputType: 'input_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBodyResultContentRequestParameters extends $dara.Model {
  build?: GetModelResponseBodyResultContentRequestParametersBuild;
  search?: GetModelResponseBodyResultContentRequestParametersSearch;
  static names(): { [key: string]: string } {
    return {
      build: 'build',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      build: GetModelResponseBodyResultContentRequestParametersBuild,
      search: GetModelResponseBodyResultContentRequestParametersSearch,
    };
  }

  validate() {
    if(this.build && typeof (this.build as any).validate === 'function') {
      (this.build as any).validate();
    }
    if(this.search && typeof (this.search as any).validate === 'function') {
      (this.search as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBodyResultContentRequestUrlParams extends $dara.Model {
  /**
   * @example
   * key: value
   */
  build?: { [key: string]: any };
  /**
   * @example
   * key: value
   */
  search?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      build: 'build',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      build: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      search: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.build) {
      $dara.Model.validateMap(this.build);
    }
    if(this.search) {
      $dara.Model.validateMap(this.search);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBodyResultContentRequest extends $dara.Model {
  header?: GetModelResponseBodyResultContentRequestHeader;
  parameters?: GetModelResponseBodyResultContentRequestParameters;
  /**
   * @example
   * {\\"input\\": [\\"%{input}\\"], \\"input_type\\": \\"%{input_type}\\"}
   */
  requestBody?: string;
  urlParams?: GetModelResponseBodyResultContentRequestUrlParams;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      parameters: 'parameters',
      requestBody: 'requestBody',
      urlParams: 'urlParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: GetModelResponseBodyResultContentRequestHeader,
      parameters: GetModelResponseBodyResultContentRequestParameters,
      requestBody: 'string',
      urlParams: GetModelResponseBodyResultContentRequestUrlParams,
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    if(this.urlParams && typeof (this.urlParams as any).validate === 'function') {
      (this.urlParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBodyResultContentResponse extends $dara.Model {
  /**
   * @example
   * $.result.embeddings[*].embedding
   */
  embeddings?: string;
  static names(): { [key: string]: string } {
    return {
      embeddings: 'embeddings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddings: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBodyResultContent extends $dara.Model {
  /**
   * @example
   * POST
   */
  method?: string;
  /**
   * @example
   * test
   */
  modelName?: string;
  /**
   * @example
   * text_embedding
   */
  modelType?: string;
  request?: GetModelResponseBodyResultContentRequest;
  response?: GetModelResponseBodyResultContentResponse;
  /**
   * @example
   * http://***.platform-cn-shanghai.opensearch.aliyuncs.com/v3/openapi/workspaces/default/text-embedding/ops-text-embedding-001
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      method: 'method',
      modelName: 'modelName',
      modelType: 'modelType',
      request: 'request',
      response: 'response',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      method: 'string',
      modelName: 'string',
      modelType: 'string',
      request: GetModelResponseBodyResultContentRequest,
      response: GetModelResponseBodyResultContentResponse,
      url: 'string',
    };
  }

  validate() {
    if(this.request && typeof (this.request as any).validate === 'function') {
      (this.request as any).validate();
    }
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBodyResult extends $dara.Model {
  content?: GetModelResponseBodyResultContent;
  /**
   * @example
   * 2024-05-21 16:05:26
   */
  createTime?: string;
  /**
   * @example
   * 128
   */
  dimension?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * ok
   */
  status?: string;
  /**
   * @example
   * text_embedding
   */
  type?: string;
  /**
   * @example
   * 2024-05-21 16:05:26
   */
  updateTime?: string;
  /**
   * @example
   * http://***.platform-cn-shanghai.opensearch.aliyuncs.com/v3/openapi/workspaces/default/text-embedding/ops-text-embedding-001
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createTime: 'createTime',
      dimension: 'dimension',
      name: 'name',
      status: 'status',
      type: 'type',
      updateTime: 'updateTime',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: GetModelResponseBodyResultContent,
      createTime: 'string',
      dimension: 'number',
      name: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeConfigResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlInstanceResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyResultDataProcessConfigParamsSrcFieldConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyResultDataProcessConfigParams extends $dara.Model {
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

  validate() {
    if(this.srcFieldConfig && typeof (this.srcFieldConfig as any).validate === 'function') {
      (this.srcFieldConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyResultDataProcessConfig extends $dara.Model {
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

  validate() {
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyResultDataSourceConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyResultDataSource extends $dara.Model {
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

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyResultVectorIndexAdvanceParams extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyResultVectorIndex extends $dara.Model {
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

  validate() {
    if(this.advanceParams && typeof (this.advanceParams as any).validate === 'function') {
      (this.advanceParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.dataProcessConfig)) {
      $dara.Model.validateArray(this.dataProcessConfig);
    }
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(this.fieldSchema) {
      $dara.Model.validateMap(this.fieldSchema);
    }
    if(Array.isArray(this.vectorIndex)) {
      $dara.Model.validateArray(this.vectorIndex);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableGenerationResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvanceConfigDirResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvanceConfigsResponseBodyResultFiles extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvanceConfigsResponseBodyResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNamesResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTasksResponseBodyResultTags extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTasksResponseBodyResultTaskNodes extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTasksResponseBodyResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.taskNodes)) {
      $dara.Model.validateArray(this.taskNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyResultDataNode extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyResultQueryNode extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyResult extends $dara.Model {
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

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    if(this.dataNode && typeof (this.dataNode as any).validate === 'function') {
      (this.dataNode as any).validate();
    }
    if(this.queryNode && typeof (this.queryNode as any).validate === 'function') {
      (this.queryNode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceSchemasResponseBodyResultPrimaryKey extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceSchemasResponseBodyResult extends $dara.Model {
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

  validate() {
    if(this.primaryKey && typeof (this.primaryKey as any).validate === 'function') {
      (this.primaryKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTasksResponseBodyResultTags extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTasksResponseBodyResultTaskNodes extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTasksResponseBodyResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.taskNodes)) {
      $dara.Model.validateArray(this.taskNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBodyResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.indexes)) {
      $dara.Model.validateArray(this.indexes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBodyResultDatabasesSqlInstances extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBodyResultDatabasesTables extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBodyResultDatabasesTemplates extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBodyResultDatabases extends $dara.Model {
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

  validate() {
    if(this.functions) {
      $dara.Model.validateMap(this.functions);
    }
    if(Array.isArray(this.sqlInstances)) {
      $dara.Model.validateArray(this.sqlInstances);
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBodyResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.databases)) {
      $dara.Model.validateArray(this.databases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDateSourceGenerationsResponseBodyResult extends $dara.Model {
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

  validate() {
    if(this.partition) {
      $dara.Model.validateMap(this.partition);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponseBodyResultDataSourceInfoConfig extends $dara.Model {
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
  catalog?: string;
  database?: string;
  /**
   * @remarks
   * The endpoint of the MaxCompute data source.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  format?: string;
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
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      catalog: 'catalog',
      database: 'database',
      endpoint: 'endpoint',
      format: 'format',
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      catalog: 'string',
      database: 'string',
      endpoint: 'string',
      format: 'string',
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponseBodyResultDataSourceInfoSaroConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponseBodyResultDataSourceInfo extends $dara.Model {
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

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.saroConfig && typeof (this.saroConfig as any).validate === 'function') {
      (this.saroConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponseBodyResultVersionsFiles extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponseBodyResultVersions extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The index schema, which is a JSON string.
   * 
   * @example
   * {"summarys":{"parameter":{"file_compressor":"zstd"},"summary_fields":["id"]},"file_compress":[{"name":"file_compressor","type":"zstd"},{"name":"no_compressor","type":""}],"indexs":[{"index_fields":"name","index_name":"ids","index_type":"STRING"},{"has_primary_key_attribute":true,"index_fields":"id","is_primary_key_sorted":false,"index_name":"id","index_type":"PRIMARYKEY64"}],"attributes":[{"file_compress":"no_compressor","field_name":"id"}],"fields":[{"user_defined_param":{},"compress_type":"uniq","field_type":"STRING","field_name":"id"},{"compress_type":"uniq","field_type":"STRING","field_name":"name"}],"table_name":"api"}
   */
  content?: string;
  createTime?: string;
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
  updateTime?: string;
  /**
   * @remarks
   * The index versions.
   */
  versions?: ListIndexesResponseBodyResultVersions[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createTime: 'createTime',
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
      updateTime: 'updateTime',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
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
      updateTime: 'string',
      versions: { 'type': 'array', 'itemType': ListIndexesResponseBodyResultVersions },
    };
  }

  validate() {
    if(this.dataSourceInfo && typeof (this.dataSourceInfo as any).validate === 'function') {
      (this.dataSourceInfo as any).validate();
    }
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSpecsResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequestTags extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyResultDataSourceDetailsConfig extends $dara.Model {
  accessKey?: string;
  bucket?: string;
  catalog?: string;
  database?: string;
  endpoint?: string;
  namespace?: string;
  ossPath?: string;
  partition?: string;
  path?: string;
  project?: string;
  table?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      bucket: 'bucket',
      catalog: 'catalog',
      database: 'database',
      endpoint: 'endpoint',
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      bucket: 'string',
      catalog: 'string',
      database: 'string',
      endpoint: 'string',
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyResultDataSourceDetails extends $dara.Model {
  config?: ListInstancesResponseBodyResultDataSourceDetailsConfig;
  indexName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      indexName: 'indexName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: ListInstancesResponseBodyResultDataSourceDetailsConfig,
      indexName: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyResultNetwork extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyResultSpecQrsResource extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyResultSpecSearchResource extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyResultSpec extends $dara.Model {
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

  validate() {
    if(this.qrsResource && typeof (this.qrsResource as any).validate === 'function') {
      (this.qrsResource as any).validate();
    }
    if(this.searchResource && typeof (this.searchResource as any).validate === 'function') {
      (this.searchResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyResultTags extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyResult extends $dara.Model {
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
  dataSourceDetails?: ListInstancesResponseBodyResultDataSourceDetails[];
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
      dataSourceDetails: 'dataSourceDetails',
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
      dataSourceDetails: { 'type': 'array', 'itemType': ListInstancesResponseBodyResultDataSourceDetails },
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

  validate() {
    if(Array.isArray(this.dataSourceDetails)) {
      $dara.Model.validateArray(this.dataSourceDetails);
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsResponseBodyResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBodyResultContentRequestHeader extends $dara.Model {
  /**
   * @example
   * Bearer OS-v0********6vvs
   */
  authorization?: string;
  /**
   * @example
   * application/json
   */
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      authorization: 'Authorization',
      contentType: 'Content-Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorization: 'string',
      contentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBodyResultContentRequestParametersBuild extends $dara.Model {
  /**
   * @example
   * query
   */
  inputType?: string;
  static names(): { [key: string]: string } {
    return {
      inputType: 'input_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBodyResultContentRequestParametersSearch extends $dara.Model {
  /**
   * @example
   * document
   */
  inputType?: string;
  static names(): { [key: string]: string } {
    return {
      inputType: 'input_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBodyResultContentRequestParameters extends $dara.Model {
  build?: ListModelsResponseBodyResultContentRequestParametersBuild;
  search?: ListModelsResponseBodyResultContentRequestParametersSearch;
  static names(): { [key: string]: string } {
    return {
      build: 'build',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      build: ListModelsResponseBodyResultContentRequestParametersBuild,
      search: ListModelsResponseBodyResultContentRequestParametersSearch,
    };
  }

  validate() {
    if(this.build && typeof (this.build as any).validate === 'function') {
      (this.build as any).validate();
    }
    if(this.search && typeof (this.search as any).validate === 'function') {
      (this.search as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBodyResultContentRequestUrlParams extends $dara.Model {
  /**
   * @example
   * key: value
   */
  build?: { [key: string]: any };
  /**
   * @example
   * key: value
   */
  search?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      build: 'build',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      build: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      search: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.build) {
      $dara.Model.validateMap(this.build);
    }
    if(this.search) {
      $dara.Model.validateMap(this.search);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBodyResultContentRequest extends $dara.Model {
  header?: ListModelsResponseBodyResultContentRequestHeader;
  parameters?: ListModelsResponseBodyResultContentRequestParameters;
  /**
   * @example
   * {\\"input\\": [\\"%{input}\\"], \\"input_type\\": \\"%{input_type}\\"}
   */
  requestBody?: string;
  urlParams?: ListModelsResponseBodyResultContentRequestUrlParams;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      parameters: 'parameters',
      requestBody: 'requestBody',
      urlParams: 'urlParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: ListModelsResponseBodyResultContentRequestHeader,
      parameters: ListModelsResponseBodyResultContentRequestParameters,
      requestBody: 'string',
      urlParams: ListModelsResponseBodyResultContentRequestUrlParams,
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    if(this.urlParams && typeof (this.urlParams as any).validate === 'function') {
      (this.urlParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBodyResultContentResponse extends $dara.Model {
  /**
   * @example
   * $.result.embeddings[*].embedding
   */
  embeddings?: string;
  static names(): { [key: string]: string } {
    return {
      embeddings: 'embeddings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddings: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBodyResultContent extends $dara.Model {
  /**
   * @example
   * POST
   */
  method?: string;
  /**
   * @example
   * test
   */
  modelName?: string;
  /**
   * @example
   * text_embedding
   */
  modelType?: string;
  request?: ListModelsResponseBodyResultContentRequest;
  response?: ListModelsResponseBodyResultContentResponse;
  /**
   * @example
   * http://***.platform-cn-shanghai.opensearch.aliyuncs.com/v3/openapi/workspaces/default/text-embedding/ops-text-embedding-001
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      method: 'method',
      modelName: 'modelName',
      modelType: 'modelType',
      request: 'request',
      response: 'response',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      method: 'string',
      modelName: 'string',
      modelType: 'string',
      request: ListModelsResponseBodyResultContentRequest,
      response: ListModelsResponseBodyResultContentResponse,
      url: 'string',
    };
  }

  validate() {
    if(this.request && typeof (this.request as any).validate === 'function') {
      (this.request as any).validate();
    }
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBodyResult extends $dara.Model {
  content?: ListModelsResponseBodyResultContent;
  /**
   * @example
   * 2024-05-21 16:05:26
   */
  createTime?: string;
  /**
   * @example
   * 128
   */
  dimension?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * ok
   */
  status?: string;
  /**
   * @example
   * text_embedding
   */
  type?: string;
  /**
   * @example
   * 2024-05-21 16:05:26
   */
  updateTime?: string;
  /**
   * @example
   * http://***.platform-cn-shanghai.opensearch.aliyuncs.com/v3/openapi/workspaces/default/text-embedding/ops-text-embedding-001
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createTime: 'createTime',
      dimension: 'dimension',
      name: 'name',
      status: 'status',
      type: 'type',
      updateTime: 'updateTime',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ListModelsResponseBodyResultContent,
      createTime: 'string',
      dimension: 'number',
      name: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnlineConfigsResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableGenerationsResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAdvanceConfigRequestFiles extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestExtendHdfs extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestExtendOdps extends $dara.Model {
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

  validate() {
    if(this.partitions) {
      $dara.Model.validateMap(this.partitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestExtendOss extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestExtendSaro extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestExtend extends $dara.Model {
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

  validate() {
    if(this.hdfs && typeof (this.hdfs as any).validate === 'function') {
      (this.hdfs as any).validate();
    }
    if(this.odps && typeof (this.odps as any).validate === 'function') {
      (this.odps as any).validate();
    }
    if(this.oss && typeof (this.oss as any).validate === 'function') {
      (this.oss as any).validate();
    }
    if(this.saro && typeof (this.saro as any).validate === 'function') {
      (this.saro as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestProcessor extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestStorage extends $dara.Model {
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
  catalog?: string;
  database?: string;
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
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      catalog: 'catalog',
      database: 'database',
      endpoint: 'endpoint',
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      catalog: 'string',
      database: 'string',
      endpoint: 'string',
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestSwift extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexRequestDataSourceInfoConfig extends $dara.Model {
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
  catalog?: string;
  database?: string;
  /**
   * @remarks
   * The endpoint of the MaxCompute data source.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  format?: string;
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
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      catalog: 'catalog',
      database: 'database',
      endpoint: 'endpoint',
      format: 'format',
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      catalog: 'string',
      database: 'string',
      endpoint: 'string',
      format: 'string',
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexRequestDataSourceInfoSaroConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexRequestDataSourceInfo extends $dara.Model {
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
  ossDataPath?: string;
  partition?: string;
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
      ossDataPath: 'ossDataPath',
      partition: 'partition',
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
      ossDataPath: 'string',
      partition: 'string',
      processParallelNum: 'number',
      processPartitionCount: 'number',
      saroConfig: ModifyIndexRequestDataSourceInfoSaroConfig,
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.saroConfig && typeof (this.saroConfig as any).validate === 'function') {
      (this.saroConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexPartitionRequestIndexInfos extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexVersionRequestBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyModelRequestContentRequestHeader extends $dara.Model {
  /**
   * @example
   * Bearer OS-v0********6vvs
   */
  authorization?: string;
  /**
   * @example
   * application/json
   */
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      authorization: 'Authorization',
      contentType: 'Content-Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorization: 'string',
      contentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyModelRequestContentRequestParametersBuild extends $dara.Model {
  /**
   * @example
   * query
   */
  inputType?: string;
  static names(): { [key: string]: string } {
    return {
      inputType: 'input_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyModelRequestContentRequestParametersSearch extends $dara.Model {
  /**
   * @example
   * document
   */
  inputType?: string;
  static names(): { [key: string]: string } {
    return {
      inputType: 'input_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyModelRequestContentRequestParameters extends $dara.Model {
  build?: ModifyModelRequestContentRequestParametersBuild;
  search?: ModifyModelRequestContentRequestParametersSearch;
  static names(): { [key: string]: string } {
    return {
      build: 'build',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      build: ModifyModelRequestContentRequestParametersBuild,
      search: ModifyModelRequestContentRequestParametersSearch,
    };
  }

  validate() {
    if(this.build && typeof (this.build as any).validate === 'function') {
      (this.build as any).validate();
    }
    if(this.search && typeof (this.search as any).validate === 'function') {
      (this.search as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyModelRequestContentRequestUrlParams extends $dara.Model {
  /**
   * @example
   * key: value
   */
  build?: { [key: string]: any };
  /**
   * @example
   * key: value
   */
  search?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      build: 'build',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      build: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      search: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.build) {
      $dara.Model.validateMap(this.build);
    }
    if(this.search) {
      $dara.Model.validateMap(this.search);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyModelRequestContentRequest extends $dara.Model {
  header?: ModifyModelRequestContentRequestHeader;
  parameters?: ModifyModelRequestContentRequestParameters;
  /**
   * @example
   * {\\"input\\": [\\"%{input}\\"], \\"input_type\\": \\"%{input_type}\\"}
   */
  requestBody?: string;
  urlParams?: ModifyModelRequestContentRequestUrlParams;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      parameters: 'parameters',
      requestBody: 'requestBody',
      urlParams: 'urlParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: ModifyModelRequestContentRequestHeader,
      parameters: ModifyModelRequestContentRequestParameters,
      requestBody: 'string',
      urlParams: ModifyModelRequestContentRequestUrlParams,
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    if(this.urlParams && typeof (this.urlParams as any).validate === 'function') {
      (this.urlParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyModelRequestContentResponse extends $dara.Model {
  /**
   * @example
   * $.result.embeddings[*].embedding
   */
  embeddings?: string;
  static names(): { [key: string]: string } {
    return {
      embeddings: 'embeddings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddings: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyModelRequestContent extends $dara.Model {
  /**
   * @example
   * 128
   */
  dimension?: number;
  /**
   * @example
   * POST
   */
  method?: string;
  /**
   * @example
   * text_embedding
   */
  modelType?: string;
  request?: ModifyModelRequestContentRequest;
  response?: ModifyModelRequestContentResponse;
  /**
   * @example
   * http://***.platform-cn-shanghai.opensearch.aliyuncs.com/v3/openapi/workspaces/default/text-embedding/ops-text-embedding-001
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'dimension',
      method: 'method',
      modelType: 'modelType',
      request: 'request',
      response: 'response',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'number',
      method: 'string',
      modelType: 'string',
      request: ModifyModelRequestContentRequest,
      response: ModifyModelRequestContentResponse,
      url: 'string',
    };
  }

  validate() {
    if(this.request && typeof (this.request as any).validate === 'function') {
      (this.request as any).validate();
    }
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTableRequestDataProcessConfigParamsSrcFieldConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTableRequestDataProcessConfigParams extends $dara.Model {
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

  validate() {
    if(this.srcFieldConfig && typeof (this.srcFieldConfig as any).validate === 'function') {
      (this.srcFieldConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTableRequestDataProcessConfig extends $dara.Model {
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

  validate() {
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTableRequestDataSourceConfig extends $dara.Model {
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
  catalog?: string;
  database?: string;
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
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      catalog: 'catalog',
      database: 'database',
      endpoint: 'endpoint',
      ossPath: 'ossPath',
      partition: 'partition',
      project: 'project',
      table: 'table',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      catalog: 'string',
      database: 'string',
      endpoint: 'string',
      ossPath: 'string',
      partition: 'string',
      project: 'string',
      table: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTableRequestDataSource extends $dara.Model {
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

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTableRequestVectorIndexAdvanceParams extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTableRequestVectorIndex extends $dara.Model {
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

  validate() {
    if(this.advanceParams && typeof (this.advanceParams as any).validate === 'function') {
      (this.advanceParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishAdvanceConfigRequestFilesConfig extends $dara.Model {
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

  validate() {
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishAdvanceConfigRequestFiles extends $dara.Model {
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

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameFolderResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestComponents extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceContentResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceNameResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceParamsResponseBodyResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ErrorResponse extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResultClusterValue extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResultDatabasesFunctionsValue extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResultValue extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VariablesValue extends $dara.Model {
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

  validate() {
    if(this.funcValue && typeof (this.funcValue as any).validate === 'function') {
      (this.funcValue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigValue extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BodyValue extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilesConfigVariablesValue extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigValueFilesConfigVariablesValue extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildIndexRequest extends $dara.Model {
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
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      buildMode: 'buildMode',
      dataSourceName: 'dataSourceName',
      dataSourceType: 'dataSourceType',
      dataTimeSec: 'dataTimeSec',
      domain: 'domain',
      generation: 'generation',
      partition: 'partition',
      tag: 'tag',
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
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildIndexResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildIndexResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneSqlInstanceRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneSqlInstanceResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneSqlInstanceResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $dara.Model {
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

  validate() {
    if(this.dataNode && typeof (this.dataNode as any).validate === 'function') {
      (this.dataNode as any).validate();
    }
    if(this.queryNode && typeof (this.queryNode as any).validate === 'function') {
      (this.queryNode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigDirRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigDirResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigDirResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigFileRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigFileResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigFileResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequest extends $dara.Model {
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

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.saroConfig && typeof (this.saroConfig as any).validate === 'function') {
      (this.saroConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexRequest extends $dara.Model {
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

  validate() {
    if(this.dataSourceInfo && typeof (this.dataSourceInfo as any).validate === 'function') {
      (this.dataSourceInfo as any).validate();
    }
    if(this.extend) {
      $dara.Model.validateMap(this.extend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $dara.Model {
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
  resourceGroupId?: string;
  tags?: CreateInstanceRequestTags[];
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      components: 'components',
      order: 'order',
      resourceGroupId: 'resourceGroupId',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      components: { 'type': 'array', 'itemType': CreateInstanceRequestComponents },
      order: CreateInstanceRequestOrder,
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateInstanceRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(this.order && typeof (this.order as any).validate === 'function') {
      (this.order as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelRequest extends $dara.Model {
  content?: CreateModelRequestContent;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * true
   */
  dryRun?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: CreateModelRequestContent,
      name: 'string',
      dryRun: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateModelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicUrlResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicUrlResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSqlInstanceRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSqlInstanceResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSqlInstanceResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.dataProcessConfig)) {
      $dara.Model.validateArray(this.dataProcessConfig);
    }
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(this.fieldSchema) {
      $dara.Model.validateMap(this.fieldSchema);
    }
    if(Array.isArray(this.vectorIndex)) {
      $dara.Model.validateArray(this.vectorIndex);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugModelRequest extends $dara.Model {
  input?: string;
  /**
   * @example
   * true
   */
  isOnline?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'input',
      isOnline: 'isOnline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
      isOnline: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugModelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DebugModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DebugModelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAdvanceConfigResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAdvanceConfigResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAliasResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAliasResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigDirRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigDirResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigDirResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigFileRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigFileResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigFileResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexVersionResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexVersionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteModelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePublicUrlResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePublicUrlResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSqlInstanceResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSqlInstanceResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlInstanceRequest extends $dara.Model {
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

  validate() {
    if(this.combineParam) {
      $dara.Model.validateMap(this.combineParam);
    }
    if(this.dynamicParam) {
      $dara.Model.validateMap(this.dynamicParam);
    }
    if(this.kvpair) {
      $dara.Model.validateMap(this.kvpair);
    }
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    if(this.staticParam) {
      $dara.Model.validateMap(this.staticParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlInstanceResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlInstanceResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForceSwitchResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForceSwitchResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvanceConfigRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvanceConfigResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvanceConfigResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvanceConfigFileRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvanceConfigFileResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvanceConfigFileResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDeployResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseSchemaResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseSchemaResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexOnlineStrategyResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexOnlineStrategyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexVersionResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexVersionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $dara.Model {
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
   * Response parameters
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBody extends $dara.Model {
  /**
   * @example
   * 38b079f1-7846-4226-8c90-3e2644b5c52b
   */
  requestId?: string;
  result?: GetModelResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetModelResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetModelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeConfigRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeConfigResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeConfigResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlInstanceRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlInstanceResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlInstanceResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableGenerationResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableGenerationResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvanceConfigDirRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvanceConfigDirResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvanceConfigDirResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvanceConfigsRequest extends $dara.Model {
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
  pageNumber?: string;
  pageSize?: string;
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
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
      indexName: 'string',
      newMode: 'boolean',
      pageNumber: 'string',
      pageSize: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvanceConfigsResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvanceConfigsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNamesResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNamesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTasksResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTasksResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceSchemasResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceSchemasResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTasksResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTasksResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDateSourceGenerationsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDateSourceGenerationsResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDateSourceGenerationsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexRecoverRecordsResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexRecoverRecordsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesRequest extends $dara.Model {
  catalog?: string;
  database?: string;
  /**
   * @remarks
   * Specifies whether the OpenSearch Vector Search Edition instance is of the new version.
   * 
   * @example
   * true
   */
  newMode?: boolean;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'catalog',
      database: 'database',
      newMode: 'newMode',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      database: 'string',
      newMode: 'boolean',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSpecsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSpecsResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSpecsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $dara.Model {
  catalog?: string;
  dataSourceType?: string;
  database?: string;
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
  table?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tags?: ListInstancesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      catalog: 'catalog',
      dataSourceType: 'dataSourceType',
      database: 'database',
      description: 'description',
      edition: 'edition',
      instanceId: 'instanceId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      table: 'table',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      dataSourceType: 'string',
      database: 'string',
      description: 'string',
      edition: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      table: 'string',
      tags: { 'type': 'array', 'itemType': ListInstancesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesShrinkRequest extends $dara.Model {
  catalog?: string;
  dataSourceType?: string;
  database?: string;
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
  table?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'catalog',
      dataSourceType: 'dataSourceType',
      database: 'database',
      description: 'description',
      edition: 'edition',
      instanceId: 'instanceId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      table: 'table',
      tagsShrink: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      dataSourceType: 'string',
      database: 'string',
      description: 'string',
      edition: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      table: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsRequest extends $dara.Model {
  /**
   * @example
   * test1
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * text_embedding
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBody extends $dara.Model {
  /**
   * @example
   * 38b079f1-7846-4226-8c90-3e2644b5c52b
   */
  requestId?: string;
  result?: ListModelsResponseBodyResult[];
  /**
   * @example
   * 14
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
      result: { 'type': 'array', 'itemType': ListModelsResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListModelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListModelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnlineConfigsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnlineConfigsResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnlineConfigsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPausePolicysResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPausePolicysResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPostQueryResultRequest extends $dara.Model {
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
      body: 'body',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPostQueryResultResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPostQueryResultResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryResultRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryResultResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryResultResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRestQueryResultRequest extends $dara.Model {
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
      indexName: 'indexName',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexName: 'string',
      query: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.query) {
      $dara.Model.validateMap(this.query);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRestQueryResultResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRestQueryResultResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemasRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemasResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemasResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableGenerationsResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableGenerationsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesShrinkRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVectorQueryResultRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   * 
   * @example
   * {}
   */
  body?: { [key: string]: any };
  path?: string;
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
      body: 'body',
      path: 'path',
      queryType: 'queryType',
      vectorQueryType: 'vectorQueryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      path: 'string',
      queryType: 'string',
      vectorQueryType: 'string',
    };
  }

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVectorQueryResultResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVectorQueryResultResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAdvanceConfigRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAdvanceConfigResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAdvanceConfigResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAdvanceConfigFileRequest extends $dara.Model {
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

  validate() {
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAdvanceConfigFileResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAdvanceConfigFileResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAliasRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAliasResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAliasResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterDescRequest extends $dara.Model {
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

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterDescResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterDescResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterOfflineConfigRequest extends $dara.Model {
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

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterOfflineConfigResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterOfflineConfigResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterOnlineConfigRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterOnlineConfigResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterOnlineConfigResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequest extends $dara.Model {
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

  validate() {
    if(this.extend && typeof (this.extend as any).validate === 'function') {
      (this.extend as any).validate();
    }
    if(this.processor && typeof (this.processor as any).validate === 'function') {
      (this.processor as any).validate();
    }
    if(this.storage && typeof (this.storage as any).validate === 'function') {
      (this.storage as any).validate();
    }
    if(this.swift && typeof (this.swift as any).validate === 'function') {
      (this.swift as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFileRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFileResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFileResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexRequest extends $dara.Model {
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
      extend: 'extend',
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
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      mergeParallelNum: 'number',
      partition: 'number',
      pushMode: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    if(this.cluster) {
      $dara.Model.validateMap(this.cluster);
    }
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    if(this.dataSourceInfo && typeof (this.dataSourceInfo as any).validate === 'function') {
      (this.dataSourceInfo as any).validate();
    }
    if(this.extend) {
      $dara.Model.validateMap(this.extend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexOnlineStrategyRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexOnlineStrategyResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexOnlineStrategyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexPartitionRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.indexInfos)) {
      $dara.Model.validateArray(this.indexInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexPartitionResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexPartitionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexVersionRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexVersionResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexVersionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyModelRequest extends $dara.Model {
  content?: ModifyModelRequestContent;
  /**
   * @example
   * ok
   */
  status?: string;
  /**
   * @example
   * true
   */
  dryRun?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      status: 'status',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ModifyModelRequestContent,
      status: 'string',
      dryRun: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D39EE0F1-D7EF-5F46-B781-6BF4185308B0
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyModelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyModelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodeConfigRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodeConfigResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodeConfigResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOnlineConfigRequest extends $dara.Model {
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

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOnlineConfigResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOnlineConfigResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPasswordRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPasswordResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPasswordResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPausePolicyRequest extends $dara.Model {
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

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPausePolicyResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPausePolicyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPublicUrlIpListRequest extends $dara.Model {
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

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPublicUrlIpListResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPublicUrlIpListResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySearcherReplicaRequest extends $dara.Model {
  /**
   * @example
   * 2
   */
  partition?: number;
  /**
   * @example
   * 2
   */
  replica?: number;
  static names(): { [key: string]: string } {
    return {
      partition: 'partition',
      replica: 'replica',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partition: 'number',
      replica: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySearcherReplicaResponseBody extends $dara.Model {
  /**
   * @example
   * e1eef569-1ff7-4bf8-acf7-1cecca9894ce
   */
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySearcherReplicaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySearcherReplicaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifySearcherReplicaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTableRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.dataProcessConfig)) {
      $dara.Model.validateArray(this.dataProcessConfig);
    }
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(this.fieldSchema) {
      $dara.Model.validateMap(this.fieldSchema);
    }
    if(Array.isArray(this.vectorIndex)) {
      $dara.Model.validateArray(this.vectorIndex);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTableResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTableResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishAdvanceConfigRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishAdvanceConfigResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishAdvanceConfigResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishIndexVersionRequest extends $dara.Model {
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

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishIndexVersionResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishIndexVersionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDocumentsRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDocumentsResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDocumentsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverIndexRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverIndexResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverIndexResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReindexRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReindexResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReindexResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClusterResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClusterResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameFolderRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameFolderResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameFolderResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartIndexResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartIndexResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopIndexResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopIndexResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTaskResponseBody extends $dara.Model {
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

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTaskResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesShrinkRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceContentRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceContentResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceContentResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceNameRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceNameResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceNameResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceParamsRequest extends $dara.Model {
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

  validate() {
    if(this.combineParam) {
      $dara.Model.validateMap(this.combineParam);
    }
    if(this.dynamicParam) {
      $dara.Model.validateMap(this.dynamicParam);
    }
    if(this.kvpair) {
      $dara.Model.validateMap(this.kvpair);
    }
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    if(this.staticParam) {
      $dara.Model.validateMap(this.staticParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceParamsResponseBody extends $dara.Model {
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceParamsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("searchengine", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
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
  async buildIndexWithOptions(instanceId: string, request: BuildIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<BuildIndexResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.buildMode)) {
      body["buildMode"] = request.buildMode;
    }

    if (!$dara.isNull(request.dataSourceName)) {
      body["dataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["dataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.dataTimeSec)) {
      body["dataTimeSec"] = request.dataTimeSec;
    }

    if (!$dara.isNull(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!$dara.isNull(request.generation)) {
      body["generation"] = request.generation;
    }

    if (!$dara.isNull(request.partition)) {
      body["partition"] = request.partition;
    }

    if (!$dara.isNull(request.tag)) {
      body["tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BuildIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/actions/build-index`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<BuildIndexResponse>(await this.callApi(params, req, runtime), new BuildIndexResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async changeResourceGroupWithOptions(instanceId: string, request: ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      body["newResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/actions/change-resource-group`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  /**
   * 更换实例资源组
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(instanceId: string, request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeResourceGroupWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - CloneSqlInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneSqlInstanceResponse
   */
  async cloneSqlInstanceWithOptions(instanceId: string, database: string, sqlInstanceId: string, request: CloneSqlInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CloneSqlInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.targetFolderId)) {
      body["targetFolderId"] = request.targetFolderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneSqlInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/sql-instances/${$dara.URL.percentEncode(sqlInstanceId)}/actions/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CloneSqlInstanceResponse>(await this.callApi(params, req, runtime), new CloneSqlInstanceResponse({}));
  }

  /**
   * @param request - CloneSqlInstanceRequest
   * @returns CloneSqlInstanceResponse
   */
  async cloneSqlInstance(instanceId: string, database: string, sqlInstanceId: string, request: CloneSqlInstanceRequest): Promise<CloneSqlInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneSqlInstanceWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

  /**
   * @param request - CreateAliasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAliasResponse
   */
  async createAliasWithOptions(instanceId: string, request: CreateAliasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateAliasResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newMode)) {
      query["newMode"] = request.newMode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      body["alias"] = request.alias;
    }

    if (!$dara.isNull(request.index)) {
      body["index"] = request.index;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlias",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/aliases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateAliasResponse>(await this.callApi(params, req, runtime), new CreateAliasResponse({}));
  }

  /**
   * @param request - CreateAliasRequest
   * @returns CreateAliasResponse
   */
  async createAlias(instanceId: string, request: CreateAliasRequest): Promise<CreateAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createClusterWithOptions(instanceId: string, request: CreateClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoLoad)) {
      body["autoLoad"] = request.autoLoad;
    }

    if (!$dara.isNull(request.dataNode)) {
      body["dataNode"] = request.dataNode;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.queryNode)) {
      body["queryNode"] = request.queryNode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCluster",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/clusters`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateClusterResponse>(await this.callApi(params, req, runtime), new CreateClusterResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createClusterWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - CreateConfigDirRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConfigDirResponse
   */
  async createConfigDirWithOptions(instanceId: string, configName: string, request: CreateConfigDirRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateConfigDirResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dirName)) {
      body["dirName"] = request.dirName;
    }

    if (!$dara.isNull(request.parentFullPath)) {
      body["parentFullPath"] = request.parentFullPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConfigDir",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}/dir`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateConfigDirResponse>(await this.callApi(params, req, runtime), new CreateConfigDirResponse({}));
  }

  /**
   * @param request - CreateConfigDirRequest
   * @returns CreateConfigDirResponse
   */
  async createConfigDir(instanceId: string, configName: string, request: CreateConfigDirRequest): Promise<CreateConfigDirResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConfigDirWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * @param request - CreateConfigFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConfigFileResponse
   */
  async createConfigFileWithOptions(instanceId: string, configName: string, request: CreateConfigFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateConfigFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      body["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.ossPath)) {
      body["ossPath"] = request.ossPath;
    }

    if (!$dara.isNull(request.parentFullPath)) {
      body["parentFullPath"] = request.parentFullPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConfigFile",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}/file`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateConfigFileResponse>(await this.callApi(params, req, runtime), new CreateConfigFileResponse({}));
  }

  /**
   * @param request - CreateConfigFileRequest
   * @returns CreateConfigFileResponse
   */
  async createConfigFile(instanceId: string, configName: string, request: CreateConfigFileRequest): Promise<CreateConfigFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createDataSourceWithOptions(instanceId: string, request: CreateDataSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateDataSourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoBuildIndex)) {
      body["autoBuildIndex"] = request.autoBuildIndex;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.saroConfig)) {
      body["saroConfig"] = request.saroConfig;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataSource",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateDataSourceResponse>(await this.callApi(params, req, runtime), new CreateDataSourceResponse({}));
  }

  /**
   * Creates data sources.
   * 
   * @param request - CreateDataSourceRequest
   * @returns CreateDataSourceResponse
   */
  async createDataSource(instanceId: string, request: CreateDataSourceRequest): Promise<CreateDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDataSourceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - CreateFolderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFolderResponse
   */
  async createFolderWithOptions(instanceId: string, database: string, request: CreateFolderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateFolderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parent)) {
      body["parent"] = request.parent;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFolder",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/folders`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateFolderResponse>(await this.callApi(params, req, runtime), new CreateFolderResponse({}));
  }

  /**
   * @param request - CreateFolderRequest
   * @returns CreateFolderResponse
   */
  async createFolder(instanceId: string, database: string, request: CreateFolderRequest): Promise<CreateFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createIndexWithOptions(instanceId: string, request: CreateIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateIndexResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.buildParallelNum)) {
      body["buildParallelNum"] = request.buildParallelNum;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.dataSource)) {
      body["dataSource"] = request.dataSource;
    }

    if (!$dara.isNull(request.dataSourceInfo)) {
      body["dataSourceInfo"] = request.dataSourceInfo;
    }

    if (!$dara.isNull(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!$dara.isNull(request.extend)) {
      body["extend"] = request.extend;
    }

    if (!$dara.isNull(request.mergeParallelNum)) {
      body["mergeParallelNum"] = request.mergeParallelNum;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.partition)) {
      body["partition"] = request.partition;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateIndexResponse>(await this.callApi(params, req, runtime), new CreateIndexResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async createInstanceWithOptions(request: CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chargeType)) {
      body["chargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.components)) {
      body["components"] = request.components;
    }

    if (!$dara.isNull(request.order)) {
      body["order"] = request.order;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 创建模型信息
   * 
   * @param request - CreateModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelResponse
   */
  async createModelWithOptions(instanceId: string, request: CreateModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateModelResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModel",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/models`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateModelResponse>(await this.callApi(params, req, runtime), new CreateModelResponse({}));
  }

  /**
   * 创建模型信息
   * 
   * @param request - CreateModelRequest
   * @returns CreateModelResponse
   */
  async createModel(instanceId: string, request: CreateModelRequest): Promise<CreateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Creates a public endpoint.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePublicUrlResponse
   */
  async createPublicUrlWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreatePublicUrlResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePublicUrl",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/public-url`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreatePublicUrlResponse>(await this.callApi(params, req, runtime), new CreatePublicUrlResponse({}));
  }

  /**
   * Creates a public endpoint.
   * @returns CreatePublicUrlResponse
   */
  async createPublicUrl(instanceId: string): Promise<CreatePublicUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPublicUrlWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param request - CreateSqlInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSqlInstanceResponse
   */
  async createSqlInstanceWithOptions(instanceId: string, database: string, request: CreateSqlInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateSqlInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parent)) {
      body["parent"] = request.parent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSqlInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/sql-instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateSqlInstanceResponse>(await this.callApi(params, req, runtime), new CreateSqlInstanceResponse({}));
  }

  /**
   * @param request - CreateSqlInstanceRequest
   * @returns CreateSqlInstanceResponse
   */
  async createSqlInstance(instanceId: string, database: string, request: CreateSqlInstanceRequest): Promise<CreateSqlInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createTableWithOptions(instanceId: string, request: CreateTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateTableResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataProcessConfig)) {
      body["dataProcessConfig"] = request.dataProcessConfig;
    }

    if (!$dara.isNull(request.dataProcessorCount)) {
      body["dataProcessorCount"] = request.dataProcessorCount;
    }

    if (!$dara.isNull(request.dataSource)) {
      body["dataSource"] = request.dataSource;
    }

    if (!$dara.isNull(request.fieldSchema)) {
      body["fieldSchema"] = request.fieldSchema;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.partitionCount)) {
      body["partitionCount"] = request.partitionCount;
    }

    if (!$dara.isNull(request.primaryKey)) {
      body["primaryKey"] = request.primaryKey;
    }

    if (!$dara.isNull(request.rawSchema)) {
      body["rawSchema"] = request.rawSchema;
    }

    if (!$dara.isNull(request.vectorIndex)) {
      body["vectorIndex"] = request.vectorIndex;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTable",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/tables`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateTableResponse>(await this.callApi(params, req, runtime), new CreateTableResponse({}));
  }

  /**
   * Creates an index table.
   * 
   * @param request - CreateTableRequest
   * @returns CreateTableResponse
   */
  async createTable(instanceId: string, request: CreateTableRequest): Promise<CreateTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTableWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 调试模型
   * 
   * @param request - DebugModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DebugModelResponse
   */
  async debugModelWithOptions(instanceId: string, modelName: string, request: DebugModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DebugModelResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isOnline)) {
      query["isOnline"] = request.isOnline;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.input)) {
      body["input"] = request.input;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DebugModel",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/models/${$dara.URL.percentEncode(modelName)}/actions/debug`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DebugModelResponse>(await this.callApi(params, req, runtime), new DebugModelResponse({}));
  }

  /**
   * 调试模型
   * 
   * @param request - DebugModelRequest
   * @returns DebugModelResponse
   */
  async debugModel(instanceId: string, modelName: string, request: DebugModelRequest): Promise<DebugModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.debugModelWithOptions(instanceId, modelName, request, headers, runtime);
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
  async deleteAdvanceConfigWithOptions(instanceId: string, configName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteAdvanceConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAdvanceConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteAdvanceConfigResponse>(await this.callApi(params, req, runtime), new DeleteAdvanceConfigResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAdvanceConfigWithOptions(instanceId, configName, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAliasResponse
   */
  async deleteAliasWithOptions(instanceId: string, alias: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteAliasResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlias",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/aliases/${$dara.URL.percentEncode(alias)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteAliasResponse>(await this.callApi(params, req, runtime), new DeleteAliasResponse({}));
  }

  /**
   * @returns DeleteAliasResponse
   */
  async deleteAlias(instanceId: string, alias: string): Promise<DeleteAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAliasWithOptions(instanceId, alias, headers, runtime);
  }

  /**
   * @param request - DeleteConfigDirRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConfigDirResponse
   */
  async deleteConfigDirWithOptions(instanceId: string, configName: string, request: DeleteConfigDirRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteConfigDirResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dirName)) {
      query["dirName"] = request.dirName;
    }

    if (!$dara.isNull(request.parentFullPath)) {
      query["parentFullPath"] = request.parentFullPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConfigDir",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}/dir`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteConfigDirResponse>(await this.callApi(params, req, runtime), new DeleteConfigDirResponse({}));
  }

  /**
   * @param request - DeleteConfigDirRequest
   * @returns DeleteConfigDirResponse
   */
  async deleteConfigDir(instanceId: string, configName: string, request: DeleteConfigDirRequest): Promise<DeleteConfigDirResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigDirWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * @param request - DeleteConfigFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConfigFileResponse
   */
  async deleteConfigFileWithOptions(instanceId: string, configName: string, request: DeleteConfigFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteConfigFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.parentFullPath)) {
      query["parentFullPath"] = request.parentFullPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConfigFile",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}/file`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteConfigFileResponse>(await this.callApi(params, req, runtime), new DeleteConfigFileResponse({}));
  }

  /**
   * @param request - DeleteConfigFileRequest
   * @returns DeleteConfigFileResponse
   */
  async deleteConfigFile(instanceId: string, configName: string, request: DeleteConfigFileRequest): Promise<DeleteConfigFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteDataSourceWithOptions(instanceId: string, dataSourceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteDataSourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataSource",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources/${$dara.URL.percentEncode(dataSourceName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteDataSourceResponse>(await this.callApi(params, req, runtime), new DeleteDataSourceResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDataSourceWithOptions(instanceId, dataSourceName, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFolderResponse
   */
  async deleteFolderWithOptions(instanceId: string, database: string, folderId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteFolderResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFolder",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/folders/${$dara.URL.percentEncode(folderId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteFolderResponse>(await this.callApi(params, req, runtime), new DeleteFolderResponse({}));
  }

  /**
   * @returns DeleteFolderResponse
   */
  async deleteFolder(instanceId: string, database: string, folderId: string): Promise<DeleteFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteIndexWithOptions(instanceId: string, indexName: string, request: DeleteIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteIndexResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSource)) {
      query["dataSource"] = request.dataSource;
    }

    if (!$dara.isNull(request.deleteDataSource)) {
      query["deleteDataSource"] = request.deleteDataSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes/${$dara.URL.percentEncode(indexName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteIndexResponse>(await this.callApi(params, req, runtime), new DeleteIndexResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteIndexVersionWithOptions(instanceId: string, indexName: string, versionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteIndexVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIndexVersion",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes/${$dara.URL.percentEncode(indexName)}/versions/${$dara.URL.percentEncode(versionName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteIndexVersionResponse>(await this.callApi(params, req, runtime), new DeleteIndexVersionResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * 删除模型
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelResponse
   */
  async deleteModelWithOptions(instanceId: string, modelName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteModelResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModel",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/models/${$dara.URL.percentEncode(modelName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteModelResponse>(await this.callApi(params, req, runtime), new DeleteModelResponse({}));
  }

  /**
   * 删除模型
   * @returns DeleteModelResponse
   */
  async deleteModel(instanceId: string, modelName: string): Promise<DeleteModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelWithOptions(instanceId, modelName, headers, runtime);
  }

  /**
   * 删除公网域名
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePublicUrlResponse
   */
  async deletePublicUrlWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeletePublicUrlResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePublicUrl",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/public-url`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeletePublicUrlResponse>(await this.callApi(params, req, runtime), new DeletePublicUrlResponse({}));
  }

  /**
   * 删除公网域名
   * @returns DeletePublicUrlResponse
   */
  async deletePublicUrl(instanceId: string): Promise<DeletePublicUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePublicUrlWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSqlInstanceResponse
   */
  async deleteSqlInstanceWithOptions(instanceId: string, database: string, sqlInstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteSqlInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSqlInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/sql-instances/${$dara.URL.percentEncode(sqlInstanceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteSqlInstanceResponse>(await this.callApi(params, req, runtime), new DeleteSqlInstanceResponse({}));
  }

  /**
   * @returns DeleteSqlInstanceResponse
   */
  async deleteSqlInstance(instanceId: string, database: string, sqlInstanceId: string): Promise<DeleteSqlInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteTableWithOptions(instanceId: string, tableName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteTableResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTable",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/tables/${$dara.URL.percentEncode(tableName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteTableResponse>(await this.callApi(params, req, runtime), new DeleteTableResponse({}));
  }

  /**
   * Deletes an index table.
   * @returns DeleteTableResponse
   */
  async deleteTable(instanceId: string, tableName: string): Promise<DeleteTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async describeRegionsWithOptions(request: DescribeRegionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeRegionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["acceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * Queries available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(request, headers, runtime);
  }

  /**
   * @param request - ExecuteSqlInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteSqlInstanceResponse
   */
  async executeSqlInstanceWithOptions(instanceId: string, database: string, sqlInstanceId: string, request: ExecuteSqlInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExecuteSqlInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.combineParam)) {
      body["combineParam"] = request.combineParam;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!$dara.isNull(request.dynamicParam)) {
      body["dynamicParam"] = request.dynamicParam;
    }

    if (!$dara.isNull(request.kvpair)) {
      body["kvpair"] = request.kvpair;
    }

    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    if (!$dara.isNull(request.staticParam)) {
      body["staticParam"] = request.staticParam;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteSqlInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/sql-instances/${$dara.URL.percentEncode(sqlInstanceId)}/actions/execution`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ExecuteSqlInstanceResponse>(await this.callApi(params, req, runtime), new ExecuteSqlInstanceResponse({}));
  }

  /**
   * @param request - ExecuteSqlInstanceRequest
   * @returns ExecuteSqlInstanceResponse
   */
  async executeSqlInstance(instanceId: string, database: string, sqlInstanceId: string, request: ExecuteSqlInstanceRequest): Promise<ExecuteSqlInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async forceSwitchWithOptions(instanceId: string, fsmId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ForceSwitchResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ForceSwitch",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/force-switch/${$dara.URL.percentEncode(fsmId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ForceSwitchResponse>(await this.callApi(params, req, runtime), new ForceSwitchResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async getAdvanceConfigWithOptions(instanceId: string, configName: string, request: GetAdvanceConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetAdvanceConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAdvanceConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetAdvanceConfigResponse>(await this.callApi(params, req, runtime), new GetAdvanceConfigResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async getAdvanceConfigFileWithOptions(instanceId: string, configName: string, request: GetAdvanceConfigFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetAdvanceConfigFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAdvanceConfigFile",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}/file`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetAdvanceConfigFileResponse>(await this.callApi(params, req, runtime), new GetAdvanceConfigFileResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async getClusterWithOptions(instanceId: string, clusterName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetClusterResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCluster",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/clusters/${$dara.URL.percentEncode(clusterName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetClusterResponse>(await this.callApi(params, req, runtime), new GetClusterResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async getClusterRunTimeInfoWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetClusterRunTimeInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClusterRunTimeInfo",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/cluster-run-time-info`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetClusterRunTimeInfoResponse>(await this.callApi(params, req, runtime), new GetClusterRunTimeInfoResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async getDataSourceWithOptions(instanceId: string, dataSourceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDataSourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataSource",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources/${$dara.URL.percentEncode(dataSourceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetDataSourceResponse>(await this.callApi(params, req, runtime), new GetDataSourceResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async getDataSourceDeployWithOptions(instanceId: string, deployName: string, dataSourceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDataSourceDeployResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataSourceDeploy",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources/${$dara.URL.percentEncode(dataSourceName)}/deploys/${$dara.URL.percentEncode(deployName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetDataSourceDeployResponse>(await this.callApi(params, req, runtime), new GetDataSourceDeployResponse({}));
  }

  /**
   * 获取数据源部署信息
   * @returns GetDataSourceDeployResponse
   */
  async getDataSourceDeploy(instanceId: string, deployName: string, dataSourceName: string): Promise<GetDataSourceDeployResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataSourceDeployWithOptions(instanceId, deployName, dataSourceName, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatabaseSchemaResponse
   */
  async getDatabaseSchemaWithOptions(instanceId: string, database: string, tableName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDatabaseSchemaResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatabaseSchema",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/tables/${$dara.URL.percentEncode(tableName)}/schema`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetDatabaseSchemaResponse>(await this.callApi(params, req, runtime), new GetDatabaseSchemaResponse({}));
  }

  /**
   * @returns GetDatabaseSchemaResponse
   */
  async getDatabaseSchema(instanceId: string, database: string, tableName: string): Promise<GetDatabaseSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getDeployGraphWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDeployGraphResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeployGraph",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/deploy-graph`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetDeployGraphResponse>(await this.callApi(params, req, runtime), new GetDeployGraphResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDeployGraphWithOptions(instanceId, headers, runtime);
  }

  /**
   * Queries the details of an index table version.
   * 
   * @remarks
   * ## [](#)Method
   *     GET
   * ## [](#uri)URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/versions/{versionName}/file
   * 
   * @param request - GetFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFileResponse
   */
  async getFileWithOptions(instanceId: string, indexName: string, versionName: string, request: GetFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFile",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes/${$dara.URL.percentEncode(indexName)}/versions/${$dara.URL.percentEncode(versionName)}/file`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetFileResponse>(await this.callApi(params, req, runtime), new GetFileResponse({}));
  }

  /**
   * Queries the details of an index table version.
   * 
   * @remarks
   * ## [](#)Method
   *     GET
   * ## [](#uri)URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/versions/{versionName}/file
   * 
   * @param request - GetFileRequest
   * @returns GetFileResponse
   */
  async getFile(instanceId: string, indexName: string, versionName: string, request: GetFileRequest): Promise<GetFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFileWithOptions(instanceId, indexName, versionName, request, headers, runtime);
  }

  /**
   * Queries the information about an index version.
   * 
   * @remarks
   * ## [](#)Method
   *     GET
   * ## [](#uri)URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIndexResponse
   */
  async getIndexWithOptions(instanceId: string, indexName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetIndexResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes/${$dara.URL.percentEncode(indexName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetIndexResponse>(await this.callApi(params, req, runtime), new GetIndexResponse({}));
  }

  /**
   * Queries the information about an index version.
   * 
   * @remarks
   * ## [](#)Method
   *     GET
   * ## [](#uri)URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}
   * @returns GetIndexResponse
   */
  async getIndex(instanceId: string, indexName: string): Promise<GetIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getIndexOnlineStrategyWithOptions(instanceId: string, dataSourceName: string, deployName: string, indexName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetIndexOnlineStrategyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIndexOnlineStrategy",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources/${$dara.URL.percentEncode(dataSourceName)}/deploys/${$dara.URL.percentEncode(deployName)}/indexes/${$dara.URL.percentEncode(indexName)}/online-strategy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetIndexOnlineStrategyResponse>(await this.callApi(params, req, runtime), new GetIndexOnlineStrategyResponse({}));
  }

  /**
   * Queries the online effective policy of an index.
   * @returns GetIndexOnlineStrategyResponse
   */
  async getIndexOnlineStrategy(instanceId: string, dataSourceName: string, deployName: string, indexName: string): Promise<GetIndexOnlineStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getIndexVersionWithOptions(instanceId: string, clusterName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetIndexVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIndexVersion",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/clusters/${$dara.URL.percentEncode(clusterName)}/index-version`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetIndexVersionResponse>(await this.callApi(params, req, runtime), new GetIndexVersionResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIndexVersionWithOptions(instanceId, clusterName, headers, runtime);
  }

  /**
   * Queries the details of an instance based on the instance ID.
   * 
   * @remarks
   * ### [](#)Method
   * ```java
   * GET
   * ```
   * ### [](#uri)URI
   * ```java
   * /openapi/ha3/instances/{instanceId}
   * ```
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
  }

  /**
   * Queries the details of an instance based on the instance ID.
   * 
   * @remarks
   * ### [](#)Method
   * ```java
   * GET
   * ```
   * ### [](#uri)URI
   * ```java
   * /openapi/ha3/instances/{instanceId}
   * ```
   * @returns GetInstanceResponse
   */
  async getInstance(instanceId: string): Promise<GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * 通过实例ID和模型名称查询特定模型的详细配置信息。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于获取指定实例下的特定模型的详细信息，包括模型类型、URL、状态等。
   * - 确保提供的`instanceId`和`modelName`是有效的，否则可能返回错误或找不到资源。
   * - 返回的数据结构中包含了模型的内容（如请求头、参数等）以及创建和更新时间，有助于了解模型的具体配置及其最新状态。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelResponse
   */
  async getModelWithOptions(instanceId: string, modelName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetModelResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModel",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/models/${$dara.URL.percentEncode(modelName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetModelResponse>(await this.callApi(params, req, runtime), new GetModelResponse({}));
  }

  /**
   * 通过实例ID和模型名称查询特定模型的详细配置信息。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于获取指定实例下的特定模型的详细信息，包括模型类型、URL、状态等。
   * - 确保提供的`instanceId`和`modelName`是有效的，否则可能返回错误或找不到资源。
   * - 返回的数据结构中包含了模型的内容（如请求头、参数等）以及创建和更新时间，有助于了解模型的具体配置及其最新状态。
   * @returns GetModelResponse
   */
  async getModel(instanceId: string, modelName: string): Promise<GetModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelWithOptions(instanceId, modelName, headers, runtime);
  }

  /**
   * Gets the configuration information of a node.
   * 
   * @param request - GetNodeConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeConfigResponse
   */
  async getNodeConfigWithOptions(instanceId: string, request: GetNodeConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetNodeConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterName)) {
      query["clusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNodeConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/node-config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetNodeConfigResponse>(await this.callApi(params, req, runtime), new GetNodeConfigResponse({}));
  }

  /**
   * Gets the configuration information of a node.
   * 
   * @param request - GetNodeConfigRequest
   * @returns GetNodeConfigResponse
   */
  async getNodeConfig(instanceId: string, request: GetNodeConfigRequest): Promise<GetNodeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNodeConfigWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - GetSqlInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSqlInstanceResponse
   */
  async getSqlInstanceWithOptions(instanceId: string, database: string, sqlInstanceId: string, request: GetSqlInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetSqlInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSqlInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/sql-instances/${$dara.URL.percentEncode(sqlInstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetSqlInstanceResponse>(await this.callApi(params, req, runtime), new GetSqlInstanceResponse({}));
  }

  /**
   * @param request - GetSqlInstanceRequest
   * @returns GetSqlInstanceResponse
   */
  async getSqlInstance(instanceId: string, database: string, sqlInstanceId: string, request: GetSqlInstanceRequest): Promise<GetSqlInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getTableWithOptions(instanceId: string, tableName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTableResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTable",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/tables/${$dara.URL.percentEncode(tableName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetTableResponse>(await this.callApi(params, req, runtime), new GetTableResponse({}));
  }

  /**
   * Queries the information about an index table.
   * @returns GetTableResponse
   */
  async getTable(instanceId: string, tableName: string): Promise<GetTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getTableGenerationWithOptions(instanceId: string, tableName: string, generationId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTableGenerationResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableGeneration",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/tables/${$dara.URL.percentEncode(tableName)}/index_versions/${$dara.URL.percentEncode(generationId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetTableGenerationResponse>(await this.callApi(params, req, runtime), new GetTableGenerationResponse({}));
  }

  /**
   * Queries the status of an index version based on the ID of the full index version.
   * @returns GetTableGenerationResponse
   */
  async getTableGeneration(instanceId: string, tableName: string, generationId: string): Promise<GetTableGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listAdvanceConfigDirWithOptions(instanceId: string, configName: string, request: ListAdvanceConfigDirRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAdvanceConfigDirResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dirName)) {
      query["dirName"] = request.dirName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAdvanceConfigDir",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}/dir`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListAdvanceConfigDirResponse>(await this.callApi(params, req, runtime), new ListAdvanceConfigDirResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async listAdvanceConfigsWithOptions(instanceId: string, request: ListAdvanceConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAdvanceConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceName)) {
      query["dataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.indexName)) {
      query["indexName"] = request.indexName;
    }

    if (!$dara.isNull(request.newMode)) {
      query["newMode"] = request.newMode;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAdvanceConfigs",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListAdvanceConfigsResponse>(await this.callApi(params, req, runtime), new ListAdvanceConfigsResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAdvanceConfigsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAliasesResponse
   */
  async listAliasesWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAliasesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAliases",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/aliases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListAliasesResponse>(await this.callApi(params, req, runtime), new ListAliasesResponse({}));
  }

  /**
   * @returns ListAliasesResponse
   */
  async listAliases(instanceId: string): Promise<ListAliasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listClusterNamesWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListClusterNamesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<ListClusterNamesResponse>(await this.callApi(params, req, runtime), new ListClusterNamesResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async listClusterTasksWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListClusterTasksResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterTasks",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/cluster-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListClusterTasksResponse>(await this.callApi(params, req, runtime), new ListClusterTasksResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async listClustersWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListClustersResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusters",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/clusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListClustersResponse>(await this.callApi(params, req, runtime), new ListClustersResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async listDataSourceSchemasWithOptions(instanceId: string, dataSourceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListDataSourceSchemasResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSourceSchemas",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources/${$dara.URL.percentEncode(dataSourceName)}/schemas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListDataSourceSchemasResponse>(await this.callApi(params, req, runtime), new ListDataSourceSchemasResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async listDataSourceTasksWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListDataSourceTasksResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSourceTasks",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-source-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListDataSourceTasksResponse>(await this.callApi(params, req, runtime), new ListDataSourceTasksResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async listDataSourcesWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListDataSourcesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSources",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListDataSourcesResponse>(await this.callApi(params, req, runtime), new ListDataSourcesResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourcesWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatabasesResponse
   */
  async listDatabasesWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListDatabasesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatabases",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListDatabasesResponse>(await this.callApi(params, req, runtime), new ListDatabasesResponse({}));
  }

  /**
   * @returns ListDatabasesResponse
   */
  async listDatabases(instanceId: string): Promise<ListDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listDateSourceGenerationsWithOptions(instanceId: string, dataSourceName: string, request: ListDateSourceGenerationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListDateSourceGenerationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainName)) {
      query["domainName"] = request.domainName;
    }

    if (!$dara.isNull(request.validStatus)) {
      query["validStatus"] = request.validStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDateSourceGenerations",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources/${$dara.URL.percentEncode(dataSourceName)}/generations`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListDateSourceGenerationsResponse>(await this.callApi(params, req, runtime), new ListDateSourceGenerationsResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDateSourceGenerationsWithOptions(instanceId, dataSourceName, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIndexRecoverRecordsResponse
   */
  async listIndexRecoverRecordsWithOptions(indexName: string, instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListIndexRecoverRecordsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIndexRecoverRecords",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes/${$dara.URL.percentEncode(indexName)}/actions/list-recover-records`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListIndexRecoverRecordsResponse>(await this.callApi(params, req, runtime), new ListIndexRecoverRecordsResponse({}));
  }

  /**
   * @returns ListIndexRecoverRecordsResponse
   */
  async listIndexRecoverRecords(indexName: string, instanceId: string): Promise<ListIndexRecoverRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listIndexesWithOptions(instanceId: string, request: ListIndexesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListIndexesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.catalog)) {
      query["catalog"] = request.catalog;
    }

    if (!$dara.isNull(request.database)) {
      query["database"] = request.database;
    }

    if (!$dara.isNull(request.newMode)) {
      query["newMode"] = request.newMode;
    }

    if (!$dara.isNull(request.table)) {
      query["table"] = request.table;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIndexes",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListIndexesResponse>(await this.callApi(params, req, runtime), new ListIndexesResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async listInstanceSpecsWithOptions(instanceId: string, request: ListInstanceSpecsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListInstanceSpecsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceSpecs",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/specs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListInstanceSpecsResponse>(await this.callApi(params, req, runtime), new ListInstanceSpecsResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async listInstancesWithOptions(tmpReq: ListInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListInstancesResponse> {
    tmpReq.validate();
    let request = new ListInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.catalog)) {
      query["catalog"] = request.catalog;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      query["dataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.database)) {
      query["database"] = request.database;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.edition)) {
      query["edition"] = request.edition;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.table)) {
      query["table"] = request.table;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * @param request - ListLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogsResponse
   */
  async listLogsWithOptions(instanceId: string, request: ListLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListLogsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLogs",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListLogsResponse>(await this.callApi(params, req, runtime), new ListLogsResponse({}));
  }

  /**
   * @param request - ListLogsRequest
   * @returns ListLogsResponse
   */
  async listLogs(instanceId: string, request: ListLogsRequest): Promise<ListLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 通过实例ID查询指定条件下的模型列表。
   * 
   * @remarks
   * ## 请求说明
   * 本API用于从指定实例中获取模型列表，支持通过模型名称、类型以及分页参数进行筛选。请求时需提供实例ID作为路径参数，其他筛选条件为可选的查询参数。
   * 
   * @param request - ListModelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelsResponse
   */
  async listModelsWithOptions(instanceId: string, request: ListModelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListModelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModels",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/models`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListModelsResponse>(await this.callApi(params, req, runtime), new ListModelsResponse({}));
  }

  /**
   * 通过实例ID查询指定条件下的模型列表。
   * 
   * @remarks
   * ## 请求说明
   * 本API用于从指定实例中获取模型列表，支持通过模型名称、类型以及分页参数进行筛选。请求时需提供实例ID作为路径参数，其他筛选条件为可选的查询参数。
   * 
   * @param request - ListModelsRequest
   * @returns ListModelsResponse
   */
  async listModels(instanceId: string, request: ListModelsRequest): Promise<ListModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelsWithOptions(instanceId, request, headers, runtime);
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
  async listOnlineConfigsWithOptions(instanceId: string, nodeName: string, request: ListOnlineConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListOnlineConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domain)) {
      query["domain"] = request.domain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOnlineConfigs",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/node/${$dara.URL.percentEncode(nodeName)}/online-configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListOnlineConfigsResponse>(await this.callApi(params, req, runtime), new ListOnlineConfigsResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOnlineConfigsWithOptions(instanceId, nodeName, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPausePolicysResponse
   */
  async listPausePolicysWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListPausePolicysResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPausePolicys",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/pause-policies`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListPausePolicysResponse>(await this.callApi(params, req, runtime), new ListPausePolicysResponse({}));
  }

  /**
   * @returns ListPausePolicysResponse
   */
  async listPausePolicys(instanceId: string): Promise<ListPausePolicysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPausePolicysWithOptions(instanceId, headers, runtime);
  }

  /**
   * 召回引擎版使用POST请求获取搜索测试结果
   * 
   * @param request - ListPostQueryResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPostQueryResultResponse
   */
  async listPostQueryResultWithOptions(instanceId: string, request: ListPostQueryResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListPostQueryResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPostQueryResult",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListPostQueryResultResponse>(await this.callApi(params, req, runtime), new ListPostQueryResultResponse({}));
  }

  /**
   * 召回引擎版使用POST请求获取搜索测试结果
   * 
   * @param request - ListPostQueryResultRequest
   * @returns ListPostQueryResultResponse
   */
  async listPostQueryResult(instanceId: string, request: ListPostQueryResultRequest): Promise<ListPostQueryResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listQueryResultWithOptions(instanceId: string, request: ListQueryResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListQueryResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.sql)) {
      query["sql"] = request.sql;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQueryResult",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/query`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListQueryResultResponse>(await this.callApi(params, req, runtime), new ListQueryResultResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQueryResultWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 召回引擎版获取rest查询搜索测试结果
   * 
   * @param request - ListRestQueryResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRestQueryResultResponse
   */
  async listRestQueryResultWithOptions(instanceId: string, request: ListRestQueryResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListRestQueryResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.indexName)) {
      body["indexName"] = request.indexName;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRestQueryResult",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/rest-query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListRestQueryResultResponse>(await this.callApi(params, req, runtime), new ListRestQueryResultResponse({}));
  }

  /**
   * 召回引擎版获取rest查询搜索测试结果
   * 
   * @param request - ListRestQueryResultRequest
   * @returns ListRestQueryResultResponse
   */
  async listRestQueryResult(instanceId: string, request: ListRestQueryResultRequest): Promise<ListRestQueryResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listSchemasWithOptions(instanceId: string, request: ListSchemasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListSchemasResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessKey)) {
      query["accessKey"] = request.accessKey;
    }

    if (!$dara.isNull(request.accessSecret)) {
      query["accessSecret"] = request.accessSecret;
    }

    if (!$dara.isNull(request.endpoint)) {
      query["endpoint"] = request.endpoint;
    }

    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.partition)) {
      query["partition"] = request.partition;
    }

    if (!$dara.isNull(request.project)) {
      query["project"] = request.project;
    }

    if (!$dara.isNull(request.table)) {
      query["table"] = request.table;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSchemas",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/schemas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListSchemasResponse>(await this.callApi(params, req, runtime), new ListSchemasResponse({}));
  }

  /**
   * 通过数据源配置获取schema信息
   * 
   * @param request - ListSchemasRequest
   * @returns ListSchemasResponse
   */
  async listSchemas(instanceId: string, request: ListSchemasRequest): Promise<ListSchemasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listTableGenerationsWithOptions(instanceId: string, tableName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTableGenerationsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTableGenerations",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/tables/${$dara.URL.percentEncode(tableName)}/index_versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListTableGenerationsResponse>(await this.callApi(params, req, runtime), new ListTableGenerationsResponse({}));
  }

  /**
   * Queries a list of index versions.
   * @returns ListTableGenerationsResponse
   */
  async listTableGenerations(instanceId: string, tableName: string): Promise<ListTableGenerationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listTablesWithOptions(instanceId: string, request: ListTablesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTablesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newMode)) {
      query["newMode"] = request.newMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTables",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListTablesResponse>(await this.callApi(params, req, runtime), new ListTablesResponse({}));
  }

  /**
   * Queries a list of index tables.
   * 
   * @param request - ListTablesRequest
   * @returns ListTablesResponse
   */
  async listTables(instanceId: string, request: ListTablesRequest): Promise<ListTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listTagResourcesWithOptions(tmpReq: ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    tmpReq.validate();
    let request = new ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "resourceId", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceIdShrink)) {
      query["resourceId"] = request.resourceIdShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * 查标签接口
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listTasksWithOptions(instanceId: string, request: ListTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.end)) {
      query["end"] = request.end;
    }

    if (!$dara.isNull(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTasks",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListTasksResponse>(await this.callApi(params, req, runtime), new ListTasksResponse({}));
  }

  /**
   * 获取集群任务列表（数据源+集群）
   * 
   * @param request - ListTasksRequest
   * @returns ListTasksResponse
   */
  async listTasks(instanceId: string, request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTasksWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 向量检索版获取向量查询搜索测试结果
   * 
   * @param request - ListVectorQueryResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVectorQueryResultResponse
   */
  async listVectorQueryResultWithOptions(instanceId: string, request: ListVectorQueryResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListVectorQueryResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.path)) {
      query["path"] = request.path;
    }

    if (!$dara.isNull(request.queryType)) {
      query["queryType"] = request.queryType;
    }

    if (!$dara.isNull(request.vectorQueryType)) {
      query["vectorQueryType"] = request.vectorQueryType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVectorQueryResult",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/vector-query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListVectorQueryResultResponse>(await this.callApi(params, req, runtime), new ListVectorQueryResultResponse({}));
  }

  /**
   * 向量检索版获取向量查询搜索测试结果
   * 
   * @param request - ListVectorQueryResultRequest
   * @returns ListVectorQueryResultResponse
   */
  async listVectorQueryResult(instanceId: string, request: ListVectorQueryResultRequest): Promise<ListVectorQueryResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVectorQueryResultWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - ModifyAdvanceConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAdvanceConfigResponse
   */
  async modifyAdvanceConfigWithOptions(instanceId: string, configName: string, request: ModifyAdvanceConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifyAdvanceConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.contentType)) {
      body["contentType"] = request.contentType;
    }

    if (!$dara.isNull(request.desc)) {
      body["desc"] = request.desc;
    }

    if (!$dara.isNull(request.files)) {
      body["files"] = request.files;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.updateTime)) {
      body["updateTime"] = request.updateTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAdvanceConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ModifyAdvanceConfigResponse>(await this.callApi(params, req, runtime), new ModifyAdvanceConfigResponse({}));
  }

  /**
   * @param request - ModifyAdvanceConfigRequest
   * @returns ModifyAdvanceConfigResponse
   */
  async modifyAdvanceConfig(instanceId: string, configName: string, request: ModifyAdvanceConfigRequest): Promise<ModifyAdvanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async modifyAdvanceConfigFileWithOptions(instanceId: string, configName: string, request: ModifyAdvanceConfigFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifyAdvanceConfigFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAdvanceConfigFile",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}/file`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ModifyAdvanceConfigFileResponse>(await this.callApi(params, req, runtime), new ModifyAdvanceConfigFileResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyAdvanceConfigFileWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * @param request - ModifyAliasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAliasResponse
   */
  async modifyAliasWithOptions(instanceId: string, alias: string, request: ModifyAliasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifyAliasResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      body["alias"] = request.alias;
    }

    if (!$dara.isNull(request.index)) {
      body["index"] = request.index;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAlias",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/aliases/${$dara.URL.percentEncode(alias)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ModifyAliasResponse>(await this.callApi(params, req, runtime), new ModifyAliasResponse({}));
  }

  /**
   * @param request - ModifyAliasRequest
   * @returns ModifyAliasResponse
   */
  async modifyAlias(instanceId: string, alias: string, request: ModifyAliasRequest): Promise<ModifyAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async modifyClusterDescWithOptions(instanceId: string, clusterName: string, request: ModifyClusterDescRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifyClusterDescResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClusterDesc",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/clusters/${$dara.URL.percentEncode(clusterName)}/desc`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ModifyClusterDescResponse>(await this.callApi(params, req, runtime), new ModifyClusterDescResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async modifyClusterOfflineConfigWithOptions(instanceId: string, request: ModifyClusterOfflineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifyClusterOfflineConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.buildMode)) {
      body["buildMode"] = request.buildMode;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.dataSourceName)) {
      body["dataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["dataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.dataTimeSec)) {
      body["dataTimeSec"] = request.dataTimeSec;
    }

    if (!$dara.isNull(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!$dara.isNull(request.generation)) {
      body["generation"] = request.generation;
    }

    if (!$dara.isNull(request.partition)) {
      body["partition"] = request.partition;
    }

    if (!$dara.isNull(request.pushMode)) {
      body["pushMode"] = request.pushMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClusterOfflineConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/cluster-offline-config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ModifyClusterOfflineConfigResponse>(await this.callApi(params, req, runtime), new ModifyClusterOfflineConfigResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async modifyClusterOnlineConfigWithOptions(instanceId: string, request: ModifyClusterOnlineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifyClusterOnlineConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusters)) {
      body["clusters"] = request.clusters;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClusterOnlineConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/cluster-online-config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ModifyClusterOnlineConfigResponse>(await this.callApi(params, req, runtime), new ModifyClusterOnlineConfigResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async modifyDataSourceDeployWithOptions(instanceId: string, deployName: string, dataSourceName: string, request: ModifyDataSourceDeployRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifyDataSourceDeployResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.generationId)) {
      query["generationId"] = request.generationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoBuildIndex)) {
      body["autoBuildIndex"] = request.autoBuildIndex;
    }

    if (!$dara.isNull(request.extend)) {
      body["extend"] = request.extend;
    }

    if (!$dara.isNull(request.processor)) {
      body["processor"] = request.processor;
    }

    if (!$dara.isNull(request.storage)) {
      body["storage"] = request.storage;
    }

    if (!$dara.isNull(request.swift)) {
      body["swift"] = request.swift;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDataSourceDeploy",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources/${$dara.URL.percentEncode(dataSourceName)}/deploys/${$dara.URL.percentEncode(deployName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ModifyDataSourceDeployResponse>(await this.callApi(params, req, runtime), new ModifyDataSourceDeployResponse({}));
  }

  /**
   * 修改数据源部署信息
   * 
   * @param request - ModifyDataSourceDeployRequest
   * @returns ModifyDataSourceDeployResponse
   */
  async modifyDataSourceDeploy(instanceId: string, deployName: string, dataSourceName: string, request: ModifyDataSourceDeployRequest): Promise<ModifyDataSourceDeployResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async modifyFileWithOptions(instanceId: string, indexName: string, versionName: string, request: ModifyFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifyFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.partition)) {
      body["partition"] = request.partition;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFile",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes/${$dara.URL.percentEncode(indexName)}/versions/${$dara.URL.percentEncode(versionName)}/file`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ModifyFileResponse>(await this.callApi(params, req, runtime), new ModifyFileResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyFileWithOptions(instanceId, indexName, versionName, request, headers, runtime);
  }

  /**
   * @param request - ModifyIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyIndexResponse
   */
  async modifyIndexWithOptions(instanceId: string, indexName: string, request: ModifyIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifyIndexResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.buildParallelNum)) {
      body["buildParallelNum"] = request.buildParallelNum;
    }

    if (!$dara.isNull(request.cluster)) {
      body["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.clusterConfigName)) {
      body["clusterConfigName"] = request.clusterConfigName;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.dataSource)) {
      body["dataSource"] = request.dataSource;
    }

    if (!$dara.isNull(request.dataSourceInfo)) {
      body["dataSourceInfo"] = request.dataSourceInfo;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!$dara.isNull(request.extend)) {
      body["extend"] = request.extend;
    }

    if (!$dara.isNull(request.mergeParallelNum)) {
      body["mergeParallelNum"] = request.mergeParallelNum;
    }

    if (!$dara.isNull(request.partition)) {
      body["partition"] = request.partition;
    }

    if (!$dara.isNull(request.pushMode)) {
      body["pushMode"] = request.pushMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes/${$dara.URL.percentEncode(indexName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ModifyIndexResponse>(await this.callApi(params, req, runtime), new ModifyIndexResponse({}));
  }

  /**
   * @param request - ModifyIndexRequest
   * @returns ModifyIndexResponse
   */
  async modifyIndex(instanceId: string, indexName: string, request: ModifyIndexRequest): Promise<ModifyIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async modifyIndexOnlineStrategyWithOptions(instanceId: string, dataSourceName: string, deployName: string, indexName: string, request: ModifyIndexOnlineStrategyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifyIndexOnlineStrategyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.changeRate)) {
      body["changeRate"] = request.changeRate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyIndexOnlineStrategy",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources/${$dara.URL.percentEncode(dataSourceName)}/deploys/${$dara.URL.percentEncode(deployName)}/indexes/${$dara.URL.percentEncode(indexName)}/online-strategy`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ModifyIndexOnlineStrategyResponse>(await this.callApi(params, req, runtime), new ModifyIndexOnlineStrategyResponse({}));
  }

  /**
   * Modifies the online policy of an index.
   * 
   * @param request - ModifyIndexOnlineStrategyRequest
   * @returns ModifyIndexOnlineStrategyResponse
   */
  async modifyIndexOnlineStrategy(instanceId: string, dataSourceName: string, deployName: string, indexName: string, request: ModifyIndexOnlineStrategyRequest): Promise<ModifyIndexOnlineStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async modifyIndexPartitionWithOptions(instanceId: string, request: ModifyIndexPartitionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifyIndexPartitionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceName)) {
      body["dataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.domainName)) {
      body["domainName"] = request.domainName;
    }

    if (!$dara.isNull(request.generation)) {
      body["generation"] = request.generation;
    }

    if (!$dara.isNull(request.indexInfos)) {
      body["indexInfos"] = request.indexInfos;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyIndexPartition",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/index-partition`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ModifyIndexPartitionResponse>(await this.callApi(params, req, runtime), new ModifyIndexPartitionResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async modifyIndexVersionWithOptions(instanceId: string, clusterName: string, request: ModifyIndexVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifyIndexVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyIndexVersion",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/clusters/${$dara.URL.percentEncode(clusterName)}/index-version`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ModifyIndexVersionResponse>(await this.callApi(params, req, runtime), new ModifyIndexVersionResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyIndexVersionWithOptions(instanceId, clusterName, request, headers, runtime);
  }

  /**
   * 修改模型详情，修改模型状态
   * 
   * @param request - ModifyModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyModelResponse
   */
  async modifyModelWithOptions(instanceId: string, modelName: string, request: ModifyModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifyModelResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyModel",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/models/${$dara.URL.percentEncode(modelName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ModifyModelResponse>(await this.callApi(params, req, runtime), new ModifyModelResponse({}));
  }

  /**
   * 修改模型详情，修改模型状态
   * 
   * @param request - ModifyModelRequest
   * @returns ModifyModelResponse
   */
  async modifyModel(instanceId: string, modelName: string, request: ModifyModelRequest): Promise<ModifyModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyModelWithOptions(instanceId, modelName, request, headers, runtime);
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
  async modifyNodeConfigWithOptions(instanceId: string, request: ModifyNodeConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifyNodeConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterName)) {
      query["clusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.dataSourceName)) {
      query["dataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.active)) {
      body["active"] = request.active;
    }

    if (!$dara.isNull(request.dataDuplicateNumber)) {
      body["dataDuplicateNumber"] = request.dataDuplicateNumber;
    }

    if (!$dara.isNull(request.dataFragmentNumber)) {
      body["dataFragmentNumber"] = request.dataFragmentNumber;
    }

    if (!$dara.isNull(request.flowRatio)) {
      body["flowRatio"] = request.flowRatio;
    }

    if (!$dara.isNull(request.minServicePercent)) {
      body["minServicePercent"] = request.minServicePercent;
    }

    if (!$dara.isNull(request.published)) {
      body["published"] = request.published;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyNodeConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/node-config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ModifyNodeConfigResponse>(await this.callApi(params, req, runtime), new ModifyNodeConfigResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async modifyOnlineConfigWithOptions(instanceId: string, nodeName: string, indexName: string, request: ModifyOnlineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifyOnlineConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyOnlineConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/node/${$dara.URL.percentEncode(nodeName)}/online-configs/${$dara.URL.percentEncode(indexName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ModifyOnlineConfigResponse>(await this.callApi(params, req, runtime), new ModifyOnlineConfigResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async modifyPasswordWithOptions(instanceId: string, request: ModifyPasswordRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifyPasswordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.password)) {
      body["password"] = request.password;
    }

    if (!$dara.isNull(request.username)) {
      body["username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPassword",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/password`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ModifyPasswordResponse>(await this.callApi(params, req, runtime), new ModifyPasswordResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyPasswordWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - ModifyPausePolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPausePolicyResponse
   */
  async modifyPausePolicyWithOptions(instanceId: string, request: ModifyPausePolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifyPausePolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPausePolicy",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/pause-policies`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ModifyPausePolicyResponse>(await this.callApi(params, req, runtime), new ModifyPausePolicyResponse({}));
  }

  /**
   * @param request - ModifyPausePolicyRequest
   * @returns ModifyPausePolicyResponse
   */
  async modifyPausePolicy(instanceId: string, request: ModifyPausePolicyRequest): Promise<ModifyPausePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async modifyPublicUrlIpListWithOptions(instanceId: string, request: ModifyPublicUrlIpListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifyPublicUrlIpListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPublicUrlIpList",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/public-url-ip-list`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ModifyPublicUrlIpListResponse>(await this.callApi(params, req, runtime), new ModifyPublicUrlIpListResponse({}));
  }

  /**
   * 修改公网域名访问白名单
   * 
   * @param request - ModifyPublicUrlIpListRequest
   * @returns ModifyPublicUrlIpListResponse
   */
  async modifyPublicUrlIpList(instanceId: string, request: ModifyPublicUrlIpListRequest): Promise<ModifyPublicUrlIpListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyPublicUrlIpListWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 通过指定实例ID来修改数据节点的副本或分片数量。
   * 
   * @remarks
   * ## 请求说明
   * 本API允许用户修改特定实例下的数据节点副本数或分片数。请求时，需提供实例ID，并在请求体中指定要修改的`replica`（副本数）或`partition`（分片数）。请注意，这两个参数都是可选的，但至少需要提供其中一个以执行更新操作。
   * 
   * @param request - ModifySearcherReplicaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySearcherReplicaResponse
   */
  async modifySearcherReplicaWithOptions(instanceId: string, request: ModifySearcherReplicaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifySearcherReplicaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.partition)) {
      body["partition"] = request.partition;
    }

    if (!$dara.isNull(request.replica)) {
      body["replica"] = request.replica;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySearcherReplica",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/replica`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ModifySearcherReplicaResponse>(await this.callApi(params, req, runtime), new ModifySearcherReplicaResponse({}));
  }

  /**
   * 通过指定实例ID来修改数据节点的副本或分片数量。
   * 
   * @remarks
   * ## 请求说明
   * 本API允许用户修改特定实例下的数据节点副本数或分片数。请求时，需提供实例ID，并在请求体中指定要修改的`replica`（副本数）或`partition`（分片数）。请注意，这两个参数都是可选的，但至少需要提供其中一个以执行更新操作。
   * 
   * @param request - ModifySearcherReplicaRequest
   * @returns ModifySearcherReplicaResponse
   */
  async modifySearcherReplica(instanceId: string, request: ModifySearcherReplicaRequest): Promise<ModifySearcherReplicaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifySearcherReplicaWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Modifies an index table.
   * 
   * @param request - ModifyTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTableResponse
   */
  async modifyTableWithOptions(instanceId: string, tableName: string, request: ModifyTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifyTableResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataProcessConfig)) {
      body["dataProcessConfig"] = request.dataProcessConfig;
    }

    if (!$dara.isNull(request.dataSource)) {
      body["dataSource"] = request.dataSource;
    }

    if (!$dara.isNull(request.fieldSchema)) {
      body["fieldSchema"] = request.fieldSchema;
    }

    if (!$dara.isNull(request.partitionCount)) {
      body["partitionCount"] = request.partitionCount;
    }

    if (!$dara.isNull(request.primaryKey)) {
      body["primaryKey"] = request.primaryKey;
    }

    if (!$dara.isNull(request.rawSchema)) {
      body["rawSchema"] = request.rawSchema;
    }

    if (!$dara.isNull(request.vectorIndex)) {
      body["vectorIndex"] = request.vectorIndex;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTable",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/tables/${$dara.URL.percentEncode(tableName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ModifyTableResponse>(await this.callApi(params, req, runtime), new ModifyTableResponse({}));
  }

  /**
   * Modifies an index table.
   * 
   * @param request - ModifyTableRequest
   * @returns ModifyTableResponse
   */
  async modifyTable(instanceId: string, tableName: string, request: ModifyTableRequest): Promise<ModifyTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async publishAdvanceConfigWithOptions(instanceId: string, configName: string, request: PublishAdvanceConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PublishAdvanceConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.desc)) {
      body["desc"] = request.desc;
    }

    if (!$dara.isNull(request.files)) {
      body["files"] = request.files;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishAdvanceConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}/actions/publish`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<PublishAdvanceConfigResponse>(await this.callApi(params, req, runtime), new PublishAdvanceConfigResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async publishIndexVersionWithOptions(instanceId: string, indexName: string, request: PublishIndexVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PublishIndexVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishIndexVersion",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes/${$dara.URL.percentEncode(indexName)}/actions/publish`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<PublishIndexVersionResponse>(await this.callApi(params, req, runtime), new PublishIndexVersionResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishIndexVersionWithOptions(instanceId, indexName, request, headers, runtime);
  }

  /**
   * @param request - PushDocumentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushDocumentsResponse
   */
  async pushDocumentsWithOptions(instanceId: string, dataSourceName: string, request: PushDocumentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PushDocumentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pkField)) {
      query["pkField"] = request.pkField;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "PushDocuments",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources/${$dara.URL.percentEncode(dataSourceName)}/actions/bulk`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<PushDocumentsResponse>(await this.callApi(params, req, runtime), new PushDocumentsResponse({}));
  }

  /**
   * @param request - PushDocumentsRequest
   * @returns PushDocumentsResponse
   */
  async pushDocuments(instanceId: string, dataSourceName: string, request: PushDocumentsRequest): Promise<PushDocumentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async recoverIndexWithOptions(instanceId: string, request: RecoverIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RecoverIndexResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.buildDeployId)) {
      body["buildDeployId"] = request.buildDeployId;
    }

    if (!$dara.isNull(request.dataSourceName)) {
      body["dataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.generation)) {
      body["generation"] = request.generation;
    }

    if (!$dara.isNull(request.indexName)) {
      body["indexName"] = request.indexName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecoverIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/recover-index`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<RecoverIndexResponse>(await this.callApi(params, req, runtime), new RecoverIndexResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async reindexWithOptions(instanceId: string, tableName: string, request: ReindexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ReindexResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataTimeSec)) {
      body["dataTimeSec"] = request.dataTimeSec;
    }

    if (!$dara.isNull(request.ossDataPath)) {
      body["ossDataPath"] = request.ossDataPath;
    }

    if (!$dara.isNull(request.partition)) {
      body["partition"] = request.partition;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Reindex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/tables/${$dara.URL.percentEncode(tableName)}/reindex`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ReindexResponse>(await this.callApi(params, req, runtime), new ReindexResponse({}));
  }

  /**
   * Rebuilds an index.
   * 
   * @param request - ReindexRequest
   * @returns ReindexResponse
   */
  async reindex(instanceId: string, tableName: string, request: ReindexRequest): Promise<ReindexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async removeClusterWithOptions(instanceId: string, clusterName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RemoveClusterResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveCluster",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/clusters/${$dara.URL.percentEncode(clusterName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<RemoveClusterResponse>(await this.callApi(params, req, runtime), new RemoveClusterResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeClusterWithOptions(instanceId, clusterName, headers, runtime);
  }

  /**
   * @param request - RenameFolderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameFolderResponse
   */
  async renameFolderWithOptions(instanceId: string, database: string, folderId: string, request: RenameFolderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RenameFolderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenameFolder",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/folders/${$dara.URL.percentEncode(folderId)}/name`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<RenameFolderResponse>(await this.callApi(params, req, runtime), new RenameFolderResponse({}));
  }

  /**
   * @param request - RenameFolderRequest
   * @returns RenameFolderResponse
   */
  async renameFolder(instanceId: string, database: string, folderId: string, request: RenameFolderRequest): Promise<RenameFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renameFolderWithOptions(instanceId, database, folderId, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartIndexResponse
   */
  async startIndexWithOptions(instanceId: string, indexName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StartIndexResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes/${$dara.URL.percentEncode(indexName)}/startIndex`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<StartIndexResponse>(await this.callApi(params, req, runtime), new StartIndexResponse({}));
  }

  /**
   * @returns StartIndexResponse
   */
  async startIndex(instanceId: string, indexName: string): Promise<StartIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startIndexWithOptions(instanceId, indexName, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopIndexResponse
   */
  async stopIndexWithOptions(instanceId: string, indexName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StopIndexResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes/${$dara.URL.percentEncode(indexName)}/stopIndex`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<StopIndexResponse>(await this.callApi(params, req, runtime), new StopIndexResponse({}));
  }

  /**
   * @returns StopIndexResponse
   */
  async stopIndex(instanceId: string, indexName: string): Promise<StopIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async stopTaskWithOptions(instanceId: string, fsmId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StopTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopTask",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/stop-task/${$dara.URL.percentEncode(fsmId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<StopTaskResponse>(await this.callApi(params, req, runtime), new StopTaskResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async tagResourcesWithOptions(request: TagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      body["tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * 打标签接口
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async untagResourcesWithOptions(tmpReq: UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
    tmpReq.validate();
    let request = new UntagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "resourceId", "json");
    }

    if (!$dara.isNull(tmpReq.tagKey)) {
      request.tagKeyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKey, "tagKey", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      query["all"] = request.all;
    }

    if (!$dara.isNull(request.resourceIdShrink)) {
      query["resourceId"] = request.resourceIdShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKeyShrink)) {
      query["tagKey"] = request.tagKeyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * 删标签接口
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async updateInstanceWithOptions(instanceId: string, request: UpdateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.components)) {
      body["components"] = request.components;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.orderType)) {
      body["orderType"] = request.orderType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateInstanceResponse>(await this.callApi(params, req, runtime), new UpdateInstanceResponse({}));
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
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - UpdateSqlInstanceContentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSqlInstanceContentResponse
   */
  async updateSqlInstanceContentWithOptions(instanceId: string, database: string, sqlInstanceId: string, request: UpdateSqlInstanceContentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateSqlInstanceContentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSqlInstanceContent",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/sql-instances/${$dara.URL.percentEncode(sqlInstanceId)}/content`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateSqlInstanceContentResponse>(await this.callApi(params, req, runtime), new UpdateSqlInstanceContentResponse({}));
  }

  /**
   * @param request - UpdateSqlInstanceContentRequest
   * @returns UpdateSqlInstanceContentResponse
   */
  async updateSqlInstanceContent(instanceId: string, database: string, sqlInstanceId: string, request: UpdateSqlInstanceContentRequest): Promise<UpdateSqlInstanceContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSqlInstanceContentWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

  /**
   * @param request - UpdateSqlInstanceNameRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSqlInstanceNameResponse
   */
  async updateSqlInstanceNameWithOptions(instanceId: string, database: string, sqlInstanceId: string, request: UpdateSqlInstanceNameRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateSqlInstanceNameResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSqlInstanceName",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/sql-instances/${$dara.URL.percentEncode(sqlInstanceId)}/name`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateSqlInstanceNameResponse>(await this.callApi(params, req, runtime), new UpdateSqlInstanceNameResponse({}));
  }

  /**
   * @param request - UpdateSqlInstanceNameRequest
   * @returns UpdateSqlInstanceNameResponse
   */
  async updateSqlInstanceName(instanceId: string, database: string, sqlInstanceId: string, request: UpdateSqlInstanceNameRequest): Promise<UpdateSqlInstanceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSqlInstanceNameWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

  /**
   * @param request - UpdateSqlInstanceParamsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSqlInstanceParamsResponse
   */
  async updateSqlInstanceParamsWithOptions(instanceId: string, database: string, sqlInstanceId: string, request: UpdateSqlInstanceParamsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateSqlInstanceParamsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.combineParam)) {
      body["combineParam"] = request.combineParam;
    }

    if (!$dara.isNull(request.dynamicParam)) {
      body["dynamicParam"] = request.dynamicParam;
    }

    if (!$dara.isNull(request.kvpair)) {
      body["kvpair"] = request.kvpair;
    }

    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    if (!$dara.isNull(request.staticParam)) {
      body["staticParam"] = request.staticParam;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSqlInstanceParams",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/sql-instances/${$dara.URL.percentEncode(sqlInstanceId)}/params`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateSqlInstanceParamsResponse>(await this.callApi(params, req, runtime), new UpdateSqlInstanceParamsResponse({}));
  }

  /**
   * @param request - UpdateSqlInstanceParamsRequest
   * @returns UpdateSqlInstanceParamsResponse
   */
  async updateSqlInstanceParams(instanceId: string, database: string, sqlInstanceId: string, request: UpdateSqlInstanceParamsRequest): Promise<UpdateSqlInstanceParamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSqlInstanceParamsWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

}
