// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiPluginStatus } from "./AiPluginStatus";
import { AiNetworkConfigSearchEngine } from "./AiNetworkConfigSearchEngine";


export class AiNetworkSearchConfigSearchRewrite extends $dara.Model {
  /**
   * @remarks
   * Whether to enable the search query rewrite feature.
   */
  enable?: boolean;
  /**
   * @remarks
   * The maximum number of rewritten queries to generate.
   */
  maxCount?: number;
  /**
   * @remarks
   * The name of the model to use for query rewriting.
   */
  modelName?: string;
  /**
   * @remarks
   * The ID of the query rewriting service.
   */
  serviceId?: string;
  /**
   * @remarks
   * Timeout for the query rewriting operation, in milliseconds.
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
   * Whether the network search feature is enabled by default.
   */
  defaultEnable?: boolean;
  /**
   * @remarks
   * The default language for the search query.
   */
  defaultLang?: string;
  /**
   * @remarks
   * Whether to include references in the search results.
   */
  needReference?: boolean;
  /**
   * @remarks
   * The status of the AI plugin.
   * 
   * **if can be null:**
   * true
   */
  pluginStatus?: AiPluginStatus;
  /**
   * @remarks
   * The format of the references.
   */
  referenceFormat?: string;
  /**
   * @remarks
   * The location of the references in the response.
   */
  referenceLocation?: string;
  /**
   * @remarks
   * The search engine configuration.
   */
  searchEngineConfig?: AiNetworkConfigSearchEngine;
  /**
   * @remarks
   * A list of search engine configurations for the network search.
   */
  searchFrom?: AiNetworkConfigSearchEngine[];
  /**
   * @remarks
   * Configuration for search query rewriting.
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

