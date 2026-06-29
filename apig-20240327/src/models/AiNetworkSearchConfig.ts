// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiPluginStatus } from "./AiPluginStatus";
import { AiNetworkConfigSearchEngine } from "./AiNetworkConfigSearchEngine";


export class AiNetworkSearchConfigSearchRewrite extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable search query rewriting.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The maximum number of search queries after rewriting.
   * 
   * @example
   * 3
   */
  maxCount?: number;
  /**
   * @remarks
   * The name of the model used for rewriting.
   * 
   * @example
   * qwen-max
   */
  modelName?: string;
  /**
   * @remarks
   * The ID of the rewriting service.
   * 
   * @example
   * svc-xxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The timeout period for the rewriting request, in milliseconds.
   * 
   * @example
   * 5000
   */
  timeoutMillisecond?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      maxCount: 'maxCount',
      modelName: 'modelName',
      serviceId: 'serviceId',
      timeoutMillisecond: 'timeoutMillisecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      maxCount: 'number',
      modelName: 'string',
      serviceId: 'string',
      timeoutMillisecond: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiNetworkSearchConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the plug-in feature is enabled by default.
   * 
   * @example
   * true
   */
  defaultEnable?: boolean;
  /**
   * @remarks
   * The default search language code.
   * 
   * @example
   * zh-CN
   */
  defaultLang?: string;
  /**
   * @remarks
   * Specifies whether to add reference sources in the answer.
   * 
   * @example
   * true
   */
  needReference?: boolean;
  /**
   * @remarks
   * The plug-in running status.
   * 
   * **if can be null:**
   * true
   */
  pluginStatus?: AiPluginStatus;
  /**
   * @remarks
   * The format template for reference content. The template must contain at least one %s placeholder.
   * 
   * @example
   * 参考来源:\\n%s
   */
  referenceFormat?: string;
  /**
   * @remarks
   * The reference location.
   * 
   * @example
   * head
   */
  referenceLocation?: string;
  /**
   * @remarks
   * The search engine configuration.
   */
  searchEngineConfig?: AiNetworkConfigSearchEngine;
  /**
   * @remarks
   * The list of search engines (multi-engine configuration).
   */
  searchFrom?: AiNetworkConfigSearchEngine[];
  /**
   * @remarks
   * The search term rewriting configuration.
   */
  searchRewrite?: AiNetworkSearchConfigSearchRewrite;
  static names(): { [key: string]: string } {
    return {
      defaultEnable: 'defaultEnable',
      defaultLang: 'defaultLang',
      needReference: 'needReference',
      pluginStatus: 'pluginStatus',
      referenceFormat: 'referenceFormat',
      referenceLocation: 'referenceLocation',
      searchEngineConfig: 'searchEngineConfig',
      searchFrom: 'searchFrom',
      searchRewrite: 'searchRewrite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultEnable: 'boolean',
      defaultLang: 'string',
      needReference: 'boolean',
      pluginStatus: AiPluginStatus,
      referenceFormat: 'string',
      referenceLocation: 'string',
      searchEngineConfig: AiNetworkConfigSearchEngine,
      searchFrom: { 'type': 'array', 'itemType': AiNetworkConfigSearchEngine },
      searchRewrite: AiNetworkSearchConfigSearchRewrite,
    };
  }

  validate() {
    if(this.pluginStatus && typeof (this.pluginStatus as any).validate === 'function') {
      (this.pluginStatus as any).validate();
    }
    if(this.searchEngineConfig && typeof (this.searchEngineConfig as any).validate === 'function') {
      (this.searchEngineConfig as any).validate();
    }
    if(Array.isArray(this.searchFrom)) {
      $dara.Model.validateArray(this.searchFrom);
    }
    if(this.searchRewrite && typeof (this.searchRewrite as any).validate === 'function') {
      (this.searchRewrite as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

