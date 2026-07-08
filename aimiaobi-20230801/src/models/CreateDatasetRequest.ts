// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetRequestDatasetConfigSearchSourceConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the metadata key-value pairs are used in generation. The default value is true.
   * 
   * @example
   * true
   */
  metadataKeyValueGenerateEnable?: boolean;
  /**
   * @remarks
   * Specifies whether the metadata key-value pairs are used in searches. The default value is true.
   * 
   * @example
   * true
   */
  metadataKeyValueSearchEnable?: boolean;
  /**
   * @remarks
   * Specifies whether tags are used in generation. The default value is true.
   * 
   * @example
   * true
   */
  tagGenerateEnable?: boolean;
  /**
   * @remarks
   * Specifies whether tags are used in searches. The default value is true.
   * 
   * @example
   * true
   */
  tagSearchEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      metadataKeyValueGenerateEnable: 'MetadataKeyValueGenerateEnable',
      metadataKeyValueSearchEnable: 'MetadataKeyValueSearchEnable',
      tagGenerateEnable: 'TagGenerateEnable',
      tagSearchEnable: 'TagSearchEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadataKeyValueGenerateEnable: 'boolean',
      metadataKeyValueSearchEnable: 'boolean',
      tagGenerateEnable: 'boolean',
      tagSearchEnable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * 参数名称
   */
  name?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * 参数值
   */
  value?: string;
  /**
   * @remarks
   * This parameter is valid only when ValueType is set to time.
   * 
   * @example
   * valueType = time 时有效
   */
  valueFormat?: string;
  /**
   * @remarks
   * The data type of the parameter value. The default value is string.
   * 
   * @example
   * 参数值数据类型：默认string
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
      valueFormat: 'ValueFormat',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
      valueFormat: 'string',
      valueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * 参数名称
   */
  name?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * 参数值
   */
  value?: string;
  /**
   * @remarks
   * This parameter is valid only when ValueType is set to time.
   * 
   * @example
   * valueType = time 时有效
   */
  valueFormat?: string;
  /**
   * @remarks
   * The data type of the parameter value. The default value is string.
   * 
   * @example
   * 参数值数据类型：默认string
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
      valueFormat: 'ValueFormat',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
      valueFormat: 'string',
      valueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfig extends $dara.Model {
  /**
   * @remarks
   * The request body.
   * 
   * @example
   * {}
   */
  body?: string;
  /**
   * @remarks
   * The connection timeout period, in milliseconds.
   * 
   * @example
   * 3000
   */
  connectTimeout?: number;
  /**
   * @remarks
   * The HTTP request headers.
   */
  headers?: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders[];
  /**
   * @remarks
   * The request method.
   * 
   * @example
   * 请求方式
   */
  method?: string;
  /**
   * @remarks
   * The request path parameters.
   */
  params?: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams[];
  /**
   * @remarks
   * Specifies whether to enable path parameters.
   * 
   * @example
   * true
   */
  pathParamsEnable?: boolean;
  /**
   * @remarks
   * The read timeout period, in milliseconds.
   * 
   * @example
   * 3000
   */
  socketTimeout?: number;
  /**
   * @remarks
   * The API URL.
   * 
   * @example
   * api地址
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      connectTimeout: 'ConnectTimeout',
      headers: 'Headers',
      method: 'Method',
      params: 'Params',
      pathParamsEnable: 'PathParamsEnable',
      socketTimeout: 'SocketTimeout',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      connectTimeout: 'number',
      headers: { 'type': 'array', 'itemType': CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders },
      method: 'string',
      params: { 'type': 'array', 'itemType': CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams },
      pathParamsEnable: 'boolean',
      socketTimeout: 'number',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.headers)) {
      $dara.Model.validateArray(this.headers);
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes extends $dara.Model {
  /**
   * @remarks
   * The node key.
   * 
   * @example
   * title
   */
  key?: string;
  /**
   * @remarks
   * The node path.
   * 
   * @example
   * 节点路径
   */
  path?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      path: 'string',
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

export class CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes extends $dara.Model {
  /**
   * @remarks
   * Child node configuration.
   */
  jqNodes?: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes[];
  /**
   * @remarks
   * The node key.
   * 
   * @example
   * title
   */
  key?: string;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * 节点路径
   */
  path?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jqNodes: 'JqNodes',
      key: 'Key',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jqNodes: { 'type': 'array', 'itemType': CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes },
      key: 'string',
      path: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jqNodes)) {
      $dara.Model.validateArray(this.jqNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes extends $dara.Model {
  /**
   * @remarks
   * Child node configuration.
   */
  jqNodes?: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes[];
  /**
   * @remarks
   * The node key.
   * 
   * @example
   * 节点key
   */
  key?: string;
  /**
   * @remarks
   * The node path.
   * 
   * @example
   * 节点路径
   */
  path?: string;
  /**
   * @remarks
   * The data type of the node. Valid values: string, number, list, object, and base.
   * 
   * @example
   * 节点数据类型：string number list object base
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jqNodes: 'JqNodes',
      key: 'Key',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jqNodes: { 'type': 'array', 'itemType': CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes },
      key: 'string',
      path: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jqNodes)) {
      $dara.Model.validateArray(this.jqNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfig extends $dara.Model {
  /**
   * @remarks
   * Node configuration.
   */
  jqNodes?: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes[];
  static names(): { [key: string]: string } {
    return {
      jqNodes: 'JqNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jqNodes: { 'type': 'array', 'itemType': CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes },
    };
  }

  validate() {
    if(Array.isArray(this.jqNodes)) {
      $dara.Model.validateArray(this.jqNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequestDatasetConfigSearchSourceConfigs extends $dara.Model {
  /**
   * @remarks
   * A searchable keyword used to verify availability.
   * 
   * @example
   * 可以搜索到的关键词，用来验证是否可用
   */
  demoQuery?: string;
  /**
   * @remarks
   * API request configuration.
   */
  searchSourceRequestConfig?: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfig;
  /**
   * @remarks
   * API response configuration.
   */
  searchSourceResponseConfig?: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfig;
  /**
   * @remarks
   * The default limit on the number of data entries for requests and responses.
   * 
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      demoQuery: 'DemoQuery',
      searchSourceRequestConfig: 'SearchSourceRequestConfig',
      searchSourceResponseConfig: 'SearchSourceResponseConfig',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoQuery: 'string',
      searchSourceRequestConfig: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfig,
      searchSourceResponseConfig: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfig,
      size: 'number',
    };
  }

  validate() {
    if(this.searchSourceRequestConfig && typeof (this.searchSourceRequestConfig as any).validate === 'function') {
      (this.searchSourceRequestConfig as any).validate();
    }
    if(this.searchSourceResponseConfig && typeof (this.searchSourceResponseConfig as any).validate === 'function') {
      (this.searchSourceResponseConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequestDatasetConfig extends $dara.Model {
  /**
   * @remarks
   * Dataset configuration items.
   */
  searchSourceConfig?: CreateDatasetRequestDatasetConfigSearchSourceConfig;
  /**
   * @remarks
   * Third-party search: API definition.
   */
  searchSourceConfigs?: CreateDatasetRequestDatasetConfigSearchSourceConfigs[];
  static names(): { [key: string]: string } {
    return {
      searchSourceConfig: 'SearchSourceConfig',
      searchSourceConfigs: 'SearchSourceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchSourceConfig: CreateDatasetRequestDatasetConfigSearchSourceConfig,
      searchSourceConfigs: { 'type': 'array', 'itemType': CreateDatasetRequestDatasetConfigSearchSourceConfigs },
    };
  }

  validate() {
    if(this.searchSourceConfig && typeof (this.searchSourceConfig as any).validate === 'function') {
      (this.searchSourceConfig as any).validate();
    }
    if(Array.isArray(this.searchSourceConfigs)) {
      $dara.Model.validateArray(this.searchSourceConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequestDocumentHandleConfig extends $dara.Model {
  /**
   * @remarks
   * Disables the processing logic for multimedia files.
   * 
   * - true: Disables multimodal (image and video) indexing. Only text is indexed and searched.
   * 
   * - false: Enables multimodal (text, image, and video) indexing. This setting takes effect only after you activate ApsaraVideo and grant authorization in system administration. If you set this to false but authorization is not granted, image and video indexing is automatically skipped. This is the default value.
   * 
   * @example
   * false
   */
  disableHandleMultimodalMedia?: boolean;
  static names(): { [key: string]: string } {
    return {
      disableHandleMultimodalMedia: 'DisableHandleMultimodalMedia',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableHandleMultimodalMedia: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequest extends $dara.Model {
  /**
   * @example
   * private
   */
  accessLevel?: string;
  /**
   * @remarks
   * The dataset search configuration.
   */
  datasetConfig?: CreateDatasetRequestDatasetConfig;
  /**
   * @remarks
   * The description of the dataset. This is the display name in the console. Use a human-readable name.
   * 
   * @example
   * 企业知识库
   */
  datasetDescription?: string;
  /**
   * @remarks
   * The name of the dataset. The name must be globally unique.
   * 
   * This parameter is required.
   * 
   * @example
   * businessDataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The type of the dataset. Valid values:
   * 
   * - CustomSemanticSearch: A custom semantic index. This is the default value. Upload documents to build the dataset.
   * 
   * - ThirdSearch: A third-party search source (API). Configure your own search API.
   * 
   * @example
   * CustomSemanticSearch
   */
  datasetType?: string;
  /**
   * @remarks
   * Dataset index configuration.
   */
  documentHandleConfig?: CreateDatasetRequestDocumentHandleConfig;
  /**
   * @remarks
   * The invocation method. Currently, only portal is supported, which indicates an invocation from the console.
   * 
   * - If left empty: When DatasetType is ThirdSearch, datasetConfig.SearchSourceConfigs (third-party API definition) is required.
   * 
   * - If set to portal: When DatasetType is ThirdSearch, the system initializes a SearchSourceConfigs (third-party API demo) example by default for your reference.
   * 
   * @example
   * portal
   */
  invokeType?: string;
  /**
   * @remarks
   * The dataset search switch. Valid values:
   * 
   * - 0: Disabled for all.
   * 
   * - 1: Visible only to Miao Search.
   * 
   * - 2: Visible only to Miao Bi.
   * 
   * - 3: Visible to both Miao Search and Miao Bi. This is the default value.
   * 
   * @example
   * 3
   */
  searchDatasetEnable?: number;
  /**
   * @remarks
   * The unique ID of the Alibaba Cloud Model Studio workspace. For more information, see [Obtain a workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      datasetConfig: 'DatasetConfig',
      datasetDescription: 'DatasetDescription',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      documentHandleConfig: 'DocumentHandleConfig',
      invokeType: 'InvokeType',
      searchDatasetEnable: 'SearchDatasetEnable',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'string',
      datasetConfig: CreateDatasetRequestDatasetConfig,
      datasetDescription: 'string',
      datasetName: 'string',
      datasetType: 'string',
      documentHandleConfig: CreateDatasetRequestDocumentHandleConfig,
      invokeType: 'string',
      searchDatasetEnable: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.datasetConfig && typeof (this.datasetConfig as any).validate === 'function') {
      (this.datasetConfig as any).validate();
    }
    if(this.documentHandleConfig && typeof (this.documentHandleConfig as any).validate === 'function') {
      (this.documentHandleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

