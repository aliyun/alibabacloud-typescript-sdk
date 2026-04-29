// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawPluginsResponseBodyDiagnostics extends $dara.Model {
  /**
   * @example
   * warn
   */
  level?: string;
  /**
   * @example
   * loaded without install/load-path provenance; treat as untracked local code
   */
  message?: string;
  /**
   * @example
   * openclaw-lark
   */
  pluginId?: string;
  /**
   * @example
   * /home/node/.openclaw/extensions/openclaw-lark/index.js
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      message: 'Message',
      pluginId: 'PluginId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      message: 'string',
      pluginId: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawPluginsResponseBodyPlugins extends $dara.Model {
  channelIds?: string[];
  /**
   * @example
   * Lark/Feishu channel plugin with im/doc/wiki/drive/task/calendar tools
   */
  description?: string;
  /**
   * @example
   * null
   */
  error?: string;
  /**
   * @example
   * openclaw
   */
  format?: string;
  /**
   * @example
   * openclaw-lark
   */
  id?: string;
  /**
   * @example
   * Feishu
   */
  name?: string;
  /**
   * @example
   * global
   */
  origin?: string;
  providerIds?: string[];
  /**
   * @example
   * /home/node/.openclaw/extensions/openclaw-lark/index.js
   */
  source?: string;
  /**
   * @example
   * loaded
   */
  status?: string;
  /**
   * @example
   * 2026.4.7
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      channelIds: 'ChannelIds',
      description: 'Description',
      error: 'Error',
      format: 'Format',
      id: 'Id',
      name: 'Name',
      origin: 'Origin',
      providerIds: 'ProviderIds',
      source: 'Source',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelIds: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      error: 'string',
      format: 'string',
      id: 'string',
      name: 'string',
      origin: 'string',
      providerIds: { 'type': 'array', 'itemType': 'string' },
      source: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channelIds)) {
      $dara.Model.validateArray(this.channelIds);
    }
    if(Array.isArray(this.providerIds)) {
      $dara.Model.validateArray(this.providerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawPluginsResponseBody extends $dara.Model {
  /**
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  diagnostics?: DescribePolarClawPluginsResponseBodyDiagnostics[];
  /**
   * @example
   * successful
   */
  message?: string;
  plugins?: DescribePolarClawPluginsResponseBodyPlugins[];
  /**
   * @example
   * 2281C6C9-CBAB-1AFD-8400-670750CF6025_2212
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      diagnostics: 'Diagnostics',
      message: 'Message',
      plugins: 'Plugins',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      diagnostics: { 'type': 'array', 'itemType': DescribePolarClawPluginsResponseBodyDiagnostics },
      message: 'string',
      plugins: { 'type': 'array', 'itemType': DescribePolarClawPluginsResponseBodyPlugins },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diagnostics)) {
      $dara.Model.validateArray(this.diagnostics);
    }
    if(Array.isArray(this.plugins)) {
      $dara.Model.validateArray(this.plugins);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

