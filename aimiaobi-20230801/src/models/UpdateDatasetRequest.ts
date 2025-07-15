// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders extends $dara.Model {
  /**
   * @example
   * 参数名称
   */
  name?: string;
  /**
   * @example
   * 参数值
   */
  value?: string;
  /**
   * @example
   * valueType = time 时有效
   */
  valueFormat?: string;
  /**
   * @example
   * 参数值数据类型: 默认string
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
   * @example
   * 参数名称
   */
  name?: string;
  /**
   * @example
   * 参数值
   */
  value?: string;
  /**
   * @example
   * valueType = time 时有效
   */
  valueFormat?: string;
  /**
   * @example
   * 参数值数据类型: 默认string
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
   * @example
   * {}
   */
  body?: string;
  /**
   * @example
   * 3000
   */
  connectTimeout?: number;
  headers?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders[];
  /**
   * @example
   * 请求方式
   */
  method?: string;
  params?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams[];
  /**
   * @example
   * true
   */
  pathParamsEnable?: boolean;
  /**
   * @example
   * 3000
   */
  socketTimeout?: number;
  /**
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
   * @example
   * title
   */
  key?: string;
  /**
   * @example
   * .title
   */
  path?: string;
  /**
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
  jqNodes?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes[];
  /**
   * @example
   * title
   */
  key?: string;
  /**
   * @example
   * .title
   */
  path?: string;
  /**
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
  jqNodes?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes[];
  /**
   * @example
   * 节点key
   */
  key?: string;
  /**
   * @example
   * 节点路径
   */
  path?: string;
  /**
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
   * @example
   * 可以搜索到的关键词，用来验证是否可用
   */
  demoQuery?: string;
  searchSourceRequestConfig?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfig;
  searchSourceResponseConfig?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfig;
  /**
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
  searchSourceConfigs?: UpdateDatasetRequestDatasetConfigSearchSourceConfigs[];
  static names(): { [key: string]: string } {
    return {
      searchSourceConfigs: 'SearchSourceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchSourceConfigs: { 'type': 'array', 'itemType': UpdateDatasetRequestDatasetConfigSearchSourceConfigs },
    };
  }

  validate() {
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
  datasetConfig?: UpdateDatasetRequestDatasetConfig;
  /**
   * @example
   * 企业自定义数据集
   */
  datasetDescription?: string;
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * 3
   */
  searchDatasetEnable?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetConfig: 'DatasetConfig',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      searchDatasetEnable: 'SearchDatasetEnable',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

