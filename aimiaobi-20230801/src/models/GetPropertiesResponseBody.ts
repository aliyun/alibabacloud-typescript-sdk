// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPropertiesResponseBodyDataConsoleConfig extends $dara.Model {
  /**
   * @remarks
   * Prompt content
   * 
   * @example
   * xx
   */
  tipContent?: string;
  /**
   * @remarks
   * Title
   * 
   * @example
   * AI妙笔
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      tipContent: 'TipContent',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tipContent: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataIntelligentSearchConfigCopilotPreciseSearchSources extends $dara.Model {
  /**
   * @remarks
   * Unique identifier for the dataset: code+datasetName
   * 
   * @example
   * x
   */
  code?: string;
  /**
   * @remarks
   * Unique identifier for the dataset: code+datasetName
   * 
   * @example
   * x
   */
  datasetName?: string;
  /**
   * @remarks
   * Search source name: Chinese
   * 
   * @example
   * x
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datasetName: 'DatasetName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datasetName: 'string',
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

export class GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamplesArticles extends $dara.Model {
  /**
   * @remarks
   * Whether manually selected when passed from the frontend
   * 
   * @example
   * true
   */
  select?: boolean;
  /**
   * @remarks
   * Whether it is a starred article
   * 
   * @example
   * false
   */
  stared?: boolean;
  /**
   * @remarks
   * Title
   * 
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * Article URL
   * 
   * @example
   * http://xxx.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      select: 'Select',
      stared: 'Stared',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      select: 'boolean',
      stared: 'boolean',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamples extends $dara.Model {
  /**
   * @remarks
   * Article list
   */
  articles?: GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamplesArticles[];
  /**
   * @remarks
   * Prompt
   * 
   * @example
   * xx
   */
  prompt?: string;
  /**
   * @remarks
   * Generated content
   * 
   * @example
   * xxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      prompt: 'Prompt',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamplesArticles },
      prompt: 'string',
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSources extends $dara.Model {
  /**
   * @remarks
   * Unique identifier for the dataset: code+datasetName
   * 
   * @example
   * xx
   */
  code?: string;
  /**
   * @remarks
   * Unique identifier for the dataset: code+datasetName
   * 
   * @example
   * xx
   */
  datasetName?: string;
  /**
   * @remarks
   * Search source name: Chinese
   * 
   * @example
   * xx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datasetName: 'DatasetName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datasetName: 'string',
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

export class GetPropertiesResponseBodyDataIntelligentSearchConfig extends $dara.Model {
  /**
   * @remarks
   * Miaosou: Search source configuration
   */
  copilotPreciseSearchSources?: GetPropertiesResponseBodyDataIntelligentSearchConfigCopilotPreciseSearchSources[];
  /**
   * @remarks
   * Homepage product description
   * 
   * @example
   * xxx
   */
  productDescription?: string;
  /**
   * @remarks
   * Intelligent search recommendations
   */
  searchSamples?: GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamples[];
  /**
   * @remarks
   * Search source list
   */
  searchSources?: GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSources[];
  static names(): { [key: string]: string } {
    return {
      copilotPreciseSearchSources: 'CopilotPreciseSearchSources',
      productDescription: 'ProductDescription',
      searchSamples: 'SearchSamples',
      searchSources: 'SearchSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copilotPreciseSearchSources: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataIntelligentSearchConfigCopilotPreciseSearchSources },
      productDescription: 'string',
      searchSamples: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamples },
      searchSources: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSources },
    };
  }

  validate() {
    if(Array.isArray(this.copilotPreciseSearchSources)) {
      $dara.Model.validateArray(this.copilotPreciseSearchSources);
    }
    if(Array.isArray(this.searchSamples)) {
      $dara.Model.validateArray(this.searchSamples);
    }
    if(Array.isArray(this.searchSources)) {
      $dara.Model.validateArray(this.searchSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataMiaosouConfigModelInfos extends $dara.Model {
  /**
   * @remarks
   * Model ID
   * 
   * @example
   * quanmiao-max
   */
  modelId?: string;
  /**
   * @remarks
   * Model name
   * 
   * @example
   * 全妙-Max
   */
  modelName?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      modelName: 'ModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'string',
      modelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataMiaosouConfig extends $dara.Model {
  /**
   * @remarks
   * The number of active documents in the dataset.
   * 
   * @example
   * 1
   */
  maxDocSize?: number;
  /**
   * @remarks
   * Model list supported by intelligent search
   */
  modelInfos?: GetPropertiesResponseBodyDataMiaosouConfigModelInfos[];
  /**
   * @remarks
   * Number of documents used in the dataset
   * 
   * @example
   * 1
   */
  useDocSize?: number;
  static names(): { [key: string]: string } {
    return {
      maxDocSize: 'MaxDocSize',
      modelInfos: 'ModelInfos',
      useDocSize: 'UseDocSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxDocSize: 'number',
      modelInfos: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataMiaosouConfigModelInfos },
      useDocSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.modelInfos)) {
      $dara.Model.validateArray(this.modelInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataSearchSourceList extends $dara.Model {
  /**
   * @remarks
   * Search source type: corresponds to (SystemSearch: system-built-in search, CustomSemanticSearch: custom semantic index search, ThirdSearch: third-party API search)
   * 
   * @example
   * SystemSearch
   */
  code?: string;
  /**
   * @remarks
   * Unique identifier for the data source
   * 
   * @example
   * QuarkCommonNews
   */
  datasetName?: string;
  /**
   * @remarks
   * Search source description
   * 
   * @example
   * 互联网检索
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datasetName: 'DatasetName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datasetName: 'string',
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

export class GetPropertiesResponseBodyDataSearchSources extends $dara.Model {
  /**
   * @remarks
   * Search source name
   * 
   * @example
   * 夸克通用搜索
   */
  label?: string;
  /**
   * @remarks
   * Search source code
   * 
   * @example
   * SystemSearch
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
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

export class GetPropertiesResponseBodyDataUserInfo extends $dara.Model {
  /**
   * @remarks
   * Unique identifier for the workspace
   * 
   * @example
   * 1
   */
  agentId?: string;
  /**
   * @remarks
   * Unique identifier for the tenant
   * 
   * @example
   * 1
   */
  tenantId?: string;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 1
   */
  userId?: string;
  /**
   * @remarks
   * Username
   * 
   * @example
   * admin
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      tenantId: 'TenantId',
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      tenantId: 'string',
      userId: 'string',
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

export class GetPropertiesResponseBodyDataWanxiangImageSizeConfig extends $dara.Model {
  /**
   * @remarks
   * Image aspect ratio
   * 
   * @example
   * 1:1
   */
  name?: string;
  /**
   * @remarks
   * Image size in pixels
   * 
   * @example
   * 1024*1024
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class GetPropertiesResponseBodyDataWanxiangImageStyleConfig extends $dara.Model {
  /**
   * @remarks
   * Style name
   * 
   * @example
   * 默认
   */
  name?: string;
  /**
   * @remarks
   * Style image URL
   * 
   * @example
   * https://img.alicdn.com/imgextra/i4/O1CN01RzKicz1W0YWzYkWcK_!!6000000002726-2-tps-132-104.png
   */
  pic?: string;
  /**
   * @remarks
   * Style code
   * 
   * @example
   * <auto>
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pic: 'Pic',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pic: 'string',
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

export class GetPropertiesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Call configuration
   */
  chatConfig?: { [key: string]: any };
  /**
   * @remarks
   * Console configuration
   */
  consoleConfig?: GetPropertiesResponseBodyDataConsoleConfig;
  /**
   * @remarks
   * General configurations map
   */
  generalConfigMap?: { [key: string]: any };
  /**
   * @remarks
   * Intelligent search configuration
   */
  intelligentSearchConfig?: GetPropertiesResponseBodyDataIntelligentSearchConfig;
  /**
   * @remarks
   * Miaosou configuration
   */
  miaosouConfig?: GetPropertiesResponseBodyDataMiaosouConfig;
  /**
   * @remarks
   * Specified search source list
   */
  searchSourceList?: GetPropertiesResponseBodyDataSearchSourceList[];
  /**
   * @remarks
   * Search source dropdown list
   */
  searchSources?: GetPropertiesResponseBodyDataSearchSources[];
  /**
   * @remarks
   * Whether SLR is authorized
   * 
   * @example
   * true
   */
  slrAuthorized?: boolean;
  /**
   * @remarks
   * User configuration
   */
  userInfo?: GetPropertiesResponseBodyDataUserInfo;
  /**
   * @remarks
   * Wanxiang images
   */
  wanxiangImageSizeConfig?: GetPropertiesResponseBodyDataWanxiangImageSizeConfig[];
  /**
   * @remarks
   * Wanxiang image style configuration
   */
  wanxiangImageStyleConfig?: GetPropertiesResponseBodyDataWanxiangImageStyleConfig[];
  static names(): { [key: string]: string } {
    return {
      chatConfig: 'ChatConfig',
      consoleConfig: 'ConsoleConfig',
      generalConfigMap: 'GeneralConfigMap',
      intelligentSearchConfig: 'IntelligentSearchConfig',
      miaosouConfig: 'MiaosouConfig',
      searchSourceList: 'SearchSourceList',
      searchSources: 'SearchSources',
      slrAuthorized: 'SlrAuthorized',
      userInfo: 'UserInfo',
      wanxiangImageSizeConfig: 'WanxiangImageSizeConfig',
      wanxiangImageStyleConfig: 'WanxiangImageStyleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      consoleConfig: GetPropertiesResponseBodyDataConsoleConfig,
      generalConfigMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      intelligentSearchConfig: GetPropertiesResponseBodyDataIntelligentSearchConfig,
      miaosouConfig: GetPropertiesResponseBodyDataMiaosouConfig,
      searchSourceList: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataSearchSourceList },
      searchSources: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataSearchSources },
      slrAuthorized: 'boolean',
      userInfo: GetPropertiesResponseBodyDataUserInfo,
      wanxiangImageSizeConfig: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataWanxiangImageSizeConfig },
      wanxiangImageStyleConfig: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataWanxiangImageStyleConfig },
    };
  }

  validate() {
    if(this.chatConfig) {
      $dara.Model.validateMap(this.chatConfig);
    }
    if(this.consoleConfig && typeof (this.consoleConfig as any).validate === 'function') {
      (this.consoleConfig as any).validate();
    }
    if(this.generalConfigMap) {
      $dara.Model.validateMap(this.generalConfigMap);
    }
    if(this.intelligentSearchConfig && typeof (this.intelligentSearchConfig as any).validate === 'function') {
      (this.intelligentSearchConfig as any).validate();
    }
    if(this.miaosouConfig && typeof (this.miaosouConfig as any).validate === 'function') {
      (this.miaosouConfig as any).validate();
    }
    if(Array.isArray(this.searchSourceList)) {
      $dara.Model.validateArray(this.searchSourceList);
    }
    if(Array.isArray(this.searchSources)) {
      $dara.Model.validateArray(this.searchSources);
    }
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    if(Array.isArray(this.wanxiangImageSizeConfig)) {
      $dara.Model.validateArray(this.wanxiangImageSizeConfig);
    }
    if(Array.isArray(this.wanxiangImageStyleConfig)) {
      $dara.Model.validateArray(this.wanxiangImageStyleConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @remarks
   * Business data
   */
  data?: GetPropertiesResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error description
   * 
   * @example
   * 数据不存在
   */
  message?: string;
  /**
   * @remarks
   * Unique request identifier
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @remarks
   * Whether successful: true for success, false for failure
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
      data: GetPropertiesResponseBodyData,
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

