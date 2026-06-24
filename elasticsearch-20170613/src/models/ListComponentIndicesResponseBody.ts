// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComponentIndicesResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentIndicesResponseBodyResultContentTemplateSettingsIndexLifecycle extends $dara.Model {
  /**
   * @remarks
   * The name of the lifecycle policy.
   * 
   * @example
   * synthetics
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

export class ListComponentIndicesResponseBodyResultContentTemplateSettingsIndex extends $dara.Model {
  /**
   * @remarks
   * The index compression method. Valid values:
   * 
   * - LZ4: the default compression algorithm of Elasticsearch. It provides fast compression and decompression but a relatively lower compression ratio.
   * - best_compression: uses the best_compression algorithm for compression, which provides a higher compression ratio.
   * 
   * @example
   * best_compression
   */
  codec?: string;
  /**
   * @remarks
   * The index lifecycle configuration.
   */
  lifecycle?: ListComponentIndicesResponseBodyResultContentTemplateSettingsIndexLifecycle;
  static names(): { [key: string]: string } {
    return {
      codec: 'codec',
      lifecycle: 'lifecycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codec: 'string',
      lifecycle: ListComponentIndicesResponseBodyResultContentTemplateSettingsIndexLifecycle,
    };
  }

  validate() {
    if(this.lifecycle && typeof (this.lifecycle as any).validate === 'function') {
      (this.lifecycle as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentIndicesResponseBodyResultContentTemplateSettings extends $dara.Model {
  /**
   * @remarks
   * The index information.
   */
  index?: ListComponentIndicesResponseBodyResultContentTemplateSettingsIndex;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: ListComponentIndicesResponseBodyResultContentTemplateSettingsIndex,
    };
  }

  validate() {
    if(this.index && typeof (this.index as any).validate === 'function') {
      (this.index as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentIndicesResponseBodyResultContentTemplate extends $dara.Model {
  /**
   * @remarks
   * The settings configuration of the template.
   */
  settings?: ListComponentIndicesResponseBodyResultContentTemplateSettings;
  static names(): { [key: string]: string } {
    return {
      settings: 'settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      settings: ListComponentIndicesResponseBodyResultContentTemplateSettings,
    };
  }

  validate() {
    if(this.settings && typeof (this.settings as any).validate === 'function') {
      (this.settings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentIndicesResponseBodyResultContent extends $dara.Model {
  /**
   * @remarks
   * The metadata, which is used to store information such as remarks.
   * 
   * @example
   * { "description": "set number of shards to one" }
   */
  meta?: { [key: string]: any };
  /**
   * @remarks
   * The composable template object.
   */
  template?: ListComponentIndicesResponseBodyResultContentTemplate;
  /**
   * @remarks
   * The version of the composable template.
   * 
   * @example
   * 0
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      meta: '_meta',
      template: 'template',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      template: ListComponentIndicesResponseBodyResultContentTemplate,
      version: 'number',
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentIndicesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The information about the index templates that reference this composable template.
   */
  composed?: string[];
  /**
   * @remarks
   * The content of the composable template.
   */
  content?: ListComponentIndicesResponseBodyResultContent;
  /**
   * @remarks
   * The name of the composable template.
   * 
   * @example
   * synthetics-settings
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      composed: 'composed',
      content: 'content',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      composed: { 'type': 'array', 'itemType': 'string' },
      content: ListComponentIndicesResponseBodyResultContent,
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.composed)) {
      $dara.Model.validateArray(this.composed);
    }
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentIndicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response headers.
   */
  headers?: ListComponentIndicesResponseBodyHeaders;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DCC47D9
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the returned results.
   */
  result?: ListComponentIndicesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListComponentIndicesResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListComponentIndicesResponseBodyResult },
    };
  }

  validate() {
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

