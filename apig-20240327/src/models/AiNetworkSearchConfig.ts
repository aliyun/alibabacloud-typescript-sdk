// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiPluginStatus } from "./AiPluginStatus";
import { AiNetworkConfigSearchEngine } from "./AiNetworkConfigSearchEngine";


export class AiNetworkSearchConfigSearchRewrite extends $dara.Model {
  enable?: boolean;
  maxCount?: number;
  modelName?: string;
  serviceId?: string;
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
  defaultEnable?: boolean;
  defaultLang?: string;
  needReference?: boolean;
  /**
   * **if can be null:**
   * true
   */
  pluginStatus?: AiPluginStatus;
  referenceFormat?: string;
  referenceLocation?: string;
  searchEngineConfig?: AiNetworkConfigSearchEngine;
  searchFrom?: AiNetworkConfigSearchEngine[];
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

