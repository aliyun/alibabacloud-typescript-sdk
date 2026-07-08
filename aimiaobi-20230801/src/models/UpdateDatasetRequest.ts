// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetRequestDatasetConfigSearchSourceConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the key-value pairs in metadata are used for generation. Default: true.
   * 
   * @example
   * true
   */
  metadataKeyValueGenerateEnable?: boolean;
  /**
   * @remarks
   * Specifies whether the key-value pairs in metadata are included in searches. Default: true.
   * 
   * @example
   * true
   */
  metadataKeyValueSearchEnable?: boolean;
  /**
   * @remarks
   * Specifies whether tags are used for generation. Default: true.
   * 
   * @example
   * true
   */
  tagGenerateEnable?: boolean;
  /**
   * @remarks
   * Specifies whether tags are included in searches. Default: true.
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

export class UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders extends $dara.Model {
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
   * The data type of the parameter value. Default: string.
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

export class UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams extends $dara.Model {
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
   * The data type of the parameter value. Default: string.
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

export class UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfig extends $dara.Model {
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
  headers?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders[];
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
  params?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams[];
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
      headers: { 'type': 'array', 'itemType': UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders },
      method: 'string',
      params: { 'type': 'array', 'itemType': UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams },
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

export class UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes extends $dara.Model {
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
   * .title
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

export class UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes extends $dara.Model {
  /**
   * @remarks
   * The child node configuration.
   */
  jqNodes?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes[];
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
   * .title
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
      jqNodes: { 'type': 'array', 'itemType': UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes },
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

export class UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes extends $dara.Model {
  /**
   * @remarks
   * The child node configuration.
   */
  jqNodes?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes[];
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
      jqNodes: { 'type': 'array', 'itemType': UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes },
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

export class UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfig extends $dara.Model {
  /**
   * @remarks
   * The node configuration.
   */
  jqNodes?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes[];
  static names(): { [key: string]: string } {
    return {
      jqNodes: 'JqNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jqNodes: { 'type': 'array', 'itemType': UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes },
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

export class UpdateDatasetRequestDatasetConfigSearchSourceConfigs extends $dara.Model {
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
   * The API request configuration.
   */
  searchSourceRequestConfig?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfig;
  /**
   * @remarks
   * The API response configuration.
   */
  searchSourceResponseConfig?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfig;
  /**
   * @remarks
   * The default number of data entries for requests and responses.
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
      searchSourceRequestConfig: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfig,
      searchSourceResponseConfig: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfig,
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

export class UpdateDatasetRequestDatasetConfig extends $dara.Model {
  /**
   * @remarks
   * The dataset configuration items.
   */
  searchSourceConfig?: UpdateDatasetRequestDatasetConfigSearchSourceConfig;
  /**
   * @remarks
   * Third-party search: API definition.
   */
  searchSourceConfigs?: UpdateDatasetRequestDatasetConfigSearchSourceConfigs[];
  static names(): { [key: string]: string } {
    return {
      searchSourceConfig: 'SearchSourceConfig',
      searchSourceConfigs: 'SearchSourceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchSourceConfig: UpdateDatasetRequestDatasetConfigSearchSourceConfig,
      searchSourceConfigs: { 'type': 'array', 'itemType': UpdateDatasetRequestDatasetConfigSearchSourceConfigs },
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

export class UpdateDatasetRequest extends $dara.Model {
  /**
   * @example
   * private
   */
  accessLevel?: string;
  /**
   * @remarks
   * The configurations for a third-party search dataset.
   */
  datasetConfig?: UpdateDatasetRequestDatasetConfig;
  /**
   * @remarks
   * The description of the dataset.
   * 
   * @example
   * 企业自定义数据集
   */
  datasetDescription?: string;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @remarks
   * Specifies whether to enable search for the dataset.
   * 
   * @example
   * 3
   */
  searchDatasetEnable?: number;
  /**
   * @remarks
   * The unique identifier of the Alibaba Cloud Model Studio workspace. For more information, see [Get a workspaceId]().
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      datasetConfig: 'DatasetConfig',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      searchDatasetEnable: 'SearchDatasetEnable',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'string',
      datasetConfig: UpdateDatasetRequestDatasetConfig,
      datasetDescription: 'string',
      datasetId: 'number',
      searchDatasetEnable: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.datasetConfig && typeof (this.datasetConfig as any).validate === 'function') {
      (this.datasetConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

