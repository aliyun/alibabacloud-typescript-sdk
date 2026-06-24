// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeprecatedTemplatesResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
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

export class ListDeprecatedTemplatesResponseBodyResultTemplate extends $dara.Model {
  /**
   * @remarks
   * The alias configuration of the template.
   * 
   * @example
   * "{}"
   */
  aliases?: string;
  /**
   * @remarks
   * The mappings configuration of the template.
   * 
   * @example
   * "{\\"properties\\":{\\"created_at\\":{\\"format\\":\\"EEE MMM dd HH:mm:ss Z yyyy\\",\\"type\\":\\"date\\"},\\"host_name\\":{\\"type\\":\\"keyword\\"}}}"
   */
  mappings?: string;
  /**
   * @remarks
   * The settings configuration of the template.
   * 
   * @example
   * "{\\"index.number_of_shards\\":\\"1\\"}"
   */
  settings?: string;
  static names(): { [key: string]: string } {
    return {
      aliases: 'aliases',
      mappings: 'mappings',
      settings: 'settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: 'string',
      mappings: 'string',
      settings: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeprecatedTemplatesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the template matches a data stream. Valid values:
   * 
   * - true: matched
   * - false: not matched.
   * 
   * @example
   * false
   */
  dataStream?: boolean;
  /**
   * @remarks
   * The index template information.
   */
  indexPatterns?: string[];
  /**
   * @remarks
   * The index template name.
   * 
   * @example
   * openstore-index-template
   */
  indexTemplate?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 100
   */
  order?: number;
  /**
   * @remarks
   * The index template configuration.
   */
  template?: ListDeprecatedTemplatesResponseBodyResultTemplate;
  /**
   * @remarks
   * The version of the index template.
   * 
   * @example
   * 70000
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dataStream: 'dataStream',
      indexPatterns: 'indexPatterns',
      indexTemplate: 'indexTemplate',
      order: 'order',
      template: 'template',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataStream: 'boolean',
      indexPatterns: { 'type': 'array', 'itemType': 'string' },
      indexTemplate: 'string',
      order: 'number',
      template: ListDeprecatedTemplatesResponseBodyResultTemplate,
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.indexPatterns)) {
      $dara.Model.validateArray(this.indexPatterns);
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

export class ListDeprecatedTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response headers.
   */
  headers?: ListDeprecatedTemplatesResponseBodyHeaders;
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
   * The returned results.
   */
  result?: ListDeprecatedTemplatesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListDeprecatedTemplatesResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDeprecatedTemplatesResponseBodyResult },
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

