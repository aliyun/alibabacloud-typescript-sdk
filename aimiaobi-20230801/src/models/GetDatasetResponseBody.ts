// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatasetResponseBodyDataDatasetConfigSearchSourceConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include the key-value pairs of metadata in the generation. Default value: true.
   * 
   * @example
   * true
   */
  metadataKeyValueGenerateEnable?: string;
  /**
   * @remarks
   * Specifies whether to include the key-value pairs of metadata in the search. Default value: true.
   * 
   * @example
   * true
   */
  metadataKeyValueSearchEnable?: string;
  /**
   * @remarks
   * Specifies whether to include tags in the generation. Default value: true.
   * 
   * @example
   * true
   */
  tagGenerateEnable?: string;
  /**
   * @remarks
   * Specifies whether to include tags in the search. Default value: true.
   * 
   * @example
   * true
   */
  tagSearchEnable?: string;
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
      metadataKeyValueGenerateEnable: 'string',
      metadataKeyValueSearchEnable: 'string',
      tagGenerateEnable: 'string',
      tagSearchEnable: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * 参数名称
   */
  name?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 参数值
   */
  value?: string;
  /**
   * @remarks
   * This parameter is valid only when \\`ValueType\\` is set to \\`time\\`.
   * 
   * @example
   * valueType = time 时有效
   */
  valueFormat?: string;
  /**
   * @remarks
   * The data type of the parameter value. Default value: string.
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

export class GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * 参数名称
   */
  name?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 参数值
   */
  value?: string;
  /**
   * @remarks
   * This parameter is valid only when \\`ValueType\\` is set to \\`time\\`.
   * 
   * @example
   * valueType = time 时有效
   */
  valueFormat?: string;
  /**
   * @remarks
   * The data type of the parameter value. Default value: string.
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

export class GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceRequestConfig extends $dara.Model {
  /**
   * @remarks
   * The request body.
   * 
   * @example
   * 请求body
   */
  body?: string;
  /**
   * @remarks
   * The connection timeout period.
   * 
   * @example
   * 30
   */
  connectTimeout?: number;
  /**
   * @remarks
   * The HTTP request headers.
   */
  headers?: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders[];
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
  params?: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams[];
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
   * The read timeout period.
   * 
   * @example
   * 78
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
      headers: { 'type': 'array', 'itemType': GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders },
      method: 'string',
      params: { 'type': 'array', 'itemType': GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams },
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

export class GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes extends $dara.Model {
  /**
   * @remarks
   * The key of the node.
   * 
   * @example
   * title
   */
  key?: string;
  /**
   * @remarks
   * The path of the node.
   * 
   * @example
   * .title
   */
  path?: string;
  /**
   * @remarks
   * The data type of the node. Valid values: string, number, list, object, and base.
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

export class GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes extends $dara.Model {
  /**
   * @remarks
   * The child node configurations.
   */
  jqNodes?: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes[];
  /**
   * @remarks
   * The key of the node.
   * 
   * @example
   * title
   */
  key?: string;
  /**
   * @remarks
   * The path of the node.
   * 
   * @example
   * .title
   */
  path?: string;
  /**
   * @remarks
   * The data type of the node. Valid values: string, number, list, object, and base.
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
      jqNodes: { 'type': 'array', 'itemType': GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes },
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

export class GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes extends $dara.Model {
  /**
   * @remarks
   * The child node configurations.
   */
  jqNodes?: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes[];
  /**
   * @remarks
   * The key of the node.
   * 
   * @example
   * 节点key
   */
  key?: string;
  /**
   * @remarks
   * The path of the node.
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
      jqNodes: { 'type': 'array', 'itemType': GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes },
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

export class GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfig extends $dara.Model {
  /**
   * @remarks
   * The node configurations.
   */
  jqNodes?: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes[];
  static names(): { [key: string]: string } {
    return {
      jqNodes: 'JqNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jqNodes: { 'type': 'array', 'itemType': GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes },
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

export class GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigs extends $dara.Model {
  /**
   * @remarks
   * A sample query keyword. This keyword is used to test whether the search source is available.
   * 
   * @example
   * 可以搜索到的关键词，用来验证是否可用
   */
  demoQuery?: string;
  /**
   * @remarks
   * The API request configuration.
   */
  searchSourceRequestConfig?: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceRequestConfig;
  /**
   * @remarks
   * The API response configuration.
   */
  searchSourceResponseConfig?: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfig;
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
      searchSourceRequestConfig: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceRequestConfig,
      searchSourceResponseConfig: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfig,
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

export class GetDatasetResponseBodyDataDatasetConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration items for the dataset.
   */
  searchSourceConfig?: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfig;
  /**
   * @remarks
   * Third-party search: API definition.
   */
  searchSourceConfigs?: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigs[];
  static names(): { [key: string]: string } {
    return {
      searchSourceConfig: 'SearchSourceConfig',
      searchSourceConfigs: 'SearchSourceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchSourceConfig: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfig,
      searchSourceConfigs: { 'type': 'array', 'itemType': GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigs },
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

export class GetDatasetResponseBodyDataDocumentHandleConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable the processing logic for multimedia files. Default value: false.
   * 
   * @example
   * true
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

export class GetDatasetResponseBodyData extends $dara.Model {
  /**
   * @example
   * private
   */
  accessLevel?: string;
  /**
   * @remarks
   * The time when the dataset was created.
   * 
   * @example
   * 2024-11-12 21:46:24
   */
  createTime?: string;
  /**
   * @remarks
   * The user who created the dataset.
   * 
   * @example
   * xxx
   */
  createUser?: string;
  /**
   * @remarks
   * The search configuration of the dataset.
   */
  datasetConfig?: GetDatasetResponseBodyDataDatasetConfig;
  /**
   * @remarks
   * The display name of the dataset.
   * 
   * @example
   * xxx
   */
  datasetDescription?: string;
  /**
   * @remarks
   * The ID of the dataset.
   * 
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * xxx
   */
  datasetName?: string;
  /**
   * @remarks
   * The type of the dataset.
   * 
   * @example
   * CustomSemanticSearch
   */
  datasetType?: string;
  /**
   * @remarks
   * The document processing configuration.
   */
  documentHandleConfig?: GetDatasetResponseBodyDataDocumentHandleConfig;
  /**
   * @remarks
   * The switch that enables or disables search for the dataset.
   * 
   * @example
   * 1
   */
  searchDatasetEnable?: number;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      datasetConfig: 'DatasetConfig',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      documentHandleConfig: 'DocumentHandleConfig',
      searchDatasetEnable: 'SearchDatasetEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'string',
      createTime: 'string',
      createUser: 'string',
      datasetConfig: GetDatasetResponseBodyDataDatasetConfig,
      datasetDescription: 'string',
      datasetId: 'number',
      datasetName: 'string',
      datasetType: 'string',
      documentHandleConfig: GetDatasetResponseBodyDataDocumentHandleConfig,
      searchDatasetEnable: 'number',
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

export class GetDatasetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: GetDatasetResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of \\`true\\` indicates success. A value of \\`false\\` indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDatasetResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

