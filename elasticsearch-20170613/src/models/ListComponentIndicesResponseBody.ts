// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComponentIndicesResponseBodyHeaders extends $dara.Model {
  /**
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
   * @example
   * best_compression
   */
  codec?: string;
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
   * @example
   * { "description": "set number of shards to one" }
   */
  meta?: { [key: string]: any };
  template?: ListComponentIndicesResponseBodyResultContentTemplate;
  /**
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
  composed?: string[];
  content?: ListComponentIndicesResponseBodyResultContent;
  /**
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
  headers?: ListComponentIndicesResponseBodyHeaders;
  /**
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DCC47D9
   */
  requestId?: string;
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

